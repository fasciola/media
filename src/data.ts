import { Service, Industry, Package, PortfolioProject, ProcessStep, AboutCard, WhyUsCard } from './types';

export const ABOUT_CARDS: AboutCard[] = [
  {
    title: "Built for Local Businesses",
    description: "We focus on visibility, trust, clear offers, and direct customer inquiries that drive local revenue."
  },
  {
    title: "Designed for Mobile Audiences",
    description: "Your customers discover businesses on Instagram, TikTok, Google, and WhatsApp. Our systems target these real habits."
  },
  {
    title: "One Connected Partner",
    description: "Work with one integrated growth team rather than coordinating separate editors, designers, developers, and writers."
  },
  {
    title: "Built to Convert Attention",
    description: "Every visual asset, video loop, caption, and landing page is designed to guide potential customers to their next active step."
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Social Media Management",
    description: "Manage Instagram, Facebook, and TikTok with curated content, strategic captions, targeted hashtags, engagement, and consistent monthly reporting.",
    iconName: "Instagram"
  },
  {
    id: "s2",
    title: "Reels & TikTok Editing",
    description: "Transform raw footage into high-retention, platform-ready short-form videos with precise pacing, kinetic captions, sound design, and custom brand assets.",
    iconName: "Video"
  },
  {
    id: "s3",
    title: "Content Creation",
    description: "Establish monthly content calendars, education threads, interactive stories, unique promotions, seasonal campaigns, and narrative brand storytelling.",
    iconName: "CalendarRange"
  },
  {
    id: "s4",
    title: "Graphic & Infographic Design",
    description: "Design bespoke graphics for social platforms, digital promotions, menus, luxury lookbooks, event announcements, and seasonal catalogs.",
    iconName: "Palette"
  },
  {
    id: "s5",
    title: "Website Design",
    description: "Build ultra-fast, premium, mobile-first websites engineered to build immediate credibility, capture leads, and funnel traffic directly to WhatsApp.",
    iconName: "Monitor"
  },
  {
    id: "s6",
    title: "Branding & Visual Identity",
    description: "Refine logos, bespoke color palettes, sophisticated typography systems, template bundles, and consistent brand-guideline documentation.",
    iconName: "Sparkles"
  },
  {
    id: "s7",
    title: "DM & Community Engagement",
    description: "Engage with incoming comments and direct messages to qualify sales inquiries, solve customer queries, and accelerate lead routing.",
    iconName: "MessageSquare"
  },
  {
    id: "s8",
    title: "Paid-Ad Creative Production",
    description: "Create performance-driven visual ads, graphic banners, high-converting video creatives, and optimized landing-page content for social campaigns.",
    iconName: "Target"
  },
  {
    id: "s9",
    title: "Growth Strategy",
    description: "Outline campaign roadmaps, precise audience positioning, optimal platform mixes, calendar targets, and scalable customer acquisition funnels.",
    iconName: "TrendingUp"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "i1",
    title: "Gyms & Fitness",
    description: "Trainer highlights, aesthetic movement reels, transformations, seasonal promotions, and membership pipeline builders.",
    iconName: "Dumbbell"
  },
  {
    id: "i2",
    title: "Restaurants & Food Brands",
    description: "Sensory food cinematography, menu spotlights, virtual kitchen launch content, and visual storytelling that drives reservations.",
    iconName: "Utensils"
  },
  {
    id: "i3",
    title: "Clinics, Beauty & Wellness",
    description: "Trust-focused professional branding, treatment explanations, visual results, and friction-free appointment inquiries.",
    iconName: "Heart"
  },
  {
    id: "i4",
    title: "Real Estate & Property",
    description: "Cinematic property tours, agent authority branding, custom listings, landing assets, and automated WhatsApp lead funnels.",
    iconName: "Building2"
  },
  {
    id: "i5",
    title: "Business Setup & Services",
    description: "Authority-driven educational guides, clear landing pages, step-by-step conversion graphics, and trust-oriented messaging.",
    iconName: "Briefcase"
  },
  {
    id: "i6",
    title: "Retail & E-Commerce",
    description: "Interactive product showcases, high-impact promotion assets, conversion-centric UI, and modern product presentation.",
    iconName: "ShoppingBag"
  },
  {
    id: "i7",
    title: "Automotive",
    description: "Sleek vehicle styling reels, workshop facility walk-throughs, custom detailing showcases, and lead capture systems.",
    iconName: "Car"
  },
  {
    id: "i8",
    title: "Startups & Personal Brands",
    description: "Identity creation, complete digital launchpads, foundation content sets, and first-wave lead campaigns.",
    iconName: "Zap"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us Your Goal",
    description: "Share details about your business model, target audience, primary services, and immediate conversion priorities."
  },
  {
    number: "02",
    title: "We Build the Direction",
    description: "We engineer a personalized growth playbook covering high-converting content formats, UI/UX structure, and user pathways."
  },
  {
    number: "03",
    title: "You Send Content",
    description: "Deliver raw video clips, active photos, offers, or event updates straight to our production team via a streamlined WhatsApp thread."
  },
  {
    number: "04",
    title: "We Create & Publish",
    description: "Our studio handles full video editing, copy, graphic layout, scheduling, and strategic cross-platform publishing."
  },
  {
    number: "05",
    title: "Your Business Grows",
    description: "Watch your digital presence command authority, capture localized attention, build deep consumer trust, and generate direct inquiries."
  }
];

