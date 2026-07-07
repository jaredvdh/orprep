import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Add your hospital',
    description: 'Set up your department with location details, equipment locations, key contacts, and anaesthetic machine check documents.',
  },
  {
    number: '02',
    title: 'Add the consultants you work with',
    description: 'Create a profile for each anaesthetist — or import one shared by a colleague. Include airway preferences, drug setup, regional techniques, and any specialty-specific notes.',
  },
  {
    number: '03',
    title: 'Look up, edit, and share in seconds',
    description: 'Open ORPrep before a list. Find your consultant. Their setup is right there. Update it when things change. Share it with a new colleague starting in your department.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-card section-rounded p-8 md:p-12 shadow-sm" aria-labelledby="how-it-works-heading">
      <div className="mb-10">
        <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">How it works</span>
        <h2 id="how-it-works-heading" className="section-title mt-4 text-foreground">
          Up and running in minutes.
        </h2>
        <p className="text-muted-foreground mt-3 text-base max-w-xl leading-relaxed">
          No training required. If you can use your phone, you can use ORPrep.
        </p>
      </div>
      {/* Horizontal steps on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps?.map((step, index) => (
          <div key={step?.number} className="relative">
            {/* Connector line between steps on desktop */}
            {index < steps?.length - 1 && (
              <div
                className="hidden md:block absolute top-5 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-primary/30 to-transparent"
                aria-hidden="true"
              />
            )}

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-3xl font-bold text-primary leading-none"
                  aria-hidden="true"
                >
                  {step?.number}
                </span>
                <div className="h-px flex-1 bg-border md:hidden" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2">{step?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="#appstore-link"
          className="app-store-btn"
          aria-label="Download ORPrep on the App Store"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
        <p className="text-xs text-muted-foreground">Free · iOS only · No account required</p>
      </div>
    </section>
  );
}