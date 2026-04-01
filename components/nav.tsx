'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideTabs } from '@/components/ui/slide-tabs';

const mobileLinks = [
  { label: 'Home',     href: '/home' },
  { label: 'Projects', href: '/home#projects' },
  { label: 'About',    href: '/home#about' },
  { label: 'Contact',  href: '/home#contact' },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <Link
          href="/"
          className="text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
        >
          DINE BORO
        </Link>

        {/* Desktop — SlideTabs */}
        <div className="hidden md:block">
          <SlideTabs />
        </div>

        {/* Mobile — hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border md:hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 rounded-xl font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
