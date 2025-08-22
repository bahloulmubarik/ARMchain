const stats = [
  { number: '$2.1B', label: 'Stablecoin Supply' },
  { number: '117M+', label: 'Unique Addresses' },
  { number: '$141B', label: 'Transfer Volume' },
  { number: '5.3B+', label: 'Total Transactions' },
  { number: '$0.01', label: 'Avg. Tx Fee' },
  { number: '10,000', label: 'TPS' },
];

export function StatisticsSection() {
  return (
    <section
      className="relative py-32 px-8" // Increased padding for larger section
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`w-full max-w-[360px] h-[360px] bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-8
                         hover:bg-blue-600 hover:text-white transition-all duration-300
                         group cursor-pointer flex items-end hover:scale-105
                         ${index % 3 === 1 ? 'lg:mt-16' : ''}`} // More drop for middle column
            >
              {/* Bottom-left content */}
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
