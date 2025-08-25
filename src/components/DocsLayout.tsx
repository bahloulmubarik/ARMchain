import { useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import {
  Search,
  BookOpen,
  Code,
  FileText,
  Users,
  Server,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface DocSection {
  title: string;
  icon: any;
  href: string;
  items: string[];
}

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    icon: BookOpen,
    href: "/docs/getting-started",
    items: [
      "Installation Guide",
      "First Transaction",
      "Wallet Setup",
      "Network Configuration",
    ],
  },
  {
    title: "Developers",
    icon: Code,
    href: "/docs/developers",
    items: [
      "API Reference",
      "Smart Contracts",
      "SDK Documentation",
      "Code Examples",
    ],
  },
  {
    title: "Whitepaper",
    icon: FileText,
    href: "/docs/whitepaper",
    items: [
      "Technical Whitepaper",
      "Quantum Resistance",
      "Consensus Mechanism",
      "Economic Model",
    ],
  },
  {
    title: "Governance",
    icon: Users,
    href: "/docs/governance",
    items: [
      "Governance Overview",
      "Voting Process",
      "Proposal Guidelines",
      "Community Decisions",
    ],
  },
  {
    title: "Node Setup",
    icon: Server,
    href: "/docs/node-setup",
    items: [
      "Validator Setup",
      "Mobile Nodes",
      "Hardware Requirements",
      "Monitoring Tools",
    ],
  },
];

interface DocsLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function DocsLayout({ children, title = "Documentation" }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const params = useParams({ strict: false });
  const currentPath = `/docs/${params.docId || ""}`;

  const currentSection = docSections.find(section =>
    section.href === currentPath || currentPath.startsWith(section.href)
  );

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? (
                <X className="h-6 w-6 text-gray-400" />
              ) : (
                <Menu className="h-6 w-6 text-gray-400" />
              )}
            </button>

            {/* Logo and title */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#8129FF] to-[#A25CFE]">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <span className="hidden font-bold text-white sm:block">
                ARMchain
              </span>
            </Link>

            <ChevronRight className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-400">Documentation</span>
          </div>

          {/* Search */}
          <div className="relative max-w-sm flex-1 mx-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search docs..."
              className="w-full rounded-lg border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#8129FF] focus:outline-none focus:ring-1 focus:ring-[#8129FF]"
            />
          </div>

          {/* External links */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Back to Site
            </Link>
            <a
              href="https://github.com/armchain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              GitHub
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 top-16 z-40 w-64 transform border-r border-gray-800 bg-gray-900 transition-transform duration-200 ease-in-out lg:relative lg:top-0 lg:translate-x-0`}
        >
          <div className="h-full overflow-auto p-4">
            <nav className="space-y-2">
              {docSections.map((section) => {
                const IconComponent = section.icon;
                const isActive = currentPath === section.href;
                const isOpen = currentPath.startsWith(section.href);

                return (
                  <div key={section.title}>
                    <Link
                      to="/docs/$docId"
                      params={{ docId: section.href.replace('/docs/', '') }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#8129FF]/20 text-[#A25CFE]"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <IconComponent className="h-4 w-4" />
                      {section.title}
                    </Link>

                    {/* Sub-items */}
                    {isOpen && (
                      <div className="ml-7 mt-2 space-y-1 border-l border-gray-700 pl-4">
                        {section.items.map((item) => (
                          <a
                            key={item}
                            href={`${section.href}#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block rounded px-2 py-1 text-xs text-gray-400 transition-colors hover:text-gray-300"
                            onClick={() => setSidebarOpen(false)}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Quick Links */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <h4 className="mb-3 text-sm font-medium text-gray-400">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="https://explorer.armchain.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-300"
                >
                  Block Explorer
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://status.armchain.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-300"
                >
                  Network Status
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://github.com/armchain/sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-300"
                >
                  SDK Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="mt-6 border-t border-gray-800 pt-6">
              <h4 className="mb-3 text-sm font-medium text-gray-400">
                Need Help?
              </h4>
              <div className="space-y-2">
                <a
                  href="https://discord.gg/armchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-300"
                >
                  Discord Community
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://github.com/armchain/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-300"
                >
                  Report Issues
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 top-16 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
            {/* Breadcrumb */}
            {currentSection && (
              <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
                <Link
                  to="/docs"
                  className="transition-colors hover:text-gray-300"
                >
                  Documentation
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-[#A25CFE]">{currentSection.title}</span>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert prose-purple max-w-none">
              {children}
            </div>

            {/* Footer Navigation */}
            {currentSection && (
              <div className="mt-12 flex items-center justify-between border-t border-gray-800 pt-8">
                <div className="flex-1">
                  {/* Previous page logic would go here */}
                </div>
                <div className="flex-1 text-right">
                  {/* Next page logic would go here */}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
