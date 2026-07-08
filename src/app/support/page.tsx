import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from '@/app/support/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Support & FAQ — ORPrep',
  description: 'Get help with ORPrep. Answers to common questions about data privacy, device compatibility, reporting bugs, and the app\'s clinical disclaimer.',
};

interface UsageScenario {
  icon: React.ReactNode;
  title: string;
  steps: string[];
}

const usageScenarios: UsageScenario[] = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Starting a shift with a new consultant',
    steps: [
      'Open ORPrep and search for the consultant\'s name.',
      'Review their preferred induction agents, airway equipment, and monitoring setup.',
      'Check any personal notes or flags added by colleagues who have worked with them before.',
      'Head into theatre confident you\'ve set up exactly how they like it — without needing to ask.',
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Exporting a card for a colleague',
    steps: [
      'Open the consultant\'s profile you want to share.',
      'Tap "Print / Share Card" to generate a theatre-ready card.',
      'AirDrop it directly to a colleague\'s iPhone, or export as a PDF to send via email or save to Files.',
      'The printed card includes a QR code that links straight back to the live digital profile.',
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Responding to an intraoperative emergency',
    steps: [
      'Tap the Crisis Manual tab — no internet connection required.',
      'Select the relevant emergency (e.g. Malignant Hyperthermia, Anaphylaxis, CICO).',
      'Follow the structured reference checklist alongside the responsible anaesthetist.',
      'Use it as a quick cognitive aid while your team activates the full emergency response.',
    ],
  },
];

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

        {/* Usage Scenarios */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
          <div className="mb-6">
            <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">In practice</span>
            <h2 className="font-bold text-xl text-foreground mt-4 mb-1">How ORPrep fits into your theatre routine</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A few real-world examples of how anaesthetic technicians and ODPs use ORPrep day-to-day.
            </p>
          </div>

          <div className="space-y-4">
            {usageScenarios.map((scenario, index) => (
              <div
                key={scenario.title}
                className="bg-card rounded-2xl border border-border p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    {scenario.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary/70 tabular-nums">0{index + 1}</span>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                        {scenario.title}
                      </h3>
                    </div>
                    <ol className="space-y-2">
                      {scenario.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" aria-hidden="true" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
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