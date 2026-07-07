import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Linear Single-Row Pattern */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded" aria-label="ORPrep home">
            <AppLogo size={24} />
            <span className="font-semibold text-sm text-foreground">ORPrep</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            <Link href="/support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] flex items-center">
              Support
            </Link>
            <Link href="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] flex items-center">
              About
            </Link>
            <a
              href="mailto:support@orprep.app"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] flex items-center"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="label-mono text-muted-foreground whitespace-nowrap">
            © 2026 ORPrep
          </p>
        </div>
      </div>
    </footer>
  );
}