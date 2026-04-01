'use client';

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: Position) => void;
  onClick: () => void;
  href: string;
}

const navItems = [
  { label: "Home",     href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({ left: selectedTab.offsetLeft, width, opacity: 1 });
    }
  }, [selected]);

  const resetToSelected = () => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({ left: selectedTab.offsetLeft, width, opacity: 1 });
    }
  };

  return (
    <ul
      onMouseLeave={resetToSelected}
      className="relative mx-auto flex w-fit rounded-full border-2 border-foreground bg-background p-1"
    >
      {navItems.map((item, i) => (
        <Tab
          key={item.label}
          ref={(el: HTMLLIElement | null) => { tabsRef.current[i] = el; }}
          setPosition={setPosition}
          onClick={() => setSelected(i)}
          href={item.href}
        >
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, href }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          const el = (ref as React.RefObject<HTMLLIElement>)?.current;
          if (!el) return;
          const { width } = el.getBoundingClientRect();
          setPosition({ left: el.offsetLeft, width, opacity: 1 });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        <a href={href}>{children}</a>
      </li>
    );
  }
);
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => (
  <motion.li
    animate={{ ...position }}
    className="absolute z-0 h-7 rounded-full bg-foreground md:h-12"
  />
);
