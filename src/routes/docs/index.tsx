import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { Search, BookOpen, Code, FileText, Users, Server, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute("/docs/")({
  component: Docs,
});

const docSections = [
  {
    title: "Getting Started",
    description: "Quick start guide to begin building with ARMchain",
    icon: BookOpen,
    links: [
      "Installation Guide",
      "First Transaction",
      "Wallet Setup",
      "Network Configuration"
    ]
  },
  {
    title: "Developers",
    description: "Comprehensive guides for developers building on ARMchain",
    icon: Code,
    links: [
      "API Reference",
      "Smart Contracts",
      "SDK Documentation",
      "Code Examples"
    ]
  },
  {
    title: "Whitepaper",
    description: "Technical documentation and research papers",
    icon: FileText,
    links: [
      "Technical Whitepaper",
      "Quantum Resistance",
      "Consensus Mechanism",
      "Economic Model"
    ]
  },
  {
    title: "Governance",
    description: "Learn about ARMchain's governance and voting mechanisms",
    icon: Users,
    links: [
      "Governance Overview",
      "Voting Process",
      "Proposal Guidelines",
      "Community Decisions"
    ]
  },
  {
    title: "Node Setup",
    description: "Instructions for running and maintaining ARMchain nodes",
    icon: Server,
    links: [
      "Validator Setup",
      "Mobile Nodes",
      "Hardware Requirements",
      "Monitoring Tools"
    ]
  }
];

function Docs() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Everything you need to build on the quantum-resistant blockchain
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#8129FF] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-10 hover:scale-105 transition-transform duration-300 border border-white/10 group"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mr-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    {section.description}
                  </p>
                  
                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group-hover:text-white p-3 rounded-lg hover:bg-white/5"
                      >
                        <span className="font-medium">{link}</span>
                        <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">
            Popular Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#" className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-12 hover:scale-105 transition-transform duration-300 block text-left border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-8">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#A25CFE] transition-colors">Quick Start Tutorial</h3>
              <p className="text-gray-400 mb-6 text-lg">Get up and running with ARMchain in under 10 minutes with our comprehensive guide</p>
              <span className="text-[#A25CFE] font-bold text-lg inline-flex items-center">
                Start Building 
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </a>
            
            <a href="#" className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-12 hover:scale-105 transition-transform duration-300 block text-left border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-xl flex items-center justify-center mb-8">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#A25CFE] transition-colors">API Reference</h3>
              <p className="text-gray-400 mb-6 text-lg">Complete reference for all ARMchain APIs and endpoints with examples</p>
              <span className="text-[#A25CFE] font-bold text-lg inline-flex items-center">
                View Docs 
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
