# Getting Started with ARMchain

Welcome to **ARMchain**, the next-generation quantum-resistant blockchain platform designed for the post-quantum era. ARMchain combines cutting-edge cryptography with high-performance blockchain technology to provide unparalleled security for decentralized applications and digital assets.

## Table of Contents

- [What is ARMchain?](#what-is-armchain)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Network Configuration](#network-configuration)
- [Wallet Setup](#wallet-setup)
- [Your First Transaction](#your-first-transaction)
- [Smart Contracts](#smart-contracts)
- [Development Tools](#development-tools)
- [Troubleshooting](#troubleshooting)
- [Community & Support](#community--support)
- [Next Steps](#next-steps)

---

## What is ARMchain?

ARMchain is a revolutionary blockchain platform built from the ground up with quantum resistance at its core. As quantum computing advances threaten traditional cryptographic methods, ARMchain ensures your digital assets and applications remain secure in the quantum era.

### Why ARMchain?

- **Quantum-Resistant Security**: Built with post-quantum cryptographic algorithms
- **High Performance**: Lightning-fast transactions with low fees
- **Developer-Friendly**: Comprehensive tools and documentation
- **Scalable Architecture**: Designed to handle enterprise-level applications
- **Cross-Chain Compatibility**: Seamless integration with existing blockchain networks


---

## Key Features

### 🛡️ Quantum-Resistant Cryptography
ARMchain implements NIST-approved post-quantum cryptographic algorithms including:
- **Kyber**: For key encapsulation mechanisms
- **Dilithium**: For digital signatures
- **SPHINCS+**: For stateless hash-based signatures

### ⚡ High-Performance Network
- Transaction throughput: 50,000+ TPS
- Block time: 2 seconds
- Finality: Instant (single confirmation)
- Low fees: Starting from 0.0001 ARM

### 🔧 Developer Tools
- Full EVM compatibility
- Comprehensive SDK and APIs
- Advanced debugging tools
- Extensive documentation and tutorials


---

## Prerequisites

Before getting started with ARMchain, ensure you have the following installed on your system:

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Ubuntu 18.04+
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 2GB free space
- **Internet**: Stable broadband connection

### Required Software
- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **Git**: Latest version ([Download](https://git-scm.com/))
- **Package Manager**: npm (comes with Node.js) or Yarn

### Optional but Recommended
- **Docker**: For containerized development
- **VS Code**: With blockchain development extensions
- **Postman**: For API testing


---

## Installation

### Step 1: Install ARMchain CLI

The ARMchain Command Line Interface (CLI) is the primary tool for interacting with the network.

```bash
# Install globally via npm
npm install -g @armchain/cli

# Verify installation
armchain --version
```

### Step 2: Clone ARMchain SDK

```bash
# Clone the official SDK repository
git clone https://github.com/armchain/sdk.git
cd armchain-sdk

# Install dependencies
npm install

# Build the SDK
npm run build
```

### Step 3: Initialize Your Development Environment

```bash
# Create a new ARMchain project
npx @armchain/create-app my-armchain-app
cd my-armchain-app

# Install project dependencies
npm install

# Start development server
npm run dev
```

### Step 4: Verify Installation

```bash
# Check ARMchain CLI
armchain network status

# Test SDK connection
npm run test:connection
```

---

## Network Configuration

ARMchain operates on multiple networks to support different development and deployment needs.

### Testnet Configuration

The testnet is perfect for development, testing, and learning without using real tokens.

```javascript
// armchain.config.js
module.exports = {
  networks: {
    testnet: {
      name: 'ARMchain Testnet',
      rpcUrl: 'https://testnet-rpc.armchain.io',
      wsUrl: 'wss://testnet-ws.armchain.io',
      chainId: 1001,
      networkId: 1001,
      explorerUrl: 'https://testnet-explorer.armchain.io',
      faucetUrl: 'https://faucet.armchain.io',
      gasPrice: '20000000000', // 20 Gwei
      gasLimit: 6721975
    }
  }
};
```

### Mainnet Configuration

The mainnet is the production network where real value transactions occur.

```javascript
// armchain.config.js
module.exports = {
  networks: {
    mainnet: {
      name: 'ARMchain Mainnet',
      rpcUrl: 'https://rpc.armchain.io',
      wsUrl: 'wss://ws.armchain.io',
      chainId: 1000,
      networkId: 1000,
      explorerUrl: 'https://explorer.armchain.io',
      gasPrice: '30000000000', // 30 Gwei
      gasLimit: 8000000
    }
  }
};
```

### Environment Variables

Create a `.env` file in your project root:

```bash
# Network Configuration
ARMCHAIN_NETWORK=testnet
ARMCHAIN_RPC_URL=https://testnet-rpc.armchain.io
ARMCHAIN_WS_URL=wss://testnet-ws.armchain.io

# Security (Never commit these to version control)
PRIVATE_KEY=your_private_key_here
MNEMONIC=your_twelve_word_mnemonic_phrase_here

# API Keys
ARMCHAIN_API_KEY=your_api_key_here
ETHERSCAN_API_KEY=your_etherscan_key_here
```

---

## Wallet Setup

ARMchain supports various wallet types to ensure maximum security and usability across different platforms.

### Desktop Wallets

#### ARMchain Wallet (Recommended)
The official ARMchain wallet with full quantum-resistant features.

1. Download from [armchain.io/wallet](https://armchain.io/wallet)
2. Install and create a new wallet
3. Securely store your seed phrase
4. Add ARMchain networks (testnet/mainnet)

#### MetaMask with ARMchain Plugin
Use the popular MetaMask wallet with our custom plugin.

```javascript
// Add ARMchain network to MetaMask
const addNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0x3E9', // 1001 in hex for testnet
        chainName: 'ARMchain Testnet',
        nativeCurrency: {
          name: 'ARM',
          symbol: 'ARM',
          decimals: 18
        },
        rpcUrls: ['https://testnet-rpc.armchain.io'],
        blockExplorerUrls: ['https://testnet-explorer.armchain.io']
      }]
    });
  } catch (error) {
    console.error('Failed to add network:', error);
  }
};
```

### Mobile Wallets

#### ARMchain Mobile
- **iOS**: Available on App Store
- **Android**: Available on Google Play Store
- **Features**: Quantum-resistant keys, DApp browser, staking

#### Trust Wallet
- Download Trust Wallet
- Add custom network using testnet/mainnet configurations
- Import your existing wallet or create new

### Hardware Wallets

#### Ledger Support
```bash
# Install Ledger app
# Connect your Ledger device
# Install ARMchain app from Ledger Live

# Use with SDK
import { LedgerConnector } from '@armchain/ledger';

const ledger = new LedgerConnector({
  network: 'testnet'
});

await ledger.connect();
const address = await ledger.getAddress(0);
```

#### Trezor Support
```bash
# Install Trezor Bridge
# Connect your Trezor device

# Use with SDK
import { TrezorConnector } from '@armchain/trezor';

const trezor = new TrezorConnector({
  network: 'testnet'
});

await trezor.connect();
const address = await trezor.getAddress("m/44'/1001'/0'/0/0");
```

### Programmatic Wallet Creation

```javascript
import { ARMWallet, HDWallet } from '@armchain/wallet';

// Create from private key
const wallet = new ARMWallet({
  privateKey: '0x742d35Cc6634C0532925a3b8D29c2Ac1d32c5ecE...',
  network: 'testnet'
});

// Create from mnemonic
const hdWallet = HDWallet.fromMnemonic(
  'abandon ability able about above absent absorb abstract absurd abuse access accident'
);
const account = hdWallet.getAccount(0);

// Generate new random wallet
const randomWallet = ARMWallet.createRandom();
console.log('Address:', randomWallet.address);
console.log('Private Key:', randomWallet.privateKey);
console.log('Mnemonic:', randomWallet.mnemonic);
```

---

## Your First Transaction

Let's send your first transaction on ARMchain! We'll cover both native ARM token transfers and smart contract interactions.

### Get Test Tokens

Before sending transactions on testnet, you'll need test ARM tokens:

```bash
# Using CLI
armchain faucet request --address YOUR_ADDRESS

# Or visit the web faucet
# https://faucet.armchain.io
```

### Basic Token Transfer

```javascript
import { ARMWallet, utils } from '@armchain/sdk';

async function sendTransaction() {
  // Initialize wallet
  const wallet = new ARMWallet({
    privateKey: process.env.PRIVATE_KEY,
    network: 'testnet'
  });

  // Check balance
  const balance = await wallet.getBalance();
  console.log(`Balance: ${utils.formatEther(balance)} ARM`);

  // Prepare transaction
  const tx = {
    to: '0x742d35Cc6634C0532925a3b8D29c2Ac1d32c5ecE',
    value: utils.parseEther('1.0'), // 1 ARM
    gasLimit: 21000,
    gasPrice: utils.parseUnits('20', 'gwei'),
    data: '0x' // Empty data for simple transfer
  };

  try {
    // Send transaction
    const txResponse = await wallet.sendTransaction(tx);
    console.log('Transaction sent:', txResponse.hash);

    // Wait for confirmation
    const receipt = await txResponse.wait();
    console.log('Transaction confirmed in block:', receipt.blockNumber);
    console.log('Gas used:', receipt.gasUsed.toString());

  } catch (error) {
    console.error('Transaction failed:', error);
  }
}

sendTransaction();
```

### Advanced Transaction with Data

```javascript
import { ARMWallet, Contract, utils } from '@armchain/sdk';

async function sendAdvancedTransaction() {
  const wallet = new ARMWallet({
    privateKey: process.env.PRIVATE_KEY,
    network: 'testnet'
  });

  // Send transaction with custom data
  const tx = await wallet.sendTransaction({
    to: '0x742d35Cc6634C0532925a3b8D29c2Ac1d32c5ecE',
    value: utils.parseEther('0.1'),
    data: utils.hexlify(utils.toUtf8Bytes('Hello ARMchain!')),
    gasLimit: 100000
  });

  console.log('Transaction hash:', tx.hash);

  // Monitor transaction status
  const receipt = await tx.wait(2); // Wait for 2 confirmations
  console.log('Status:', receipt.status === 1 ? 'Success' : 'Failed');
}
```

### Batch Transactions

```javascript
async function sendBatchTransactions() {
  const wallet = new ARMWallet({
    privateKey: process.env.PRIVATE_KEY,
    network: 'testnet'
  });

  const recipients = [
    '0x742d35Cc6634C0532925a3b8D29c2Ac1d32c5ecE',
    '0x8ba1f109551bD432803012645Hac136c5543B28',
    '0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C'
  ];

  const transactions = recipients.map(to => ({
    to,
    value: utils.parseEther('0.1'),
    gasLimit: 21000
  }));

  try {
    const txHashes = await wallet.sendBatchTransactions(transactions);
    console.log('Batch transactions sent:', txHashes);
  } catch (error) {
    console.error('Batch transaction failed:', error);
  }
}
```

---

## Smart Contracts

ARMchain is fully EVM-compatible, allowing you to deploy and interact with smart contracts using familiar tools and languages.

### Writing Your First Smart Contract

Create a simple contract in Solidity:

```solidity
// contracts/HelloARMchain.sol
pragma solidity ^0.8.19;

contract HelloARMchain {
    string public message;
    address public owner;
    uint256 public messageCount;

    event MessageUpdated(address indexed updater, string newMessage, uint256 timestamp);

    constructor(string memory _initialMessage) {
        message = _initialMessage;
        owner = msg.sender;
        messageCount = 1;
    }

    function updateMessage(string memory _newMessage) external {
        message = _newMessage;
        messageCount++;
        emit MessageUpdated(msg.sender, _newMessage, block.timestamp);
    }

    function getMessage() external view returns (string memory, uint256, address) {
        return (message, messageCount, owner);
    }
}
```

### Compiling Contracts

```bash
# Using ARMchain CLI
armchain compile contracts/HelloARMchain.sol

# Or using Hardhat
npx hardhat compile
```

### Deploying Contracts

```javascript
import { ARMWallet, ContractFactory } from '@armchain/sdk';
import HelloARMchainArtifact from './artifacts/HelloARMchain.json';

async function deployContract() {
  const wallet = new ARMWallet({
    privateKey: process.env.PRIVATE_KEY,
    network: 'testnet'
  });

  // Create contract factory
  const factory = new ContractFactory(
    HelloARMchainArtifact.abi,
    HelloARMchainArtifact.bytecode,
    wallet
  );

  // Deploy contract
  const contract = await factory.deploy('Hello, ARMchain!', {
    gasLimit: 1000000,
    gasPrice: utils.parseUnits('20', 'gwei')
  });

  console.log('Contract deploying to:', contract.address);

  // Wait for deployment
  await contract.deployTransaction.wait();
  console.log('Contract deployed at:', contract.address);

  return contract;
}
```

### Interacting with Contracts

```javascript
import { ARMWallet, Contract } from '@armchain/sdk';

async function interactWithContract() {
  const wallet = new ARMWallet({
    privateKey: process.env.PRIVATE_KEY,
    network: 'testnet'
  });

  const contractAddress = '0x742d35Cc6634C0532925a3b8D29c2Ac1d32c5ecE';
  const abi = [
    'function updateMessage(string memory _newMessage) external',
    'function getMessage() external view returns (string, uint256, address)',
    'event MessageUpdated(address indexed updater, string newMessage, uint256 timestamp)'
  ];

  const contract = new Contract(contractAddress, abi, wallet);

  try {
    // Read from contract
    const [message, count, owner] = await contract.getMessage();
    console.log('Current message:', message);
    console.log('Message count:', count.toString());
    console.log('Owner:', owner);

    // Write to contract
    const tx = await contract.updateMessage('Updated from SDK!');
    console.log('Update transaction:', tx.hash);

    await tx.wait();
    console.log('Message updated successfully!');

    // Listen for events
    contract.on('MessageUpdated', (updater, newMessage, timestamp) => {
      console.log('Message updated by:', updater);
      console.log('New message:', newMessage);
      console.log('Timestamp:', new Date(timestamp * 1000));
    });

  } catch (error) {
    console.error('Contract interaction failed:', error);
  }
}
```

---

## Development Tools

ARMchain provides comprehensive development tools to streamline your blockchain development workflow.

### ARMchain CLI Commands

```bash
# Network commands
armchain network status                    # Check network status
armchain network list                      # List available networks
armchain network switch testnet            # Switch to testnet

# Account management
armchain account create                    # Create new account
armchain account list                      # List accounts
armchain account balance ADDRESS           # Check balance
armchain account import PRIVATE_KEY        # Import account

# Contract operations
armchain contract compile CONTRACT.sol     # Compile contract
armchain contract deploy CONTRACT.json     # Deploy contract
armchain contract call ADDRESS METHOD     # Call contract method
armchain contract logs ADDRESS             # Get contract events

# Transaction operations
armchain tx send TO AMOUNT                 # Send transaction
armchain tx status HASH                    # Check transaction status
armchain tx receipt HASH                   # Get transaction receipt

# Development tools
armchain node start                        # Start local node
armchain faucet request ADDRESS            # Request test tokens
armchain explorer ADDRESS                  # Open in explorer
```

### SDK Features

#### Provider Connection
```javascript
import { ARMProvider } from '@armchain/sdk';

// Connect to different networks
const testnetProvider = new ARMProvider('https://testnet-rpc.armchain.io');
const mainnetProvider = new ARMProvider('https://rpc.armchain.io');

// WebSocket connection for real-time data
const wsProvider = new ARMProvider('wss://testnet-ws.armchain.io');

// Get network information
const network = await provider.getNetwork();
console.log('Chain ID:', network.chainId);
console.log('Network Name:', network.name);
```

#### Block and Transaction Queries
```javascript
// Get latest block
const latestBlock = await provider.getBlock('latest');
console.log('Block number:', latestBlock.number);
console.log('Block hash:', latestBlock.hash);

// Get transaction by hash
const tx = await provider.getTransaction('0x742d35Cc...');
console.log('Transaction details:', tx);

// Get transaction receipt
const receipt = await provider.getTransactionReceipt('0x742d35Cc...');
console.log('Gas used:', receipt.gasUsed.toString());
```

#### Event Filtering and Monitoring
```javascript
// Filter events
const filter = {
  address: contractAddress,
  topics: [
    utils.id('Transfer(address,address,uint256)') // Transfer event signature
  ],
  fromBlock: 'latest'
};

// Listen for events
provider.on(filter, (log) => {
  console.log('New transfer event:', log);
});

// Get historical events
const logs = await provider.getLogs({
  ...filter,
  fromBlock: 0,
  toBlock: 'latest'
});
```

### Testing Framework

```javascript
// test/HelloARMchain.test.js
import { expect } from 'chai';
import { ARMWallet, ContractFactory } from '@armchain/sdk';
import HelloARMchainArtifact from '../artifacts/HelloARMchain.json';

describe('HelloARMchain Contract', function() {
  let contract, owner, addr1, addr2;

  beforeEach(async function() {
    [owner, addr1, addr2] = await armchain.getSigners();

    const factory = new ContractFactory(
      HelloARMchainArtifact.abi,
      HelloARMchainArtifact.bytecode,
      owner
    );

    contract = await factory.deploy('Initial message');
    await contract.deployTransaction.wait();
  });

  it('Should deploy with correct initial message', async function() {
    const [message, count, contractOwner] = await contract.getMessage();
    expect(message).to.equal('Initial message');
    expect(count).to.equal(1);
    expect(contractOwner).to.equal(owner.address);
  });

  it('Should update message correctly', async function() {
    await contract.updateMessage('New message');
    const [message, count] = await contract.getMessage();
    expect(message).to.equal('New message');
    expect(count).to.equal(2);
  });

  it('Should emit MessageUpdated event', async function() {
    await expect(contract.updateMessage('Event test'))
      .to.emit(contract, 'MessageUpdated')
      .withArgs(owner.address, 'Event test', anyValue);
  });
});
```

---

## Troubleshooting

### Common Issues and Solutions

#### Connection Problems

**Issue**: Cannot connect to ARMchain network
```bash
Error: Network connection failed
```

**Solutions**:
1. Check your internet connection
2. Verify RPC URL is correct
3. Try alternative RPC endpoints:
   ```javascript
   // Testnet alternatives
   const rpcUrls = [
     'https://testnet-rpc.armchain.io',
     'https://testnet-rpc2.armchain.io',
     'https://testnet-rpc3.armchain.io'
   ];
   ```

#### Transaction Failures

**Issue**: Transaction fails with "insufficient funds"
```bash
Error: Insufficient funds for gas * price + value
```

**Solutions**:
1. Check account balance: `armchain account balance YOUR_ADDRESS`
2. Get test tokens: `armchain faucet request YOUR_ADDRESS`
3. Reduce transaction amount or gas price

**Issue**: Transaction fails with "nonce too low"
```bash
Error: Nonce too low. Expected nonce to be 42 but got 41
```

**Solutions**:
```javascript
// Get correct nonce
const nonce = await wallet.getTransactionCount('pending');

// Use in transaction
const tx = {
  to: '0x742d35Cc...',
  value: utils.parseEther('1'),
  nonce: nonce
};
```

#### Smart Contract Issues

**Issue**: Contract deployment fails
```bash
Error: Contract creation failed
```

**Solutions**:
1. Increase gas limit
2. Check contract syntax
3. Verify bytecode size (< 24KB)

**Issue**: Contract call reverts
```bash
Error: Transaction reverted
```

**Solutions**:
```javascript
// Add error handling
try {
  const result = await contract.someMethod();
} catch (error) {
  if (error.reason) {
    console.log('Revert reason:', error.reason);
  }
  console.log('Full error:', error);
}
```

### Debugging Tools

#### Transaction Tracing
```javascript
// Enable debug mode
const provider = new ARMProvider({
  url: 'https://testnet-rpc.armchain.io',
  debug: true
});

// Trace transaction
const trace = await provider.debug.traceTransaction('0x742d35Cc...');
console.log('Execution trace:', trace);
```

#### Gas Estimation
```javascript
// Estimate gas before sending
const gasEstimate = await contract.estimateGas.updateMessage('New message');
console.log('Estimated gas:', gasEstimate.toString());

// Use 110% of estimate for safety
const gasLimit = gasEstimate.mul(110).div(100);
```

#### Network Monitoring
```bash
# Check network status
armchain network status

# Monitor real-time metrics
armchain network monitor

# View recent blocks
armchain network blocks --count 10
```

### Performance Optimization

#### Batch Operations
```javascript
// Instead of multiple single transactions
// const tx1 = await wallet.sendTransaction(...);
// const tx2 = await wallet.sendTransaction(...);

// Use batch transactions
const transactions = [
  { to: '0x742d...', value: utils.parseEther('1') },
  { to: '0x8ba1...', value: utils.parseEther('2') }
];
const txHashes = await wallet.sendBatchTransactions(transactions);
```

#### Connection Pooling
```javascript
import { ARMProvider } from '@armchain/sdk';

const provider = new ARMProvider({
  url: 'https://testnet-rpc.armchain.io',
  pooling: {
    maxConnections: 10,
    timeout: 30000
  }
});
```

---

## Community & Support

### Official Channels

#### Documentation
- **Developer Docs**: [docs.armchain.io](https://docs.armchain.io)
- **API Reference**: [api-docs.armchain.io](https://api-docs.armchain.io)
- **Tutorials**: [tutorials.armchain.io](https://tutorials.armchain.io)

#### Community Forums
- **Discord**: [discord.gg/armchain](https://discord.gg/armchain)
- **Telegram**: [t.me/armchain](https://t.me/armchain)
- **Reddit**: [reddit.com/r/armchain](https://reddit.com/r/armchain)
- **Forum**: [forum.armchain.io](https://forum.armchain.io)

#### Development Resources
- **GitHub**: [github.com/armchain](https://github.com/armchain)
- **Stack Overflow**: Tag `armchain`
- **Dev Chat**: [dev.armchain.io](https://dev.armchain.io)

### Getting Help

#### Bug Reports
Submit issues at: [github.com/armchain/issues](https://github.com/armchain/issues)

Include:
- ARMchain SDK version
- Network (testnet/mainnet)
- Error messages and stack traces
- Minimal reproduction code
- Environment details

#### Feature Requests
Use our feature request template: [github.com/armchain/feature-requests](https://github.com/armchain/feature-requests)

#### Security Issues
Report security vulnerabilities privately: [security@armchain.io](mailto:security@armchain.io)

### Contributing

#### Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

#### Documentation
Help improve our documentation at: [github.com/armchain/docs](https://github.com/armchain/docs)

#### Translation
Join our translation project: [translate.armchain.io](https://translate.armchain.io)

---

## Next Steps

Now that you have ARMchain set up and running, here are the recommended next steps:

### For Developers

1. **Build Your First DApp**
   - Follow our [DApp Tutorial](https://tutorials.armchain.io/dapp-tutorial)
   - Clone starter templates from [github.com/armchain/templates](https://github.com/armchain/templates)
   - Join our developer workshops

2. **Explore Advanced Features**
   - [Quantum-Resistant Signatures](https://docs.armchain.io/quantum-signatures)
   - [Cross-Chain Bridges](https://docs.armchain.io/bridges)
   - [Layer 2 Solutions](https://docs.armchain.io/layer2)
   - [Staking and Governance](https://docs.armchain.io/governance)

3. **Integrate with Existing Apps**
   - [Migration Guide](https://docs.armchain.io/migration)
   - [Web3 Library Integration](https://docs.armchain.io/web3-integration)
   - [API Documentation](https://api-docs.armchain.io)

### For Node Operators

1. **Set Up a Full Node**
   ```bash
   # Install ARMchain node
   npm install -g @armchain/node

   # Initialize node
   armchain-node init

   # Start syncing
   armchain-node start --network testnet
   ```

2. **Become a Validator**
   - [Validator Setup Guide](https://docs.armchain.io/validators)
   - [Staking Requirements](https://docs.armchain.io/staking)
   - [Validator Rewards](https://docs.armchain.io/rewards)

### For Users

1. **Explore the Ecosystem**
   - [DApp Directory](https://dapps.armchain.io)
   - [NFT Marketplace](https://nft.armchain.io)
   - [DeFi Protocols](https://defi.armchain.io)

2. **Participate in Governance**
   - [Governance Portal](https://gov.armchain.io)
   - [Voting Guide](https://docs.armchain.io/voting)
   - [Proposal Creation](https://docs.armchain.io/proposals)

### Learning Resources

#### Tutorials
- [Smart Contract Development](https://tutorials.armchain.io/smart-contracts)
- [DeFi Protocol Building](https://tutorials.armchain.io/defi)
- [NFT Development](https://tutorials.armchain.io/nft)
- [Quantum-Resistant Applications](https://tutorials.armchain.io/quantum)

#### Video Content
- [ARMchain YouTube Channel](https://youtube.com/armchain)
- [Developer Workshops](https://workshops.armchain.io)
- [Community Calls](https://calls.armchain.io)

#### Sample Projects
- [DeFi Swap Interface](https://github.com/armchain/defi-swap)
- [NFT Marketplace](https://github.com/armchain/nft-marketplace)
- [DAO Template](https://github.com/armchain/dao-template)
- [Gaming DApp](https://github.com/armchain/gaming-dapp)

---

## Conclusion

Congratulations! You're now ready to start building on ARMchain, the quantum-resistant blockchain of the future. Whether you're developing smart contracts, building DApps, or simply exploring the ecosystem, ARMchain provides the tools and infrastructure you need for secure, scalable applications.

Remember:
- Start with testnet for development and testing
- Join our community for support and collaboration
- Keep your private keys secure
- Stay updated with the latest releases

Welcome to the ARMchain ecosystem! 🚀

---

### Quick Reference

#### Essential Commands
```bash
# Check status
armchain network status

# Get test tokens
armchain faucet request YOUR_ADDRESS

# Deploy contract
armchain contract deploy contract.json

# Send transaction
armchain tx send TO_ADDRESS AMOUNT
```

#### Important URLs
- **Testnet RPC**: `https://testnet-rpc.armchain.io`
- **Mainnet RPC**: `https://rpc.armchain.io`
- **Explorer**: `https://explorer.armchain.io`
- **Faucet**: `https://faucet.armchain.io`
- **Documentation**: `https://docs.armchain.io`

#### Support
- **Discord**: [discord.gg/armchain](https://discord.gg/armchain)
- **Email**: [support@armchain.io](mailto:support@armchain.io)
- **GitHub Issues**: [github.com/armchain/issues](https://github.com/armchain/issues)

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
