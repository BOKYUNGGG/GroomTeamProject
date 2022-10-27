pipeline {
    agent any
	tools {
			nodejs "NodeJS 19.0.0"
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
        stage('Deploy') {
            steps {
                sh 'ls -al'   
				echo "deploy"
            }
        }
    }
}