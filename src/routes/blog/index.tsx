import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Quantum-Resistant Blockchain Technology",
    excerpt: "Exploring how ARMchain's innovative approach to quantum resistance will shape the future of decentralized finance and digital assets.",
    category: "Technology",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Mobile Node Infrastructure",
    excerpt: "Learn how our mobile node architecture enables unprecedented scalability while maintaining security and decentralization.",
    category: "Development",
    author: "Alex Rodriguez",
    date: "December 10, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    title: "ARMchain Ecosystem: A Deep Dive into DeFi Integration",
    excerpt: "Discover how ARMchain's stablecoin ecosystem is revolutionizing cross-border payments and decentralized finance.",
    category: "DeFi",
    author: "Maria Thompson",
    date: "December 5, 2024",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 4,
    title: "Community Governance: Shaping ARMchain's Future",
    excerpt: "Understanding the role of community governance in ARMchain's decision-making process and future development.",
    category: "Governance",
    author: "James Park",
    date: "November 28, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 5,
    title: "Security Audit Results: Strengthening Trust",
    excerpt: "Comprehensive overview of ARMchain's latest security audit results and the measures taken to enhance protocol security.",
    category: "Security",
    author: "Dr. Emily Watson",
    date: "November 20, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 6,
    title: "Partnership Spotlight: Enterprise Adoption",
    excerpt: "How major enterprises are leveraging ARMchain's quantum-resistant technology for their blockchain infrastructure needs.",
    category: "Partnership",
    author: "Michael Zhang",
    date: "November 15, 2024",
    readTime: "4 min read",
    featured: false
  }
];

function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            ARMchain Blog
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Insights, updates, and deep dives into the quantum-resistant blockchain ecosystem
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Featured Article</h2>
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-colors">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-[#8129FF]/20 to-[#A25CFE]/20 flex items-center justify-center">
                  <div className="text-gray-500">Featured Image</div>
                </div>
                <div className="p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-[#8129FF]/20 text-[#A25CFE] text-sm rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    <button className="flex items-center text-[#A25CFE] hover:text-white transition-colors">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/60 transition-colors cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-[#8129FF]/20 to-[#A25CFE]/20 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Article Image</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 bg-[#8129FF]/20 text-[#A25CFE] text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A25CFE] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/blog/")({
  component: Blog,
});
