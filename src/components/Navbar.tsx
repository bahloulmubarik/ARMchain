import { Link } from '@tanstack/react-router';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  subItems?: {
    name: string;
    path: string;
    description?: string;
  }[];
}

const navItems: NavItem[] = [
  {
    name: 'About',
    path: '/about',
    subItems: [
      { name: 'Our Mission', path: '/about#mission', description: 'Learn about ARMchain\'s vision' },
      { name: 'Team', path: '/about#team', description: 'Meet our leadership team' },
      { name: 'Technology', path: '/about#technology', description: 'Quantum-resistant blockchain' },
    ]
  },
  {
    name: 'Ecosystem',
    path: '/ecosystem',
    subItems: [
      { name: 'DeFi Products', path: '/ecosystem#defi', description: 'Decentralized finance solutions' },
      { name: 'Stablecoins', path: '/ecosystem#stablecoins', description: 'Cross-border payment solutions' },
      { name: 'Partners', path: '/ecosystem#partners', description: 'Strategic partnerships' },
    ]
  },
  {
    name: 'Community',
    path: '/community',
    subItems: [
      { name: 'Governance', path: '/community#governance', description: 'Community decision making' },
      { name: 'Events', path: '/community#events', description: 'Upcoming events and meetups' },
      { name: 'Contributors', path: '/community#contributors', description: 'Join our community' },
    ]
  },
  {
    name: 'Blog',
    path: '/blog',
    subItems: [
      { name: 'Featured Article', path: '/blog#featured', description: 'Jump to featured article' },
      { name: 'Latest Articles', path: '/blog#latest', description: 'Jump to latest posts' },
    ]
  },
  {
    name: 'Docs',
    path: '/docs',
    subItems: [
      { name: 'Getting Started', path: '/docs#getting-started', description: 'Quick start guide' },
      { name: 'API Reference', path: '/docs#api', description: 'Technical documentation' },
      { name: 'Tutorials', path: '/docs#tutorials', description: 'Step-by-step guides' },
    ]
  }
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center py-4">
        <div className="bg-transparent rounded-[40px] px-8 py-3 flex items-center justify-between w-full max-w-6xl">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-lg z-10">
            ARMchain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center text-gray-300 hover:text-white text-sm uppercase tracking-wide transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Slider */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-2xl transition-all duration-300 ease-out ${
                        activeDropdown === item.name
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <Link
                            to={item.path}
                            onClick={closeDropdown}
                            className="text-white font-semibold hover:text-[#A25CFE] transition-colors"
                          >
                            {item.name}
                          </Link>
                        </div>
                        <div className="space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={closeDropdown}
                              className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                            >
                              <div className="text-white font-medium group-hover:text-[#A25CFE] transition-colors">
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <div className="text-gray-400 text-sm mt-1">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white text-sm uppercase tracking-wide transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/docs"
            className="hidden md:block bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            ARMchain Docs
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-out z-40 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="space-y-6">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full text-white text-lg font-medium py-3"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 space-y-3">
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name} Overview
                        </Link>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-400 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white text-lg font-medium py-3 hover:text-[#A25CFE] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-6">
              <Link
                to="/docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
              >
                ARMchain Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
