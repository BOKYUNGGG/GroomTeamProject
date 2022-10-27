pipeline {
    agent {
        docker {
            image 'node:16-alpine'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
		stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}