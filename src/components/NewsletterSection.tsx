import { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-16 text-center relative overflow-hidden">
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Content wrapper */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#8129FF] to-[#A25CFE] rounded-full flex items-center justify-center shadow-2xl">
                <Mail className="h-10 w-10 text-white" />
              </div>
            </div>
            
            {/* Text */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay in the loop with ARMchain updates
            </h2>
            <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
              Get the latest news, updates, and insights delivered to your inbox.
            </p>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-blue-200 focus:outline-none focus:border-[#8129FF] transition-colors text-lg"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
