import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Work', href: '#work' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Packages', href: '#packages' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const ctaLink = "https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20grow%20my%20business.";

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070707]/90 backdrop-blur-md border-b border-[#C9A84C]/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a id="nav-logo" href="#home" className="flex items-center space-x-2 group">
          <span className="font-tech text-2xl font-extrabold tracking-[0.2em] text-[#F5F1E8] transition-colors duration-300 group-hover:text-[#E7C97B]">
            3<span className="text-[#C9A84C]">M</span>EDIA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div id="desktop-nav-links" className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A7A39A] hover:text-[#F5F1E8] tracking-wide transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            id="nav-cta-btn"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group px-5 py-2.5 bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707] text-xs font-semibold uppercase tracking-wider rounded-none transition-colors duration-300 flex items-center space-x-1 border border-[#C9A84C]/20"
          >
            <span>Start Your Growth</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#F5F1E8] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[#070707] border-l border-[#C9A84C]/10 z-40 p-8 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <div>
          <div className="flex items-center justify-between mb-12">
            <span className="font-tech text-xl font-bold tracking-[0.2em] text-[#F5F1E8]">
              3<span className="text-[#C9A84C]">M</span>EDIA
            </span>
            <button
              id="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#A7A39A] hover:text-[#F5F1E8] focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-medium text-[#A7A39A] hover:text-[#F5F1E8] hover:translate-x-1 transition-all duration-200 tracking-wide block"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-[1px] bg-[#C9A84C]/10 w-full"></div>
          <p className="text-xs text-[#A7A39A] font-mono tracking-tight leading-relaxed">
            Dubai, United Arab Emirates<br />
            Built for ambitious local businesses.
          </p>
          <a
            id="mobile-nav-cta-btn"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center block px-6 py-4 bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707] text-sm font-bold uppercase tracking-wider rounded-none transition-colors duration-200"
          >
            Start Your Growth
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-35 lg:hidden"
        ></div>
      )}
    </nav>
  );
}
