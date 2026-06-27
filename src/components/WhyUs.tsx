import { WHY_US_CARDS } from '../data';
import { Layers, Award, Map, HelpCircle, Heart, Zap } from 'lucide-react';

export default function WhyUs() {
  const icons = [
    <Layers key="0" className="text-[#C9A84C]" size={24} />,
    <Award key="1" className="text-[#C9A84C]" size={24} />,
    <Map key="2" className="text-[#C9A84C]" size={24} />,
    <HelpCircle key="3" className="text-[#C9A84C]" size={24} />,
    <Heart key="4" className="text-[#C9A84C]" size={24} />,
    <Zap key="5" className="text-[#C9A84C]" size={24} />
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#070707] border-t border-[#C9A84C]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              THE 3MEDIA ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-tight">
            One Partner. <br />
            More Visibility. Less Stress.
          </h2>
          <p className="text-[#A7A39A] font-light text-base max-w-xl leading-relaxed">
            We exist because business owners are too busy managing their products and storefronts to battle with modern algorithms. Here is why UAE leaders choose us.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#111111]/60 hover:bg-[#111111] p-8 border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Gold line hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300"></div>

              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#070707] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C]/5 transition-colors duration-300">
                  {icons[idx] || icons[0]}
                </div>
                <h3 className="text-lg font-tech font-bold text-[#F5F1E8] tracking-tight group-hover:text-[#E7C97B] transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-[#A7A39A] font-light text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Decorative design number */}
              <div className="mt-6 pt-4 border-t border-[#C9A84C]/5 flex justify-end">
                <span className="text-[9px] font-mono text-[#A7A39A]/20 group-hover:text-[#C9A84C]/30 transition-colors duration-300">
                  VAL // 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
