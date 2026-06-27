import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, MessageCircle, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    emailAddress: '',
    industry: '',
    marketingBudget: '',
    preferredPackage: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        phoneNumber: '',
        emailAddress: '',
        industry: '',
        marketingBudget: '',
        preferredPackage: '',
        message: ''
      });
    }, 1200);
  };

  const primaryWaLink = "https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20discuss%20how%20you%20can%20help%20grow%20my%20business.";
  const floatingWaLink = "https://wa.me/971581416980?text=Hello%203Media%2C%20I%20would%20like%20to%20grow%20my%20business.";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#070707] border-t border-[#C9A84C]/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Bold Copy & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="h-[1px] w-6 bg-[#C9A84C]"></span>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E7C97B]">
                  GET STARTED
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#F5F1E8] tracking-tight leading-tight">
                Your Next Customers <br />
                Are Already Online.
              </h2>
              <p className="text-lg md:text-xl font-display italic text-[#E7C97B]/90 font-medium">
                The question is whether they find your business—or a competitor—first.
              </p>
              <p className="text-[#A7A39A] font-light text-sm sm:text-base leading-relaxed">
                Let 3Media turn your business into a professional, visible, and trusted brand that people can find, understand, and contact. Contact us directly or request a custom growth plan via our portal.
              </p>
            </div>

            {/* Direct buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={primaryWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707] font-semibold text-xs uppercase tracking-widest transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Growth With 3Media</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="mailto:info@3lawimedia.com"
                className="px-6 py-4 bg-[#111111] hover:bg-[#1a1a1a] text-[#F5F1E8] border border-[#C9A84C]/25 hover:border-[#C9A84C]/40 font-semibold text-xs uppercase tracking-widest transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Email Us</span>
              </a>
            </div>

            {/* Business Card Details */}
            <div className="pt-8 border-t border-[#C9A84C]/10 space-y-5">
              <span className="text-[10px] font-mono text-[#E7C97B] tracking-wider uppercase block">
                AGENCY COORDINATES
              </span>
              
              <div className="space-y-4 font-sans text-sm text-[#A7A39A]">
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#111111] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                    <Phone size={14} />
                  </div>
                  <a href="tel:+971581416980" className="hover:text-[#F5F1E8] transition-colors duration-200">
                    +971 58 141 6980
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#111111] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                    <Mail size={14} />
                  </div>
                  <a href="mailto:info@3lawimedia.com" className="hover:text-[#F5F1E8] transition-colors duration-200">
                    info@3lawimedia.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#111111] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                    <Globe size={14} />
                  </div>
                  <a href="https://3lawimedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F1E8] transition-colors duration-200">
                    3lawimedia.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#111111] border border-[#C9A84C]/10 text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                    <MapPin size={14} />
                  </div>
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portal Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#C9A84C]/15 p-8 md:p-10 relative">
            <span className="text-[10px] font-mono text-[#C9A84C] tracking-[0.2em] uppercase block mb-6">
              // GROWTH_PORTAL_CONNECT
            </span>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#C9A84C]/10 border border-[#C9A84C] rounded-full flex items-center justify-center mx-auto text-[#C9A84C] animate-bounce">
                  <Check size={28} />
                </div>
                <h3 className="text-xl font-tech font-bold text-[#F5F1E8]">Request Submitted</h3>
                <p className="text-sm text-[#A7A39A] max-w-md mx-auto">
                  Thank you. 3Media will contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono uppercase text-[#C9A84C] hover:text-[#E7C97B] underline underline-offset-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="businessName">
                      Business Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                      className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="phoneNumber">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +971 58 123 4567"
                      className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="emailAddress">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="yourname@company.com"
                      className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="industry">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                    >
                      <option value="">Select Industry</option>
                      <option value="Gyms & Fitness">Gyms & Fitness</option>
                      <option value="Restaurants & Food">Restaurants & Food</option>
                      <option value="Clinics & Wellness">Clinics & Wellness</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Business Setup">Business Setup</option>
                      <option value="E-Commerce">E-Commerce & Retail</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Other">Other Category</option>
                    </select>
                  </div>

                  {/* Monthly Marketing Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="marketingBudget">
                      Monthly Budget Range
                    </label>
                    <select
                      id="marketingBudget"
                      name="marketingBudget"
                      value={formData.marketingBudget}
                      onChange={handleInputChange}
                      className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                    >
                      <option value="">Select Budget</option>
                      <option value="Under AED 1,000">Under AED 1,000 / mo</option>
                      <option value="AED 1,000 - AED 2,500">AED 1,000 - AED 2,500 / mo</option>
                      <option value="AED 2,500 - AED 5,000">AED 2,500 - AED 5,000 / mo</option>
                      <option value="Over AED 5,000">Over AED 5,000 / mo</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Package */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="preferredPackage">
                    Preferred Growth Package
                  </label>
                  <select
                    id="preferredPackage"
                    name="preferredPackage"
                    value={formData.preferredPackage}
                    onChange={handleInputChange}
                    className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors"
                  >
                    <option value="">Select Package</option>
                    <option value="The Foundation (AED 799)">Starter: The Foundation (AED 799 / mo)</option>
                    <option value="The Momentum Machine (AED 1,499)">Growth: The Momentum Machine (AED 1,499 / mo)</option>
                    <option value="The Full Takeover (AED 2,499)">Premium: The Full Takeover (AED 2,499 / mo)</option>
                    <option value="Custom Plan">Custom Tailored Blueprint</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#A7A39A]" htmlFor="message">
                    Message / Growth Objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your business, what digital assets you need, and your immediate objectives."
                    className="w-full bg-[#070707] border border-[#C9A84C]/15 focus:border-[#C9A84C]/80 px-4 py-3 text-sm text-[#F5F1E8] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C9A84C] hover:bg-[#E7C97B] text-[#070707] font-bold text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Requesting Blueprint...' : 'Request a Growth Plan'}</span>
                  {!isSubmitting && <ArrowRight size={14} />}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* FIXED FLOATING WHATSAPP BUTTON (Lower right of page) */}
      <a
        href={floatingWaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 group"
        aria-label="Contact 3Media on WhatsApp"
        id="floating-whatsapp"
      >
        <MessageCircle size={30} className="stroke-[1.5]" />
        
        {/* Floating tooltip text */}
        <span className="absolute right-16 bg-[#111111] border border-[#C9A84C]/25 text-[#F5F1E8] text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Chat with 3Media
        </span>
      </a>
    </section>
  );
}
