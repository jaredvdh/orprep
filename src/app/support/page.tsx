import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from '@/app/support/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Support & FAQ — ORPrep',
  description: 'Get help with ORPrep. Answers to common questions about data privacy, device compatibility, reporting bugs, and the app\'s clinical disclaimer.',
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {/* Page header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-12">
          <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">Help & Support</span>
          <h1 className="section-title mt-4 text-foreground">
            Frequently asked questions.
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a
              href="mailto:support@orprep.app"
              className="text-primary font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              Email us directly
            </a>{' '}
            and we&apos;ll get back to you.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FAQAccordion />
        </div>

        {/* Contact section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            <h2 className="font-bold text-xl text-foreground mb-2">Still need help?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Found a bug? Have a feature request? Want to suggest an improvement to the crisis manual? Get in touch — this app is built by people in the anaesthetic community, and feedback from the people who use it is how it gets better.
            </p>
            <a
              href="mailto:support@orprep.app"
              className="app-store-btn inline-flex"
              aria-label="Send an email to ORPrep support"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@orprep.app
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}