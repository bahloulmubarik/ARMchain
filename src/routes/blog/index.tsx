import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/Footer";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  ChevronDown,
  X,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ------------------ Mock Data ------------------
const blogPosts = [
  {
    id: 1,
    title: "Introducing ARM Chain",
    excerpt: "Learn about the vision and fundamentals of ARM Chain.",
    category: "Announcement",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Developer Guide to ARM Smart Contracts",
    excerpt: "Step by step tutorial on deploying contracts.",
    category: "Developer",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Quantum-Resistant Cryptography Explained",
    excerpt: "Research insights into PQC and blockchain security.",
    category: "Research",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Tokenization of Real Estate",
    excerpt: "How ARM Chain enables tokenized property ownership.",
    category: "Education",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "ARM Chain Roadmap 2025",
    excerpt: "Our journey towards scalability and adoption.",
    category: "Vision",
    readTime: "2 min read",
  },
];

// ------------------ Filters ------------------
const filterOptions = {
  categories: ["Announcement", "Developer", "Education", "Research", "Vision"],
  services: ["Service 1", "Service 2", "Service 3"],
  tags: {
    industry: ["DeFi", "Enterprise", "Quantum", "Real Estate", "Social Impact"],
    topics: ["Startups", "Staking", "Metaverse", "Governance", "Economics"],
    applications: ["AMM", "Cross-chain", "DEX", "Money Markets", "Stablecoin"],
    stack: ["Brownie", "Hardhat", "Python", "Solidity", "Rust", "Web3.js"],
    other: ["Community", "Roadmap", "Case Studies", "Partnerships"],
  },
};

// ------------------ Components ------------------
function SearchAndFilters() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg bg-gray-900/50 p-4">
      {/* Search Bar */}
      <div className="min-w-[300px] flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your topic here"
            className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <FilterDropdown
          title="Category"
          options={filterOptions.categories}
          isActive={activeDropdown === "category"}
          onClick={() =>
            setActiveDropdown(activeDropdown === "category" ? null : "category")
          }
        />

        <FilterDropdown
          title="Services"
          options={filterOptions.services}
          isActive={activeDropdown === "services"}
          onClick={() =>
            setActiveDropdown(activeDropdown === "services" ? null : "services")
          }
        />

        <TagsDropdown
          isActive={activeDropdown === "tags"}
          onClick={() =>
            setActiveDropdown(activeDropdown === "tags" ? null : "tags")
          }
          tags={filterOptions.tags}
        />

        {/* Clear All */}
        <button className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white">
          <X className="h-4 w-4" />
          Clear All
        </button>
      </div>
    </div>
  );
}

