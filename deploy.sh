#!/bin/bash
PROFILE="admin-minh"

# Replace the following variables with your own values
BE_ECR_REPO_NAME="cloud-computing/be"
FE_ECR_REPO_NAME="cloud-computing/fe"

AWS_REGION="us-east-1"


# Retrieve the latest tags of the repository
BE_LATEST_TAG=$(aws ecr-public describe-images --repository-name $BE_ECR_REPO_NAME --region $AWS_REGION --profile $PROFILE  --query "sort_by(imageDetails,& imagePushedAt)[-1].imageTags[0]" --output text)
FE_LATEST_TAG=$(aws ecr-public describe-images --repository-name $FE_ECR_REPO_NAME --region $AWS_REGION --profile $PROFILE  --query "sort_by(imageDetails,& imagePushedAt)[-1].imageTags[0]" --output text)

# Deploy
bash -x deploy_fe.sh $FE_LATEST_TAG &
bash -x deploy_be.sh $BE_LATEST_TAG


echo "Deploy completed."