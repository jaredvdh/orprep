import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: boolean;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Fast lookup',
    description: 'Find any consultant\'s preferences in seconds. Search by name, specialty, or hospital. No login, no loading.',
    accent: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Editable & shareable',
    description: 'Update profiles as consultants\' preferences change. Share peer-to-peer via AirDrop, export as PDF, or print as a laminate-ready theatre card with a QR code linking back to the live profile.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Emergency reference, one tap away',
    description: 'Full offline crisis manual covering MH, Anaphylaxis, LAST, CICO, Major Haemorrhage, and more. Accessible in seconds, even without signal.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M6.343 17.657a9 9 0 010-12.728M9.172 15.536a5 5 0 010-7.072" />
      </svg>
    ),
    title: 'Works fully offline',
    description: 'Everything stored locally on your device. No account required. No cloud sync. No signal needed. Your data never leaves your phone unless you choose to share it.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-card section-rounded p-8 md:p-12 shadow-sm" aria-labelledby="features-heading">
      <div className="mb-10">
        <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">What ORPrep does</span>
        <h2 id="features-heading" className="section-title mt-4 text-foreground">
          Everything in one place.
          <br />
          <span className="text-muted-foreground font-normal">Nothing you don&apos;t need.</span>
        </h2>
      </div>

      {/* Asymmetric 2×2 grid — not a uniform icon grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`group rounded-2xl p-7 transition-all duration-200 ${
              index === 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-primary/5 border border-border'
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                index === 0
                  ? 'bg-white/20 text-white' :'bg-primary/10 text-primary'
              }`}
              aria-hidden="true"
            >
              {feature.icon}
            </div>
            <h3 className={`font-bold text-lg mb-2.5 ${index === 0 ? 'text-white' : 'text-foreground'}`}>
              {feature.title}
            </h3>
            <p className={`text-sm leading-relaxed ${index === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}