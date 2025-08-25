import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "~/components/ui/resizable-navbar";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

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
      { name: 'Getting Started', path: '/docs/getting-started', description: 'Quick start guide' },
      { name: 'Developers', path: '/docs/developers', description: 'Technical documentation' },
      { name: 'API Reference', path: '/docs/developers', description: 'Complete API documentation' },
    ]
  }
];

export function FloatingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  const handleDesktopMouseEnter = (itemName: string) => {
    setActiveDesktop(itemName);
  };

  const handleDesktopMouseLeave = () => {
    // Add small delay to prevent flickering when moving mouse between nav item and dropdown
    setTimeout(() => {
      setActiveDesktop(null);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    // Keep dropdown open when mouse is over it
    clearTimeout();
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          {/* Custom Desktop Items with dropdowns */}
          <div className="hidden lg:flex items-center space-x-2 relative">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleDesktopMouseEnter(item.name)}
                onMouseLeave={handleDesktopMouseLeave}
              >
                <Link
                  to={item.path}
                  className="relative px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-[#A25CFE] transition-colors text-sm font-medium"
                >
                  <span className="relative z-20">{item.name}</span>
                </Link>

                {item.subItems && (
                  <div
                    className={`absolute left-0 top-full mt-2 w-80 rounded-xl border border-neutral-200/20 dark:border-neutral-800/50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-xl transition-all duration-200 z-50 ${
                      activeDesktop === item.name
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDesktopMouseLeave}
                  >
                    <div className="p-4">
                      <Link
                        to={item.path}
                        className="block px-3 py-3 rounded-lg text-base font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition-colors"
                      >
                        {item.name} Overview
                      </Link>
                      <div className="mt-2 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-3 py-3 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors group"
                          >
                            <div className="font-medium text-sm text-neutral-900 dark:text-white group-hover:text-[#A25CFE]">
                              {sub.name}
                            </div>
                            {sub.description && (
                              <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                                {sub.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/docs">
              <NavbarButton variant="gradient" className="text-sm">
                ARMchain Docs
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-full space-y-2">
              {navItems.map((item) => (
                <div key={`mobile-${item.name}`} className="w-full">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveMobile((prev) => (prev === item.name ? null : item.name))
                        }
                        className="w-full text-left flex items-center justify-between relative text-neutral-700 dark:text-neutral-300 hover:text-[#A25CFE] transition-colors py-3 px-2 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
                      >
                        <span className="font-medium">{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${activeMobile === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          activeMobile === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 pt-2 space-y-1">
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 px-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-[#A25CFE] hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors"
                          >
                            {item.name} Overview
                          </Link>
                          {item.subItems.map((sub) => (
                            <Link
                              key={`mobile-sub-${item.name}-${sub.name}`}
                              to={sub.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 px-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-[#A25CFE] hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block relative text-neutral-700 dark:text-neutral-300 hover:text-[#A25CFE] transition-colors py-3 px-2 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 font-medium"
                    >
                      <span className="block">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4 mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <Link to="/docs">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="gradient"
                  className="w-full text-center"
                >
                  ARMchain Docs
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}


