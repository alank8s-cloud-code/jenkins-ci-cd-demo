pipeline {
    agent any

    environment {
        IMAGE_NAME = "mrsuraj542/nodejs-demo-app"
        CONTAINER_NAME = "nodejs-demo-container"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/alank8s-cloud-code/nodejs-demo-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }
}