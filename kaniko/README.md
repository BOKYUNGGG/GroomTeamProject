# dockerhub secret
- dockerhub registry에 push하고 싶은 경우
```code
> $ kubectl create secret docker-registry regcred \
--docker-server=https://index.docker.io/v1/ \
--docker-username=도커계정이름 \
--docker-password=도커엑세스토큰 \
--docker-email=이메일
```

# AWS ECR secret
- AWS ECR에 푸쉬하고 싶은 경우
```code
> $ kubectl create secret docker-registry aws-cred \
--docker-server=<계정번호>.dkr.ecr.<리전>.amazonaws.com \
--docker-username=AWS \
--docker-password=${aws ecr get-login-password --region <리전>}
```
