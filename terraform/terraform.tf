terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.73"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "eu-north-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-xxx"
  instance_type = "t3.micro"

  tags = {
    Name = "hello"
  }
}