export const WHY_US_CARDS: WhyUsCard[] = [
  {
    title: "Full Creative Support",
    description: "A single, tightly coordinated team managing video, design, copy, websites, branding, and strategic growth campaigns."
  },
  {
    title: "Premium Visual Quality",
    description: "Engineered to translate your real-world expertise and luxury quality into an equivalent high-converting digital aesthetic."
  },
  {
    title: "Built for Dubai",
    description: "Tailored strategies designed for UAE demographics, local consumer dynamics, and instantaneous WhatsApp communication workflows."
  },
  {
    title: "Clear Communication",
    description: "Frictionless direct-to-producer chat without unnecessary status meetings, endless email chains, or project management software delays."
  },
  {
    title: "Consistent Brand Presence",
    description: "Ensures your business shows up consistently with professional, highly recognizable, and elegant brand visuals every single week."
  },
  {
    title: "Focused on Customer Action",
    description: "We don't focus on empty view metrics. We design the entire pipeline around direct inquiries, consultations, bookings, and customer trust."
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "p1",
    title: "Cloud Kitchen Setup",
    category: "Food Business · Cloud Kitchen · Lead Generation",
    filterCategory: "Food & Hospitality",
    description: "A professional, conversion-engineered digital platform designed for culinary entrepreneurs looking to deploy cloud-kitchen models in Dubai.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    link: "https://cloudkitchensetup.com/",
    isFeatured: true
  },
  {
    id: "p2",
    title: "E-Commerce Experience",
    category: "E-Commerce · Retail · Conversion Design",
    filterCategory: "E-Commerce",
    description: "A state-of-the-art retail prototype focused on luxurious product presentation, responsive touch navigation, and optimized consumer checkout flows.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    link: "https://ecom.faisalmousa86.workers.dev/",
    isFeatured: true
  },
  {
    id: "p3",
    title: "Lumière Noire",
    category: "Retail · Lifestyle · Elegance",
    filterCategory: "Luxury Retail",
    description: "A refined lifestyle and fragrance digital concept built around high-fashion aesthetic layouts and immersive brand world building.",
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    link: "https://boisterous-sable-18bb0c.netlify.app/"
  },
  {
    id: "p4",
    title: "Noir Atlas",
    category: "Brand Concept · Creative Direction",
    filterCategory: "Luxury Retail",
    description: "A dark cinematic concept utilizing extreme depth, luxury editorial typography, and high-contrast digital layouts to captivate modern viewers.",
    imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=800&auto=format&fit=crop",
    link: "https://moonlit-maamoul-cfcdd5.netlify.app/"
  },
  {
    id: "p5",
    title: "Aurum Automotive",
    category: "Automotive · Premium Services",
    filterCategory: "Automotive",
    description: "A polished automotive landing page designed to market exotic detailing and mechanical services to luxury vehicle owners in the region.",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    link: "https://car-care-hub.netlify.app/"
  },
  {
    id: "p6",
    title: "Elite Estates",
    category: "Real Estate · Property",
    filterCategory: "Real Estate",
    description: "A premium real estate portal presenting ultra-luxury properties in Dubai with clean layout hierarchies and prompt customer lead routing.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    link: "https://deft-sundae-510258.netlify.app/"
  },
  {
    id: "p7",
    title: "Aurum Gems",
    category: "Luxury Retail · Jewellery",
    filterCategory: "Luxury Retail",
    description: "An elegant, high-end fine jewelry experience designed to showcase custom gemstones with extreme visual fidelity and classic typography.",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    link: "https://papaya-vacherin-fee6b2.netlify.app/"
  },
  {
    id: "p8",
    title: "Asim Vision",
    category: "Healthcare · Technology",
    filterCategory: "Healthcare",
    description: "A highly trusted clinical website showcasing medical technologies and vision services in a clean, user-friendly interface.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    link: "https://asemvision.com/"
  },
  {
    id: "p9",
    title: "Royal Dan Perfumes",
    category: "Luxury Retail · Fragrance",
    filterCategory: "Luxury Retail",
    description: "An evocative website built for an Arabian fragrance line, emphasizing olfactory heritage, premium gold materials, and rich heritage design.",
    imageUrl: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
    link: "https://royaldanperfumes.com/"
  }
];

