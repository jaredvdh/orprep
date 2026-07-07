import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import FeaturesSection from '@/app/components/FeaturesSection';
import HowItWorksSection from '@/app/components/HowItWorksSection';
import ScreenshotsSection from '@/app/components/ScreenshotsSection';
import TrustStrip from '@/app/components/TrustStrip';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 pb-6">
          <FeaturesSection />
          <HowItWorksSection />
          <ScreenshotsSection />
          <TrustStrip />
        </div>
      </main>
      <Footer />
    </>
  );
}