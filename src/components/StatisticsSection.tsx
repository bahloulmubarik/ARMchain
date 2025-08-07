const stats = [
  { number: '$2.1B', label: 'Stablecoin Supply' },
  { number: '117M+', label: 'Unique Addresses' },
  { number: '$141B', label: 'Transfer Volume' },
  { number: '5.3B+', label: 'Total Transactions' },
  { number: '$0.01', label: 'Avg. Tx Fee' },
  { number: '1,000', label: 'TPS' },
];

export function StatisticsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 tracking-tight">
          By the numbers
        </h2>
        
        {/* Stats Grid - Clean and consistent layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full max-w-[280px] h-[280px] bg-[#1a1a1a]/60 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-600 hover:text-white transition-all duration-300 group cursor-pointer flex flex-col justify-center hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base group-hover:text-white/90">
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
