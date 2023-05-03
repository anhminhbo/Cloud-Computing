module "security_group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "~> 4.0"

  name        = "rds-cloud-computing-sg"
  description = "RDS PostgreSQL security group"
#   vpc_id      = var.vpc_id

  # ingress
  ingress_with_cidr_blocks = [
    {
      from_port   = 5432
      to_port     = 5432
      protocol    = "tcp"
      description = "Allow network from EKS in another aws account"
    #   description = "PostgreSQL access from within K8s worker nodes"
    #   cidr_blocks = var.cluster_worker_sg_id
      cidr_blocks = "${var.eks_nat_gateway_eip[0]}/32"
    },
  ]

  tags = {
    Terraform   = "true",
    Project     = "cloud-computing",
    Environment = "production",
  }
}
