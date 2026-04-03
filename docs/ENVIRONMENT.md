# Environment Variables Setup

This guide explains the environment variables required for the NFT Marketplace project.

## Required Variables

### Pinata API Keys (Required for IPFS)

Pinata is used to store NFT metadata and images on IPFS.

1. Go to https://www.pinata.cloud/
2. Create a free account
3. Go to API Keys
4. Create a new API key
5. Copy the Key and Secret

Add to `.env`:
```env
REACT_APP_PINATA_KEY=your_pinata_key
REACT_APP_PINATA_SECRET=your_pinata_secret
```

## Optional Variables

### For Testnet Deployment

```env
# Wallet Private Key (for deployments)
PRIVATE_KEY=your_private_key

# Alchemy RPC URLs
ALCHEMY_SEPOLIA_URL=https://eth-sepolia.alchemyapi.io/v2/YOUR_KEY
ALCHEMY_MUMBAI_URL=https://polygon-mumbai.g.alchemy.com/v2/YOUR_KEY

# Other network URLs
SEPOLIA_URL=https://rpc.ankr.com/eth_sepolia
```

## Environment File Setup

### Step 1: Create .env File

In the project root, create a file named `.env`:

```bash
# Touch .env (Linux/Mac)
touch .env

# Or create manually on Windows
```

### Step 2: Add Variables

Add the following to your `.env` file:

```env
# Pinata API Keys (REQUIRED)
REACT_APP_PINATA_KEY=your_actual_pinata_key
REACT_APP_PINATA_SECRET=your_actual_pinata_secret

# Optional - for testnet deployment
# PRIVATE_KEY=your_wallet_private_key
# ALCHEMY_SEPOLIA_URL=https://eth-sepolia.alchemyapi.io/v2/your_key
# ALCHEMY_MUMBAI_URL=https://polygon-mumbai.g.alchemy.com/v2/your_key
```

### Step 3: Save the File

Save the `.env` file in the project root.

## Getting Pinata API Keys

### Method 1: Via Dashboard

1. Log in to https://www.pinata.cloud/
2. Click your profile icon (top right)
3. Select "API Keys"
4. Click "New Key"
5. Give it a name (e.g., "NFT Marketplace")
6. Select permissions (default is fine)
7. Copy the Key and Secret immediately

### Method 2: Via JWT

1. Go to API Keys in dashboard
2. Create a new key
3. Copy both the JWT Key and Secret

## Important Security Notes

### .env File is Already Gitignored

The `.env` file is already in `.gitignore` - your keys won't be pushed to GitHub.

However, for production:
- Never commit API keys to version control
- Use environment variables in deployment
- Rotate keys periodically

### For GitHub Upload

Before uploading to GitHub:

1. Ensure `.env` is in `.gitignore` (already configured)
2. Create a `.env.example` file with placeholder values:

```env
# Example .env file
REACT_APP_PINATA_KEY=your_pinata_key_here
REACT_APP_PINATA_SECRET=your_pinata_secret_here
```

3. Add instructions in README for users to create their own `.env`

## Hardhat Environment Variables

Hardhat uses its own configuration. For mainnet/testnet deployment:

```env
# .env (for Hardhat)
PRIVATE_KEY=your_private_key
ALCHEMY_SEPOLIA_URL=your_url
```

Then update `hardhat.config.js`:
```javascript
sepolia: {
  url: process.env.ALCHEMY_SEPOLIA_URL,
  accounts: [process.env.PRIVATE_KEY]
}
```

## Troubleshooting

### "Pinata keys not found"

- Ensure `.env` file is in project root
- Restart the development server after creating `.env`
- Check variable names match exactly (case-sensitive)

### "Invalid API key"

- Verify your Pinata keys are correct
- Check for extra spaces in keys
- Try regenerating keys in Pinata dashboard

### "Environment variables not loading"

- Ensure file is named exactly `.env`
- No quotes around values (unless containing special chars)
- Restart npm after changes