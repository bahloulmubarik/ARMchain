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
      className="py-20 px-4 relative"
      style={{
        backgroundImage: 'url(/assets/Newsletterback.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl p-24 text-left relative overflow-hidden"> {/* slightly less rounded */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/Background/gradi.mp4"
          ></video>
          {/* Content wrapper */}
          <div className="relative z-10 flex flex-col items-start gap-6">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get our Newsletter
            </h2>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-[#8129FF] transition-colors text-base" // less rounded, shorter height
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-base shadow-lg" // same height & corner radius as input
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
