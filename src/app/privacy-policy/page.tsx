import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — ORPrep',
  description: 'ORPrep privacy policy. Plain-language explanation of how the app handles your data — locally on your device, with no server uploads and no account required.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">

          {/* Header */}
          <div className="mb-12">
            <span className="label-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full">Legal</span>
            <h1 className="section-title mt-4 text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mt-3 text-sm">
              <strong className="text-foreground">App:</strong> ORPrep
              <br />
              <strong className="text-foreground">Last updated:</strong> 7 July 2026
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              This policy explains what data ORPrep collects, how it is used, and where it is stored. We have written it in plain language so that any clinical professional can read and understand it in under a minute.
            </p>
          </div>

          {/* Policy content */}
          <div className="prose prose-sm max-w-none text-foreground space-y-10">

            <PolicySection title="1. Who we are">
              <p>
                ORPrep is a mobile application developed by an individual within the anaesthetic technician and Operating Department Practitioner (ODP) community. It is not a corporate healthcare product. If you have questions about this policy, contact us at{' '}
                <a href="mailto:support@orprep.app" className="text-primary hover:underline font-medium">support@orprep.app</a>.
              </p>
            </PolicySection>

            <PolicySection title="2. What data ORPrep stores and where">
              <p>
                ORPrep stores all data <strong>locally on your device</strong>. This includes:
              </p>
              <ul className="policy-list">
                <li>Consultant preference profiles you create or import</li>
                <li>Hospital and department information you add</li>
                <li>Any notes or customisations you make within the app</li>
              </ul>
              <p>
                None of this data is transmitted to any server, cloud service, or third party by the app. It exists only on your device, in the app&apos;s local storage.
              </p>
              <p>
                ORPrep does <strong>not</strong> require you to create an account, provide an email address, or authenticate in any way.
              </p>
            </PolicySection>

            <PolicySection title="3. Data you choose to share">
              <p>
                ORPrep includes features that allow you to export or share data. These features are entirely optional and are always initiated by you. They include:
              </p>
              <ul className="policy-list">
                <li><strong>AirDrop:</strong> Sending a consultant profile directly to another nearby device</li>
                <li><strong>PDF export:</strong> Generating a PDF of a profile and saving or sending it via the iOS share sheet</li>
                <li><strong>Print / theatre card:</strong> Generating a printable laminate card with a QR code</li>
              </ul>
              <p>
                When you use these features, data leaves your device as a direct result of your own action, using Apple&apos;s standard iOS sharing mechanisms. ORPrep does not monitor, log, or receive any information about what you share or with whom.
              </p>
            </PolicySection>

            <PolicySection title="4. Analytics and crash reporting">
              <p>
                ORPrep may use standard, anonymous crash reporting provided by Apple through the App Store and Xcode Organiser. This reporting is aggregated and anonymised — it tells us that a crash occurred and on what iOS version, but does not identify you personally or include any data from your app content.
              </p>
              <p>
                We do not use any third-party analytics SDKs (such as Google Analytics, Firebase Analytics, Mixpanel, or similar). We do not track how you navigate the app, which profiles you view, or how often you use any feature.
              </p>
              <p>
                If Apple&apos;s App Store crash reporting practices change, or if we add any analytics in a future version, this policy will be updated before that version ships.
              </p>
            </PolicySection>

            <PolicySection title="5. Sensitive and clinical data">
              <p>
                Consultant preference profiles may contain professional information about named clinicians (for example, their drug preferences or airway technique preferences). This is professional reference information, not personal medical data about patients.
              </p>
              <p>
                ORPrep is not designed to store, process, or transmit any patient data. You should not enter patient information into ORPrep.
              </p>
            </PolicySection>

            <PolicySection title="6. Children's privacy">
              <p>
                ORPrep is designed for use by qualified healthcare professionals. It is not directed at children under 13, and we do not knowingly collect any information from children.
              </p>
            </PolicySection>

            <PolicySection title="7. Data retention and deletion">
              <p>
                Because all data is stored locally on your device, you are in full control of it. You can delete individual profiles or all app data at any time from within the app, or by deleting the app from your device entirely. Deleting the app removes all locally stored data permanently.
              </p>
              <p>
                We do not hold a copy of your data on any server, so we cannot retrieve or delete it on your behalf.
              </p>
            </PolicySection>

            <PolicySection title="8. Third-party services">
              <p>
                ORPrep does not integrate with any third-party services that would receive your data. The app is distributed through the Apple App Store, which has its own privacy practices — see{' '}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Apple&apos;s Privacy Policy
                </a>{' '}
                for details on how Apple handles App Store usage data.
              </p>
            </PolicySection>

            <PolicySection title="9. Changes to this policy">
              <p>
                If we make material changes to this privacy policy, we will update the &ldquo;Last updated&rdquo; date at the top and, where appropriate, note the changes in the app&apos;s release notes. Continued use of the app after a policy update constitutes acceptance of the revised policy.
              </p>
            </PolicySection>

            <PolicySection title="10. Contact">
              <p>
                If you have any questions about this privacy policy or how ORPrep handles data, please contact us at{' '}
                <a href="mailto:support@orprep.app" className="text-primary hover:underline font-medium">support@orprep.app</a>.
              </p>
            </PolicySection>

            {/* Disclaimer box */}
            <div className="bg-muted border border-border rounded-2xl p-6 mt-10">
              <p className="label-mono text-muted-foreground mb-2">Clinical disclaimer</p>
              <p className="text-sm text-foreground leading-relaxed">
                This application is a preference and setup reference tool only. It does not provide clinical advice, medication recommendations, dosing guidance, or replace clinical judgement, local policy, medication checking, or direct instruction from the responsible anaesthetist/anesthesiologist.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3" aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <h2
        id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="font-bold text-foreground text-lg border-b border-border pb-2"
      >
        {title}
      </h2>
      <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}