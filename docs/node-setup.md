# Node Setup Guide

Learn how to set up and run different types of ARMchain nodes to participate in the quantum-resistant blockchain network.

## Node Types Overview

ARMchain supports multiple node types to accommodate different use cases and hardware requirements:

### Validator Nodes
- **Purpose**: Participate in consensus and block production
- **Requirements**: High uptime, significant stake, robust hardware
- **Rewards**: Block rewards and transaction fees
- **Minimum Stake**: 32,000 ARM tokens

### Full Nodes
- **Purpose**: Maintain complete blockchain history and validate transactions
- **Requirements**: Adequate storage and bandwidth
- **Function**: Support network decentralization and serve light clients
- **Stake**: Optional (improves network reputation)

### Mobile Nodes
- **Purpose**: Lightweight participation for mobile devices
- **Requirements**: Mobile device with internet connection
- **Function**: Transaction relay and network strengthening
- **Rewards**: Small incentives for participation

### Archive Nodes
- **Purpose**: Store complete historical data
- **Requirements**: Large storage capacity
- **Function**: Support blockchain explorers and data services
- **Compensation**: Service fees from data consumers

## Hardware Requirements

### Validator Node Requirements

#### Minimum Specifications
```
CPU: 8 cores, 3.0+ GHz (quantum-resistant operations intensive)
RAM: 32 GB DDR4
Storage: 2 TB NVMe SSD (high IOPS required)
Network: 1 Gbps symmetric connection
Uptime: 99.9% availability required
```

#### Recommended Specifications
```
CPU: 16 cores, 3.5+ GHz (AMD EPYC or Intel Xeon)
RAM: 64 GB DDR4 ECC
Storage: 4 TB NVMe SSD RAID 1
Network: 10 Gbps symmetric connection
Backup: UPS and redundant internet connections
```

#### Quantum-Safe Hardware Security Module (HSM)
For maximum security, consider hardware with:
- TPM 2.0 support for secure key storage
- Hardware random number generators
- Secure enclaves for quantum-safe operations

### Full Node Requirements

#### Minimum Specifications
```
CPU: 4 cores, 2.5+ GHz
RAM: 16 GB
Storage: 1 TB SSD
Network: 100 Mbps symmetric
```

#### Recommended Specifications
```
CPU: 8 cores, 3.0+ GHz
RAM: 32 GB
Storage: 2 TB NVMe SSD
Network: 500 Mbps symmetric
```

### Mobile Node Requirements

#### Minimum Specifications
```
OS: iOS 13+ or Android 8+
RAM: 4 GB
Storage: 8 GB free space
Network: 4G/5G or WiFi connection
Battery: 3000+ mAh (for continuous operation)
```

## Validator Setup

### Prerequisites

1. **ARM Tokens**: Minimum 32,000 ARM for staking
2. **Hardware**: Meeting validator requirements
3. **Technical Knowledge**: Basic command line and networking skills
4. **Time Commitment**: Regular monitoring and maintenance

### Installation Process

#### Step 1: System Preparation

**Ubuntu 22.04 LTS (Recommended):**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y curl git build-essential pkg-config \
  libssl-dev libclang-dev cmake

# Install Rust (for building from source)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
```

#### Step 2: Download ARMchain Node Software

```bash
# Download latest release
wget https://releases.armchain.io/latest/armchain-node-linux-amd64.tar.gz

# Extract and install
tar -xzf armchain-node-linux-amd64.tar.gz
sudo mv armchain-node /usr/local/bin/
sudo chmod +x /usr/local/bin/armchain-node
```

#### Step 3: Generate Validator Keys

```bash
# Generate quantum-safe validator keys
armchain-node generate-keys \
  --output-dir ~/.armchain/validator \
  --key-type dilithium \
  --backup-type sphincs

# This creates:
# - validator_private_key.pem (CRYSTALS-Dilithium)
# - validator_public_key.pem
# - backup_private_key.pem (SPHINCS+)
# - backup_public_key.pem
```

**Important**: Securely backup these keys! Store copies in multiple secure locations.

#### Step 4: Configuration

Create configuration file at `~/.armchain/config.toml`:

```toml
[validator]
enabled = true
private_key_path = "~/.armchain/validator/validator_private_key.pem"
backup_key_path = "~/.armchain/validator/backup_private_key.pem"

