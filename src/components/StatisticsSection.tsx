const stats = [
  { number: '$2.1B', label: 'Stablecoin Supply', transform: '' },
  { number: '117M+', label: 'Unique Addresses', transform: 'lg:translate-y-24 translate-y-12' },
  { number: '$141B', label: 'Transfer Volume', transform: '' },
  { number: '5.3B+', label: 'Total Transactions', transform: 'translate-y-8' },
  { number: '$0.01', label: 'per average transaction', transform: 'lg:translate-y-32 translate-y-16' },
  { number: '1,000', label: 'TPS', transform: 'translate-y-8' },
];

export function StatisticsSection() {
  return (
    <section
      className="relative py-64 px-16" // Increased padding for larger section
      style={{
        backgroundImage: 'url(/assets/feature.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
          By the numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 justify-items-center max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`w-full max-w-[370px] h-[390px] bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-8
                         hover:bg-purple-600 hover:text-white transition-all duration-300
                         group cursor-pointer hover:scale-105 flex items-end ${stat.transform}`}
            >
              {/* Bottom-left content for all cards */}
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-3 group-hover:text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg lg:text-xl group-hover:text-white/90">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
