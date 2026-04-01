'use client';

import Link from 'next/link';
import { SlideTabs } from '@/components/ui/slide-tabs';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <Link href="/" className="text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors">
        DINE BORO
      </Link>
      <div className="overflow-x-auto">
        <SlideTabs />
      </div>
    </header>
  );
}
