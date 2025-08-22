import React from "react";

export function InnovationCardsSection() {
  const items = [
    {
      title: "Quantum Security",
      description:
        "Connect any popular wallet such as MetaMask to launch your blockchain adventure.",
      image: "/assets/cards/card1.png",
    },
    {
      title: "Mobile Nodes",
      description:
        "Run blockchain nodes directly from mobile devices for maximum flexibility.",
      image: "/assets/cards/card-2.png",
    },
    {
      title: "Fast Consensus",
      description:
        "Achieve finality in seconds with our high-speed consensus mechanism.",
      image: "/assets/cards/card-3.png",
    },
    {
      title: "Low Latency",
      description: "Experience seamless, real-time blockchain interactions.",
      image: "/assets/cards/card-4.png",
    },
    {
      title: "Scalability",
      description: "Scale effortlessly without compromising performance.",
      image: "/assets/cards/card-5.png",
    },
    {
      title: "Decentralization",
      description:
        "Ensure trust and resilience with a fully decentralized network.",
      image: "/assets/cards/card-6.png",
    },
  ];

  // Duplicate items for seamless infinite scroll
  const scrollingItems = [...items, ...items];

  return (
    <section className="bg-black px-4 pb-12 pt-40">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="animate-scroll flex gap-8">
          {scrollingItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-[420px] w-80 flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-gray-800 shadow-lg"
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
                <a
                  href="#"
                  className="font-semibold text-[#8129FF] hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
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
