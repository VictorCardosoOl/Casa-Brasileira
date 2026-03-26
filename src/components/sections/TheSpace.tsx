import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SPACE_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop",
];

export default function TheSpace() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % SPACE_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + SPACE_IMAGES.length) % SPACE_IMAGES.length);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from(textRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');

  }, { scope: containerRef });

  return (
    <section id="space" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-pink-50 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="font-editorial text-[18vw] leading-[0.8] text-casa-accent/5 tracking-tighter whitespace-nowrap">
          ESPAÇO
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mt-24">
        
        {/* Text Side */}
        <div ref={textRef} className="flex flex-col gap-8">
          <div className="flex items-center gap-3 text-casa-accent">
            <span className="h-[1px] w-12 bg-casa-accent/50"></span>
            <span className="font-serif italic text-lg tracking-wide">Nossa História</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-casa-text leading-[1.1]">
            Um refúgio de <br/>
            <span className="text-casa-accent italic">memórias.</span>
          </h2>

          <div className="prose prose-lg text-casa-text-light font-light leading-relaxed">
            <p>
              A Casa Brasileira nasceu do desejo de criar um espaço onde o tempo desacelera. 
              Inspirada nas antigas casas de vó, com seus azulejos hidráulicos e cheiro de café fresco, 
              mas com um toque contemporâneo que reflete a mulher moderna.
            </p>
            <p className="mt-4">
              Cada canto foi pensado para acolher. Das mesas postas com linho e flores frescas 
              à iluminação suave que transforma o ambiente conforme o dia avança. É um lugar para 
              se sentir em casa, seja para um almoço rápido ou uma tarde inteira de conversas.
            </p>
          </div>

          <div className="pt-4">
            <button className="px-8 py-3 border border-casa-accent text-casa-accent rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-casa-accent hover:text-white transition-colors duration-300">
              Conheça o Espaço
            </button>
          </div>
        </div>

        {/* Image Side - Gallery */}
        <div ref={imageRef} className="flex flex-col gap-6">
          <div className="relative h-[500px] md:h-[600px] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50 group border-4 border-casa-cream">
            <img 
              key={currentImage}
              src={SPACE_IMAGES[currentImage]} 
              alt="Interior aconchegante e iluminado" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-in fade-in duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-casa-cream via-transparent to-transparent opacity-80 pointer-events-none" />
            
            {/* Gallery Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevImage}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-casa-accent hover:bg-white hover:scale-110 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-casa-accent hover:bg-white hover:scale-110 transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Floating Label */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg pointer-events-none">
              <span className="font-serif text-casa-accent italic text-sm">
                Rua das Flores, 123 — São Paulo
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4">
            {SPACE_IMAGES.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === idx ? 'border-casa-accent scale-110 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
