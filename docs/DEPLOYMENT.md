# Deployment Guide

This guide covers deploying the NFT Marketplace smart contract and running the application.

## Local Development Deployment

### Prerequisites

- Node.js and npm installed
- MetaMask browser extension
- Terminal/Command Prompt access

### Step 1: Start Hardhat Local Node

Hardhat provides a local Ethereum blockchain for development.

```bash
npm run node
```

Expected output:
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
...
```

**Important:** Keep this terminal running!

The node provides 20 test accounts with 10000 ETH each for testing.

### Step 2: Deploy Smart Contract

Open a new terminal and run:

```bash
npm run deploy
```

Expected output:
```
Deploying NFTMarketplace contract...
Deployer address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Contract address saved to src/Marketplace.json
```

The deployment script:
1. Compiles the Solidity contract
2. Deploys to local Hardhat network
3. Saves contract address and ABI to `src/Marketplace.json`

### Step 3: Configure MetaMask

1. Open MetaMask in your browser
2. Click the network dropdown (top right)
3. Select "Add Network"
4. Fill in the following:
   - **Network Name:** Hardhat Local
   - **New RPC URL:** http://localhost:8545
   - **Chain ID:** 1337
   - **Currency Symbol:** ETH

5. Click "Save"

### Step 4: Import Test Account

To test with the deployer account:

1. Click your account icon in MetaMask
2. Select "Import Account"
3. Copy the private key from Hardhat terminal output:
   ```
   Private key #0: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
   ```
4. Paste and import

Now your wallet is connected to the local Hardhat network!

### Step 5: Run Frontend

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Deploying to Testnet

You can deploy to public testnets like Sepolia or Mumbai (Polygon).

### Step 1: Get Testnet ETH

- **Sepolia:** Use a faucet (https://sepoliafaucet.com)
- **Mumbai:** Use a faucet (https://mumbaifaucet.com)

### Step 2: Update Environment Variables

```env
REACT_APP_PINATA_KEY=your_key
REACT_APP_PINATA_SECRET=your_secret
PRIVATE_KEY=your_wallet_private_key
ALCHEMY_SEPOLIA_URL=https://eth-sepolia.alchemyapi.io/v2/YOUR_KEY
```

### Step 3: Deploy to Testnet

```bash
# Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

# Deploy to Mumbai
npx hardhat run scripts/deploy.js --network mumbai
```

### Step 4: Update Frontend Network

After deploying to testnet, update MetaMask to switch to the testnet network.

## Verifying Deployment

### Check Contract Deployment

1. Open MetaMask
2. Add the deployed contract address to "Add Token"
3. You should see the NFT token

### Test Functionality

1. Connect your wallet
2. Navigate to "List My NFT"
3. Fill in NFT details and upload image
4. Click "List NFT"
5. Approve the transaction in MetaMask
6. After confirmation, view NFT on Marketplace

## Contract Functions

The deployed contract includes:

| Function | Description |
|----------|-------------|
| `createToken()` | Mint and list new NFT (costs listing fee) |
| `getAllNFTs()` | View all NFTs on marketplace |
| `getMyNFTs()` | View your owned NFTs |
| `executeSale()` | Purchase an NFT |
| `getListPrice()` | Get current listing fee |

## Troubleshooting

### "Contract not found" Error

- Ensure Hardhat node is running (`npm run node`)
- Ensure contract is deployed (`npm run deploy`)
- Check MetaMask is connected to Hardhat network (Chain ID: 1337)

### Transaction Fails

- Ensure you have enough test ETH
- Check MetaMask is on the correct network
- Review contract function requirements

### MetaMask Connection Issues

- Refresh the page
- Disconnect and reconnect wallet
- Check browser console for errors