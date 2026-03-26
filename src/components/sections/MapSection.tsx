import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const LOCATIONS = [
  {
    city: 'São Paulo',
    districts: [
      {
        name: 'Jardins',
        address: 'Rua Oscar Freire, 1234 - Cerqueira César, SP',
        hours: '11h30 - 23h00'
      },
      {
        name: 'Itaim Bibi',
        address: 'Rua Joaquim Floriano, 567 - Itaim Bibi, SP',
        hours: '12h00 - 00h00'
      },
      {
        name: 'Pinheiros',
        address: 'Rua dos Pinheiros, 890 - Pinheiros, SP',
        hours: '11h30 - 23h30'
      }
    ]
  }
];

export default function MapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCity] = useState(LOCATIONS[0]);

  useGSAP(() => {
    gsap.from('.map-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section id="map" ref={containerRef} className="py-24 px-6 lg:pl-40 lg:pr-12 bg-casa-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center md:text-left mb-16 map-item">
          <h2 className="font-serif text-5xl md:text-7xl text-casa-text leading-tight tracking-tighter uppercase">
            NOSSA LOCALIZAÇÃO
          </h2>
          <p className="font-sans text-sm text-casa-text-light mt-4">
            Encontre a Casa Brasileira mais próxima de você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Map Graphic */}
          <div className="map-item relative aspect-square bg-casa-pink-50 rounded-[2rem] flex items-center justify-center p-8 border border-casa-pink-100">
            {/* Abstract Map Representation */}
            <div className="relative w-full h-full flex items-center justify-center">
               <svg viewBox="0 0 200 200" className="w-full h-full text-casa-pink-200 opacity-50" fill="currentColor">
                 <path d="M40,80 C40,30 160,30 160,80 C160,130 100,180 100,180 C100,180 40,130 40,80 Z" />
               </svg>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                 <MapPin className="w-12 h-12 text-casa-accent animate-bounce" />
                 <span className="font-sans font-bold text-casa-text mt-2 bg-white px-3 py-1 rounded-full shadow-md text-xs uppercase tracking-widest">
                   São Paulo
                 </span>
               </div>
            </div>
          </div>

          {/* Right: Locations List */}
          <div className="map-item flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-casa-pink-200 pb-4">
              <h3 className="font-serif text-3xl text-casa-text">{activeCity.city}</h3>
              <select className="bg-transparent border-none text-casa-text-light font-sans text-sm outline-none cursor-pointer">
                <option>Selecione o Bairro</option>
                {activeCity.districts.map(d => <option key={d.name}>{d.name}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-6">
              {activeCity.districts.map((district, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-casa-pink-100 pb-6">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-serif text-xl text-casa-text">{district.name}</h4>
                    <p className="text-casa-text-light text-sm">{district.address}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <span className="text-casa-accent font-bold text-sm">{district.hours}</span>
                    <button className="px-4 py-1.5 bg-casa-accent text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-casa-accent-hover transition-colors w-fit">
                      Ver no Mapa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
