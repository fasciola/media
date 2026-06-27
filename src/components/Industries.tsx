import { INDUSTRIES } from '../data';
import * as Icons from 'lucide-react';

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32 bg-[#070707] border-t border-[#C9A84C]/5 overflow-hidden">
      {/* Background element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              WHO WE HELP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-tight">
            Built for Businesses That <br />
            Need More Customers.
          </h2>
          <p className="text-[#A7A39A] font-light max-w-xl text-base leading-relaxed">
            Every sector requires a different visual language and inquiry flow. We build custom-tailored campaign assets optimized for how your clients make choices.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => {
            const IconComponent = (Icons as any)[industry.iconName] || Icons.Building;

            return (
              <div
                key={industry.id}
                className="group relative bg-[#111111]/80 hover:bg-[#111111] p-6 border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 hover:shadow-[0_4px_20px_rgba(201,168,76,0.02)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Title row */}
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 flex items-center justify-center bg-[#070707] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-all duration-300">
                      <IconComponent size={16} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-tech font-bold text-[#F5F1E8] tracking-tight group-hover:text-[#E7C97B] transition-colors duration-200">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#A7A39A] font-light text-xs leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Hover line */}
                <div className="h-[1px] w-0 bg-[#C9A84C]/30 group-hover:w-full transition-all duration-500 mt-6"></div>
              </div>
            );
          })}
        </div>

        {/* Action Link to contact with pre-filled parameter */}
        <div className="mt-16 text-center">
          <p className="text-[#A7A39A] text-sm">
            Don&apos;t see your sector?{' '}
            <a
              href="https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20know%20how%20you%20can%20help%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:text-[#E7C97B] underline underline-offset-4 font-semibold tracking-wide transition-colors duration-200 inline-flex items-center space-x-1"
            >
              <span>Ask about custom industries</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
