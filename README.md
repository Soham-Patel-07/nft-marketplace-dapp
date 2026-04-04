# NFT Marketplace (Blockchain Technology)

A decentralized NFT marketplace built with Ethereum blockchain, Solidity smart contracts, React frontend, and IPFS storage.

## Overview

This project is a fully functional NFT marketplace that allows users to:
- **Mint NFTs** - Create and mint their own NFTs
- **List for Sale** - List NFTs on the marketplace
- **Buy NFTs** - Purchase NFTs from other sellers
- **View Profile** - View owned NFTs and their values

## Company & Timeline

- **Company:** Advait Solutions, Surat, India
- **Duration:** January - April 2023
- **Project Type:** BE Computer Engineering Final Semester Internship

## Features

- Create and mint NFTs with metadata stored on IPFS
- List NFTs for sale with custom pricing
- Buy NFTs using cryptocurrency (ETH)
- View user profile with owned NFTs
- Secure wallet connection via MetaMask
- Decentralized storage using IPFS (Pinata)
- Local blockchain development with Hardhats

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Solidity** | Smart contract development |
| **Hardhat** | Local blockchain & deployment |
| **React** | Frontend framework |
| **TailwindCSS** | Styling |
| **Ethers.js** | Blockchain interaction |
| **IPFS/Pinata** | Decentralized file storage |
| **MetaMask** | Wallet connection |
| **OpenZeppelin** | ERC721 token standards |

## Screenshots

### 1. Adding NFT with Price, Name, Description
![Adding NFT](Screenshot/Adding%20NFT%20with%20price%2C%20name%2C%20description%20.png)

### 2. Added NFT and Show in Marketplace
![Marketplace](Screenshot/Added%20NFT%20and%20show%20in%20Marketplace%20.png)

### 3. User Profile NFT Marketplace
![Profile](Screenshot/User%20Profile%20NFTmarketplace%20.png)

### 4. Show NFT Details in Profile
![NFT Details](Screenshot/Show%20NFT%20details%20in%20profile%20.png)

## Quick Start

```bash
# Clone and install
npm install

# Start Hardhat node (Terminal 1)
npm run node

# Deploy contract (Terminal 2)
npm run deploy

# Start frontend (Terminal 3)
npm start
```

## Documentation

For detailed setup and deployment instructions, see the [docs/](docs/) folder:

- [Installation Guide](docs/INSTALLATION.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Environment Setup](docs/ENVIRONMENT.md)
- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) v8 or higher
- [Git](https://git-scm.com/)
- [MetaMask](https://metamask.io/) browser extension

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nftmarket
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your Pinata API keys
   - See [Environment Setup](docs/ENVIRONMENT.md) for details

4. **Start local blockchain:**
   ```bash
   npm run node
   ```

5. **Deploy smart contract:**
   ```bash
   npm run deploy
   ```

6. **Run the frontend:**
   ```bash
   npm start
   ```

7. **Open in browser:**
   Navigate to `http://localhost:3000`

## Network Configuration

### Local Development (Hardhat)
- **RPC URL:** `http://localhost:8545`
- **Chain ID:** `1337`
- **Network Name:** Hardhat

### MetaMask Setup
1. Open MetaMask
2. Go to Networks → Add Network
3. Enter the details above
4. Import a Hardhat test account

## Project Structure

```
nftmarket/
├── contracts/           # Solidity smart contracts
│   └── NFTMarketplace.sol
├── src/                 # React frontend
│   ├── components/     # React components
│   ├── App.js          # Main app component
│   ├── pinata.js       # IPFS upload functions
│   └── utils.js        # Utility functions
├── scripts/            # Deployment scripts
│   └── deploy.js       # Contract deployment
├── hardhat.config.js   # Hardhat configuration
├── package.json        # Dependencies
├── docs/               # Documentation
└── README.md          # Main documentation
```

## Smart Contract Features

- **createToken()** - Mint new NFT
- **getAllNFTs()** - List all NFTs for sale
- **getMyNFTs()** - Get user's owned NFTs
- **executeSale()** - Purchase NFT
- **getListPrice()** - Get marketplace listing fee
- **updateListPrice()** - Update listing fee (owner only)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Advait Solutions** - For the internship opportunity
- **OpenZeppelin** - For secure smart contract libraries
- **Pinata** - For IPFS storage
- **Hardhat** - For blockchain development tools

---

**Note:** This is an academic project built during a **January 2023 to April 2023** in an internship at **Advait Solutions** as part of the **BE Computer Engineering** curriculum at **Bhagwan Arihant Institute of Technology - Surat.**
