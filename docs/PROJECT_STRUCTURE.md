# Project Structure

This document explains the folder structure and key files in the NFT Marketplace project.

## Overall Structure

```
nftmarket/
├── contracts/              # Solidity smart contracts
├── src/                    # React frontend application
├── scripts/                # Deployment and testing scripts
├── test/                   # Smart contract tests
├── docs/                   # Documentation
├── public/                 # Static assets
├── hardhat.config.js       # Hardhat configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
└── README.md              # Main documentation
```

## Directory Details

### /contracts

Contains the Solidity smart contract.

```
contracts/
└── NFTMarketplace.sol     # Main marketplace contract
```

**Key Contract Functions:**
- `createToken()` - Mint new NFT
- `getAllNFTs()` - Get all listed NFTs
- `getMyNFTs()` - Get user's NFTs
- `executeSale()` - Purchase NFT
- `getListPrice()` - Get listing fee
- `updateListPrice()` - Update listing fee

### /src

React frontend application.

```
src/
├── components/            # React components
│   ├── Navbar.js          # Navigation bar with wallet connection
│   ├── Marketplace.js    # Main marketplace page
│   ├── SellNFT.js        # Mint and list NFT page
│   ├── Profile.js        # User profile page
│   ├── NFTpage.js        # Individual NFT details
│   └── NFTTile.js        # NFT card component
├── App.js                 # Main React component
├── App.css               # App styling
├── index.js              # React entry point
├── index.css             # Global styles
├── pinata.js             # IPFS upload functions
├── utils.js              # Utility functions
└── Marketplace.json      # Deployed contract address and ABI
```

**Component Overview:**
- **Navbar** - Navigation and wallet connection
- **Marketplace** - Display all NFTs for sale
- **SellNFT** - Form to upload and list NFTs
- **Profile** - User's owned NFTs and stats
- **NFTpage** - Individual NFT view and buy option
- **NFTTile** - Reusable NFT card display

### /scripts

Deployment and utility scripts.

```
scripts/
├── deploy.js             # Deploy contract to network
└── testing.js            # Testing utilities
```

### /public

Static files served by React.

```
public/
├── index.html            # HTML entry point
├── manifest.json        # PWA manifest
├── favicon.ico          # Browser favicon
└── *.png, *.jpg          # Images and logos
```

### /docs

Project documentation.

```
docs/
├── INSTALLATION.md       # Setup guide
├── DEPLOYMENT.md         # Deployment guide
├── ENVIRONMENT.md        # Environment variables
├── PROJECT_STRUCTURE.md  # This file
└── TROUBLESHOOTING.md   # Common issues
```

## Key Files Explained

### hardhat.config.js

Configuration for Hardhat blockchain framework.

- Defines networks (hardhat, sepolia, mumbai)
- Sets Solidity compiler version
- Configures ethers and waffle for testing

### package.json

Project dependencies and scripts.

**Key Scripts:**
- `npm start` - Run React app
- `npm run node` - Start Hardhat node
- `npm run deploy` - Deploy contract
- `npm test` - Run tests

### src/Marketplace.json

After deployment, contains:
- `address` - Deployed contract address
- `abi` - Contract interface for frontend

### src/pinata.js

Handles IPFS uploads:
- `uploadJSONToIPFS()` - Upload NFT metadata
- `uploadFileToIPFS()` - Upload image files

### src/utils.js

Utility functions:
- `GetIpfsUrlFromPinata()` - Convert IPFS URL to gateway URL

## Data Flow

### Listing an NFT

1. User fills form in SellNFT.js
2. Image uploaded to Pinata (IPFS)
3. Metadata uploaded to Pinata
4. createToken() called on smart contract
5. Contract stores token info
6. NFT appears on Marketplace

### Buying an NFT

1. User clicks "Buy" on NFTpage
2. executeSale() called with payment
3. NFT transferred to buyer
4. Payment sent to seller
5. Listing fee sent to contract owner

## Configuration Files

### tailwind.config.js
TailwindCSS configuration for styling.

### postcss.config.js
PostCSS configuration for Tailwind.

### config-overrides.js
React-app-rewired configuration for webpack overrides (needed for browserify polyfills).

## Build Outputs

After deployment:
- `artifacts/` - Compiled contract artifacts
- `cache/` - Hardhat cache
- `src/Marketplace.json` - Contract address/ABI

These are regenerated on rebuild/deploy.