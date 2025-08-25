import { motion } from "framer-motion";

const roadmapItems = [
  {
    quarter: "Q3 2025",
    title: "Testnet Launch",
    description: "Deploy quantum-resistant testnet with mobile node support",
    features: [
      "Quantum-resistant cryptography",
      "Mobile node integration",
      "Developer tools release",
    ],
    backgroundImage: "/assets/roadmap/q3.png", // placeholder
  },
  {
    quarter: "Q4 2025",
    title: "Token Launch & Mainnet",
    description: "Official token launch and mainnet deployment",
    features: ["Mainnet launch", "Token distribution", "Staking mechanisms"],
    backgroundImage: "/assets/roadmap/q4.png",
  },
  {
    quarter: "Q1 2026",
    title: "Enterprise Adoption",
    description: "Scalability improvements and enterprise partnerships",
    features: ["Enterprise partnerships", "Scalability upgrades", "B2B solutions"],
    backgroundImage: "/assets/roadmap/q1.png",
  },
  {
    quarter: "Q2 2026",
    title: "DeFi Ecosystem",
    description: "Launch comprehensive DeFi protocols and services",
    features: ["DEX launch", "Lending protocols", "Yield farming"],
    backgroundImage: "/assets/roadmap/q2.png",
  },
  {
    quarter: "Q3 2026",
    title: "Global Expansion",
    description: "Worldwide adoption and regulatory compliance",
    features: ["Global compliance", "Regional partnerships", "Cross-chain bridges"],
    backgroundImage: "/assets/roadmap/q3-2026.png",
  },
  {
    quarter: "Q4 2026",
    title: "Innovation Hub",
    description: "Advanced features and next-gen blockchain capabilities",
    features: [
      "AI integration",
      "Advanced smart contracts",
      "Quantum computing research",
    ],
    backgroundImage: "/assets/roadmap/q4-2026.png",
  },
];

function RoadmapCard({
  quarter,
  title,
  description,
  features,
  backgroundImage,
}: any) {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
      {/* Background Image Placeholder */}
      {backgroundImage && (
        <div
          className="absolute inset-0 h-full w-full opacity-30"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <span className="text-purple-400 font-bold text-sm">{quarter}</span>
          <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-gray-300">{description}</p>
        </div>

        <ul className="mt-3 space-y-1">
          {features.map((feature: string, idx: number) => (
            <li
              key={idx}
              className="text-xs text-gray-400 flex items-center before:mr-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-purple-500"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-purple-400 h-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {roadmapItems.map((item, index) => {
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
                  {/* Desktop */}
                  <div className="hidden lg:flex items-center">
                    {isLeft ? (
                      <>
                        {/* Left Side */}
                        <div className="w-1/2 pr-12">
                          <RoadmapCard {...item} />
                        </div>
                        {/* Center Dot */}
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full border-4 border-black z-10 relative"></div>
                        <div className="w-1/2 pl-12"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 pr-12"></div>
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full border-4 border-black z-10 relative"></div>
                        <div className="w-1/2 pl-12">
                          <RoadmapCard {...item} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="lg:hidden">
                    <RoadmapCard {...item} />
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
