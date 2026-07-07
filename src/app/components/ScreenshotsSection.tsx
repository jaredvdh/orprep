import React from 'react';
import Image from 'next/image';

const screenshots = [
  {
    label: 'Print / share card',
    description: 'Export as PDF or laminate-ready theatre card with QR code',
    src: '/assets/images/IMG_2404-1783468501285.PNG',
    alt: 'ORPrep app consultant profile overview screen displaying a complete anaesthetist preference summary with equipment setup and technique preferences',
  },
  {
    label: 'Crisis manual',
    description: 'MH, Anaphylaxis, LAST, CICO — offline, always',
    src: '/assets/images/IMG_2405-1783468501575.PNG',
    alt: 'ORPrep app Malignant Hyperthermia crisis manual screen showing emergency protocol steps and treatment guidance for use during anaesthetic emergencies',
  },
  {
    label: 'Consultant profile',
    description: 'Airway, drugs, monitoring, regional — all in one view',
    src: '/assets/images/IMG_2406-1783468501574.PNG',
    alt: 'ORPrep app consultant preference card showing PDF export view with anaesthetist setup details including airway equipment, drug preferences, and monitoring requirements',
  },
];

export default function ScreenshotsSection() {
  return (
    <section className="bg-card section-rounded p-8 md:p-12 shadow-sm" aria-labelledby="screenshots-heading">
      <div className="mb-10">
        <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">The app</span>
        <h2 id="screenshots-heading" className="section-title mt-4 text-foreground">
          See it in action.
        </h2>
        <p className="text-muted-foreground mt-3 text-base max-w-xl leading-relaxed">
          Built for iOS — clean, fast, and designed for theatre use.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {screenshots?.map((shot) => (
          <div key={shot?.label} className="flex flex-col gap-3">
            <div className="relative w-full aspect-[9/19.5] min-h-[300px] rounded-2xl overflow-hidden shadow-md bg-muted">
              <Image
                src={shot?.src}
                alt={shot?.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{shot?.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{shot?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}