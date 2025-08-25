import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { RoadmapSection } from '~/components/RoadmapSection';
import { Linkedin, Twitter, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        className="py-24 px-4 relative"
        style={{
          backgroundImage: 'url(/assets/Background/aboutback.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                The Quantum Secure Blockchain.
              </h1>
              <button className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg">
                Contact Us
              </button>
            </div>

            {/* Right side - Catchy Description */}
            <div className="flex justify-center">
              <div className="max-w-md text-center lg:text-left space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  ARMChain is the <span className="font-semibold text-white">quantum-secure blockchain</span> built
                  for the future. Fast, scalable, and resistant to tomorrow’s cyber threats,
                  it empowers enterprises, builders, and communities to create with confidence.
                </p>
                <p className="text-gray-400 text-base">
                  From <span className="text-white">DeFi</span> to <span className="text-white">real-world assets</span>,
                  ARMChain unlocks limitless possibilities with next-gen security and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Mission & Purpose Section */}
<section id="mission" className="py-28 px-4 bg-black overflow-hidden">
  <div className="max-w-full mx-auto relative">

    {/* Horizontal scrolling cards container */}
    <div className="flex gap-8 animate-scrollLeft">

      {/* Cards Array */}
      {[
        {
          title: "Our Mission",
          description: `Building a quantum-secure blockchain that safeguards the future of DeFi and enterprise innovation, empowering communities`,
        },
        {
          title: "Our Purpose",
          description: `To create an ecosystem where trust, innovation, and transparency drive global adoption, enabling individuals`,
        },
        {
          title: "Our Vision",
          description: `Pioneering the next-generation blockchain solutions to make decentralized technologies accessible`,
        },
        {
          title: "Our Commitment",
          description: `Dedicated to building a robust and scalable ecosystem, fostering innovation while ensuring trust and transparency`,
        },
        {
          title: "Our Values",
          description: `Integrity, innovation, and community-driven growth are the core values that guide every decision and action we take.`,
        },
      ].map((card, index) => (
        <div
          key={index}
          className="relative"
          style={{ minWidth: "450px", height: "280px" }}
        >
          {/* Card */}
          <div className="relative bg-black rounded-2xl p-8 border border-neutral-800 transition-all duration-500 shadow-sm">
            <div className="flex flex-col items-start h-full justify-start">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                {card.title}
              </h2>
              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Duplicate cards for smooth infinite loop */}
      {[...Array(5)].map((_, idx) => (
        <div key={`repeat-${idx}`} className="min-w-[450px]" style={{ height: "280px" }}></div>
      ))}

    </div>
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-scrollLeft {
        display: flex;
        gap: 2rem;
        animation: scrollLeft 30s linear infinite;
      }
    `}
  </style>
</section>



      {/* Roadmap Section */}
      <div id="roadmap">
        <RoadmapSection />
      </div>

      {/* Leadership Section */}
      <section id="team" className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Leadership Team</h2>

          {/** Leadership Highlight Card with Controls */}
          <LeadershipHighlight />

          {/* Team Members Grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard
              name="Husnain Aslam"
              position="Project Manager"
              imageSrc="/assets/husnain.jpeg"
              linkedinUrl="#"
              twitterUrl="#"
            />
            <TeamMemberCard
              name="Bahloul Mubarik"
              position="Blockchain Engineer & DevRel"
              imageSrc="/assets/Bahloulmubarik.jpg"
              linkedinUrl="#"
              twitterUrl="#"
            />
            <TeamMemberCard
              name="Farzan Saqib"
              position="Core Blockchain Engineer"
              imageSrc="/assets/farzan.jpeg"
              linkedinUrl="#"
              twitterUrl="#"
            />
            <TeamMemberCard
              name="Khizar Bakhtiyar"
              position="Blockchain Engineer"
              imageSrc="/assets/khizar.jpeg"
              linkedinUrl="#"
              twitterUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Careers Section */}
<section className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">

    {/* Left column */}
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Careers</p>
      <h2 className="text-white font-extrabold leading-tight text-[clamp(28px,4.5vw,56px)] mb-8">
        Amplified by a global team
      </h2>
      <button
        aria-label="Open careers – Join us"
        className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-white/80 text-white font-medium text-lg transition transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Join us
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>

    {/* Right column (photo grid) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {[
        { src: "https://via.placeholder.com/600x400", alt: "Team member 1", location: "LONDON, UK" },
        { src: "https://via.placeholder.com/600x400", alt: "Team member 2", location: "CALIFORNIA, US" },
        { src: "https://via.placeholder.com/600x400", alt: "Team member 3", location: "PRISTINA, XK" },
        { src: "https://via.placeholder.com/600x400", alt: "Team member 4", location: "BERLIN, DE" },
        { src: "https://via.placeholder.com/600x400", alt: "Team member 5", location: "SINGAPORE, SG" },
        { src: "https://via.placeholder.com/600x400", alt: "Team member 6", location: "TOKYO, JP" },
      ].map((m, i) => (
        <div
          key={i}
          className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/5"
        >
          <img
            src={m.src}
            alt={m.alt}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 right-3 bg-[#151823]/90 border border-white/20 text-[#EDEEF0] text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow">
            {m.location}
          </span>
          {/* Optional bottom-left role label */}
          {/* <span className="absolute bottom-3 left-3 text-xs text-white/90 bg-black/40 px-2 py-1 rounded">
            Designer
          </span> */}
        </div>
      ))}
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageSrc?: string;
  linkedinUrl: string;
  twitterUrl: string;
}

interface LeadershipSlide {
  imageSrc: string;
  name: string;
  role: string;
  quote: string;
}

function LeadershipHighlight() {
  const slides: LeadershipSlide[] = [
    {
      imageSrc: "/assets/samran.jpeg",
      name: "Samran Habib",
      role: "CEO & Founder",
      quote:
        "The future of blockchain lies in quantum resistance and true decentralization. ARMchain is not just building technology—we're architecting the foundation for a more secure and accessible digital economy.",
    },
    {
      imageSrc: "/assets/Bahloulmubarik.jpg",
      name: "Bahloul Mubarik",
      role: "Blockchain Engineer & DevRel",
      quote:
        "Security should be seamless. We are building tools that make quantum-safe development intuitive for every builder in the ecosystem.",
    },

    {
      imageSrc: "/assets/farzan.jpeg",
      name: "Farzan Saqib",
      role: "Core Blockchain Engineer",
      quote:
        "Performance and safety are not opposites. With ARMChain, we are proving that high throughput can coexist with post-quantum guarantees.",
    },
    {
      imageSrc: "/assets/Husnain.jpeg",
      name: "Husnain Aslam",
      role: "Project Manager",
      quote:
        "Decentralization is about giving power back to the people—our mission is to make it unbreakable, even in the quantum era.",
    },
    {
      imageSrc: "/assets/khizar.jpeg",
      name: "Khizar Bakhtiyar",
      role: "Blockchain Engineer",
      quote:
        "Every layer of ARMChain is designed for resilience—because true innovation must endure the tests of time and technology.",
    },
  ];

  const [index, setIndex] = useState(0);
  const current = slides[index];

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // ✅ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full">
      <div
        className="
          relative overflow-hidden border rounded-2xl md:rounded-3xl bg-black
          shadow-[0_0_25px_rgba(255,255,255,0.1)]
          hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
          transition-all duration-500 scale-[1.02] hover:scale-[1.04]
        "
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="px-8 sm:px-10 md:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            {/* Quote Section */}
            <div className="md:col-span-7 flex flex-col justify-between h-full">
              <blockquote
                className="text-[#EDEEF0] font-medium tracking-tight"
                style={{ fontSize: "clamp(18px, 2vw, 26px)", lineHeight: 1.45 }}
              >
                {current.quote}
              </blockquote>

              {/* Attribution + Controls on same row */}
              <div className="mt-8 flex items-center justify-between">
                {/* Left attribution */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                    <img
                      src="/assets/logo/ARMUPlogo.png"
                      alt="Brand"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-200">
                      {current.name}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      {current.role}
                    </div>
                  </div>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <div className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
                    {index + 1}/{slides.length}
                  </div>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Portrait Section */}
            <div className="md:col-span-5 flex justify-end pr-6">
              <div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border
                shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                transition-all duration-500"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(167,139,250,0.12) 100%)",
                  }}
                />
                <img
                  src={current.imageSrc}
                  alt={current.name}
                  className="absolute inset-0 z-10 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TeamMemberCard = ({ name, position, imageSrc, linkedinUrl, twitterUrl }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      {/* Full Image */}
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Overlay with Info */}
      <div className="absolute bottom-0 w-full bg-black/60 text-white p-4 flex flex-col items-center space-y-2 translate-y-full group-hover:translate-y-0 transition duration-300">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{position}</p>
        <div className="flex space-x-4">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-blue-400" />
            </a>
          )}
          {twitterUrl && (
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="lg" className="hover:text-gray-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

