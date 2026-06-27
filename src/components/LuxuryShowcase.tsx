import perfumeImg from '../assets/images/perfume_product_1782577495139.jpg';
import { ArrowDown } from 'lucide-react';

const leftItems = [
  ['01 / CONCEPT', 'Visual Storytelling', 'We create concepts where product, atmosphere, emotion, and brand identity work together as one clear experience.'],
  ['02 / ATTENTION', 'Designed for Attention', 'Every visual is composed to stop the scroll, create curiosity, and give your audience a reason to explore.'],
];

const rightItems = [
  ['03 / POSITION', 'Premium Positioning', 'High-quality visual direction helps a product feel more desirable, distinctive, and worth choosing.'],
  ['04 / REVENUE', 'Built to Convert', 'Beautiful design still needs a purpose: stronger trust, clearer offers, and a more confident customer decision.'],
];

function Callout({ item }: { item: string[] }) {
  return (
    <div className="space-y-3">
      <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#C9A84C]">{item[0]}</span>
      <h3 className="font-tech text-lg font-bold tracking-tight text-[#070707]">{item[1]}</h3>
      <p className="text-sm font-light leading-relaxed text-[#55524C]">{item[2]}</p>
    </div>
  );
}

export default function LuxuryShowcase() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-[#F1F1F3] px-6 py-24 text-[#070707] md:px-12 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center md:mb-24">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">LUXURY BRAND DIRECTION</span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-[#070707] sm:text-4xl md:text-5xl">
            Creative That Gives a <br />Brand Its Own World.
          </h2>
          <p className="text-sm font-light leading-relaxed text-[#55524C] sm:text-base">
            For premium products, visual storytelling should feel like more than an advertisement. It should create a world customers want to step into, remember, and share.
          </p>
        </div>

        <div className="relative z-10 grid min-h-[500px] grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="order-2 flex flex-col justify-between space-y-12 text-left lg:order-1 lg:col-span-3 lg:space-y-24">
            {leftItems.map((item) => <Callout key={item[0]} item={item} />)}
          </div>

          <div className="relative order-1 my-8 flex flex-col items-center justify-center lg:order-2 lg:col-span-6 lg:my-0">
            <div className="relative flex w-full max-w-[420px] items-center justify-center sm:max-w-[480px]">
              <img
                src={perfumeImg}
                alt="Luxury Fragrance Visual Concept"
                className="h-auto w-full select-none object-contain mix-blend-multiply"
                style={{ maxHeight: '460px' }}
              />
              <div className="pointer-events-none absolute -bottom-4 left-1/2 h-4 w-48 -translate-x-1/2 rounded-full bg-[#070707]/5 blur-xl" />
            </div>
            <span className="mt-6 text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7A39A]">Luxury Fragrance Visual Concept</span>
          </div>

          <div className="order-3 flex flex-col justify-between space-y-12 text-left lg:col-span-3 lg:space-y-24">
            {rightItems.map((item) => <Callout key={item[0]} item={item} />)}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-[#070707]/10 pt-12 md:grid-cols-3 lg:mt-28">
          <div className="space-y-2"><h4 className="font-tech text-base font-bold text-[#070707]">Product Worlds</h4><p className="text-xs font-light leading-relaxed text-[#55524C]">From product visuals to full campaign environments, we build creative concepts that feel complete.</p></div>
          <div className="space-y-2"><h4 className="font-tech text-base font-bold text-[#070707]">Premium Websites</h4><p className="text-xs font-light leading-relaxed text-[#55524C]">Luxury websites that let products, services, and stories breathe through intentional layout and movement.</p></div>
          <div className="space-y-2"><h4 className="font-tech text-base font-bold text-[#070707]">Campaign Systems</h4><p className="text-xs font-light leading-relaxed text-[#55524C]">A unified visual language across content, websites, social media, ads, and customer touchpoints.</p></div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#work" className="group flex items-center space-x-2 bg-[#070707] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] transition-colors duration-300 hover:bg-[#1a1a1a]">
            <span>Explore Luxury & Retail Work</span><ArrowDown size={14} className="transition-transform duration-250 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
