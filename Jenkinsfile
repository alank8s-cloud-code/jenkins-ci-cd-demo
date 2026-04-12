pipeline {
    agent any

    environment {
        IMAGE_NAME = "mrsuraj542/nodejs-demo-app"
        CONTAINER_NAME = "nodejs-demo-container"
    }

    stages {

        stage('Clone Code') {
            steps {
                echo "Cloning latest code..."
                git branch: 'main', url: 'https://github.com/alank8s-cloud-code/jenkins-ci-cd-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "Stopping old container..."
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                echo "Starting new container..."
                sh '''
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD Pipeline Success - App Deployed!"
        }
        failure {
            echo "❌ Pipeline Failed - Check Logs"
        }
    }
}
