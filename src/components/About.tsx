import { ABOUT_CARDS } from '../data';
import { ShieldCheck, Smartphone, Users, TrendingUp } from 'lucide-react';

export default function About() {
  // Map icons to the card indices
  const icons = [
    <ShieldCheck key="0" className="text-[#C9A84C]" size={28} />,
    <Smartphone key="1" className="text-[#C9A84C]" size={28} />,
    <Users key="2" className="text-[#C9A84C]" size={28} />,
    <TrendingUp key="3" className="text-[#C9A84C]" size={28} />
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#070707] border-t border-[#C9A84C]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Layout with visual split: text on left, grids on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Headline and Copy column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
                MORE THAN CONTENT
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-[1.1]">
              A Complete <br />
              Digital System for <br />
              Ready-to-Grow Brands.
            </h2>
            
            <div className="h-[1px] bg-gradient-to-r from-[#C9A84C]/25 to-transparent w-full my-6"></div>
            
            <p className="text-[#A7A39A] font-light leading-relaxed text-base sm:text-lg">
              3Media helps businesses become visible, credible, and easy to contact online. We do not simply post content. 
            </p>
            
            <p className="text-[#A7A39A]/80 font-light leading-relaxed text-sm sm:text-base">
              We connect strategy, video production, identity design, ultra-fast websites, and custom customer inquiry channels into a single, cohesive, client-converting digital engine engineered around your specific workflow.
            </p>

            <div className="pt-6">
              <div className="bg-[#111111]/40 border border-[#C9A84C]/10 p-5 rounded-none">
                <span className="text-[10px] font-mono text-[#C9A84C] tracking-widest uppercase block mb-1">THE 3MEDIA STANDARD</span>
                <p className="text-[#F5F1E8] text-sm font-medium">No empty metrics, fake statistics, or algorithm larping. Real leads, professional styling, and high conversion.</p>
              </div>
            </div>
          </div>
          
          {/* Card Grids Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-[#111111] hover:bg-[#151515] p-8 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow outline accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></div>
                
                <div className="space-y-4">
                  <div className="p-3 bg-[#070707] inline-block border border-[#C9A84C]/10 group-hover:border-[#C9A84C]/35 transition-colors duration-300">
                    {icons[idx]}
                  </div>
                  <h3 className="text-lg font-tech font-semibold text-[#F5F1E8] tracking-tight group-hover:text-[#E7C97B] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-[#A7A39A] font-light text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
