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
import {
  ArrowRight,
  Users,
  Code,
  BookOpen,
  Globe,
  Shield,
  FileText,
  Zap,
  Wallet,
  MessageSquare,
  Award
} from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  description?: string;
  heroImage?: string;
  heroGradient?: string;
  heroLogo?: string;
  heroCaption?: string;
  subItems?: {
    name: string;
    path: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
}

const navItems: NavItem[] = [
  {
    name: 'About',
    path: '/about',
    description: 'Learn about ARMchain',
    heroImage: '/assets/Background/aboutback.png',
    heroCaption: 'Our mission and vision',
    subItems: [
            {
        name: 'Our Mission',
        path: '/about#mission',
        description: 'Learn about ARMchain\'s vision',
        icon: <img src="/icons/missionicon.png" alt="Mission" className="h-7 w-7" />
      },
      {
        name: 'Team',
        path: '/about#team',
        description: 'Meet our leadership team',
        icon: <img src="/icons/teamicon.png" alt="Mission" className="h-7 w-7" />
      },
      {
        name: 'Roadmap',
        path: '/about#roadmap',
        description: 'Roadmap of ARMchain',
        icon: <img src="/icons/roadicon.png" alt="Mission" className="h-7 w-7" />
      },
    ]
  },
  {
    name: 'Ecosystem',
    path: '/ecosystem',
    description: 'Explore the ARMchain ecosystem',
    heroImage: '/assets/Background/aboutback.png',
    heroCaption: 'Discover our products and partners',
    subItems: [
      {
        name: 'Partners',
        path: '/ecosystem#ourpartners',
        description: 'Partners of ARMchain',
        icon:<img src="/icons/partnericon.png" alt="Mission" className="h-7 w-7" />
      },
      {
        name: 'Q-Secure Wallet',
        path: '/ecosystem#infrastructurepartners',
        description: 'Q-Secure Wallet of ARMchain',
        icon: <img src="/icons/walleticon.png" alt="Mission" className="h-7 w-7" />
      },
    ]
  },
  {
    name: 'Community',
    description: 'Join our growing community',
    heroImage: '/assets/Background/aboutback.png',
    path: '/community',
    subItems: [
      {
        name: 'Programs',
        path: '/community#communityprograms',
        description: 'be a part of our community programs',
        icon: <img src="/icons/walleticon.png" alt="Mission" className="h-7 w-7" />
      },
      {
        name: 'Airdrop',
        path: '/community#airdrop',
        description: 'Join our exclusive airdrop',
        icon: <img src="/icons/airdropicon.png" alt="Mission" className="h-7 w-7" />
      },
    ]
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Docs',
    path: '/docs',
    description: 'Developer documentation',
    heroImage: '/assets/Background/docsback.png',
    heroCaption: 'Build on ARMchain',
    subItems: [
      {
        name: 'Getting Started',
        path: '/docs/getting-started',
        description: 'Quick start guide',
        icon: <BookOpen className="h-5 w-5 text-purple-500" />
      },
      {
        name: 'Developers',
        path: '/docs/developers',
        description: 'Technical documentation',
        icon: <Code className="h-5 w-5 text-purple-500" />
      },
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
    // Clear any pending timeouts
  };

  // const isMobile = window.innerWidth <= 768;

  // if (isMobile) {
  //   return null;
  // }

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
                  className="relative px-4 py-2 text-white hover:text-[#A25CFE] transition-colors text-title font-simibold"
                >
                  <span className="relative z-20">{item.name}</span>
                </Link>

                {item.subItems && (
                  <div
                    className={`absolute left-0 top-full mt-2 w-[380px] rounded-xl border border-purple-500/30 bg-black/95 backdrop-blur-md shadow-xl transition-all duration-300 z-50 ${
                      activeDesktop === item.name
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDesktopMouseLeave}
                  >
                    {/* Hero Area */}
                    <div className="relative overflow-hidden rounded-t-xl h-32">
                      {item.heroImage && (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.heroImage})` }}
                        >
                          <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                      )}
                      {item.heroGradient && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.heroGradient}`}></div>
                      )}
                      {!item.heroImage && !item.heroGradient && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600"></div>
                      )}

                      <div className="relative z-10 h-full flex flex-col justify-center p-6">
                        <h3 className="title text-white">{item.name}</h3>
                        <p className="description text-white/80 mt-1">{item.heroCaption || item.description}</p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-4">
                      <Link
                        to={item.path}
                        className="block px-3 py-3 rounded-lg text-base font-semibold text-white hover:bg-purple-600/20 transition-colors"
                      >
                        {item.name} Overview
                      </Link>
                      <div className="mt-2 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-3 py-3 rounded-lg hover:bg-purple-600/20 transition-colors group"
                          >
                            <div className="flex items-start">
                              {sub.icon && (
                                <div className="mr-3 mt-0.5">
                                  {sub.icon}
                                </div>
                              )}
                              <div>
                                <div className="title text-white group-hover:text-[#A25CFE]">
                                  {sub.name}
                                </div>
                                {sub.description && (
                                  <div className="description mt-1 text-gray-300">
                                    {sub.description}
                                  </div>
                                )}
                              </div>
                            </div>
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
                        className={`overflow-hidden transition-all duration-300 ${
                          activeMobile === item.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {/* Mobile Hero Area (Smaller) */}
                        <div className="relative overflow-hidden rounded-lg mx-2 h-20 my-2">
                          {item.heroImage && (
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(${item.heroImage})` }}
                            >
                              <div className="absolute inset-0 bg-black/70"></div>
                            </div>
                          )}
                          {item.heroGradient && (
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.heroGradient}`}></div>
                          )}
                          {!item.heroImage && !item.heroGradient && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600"></div>
                          )}

                          <div className="relative z-10 h-full flex flex-col justify-center p-4">
                            <h3 className="title text-white">{item.name}</h3>
                            <p className="description text-white/80">{item.heroCaption || item.description}</p>
                          </div>
                        </div>

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
                              className="block py-2 px-2 rounded-lg text-gray-300 hover:text-[#A25CFE] hover:bg-purple-600/20 transition-colors"
                            >
                              <div className="flex items-center">
                                {sub.icon && (
                                  <div className="mr-2">
                                    {sub.icon}
                                  </div>
                                )}
                                <div>
                                  <div className="title">{sub.name}</div>
                                  {sub.description && (
                                    <div className="description">
                                      {sub.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block relative text-white hover:text-[#A25CFE] transition-colors py-3 px-2 rounded-lg hover:bg-neutral-800/50 font-medium"
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


