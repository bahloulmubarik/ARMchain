import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { RoadmapSection } from '~/components/RoadmapSection';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                The first quantum secure fastest layer 1 chain
              </h1>
              <button className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg">
                Contact Us
              </button>
            </div>
            
            {/* Right side - 3D Asset Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#8129FF]/20 to-[#A25CFE]/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-gray-400 text-lg">3D Asset Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Card */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-10 shadow-md hover:bg-gray-800/60 hover:scale-[1.02] transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-[#A25CFE] transition-colors">Our Mission</h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Pioneering quantum-resistant blockchain technology for the future of decentralized finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Image Cards Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Innovation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Quantum Security", delay: "0s" },
              { title: "Mobile Nodes", delay: "0.2s" },
              { title: "Fast Consensus", delay: "0.4s" },
              { title: "Low Latency", delay: "0.6s" },
              { title: "Scalability", delay: "0.8s" },
              { title: "Decentralization", delay: "1s" }
            ].map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: item.delay }}
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/10 animate-slide-in-left">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#8129FF]/20 to-[#A25CFE]/20 flex items-center justify-center group-hover:from-[#8129FF]/30 group-hover:to-[#A25CFE]/30 transition-all duration-300">
                    <div className="text-gray-400 group-hover:text-white transition-colors">Innovation Image</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#A25CFE] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                      Advanced technology driving the future of blockchain.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Leadership Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Leadership Team</h2>
          
          {/* CEO Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/10">
              <div className="w-32 h-32 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-full mx-auto mb-8 flex items-center justify-center">
                <div className="text-white text-sm">Photo</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Samran Habib</h3>
              <p className="text-[#A25CFE] text-lg mb-6">CEO & Founder</p>
              <blockquote className="text-xl text-gray-300 italic leading-relaxed">
                "The future of blockchain lies in quantum resistance and true decentralization. ARMchain is not just building technology—we're architecting the foundation for a more secure and accessible digital economy."
              </blockquote>
            </div>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard
              name="Husnain Aslam"
              position="Project Manager"
              linkedinUrl="#"
              twitterUrl="#"
            />
            <TeamMemberCard
              name="Bahloul Mubarik"
              position="Blockchain Engineer & DevRel"
              linkedinUrl="#"
              twitterUrl="#"
            />
            <TeamMemberCard
              name="Farzan Saqib"
              position="Core Blockchain Engineer"
              linkedinUrl="#"
              twitterUrl="#"
            />
            <TeamMemberCard
              name="Khizar Bakhtiyar"
              position="Blockchain Engineer"
              linkedinUrl="#"
              twitterUrl="#"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Be a part of our team</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join us in building the future of blockchain technology. We're always looking for talented individuals who share our vision.
          </p>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to make an impact?</h3>
            <p className="text-gray-300 mb-8">
              Explore opportunities to work with cutting-edge quantum-resistant technology and help shape the future of decentralized finance.
            </p>
            <button className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg inline-flex items-center">
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface TeamMemberCardProps {
  name: string;
  position: string;
  linkedinUrl: string;
  twitterUrl: string;
}

function TeamMemberCard({ name, position, linkedinUrl, twitterUrl }: TeamMemberCardProps) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-gray-800/60 hover:scale-105 transition-all duration-300 border border-white/10 group">
      <div className="w-24 h-24 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="text-white text-xs">Photo</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A25CFE] transition-colors">{name}</h3>
      <p className="text-[#A25CFE] text-sm mb-6">{position}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={linkedinUrl}
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#A25CFE] transition-colors group-hover:scale-110"
        >
          <Linkedin className="h-5 w-5 text-white" />
        </a>
        <a
          href={twitterUrl}
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#A25CFE] transition-colors group-hover:scale-110"
        >
          <Twitter className="h-5 w-5 text-white" />
        </a>
      </div>
    </div>
  );
}
