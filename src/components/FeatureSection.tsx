import React from 'react';
import { ArrowRight } from 'lucide-react';

// Types
interface FeatureItemProps {
  title: string;
  description: string;
  isReversed: boolean;
  videoSrc: string;
  href: string;
}

interface Feature {
  title: string;
  description: string;
  videoSrc: string;
  isReversed: boolean;
  href: string;
}

// Video Asset Component
const VideoAsset: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] flex items-center justify-center rounded-xl overflow-hidden">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover rounded-xl"
        aria-label={alt}
        onLoadStart={(e) => {
          const video = e.currentTarget;
          video.currentTime = 0;
          video.play();
        }}
      />
    </div>
  );
};


// Single Feature Item Component
const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, isReversed, videoSrc, href }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={`${isReversed ? 'lg:col-start-2' : ''} px-4 lg:px-6`}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed">
          {description}
        </p>
        <a href={href} className="group inline-flex items-center text-white hover:text-purple-400 transition-colors duration-200">
          <span className="text-sm font-medium mr-2">Explore</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      {/* Video Asset */}
      <div className={`flex justify-center ${isReversed ? 'lg:col-start-1' : ''}`}>
        <VideoAsset src={videoSrc} alt={`${title} animation`} />
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
      videoSrc: "/assets/Background/Animation_01.mp4",
      isReversed: false,
      href: "/docs/advanced-features#quantum-security"
    },
    {
      title: "Ultra-Fast Consensus",
      description: "Achieve lightning-fast finality with ARMchain’s next-gen consensus. Optimized for quantum security and high throughput, enabling thousands of transactions per second with minimal latency..",
      videoSrc: "/assets/Background/Animation_02.mp4",
      isReversed: true,
      href: "/docs/advanced-features#stablecoin-ecosystem"
    },
    {
      title: "Sustainable Infrastructure",
      description: "Scale without limits. ARMchain’s architecture ensures sustainable growth, low energy usage, and support for mass adoption built for the future of global blockchain ecosystems.",
      videoSrc: "/assets/Background/Animation_01.mp4",
      isReversed: false,
      href: "/docs/advanced-features#harvest-now-decrypt-later-protection"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 px-4">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              isReversed={feature.isReversed}
              videoSrc={feature.videoSrc}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Named export to match your import
export const FeatureSection = FeaturesSection;
