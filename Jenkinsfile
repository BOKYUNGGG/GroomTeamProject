pipeline {
    agent any
    tools {
        nodeks "NodeJS 19.0.0"
    }
    stages {
        stage('INSTALL'){
            steps{
                sh 'npm install'
            }
        }
        stage('BUILD'){
            steps{
                sh 'npm run build'
            }
        }

    }
}