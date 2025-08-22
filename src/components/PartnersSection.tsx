const logos = [
  '/assets/logo/ARMUPlogo.png',
  '/assets/logo/armdv.png',
  '/assets/logo/armswap.png',
  '/assets/logo/dhrp.png',
];

export function PartnersSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
          Trusted by the pioneers
        </h2>

        {/* Animated Logos - endless left to right */}
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-marquee-ltr" style={{ width: 'max-content' }}>
            {[...logos, ...logos].map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-10 h-16 w-32 flex items-center justify-center">
                <img
                  src={src}
                  alt={`Partner logo ${index % logos.length + 1}`}
                  className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animation CSS */}
        <style>{`
          @keyframes marquee-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-ltr {
            display: flex;
            animation: marquee-ltr 20s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
}
