/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import LuxuryShowcase from './components/LuxuryShowcase';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-[#070707] text-[#F5F1E8] antialiased selection:bg-[#C9A84C]/35 selection:text-[#F5F1E8]">
      {/* Premium Sticky Transparent Navbar */}
      <Navbar />

      {/* Main Agency Experience Sections */}
      <main className="relative overflow-x-hidden">
        
        {/* Full-screen Cinematic Hero */}
        <Hero />

        {/* Strategic About Section */}
        <About />

        {/* 9 Core Agency Services Grid */}
        <Services />

        {/* Target Industries and Deliverables */}
        <Industries />

        {/* Signature Editorial Luxury Perfume Showcase (Light Ivory Contrast) */}
        <LuxuryShowcase />

        {/* Live Client Portfolio Grid with Real Case Studies & Category Tabs */}
        <Portfolio />

        {/* Transparent Package Tiers & Pricing Plans */}
        <Packages />

        {/* 5-Step Frictionless Production Timeline */}
        <Process />

        {/* Why 3Media Partner Values Grid */}
        <WhyUs />

        {/* Interactive Budgets Form & Location Coordinates */}
        <Contact />
        
      </main>

      {/* Footer Branding & Social Anchors */}
      <Footer />
    </div>
  );
}
