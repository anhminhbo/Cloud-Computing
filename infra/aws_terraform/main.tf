provider "aws" {
  region  = "us-east-1"
  profile = "admin-minh"
}


# module "eks" {
#   source = "./eks"

#   // Pass provider variables to the child module
#   aws_region  = "us-east-1"
#   aws_profile = "admin-minh"
# }

module "ecr" {
  source = "./ecr"
}

# provider "aws" {
#   alias   = "rds"
#   region  = "us-east-1"
#   profile = "phat-rds-cloud-computing"
# }

# # From different account
# module "rds" {
#   source               = "./rds"
#   cluster_worker_sg_id = module.eks.cluster_worker_sg_id
#   eks_nat_gateway_eip  = module.eks.nat_gateway_eip
#   vpc_public_subnets   = module.eks.vpc_public_subnets
#   vpc_id               = module.eks.vpc_id

#   providers = {
#     aws = aws.rds
#   }
# }
