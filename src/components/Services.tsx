import { SERVICES } from '../data';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#111111]/30 border-t border-[#C9A84C]/5 overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-tight">
            Everything Your Business <br className="hidden sm:block" />
            Needs to Grow Online.
          </h2>
          <p className="text-[#A7A39A] font-light max-w-xl text-base leading-relaxed">
            We operate as an integrated extension of your business. No outsourcing, no delays—just pure high-caliber design, editing, and technical execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            // Dynamically resolve the icon component
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <div
                key={service.id}
                className="group relative bg-[#111111] p-8 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:shadow-[0_4px_30px_rgba(201,168,76,0.03)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top bar accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></div>

                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#070707] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#070707] transition-all duration-300">
                    <IconComponent size={22} strokeWidth={1.5} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-tech font-bold text-[#F5F1E8] tracking-tight group-hover:text-[#E7C97B] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[#A7A39A] font-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Corner detail */}
                <div className="mt-8 flex justify-end">
                  <span className="text-[10px] font-mono text-[#A7A39A]/40 group-hover:text-[#C9A84C] transition-colors duration-200">
                    // 3M_{service.id.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-[#A7A39A]/70 text-xs font-mono">
            * All deliverables are optimized for rapid, frictionless mobile-consumption habits.
          </p>
        </div>
      </div>
    </section>
  );
}
