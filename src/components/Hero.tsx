import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  const ctaLink = "https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20grow%20my%20business.";

  const heroTags = [
    "Social Media Management",
    "Reels & TikTok Editing",
    "Website Design",
    "Content Creation",
    "Growth Strategy"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#070707] overflow-hidden pt-24 pb-16"
    >
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        {/* Deep radial ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.07)_0%,transparent_70%)]"></div>
        {/* Subtle grid layer */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C9A84C_1px,transparent_1px),linear-gradient(to_bottom,#C9A84C_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Moving slow kinetic amber light blobs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#E7C97B]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Background visual collage: elegant dark representations */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[45%] h-[80%] opacity-15 lg:opacity-25 pointer-events-none mix-blend-screen select-none px-6">
          <div className="relative w-full h-full border border-[#C9A84C]/10 rounded-lg overflow-hidden bg-gradient-to-br from-[#111111] to-[#070707] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#C9A84C]/10 pb-3">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/30"></span>
              </div>
              <span className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-[0.15em]">3Media_Studio_Console</span>
            </div>
            
            {/* Visual indicator lines and boxes resembling website builders, short form video editing, and campaign analytics */}
            <div className="flex-1 my-6 flex flex-col justify-center space-y-4">
              <div className="h-6 w-3/4 bg-[#C9A84C]/15 rounded animate-pulse"></div>
              <div className="h-32 w-full bg-[#111111] border border-[#C9A84C]/10 rounded p-3 flex justify-between items-center">
                <div className="space-y-2 w-1/2">
                  <div className="h-4 w-5/6 bg-[#A7A39A]/20 rounded"></div>
                  <div className="h-3 w-2/3 bg-[#A7A39A]/15 rounded"></div>
                  <div className="h-3 w-3/4 bg-[#A7A39A]/15 rounded"></div>
                </div>
                <div className="w-1/3 h-full bg-[#C9A84C]/5 rounded border border-dashed border-[#C9A84C]/20 flex items-center justify-center">
                  <Play size={20} className="text-[#C9A84C] animate-bounce" />
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="h-12 w-1/2 bg-[#111111] border border-[#C9A84C]/10 rounded p-2 flex items-center justify-between">
                  <div className="h-2 w-1/2 bg-[#A7A39A]/20 rounded"></div>
                  <span className="text-[10px] font-mono text-[#E7C97B]">89% CTR</span>
                </div>
                <div className="h-12 w-1/2 bg-[#111111] border border-[#C9A84C]/10 rounded p-2 flex items-center justify-between">
                  <div className="h-2 w-1/2 bg-[#A7A39A]/20 rounded"></div>
                  <span className="text-[10px] font-mono text-green-500/80">+240% Calls</span>
                </div>
              </div>
            </div>

            <div className="text-[9px] font-mono text-[#A7A39A]/60 flex justify-between">
              <span>CAMERA: ACTIVE</span>
              <span>RENDER: OK</span>
              <span>DUBAI, UAE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center">
        <div className="max-w-3xl text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="h-[1px] w-8 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              DUBAI CREATIVE GROWTH AGENCY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-[#F5F1E8] tracking-tight leading-[0.95] mb-8">
            Your Business <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F5F1E8] via-[#E7C97B] to-[#C9A84C]">
              Deserves
            </span>{" "}
            to <br />
            Be Seen.
          </h1>

          {/* Supporting Headline / Paragraph */}
          <p className="text-lg sm:text-xl font-sans text-[#A7A39A] leading-relaxed mb-4 font-light">
            3Media builds the digital presence that turns attention into trust, inquiries, and growth.
          </p>

          <p className="text-sm sm:text-base font-sans text-[#A7A39A]/85 max-w-2xl leading-relaxed mb-8 font-light">
            From cinematic Reels and social-media management to premium websites, branding, and lead-generation systems, we handle the digital work so you can focus on running your business.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a
              id="hero-primary-cta"
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707] font-semibold text-sm uppercase tracking-wider transition-colors duration-300 flex items-center justify-center space-x-2 border border-[#C9A84C]/30"
            >
              <span>Start Your Growth</span>
              <ArrowRight size={16} />
            </a>

            <a
              id="hero-secondary-cta"
              href="#work"
              className="px-8 py-4 bg-[#111111] hover:bg-[#1c1c1c] text-[#F5F1E8] font-semibold text-sm uppercase tracking-wider transition-colors duration-300 flex items-center justify-center space-x-2 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30"
            >
              <span>Explore Our Work</span>
            </a>
          </div>

          {/* Premium tag pills */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {heroTags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1 bg-[#111111] border border-[#C9A84C]/10 text-xs text-[#A7A39A] rounded-none hover:text-[#F5F1E8] hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                <span className="w-1 h-1 rounded-full bg-[#C9A84C] mr-2"></span>
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Trust Line */}
          <div className="pt-6 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-[#A7A39A]/60 font-mono text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-ping"></span>
              <span className="font-semibold text-[#A7A39A]/80">Dubai, UAE</span>
            </div>
            <span>·</span>
            <span>Built for ambitious local businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
