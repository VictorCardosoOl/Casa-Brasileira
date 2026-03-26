import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin } from 'lucide-react';

const DISTRICTS = [
  { id: 'centro', name: 'Centro Histórico', path: 'M150,100 L220,80 L260,140 L180,170 Z', cx: 200, cy: 120 },
  { id: 'jardins', name: 'Jardins', path: 'M260,140 L340,120 L360,200 L280,220 Z', cx: 310, cy: 170 },
  { id: 'pinheiros', name: 'Pinheiros', path: 'M180,170 L280,220 L240,300 L140,260 Z', cx: 210, cy: 240 },
  { id: 'vila-madalena', name: 'Vila Madalena', path: 'M80,150 L180,170 L140,260 L60,220 Z', cx: 115, cy: 200 },
  { id: 'moema', name: 'Moema', path: 'M280,220 L360,200 L380,280 L300,320 Z', cx: 330, cy: 255 },
];

export default function MapSection() {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (selectedDistrict && tooltipRef.current) {
      gsap.fromTo(tooltipRef.current, 
        { opacity: 0, y: 10, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, [selectedDistrict]);

  const handleDistrictClick = (id: string) => {
    setSelectedDistrict(id === selectedDistrict ? null : id);
  };

  const selectedData = DISTRICTS.find(d => d.id === selectedDistrict);

  return (
    <section id="map" ref={containerRef} className="py-32 px-6 md:px-12 bg-casa-cream relative overflow-hidden border-t border-casa-text/10">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-accent">
            (NOSSA ORIGEM)
          </span>
          <h2 className="font-editorial text-[10vw] lg:text-[6vw] leading-[0.9] text-casa-text uppercase tracking-tight">
            MAPA DE <br/>
            INSPIRAÇÕES
          </h2>
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-casa-text-light leading-relaxed max-w-2xl mt-4">
            EXPLORE O MAPA ABSTRATO DAS NOSSAS RAÍZES. CLIQUE EM UM DISTRITO PARA DESCOBRIR SUA INFLUÊNCIA EM NOSSA CULINÁRIA.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-video bg-casa-cream border border-casa-text/10 flex items-center justify-center p-4 md:p-12">
          
          <svg viewBox="0 0 450 400" className="w-full h-full overflow-visible">
            {DISTRICTS.map((district) => {
              const isSelected = selectedDistrict === district.id;
              return (
                <g 
                  key={district.id} 
                  onClick={() => handleDistrictClick(district.id)} 
                  className="cursor-pointer group"
                >
                  <path
                    d={district.path}
                    className={`transition-all duration-300 ${
                      isSelected 
                        ? 'fill-casa-accent/5 stroke-casa-accent stroke-[2]' 
                        : 'fill-transparent stroke-casa-text/20 stroke-[1] group-hover:fill-casa-accent/5 group-hover:stroke-casa-accent/50'
                    }`}
                  />
                  <circle 
                    cx={district.cx} 
                    cy={district.cy} 
                    r={isSelected ? "4" : "3"} 
                    className={`transition-all duration-300 ${
                      isSelected 
                        ? 'fill-casa-accent' 
                        : 'fill-casa-text/20 group-hover:fill-casa-accent/50'
                    }`}
                  />
                </g>
              );
            })}
          </svg>

          {/* Tooltip */}
          {selectedDistrict && selectedData && (
            <div 
              ref={tooltipRef}
              className="absolute z-10 bg-casa-cream px-6 py-4 border border-casa-text/10 flex items-center gap-4 pointer-events-none min-w-[200px]"
              style={{
                left: `calc(${selectedData.cx / 450 * 100}%)`,
                top: `calc(${selectedData.cy / 400 * 100}%)`,
                transform: 'translate(-50%, -100%)',
                marginTop: '-16px'
              }}
            >
              <div className="w-8 h-8 rounded-full bg-casa-accent/10 flex items-center justify-center text-casa-accent shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[8px] font-sans font-medium uppercase tracking-[0.2em] text-casa-text-light mb-1">DISTRITO</p>
                <p className="font-editorial text-xl text-casa-text leading-none uppercase tracking-tight">{selectedData.name}</p>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-casa-cream border-b border-r border-casa-text/10 rotate-45"></div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
