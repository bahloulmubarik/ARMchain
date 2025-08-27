import { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section
      className="py-8 px-4 relative"
      style={{
        backgroundImage: 'url(/assets/feature.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl p-24 text-center relative overflow-hidden flex flex-col items-center justify-center">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/Background/gradi.mp4"
          ></video>

          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get our Newsletter
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              Stay updated with the latest ARMChain developments and insights
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#8129FF] transition-colors text-base"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-base shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Extra bottom space */}
      <div className="h-32"></div>
    </section>
  );
}
