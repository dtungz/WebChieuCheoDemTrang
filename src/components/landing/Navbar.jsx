import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'GIỚI THIỆU', href: '#hero' },
  { label: 'NHÂN VẬT', href: '#characters' },
  { label: 'LUẬT CHƠI', href: '#rules' },
  { label: 'CÁC VỞ CHÈO', href: '#theatre' },
  { label: 'FLASHCARDS', href: '#flashcards' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/50'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="font-playfair text-primary font-bold text-base md:text-xl tracking-wider leading-tight">
            CHIẾU CHÈO<br className="md:hidden" />
            <span className="text-foreground text-[10px] md:text-base"> ĐÊM TRĂNG</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-montserrat text-xs tracking-widest text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#buy"
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground font-montserrat text-xs font-bold tracking-widest rounded-sm animate-pulse-gold hover:scale-105 transition-transform"
            >
              MUA GAME
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 font-montserrat text-sm tracking-widest text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#buy"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 bg-primary text-primary-foreground font-montserrat text-sm font-bold tracking-widest text-center rounded-sm"
            >
              MUA GAME
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}