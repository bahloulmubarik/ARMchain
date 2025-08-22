import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/Footer";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Trophy,
  MessageSquare,
} from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  href: string;
  backgroundVideo?: string;
  backgroundImage?: string;
}

function CommunityCard({
  title,
  description,
  href,
  backgroundVideo,
  backgroundImage,
}: CommunityCardProps) {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />
      )}

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
        <a
          href={href}
          className="mt-4 flex items-center text-sm text-purple-400 hover:text-purple-300"
        >
          <ArrowRight className="mr-1 h-4 w-4" />
          Learn More
        </a>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/community/")({
  component: Community,
});

function Community() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <section
        className="relative bg-black px-4 py-24"
        style={{
          backgroundImage: "url('/assets/Background/com.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left side */}
            <div>
              <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Join Our Community
              </h1>
            </div>

            {/* Right side */}
            <div>
              <p className="text-xl leading-relaxed text-gray-300">
                Connect with developers, validators, and blockchain enthusiasts
                building the quantum-resistant future. Our global community is
                at the heart of ARMchain's innovation, driving adoption and
                creating the next generation of decentralized applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Programs Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Community Programs
          </h2>

          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <CommunityCard
              title="Technical Community"
              description="Join our developer community to collaborate on quantum-resistant blockchain solutions."
              href="/docs"
              backgroundVideo="/assets/Background/tc.mp4"
            />
            <CommunityCard
              title="Non-Technical Community"
              description="Connect with other ARMchain enthusiasts and learn about our ecosystem."
              href="/community"
              backgroundVideo="/assets/Background/ntc.mp4"
            />
            <CommunityCard
              title="Events & Meetups"
              description="Participate in global events and local meetups to grow the ARMchain network."
              href="/events"
              backgroundVideo="/assets/Background/mup.mp4"
            />
          </div>
        </div>
      </section>

      {/* Join as Ambassador CTA */}
      <section id="events" className="bg-black px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-3xl border border-gray-800 bg-cover bg-center p-16 shadow-2xl"
            style={{
              backgroundImage: "url('/assets/Background/beo.png')",
            }}
          >
            {/* Content */}
            <div className="pb- relative z-10 flex h-[500px] flex-col items-center justify-end text-center">
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Join as Ambassador
              </h2>

              <button className="rounded-full bg-white px-12 py-5 text-xl font-bold text-[#8129FF] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl">
                Become an Ambassador
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Program Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Ambassador Program Benefits
          </h2>

          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
            <CommunityCard
              title="Exclusive Access"
              description="Get early access to new features and special events in the ARMchain ecosystem."
              href="#"
              backgroundImage="/assets/cards/exca.png"
            />
            <CommunityCard
              title="Rewards"
              description="Earn rewards for contributing to community growth and engagement."
              href="#"
              backgroundImage="/assets/cards/exc.png"
            />
            <CommunityCard
              title="Network Growth"
              description="Help shape the future of ARMchain and build valuable connections."
              href="#"
              backgroundImage="/assets/cards/excab.png"
            />
            <CommunityCard
              title="Skill Recognition"
              description="Gain recognition for your skills and contributions within the global ARMchain community."
              href="#"
              backgroundImage="/assets/cards/excac.png"
            />
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-4xl font-bold tracking-tight text-white">
            Connect With Us
          </h2>
          <p className="mb-12 text-center text-gray-300">
            Join our vibrant community across multiple platforms
          </p>

          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  {/* Top section with icon, title, description */}
                  <div className="flex items-start justify-between">
                    {/* Left side content */}
                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-white">X</h3>
                        <p className="text-sm leading-snug text-gray-400">
                          Follow us on X
                        </p>
                      </div>
                    </div>

                    {/* Right side follower count */}
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-400">
                        Followers
                      </p>
                      <p className="text-lg font-bold text-white">10.5K</p>
                    </div>
                  </div>
                </div>

                {/* CTA button at bottom */}
                <a
                  href="#"
                  className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-600"
                >
                  Follow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                          LinkedIn
                        </h3>
                        <p className="text-sm leading-snug text-gray-400">
                          Professional updates & team
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-400">
                        Connections
                      </p>
                      <p className="text-lg font-bold text-white">5.2K</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-600"
                >
                  Connect
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Telegram Card */}
            <div className="relative h-64 overflow-hidden rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-purple-600/50">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                          Telegram
                        </h3>
                        <p className="text-sm leading-snug text-gray-400">
                          Join community discussions
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-400">
                        Members
                      </p>
                      <p className="text-lg font-bold text-white">8.7K</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-600"
                >
                  Join
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