[network]
listen_address = "0.0.0.0:30303"
public_address = "YOUR_PUBLIC_IP:30303"
max_peers = 50
bootstrap_nodes = [
  "enode://abc123...@bootstrap1.armchain.io:30303",
  "enode://def456...@bootstrap2.armchain.io:30303",
  "enode://ghi789...@bootstrap3.armchain.io:30303"
]

[consensus]
quantum_safe_mode = true
signature_scheme = "dilithium"
backup_scheme = "sphincs"

[rpc]
enabled = true
listen_address = "127.0.0.1:8545"
cors_origins = ["*"]

[metrics]
enabled = true
listen_address = "127.0.0.1:9090"

[logging]
level = "info"
file_path = "~/.armchain/logs/node.log"
max_file_size = "100MB"
max_files = 10
```

#### Step 5: Initialize Node

```bash
# Initialize the node with genesis configuration
armchain-node init \
  --config ~/.armchain/config.toml \
  --data-dir ~/.armchain/data \
  --network mainnet

# Download genesis file
wget https://genesis.armchain.io/mainnet/genesis.json \
  -O ~/.armchain/data/genesis.json
```

#### Step 6: Start Node

```bash
# Start the node
armchain-node start \
  --config ~/.armchain/config.toml \
  --data-dir ~/.armchain/data
```

#### Step 7: Stake Tokens

Once your node is synced, stake your tokens:

```bash
# Create staking transaction
armchain-cli stake deposit \
  --validator-pubkey $(cat ~/.armchain/validator/validator_public_key.pem) \
  --amount 32000 \
  --fee 0.01 \
  --private-key ~/.armchain/wallet/private_key.pem

# Confirm staking transaction
armchain-cli transaction status <transaction_hash>
```

### Validator Management

#### Monitoring Tools

**System Monitoring:**
```bash
# Install monitoring tools
sudo apt install -y prometheus grafana

# Configure Prometheus to scrape node metrics
# Edit /etc/prometheus/prometheus.yml
```

**Custom Dashboard:**
ARMchain provides pre-built Grafana dashboards:
- Node performance metrics
- Consensus participation
- Quantum signature performance
- Network connectivity status

#### Key Management

**Best Practices:**
1. **Hardware Security Modules**: Use HSMs for production validators
2. **Key Rotation**: Regularly rotate keys (every 6 months)
3. **Backup Strategy**: Multiple secure, geographically distributed backups
4. **Access Control**: Limit access to key files

**Key Rotation Process:**
```bash
# Generate new keys
armchain-node generate-keys --output-dir ~/.armchain/validator-new

# Create key update transaction
armchain-cli validator update-keys \
  --old-key ~/.armchain/validator/validator_private_key.pem \
  --new-key ~/.armchain/validator-new/validator_private_key.pem \
  --fee 1.0

# After confirmation, replace old keys
mv ~/.armchain/validator ~/.armchain/validator-old
mv ~/.armchain/validator-new ~/.armchain/validator
```

#### Slashing Prevention

**Common Slashing Conditions:**
1. **Double Signing**: Running multiple validator instances
2. **Long Offline**: Extended periods without participation
3. **Invalid Attestations**: Signing conflicting information

**Prevention Strategies:**
```bash
# Use slashing protection database
[slashing_protection]
enabled = true
database_path = "~/.armchain/slashing_protection.db"

# Monitor validator health
armchain-cli validator status --address <validator_address>

# Set up alerting for offline periods
```

## Mobile Node Setup

### iOS Setup

#### Installation
1. Download ARMchain Mobile from the App Store
2. Create or import wallet
3. Enable mobile node participation
4. Configure participation settings

#### Configuration
```json
{
  "mobile_node": {
    "enabled": true,
    "max_bandwidth": "1GB_per_day",
    "battery_threshold": 20,
    "wifi_only": false,
    "participation_level": "standard"
  }
}
```

### Android Setup

#### Installation via APK
```bash
# Download from official source
wget https://releases.armchain.io/mobile/armchain-mobile-android-latest.apk

