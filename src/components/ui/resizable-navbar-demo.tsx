"use client";
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
  link: string;
  subItems?: { name: string; link: string }[];
}

export default function NavbarDemo() {
  const navItems: NavItem[] = [
    {
      name: "About",
      link: "/about",
      subItems: [
        { name: "Our Mission", link: "/about#mission" },
        { name: "Team", link: "/about#team" },
        { name: "Roadmap", link: "/about#roadmap" },
      ],
    },
    {
      name: "Ecosystem",
      link: "/ecosystem",
      subItems: [
        { name: "DeFi Products", link: "/ecosystem#defi" },
        { name: "Partners", link: "/ecosystem#partners" },
      ],
    },
    {
      name: "Community",
      link: "/community",
      subItems: [
        { name: "Governance", link: "/community#governance" },
        { name: "Events", link: "/community#events" },
      ],
    },
    {
      name: "Blog",
      link: "/blog",
      subItems: [
        { name: "Featured Article", link: "/blog#featured" },
        { name: "Latest Articles", link: "/blog#latest" },
      ],
    },
    {
      name: "Developers",
      link: "/docs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          {/* Custom Desktop Items with dropdowns */}
          <div className="hidden lg:flex items-center space-x-4 relative">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDesktop(item.name)}
                onMouseLeave={() => setActiveDesktop((prev) => (prev === item.name ? null : prev))}
              >
                <Link
                  to={item.link}
                  className="relative px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-[#A25CFE] transition-colors"
                >
                  <span className="relative z-20">{item.name}</span>
                </Link>

                {item.subItems && (
                  <div
                    className={`absolute left-0 top-full mt-2 w-72 rounded-xl border border-neutral-200/20 dark:border-neutral-800/50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-xl transition-all duration-200 ${
                      activeDesktop === item.name
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="p-3">
                      <Link
                        to={item.link}
                        className="block px-3 py-2 rounded-lg text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
                      >
                        {item.name} Overview
                      </Link>
                      <div className="mt-1 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.link}
                            className="block px-3 py-2 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
                          >
                            {sub.name}
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
              <NavbarButton variant="gradient">Docs</NavbarButton>
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
            {navItems.map((item) => (
              <div key={`mobile-${item.name}`} className="w-full">
                {item.subItems ? (
                  <button
                    onClick={() =>
                      setActiveMobile((prev) => (prev === item.name ? null : item.name))
                    }
                    className="w-full text-left relative text-neutral-700 dark:text-neutral-300 hover:text-[#A25CFE] transition-colors py-2"
                  >
                    <span className="block">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block relative text-neutral-700 dark:text-neutral-300 hover:text-[#A25CFE] transition-colors py-2"
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                )}

                {item.subItems && (
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      activeMobile === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-3">
                      <Link
                        to={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-neutral-600 dark:text-neutral-400"
                      >
                        {item.name} Overview
                      </Link>
                      {item.subItems.map((sub) => (
                        <Link
                          key={`mobile-sub-${item.name}-${sub.name}`}
                          to={sub.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-neutral-600 dark:text-neutral-400"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <Link to="/docs">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="gradient"
                  className="w-full"
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
