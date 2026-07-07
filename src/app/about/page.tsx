import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ORPrep — Built by the Anaesthetic Team',
  description: 'ORPrep was built by an anaesthetic technician and ODP who wanted a better version of the paper preference card. Not a corporate product — a tool made by the people who use it.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">

          {/* Header */}
          <div className="mb-12">
            <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">About</span>
            <h1 className="section-title mt-4 text-foreground">
              Built by the team,<br />
              <span className="text-muted-foreground font-normal">for the team.</span>
            </h1>
          </div>

          {/* Origin story */}
          <div className="space-y-8 text-base text-muted-foreground leading-relaxed">

            <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
              <p className="text-foreground font-semibold text-lg leading-snug">
                ORPrep started with a laminated card and a frustration.
              </p>
              <p>
                If you&apos;ve worked in an anaesthetic department, you know the preference card system. A folder in the corner of the anaesthetic room, full of laminated sheets — one per consultant — telling you how they like their room set up. Which laryngoscope blade. Which induction agent. Whether they prefer a size 4 or size 3 LMA. What changes for a paediatric list.
              </p>
              <p>
                The problem is that those cards are always out of date, often missing, occasionally illegible, and impossible to share with a colleague starting a new job at a hospital they&apos;ve never worked at before.
              </p>
              <p>
                ORPrep was built to fix that. Not by a health-tech company. Not by a startup with venture funding. By someone who does this job, who wanted a better tool, and who built it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold text-foreground text-xl">What it is — and what it isn&apos;t</h2>
              <p>
                ORPrep is a preference card system that lives on your phone. It works offline. It doesn&apos;t require an account. It doesn&apos;t send your data anywhere. You can share profiles with colleagues peer-to-peer, the same way you&apos;d hand someone a laminated card — except the digital version doesn&apos;t get coffee on it and is never out of date.
              </p>
              <p>
                It also includes a crisis manual, because the one time you need it you won&apos;t have signal, and you won&apos;t want to be hunting through a browser.
              </p>
              <p>
                It isn&apos;t a clinical decision-support tool. It isn&apos;t a drug reference. It doesn&apos;t replace your local protocols, your training, or the anaesthetist standing next to you. It&apos;s a preparation and reference tool — the digital version of that folder in the corner of the room.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-bold text-foreground text-xl">Who built it</h2>
              <p>
                ORPrep was built by a member of the anaesthetic technician and ODP community. It is not a corporate product. There is no marketing team, no growth strategy, and no investor deck.
              </p>
              <p>
                If you use it and it helps, that&apos;s the point. If something is wrong or missing, get in touch — the roadmap is shaped by the people who actually use it.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-secondary rounded-2xl p-8 space-y-4 mt-10">
              <h2 className="font-bold text-white text-xl">Try it yourself.</h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Free on the App Store. No account. No setup. Open it, add a hospital, add a consultant, and you&apos;re done.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#appstore-link"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-secondary font-bold px-6 py-3 rounded-[0.875rem] text-sm hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                  aria-label="Download ORPrep on the App Store"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </a>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-[0.875rem] text-sm hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                >
                  Questions? See the FAQ
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}