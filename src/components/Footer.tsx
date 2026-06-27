import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Work', href: '#work' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Packages', href: '#packages' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const waLink = "https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20grow%20my%20business.";

  return (
    <footer className="relative bg-[#070707] border-t border-[#C9A84C]/10 py-16 md:py-24 px-6 md:px-12 text-[#A7A39A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Logo and Pitch Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="inline-block group">
              <span className="font-tech text-2xl font-extrabold tracking-[0.25em] text-[#F5F1E8] group-hover:text-[#E7C97B] transition-colors duration-300">
                3<span className="text-[#C9A84C]">M</span>EDIA
              </span>
            </a>
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Creative growth systems for ambitious businesses ready to build a premium, highly visible, and client-converting digital footprint.
            </p>
            <div className="text-xs font-mono text-[#A7A39A]/50">
              Dubai, United Arab Emirates · Licensed Digital Agency
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#E7C97B] tracking-widest font-semibold">
              NAVIGATION
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5F1E8] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links Column */}
          <div className="md:col-span-4 space-y-4 text-xs font-mono">
            <h4 className="text-xs font-mono uppercase text-[#E7C97B] tracking-widest font-semibold">
              CHANNELS
            </h4>
            <div className="space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#A7A39A] hover:text-[#F5F1E8] transition-colors duration-200 group"
              >
                <span>WhatsApp: +971 58 141 6980</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="mailto:info@3lawimedia.com"
                className="flex items-center space-x-2 text-[#A7A39A] hover:text-[#F5F1E8] transition-colors duration-200 group"
              >
                <span>Email: info@3lawimedia.com</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://3lawimedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#A7A39A] hover:text-[#F5F1E8] transition-colors duration-200 group"
              >
                <span>Website: 3lawimedia.com</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#C9A84C]/5 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-[10px] font-mono text-[#A7A39A]/40">
          <div>
            &copy; 2026 3Media. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span>Built for Ambitious Local Businesses</span>
            <span>·</span>
            <span>Digital Growth Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
