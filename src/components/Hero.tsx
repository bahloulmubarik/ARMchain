import { Shield, Zap, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-end justify-center relative overflow-hidden pb-20 pt-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Herosection.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7)' }}
        />
      </div>

      <div className="relative z-10 text-center animate-fade-in">
        {/* 3D Orb Animation */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-full animate-float blur-sm opacity-60"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-[#A25CFE] to-[#8129FF] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-12 tracking-tight leading-tight">
          The New Era of<br />Blockchain
        </h1>

        {/* Badge Icons */}
        <div className="flex justify-center space-x-8 mb-16">
          <div className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Shield className="h-6 w-6 group-hover:drop-shadow-lg transition-all" />
            <span className="text-sm font-medium">Quantum</span>
          </div>
          <div className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Zap className="h-6 w-6 group-hover:drop-shadow-lg transition-all" />
            <span className="text-sm font-medium">Blockchain</span>
          </div>
          <div className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Sparkles className="h-6 w-6 group-hover:drop-shadow-lg transition-all" />
            <span className="text-sm font-medium">AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
