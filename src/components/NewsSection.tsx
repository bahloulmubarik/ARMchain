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

const newsImages = [
  '/assets/qunatum1.jpg',
  '/assets/qunatum2.jpg',
  '/assets/qunatum3.jpg',
  '/assets/quantum4.jpg',
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

        {/* Horizontal Scrolling News Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((item, index) => (
            <div key={item.id} className="group cursor-pointer flex-shrink-0 w-80">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/10">
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={newsImages[index % newsImages.length]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8129FF]/10 to-[#A25CFE]/10 group-hover:from-[#8129FF]/20 group-hover:to-[#A25CFE]/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <span className="px-2 py-1 bg-[#8129FF]/20 text-[#A25CFE] text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#A25CFE] transition-colors min-h-[84px]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
