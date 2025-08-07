const partners = [
  'TechCorp', 'BlockchainVentures', 'CryptoFunds', 'DeFiLabs', 
  'QuantumSystems', 'NextGenVC', 'FutureFinance', 'InnovateCapital'
];

export function PartnersSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
          Trusted by the pioneers
        </h2>
        
        {/* Animated Logo Grid */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32"
              >
                <div className="text-gray-500 font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
