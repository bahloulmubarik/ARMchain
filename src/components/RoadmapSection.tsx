import { Rocket, Coins, Building, Shield, Globe, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    quarter: 'Q3 2025',
    title: 'Testnet Launch',
    description: 'Deploy quantum-resistant testnet with mobile node support',
    icon: Rocket,
    status: 'upcoming',
    features: ['Quantum-resistant cryptography', 'Mobile node integration', 'Developer tools release']
  },
  {
    quarter: 'Q4 2025',
    title: 'Token Launch & Mainnet',
    description: 'Official token launch and mainnet deployment',
    icon: Coins,
    status: 'upcoming',
    features: ['Mainnet launch', 'Token distribution', 'Staking mechanisms']
  },
  {
    quarter: 'Q1 2026',
    title: 'Enterprise Adoption',
    description: 'Scalability improvements and enterprise partnerships',
    icon: Building,
    status: 'planned',
    features: ['Enterprise partnerships', 'Scalability upgrades', 'B2B solutions']
  },
  {
    quarter: 'Q2 2026',
    title: 'DeFi Ecosystem',
    description: 'Launch comprehensive DeFi protocols and services',
    icon: Shield,
    status: 'planned',
    features: ['DEX launch', 'Lending protocols', 'Yield farming']
  },
  {
    quarter: 'Q3 2026',
    title: 'Global Expansion',
    description: 'Worldwide adoption and regulatory compliance',
    icon: Globe,
    status: 'planned',
    features: ['Global compliance', 'Regional partnerships', 'Cross-chain bridges']
  },
  {
    quarter: 'Q4 2026',
    title: 'Innovation Hub',
    description: 'Advanced features and next-gen blockchain capabilities',
    icon: Trophy,
    status: 'planned',
    features: ['AI integration', 'Advanced smart contracts', 'Quantum computing research']
  }
];

export function RoadmapSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Roadmap
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#8129FF] to-[#A25CFE] h-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {roadmapItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    {isLeft ? (
                      <>
                        {/* Left Side Content */}
                        <div className="w-1/2 pr-12">
                          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 border border-[#8129FF]/30 hover:scale-105 transition-all duration-300 group shadow-lg shadow-[#8129FF]/10">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-[#A25CFE] font-bold text-lg">{item.quarter}</span>
                              <div className="w-12 h-12 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A25CFE] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            <ul className="space-y-2">
                              {item.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-gray-400 flex items-center">
                                  <div className="w-2 h-2 bg-[#A25CFE] rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Center Timeline Node */}
                        <div className="w-6 h-6 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-full border-4 border-black z-10 relative"></div>

                        {/* Right Side Empty */}
                        <div className="w-1/2 pl-12"></div>
                      </>
                    ) : (
                      <>
                        {/* Left Side Empty */}
                        <div className="w-1/2 pr-12"></div>

                        {/* Center Timeline Node */}
                        <div className="w-6 h-6 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-full border-4 border-black z-10 relative"></div>

                        {/* Right Side Content */}
                        <div className="w-1/2 pl-12">
                          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 border border-[#8129FF]/30 hover:scale-105 transition-all duration-300 group shadow-lg shadow-[#8129FF]/10">
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-[#A25CFE] font-bold text-lg">{item.quarter}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A25CFE] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{item.description}</p>
                            <ul className="space-y-2">
                              {item.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-gray-400 flex items-center">
                                  <div className="w-2 h-2 bg-[#A25CFE] rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 border border-[#8129FF]/30 hover:scale-105 transition-all duration-300 group shadow-lg shadow-[#8129FF]/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#A25CFE] font-bold text-lg">{item.quarter}</span>
                        <div className="w-12 h-12 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A25CFE] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <div className="w-2 h-2 bg-[#A25CFE] rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