# Install (enable unknown sources)
adb install armchain-mobile-android-latest.apk
```

#### Configuration Options
- **Participation Level**: Light, Standard, Full
- **Resource Limits**: Battery, bandwidth, storage
- **Network Preferences**: WiFi-only, cellular allowed
- **Reward Settings**: Automatic claiming, manual claiming

### Mobile Node Incentives

**Reward Structure:**
```
Base Reward: 0.1 ARM per day (standard participation)
Uptime Bonus: +50% for >95% uptime
Network Bonus: +25% for high-traffic areas
Loyalty Bonus: +10% for >30 days continuous operation
```

**Payout Schedule:**
- Daily micro-rewards
- Weekly aggregated payments
- Gas-optimized batching

## Hardware Recommendations

### Server Providers

#### Cloud Providers
**AWS:**
- Instance: c5.4xlarge or better
- Storage: gp3 SSD with provisioned IOPS
- Network: Enhanced networking enabled

**Google Cloud:**
- Instance: c2-standard-16 or better
- Storage: SSD persistent disks
- Network: Premium tier networking

**Azure:**
- Instance: F16s_v2 or better
- Storage: Premium SSD managed disks
- Network: Accelerated networking

#### Dedicated Server Providers
- **Hetzner**: Excellent price/performance for European users
- **OVH**: Global presence with competitive pricing
- **DigitalOcean**: Simple setup and management
- **Vultr**: High-performance compute instances

### DIY Hardware Builds

#### Budget Validator Build (~$2,500)
```
CPU: AMD Ryzen 7 5800X
Motherboard: ASUS B550-F Gaming WiFi
RAM: 32GB Corsair Vengeance LPX DDR4-3200
Storage: 2TB Samsung 980 Pro NVMe SSD
PSU: Corsair RM750x 80+ Gold
Case: Fractal Design Define 7
Network: Intel X550-T2 10GbE NIC
```

#### Professional Validator Build (~$5,000)
```
CPU: AMD EPYC 7453 28-Core
Motherboard: Supermicro H12SSL-i
RAM: 64GB Samsung ECC DDR4-3200
Storage: 2x 2TB Samsung 980 Pro (RAID 1)
PSU: Corsair AX1000 80+ Titanium
Case: Supermicro CSE-515 1U Rackmount
Network: Mellanox ConnectX-6 25GbE
```

### Security Hardening

#### Operating System
```bash
# Disable root login
sudo passwd -l root

# Configure firewall
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 30303/tcp  # P2P
sudo ufw allow 22/tcp     # SSH (restrict to your IP)

# Enable automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

#### Network Security
```bash
# Use fail2ban to prevent brute force attacks
sudo apt install fail2ban

# Configure SSH key authentication only
sudo vim /etc/ssh/sshd_config
# Set: PasswordAuthentication no
# Set: PubkeyAuthentication yes
```

#### Node Security
```bash
# Run node as non-root user
sudo useradd --system --shell /bin/false armchain
sudo chown -R armchain:armchain ~/.armchain

# Use systemd for process management
sudo vim /etc/systemd/system/armchain-node.service
```

**Systemd Service File:**
```ini
[Unit]
Description=ARMchain Node
After=network.target

[Service]
Type=simple
User=armchain
ExecStart=/usr/local/bin/armchain-node start --config /home/armchain/.armchain/config.toml
Restart=always
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

## Monitoring and Maintenance

### Health Checks

#### Node Status
```bash
# Check node status
armchain-cli node status

# Check peer connections
armchain-cli node peers

# Check sync status
armchain-cli node sync

# Check validator performance
armchain-cli validator performance --address <validator_address>
```

#### System Health
```bash
# Check disk space
df -h

# Check memory usage
free -m

# Check CPU usage
top -p $(pgrep armchain-node)

