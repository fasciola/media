import { PROCESS_STEPS } from '../data';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#111111]/10 border-t border-[#C9A84C]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-tight">
            Simple for You. <br />
            Powerful for Your Business.
          </h2>
          <p className="text-[#A7A39A] font-light text-base leading-relaxed max-w-xl">
            We simplify agency collaboration down to simple inputs and massive creative output. We manage the heavy lifting so you run the physical storefront.
          </p>
        </div>

        {/* Process Roadmap List */}
        <div className="relative border-l border-[#C9A84C]/10 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12 md:space-y-16 max-w-4xl">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative group">
              
              {/* Timeline bubble locator */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 md:w-10 md:h-10 bg-[#070707] border-2 border-[#C9A84C]/20 text-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-[#E7C97B] rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300">
                {step.number}
              </div>

              {/* Step content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-tech font-bold text-[#F5F1E8] tracking-tight group-hover:text-[#E7C97B] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[#A7A39A] font-light text-sm md:text-base leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              {/* Subtle underline hover effect */}
              <div className="h-[1px] w-0 bg-gradient-to-r from-[#C9A84C]/20 to-transparent group-hover:w-full transition-all duration-500 mt-6"></div>
            </div>
          ))}
        </div>

        {/* Big Highlight Conviction Statement */}
        <div className="mt-20 md:mt-28 bg-gradient-to-r from-[#111111] to-[#070707] border border-[#C9A84C]/10 p-8 md:p-10 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-mono text-[#C9A84C] tracking-[0.2em] uppercase block mb-3">
            YOUR PEACE OF MIND
          </span>
          <p className="text-xl md:text-2xl font-display text-[#F5F1E8] italic tracking-tight leading-relaxed max-w-2xl mx-auto">
            &ldquo;You do not need to learn editing, design, captions, websites, social media, or algorithms. We handle it.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
