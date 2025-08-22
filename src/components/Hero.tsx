import { useState, useEffect, useCallback, useRef } from "react";
import type { TouchEvent } from "react";
import { useTRPC, useTRPCClient } from "~/trpc/react";
import { AISearchPopup } from "~/components/AISearchPopup";

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

// Navigation Arrow Component
type NavigationDirection = "left" | "right";
interface NavigationArrowProps {
  direction: NavigationDirection;
  onClick: () => void;
}
const NavigationArrow = ({ direction, onClick }: NavigationArrowProps) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200 ${
      direction === "left" ? "left-6" : "right-6"
    }`}
    aria-label={`Go to ${direction === "left" ? "previous" : "next"} slide`}
  >
    <svg
      className={`w-5 h-5 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

// Pagination Dots Component
interface PaginationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}
const PaginationDots = ({ totalSlides, currentSlide, onSlideChange }: PaginationDotsProps) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => onSlideChange(index)}
        className={`w-3 h-3 rounded-full transition-all duration-200 ${
          index === currentSlide
            ? "bg-purple-500 scale-110"
            : "bg-white/30 hover:bg-white/50"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

// Slide 1 Component
// Feature data with improved typing
interface Feature {
  title: string;
  backgroundImage?: string;
}

const Slide1: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Post Quantum Testnet",
      backgroundImage: "/assets/cards/cta1.png",
    },
    {
      title: "Whitepaper",
      backgroundImage: "/assets/cards/cta2.png",
    },
    {
      title: "Build",
      backgroundImage: "/assets/cards/cta3.png",
    },
  ];

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="/assets/background/heroslide1.png"
      alt="Hero background"
      className="w-full h-full object-cover"
    />
    {/* Optional dark overlay for readability */}
    <div className="absolute inset-0 bg-black/60" />
  </div>
      {/* Content wrapper */}
      <div className="relative z-10 mx-auto px-6 lg:px-8 h-full flex items-center max-w-screen-xl">
        <div className="w-full text-center pt-30">
          {/* Top badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-purple-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>Quantum Secure • 10K+ TPS Ready</span>
            </div>
          </div>

          {/* Hero heading */}
          <div className="mb-10">
            <h1 className="font-extrabold text-white leading-tight text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              Where Blockchain Meets{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                True Security
              </span>
            </h1>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`
                  relative overflow-hidden backdrop-blur-sm border border-white/6
                  rounded-2xl p-6 hover:border-white/12
                  transition-all duration-300 min-h-[150px] group
                `}
              >
                {/* Background image */}
                {feature.backgroundImage && (
                  <div className="absolute inset-0 opacity-100">
                    <img
                      src={feature.backgroundImage}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="relative flex items-start justify-between h-full z-10">
                  <div className="text-left flex-1">
                    <h3 className="font-semibold mb-2 text-lg text-white drop-shadow-lg">
                      {feature.title}
                    </h3>
                  </div>

                  <button
  className="fixed bottom-4 left-4 w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white hover:from-purple-500 hover:to-purple-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
  aria-label={`Explore ${feature.title}`}
>
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-500 hover:to-purple-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
              <span>Explore ARMChain</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
/// Slide 2 Component
const Slide2 = () => {
  const flipperWords = ["Trust", "Power", "Scale", "Speed", "Future"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [lastSearchQuery, setLastSearchQuery] = useState("");

  // Text flipping
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCurrentWordIndex(flipperWords.length - 1);
      return;
    }
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % flipperWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // TRPC + OpenAI mutation
  const trpcClient = useTRPCClient();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      try {
        const result = await trpcClient.aiSearch.mutate({ query: searchQuery.trim() });
        setAiResult(result.result);
        setLastSearchQuery(result.query);
        setIsPopupOpen(true);
      } catch (error: any) {
        console.error("AI Search failed:", error);
        setAiResult(null);
        setLastSearchQuery(searchQuery);
        setIsPopupOpen(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-center px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#0B0B0F", minHeight: "680px" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/assets/Background/slide2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <h1
          className="text-white font-black mb-3 animate-fade-in"
          style={{
            fontSize: "clamp(40px, 8vw, 84px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Redefined.
        </h1>

        {/* Flipping Words */}
        <h2
          aria-live="polite"
          className="font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-slide-up inline-block"
          style={{
            fontSize: "clamp(40px, 7vw, 84px)",
            letterSpacing: "-0.02em",
            minHeight: "84px",
            lineHeight: 1.05,
          }}
        >
          {flipperWords[currentWordIndex]}
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 mt-1 animate-fade-in-up">
          <button
            className="min-h-[42px] px-7 rounded-full font-semibold transition duration-200 text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Join Waitlist
          </button>
          <button
            className="min-h-[42px] px-7 rounded-full font-semibold transition duration-200 border focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{
              backgroundColor: "#13161C",
              borderColor: "rgba(255,255,255,0.16)",
              color: "#fff",
            }}
          >
            ARM Token
          </button>
        </div>

        {/* AI Search Box */}
        <div className="max-w-md mx-auto mt-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <form
            onSubmit={handleSearchSubmit}
            className="flex border border-white/12 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-purple-400"
            style={{ minHeight: "40px", backgroundColor: "#13161C" }}
          >
            <input
              type="text"
              placeholder="How to be quantum-safe?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base"
            />
            <div className="w-px bg-white/10"></div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 font-semibold transition duration-200 text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
            >
              {isLoading ? "Thinking..." : "Ask me✨"}
            </button>
          </form>
        </div>
      </div>

      {/* AI Search Popup */}
      <AISearchPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        query={lastSearchQuery}
        result={aiResult}
        isLoading={isLoading}
        error={null}
      />
    </div>
  );
};
// Slide 3 Component
const Slide3 = () => {
  return (
    <section
      className="relative w-full min-h-screen flex overflow-hidden"
      style={{ backgroundColor: "#000", minHeight: "930px" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/assets/Background/heroslide2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Block (bottom-left) */}
      <div className="absolute bottom-8 left-6 sm:left-12 max-w-3xl z-10">
        <h1
          className="font-extrabold text-white leading-tight mb-4"
          style={{
            fontSize: "clamp(36px, 6.5vw, 64px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          A global,{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            quantum resistant
          </span>{" "}
          chain.
        </h1>

        <p
          className="text-gray-400 mb-8"
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          Post-quantum security, low fees, built for real-world scale.
        </p>

        {/* Single CTA */}
        <button className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-600 hover:to-purple-700 transition-all duration-200">
          Build
        </button>
      </div>

      {/* Stats Card (bottom-right, wide & short) */}
      <div className="absolute top-[70%] right-6 sm:right-12 w-[95%] lg:w-[960px] bg-[rgba(10,12,16,0.65)] border border-white/10 backdrop-blur-xl rounded-xl shadow-lg p-6 z-10">

        {/* Title */}
        <div className="inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white">
          Network Stats
        </div>

        {/* Stats Grid in one row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* TPS */}
          <div>
            <div className="text-gray-400 text-xs uppercase mb-1">
              TPS (Live)
            </div>
            <div className="text-white text-xl font-bold">12,450</div>
          </div>
          {/* Gas Fee */}
          <div>
            <div className="text-gray-400 text-xs uppercase mb-1">
              Avg Gas Fee
            </div>
            <div className="text-white text-xl font-bold">0.0007 ARM</div>
            <div className="text-gray-400 text-xs">≈ $0.0002</div>
          </div>
          {/* Volume */}
          <div>
            <div className="text-gray-400 text-xs uppercase mb-1">
              24h Volume
            </div>
            <div className="text-white text-xl font-bold">
              $1,057,205,306
            </div>
          </div>
          {/* Finality */}
          <div>
            <div className="text-gray-400 text-xs uppercase mb-1">
              Time to Finality
            </div>
            <div className="text-white text-xl font-bold">1.2s</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Hero Slider Component
export default function HeroSlider() {
  const SLIDES = [Slide1, Slide2, Slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, AUTO_PLAY_INTERVAL);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isAutoPlaying]);

  // Cleanup effect for timeout
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex = currentSlide === 0 ? SLIDES.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  }, [currentSlide, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = (currentSlide + 1) % SLIDES.length;
    goToSlide(newIndex);
  }, [currentSlide, goToSlide]);

  // Touch/swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    const firstTouch = e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0] : null;
    if (firstTouch) {
      setTouchStart(firstTouch.clientX);
    }
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const firstTouch = e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0] : null;
    if (firstTouch) {
      setTouchEnd(firstTouch.clientX);
    }
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides container */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {SLIDES.map((SlideComponent, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <SlideComponent />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <NavigationArrow direction="left" onClick={goToPrevious} />
      <NavigationArrow direction="right" onClick={goToNext} />

      {/* Pagination dots */}
      <PaginationDots
        totalSlides={SLIDES.length}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
      />
    </div>
  );
}
