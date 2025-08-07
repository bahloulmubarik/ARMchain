import React from 'react';
import { ArrowRight } from 'lucide-react';

// Types
interface Asset3DProps {
  type: string;
}

interface FeatureItemProps {
  title: string;
  description: string;
  isReversed: boolean;
  assetType: string;
}

interface Feature {
  title: string;
  description: string;
  assetType: string;
  isReversed: boolean;
}

// 3D Asset Placeholder Component
const Asset3D: React.FC<Asset3DProps> = ({ type }) => {
  const getImage = () => {
    switch (type) {
      case "Quantum":
        return { src: "/assets/spiral.png", alt: "Quantum Spiral" };
      case "Coin":
        return { src: "/assets/jiggo.png", alt: "Coin Jiggo" };
      case "Lock":
        return { src: "/assets/spiral.png", alt: "Lock Spiral" };
      default:
        return null;
    }
  };

  const image = getImage();
  if (!image) return null;

  return (
    <div className="w-80 h-80 flex items-center justify-center bg-transparent">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-contain transform scale-[1.2]"
        style={{ background: "none", boxShadow: "none", border: "none" }}
      />
    </div>
  );
};


// Single Feature Item Component
const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, isReversed, assetType }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center py-12 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content - adjusted for single line headings */}
      <div className={`${isReversed ? 'lg:col-start-2' : ''} px-6 lg:px-8 lg:ml-4`}>
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>
        <button className="group inline-flex items-center text-white hover:text-purple-400 transition-colors">
          <span className="text-sm font-medium mr-2">Explore</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3D Asset Placeholder */}
      <div className={`flex justify-center ${isReversed ? 'lg:col-start-1' : ''}`}>
        <Asset3D type={assetType} />
      </div>
    </div>
  );
};

// Main Features Section Component
const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Quantum Security",
      description: "Experience unparalleled security with our quantum-resistant cryptographic protocols. Built for the future of blockchain technology, ensuring your assets remain protected against emerging quantum computing threats.",
      assetType: "Quantum",
      isReversed: false
    },
    {
      title: "Stablecoin Ecosystem",
      description: "Join a thriving ecosystem of decentralized stablecoins powered by ARMchain's innovative technology. Enable seamless cross-border transactions with minimal fees and maximum security.",
      assetType: "Coin",
      isReversed: true
    },
    {
      title: "Harvest now, Decrypt later",
      description: "Experience unparalleled security with our quantum-resistant cryptographic protocols. Built for the future of blockchain technology, ensuring your assets remain protected against emerging quantum computing threats.",
      assetType: "Lock",
      isReversed: false
    }
  ];

  return (
    <section className="relative py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-gradient-to-b from-gray-900 to-black opacity-90"
          style={{
            backgroundImage: 'url(/assets/feature.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            isReversed={feature.isReversed}
            assetType={feature.assetType}
          />
        ))}
      </div>
    </section>
  );
};

// Named export to match your import
export const FeatureSection = FeaturesSection;
