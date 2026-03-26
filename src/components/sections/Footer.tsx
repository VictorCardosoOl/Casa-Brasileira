import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-casa-cream text-casa-text overflow-hidden pt-24 pb-8 px-6 lg:pl-40 lg:pr-12 border-t border-casa-pink-200/50">
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {['História', 'Menu', 'Passaporte', 'Local', 'Reservas'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-sans text-xs font-bold uppercase tracking-widest text-casa-text hover:text-casa-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Massive Text */}
        <div className="text-center mb-12 w-full">
          <h2 className="font-serif text-[8vw] leading-[0.9] text-casa-accent tracking-tighter uppercase">
            SEMPRE UMA REFEIÇÃO<br/>PERFEITA
          </h2>
        </div>

        {/* Image Collage (Simulated) */}
        <div className="relative w-full max-w-2xl aspect-[21/9] mb-16 rounded-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
            alt="Casa Brasileira" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-casa-pink-200">
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] uppercase tracking-widest text-casa-text-light hover:text-casa-accent">Terms & Conditions</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-casa-text-light hover:text-casa-accent">Privacy Policy</a>
          </div>
          
          <div className="flex items-center gap-4 text-casa-text-light">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-casa-accent transition-colors" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-casa-accent transition-colors" />
          </div>

          <div className="text-[10px] uppercase tracking-widest text-casa-text-light text-center md:text-right">
            &copy; {new Date().getFullYear()} Casa Brasileira.<br/>
            All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
