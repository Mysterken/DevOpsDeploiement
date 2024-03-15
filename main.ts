import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
import {SecurityGroup} from "@cdktf/provider-aws/lib/security-group";


class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "AWS", {
      region: "eu-west-3",
    });

    // allow ssh and http
    const sg = new SecurityGroup(this, "allow_ssh", {
      name: "cdktf-example",
      vpcId: "vpc-0f293b2f116952cad",
      ingress: [{
        protocol: "tcp",
        fromPort: 80,
        toPort: 80,
        cidrBlocks: ["0.0.0.0/0"]
      },{
        protocol: "tcp",
        fromPort: 22,
        toPort: 22,
        cidrBlocks: ["0.0.0.0/0"]
      },{
        protocol: "tcp",
        fromPort: 443,
        toPort: 443,
        cidrBlocks: ["0.0.0.0/0"]
      }],
      egress: [{
        protocol: "-1",
        fromPort: 0,
        toPort: 0,
        cidrBlocks: ["0.0.0.0/0"]
      }],
    });

    const ec2Instance = new Instance(this, "compute", {
      ami: "ami-06f64fb0331ab61a0",
      instanceType: "t2.micro",
        tags: {
            Name: "dev-ops-deploiement",
        },
      vpcSecurityGroupIds: [sg.id],
      userData: `#!/bin/bash
      sudo yum update -y
      sudo yum install -y git yum-utils docker
      
      sudo systemctl start docker
      sudo usermod -aG docker $USER
      newgrp docker
      
      DOCKER_CONFIG=$\${DOCKER_CONFIG:-$HOME/.docker}
      mkdir -p $DOCKER_CONFIG/cli-plugins
      curl -SL https://github.com/docker/compose/releases/download/v2.24.7/docker-compose-linux-x86_64 -o $$DOCKER_CONFIG/cli-plugins/docker-compose
      chmod +x $$DOCKER_CONFIG/cli-plugins/docker-compose
      
      git clone https://github.com/dunglas/symfony-docker.git
      cd symfony-docker
      
      docker compose build --no-cache
      docker compose up --pull always -d --wait`
    });

    new TerraformOutput(this, "public_ip", {
      value: ec2Instance.publicIp,
    });
  }
}

const app = new App();
new MyStack(app, "aws_instance");


app.synth();
