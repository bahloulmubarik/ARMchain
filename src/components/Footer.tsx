import { Link } from '@tanstack/react-router';
import { Twitter, MessageCircle, Send, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h3 className="text-2xl font-bold text-white">ARMchain</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Building the quantum-resistant future of blockchain technology with mobile nodes and advanced cryptographic security.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">contact@armchain.io</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3" />
                <span className="text-sm">Global Headquarters</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Product & Platform */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Platform</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                About Us
              </Link>
              <Link to="/ecosystem" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Ecosystem
              </Link>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Roadmap
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Technology
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Security
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Partnerships
              </a>
            </div>
          </div>

          {/* Column 3 - Developers & Community */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Developers</h4>
            <div className="space-y-3">
              <Link to="/docs" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Documentation
              </Link>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                API Reference
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                SDK Downloads
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                GitHub
              </a>
              <Link to="/community" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Community
              </Link>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Developer Program
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Bug Bounty
              </a>
            </div>
          </div>

          {/* Column 4 - Resources & Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Resources</h4>
            <div className="space-y-3">
              <Link to="/blog" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Blog
              </Link>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                News & Updates
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Whitepaper
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Research Papers
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Support
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#A25CFE] transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-[#A25CFE] rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-[#A25CFE] rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-[#A25CFE] rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-[#A25CFE] rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Send className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-[#A25CFE] rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Github className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Right - Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest news and updates from ARMchain directly to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#A25CFE] transition-colors"
                />
                <button className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 ARMchain. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Building the quantum-resistant future of blockchain technology.
              </p>
            </div>

            {/* Right - Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#A25CFE] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#A25CFE] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#A25CFE] transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#A25CFE] transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
