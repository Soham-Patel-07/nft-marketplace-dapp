# Installation Guide

This guide will help you set up the NFT Marketplace project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Run `node --version` to verify

2. **npm** (v8 or higher)
   - Comes with Node.js
   - Run `npm --version` to verify

3. **Git**
   - Download from: https://git-scm.com/
   - Run `git --version` to verify

4. **MetaMask Browser Extension**
   - Download from: https://metamask.io/
   - Install in your browser (Chrome/Firefox/Brave)

## Installation Steps

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd nftmarket
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Hardhat and ethers
- TailwindCSS
- Axios for API calls

### Step 3: Environment Configuration

1. Create a `.env` file in the root directory
2. Add the following variables:

```env
# Pinata API Keys (for IPFS storage)
REACT_APP_PINATA_KEY=your_pinata_key
REACT_APP_PINATA_SECRET=your_pinata_secret

# Optional: For testnet deployment
PRIVATE_KEY=your_wallet_private_key
ALCHEMY_SEPOLIA_URL=your_sepolia_url
ALCHEMY_MUMBAI_URL=your_mumbai_url
```

**Note:** See [ENVIRONMENT.md](ENVIRONMENT.md) for details on getting these keys.

### Step 4: Verify Installation

```bash
# Check package.json exists
ls package.json

# Check node_modules installed
ls node_modules
```

## Running the Application

### Step 1: Start Hardhat Node

Open a new terminal and run:

```bash
npm run node
```

You should see output like:
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545
```

**Keep this terminal open while developing.**

### Step 2: Deploy Smart Contract

Open a new terminal and run:

```bash
npm run deploy
```

This will:
- Compile the Solidity contract
- Deploy to local Hardhat network
- Save the contract address to `src/Marketplace.json`

### Step 3: Start Frontend

Open a new terminal and run:

```bash
npm start
```

The application will open at `http://localhost:3000`

## Connecting MetaMask

After starting the application:

1. Click "Connect Wallet" button
2. MetaMask will prompt for connection
3. Approve the connection
4. Add Hardhat network if not already added:
   - Network Name: Hardhat
   - RPC URL: http://localhost:8545
   - Chain ID: 1337

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Another process may be using port 3000
   - Kill the process or use a different port

2. **Node.js version error**
   - Use nvm to switch Node.js versions
   - Recommended: Node.js v16 or v18

3. **MetaMask not connecting**
   - Ensure Hardhat node is running
   - Check MetaMask is on correct network (Chain ID: 1337)

4. **npm install fails**
   - Delete node_modules and package-lock.json
   - Run npm install again

## Next Steps

After installation, see [DEPLOYMENT.md](DEPLOYMENT.md) for more details on:
- Smart contract deployment
- Testing the application
- Deploying to testnet