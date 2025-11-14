pipeline {
    agent any

    environment {
        AWS_REGION     = 'eu-north-1'
        FRONTEND_REPO  = 'frontend-repo'
        BACKEND_REPO   = 'backend-repo'
        FRONTEND_ECR   = "060795940192.dkr.ecr.${AWS_REGION}.amazonaws.com/${FRONTEND_REPO}"
        BACKEND_ECR    = "060795940192.dkr.ecr.${AWS_REGION}.amazonaws.com/${BACKEND_REPO}"
        DEPLOY_SERVER  = "ec2-user@556.228.7.53"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Fetching latest code..."
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend-app -f frontend/Dockerfile ./frontend'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t backend-app -f backend/Dockerfile ./backend'
            }
        }

        stage('Login to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $FRONTEND_ECR
                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $BACKEND_ECR
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                sh '''
                docker tag frontend-app:latest $FRONTEND_ECR:${BUILD_NUMBER}
                docker push $FRONTEND_ECR:${BUILD_NUMBER}

                docker tag backend-app:latest $BACKEND_ECR:${BUILD_NUMBER}
                docker push $BACKEND_ECR:${BUILD_NUMBER}
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                sshagent (credentials: ['ec2-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no $DEPLOY_SERVER '
                        echo "Logging into ECR..."
                        aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $FRONTEND_ECR
                        aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $BACKEND_ECR

                        echo "Stopping old containers..."
                        docker stop frontend || true && docker rm frontend || true
                        docker stop backend || true && docker rm backend || true

                        echo "Pulling new images..."
                        docker pull $FRONTEND_ECR:${BUILD_NUMBER}
                        docker pull $BACKEND_ECR:${BUILD_NUMBER}

                        echo "Starting new containers..."
                        docker run -d -p 80:80 --name frontend $FRONTEND_ECR:${BUILD_NUMBER}
                        docker run -d -p 5454:5454 --name backend $BACKEND_ECR:${BUILD_NUMBER}
                    '
                    """
                }
            }
        }

        stage('Deploy Monitoring (Nagios)') {
            steps {
                sshagent (credentials: ['ec2-ssh-key']) {
                    sh """
                        # Ensure /opt/monitoring exists and ec2-user can write to it
                        ssh -o StrictHostKeyChecking=no ec2-user@51.20.74.216 '
                            sudo mkdir -p /opt/monitoring
                            sudo chown ec2-user:ec2-user /opt/monitoring
                        '

                        # Upload monitoring folder to the server
                        scp -r -o StrictHostKeyChecking=no monitoring ec2-user@51.20.74.216:/opt/

                        # Restart the monitoring stack
                        ssh -o StrictHostKeyChecking=no ec2-user@51.20.74.216 '
                            echo "Deploying Nagios monitoring..."
                            cd /opt/monitoring
                            if command -v docker-compose >/dev/null 2>&1; then
                                docker-compose down || true
                                docker-compose up -d
                            else
                                docker compose down || true
                                docker compose up -d
                            fi
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! Nagios is live at http://56.228.7.53:8080"
        }
        failure {
            echo "❌ Deployment failed. Check Jenkins logs."
        }
    }
}
