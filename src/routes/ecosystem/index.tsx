import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/Footer";
import { ArrowRight, Code, Users, MessageSquare, Shield } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { QSecureWalletSection } from "~/components/QSecureWalletSection";

export const Route = createFileRoute("/ecosystem/")({
  component: Ecosystem,
});

function Ecosystem() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section - Keep placeholder for PNG */}
      <section
        className="py-24 px-4 relative"
        style={{
          backgroundImage: 'url(/assets/Background/aboutback.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left side */}
            <div>
              <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Our Shining Ecosystem
              </h1>
            </div>

            {/* Right side */}
            <div>
              <p className="text-xl leading-relaxed text-gray-300">
                ARMchain's ecosystem brings together partners, developers, and
                innovators to build quantum-resistant blockchain solutions
                across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
<section id="partners" className="px-4 py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-16 text-center text-4xl font-bold text-white">
      Our Partners
    </h2>

    {/* Logos */}
    <div className="flex justify-center flex-wrap gap-8">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex justify-center items-center">
          <img
            src={`/assets/logo/logo${i + 1}.png`}
            alt={`Partner ${i + 1}`}
            className="max-h-12 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Find Out More Section */}
      <section id="defi" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Find Out More
          </h2>

          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <FindOutMoreCard
              title="Builder"
              description="Join our builder program and get access to grants."
              href="/docs"
              backgroundVideo="/assets/Background/builder.mp4"
            />
            <FindOutMoreCard
              title="Ambassador"
              description="Become an ARMchain ambassador and help grow community."
              href="/ambassodor"
              backgroundVideo="/assets/Background/ambassodor.mp4"
            />
            <FindOutMoreCard
              title="Community"
              description="Connect with developers, validators, and enthusiasts."
              href="/community"
              backgroundVideo="/assets/Background/community.mp4"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Partners Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Infrastructure Partners
          </h2>

          {/* QSecure Wallet Highlight Card */}
          <div className="mb-16">
            <QSecureWalletSection />
          </div>

          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <InfraPartnerCard
              title="Armswap"
              description="Decentralized exchange protocol with quantum-resistant security."
              href="https://armswap.com/"
              backgroundImage="public/assets/cards/armswapcard.png"
            />
            <InfraPartnerCard
              title="Armup"
              description="Staking and yield farming platform optimized for ARMchain."
              href="https://armup.com/"
              backgroundImage="public/assets/cards/armupcard.png"
            />
            <InfraPartnerCard
              title="Armdv"
              description="Developer tools and infrastructure services for ARMchain."
              href="https://armdv.com/"
              backgroundImage="public/assets/cards/armupdv.png"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface FindOutMoreCardProps {
  title: string;
  description: string;
  href: string;
  backgroundVideo?: string;
}

function FindOutMoreCard({
  title,
  description,
  href,
  backgroundVideo,
}: FindOutMoreCardProps) {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
      {/* Background Video */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Title + description */}
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm leading-snug text-gray-400">{description}</p>
        </div>

        {/* Small arrow button at bottom-left */}
        <Link
          to={href}
          className="mt-4 flex items-center text-sm text-purple-400 hover:text-purple-300"
        >
          <ArrowRight className="mr-1 h-4 w-4" />
          Learn More
        </Link>
      </div>
    </div>
  );
}

interface InfraPartnerCardProps {
  title: string;
  description: string;
  href: string;
  backgroundImage?: string;
}

function InfraPartnerCard({
  title,
  description,
  href,
  backgroundImage,
}: InfraPartnerCardProps) {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 rounded-xl bg-gray-900/20"></div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {/* Title and description at top */}
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="text-sm leading-snug text-gray-400">{description}</p>
        </div>

        {/* CTA button at bottom */}
        <div className="mt-auto">
          <a
            href={href}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-600"
          >
            <span>Visit Website</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
