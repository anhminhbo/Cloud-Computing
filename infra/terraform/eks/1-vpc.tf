module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.3"

  name = "cloud-computing"
  cidr = "30.0.1.0/24"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["30.0.1.0/26", "30.0.1.64/26"]
  public_subnets  = ["30.0.1.128/26", "30.0.1.192/26"]

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
  }
  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = "1"
  }

  enable_nat_gateway     = true
  single_nat_gateway     = true
  one_nat_gateway_per_az = false

  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Project = "cloud-computing",
    Environment = "production"
  }
}
