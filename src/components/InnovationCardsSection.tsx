import React from "react";

export function InnovationCardsSection() {
  const items = [
    {
      title: "Quantum Security",
      description:
        "Experience unparalleled security with quantum-resistant cryptographic protocols built for the future.",
      image: "/assets/cards/card1.png",
      href: "/docs/key-features#quantum-security",
    },
    {
      title: "Mobile Nodes",
      description:
        "Run blockchain nodes directly from mobile devices for maximum flexibility and global participation.",
      image: "/assets/cards/card-2.png",
      href: "/docs/key-features#mobile-nodes",
    },
    {
      title: "Fast Consensus",
      description:
        "Achieve finality in seconds with our quantum-safe consensus mechanism and instant transaction confirmation.",
      image: "/assets/cards/card-3.png",
      href: "/docs/key-features#fast-consensus",
    },
    {
      title: "Low Latency",
      description: "Experience seamless, real-time blockchain interactions with sub-second confirmation times.",
      image: "/assets/cards/card-4.png",
      href: "/docs/key-features#low-latency",
    },
    {
      title: "Scalability",
      description: "Scale effortlessly to handle enterprise-level transaction volumes without compromising decentralization.",
      image: "/assets/cards/card-5.png",
      href: "/docs/key-features#scalability",
    },
    {
      title: "Decentralization",
      description:
        "Ensure trust and resilience with a truly decentralized network spanning the globe.",
      image: "/assets/cards/card-6.png",
      href: "/docs/key-features#decentralization",
    },
  ];

  // Duplicate items for seamless infinite scroll
  const scrollingItems = [...items, ...items];

  return (
    <section className="bg-black px-4 pb-8 pt-24">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="animate-scroll flex gap-8">
          {scrollingItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative h-[360px] w-80 flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-gray-800 shadow-lg hover:border-[#8129FF] transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Title Overlay (default view) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between bg-black p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white-700">{item.description}</p>
                </div>
                <span className="font-semibold text-[#8129FF] hover:underline">
                  Learn More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
