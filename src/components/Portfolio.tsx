import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filters = [
    'All Work',
    'Business Setup',
    'Food & Hospitality',
    'E-Commerce',
    'Automotive',
    'Real Estate',
    'Healthcare',
    'Luxury Retail'
  ];

  // Intelligent filter matching logic
  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (activeFilter === 'All Work') return true;
    
    // Cloud Kitchen Setup matches both Food & Hospitality and Business Setup
    if (activeFilter === 'Business Setup' && project.title === 'Cloud Kitchen Setup') {
      return true;
    }
    
    return project.filterCategory === activeFilter;
  });

  const ctaLink = "https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20discuss%20a%20website%20or%20digital%20growth%20project.";

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#070707] border-t border-[#C9A84C]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
              SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-tight">
            Digital Experiences <br />
            Built to Stand Out.
          </h2>
          <p className="text-[#A7A39A] font-light text-base leading-relaxed max-w-xl">
            From lead-generation websites to premium brand experiences, 3Media creates digital work designed to make businesses look credible, distinctive, and easy to contact.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#C9A84C]/10 pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-200 border rounded-none uppercase cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#C9A84C] text-[#070707] border-[#C9A84C] font-semibold shadow-[0_2px_10px_rgba(201,168,76,0.15)]'
                  : 'bg-transparent text-[#A7A39A] border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:text-[#F5F1E8]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between bg-[#111111] border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 hover:shadow-[0_8px_30px_rgba(201,168,76,0.05)] transition-all duration-500 overflow-hidden ${
                project.isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Image Frame with zoom effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50 border-b border-[#C9A84C]/10">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  {/* Subtle decorative gold light sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C9A84C]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content Block */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-tech font-bold text-[#F5F1E8] tracking-tight group-hover:text-[#E7C97B] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#A7A39A] font-light text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action row at bottom */}
              <div className="p-6 md:p-8 pt-0 flex justify-between items-center mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C9A84C] hover:text-[#E7C97B] transition-colors duration-200"
                >
                  <span>Visit Website</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
                <span className="text-[9px] font-mono text-[#A7A39A]/30 group-hover:text-[#C9A84C]/40 transition-colors duration-300">
                  // LIVE_PROJECT
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no items match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-[#C9A84C]/10 bg-[#111111]/30">
            <p className="text-[#A7A39A] font-mono text-sm">No items match this category filter.</p>
          </div>
        )}

        {/* Bottom Portfolio CTA */}
        <div className="mt-20 md:mt-24 bg-[#111111]/80 border border-[#C9A84C]/10 p-8 md:p-12 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-[#C9A84C]/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="max-w-3xl relative z-10 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F1E8] tracking-tight">
              Your Business Could Be the <br />
              Next Project We Build.
            </h3>
            <p className="text-[#A7A39A] font-light text-sm sm:text-base leading-relaxed">
              Whether you need a better website, stronger brand identity, consistent social-media content, or a complete digital-growth system, 3Media can build a solution around your business.
            </p>
            <div className="pt-2">
              <a
                id="portfolio-cta-btn"
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707] font-semibold text-xs uppercase tracking-widest transition-colors duration-300"
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
