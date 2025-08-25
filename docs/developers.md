# Developer Documentation

Welcome to the ARMchain Developer Hub. Here you'll find everything you need to build innovative applications on our quantum-resistant blockchain.

## API Reference

### Core APIs

#### Blockchain API

The ARMchain Blockchain API provides access to blockchain data and functionality.

**Base URL:** `https://api.armchain.io/v1`

##### Get Block Information
```http
GET /blocks/{blockNumber}
```

**Parameters:**
- `blockNumber` (string): Block number or "latest"

**Response:**
```json
{
  "number": "12345",
  "hash": "0x...",
  "timestamp": 1640995200,
  "transactions": [...],
  "gasUsed": "21000",
  "gasLimit": "8000000"
}
```

##### Get Transaction
```http
GET /transactions/{txHash}
```

#### Wallet API

##### Create Transaction
```javascript
const tx = await armchain.createTransaction({
  from: '0x...',
  to: '0x...',
  value: '1000000000000000000', // 1 ARM in wei
  data: '0x...',
  gasLimit: '21000',
  gasPrice: '20000000000' // 20 gwei
});
```

##### Sign Transaction
```javascript
const signedTx = await wallet.signTransaction(tx);
```

### Smart Contracts

ARMchain supports quantum-resistant smart contracts with enhanced security features.

#### Contract Development

**Solidity Example:**
```solidity
pragma solidity ^0.8.0;

contract QuantumSafeToken {
    mapping(address => uint256) public balances;
    mapping(address => bool) public quantumVerified;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event QuantumVerification(address indexed account, bool verified);

    function transfer(address to, uint256 amount) public {
        require(quantumVerified[msg.sender], "Quantum verification required");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
    }

    function verifyQuantumSignature(bytes memory signature) public {
        // Quantum signature verification logic
        bool isValid = _verifyQuantumSignature(msg.sender, signature);
        quantumVerified[msg.sender] = isValid;

        emit QuantumVerification(msg.sender, isValid);
    }
}
```

#### Deployment

```javascript
import { ARMContractFactory } from '@armchain/contracts';

const factory = new ARMContractFactory(wallet);
const contract = await factory.deploy({
  abi: contractABI,
  bytecode: contractBytecode,
  constructorArgs: ['TokenName', 'TKN', 18]
});

console.log('Contract deployed at:', contract.address);
```

### SDK Documentation

The ARMchain SDK provides a comprehensive set of tools for blockchain development.

#### Installation

```bash
npm install @armchain/sdk
```

#### Basic Usage

```javascript
import { ARMchain, Wallet } from '@armchain/sdk';

// Initialize ARMchain
const armchain = new ARMchain({
  network: 'mainnet',
  apiKey: 'your-api-key'
});

// Create wallet
const wallet = new Wallet(privateKey);

// Connect wallet to ARMchain
armchain.setWallet(wallet);
```

#### Advanced Features

##### Quantum-Safe Transactions
```javascript
const quantumTx = await armchain.createQuantumTransaction({
  to: recipient,
  value: amount,
  quantumProof: true
});
```

##### Multi-Signature Support
```javascript
const multiSigTx = await armchain.createMultiSigTransaction({
  to: recipient,
  value: amount,
  signers: [address1, address2, address3],
  threshold: 2
});
```

### Code Examples

#### Connecting to ARMchain

```javascript
import { ARMchain } from '@armchain/sdk';

const armchain = new ARMchain({
  network: 'mainnet', // or 'testnet'
  rpcUrl: 'https://rpc.armchain.io'
});

// Check connection
const isConnected = await armchain.isConnected();
console.log('Connected:', isConnected);
```

#### Reading Blockchain Data

```javascript
// Get latest block
const latestBlock = await armchain.getLatestBlock();

// Get transaction count
const txCount = await armchain.getTransactionCount(address);

// Get balance
const balance = await armchain.getBalance(address);
```

#### Interacting with Smart Contracts

```javascript
import { Contract } from '@armchain/sdk';

const contract = new Contract(contractAddress, abi, wallet);

// Read from contract
const result = await contract.methods.balanceOf(address).call();

// Write to contract
const tx = await contract.methods.transfer(recipient, amount).send({
  gasLimit: '50000'
});
```

## Development Tools

### ARMchain CLI

The command-line interface for ARMchain development.

```bash
# Install CLI
npm install -g @armchain/cli

# Initialize project
armchain init my-dapp

# Compile contracts
armchain compile

# Deploy contracts
armchain deploy --network testnet

# Verify contracts
armchain verify <contract-address>
```

### Testing Framework

```javascript
import { ARMTest } from '@armchain/testing';

describe('My Contract', () => {
  let contract;

  beforeEach(async () => {
    contract = await ARMTest.deployContract('MyContract');
  });

  it('should transfer tokens', async () => {
    await contract.methods.transfer(recipient, amount).send();
    const balance = await contract.methods.balanceOf(recipient).call();
    expect(balance).to.equal(amount);
  });
});
```

### Debugging

#### Transaction Debugging
```javascript
const debug = await armchain.debugTransaction(txHash);
console.log('Gas used:', debug.gasUsed);
console.log('Trace:', debug.trace);
```

#### Contract Events
```javascript
contract.events.Transfer({
  fromBlock: 0
}, (error, event) => {
  if (error) console.error(error);
  console.log('Transfer event:', event.returnValues);
});
```

## Best Practices

### Security Guidelines

1. **Always validate inputs** in your smart contracts
2. **Use quantum-safe cryptography** for sensitive operations
3. **Implement proper access controls**
4. **Regular security audits** for production contracts

### Performance Optimization

1. **Minimize gas usage** in smart contracts
2. **Use efficient data structures**
3. **Batch transactions** when possible
4. **Implement proper caching** in your dApps

### Code Quality

1. **Write comprehensive tests**
2. **Use linting tools**
3. **Follow coding standards**
4. **Document your code** thoroughly

## Support

- **Documentation:** [docs.armchain.io](https://docs.armchain.io)
- **GitHub:** [github.com/armchain](https://github.com/armchain)
- **Discord:** [discord.gg/armchain](https://discord.gg/armchain)
- **Stack Overflow:** Tag with `armchain`

