import React from 'react';

const trustPoints = [
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    heading: 'No account',
    body: 'No sign-up, no email address, no password. Open the app and go.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    heading: 'No cloud',
    body: 'All data lives on your device. Nothing is uploaded to a server.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    heading: 'No data collection',
    body: 'ORPrep does not collect, track, or transmit your personal data.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    heading: 'Reference tool only',
    body: 'ORPrep does not provide clinical advice, dosing guidance, or replace local policy or direct instruction from the responsible anaesthetist.',
  },
];

export default function TrustStrip() {
  return (
    <section
      className="bg-secondary section-rounded p-8 md:p-12"
      aria-labelledby="trust-heading"
    >
      <div className="mb-8">
        <h2 id="trust-heading" className="font-bold text-xl text-white">
          Built for clinical environments. Designed with privacy in mind.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints?.map((point) => (
          <div key={point?.heading} className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                {point?.icon?.props?.children}
              </svg>
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-1">{point?.heading}</p>
              <p className="text-white/70 text-xs leading-relaxed">{point?.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-7 border-t border-white/15">
        <p className="text-white/50 text-xs leading-relaxed max-w-2xl font-mono">
          This application is a preference and setup reference tool only. It does not provide clinical advice, medication recommendations, dosing guidance, or replace clinical judgement, local policy, medication checking, or direct instruction from the responsible anaesthetist/anesthesiologist.
        </p>
      </div>
    </section>
  );
}