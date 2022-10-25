pipeline {
    agent any
    stages {
        stage('Install'){
            steps{
                sh 'npm intall'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}