export function QSecureWalletSection() {
  return (
    <section
      className="relative py-24 px-4"
      style={{
        backgroundImage: 'url(/assets/feature.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-gray-700/50 relative overflow-visible min-h-[380px]"> {/* slightly less rounded */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
            src="/assets/Background/qcback.mp4"
          ></video>
            <div className="flex flex-col gap-8 relative z-10">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                    QSecure Wallet
                  </h2>
                  <h3 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium leading-relaxed">
                    Quantum-safe digital asset security.
                  </h3>
                  <p className="text-base text-gray-400 mb-4 leading-relaxed">
                    Experience the future of digital asset security with QSecure Wallet,
                    the first quantum-resistant wallet built specifically for ARMchain.
                    Protect your assets with military-grade quantum-safe cryptography.
                  </p>
                </div>

                {/* Right - 3D Image with Overflow Effect */}
                <div className="flex justify-center items-center relative h-60 overflow-visible">
                  <img
                    src="/assets/mobilenode1.png"
                    alt="QSecure Wallet 3D Asset"
                    className="w-48 h-48 object-contain relative mx-auto md:w-[32rem] md:h-[31rem] md:absolute md:left-1/2 md:-translate-x-[25%] md:-top-24 md:z-20 md:drop-shadow-2xl"
                    style={{ maxWidth: 'none', maxHeight: 'none' }}
                  />
                </div>
              </div>

              {/* CTA Buttons at Bottom */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                <a href="/docs/qsecure-wallet" className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-center shadow-lg">
                  Download Wallet
                </a>
                <a href="/docs/qsecure-wallet" className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 font-medium px-8 py-3 rounded-full transition-colors text-center">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