export const PACKAGES: Package[] = [
  {
    id: "pkg1",
    label: "STARTER",
    name: "The Foundation",
    price: "AED 799",
    bestFor: "Businesses starting their online presence and needing a credible digital foundation.",
    includes: [
      "Social-media account setup & optimization",
      "Instagram, Facebook, and TikTok management",
      "12 custom posts per month",
      "2 edited Reels or TikToks per month",
      "Captions & strategic hashtag sets",
      "Monthly content calendar",
      "4 custom branded graphics",
      "Weekly Stories templates",
      "Monthly performance report",
      "Frictionless WhatsApp coordination",
      "Basic professional website option"
    ],
    buttonText: "Choose Starter",
    whatsappText: "Hello 3Media, I am interested in the Starter Package at AED 799 per month."
  },
  {
    id: "pkg2",
    label: "GROWTH",
    name: "The Momentum Machine",
    price: "AED 1,499",
    bestFor: "Businesses serious about consistent visibility, credibility, customer inquiries, and sustainable growth.",
    includes: [
      "Instagram, Facebook, and TikTok management",
      "24 custom posts per month",
      "4 premium Reels or TikToks per month",
      "Daily Stories & interactive features",
      "8 branded graphics or promo designs",
      "Captions, hashtags, & full scheduling",
      "DM & comment engagement support",
      "Monthly 1-on-1 strategy call",
      "Seasonal campaign & launch planning",
      "Lead-focused organic content",
      "Conversion website with inquiry form",
      "Targeted audience growth playbook",
      "Monthly comprehensive performance report"
    ],
    buttonText: "Choose Growth",
    whatsappText: "Hello 3Media, I am interested in the Growth Package at AED 1499 per month.",
    isPopular: true
  },
  {
    id: "pkg3",
    label: "PREMIUM",
    name: "The Full Takeover",
    price: "AED 2,499",
    bestFor: "Ambitious businesses that need a complete, proactive creative and digital-growth partner.",
    includes: [
      "Instagram, Facebook, and TikTok management",
      "36 custom posts per month",
      "8 premium Reels or TikToks per month",
      "Daily Stories & Highlights strategy",
      "12 custom premium graphics",
      "Full paid-ad creative production",
      "YouTube Shorts content repurposing",
      "Weekly analytics & strategy reviews",
      "Bespoke website design & conversion optimization",
      "Continuous brand refinement & styling",
      "Priority edit turnaround (<48h)",
      "Influencer & local collaboration outlines",
      "Quarterly campaign & content-shoot planning"
    ],
    buttonText: "Choose Premium",
    whatsappText: "Hello 3Media, I am interested in the Premium Package at AED 2499 per month."
  }
];
