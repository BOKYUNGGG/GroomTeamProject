pipeline {
    agent {
        kubernetes {
            defaultContainer 'jnlp'
            yamlFile 'agentpod.yaml'
        }
    }
    stages {
        stage('Build') {
            steps {
				step {
					container('NodeJS') {
						sh 'npm install'
					}
				}
                step {
					container('NodeJS') {
						sh 'npm run build'
					}
				}
            }
        }
        stage('Docker Build') {
            steps {
                container('docker') {
                    sh "docker build -t frontendimage ."
                }
            }
        }
    }
}