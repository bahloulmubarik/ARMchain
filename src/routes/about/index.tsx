import { createFileRoute } from "@tanstack/react-router";
import { Footer } from '~/components/Footer';
import { RoadmapSection } from '~/components/RoadmapSection';
import { Linkedin, Twitter, ArrowRight, ChevronLeft, ChevronRight, Users, Mail, User, MessageSquare, X } from 'lucide-react';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Leadership Team</h2>

          {/* CEO Card */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-sm">
              <TeamMemberCard
                name="Abuzar Farouqi"
                position="CEO & Founder"
                imageSrc="/assets/abuzarg.png"
                linkedinUrl="https://www.linkedin.com/in/abuzer-f-4042391aa/"
                twitterUrl="#"
              />
            </div>
          </div>

          {/* Executive Team - CTO & COO */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">Executive Team</h3>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <TeamMemberCard
                name="Samran Habib"
                position="COO"
                imageSrc="/assets/sam.png"
                linkedinUrl="#"
                twitterUrl="#"
              />
              <TeamMemberCard
                name="Husnain Aslam"
                position="CTO"
                imageSrc="/assets/husnain.jpeg"
                linkedinUrl="#"
                twitterUrl="#"
              />
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-semibold text-white text-center mb-8">Core Team</h3>
            <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
              <TeamMemberCard
                name="Farzan Saqib"
                position="Blockchain Engineer"
                imageSrc="/assets/farzan.jpeg"
                linkedinUrl="#"
                twitterUrl="#"
              />
              <TeamMemberCard
                name="Bahloul Mubarik"
                position="Blockchain Engineer"
                imageSrc="/assets/Bahloulmubarik.jpg"
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

          {/** Leadership Highlight Card with Controls - moved to bottom */}
          <div className="mt-16">
            <LeadershipHighlight />
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
<section className="bg-black py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">

    {/* Heading */}
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Careers</p>
      <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
        Join Our
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"> Team</span>
      </h2>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Be part of building the quantum-secure future.
      </p>
    </div>

    {/* Main CTA Card */}
    <div className="bg-black rounded-3xl p-12 border border-purple-500/30 shadow-2xl backdrop-blur-sm">
      <div className="space-y-8">

        {/* Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Shape the Future?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Explore open positions and connect with our team on LinkedIn.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="https://www.linkedin.com/company/armnetwork/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-xl" />
            View Open Positions
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </div>

        {/* Sub text */}
        <p className="text-sm text-gray-400">
          Follow us on LinkedIn for the latest job openings and company updates
        </p>
      </div>
    </div>

  </div>
</section>

      <Footer />

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <ContactFormModal onClose={() => setIsContactFormOpen(false)} />
      )}
    </div>
  );
}

// Contact Form Modal Component
function ContactFormModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

        const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create a simple solution that always works
    const emailContent = `To: bahloulmubarik786@gmail.com
Subject: Contact from ${formData.name} - ${formData.company || 'No Company'}

Hello Bahloul,

You have received a new contact form submission from ARMchain website:

👤 Name: ${formData.name}
✉️ Email: ${formData.email}
🏢 Company: ${formData.company || 'Not specified'}

💬 Message:
${formData.message}

---
Please reply directly to: ${formData.email}
Sent from ARMchain Contact Form`;

    // Copy to clipboard and provide clear instructions
    try {
      await navigator.clipboard.writeText(emailContent);
      alert(`✅ Contact information copied to clipboard!

📋 The message has been copied. Please:
1. Open your email client (Gmail, Outlook, etc.)
2. Create a new email
3. Paste the copied content (Ctrl+V)
4. Send the email

Or you can directly email: bahloulmubarik786@gmail.com`);
    } catch (error) {
      // If clipboard fails, show the information directly
      alert(`📧 Please send this information to: bahloulmubarik786@gmail.com

Subject: Contact from ${formData.name}

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Message: ${formData.message}`);
    }

    // Also try the simple form submission as backup
    try {
      const formData2 = new FormData();
      formData2.append('name', formData.name);
      formData2.append('email', formData.email);
      formData2.append('company', formData.company);
      formData2.append('message', formData.message);

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSfHx8K9C0mK1_5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData2
      });
    } catch (error) {
      // Silent fail for backup
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-md p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Contact Us</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              placeholder="Your company (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          Contact information will be copied for easy emailing to bahloulmubarik786@gmail.com
        </p>
      </div>
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
  const current = slides[index] || slides[0];

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
                {current?.quote || ''}
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
                      {current?.name || ''}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      {current?.role || ''}
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
                  src={current?.imageSrc || ''}
                  alt={current?.name || ''}
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



const TeamMemberCard = ({ name, position, imageSrc, linkedinUrl, twitterUrl }: TeamMemberCardProps) => {
  return (
    <div className="group bg-black rounded-3xl p-10 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 w-full max-w-sm mx-auto">
      {/* Large Circular Image */}
      <div className="relative mb-8 flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-400/70 transition-all duration-300 shadow-2xl group-hover:shadow-purple-500/40">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Dynamic Position Badge */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          {position.includes('CEO') ? 'CEO' :
           position.includes('CTO') ? 'CTO' :
           position.includes('COO') ? 'COO' :
           position.includes('Engineer') ? 'Engineer' :
           position.includes('Security') ? 'Security' :
           position.includes('DevRel') ? 'DevRel' :
           '⭐ Team Member'}
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {name}
        </h3>
        <p className="text-lg text-purple-400 mb-8 font-medium">{position}</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900 hover:bg-purple-600/30 rounded-full flex items-center justify-center transition-all duration-300 group/link hover:scale-110 border border-gray-700 hover:border-purple-500/50"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 group-hover/link:text-purple-300 text-xl" />
            </a>
          )}
          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900 hover:bg-purple-600/30 rounded-full flex items-center justify-center transition-all duration-300 group/link hover:scale-110 border border-gray-700 hover:border-purple-500/50"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-gray-300 group-hover/link:text-purple-300 text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

