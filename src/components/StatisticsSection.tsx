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
      className="relative py-24 px-4 sm:py-32 sm:px-8 md:py-48 md:px-16"
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-16 tracking-tight">
          By the numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 justify-items-center max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`w-full max-w-[370px] h-[220px] sm:h-[300px] md:h-[340px] lg:h-[390px] bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6 sm:p-8
                         hover:bg-purple-600 hover:text-white transition-all duration-300
                         group cursor-pointer hover:scale-105 flex items-end ${stat.transform}`}
            >
              {/* Bottom-left content for all cards */}
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 group-hover:text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-base sm:text-lg md:text-xl group-hover:text-white/90">
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
