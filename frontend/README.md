# How to build and deploy

- Build docker image

```
docker build -t public.ecr.aws/y4r3b5d9/cloud-computing/fe:latest .
```

- Authentication:

```
aws ecr-public get-login-password --profile admin-minh --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/y4r3b5d9
```

- Push docker image to ECR

```
docker push public.ecr.aws/y4r3b5d9/cloud-computing/fe:latest
```

