'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'Is my data private?',
    answer: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          Yes. Everything in ORPrep is stored locally on your device. No data is uploaded to a server, and no account or internet connection is required to use the app.
        </p>
        <p>
          The only time any data leaves your device is if <strong className="text-foreground font-semibold">you</strong> choose to share or export it — for example, sending a consultant profile to a colleague via AirDrop, exporting a PDF, or printing a theatre card. That action is always initiated by you, never by the app in the background.
        </p>
        <p>
          ORPrep does not collect analytics about how you use the app, beyond standard anonymous crash reporting provided by Apple through the App Store. See our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>{' '}
          for full details.
        </p>
      </div>
    ),
  },
  {
    question: 'Can I use ORPrep on Android?',
    answer: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        ORPrep is currently iOS only. An Android version is not currently in development, but it is something we may consider in the future based on demand. If Android support is important to you, let us know at{' '}
        <a href="mailto:support@orprep.app" className="text-primary hover:underline font-medium">support@orprep.app</a>.
      </p>
    ),
  },
  {
    question: 'How do I report a bug or request a feature?',
    answer: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          Email us at{' '}
          <a href="mailto:support@orprep.app" className="text-primary hover:underline font-medium">support@orprep.app</a>.
          Please include as much detail as possible — what you were doing, what happened, and the iOS version you are running.
        </p>
        <p>
          Feature requests are welcome. ORPrep is built by people in the anaesthetic technician and ODP community, and the roadmap is shaped by what the people who use it actually need.
        </p>
      </div>
    ),
  },
  {
    question: 'Does ORPrep replace clinical judgement?',
    answer: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          No. ORPrep is a preference and setup reference tool only.
        </p>
        <p className="bg-muted border border-border rounded-xl px-4 py-3 text-foreground font-medium text-xs leading-relaxed">
          This application does not provide clinical advice, medication recommendations, dosing guidance, or replace clinical judgement, local policy, medication checking, or direct instruction from the responsible anaesthetist/anesthesiologist.
        </p>
        <p>
          Consultant preference profiles are created and maintained by anaesthetic technicians and ODPs for the purpose of theatre preparation. Always verify drug doses and equipment choices against your local protocols and with the responsible clinician.
        </p>
      </div>
    ),
  },
  {
    question: 'How do sharing and export work?',
    answer: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          You can share a consultant profile with a colleague in several ways:
        </p>
        <ul className="space-y-2 list-none pl-0">
          {[
            'AirDrop — share directly to another iPhone nearby',
            'Export as PDF — save or send via Files, email, or any app',
            'Print as a theatre card — generates a laminate-ready card with a QR code that links back to the live digital profile',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          All sharing is initiated by you. No data is transmitted automatically.
        </p>
      </div>
    ),
  },
  {
    question: 'What is in the crisis manual?',
    answer: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          The crisis manual is a built-in, fully offline reference covering common anaesthetic emergencies, including:
        </p>
        <ul className="space-y-2 list-none pl-0">
          {[
            'Malignant Hyperthermia (MH)',
            'Anaphylaxis',
            'Local Anaesthetic Systemic Toxicity (LAST)',
            'Can\'t Intubate, Can\'t Oxygenate (CICO)',
            'Major Haemorrhage',
            'And more',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          It is accessible with a single tap and works without any internet connection. It is intended as a quick reference during an emergency — it does not replace formal crisis resource management training or your hospital&apos;s own protocols.
        </p>
      </div>
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3" role="list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`bg-card rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen ? 'border-primary/40 shadow-sm' : 'border-border'
            }`}
            role="listitem"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset rounded-2xl min-h-[64px]"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="font-semibold text-foreground text-sm sm:text-base leading-snug pr-2">
                {faq.question}
              </span>
              <div
                className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isOpen ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}
                aria-hidden="true"
              >
                <Icon
                  name={isOpen ? 'MinusIcon' : 'PlusIcon'}
                  size={14}
                  variant="outline"
                />
              </div>
            </button>

            {/* Answer panel */}
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-6">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}