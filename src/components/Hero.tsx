import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/images/contact.mp4';

export default function Hero() {
  const ctaLink = 'https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20grow%20my%20business.';

  const heroTags = [
    'Social Media Management',
    'Reels & TikTok Editing',
    'Website Design',
    'Content Creation',
    'Growth Strategy',
  ];

  return (
    <section
      id="home"
      className="relative isolate h-[100svh] min-h-[680px] overflow-hidden bg-[#070707] text-[#F5F1E8]"
    >
      {/* Local cinematic video background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#070707]">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Readability layers */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.95)_0%,rgba(7,7,7,0.82)_34%,rgba(7,7,7,0.48)_59%,rgba(7,7,7,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.42)_0%,transparent_32%,rgba(7,7,7,0.60)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(201,168,76,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,168,76,0.35)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Full-height inner stage: mirrors the viewport-fitting approach used in the earbuds hero */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
        <div className="grid h-full items-center pb-10 pt-28 sm:pb-12 lg:pb-14 lg:pt-24">
          <div className="max-w-3xl text-left">
            <div className="mb-5 inline-flex items-center space-x-2 lg:mb-6">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
                Dubai Creative Growth Agency
              </span>
            </div>

            <h1 className="mb-6 font-display text-[clamp(3.1rem,6.3vw,6.7rem)] font-light leading-[0.87] tracking-tight text-[#F5F1E8] lg:mb-7">
              Your Business <br />
              <span className="bg-gradient-to-r from-[#F5F1E8] via-[#E7C97B] to-[#C9A84C] bg-clip-text font-normal italic text-transparent">
                Deserves
              </span>{' '}
              to <br />
              Be Seen.
            </h1>

            <p className="mb-3 max-w-3xl text-base font-light leading-relaxed text-[#F5F1E8]/84 sm:text-lg lg:mb-4 lg:text-xl">
              3Media builds the digital presence that turns attention into trust, inquiries, and growth.
            </p>

            <p className="mb-6 max-w-2xl text-sm font-light leading-relaxed text-[#F5F1E8]/67 sm:text-base lg:mb-7">
              From cinematic Reels and social-media management to premium websites, branding, and lead-generation systems, we handle the digital work so you can focus on running your business.
            </p>

            <div className="mb-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mb-8">
              <a
                id="hero-primary-cta"
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border border-[#C9A84C]/30 bg-[#C9A84C] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#070707] transition-colors duration-300 hover:bg-[#E7C97B]"
              >
                <span>Start Your Growth</span>
                <ArrowRight size={16} />
              </a>

              <a
                id="hero-secondary-cta"
                href="#work"
                className="flex items-center justify-center space-x-2 border border-white/20 bg-black/25 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] backdrop-blur-sm transition-colors duration-300 hover:border-[#C9A84C]/60 hover:bg-black/45"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            <div className="mb-6 flex flex-wrap gap-2 lg:mb-7">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center border border-white/15 bg-black/25 px-3 py-1 text-xs text-[#F5F1E8]/74 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A84C]/50 hover:text-[#F5F1E8]"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-[#C9A84C]" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-start space-y-2 border-t border-white/15 pt-5 font-mono text-xs text-[#F5F1E8]/52 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-[#C9A84C] shadow-[0_0_16px_rgba(201,168,76,0.85)]" />
                <span className="font-semibold text-[#F5F1E8]/78">Dubai, UAE</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <span>Built for ambitious local businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
