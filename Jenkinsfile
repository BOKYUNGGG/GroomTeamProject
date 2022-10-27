pipeline {
    agent none
    //기본적으로 체크아웃을 하지 않는 옵션
    options { skipDefaultCheckout(true) }
    stages {
        stage('Checkout repository') {
            agent any
            steps {
                checkout scm
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:16.6.0'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Docker build') {
            agent any
            steps {
                sh 'docker build -t {image_name}:latest .'
            }
        }
        stage('Docker run') {
            agent any
            steps {
                sh 'docker ps'
                sh 'docker container ls -a'
                sh 'docker images'
            }
        }
    }
}