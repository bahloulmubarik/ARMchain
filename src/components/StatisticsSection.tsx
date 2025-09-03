const stats = [
  { number: '$2.1B', label: 'Stablecoin Supply' },
  { number: '117M+', label: 'Unique Addresses' },
  { number: '$141B', label: 'Transfer Volume' },
  { number: '5.3B+', label: 'Transactions' },
  { number: '$0.01', label: 'transaction' },
  { number: '1,000', label: 'TPS' },
] as const;

export function StatisticsSection() {
  return (
    <section
      className="relative py-12 px-2 sm:py-24 sm:px-4 md:py-32 md:px-8"
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 tracking-tight">
          By the numbers
        </h2>

        {/* Stats Grid - 12 Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 max-w-6xl mx-auto h-[600px]">
          {/* Large Card - Left (6 columns, full height) - CENTER TEXT with Video */}
          <div className="col-span-1 md:col-span-1 lg:col-span-6 lg:row-span-2 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer hover:scale-105 flex items-center justify-center text-center border border-white/10 shadow-xl relative group/card">
            {/* Video Background */}
            <video
              src="/assets/cards/supply.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            />

            {/* Text Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 group-hover/card:items-end group-hover/card:justify-start p-6">
              <div className="text-center group-hover/card:text-left w-full">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-300 group-hover/card:opacity-100">
                  {stats[0]?.number}
                </div>
                <div className="text-gray-300 text-lg md:text-xl lg:text-2xl font-medium transition-all duration-300">
                  {stats[0]?.label}
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card - Middle (3 columns, full height) - Unique Addresses */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer hover:scale-105 flex items-center justify-center text-center border border-white/10 shadow-xl relative group/card">
            {/* Video Background */}
            <video
              src="/assets/cards/address.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            />

            {/* Text Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 group-hover/card:items-end group-hover/card:justify-start p-6">
              <div className="text-center group-hover/card:text-left w-full">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 transition-all duration-300">
                  {stats[1]?.number}
                </div>
                <div className="text-gray-300 text-base md:text-lg lg:text-xl font-medium transition-all duration-300">
                  {stats[1]?.label}
                </div>
              </div>
            </div>
          </div>

          {/* Small Card - Top Right (3 columns, half height) - Transfer Volume */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-1 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer hover:scale-105 flex items-center justify-center text-center border border-white/10 shadow-xl relative group/card">
            {/* Video Background */}
            <video
              src="/assets/cards/volume.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            />

            {/* Text Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 group-hover/card:items-end group-hover/card:justify-start p-6">
              <div className="text-center group-hover/card:text-left w-full">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 transition-all duration-300">
                  {stats[2]?.number}
                </div>
                <div className="text-gray-300 text-base md:text-lg lg:text-xl font-medium transition-all duration-300">
                  {stats[2]?.label}
                </div>
              </div>
            </div>
          </div>

          {/* Small Card - Bottom Right (3 columns, half height) - Total Transactions */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-1 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer hover:scale-105 flex items-center justify-center text-center border border-white/10 shadow-xl relative group/card">
            {/* Video Background */}
            <video
              src="/assets/cards/total.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            />

            {/* Text Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 group-hover/card:items-end group-hover/card:justify-start p-6">
              <div className="text-center group-hover/card:text-left w-full">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 transition-all duration-300">
                  {stats[2]?.number}
                </div>
                <div className="text-gray-300 text-base md:text-lg lg:text-xl font-medium transition-all duration-300">
                  {stats[2]?.label}
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Additional Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mt-4">
          {/* Wide Card - Bottom Left - Transactions */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer hover:scale-105 flex items-center justify-center text-center border border-white/10 shadow-xl h-[180px] relative group/card">
            {/* Video Background */}
            <video
              src="/assets/cards/trans.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            />

            {/* Text Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 group-hover/card:justify-between p-6">
              <div className="text-center w-1/2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {stats[4]?.number}
                </div>
                <div className="text-gray-300 text-base md:text-lg lg:text-xl font-medium">
                  {stats[4]?.label}
                </div>
              </div>
            </div>
          </div>

          {/* Wide Card - Bottom Right - TPS */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer hover:scale-105 flex items-center justify-center text-center border border-white/10 shadow-xl h-[180px] relative group/card">
            {/* Video Background */}
            <video
              src="/assets/cards/tps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            />

            {/* Text Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 group-hover/card:justify-between p-6">
              <div className="text-center w-1/2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {stats[5]?.number}
                </div>
                <div className="text-gray-300 text-base md:text-lg lg:text-xl font-medium">
                  {stats[5]?.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
