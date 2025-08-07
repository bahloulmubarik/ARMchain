import { Link } from '@tanstack/react-router';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center py-4">
        <div className="bg-transparent rounded-[40px] px-8 py-3 flex items-center justify-between w-full max-w-4xl">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-lg">
            ARMchain
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white text-sm uppercase tracking-wide transition-colors"
            >
              About
            </Link>
            <Link 
              to="/ecosystem" 
              className="text-gray-300 hover:text-white text-sm uppercase tracking-wide transition-colors"
            >
              Ecosystem
            </Link>
            <Link 
              to="/community" 
              className="text-gray-300 hover:text-white text-sm uppercase tracking-wide transition-colors"
            >
              Community
            </Link>
            <Link 
              to="/docs" 
              className="text-gray-300 hover:text-white text-sm uppercase tracking-wide transition-colors"
            >
              Docs
            </Link>
          </div>
          
          {/* CTA Button */}
          <Link 
            to="/docs"
            className="bg-gradient-to-r from-[#8129FF] to-[#A25CFE] text-white font-bold px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            ARMchain Docs
          </Link>
        </div>
      </div>
    </nav>
  );
}
