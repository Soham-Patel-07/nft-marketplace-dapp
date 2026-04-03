# Troubleshooting Guide

Common issues and their solutions for the NFT Marketplace project.

## MetaMask Connection Issues

### Issue: "Connect Wallet" button not working

**Solutions:**
1. Ensure MetaMask is installed
2. Check MetaMask is unlocked
3. Try clicking the button multiple times
4. Refresh the page

### Issue: Wallet shows "Connected" but address not displayed

**Solutions:**
1. Refresh the page
2. Disconnect and reconnect wallet
3. Check browser console for errors

### Issue: MetaMask keeps asking for permission

**Solutions:**
1. This is normal - click "Connect" each time
2. Or refresh after first connection

## Contract Issues

### Issue: "Contract not found" or "call revert exception"

**Causes:**
1. Hardhat node not running
2. Contract not deployed
3. MetaMask on wrong network

**Solutions:**
```bash
# Step 1: Start Hardhat node
npm run node

# Step 2: Deploy contract (in new terminal)
npm run deploy

# Step 3: In MetaMask, switch to Hardhat network
# Network: http://localhost:8545
# Chain ID: 1337
```

### Issue: Transaction fails with "Insufficient funds"

**Solutions:**
1. Ensure you're on Hardhat network (test accounts have 10000 ETH)
2. Get more test ETH from Hardhat node output
3. Import a new test account to MetaMask

### Issue: MetaMask shows "Malicious address" warning

**Solutions:**
1. This is a false positive for local development
2. Go to MetaMask Settings → Security & Privacy
3. Turn off "Show phishing alerts" temporarily
4. Or restart Hardhat node for new contract address

## IPFS/Pinata Issues

### Issue: "Upload error" when listing NFT

**Causes:**
1. Invalid Pinata API keys
2. Network issues
3. File too large

**Solutions:**
1. Check .env file has correct keys
2. Verify Pinata keys are valid (try logging into Pinata)
3. Ensure image is under 500KB
4. Check browser console for specific error

### Issue: Images not displaying

**Solutions:**
1. Check browser console for failed requests
2. Verify IPFS gateway is accessible
3. Try a different IPFS gateway in src/utils.js

## Frontend Issues

### Issue: Page not loading or blank

**Solutions:**
1. Check browser console for errors
2. Ensure all dependencies installed: `npm install`
3. Clear browser cache
4. Restart the development server

### Issue: "min-height" warning in console

**Solutions:**
- This is just a React warning, not an error
- It doesn't affect functionality

### Issue: CSS not loading

**Solutions:**
1. Ensure TailwindCSS is properly configured
2. Check tailwind.config.js exists
3. Try: `npm install` to reinstall dependencies

## Network Issues

### Issue: Wrong network chain ID

**Expected:**
- Hardhat: Chain ID 1337

**Solutions:**
1. Open MetaMask
2. Click network dropdown
3. Select "Hardhat" or "Localhost 8545"
4. If not available, add manually:
   - RPC: http://localhost:8545
   - Chain ID: 1337

### Issue: "Provider not found"

**Solutions:**
1. Ensure MetaMask is installed
2. Refresh the page
3. Try a different browser

## Node.js Issues

### Issue: "Node.js version not supported"

**Solutions:**
```bash
# Check your Node version
node --version

# Recommended: Use Node.js v16 or v18
# Use nvm to switch versions
nvm install 18
nvm use 18
```

### Issue: npm install fails

**Solutions:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

## Hardhat Issues

### Issue: Hardhat node won't start

**Solutions:**
1. Ensure no other process on port 8545
2. Kill existing processes or use different port
3. Update Hardhat: `npm update hardhat`

### Issue: Contract deployment fails

**Solutions:**
1. Check Hardhat node is running
2. Verify network configuration
3. Check for compilation errors: `npx hardhat compile`

## Quick Fixes Checklist

If you're having issues, try these in order:

1. Restart Hardhat node: `npm run node`
2. Redeploy contract: `npm run deploy`
3. Refresh browser (Ctrl+Shift+R)
4. Disconnect and reconnect MetaMask
5. Switch to correct network in MetaMask
6. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
7. Clear MetaMask activity data

## Getting Help

If issues persist:

1. Check browser console for error messages
2. Search for specific error online
3. Check Hardhat/Ethers/React documentation
4. Verify all dependencies are compatible

## Common Error Messages

| Error | Cause | Fix |
|-------|-------|-----|
| CALL_EXCEPTION | Contract not found | Deploy contract |
| INSUFFICIENT_FUNDS | Not enough ETH | Use test account |
| USER_REJECTED | User cancelled | Approve transaction |
| networkChanged | Network switched | Reconnect wallet |