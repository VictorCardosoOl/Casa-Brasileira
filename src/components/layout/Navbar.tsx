import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-casa-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:pl-32 lg:pr-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl text-casa-accent leading-none">Casa</span>
          <span className="font-sans font-black uppercase tracking-widest text-xs text-casa-text leading-none">Brasileira</span>
        </div>

        {/* Center Text */}
        <div className="hidden md:block">
          <span className="font-sans font-bold uppercase tracking-[0.2em] text-sm text-casa-text">
            Alta Cozinha do Cotidiano
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-casa-accent text-casa-accent text-xs font-bold uppercase tracking-widest rounded-full hover:bg-casa-accent hover:text-white transition-colors">
            Reservar
          </button>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold bg-casa-text text-white rounded-full px-3 py-1">
            <span className="text-casa-accent">PT</span>
            <span className="opacity-50">EN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
