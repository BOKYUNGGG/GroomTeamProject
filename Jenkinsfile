pipeline {
    agent {
        docker {
            image 'node:16-alpine'
			args '-p 3001:3000' 
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