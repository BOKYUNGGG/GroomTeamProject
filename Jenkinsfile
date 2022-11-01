pipeline{
    agent{
        kubernetes {
            yamlFile 'kaniko-definition.yaml'
        }
    }
    stages{
        stage('Build and Push'){
            steps{
                container('kaniko'){
                    sh '''
                    /kaniko/executor --context `pwd` \
                    --destination=457665080883.dkr.ecr.ap-northeast-2.amazonaws.com/react-frontend \
                    --dockerfile `pwd`/Dockerfile 
                    '''
                }
            }
        }    
    }
}
