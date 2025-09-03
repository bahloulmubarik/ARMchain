import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Featured blog posts from blog page
const featuredBlogPosts = [
  {
    id: 1,
    title: "Introducing ARM Chain",
    excerpt: "Learn about the vision and fundamentals of ARM Chain.",
    category: "Announcement",
    readTime: "3 min read",
    image: "/assets/cards/armm.png",
    imageAlt: "ARM Chain Introduction",
  },
  {
    id: 2,
    title: "Developer Guide to ARM Smart Contracts",
    excerpt: "Step by step tutorial on deploying contracts.",
    category: "Developer",
    readTime: "5 min read",
    image: "/assets/cards/qss.png",
    imageAlt: "Smart Contracts Development",
  },
  {
    id: 3,
    title: "Quantum-Resistant Cryptography Explained",
    excerpt: "Research insights into PQC and blockchain security.",
    category: "Research",
    readTime: "4 min read",
    image: "/assets/cards/qst.png",
    imageAlt: "Quantum Cryptography Research",
  },
  {
    id: 4,
    title: "Tokenization of Real Estate",
    excerpt: "How ARM Chain enables tokenized property ownership.",
    category: "Education",
    readTime: "6 min read",
    image: "/assets/cards/pqt.png",
    imageAlt: "Real Estate Tokenization",
  },
  {
    id: 5,
    title: "ARM Chain Roadmap 2025",
    excerpt: "Our journey towards scalability and adoption.",
    category: "Vision",
    readTime: "2 min read",
    image: "/assets/cards/pqt.png",
    imageAlt: "ARM Chain Roadmap",
  },
  {
    id: 6,
    title: "Post-Quantum Security in Practice",
    excerpt: "Real-world applications of quantum-resistant algorithms.",
    category: "Technology",
    readTime: "7 min read",
    image: "/assets/qunatum1.jpg",
    imageAlt: "Post-Quantum Security",
  },
  {
    id: 7,
    title: "Building on ARMChain",
    excerpt: "Developer resources and best practices.",
    category: "Developer",
    readTime: "5 min read",
    image: "/assets/qunatum2.jpg",
    imageAlt: "Building on ARMChain",
  },
  {
    id: 8,
    title: "Community Governance Evolution",
    excerpt: "Decentralized decision making in the ARMChain ecosystem.",
    category: "Community",
    readTime: "4 min read",
    image: "/assets/qunatum3.jpg",
    imageAlt: "Community Governance",
  }
];

export function NewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading with Navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            In the news
          </h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 bg-gray-800/60 hover:bg-gray-700/60 rounded-full flex items-center justify-center transition-colors group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-400 group-hover:text-white" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 bg-gray-800/60 hover:bg-gray-700/60 rounded-full flex items-center justify-center transition-colors group"
            >
              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Blog Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredBlogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex-shrink-0 w-80 h-[420px]">
              <a href={`/blog`} className="block h-full">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/10 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8129FF]/10 to-[#A25CFE]/10 group-hover:from-[#8129FF]/20 group-hover:to-[#A25CFE]/20 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                      <span className="px-2 py-1 bg-[#8129FF]/20 text-[#A25CFE] text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#A25CFE] transition-colors mb-3 line-clamp-2 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
