# Getting Started with ARMchain

Welcome to ARMchain, the quantum-resistant blockchain that's revolutionizing the way we think about digital security and decentralized applications.

## Quick Start Guide

### Installation Guide

To get started with ARMchain, you'll need to install the necessary tools and dependencies.

#### Prerequisites
- Node.js (v18 or higher)
- Git
- A compatible wallet

#### Installation Steps

1. **Clone the ARMchain SDK**
   ```bash
   git clone https://github.com/armchain/sdk.git
   cd armchain-sdk
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Initialize Your Project**
   ```bash
   npx armchain init my-project
   ```

### First Transaction

Learn how to send your first transaction on the ARMchain network.

#### Setting Up Your Wallet

Before you can send transactions, you'll need to set up a wallet:

```javascript
import { ARMWallet } from '@armchain/wallet';

const wallet = new ARMWallet({
  network: 'testnet', // Use 'mainnet' for production
  privateKey: 'your-private-key'
});
```

#### Sending a Transaction

```javascript
const transaction = await wallet.sendTransaction({
  to: '0x742d35Cc6634C0532925a3b8D29c2Ac1d32c5ecE',
  amount: '1.0',
  data: 'Hello ARMchain!'
});

console.log('Transaction hash:', transaction.hash);
```

### Wallet Setup

ARMchain supports multiple wallet types to ensure maximum security and usability.

#### Desktop Wallets
- ARMchain Wallet (Recommended)
- MetaMask (with ARMchain plugin)

#### Mobile Wallets
- ARMchain Mobile
- Trust Wallet

#### Hardware Wallets
- Ledger (with ARMchain app)
- Trezor (with ARMchain support)

### Network Configuration

Configure your application to connect to the ARMchain network.

#### Testnet Configuration
```javascript
const config = {
  network: 'testnet',
  rpcUrl: 'https://testnet-rpc.armchain.io',
  chainId: 1001,
  explorerUrl: 'https://testnet-explorer.armchain.io'
};
```

#### Mainnet Configuration
```javascript
const config = {
  network: 'mainnet',
  rpcUrl: 'https://rpc.armchain.io',
  chainId: 1000,
  explorerUrl: 'https://explorer.armchain.io'
};
```

## Next Steps

Now that you have ARMchain set up, you can:

- [Explore the Developer Documentation](/docs/developers)
- [Learn about Smart Contracts](/docs/developers#smart-contracts)
- [Set up a Node](/docs/node-setup)
- [Join the Community](/docs/governance)

## Need Help?

If you encounter any issues during setup:

1. Check our [FAQ section](#faq)
2. Join our [Discord community](https://discord.gg/armchain)
3. Submit an issue on [GitHub](https://github.com/armchain/issues)

## FAQ

### Common Issues

**Q: I'm getting connection errors**
A: Make sure you're using the correct RPC URL for your target network.

**Q: My transactions are failing**
A: Check that you have sufficient balance and gas fees.

**Q: Wallet not connecting**
A: Ensure your wallet supports ARMchain network and add the network configuration.
