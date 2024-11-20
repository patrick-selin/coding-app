terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.76.0"
    }
  }

  required_version = ">= 1.9.7"
}

provider "aws" {
  region = "eu-north-1"
}

resource "aws_instance" "coding_app_server" {
  ami           = "ami-0658158d7ba8fd573"
  instance_type = "t3.micro"

  tags = {
    Name = "hello-coding-app-staging"
  }
}