# Dev Ops Deploiement

This is a project to deploy a simple EC2 instance using AWS CDKTF.

## Prerequisites

- Node.js version 18.0 or higher
- TypeScript version 5.4.2 or higher
- CDKTF version 0.20.4 or higher
- AWS Provider for CDKTF version 19.9.0

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`

## Usage

- To deploy the stack, run `cdktf deploy`
- To destroy the stack, run `cdktf destroy`

## Project Structure

- `main.ts`: This is the entry point of the application. It defines a Terraform stack with an AWS provider, a security group, and an EC2 instance.
- `.github/workflows`: This directory contains the GitHub Actions workflow file that runs the CDKTF commands in order to deploy the stack to AWS.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MPL-2.0 License - see the LICENSE.md file for details