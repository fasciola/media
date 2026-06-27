import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const portfolioProjects = PORTFOLIO_PROJECTS.map((project) =>
  project.id === 'p8'
    ? {
        ...project,
        category: 'Marketing Agency · Digital Growth',
        filterCategory: 'Marketing Agency',
        description:
          'A modern marketing-agency website designed to present digital strategy, creative services, campaign thinking, and a clear path for new client inquiries.',
        imageUrl:
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
      }
    : project,
);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filters = [
    'All Work',
    'Business Setup',
    'Food & Hospitality',
    'E-Commerce',
    'Automotive',
    'Real Estate',
    'Marketing Agency',
    'Luxury Retail',
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeFilter === 'All Work') return true;

    if (activeFilter === 'Business Setup' && project.title === 'Cloud Kitchen Setup') {
      return true;
    }

    return project.filterCategory === activeFilter;
  });

  const ctaLink =
    'https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20discuss%20a%20website%20or%20digital%20growth%20project.';

  return (
    <section id="work" className="relative overflow-hidden border-t border-[#C9A84C]/5 bg-[#070707] py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 max-w-3xl space-y-4 md:mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">SELECTED WORK</span>
          </div>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-[#F5F1E8] sm:text-4xl md:text-5xl">
            Digital Experiences <br />Built to Stand Out.
          </h2>
          <p className="max-w-xl text-base font-light leading-relaxed text-[#A7A39A]">
            From lead-generation websites to premium brand experiences, 3Media creates digital work designed to make businesses look credible, distinctive, and easy to contact.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-2 border-b border-[#C9A84C]/10 pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer rounded-none border px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeFilter === filter
                  ? 'border-[#C9A84C] bg-[#C9A84C] font-semibold text-[#070707] shadow-[0_2px_10px_rgba(201,168,76,0.15)]'
                  : 'border-[#C9A84C]/15 bg-transparent text-[#A7A39A] hover:border-[#C9A84C]/40 hover:text-[#F5F1E8]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between overflow-hidden border border-[#C9A84C]/10 bg-[#111111] transition-all duration-500 hover:border-[#C9A84C]/40 hover:shadow-[0_8px_30px_rgba(201,168,76,0.05)] ${
                project.isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#C9A84C]/10 bg-black/50">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-[#C9A84C]/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </div>

                <div className="space-y-4 p-6 md:p-8">
                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#C9A84C]">{project.category}</span>
                    <h3 className="font-tech text-xl font-bold tracking-tight text-[#F5F1E8] transition-colors duration-300 group-hover:text-[#E7C97B] sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-[#A7A39A]">{project.description}</p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between p-6 pt-0 md:p-8 md:pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C9A84C] transition-colors duration-200 hover:text-[#E7C97B]"
                >
                  <span>Visit Website</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="text-[9px] font-mono text-[#A7A39A]/30 transition-colors duration-300 group-hover:text-[#C9A84C]/40">// LIVE_PROJECT</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="border border-[#C9A84C]/10 bg-[#111111]/30 py-16 text-center">
            <p className="font-mono text-sm text-[#A7A39A]">No items match this category filter.</p>
          </div>
        )}

        <div className="relative mt-20 overflow-hidden border border-[#C9A84C]/10 bg-[#111111]/80 p-8 md:mt-24 md:p-12">
          <div className="pointer-events-none absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#C9A84C]/5 blur-2xl" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <h3 className="font-display text-2xl font-medium tracking-tight text-[#F5F1E8] sm:text-3xl">
              Your Business Could Be the <br />Next Project We Build.
            </h3>
            <p className="text-sm font-light leading-relaxed text-[#A7A39A] sm:text-base">
              Whether you need a better website, stronger brand identity, consistent social-media content, or a complete digital-growth system, 3Media can build a solution around your business.
            </p>
            <div className="pt-2">
              <a
                id="portfolio-cta-btn"
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#C9A84C] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#070707] transition-colors duration-300 hover:bg-[#E7C97B]"
              >
                <span>Start Your Project</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
