pipeline {
  agent any

  environment {
    DOCKERHUB_USERNAME = 'yesiamkriti'
    DOCKERHUB_PASSWORD = credentials('dockerhub') // Add in Jenkins credentials
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies - Backend') {
      steps {
        dir('backend') {
          bat 'npm install'
        }
      }
    }

    stage('Install Dependencies - Frontend') {
      steps {
        dir('frontend') {
          bat 'npm install'
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        script {
          bat '''
            docker build -t shopperoo-backend -t yesiamkriti/shopperoo-backend:latest ./backend
            docker build -t shopperoo-frontend -t yesiamkriti/shopperoo-frontend:latest ./frontend
          '''
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        script {
          bat '''
            echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin
            docker push yesiamkriti/shopperoo-backend:latest
            docker push yesiamkriti/shopperoo-frontend:latest
          '''
        }
      }
    }

    stage('Deploy with Docker Compose') {
      steps {
        bat 'docker-compose down || true'
        bat 'docker-compose up -d --build'
      }
    }
  }

  post {
    success {
      echo 'Congratulations 🎉 CI/CD Pipeline completed successfully!'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}