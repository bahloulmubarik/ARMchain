import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    image: '/api/placeholder/300/200',
    date: 'Dec 15, 2024',
    category: 'Technology',
    title: 'ARMchain Launches Quantum-Resistant Infrastructure'
  },
  {
    id: 2,
    image: '/api/placeholder/300/200',
    date: 'Dec 10, 2024',
    category: 'Partnership',
    title: 'Major DeFi Protocol Integrates ARMchain Technology'
  },
  {
    id: 3,
    image: '/api/placeholder/300/200',
    date: 'Dec 5, 2024',
    category: 'Research',
    title: 'Breakthrough in Mobile Node Efficiency Achieved'
  },
  {
    id: 4,
    image: '/api/placeholder/300/200',
    date: 'Nov 28, 2024',
    category: 'Community',
    title: 'ARMchain Developer Conference Announces Speakers'
  },
  {
    id: 5,
    image: '/api/placeholder/300/200',
    date: 'Nov 25, 2024',
    category: 'Technology',
    title: 'New Consensus Algorithm Reduces Energy Consumption'
  },
  {
    id: 6,
    image: '/api/placeholder/300/200',
    date: 'Nov 20, 2024',
    category: 'Partnership',
    title: 'Enterprise Adoption Grows with New Integrations'
  },
  {
    id: 7,
    image: '/api/placeholder/300/200',
    date: 'Nov 15, 2024',
    category: 'Research',
    title: 'Quantum Computing Impact Study Released'
  },
  {
    id: 8,
    image: '/api/placeholder/300/200',
    date: 'Nov 10, 2024',
    category: 'Community',
    title: 'Global Hackathon Winners Announced'
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
    <section className="py-24 px-4 bg-gray-900/50">
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
        
        {/* Horizontal Scrolling News Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[300px] bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/60 transition-colors cursor-pointer group flex-shrink-0"
              style={{
                boxShadow: '0 0 20px rgba(129, 41, 255, 0.1)',
              }}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-[#8129FF]/20 to-[#A25CFE]/20 flex items-center justify-center">
                <div className="text-gray-500 text-sm">News Image</div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <span className="px-2 py-1 bg-[#8129FF]/20 text-[#A25CFE] text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-[#A25CFE] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
