# Full Stack Decentralized Blog on Arweave

This is a full stack decentralized blog on Arweave, built using a Smartweave smart contract and a frontend built with Typescript and Next.js. The smart contract runs on Smartweave via Warp Protocol and enables all of the state for this app to be stored directly on-chain, while also allowing executing arbitrary amounts of compute without additional fees.

In this full stack decentralized blog, I implemented CRUD operations (Create, Read, Update, and Delete) with a Smartweave smart contract and the blog post views in Next.js.

## Features

The Smartweave smart contract:

- is written in JavaScript and the contract is deployable to `testnet` or `mainnet` through a node script
- implements a basic authorization rule that only allows the blog owner to call any of the functions by setting the contract deployer as the owner
- is implemented via Warp Protocol allowing enhancements such as speed, caching, etc., from its easy-to-use SDK
- can directly process rich content / large files
- takes the developer mind off about gas optimizations

The Next.js frontend:

- implements a view to see the posts created by the user
- implements a view to allow users to create posts

## Getting Started

### Prerequisites

To run this app, you should have:

- Node.js installed on your machine
- [ArConnect](https://www.arconnect.io/) wallet extension

### Deploying and Testing on Mainnet

1. Retrieve Arweave tokens (available from the faucet [here](https://faucet.arweave.net/) or from an exchange).
2. Install the [ArConnect wallet](https://www.arconnect.io/).
3. Download and save your wallet in a file named `wallet.json`.

### Running This Project

To run the app, follow these steps:

1. Clone the project:

```sh
git clone git@github.com:danbamikiya//fullstack-arweave-blog.git
```

2. Change into the directory and install the dependencies:

```sh
cd fullstack-arweave-blog
npm install
```

or

```sh
cd fullstack-arweave-blog
npm i
```

3. Deploy the contract to testnet. From the `warp` directory, run the following command:

```sh
node deploy
```

4. Run the Next.js app. From the root directory, run the following command:

```sh
npm run dev
```

### Running on Mainnet

1. Set local environment variable to mainnet in the terminal session you will be deploying from:

```sh
export WARPENV=mainnet
```

2. Create a `.env.local` file in the root of the app and add the following environment variable:

```
NEXT_PUBLIC_WARPENV=mainnet
```

3. Deploy the contract to testnet. From the `warp` directory, run the following command:

```sh
node deploy
```

4. Run the Next.js app. From the root directory, run the following command:

```sh
npm run dev
```
