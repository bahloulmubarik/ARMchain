import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  BookOpen,
  Code,
  FileText,
  Users,
  Server,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/docs/")({
  component: Docs,
});

const docSections = [
  {
    title: "Getting Started",
    description: "Quick start guide to begin building with ARMchain",
    icon: BookOpen,
    href: "/docs/getting-started",
    links: [
      "Installation Guide",
      "First Transaction",
      "Wallet Setup",
      "Network Configuration",
    ],
  },
  {
    title: "Developers",
    description: "Comprehensive guides for developers building on ARMchain",
    icon: Code,
    href: "/docs/developers",
    links: [
      "API Reference",
      "Smart Contracts",
      "SDK Documentation",
      "Code Examples",
    ],
  },
  {
    title: "Whitepaper",
    description: "Technical documentation and research papers",
    icon: FileText,
    href: "/docs/whitepaper",
    links: [
      "Technical Whitepaper",
      "Quantum Resistance",
      "Consensus Mechanism",
      "Economic Model",
    ],
  },
  {
    title: "Governance",
    description: "Learn about ARMchain's governance and voting mechanisms",
    icon: Users,
    href: "/docs/governance",
    links: [
      "Governance Overview",
      "Voting Process",
      "Proposal Guidelines",
      "Community Decisions",
    ],
  },
  {
    title: "Node Setup",
    description: "Instructions for running and maintaining ARMchain nodes",
    icon: Server,
    href: "/docs/node-setup",
    links: [
      "Validator Setup",
      "Mobile Nodes",
      "Hardware Requirements",
      "Monitoring Tools",
    ],
  },
];

function Docs() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30 px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Documentation
          </h1>
          <p className="mb-12 text-xl leading-relaxed text-gray-300">
            Everything you need to build on the quantum-resistant blockchain
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full rounded-xl border border-gray-700 bg-gray-800/50 py-4 pl-12 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-[#8129FF] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={index}
                  to="/docs/$docId"
                  params={{ docId: section.href.replace('/docs/', '') }}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-8 flex items-center">
                    <div className="mr-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-[#8129FF] to-[#A25CFE]">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>

                  <p className="mb-8 text-lg leading-relaxed text-gray-400">
                    {section.description}
                  </p>

                  <div className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <div
                        key={linkIndex}
                        className="flex items-center justify-between rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5 hover:text-white group-hover:text-white"
                      >
                        <span className="font-medium">{link}</span>
                        <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-900/50 px-4 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-16 text-4xl font-bold tracking-tight text-white">
            Popular Resources
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Link
              to="/docs/$docId"
              params={{ docId: "getting-started" }}
              className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-12 text-left backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-[#8129FF] to-[#A25CFE]">
                <BookOpen className="h-8 w-8 text-white" />
                </div>
              <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-[#A25CFE]">
                Quick Start Tutorial
              </h3>
              <p className="mb-6 text-lg text-gray-400">
                Get up and running with ARMchain in under 10 minutes with our
                comprehensive guide
              </p>
              <span className="inline-flex items-center text-lg font-bold text-[#A25CFE]">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/docs/$docId"
              params={{ docId: "developers" }}
              className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-12 text-left backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-[#8129FF] to-[#A25CFE]">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-[#A25CFE]">
                API Reference
              </h3>
              <p className="mb-6 text-lg text-gray-400">
                Complete reference for all ARMchain APIs and endpoints with
                examples
              </p>
              <span className="inline-flex items-center text-lg font-bold text-[#A25CFE]">
                View Docs
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
