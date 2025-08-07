export function MobileNodesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Run Mobile Nodes
              </h2>
              <h3 className="text-xl text-gray-300 mb-6 font-medium">
                Empower decentralized infrastructure.
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Join the ARMchain network by running lightweight mobile nodes.
                Contribute to decentralization while earning rewards through our
                innovative proof-of-stake consensus mechanism.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                  Start Running
                </button>
                <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 font-medium px-8 py-3 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right - Placeholder for 3D Image */}
            <div className="flex justify-center items-start relative h-60 overflow-visible">
              <img
                src="/assets/mobilenode.png"
                alt="Mobile Node 3D Asset"
                className="w-[29rem] h-[29rem] object-contain absolute left-1/2 -translate-x-[30%] -top-32 z-10"
                style={{ maxWidth: 'none', maxHeight: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
