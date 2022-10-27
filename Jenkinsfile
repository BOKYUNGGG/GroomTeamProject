pipeline {
    agent any
	tools {
			nodejs "NodeJS 19.0.0"
			docker "docker-latest"
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
        stage('Docker') {
            steps {
                sh 'docker image ls'   
            }
        }
    }
}