'use client';

import { SlideTabs } from '@/components/ui/slide-tabs';

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <span className="text-xl font-semibold text-foreground tracking-tight">
        DINE BORO
      </span>
      <SlideTabs />
    </header>
  );
}
