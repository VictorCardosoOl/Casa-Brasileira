import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate contents entry
    tl.from([logoRef.current, linksRef.current], {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.5,
    });
  }, { scope: navRef });

  // Handle Mobile Menu Animation
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: '0%',
        duration: 0.5,
        ease: 'power3.out',
        display: 'flex'
      });
      // Animate links inside mobile menu
      gsap.fromTo('.mobile-link', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.2 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in',
        display: 'none'
      });
    }
  }, [isMobileMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Logic for visibility
  // Hide if scrolling down AND not at the top AND mobile menu is NOT open
  const isHidden = scrollDirection === 'down' && !isAtTop && !isMobileMenuOpen;
  
  // Logic for styling (transparent at top, solid/glass when scrolled or menu open)
  const isScrolled = !isAtTop || isMobileMenuOpen;

  const menuItems = [
    { num: '01', label: 'Home', href: '#home' },
    { num: '02', label: 'Conceito', href: '#concept' },
    { num: '03', label: 'Espaço', href: '#space' },
    { num: '04', label: 'Menu', href: '#menu' },
    { num: '05', label: 'Chef', href: '#chef' }
  ];

  return (
    <>
      {/* Top Bar */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12",
          // Visibility Class
          isHidden ? "-translate-y-full" : "translate-y-0",
          // Style Class
          isScrolled 
            ? "bg-casa-cream/90 backdrop-blur-md shadow-sm py-4" 
            : "bg-transparent py-8"
        )}
      >
        <div className="w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className={cn(
            "flex items-center gap-2 transition-colors duration-300 z-50 relative",
            isScrolled ? "text-casa-accent" : "text-white"
          )}>
            <a href="#home" className="font-serif text-2xl font-bold tracking-tighter cursor-pointer">
              CB.
            </a>
          </div>

          {/* Navigation Actions */}
          <div ref={linksRef} className="flex items-center gap-6">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 hover:opacity-70 transition-colors duration-300 z-50 relative",
                isScrolled ? "text-casa-accent" : "text-casa-accent"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* CTA Button */}
            <button className={cn(
              "hidden md:block px-6 py-2 border text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300",
              isScrolled 
                ? "border-casa-accent text-casa-accent hover:bg-casa-accent hover:text-white"
                : "border-casa-accent text-casa-accent hover:bg-casa-accent hover:text-white"
            )}>
              Reservar
            </button>
          </div>
        </div>
      </nav>

      {/* Fixed Left Navigation (Desktop) */}
      <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-8">
        {menuItems.map((item) => (
          <a 
            key={item.num} 
            href={item.href}
            className="group flex items-center gap-4 text-casa-text-light hover:text-casa-accent transition-colors"
          >
            <span className="font-mono text-xs font-bold">{item.num}</span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute left-8 whitespace-nowrap bg-casa-cream/90 px-2 py-1 rounded">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-casa-cream z-40 hidden flex-col items-center justify-center"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.num} 
              href={item.href} 
              className="mobile-link flex items-center gap-4 font-serif text-3xl text-casa-text hover:text-casa-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-mono text-lg text-casa-accent">{item.num}</span>
              {item.label}
            </a>
          ))}
          <button 
            className="mobile-link mt-8 px-8 py-3 bg-casa-accent text-white rounded-full font-sans text-sm font-bold uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reservar Mesa
          </button>
        </div>
      </div>
    </>
  );
}
