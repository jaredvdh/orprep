import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden" aria-label="Hero">
      {/* Full-bleed background image */}
      <AppImage
        src="/assets/images/IMG_7551-1783469744684.jpeg"
        alt="Real operating room with anaesthesia machine and monitoring equipment"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw" />
      
      {/* Teal/dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/60 to-teal-900/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/60 via-teal-900/20 to-transparent" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-10 h-full min-h-[92vh] flex flex-col justify-between px-4 sm:px-8 md:px-12 pt-32 pb-10 md:pb-14 max-w-6xl mx-auto">

        {/* Top label */}
        <div className="flex items-center gap-2">
          <span className="label-mono text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
            iOS App · Free Download
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">

          {/* Headline + CTA */}
          <div className="max-w-2xl space-y-6">
            {/* App logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/ORPrep_logo-1783469059204.png"
                alt="ORPrep app logo — operating theatre scene with teal tones"
                width={56}
                height={56}
                className="rounded-2xl shadow-lg flex-shrink-0"
                priority
              />
              <span className="text-white/90 font-bold text-2xl tracking-tight">ORPrep</span>
            </div>
            <h1 className="hero-title text-white">
              Digital preference cards for the anaesthetic team.
            </h1>
            <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-xl">
              Built by ODPs and anaesthetic technicians, for the colleagues they work with.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#appstore-link"
                className="app-store-btn text-base"
                aria-label="Download ORPrep on the App Store">
                
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[0.875rem] border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]">
                
                Learn more
              </Link>
            </div>
          </div>

          {/* Glass info card */}
          <div className="glass-card card-rounded p-6 max-w-xs w-full space-y-5 shadow-2xl flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">Consultant profiles</p>
                <p className="label-mono text-muted-foreground">Stored locally on device</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2.5">
              {[
              'Airway equipment preferences',
              'Drug & monitoring setup',
              'Regional & neuraxial technique',
              'Specialty-specific requirements']?.
              map((item) =>
              <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground font-medium">{item}</span>
                </div>
              )}
            </div>

            <div className="border-t border-border pt-4 flex items-center justify-between">
              <span className="label-mono text-muted-foreground">Works fully offline</span>
              <span className="label-mono text-primary font-medium bg-primary/10 px-2 py-1 rounded-md">iOS Only</span>
            </div>

            <div className="border-t border-border pt-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                <span className="label-mono text-emerald-400 font-medium">Free Trial</span>
              </div>
              <span className="label-mono text-muted-foreground">Price on App Store</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}