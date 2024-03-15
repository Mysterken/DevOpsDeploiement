# Learn CDKTF

This is a project to learn and understand the Cloud Development Kit for Terraform (CDKTF). The project is written in TypeScript and uses AWS as the cloud provider.

## Prerequisites

- Node.js version 18.0 or higher
- TypeScript version 5.4.2 or higher
- CDKTF version 0.20.4 or higher
- AWS Provider for CDKTF version 19.9.0

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`

## Usage

- To get the CDKTF constructs for your configured providers, run `npm run get`
- To compile the TypeScript code, run `npm run compile`
- To synthesize the CDKTF application into Terraform JSON, run `npm run synth`
- To watch for changes and recompile, run `npm run watch`
- To run the tests, run `npm run test`
- To watch for changes and rerun tests, run `npm run test:watch`
- To upgrade CDKTF and CDKTF CLI to the latest version, run `npm run upgrade`
- To upgrade CDKTF and CDKTF CLI to the next version, run `npm run upgrade:next`

## Project Structure

- `main.ts`: This is the entry point of the application. It defines a Terraform stack with an AWS provider, a security group, and an EC2 instance.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MPL-2.0 License - see the LICENSE.md file for details