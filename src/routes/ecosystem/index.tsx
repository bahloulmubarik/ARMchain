import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { ArrowRight, Code, Users, MessageSquare, Shield } from 'lucide-react';

export const Route = createFileRoute("/ecosystem/")({
  component: Ecosystem,
});

function Ecosystem() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                Our Shining Ecosystem
              </h1>
            </div>
            
            {/* Right side */}
            <div>
              <p className="text-xl text-gray-300 leading-relaxed">
                ARMchain's ecosystem brings together partners, developers, and innovators to build quantum-resistant blockchain solutions across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Partners</h2>
          
          <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {Array.from({ length: 32 }, (_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-800/40 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gray-800/60 transition-colors border border-white/10 group hover:scale-105 duration-300"
              >
                <div className="text-gray-400 text-xs group-hover:text-white transition-colors">P{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Out More Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Find Out More</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FindOutMoreCard
              title="Builder"
              description="Join our builder program and get access to grants, technical support, and early features."
              icon={Code}
              href="/docs"
            />
            <FindOutMoreCard
              title="Ambassador"
              description="Become an ARMchain ambassador and help grow our community worldwide."
              icon={Users}
              href="/community"
            />
            <FindOutMoreCard
              title="Community"
              description="Connect with developers, validators, and enthusiasts building the future."
              icon={MessageSquare}
              href="/community"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Partners Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Infrastructure Partners</h2>
          
          {/* Armor Highlight Card */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-white/20 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8129FF]/5 to-[#A25CFE]/5"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="grid-pattern-small h-full w-full"></div>
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8129FF] group-hover:to-[#A25CFE] group-hover:bg-clip-text transition-all duration-500">
                      Armor
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                      Quantum-Safe Wallet for ARMchain
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      Experience the future of digital asset security with Armor, the first quantum-resistant wallet built specifically for ARMchain. Protect your assets against emerging quantum computing threats while enjoying seamless transactions.
                    </p>
                  </div>
                  
                  <button className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 group-hover:scale-105">
                    Connect Now
                  </button>
                </div>
                
                {/* Right Side - 3D Asset Placeholder */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#8129FF]/20 to-[#A25CFE]/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-[#8129FF]/40 transition-all duration-500 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8129FF]/10 to-[#A25CFE]/10 rounded-3xl blur-xl group-hover:from-[#8129FF]/20 group-hover:to-[#A25CFE]/20 transition-all duration-500"></div>
                    
                    {/* Placeholder content */}
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-gray-400 text-lg group-hover:text-white transition-colors">3D Armor Wallet</div>
                      <div className="text-gray-500 text-sm mt-2">Asset Placeholder</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8129FF]/10 rounded-full blur-3xl group-hover:bg-[#8129FF]/20 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#A25CFE]/10 rounded-full blur-3xl group-hover:bg-[#A25CFE]/20 transition-all duration-500"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <InfraPartnerCard
              title="Armswap"
              description="Decentralized exchange protocol built on ARMchain with quantum-resistant security."
              href="#"
            />
            <InfraPartnerCard
              title="Armup"
              description="Staking and yield farming platform optimized for ARMchain's consensus mechanism."
              href="#"
            />
            <InfraPartnerCard
              title="Armdv"
              description="Developer tools and infrastructure services for building on ARMchain."
              href="#"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface FindOutMoreCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

function FindOutMoreCard({ title, description, icon: IconComponent, href }: FindOutMoreCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-transform duration-300 border border-white/10 group">
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center">
          <IconComponent className="h-8 w-8 text-white" />
        </div>
        <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <a
        href={href}
        className="inline-flex items-center text-[#A25CFE] hover:text-white transition-colors"
      >
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

interface InfraPartnerCardProps {
  title: string;
  description: string;
  href: string;
}

function InfraPartnerCard({ title, description, href }: InfraPartnerCardProps) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/60 transition-colors border border-white/10 group">
      <div className="h-24 bg-gradient-to-r from-[#8129FF]/20 to-[#A25CFE]/20 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Logo</div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <a
        href={href}
        className="inline-flex items-center bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        <span className="text-sm">Visit Website</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
