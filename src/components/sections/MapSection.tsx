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
    <section id="map" ref={containerRef} className="py-32 px-6 md:px-12 bg-casa-cream relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-casa-text mb-4">
            Mapa de Inspirações
          </h2>
          <p className="text-casa-text-light font-light max-w-2xl mx-auto">
            Explore o mapa abstrato das nossas raízes. Clique em um distrito para descobrir sua influência em nossa culinária.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-video bg-white/50 rounded-3xl border border-casa-pink-200/50 flex items-center justify-center p-4 md:p-12 shadow-sm">
          
          <svg viewBox="0 0 450 400" className="w-full h-full drop-shadow-sm overflow-visible">
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
                        ? 'fill-casa-accent/10 stroke-casa-accent stroke-[3]' 
                        : 'fill-casa-cream stroke-casa-pink-200 stroke-[1.5] group-hover:fill-casa-pink-50 group-hover:stroke-casa-accent/50'
                    }`}
                  />
                  <circle 
                    cx={district.cx} 
                    cy={district.cy} 
                    r={isSelected ? "6" : "4"} 
                    className={`transition-all duration-300 ${
                      isSelected 
                        ? 'fill-casa-accent' 
                        : 'fill-casa-pink-200 group-hover:fill-casa-accent/50 group-hover:r-5'
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
              className="absolute z-10 bg-white px-5 py-4 rounded-2xl shadow-xl shadow-casa-pink-200/40 border border-casa-pink-100 flex items-center gap-4 pointer-events-none min-w-[200px]"
              style={{
                left: `calc(${selectedData.cx / 450 * 100}%)`,
                top: `calc(${selectedData.cy / 400 * 100}%)`,
                transform: 'translate(-50%, -100%)',
                marginTop: '-16px'
              }}
            >
              <div className="w-10 h-10 rounded-full bg-casa-pink-50 flex items-center justify-center text-casa-accent shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-casa-text-light mb-1">Distrito</p>
                <p className="font-serif text-xl text-casa-text leading-none">{selectedData.name}</p>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-casa-pink-100 rotate-45"></div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
