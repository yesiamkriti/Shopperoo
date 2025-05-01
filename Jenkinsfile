pipeline {
  agent any

  environment {
    DOCKERHUB_USERNAME = 'yesiamkriti'
    DOCKERHUB_PASSWORD = credentials('dockerhub') // You must create this secret in Jenkins
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies - Backend') {
      agent {
        docker {
          image 'node:18'
        }
      }
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Install Dependencies - Frontend') {
      agent {
        docker {
          image 'node:18'
        }
      }
      steps {
        dir('frontend') {
          sh 'npm install'
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        script {
          sh '''
            docker build -t shopperoo-backend -t yesiamkriti/shopperoo-backend:latest ./backend
            docker build -t shopperoo-frontend -t yesiamkriti/shopperoo-frontend:latest ./frontend
          '''
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        script {
          sh '''
            echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin
            docker push yesiamkriti/shopperoo-backend:latest
            docker push yesiamkriti/shopperoo-frontend:latest
          '''
        }
      }
    }

    stage('Deploy with Docker Compose') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }
  }

  post {
    success {
      echo '🎉 CI/CD Pipeline completed successfully!'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}
