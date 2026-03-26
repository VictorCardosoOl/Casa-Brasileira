import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function PassportSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.passport-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section id="passport" ref={containerRef} className="py-24 px-6 lg:pl-40 lg:pr-12 bg-casa-pink-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center md:text-left mb-16 passport-item">
          <h2 className="font-serif text-5xl md:text-7xl text-casa-accent leading-tight tracking-tighter uppercase">
            PASSAPORTE<br/>CASA BRASILEIRA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Steps */}
          <div className="relative pl-8 passport-item border-l-2 border-casa-pink-200 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-casa-accent border-4 border-casa-pink-50" />
              <h4 className="font-sans font-bold text-casa-text text-sm uppercase tracking-widest mb-2">Passo 1</h4>
              <p className="text-casa-text-light text-sm leading-relaxed">
                Peça seu prato favorito em qualquer uma de nossas unidades e solicite seu passaporte.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-casa-accent border-4 border-casa-pink-50" />
              <h4 className="font-sans font-bold text-casa-text text-sm uppercase tracking-widest mb-2">Passo 2</h4>
              <p className="text-casa-text-light text-sm leading-relaxed">
                Colete selos a cada visita. Complete 10 selos para desbloquear recompensas exclusivas.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-casa-accent border-4 border-casa-pink-50" />
              <h4 className="font-sans font-bold text-casa-text text-sm uppercase tracking-widest mb-2">Passo 3</h4>
              <p className="text-casa-text-light text-sm leading-relaxed">
                Troque seus selos por sobremesas, drinks ou descontos especiais em sua próxima refeição.
              </p>
            </div>
          </div>

          {/* Right: Images/Cards */}
          <div className="relative passport-item flex flex-col items-center lg:items-end">
            <div className="bg-casa-cream p-6 rounded-2xl shadow-xl shadow-casa-pink-200/50 max-w-sm w-full transform rotate-3 border border-casa-pink-100">
              <div className="border-2 border-dashed border-casa-pink-200 rounded-xl p-6 text-center">
                <h3 className="font-serif text-2xl text-casa-accent mb-4">Passaporte de Sabores</h3>
                <div className="grid grid-cols-5 gap-3 mb-6">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-casa-pink-200 flex items-center justify-center">
                      {i < 3 ? <div className="w-6 h-6 rounded-full bg-casa-accent" /> : null}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-casa-text-light uppercase tracking-widest">Complete e Ganhe</p>
              </div>
            </div>
            
            <div className="mt-8 text-center lg:text-right max-w-sm">
              <p className="text-casa-text-light text-sm mb-6">
                O Passaporte Casa Brasileira é a sua passagem para uma jornada gastronômica inesquecível. Participe e aproveite!
              </p>
              <div className="flex gap-4 justify-center lg:justify-end">
                <button className="px-6 py-2 bg-casa-accent text-white rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-casa-accent-hover transition-colors">
                  Saiba Mais
                </button>
                <button className="px-6 py-2 border border-casa-accent text-casa-accent rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-casa-accent hover:text-white transition-colors">
                  Regulamento
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
