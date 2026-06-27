import perfumeImg from '../assets/images/perfume_product_1782577495139.jpg';
import { ArrowDown } from 'lucide-react';

export default function LuxuryShowcase() {
  return (
    <section
      id="showcase"
      className="relative bg-[#F4F2EA] text-[#070707] py-24 md:py-32 overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Top Header Block (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
            LUXURY BRAND DIRECTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#070707] tracking-tight">
            Creative That Gives a <br />
            Brand Its Own World.
          </h2>
          <p className="text-[#55524C] font-light text-sm sm:text-base leading-relaxed">
            For premium products, visual storytelling should feel like more than an advertisement. It should create a world customers want to step into, remember, and share.
          </p>
        </div>

        {/* Desktop 12-Column Grid / Mobile Stacked Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          
          {/* LEFT COLUMN CALLOUTS (Upper & Lower Left) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-12 lg:space-y-24 text-left order-2 lg:order-1">
            {/* Upper Left */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#C9A84C] font-semibold tracking-wider block">01 / CONCEPT</span>
              <h3 className="text-lg font-tech font-bold text-[#070707] tracking-tight">Visual Storytelling</h3>
              <p className="text-[#55524C] text-sm font-light leading-relaxed">
                We create concepts where product, atmosphere, emotion, and brand identity work together as one clear experience.
              </p>
            </div>

            {/* Lower Left */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#C9A84C] font-semibold tracking-wider block">02 / ATTENTION</span>
              <h3 className="text-lg font-tech font-bold text-[#070707] tracking-tight">Designed for Attention</h3>
              <p className="text-[#55524C] text-sm font-light leading-relaxed">
                Every visual is composed to stop the scroll, create curiosity, and give your audience a reason to explore.
              </p>
            </div>
          </div>

          {/* CENTRAL IMAGE COLUMN (Preserving transparency, containment and no overlays) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2 my-8 lg:my-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] flex items-center justify-center">
              {/* Image Container with precise styling */}
              <img
                src={perfumeImg}
                alt="Luxury Fragrance Visual Concept"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                style={{ maxHeight: '460px' }}
              />
              
              {/* Very subtle soft organic shadow below the floating island roots */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-[#070707]/5 blur-xl rounded-full"></div>
            </div>
            
            {/* Honest concept label */}
            <span className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-[0.2em] mt-6">
              Luxury Fragrance Visual Concept
            </span>
          </div>

          {/* RIGHT COLUMN CALLOUTS (Upper & Lower Right) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-12 lg:space-y-24 text-left order-3">
            {/* Upper Right */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#C9A84C] font-semibold tracking-wider block">03 / POSITION</span>
              <h3 className="text-lg font-tech font-bold text-[#070707] tracking-tight">Premium Positioning</h3>
              <p className="text-[#55524C] text-sm font-light leading-relaxed">
                High-quality visual direction helps a product feel more desirable, distinctive, and worth choosing.
              </p>
            </div>

            {/* Lower Right */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#C9A84C] font-semibold tracking-wider block">04 / REVENUE</span>
              <h3 className="text-lg font-tech font-bold text-[#070707] tracking-tight">Built to Convert</h3>
              <p className="text-[#55524C] text-sm font-light leading-relaxed">
                Beautiful design still needs a purpose: stronger trust, clearer offers, and a more confident customer decision.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom content blocks - three columns */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#070707]/10">
          <div className="space-y-2">
            <h4 className="font-tech font-bold text-base text-[#070707]">Product Worlds</h4>
            <p className="text-[#55524C] text-xs font-light leading-relaxed">
              From product visuals to full campaign environments, we build creative concepts that feel complete.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-tech font-bold text-base text-[#070707]">Premium Websites</h4>
            <p className="text-[#55524C] text-xs font-light leading-relaxed">
              Luxury websites that let products, services, and stories breathe through intentional layout and movement.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-tech font-bold text-base text-[#070707]">Campaign Systems</h4>
            <p className="text-[#55524C] text-xs font-light leading-relaxed">
              A unified visual language across content, websites, social media, ads, and customer touchpoints.
            </p>
          </div>
        </div>

        {/* Action Button Scrolling down to Portfolio */}
        <div className="mt-16 flex justify-center">
          <a
            href="#work"
            className="group px-6 py-3.5 bg-[#070707] hover:bg-[#1a1a1a] text-[#F5F1E8] text-xs font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Explore Luxury & Retail Work</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-250" />
          </a>
        </div>

      </div>
    </section>
  );
}
