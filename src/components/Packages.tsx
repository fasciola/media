import { PACKAGES } from '../data';
import { Check, HelpCircle } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32 bg-[#111111]/10 border-t border-[#C9A84C]/5 overflow-hidden">
      {/* Background radial elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/2.5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2 justify-center">
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              FLEXIBLE GROWTH PLANS
            </span>
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight">
            Choose the Support Your <br />
            Business Needs Right Now.
          </h2>
          <p className="text-[#A7A39A] font-light text-sm sm:text-base max-w-xl mx-auto">
            Every package can be tailored to your business, industry, content needs, and growth goals. Select a package to start instantly.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const encodeMessage = encodeURIComponent(pkg.whatsappText);
            const waLink = `https://wa.me/971581416980?text=${encodeMessage}`;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-8 md:p-10 border transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-[#111111] border-[#C9A84C] shadow-[0_0_30px_rgba(201,168,76,0.06)]'
                    : 'bg-[#111111]/60 border-[#C9A84C]/10 hover:border-[#C9A84C]/25 hover:bg-[#111111]'
                }`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#070707] text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-4 py-1 border border-[#E7C97B]">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  {/* Label & Name */}
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7A39A] block mb-1">
                      {pkg.label}
                    </span>
                    <h3 className="text-2xl font-tech font-bold text-[#F5F1E8] tracking-tight">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline mb-6 pb-6 border-b border-[#C9A84C]/10">
                    <span className="text-3xl sm:text-4xl font-display font-medium text-[#E7C97B]">
                      {pkg.price}
                    </span>
                    <span className="text-[#A7A39A]/60 text-xs font-mono ml-2">
                      / month
                    </span>
                  </div>

                  {/* Best For */}
                  <p className="text-sm font-light text-[#A7A39A] leading-relaxed mb-8">
                    {pkg.bestFor}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-[#E7C97B] tracking-wider uppercase block">
                      WHAT IS INCLUDED
                    </span>
                    <ul className="space-y-3">
                      {pkg.includes.map((include, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-[#A7A39A]">
                          <Check size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                          <span>{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button Link */}
                <div className="mt-10 pt-6 border-t border-[#C9A84C]/10">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center block py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      pkg.isPopular
                        ? 'bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707]'
                        : 'bg-[#070707] hover:bg-[#151515] text-[#F5F1E8] border border-[#C9A84C]/20 hover:border-[#C9A84C]/40'
                    }`}
                  >
                    {pkg.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-16 text-center max-w-2xl mx-auto pt-8 border-t border-[#C9A84C]/10">
          <p className="text-[#A7A39A] text-sm font-light leading-relaxed">
            Need a custom plan?{' '}
            <a
              href="https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20request%20a%20custom%20marketing%20plan%20tailored%20to%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:text-[#E7C97B] font-semibold underline underline-offset-4 transition-colors duration-250 inline-flex items-center space-x-1"
            >
              <span>We can build a package around your business size, industry, audience, and content requirements.</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