function FilterDropdown({ title, options, isActive, onClick }) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isActive ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full z-50 mt-2 w-48 rounded-lg bg-gray-800 py-2 shadow-lg"
          >
            {options.map((option) => (
              <label
                key={option}
                className="flex w-full items-center px-4 py-2 text-white hover:bg-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="mr-3 h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600"
                />
                {option}
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TagsDropdown({ tags, isActive, onClick }) {
  const [selectedTags, setSelectedTags] = useState<Record<string, string[]>>(
    {},
  );

  const toggleTag = (group: string, tag: string) => {
    setSelectedTags((prev) => ({
      ...prev,
      [group]: prev[group]?.includes(tag)
        ? prev[group].filter((t) => t !== tag)
        : [...(prev[group] || []), tag],
    }));
  };

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
      >
        Tags
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isActive ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full z-50 mt-2 grid w-[600px] -translate-x-1/2 grid-cols-2 gap-4 rounded-lg bg-gray-800 p-4 shadow-lg md:grid-cols-3"
          >
            {Object.entries(tags).map(([group, options]) => (
              <div key={group}>
                <h4 className="mb-2 text-sm font-semibold text-purple-400">
                  {group}
                </h4>
                <div className="space-y-1">
                  {options.map((opt) => (
                    <label
                      key={opt}
                      className="flex w-full cursor-pointer items-center rounded px-2 py-1 text-white hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTags[group]?.includes(opt) || false}
                        onChange={() => toggleTag(group, opt)}
                        className="mr-2 h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ------------------ Sections ------------------
function BlogCard({ post }) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-900/50">
      <div className="h-48 bg-gray-800" />
      <div className="p-4">
        <h3 className="mb-4 font-bold text-white">{post.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-purple-600/20 px-2 py-1 text-xs text-purple-400">
              {post.category}
            </span>
            <a
              href="#"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Read →
            </a>
          </div>
          <span className="text-sm text-gray-400">{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function MostRecent() {
  return (
    <div className="flex flex-col items-center space-y-8">
      {blogPosts.slice(0, 6).map((post) => (
        <div key={post.id} className="text-center">
          <span className="mb-2 inline-block rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-400">
            {post.category}
          </span>
          <h4 className="text-2xl font-bold text-white transition-colors hover:text-purple-400">
            <a href="#">{post.title}</a>
          </h4>
          <p className="mt-2 text-gray-400">{post.readTime}</p>
        </div>
      ))}
    </div>
  );
}

// ------------------ Blog Page ------------------
function Blog() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Search and Filters */}
        <SearchAndFilters />

        {/* Featured and Trending */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Featured Blog */}
          <div className="lg:col-span-1">
            <div className="group relative h-[400px] overflow-hidden rounded-xl bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="rounded-full bg-purple-600 px-3 py-1 text-sm text-white">
                  {blogPosts[0].category}
                </span>
                <h2 className="mb-2 mt-3 text-3xl font-bold text-white">
                  {blogPosts[0].title}
                </h2>
                <p className="mb-2 line-clamp-2 text-lg text-gray-300">
                  {blogPosts[0].excerpt}
                </p>
                <span className="text-sm text-gray-400">
                  {blogPosts[0].readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Trending Blogs */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Trending</h3>
            </div>

            <div className="space-y-4">
              {blogPosts.slice(0, 4).map((post, index) => (
                <div key={post.id}>
                  <a
                    href="#"
                    className="block text-white transition hover:text-purple-400"
                  >
                    <span className="block text-sm text-purple-400">
                      {post.category}
                    </span>
                    <h4 className="text-lg font-medium">{post.title}</h4>
                    <p className="text-sm text-gray-400">{post.readTime}</p>
                  </a>

                  {/* Divider (skip for last item) */}
                  {index < blogPosts.slice(0, 4).length - 1 && (
                    <hr className="my-3 border-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mt-24 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="mb-8 text-2xl font-bold text-white">👁 Vision</h2>
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="flex gap-4 rounded-lg bg-gray-900/50 p-4 transition-colors hover:bg-gray-900/70"
              >
                <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-800" />
                <div>
                  <h3 className="mb-2 font-bold text-white">{post.title}</h3>
                  <p className="text-sm text-gray-400">
                    {post.category} · {post.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-gray-800">
            {/* Placeholder for right side image */}
          </div>
        </section>

        {/* Featured Blogs */}
        <section className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">🌟 Featured Blogs</h2>
            <div className="flex gap-2">
              <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4 rotate-180 text-white" />
              </button>
              <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Fundamentals */}
        <section className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">📖 Fundamentals</h2>
            <div className="flex gap-2">
              <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4 rotate-180 text-white" />
              </button>
              <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Builder Section */}
        <section className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">🛠 For Builders</h2>
            <div className="flex gap-2">
              <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4 rotate-180 text-white" />
              </button>
              <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
        {/* Most Recent */}
        <section className="mt-24">
          <h2 className="mb-8 text-2xl font-bold text-white">🕒 Most Recent</h2>
          <MostRecent />
        </section>

        {/* Pagination */}
        <div className="mt-24 flex flex-col items-center gap-4 pb-24">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`rounded-full px-4 py-2 ${
                  num === 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="rounded-full bg-purple-600 px-6 py-2 text-white hover:bg-purple-500">
            Load More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/blog/")({
  component: Blog,
});
