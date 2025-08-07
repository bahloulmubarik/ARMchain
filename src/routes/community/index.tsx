import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { Users, MessageSquare, Award, Calendar, Globe, Trophy } from 'lucide-react';

export const Route = createFileRoute("/community/")({
  component: Community,
});

function Community() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                Join Our Community
              </h1>
            </div>
            
            {/* Right side */}
            <div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Connect with developers, validators, and blockchain enthusiasts building the quantum-resistant future. Our global community is at the heart of ARMchain's innovation, driving adoption and creating the next generation of decentralized applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 tracking-tight">
            Community Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Developer Program</h3>
              <p className="text-gray-400 mb-6">Build on ARMchain with grants, technical support, and early access to new features.</p>
              <button className="text-[#A25CFE] hover:text-white transition-colors group-hover:text-white">Learn More →</button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ambassador Program</h3>
              <p className="text-gray-400 mb-6">Represent ARMchain in your region and earn rewards for community growth.</p>
              <button className="text-[#A25CFE] hover:text-white transition-colors group-hover:text-white">Apply Now →</button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Forum</h3>
              <p className="text-gray-400 mb-6">Discuss technical topics, governance proposals, and network updates.</p>
              <button className="text-[#A25CFE] hover:text-white transition-colors group-hover:text-white">Join Forum →</button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Events</h3>
              <p className="text-gray-400 mb-6">Attend workshops, hackathons, and conferences in the ARMchain ecosystem.</p>
              <button className="text-[#A25CFE] hover:text-white transition-colors group-hover:text-white">View Events →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Join as Ambassador CTA */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8129FF] via-[#A25CFE] to-[#6366f1] p-16 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="grid-pattern-small h-full w-full"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - 3D Asset Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl"></div>
                  
                  {/* Placeholder content */}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-white/90 text-lg">3D Ambassador</div>
                    <div className="text-white/70 text-sm mt-2">Asset Placeholder</div>
                  </div>
                  
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-3xl border border-white/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-2xl border border-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              {/* Right Side - Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Join as Ambassador
                </h2>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Become an official ARMchain Ambassador and help shape the future of quantum-resistant blockchain technology. Lead your community, earn exclusive rewards, and be part of our global mission.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-8">
                  <div className="flex items-center text-white/90">
                    <Award className="h-5 w-5 mr-3" />
                    <span className="text-base">Exclusive Rewards</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Globe className="h-5 w-5 mr-3" />
                    <span className="text-base">Global Network</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Trophy className="h-5 w-5 mr-3" />
                    <span className="text-base">Official Recognition</span>
                  </div>
                </div>
                
                <button className="bg-white text-[#8129FF] font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-colors text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 mb-6">
                  Become an Ambassador
                </button>
                
                <p className="text-white/70 text-base">
                  Applications reviewed weekly • Join 500+ ambassadors worldwide
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Ambassador Program Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Ambassador Program Benefits</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Join our global network of ambassadors and help shape the future of quantum-resistant blockchain technology.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Exclusive Rewards</h3>
              <p className="text-gray-400">Earn tokens, NFTs, and exclusive merchandise for your contributions to the community.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Early Access</h3>
              <p className="text-gray-400">Get first access to new features, products, and partnership announcements.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Direct Communication</h3>
              <p className="text-gray-400">Connect directly with the ARMchain team and influence product development.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Event Opportunities</h3>
              <p className="text-gray-400">Speak at conferences, host meetups, and represent ARMchain globally.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Network Growth</h3>
              <p className="text-gray-400">Build your professional network within the blockchain and crypto space.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recognition</h3>
              <p className="text-gray-400">Get recognized for your contributions with official ambassador status and credentials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
            Connect With Us
          </h2>
          <p className="text-gray-300 mb-12">
            Join our vibrant community across multiple platforms
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-transform duration-300 block border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#A25CFE] transition-colors">Twitter</h3>
              <p className="text-gray-400">Follow us for the latest updates and announcements</p>
            </a>
            
            <a href="#" className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-transform duration-300 block border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#A25CFE] transition-colors">LinkedIn</h3>
              <p className="text-gray-400">Connect with our professional network and team</p>
            </a>
            
            <a href="#" className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-transform duration-300 block border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#A25CFE] transition-colors">Telegram</h3>
              <p className="text-gray-400">Join real-time discussions with the community</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