# Check network connectivity
netstat -tlnp | grep armchain-node
```

### Automated Monitoring

#### Prometheus Metrics
Key metrics to monitor:
- `armchain_node_peers_connected`
- `armchain_node_sync_height`
- `armchain_validator_attestations_signed`
- `armchain_consensus_participation_rate`
- `armchain_quantum_signatures_per_second`

#### Alerting Rules
```yaml
# prometheus-alerts.yml
groups:
  - name: armchain-node
    rules:
      - alert: NodeOffline
        expr: up{job="armchain-node"} == 0
        for: 5m
        annotations:
          summary: "ARMchain node is offline"

      - alert: LowPeerCount
        expr: armchain_node_peers_connected < 5
        for: 10m
        annotations:
          summary: "Low peer count detected"

      - alert: SyncLagging
        expr: armchain_node_sync_height < armchain_network_latest_height - 10
        for: 15m
        annotations:
          summary: "Node sync is lagging behind network"
```

### Updates and Upgrades

#### Software Updates
```bash
# Check for updates
armchain-cli version check

# Download new version
wget https://releases.armchain.io/latest/armchain-node-linux-amd64.tar.gz

# Backup current installation
sudo cp /usr/local/bin/armchain-node /usr/local/bin/armchain-node.backup

# Install update
tar -xzf armchain-node-linux-amd64.tar.gz
sudo mv armchain-node /usr/local/bin/
sudo systemctl restart armchain-node
```

#### Protocol Upgrades
Protocol upgrades are coordinated through governance:

1. **Announcement**: Upgrade details published
2. **Testing Period**: Test on staging networks
3. **Preparation**: Update node software
4. **Activation**: Automatic activation at specified block height

### Troubleshooting

#### Common Issues

**Node Won't Start:**
```bash
# Check logs
tail -f ~/.armchain/logs/node.log

# Verify configuration
armchain-node config validate --config ~/.armchain/config.toml

# Check file permissions
ls -la ~/.armchain/validator/
```

**Sync Issues:**
```bash
# Reset corrupted database
armchain-node reset --data-dir ~/.armchain/data --keep-keys

# Re-download genesis
wget https://genesis.armchain.io/mainnet/genesis.json \
  -O ~/.armchain/data/genesis.json
```

**Validator Not Participating:**
```bash
# Check staking status
armchain-cli validator status --address <validator_address>

# Verify key files
armchain-cli validator verify-keys \
  --private-key ~/.armchain/validator/validator_private_key.pem
```

#### Support Resources

- **Documentation**: [docs.armchain.io/node-setup](https://docs.armchain.io/node-setup)
- **Discord**: #node-operators channel
- **GitHub**: Submit issues for technical problems
- **Telegram**: @ARMchainNodes for community support

## Economics and Rewards

### Validator Economics

#### Revenue Streams
1. **Block Rewards**: Fixed ARM per block produced
2. **Transaction Fees**: Percentage of fees in produced blocks
3. **MEV**: Maximal Extractable Value sharing
4. **Staking Rewards**: Interest on staked tokens

#### Cost Considerations
1. **Hardware**: Initial investment and depreciation
2. **Electricity**: Power consumption costs
3. **Internet**: Bandwidth and connectivity costs
4. **Maintenance**: Time and operational expenses
5. **Slashing Risk**: Potential penalty costs

#### Profitability Calculator

**Example Calculation:**
```
Stake: 50,000 ARM
Annual Reward Rate: 8%
Hardware Cost: $3,000/year
Electricity: $1,200/year
Internet: $600/year

Annual Revenue: 50,000 × 0.08 = 4,000 ARM
Annual Costs: $4,800
Break-even ARM Price: $1.20

If ARM = $2.00:
Annual Profit: $8,000 - $4,800 = $3,200
ROI: 20.3%
```

### Mobile Node Economics

#### Micro-Rewards System
```
Daily Base Reward: 0.1 ARM
Monthly Potential: 3 ARM
Annual Potential: 36.5 ARM

Assumptions:
- 90% uptime
- Standard participation level
- No bonus multipliers
```

#### Scaling Rewards
Operating multiple mobile devices:
```
1 Device: ~36 ARM/year
5 Devices: ~182 ARM/year
10 Devices: ~365 ARM/year

Note: Geographic distribution provides bonus multipliers
```

---

*This guide covers the essential aspects of running ARMchain nodes. For the most up-to-date information and detailed technical specifications, always refer to the official documentation at docs.armchain.io.*

