import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for active section tracking
  const [activeSection, setActiveSection] = useState('home');
  const [visibleLabel, setVisibleLabel] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
  }, { dependencies: [isMobileMenuOpen] });

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const sections = ['home', 'concept', 'space', 'menu', 'chef'].map(id => document.getElementById(id));
    sections.forEach(sec => sec && observer.observe(sec));

    return () => {
      sections.forEach(sec => sec && observer.unobserve(sec));
    };
  }, []);

  // Show label temporarily when active section changes
  useEffect(() => {
    setVisibleLabel(activeSection);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisibleLabel(null);
    }, 2000); // Show for 2 seconds

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeSection]);

  // Logic for visibility
  // Hide if scrolling down AND not at the top AND mobile menu is NOT open
  const isHidden = scrollDirection === 'down' && !isAtTop && !isMobileMenuOpen;
  
  // Logic for styling (transparent at top, solid/glass when scrolled or menu open)
  const isScrolled = !isAtTop || isMobileMenuOpen;

  const menuItems = [
    { num: '01', id: 'home', label: 'Home', href: '#home' },
    { num: '02', id: 'concept', label: 'Conceito', href: '#concept' },
    { num: '03', id: 'space', label: 'Espaço', href: '#space' },
    { num: '04', id: 'menu', label: 'Menu', href: '#menu' },
    { num: '05', id: 'chef', label: 'Chef', href: '#chef' }
  ];

  return (
    <>
      {/* Top Bar */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 border-b border-casa-text/10",
          // Visibility Class
          isHidden ? "-translate-y-full" : "translate-y-0",
          // Style Class
          isScrolled 
            ? "bg-casa-cream/95 backdrop-blur-md shadow-sm py-4" 
            : "bg-casa-cream py-6"
        )}
      >
        <div className="w-full mx-auto grid grid-cols-3 items-center">
          
          {/* Left: Location & Status */}
          <div className="hidden md:flex items-center gap-4 text-[10px] font-sans font-medium tracking-[0.2em] text-casa-text-light uppercase">
            <span>SÃO PAULO</span>
            <span className="w-8 h-[1px] bg-casa-text-light/30"></span>
            <span className="text-casa-accent">12:51, OPEN</span>
          </div>

          {/* Center: Logo */}
          <div ref={logoRef} className="col-span-2 md:col-span-1 flex flex-col items-center justify-center transition-colors duration-300 z-50 relative">
            <a href="#home" className="font-editorial text-2xl md:text-3xl font-medium tracking-widest text-casa-text uppercase">
              CASA BRASILEIRA
            </a>
            <span className="font-sans text-[8px] tracking-[0.3em] text-casa-text-light uppercase mt-1">
              Restaurant & Bar
            </span>
          </div>

          {/* Right: Navigation Actions */}
          <div ref={linksRef} className="flex items-center justify-end gap-8">
            <Link 
              to="/cardapio" 
              className="hidden md:block text-[10px] font-sans font-medium tracking-[0.2em] text-casa-text uppercase hover:text-casa-accent transition-colors"
            >
              CARDÁPIO
            </Link>
            <span className="hidden md:block text-[10px] font-sans font-medium tracking-[0.2em] text-casa-text-light uppercase cursor-pointer hover:text-casa-accent transition-colors">
              PORTUGUÊS
            </span>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-3 text-[10px] font-sans font-medium tracking-[0.2em] text-casa-text uppercase hover:text-casa-accent transition-colors z-50 relative"
            >
              <span>{isMobileMenuOpen ? 'FECHAR' : 'MENU'}</span>
              <div className="w-2.5 h-2.5 rounded-full bg-casa-accent"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fixed Left Navigation (Desktop) */}
      <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-8">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const isVisible = visibleLabel === item.id;

          return (
            <a 
              key={item.num} 
              href={item.href}
              className="group flex items-center gap-4 transition-colors"
            >
              <span className={cn(
                "font-sans text-[10px] font-medium tracking-widest transition-colors duration-300",
                isActive ? "text-casa-accent" : "text-casa-text-light/50 group-hover:text-casa-accent"
              )}>
                {item.num}
              </span>
              <span className={cn(
                "font-sans text-[10px] font-medium uppercase tracking-widest absolute left-8 whitespace-nowrap bg-casa-cream/90 px-2 py-1 rounded transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              )}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-casa-cream z-40 flex-col items-center justify-center"
        style={{ transform: 'translateX(100%)', display: 'none' }}
      >
        <div className="flex flex-col items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.num} 
              href={item.href} 
              className="mobile-link flex items-center gap-4 font-editorial text-3xl text-casa-text hover:text-casa-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-sans text-sm tracking-widest text-casa-accent">{item.num}</span>
              {item.label}
            </a>
          ))}
          <Link 
            to="/cardapio" 
            className="mobile-link flex items-center gap-4 font-editorial text-3xl text-casa-text hover:text-casa-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-sans text-sm tracking-widest text-casa-accent">QR</span>
            Cardápio Digital
          </Link>
          <button 
            className="mobile-link mt-8 px-8 py-3 bg-casa-accent text-white rounded-full font-sans text-xs font-bold uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reservar Mesa
          </button>
        </div>
      </div>
    </>
  );
}
