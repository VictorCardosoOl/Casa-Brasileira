import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const MENU_ITEMS = [
  {
    category: "Entradas",
    items: [
      { name: "PÃO DE QUEIJO RECHEADO", description: "Queijo da canastra, pernil desfiado, geleia de pimenta.", price: "42" },
      { name: "DADINHOS DE TAPIOCA", description: "Tapioca, queijo coalho, melado de cana com especiarias.", price: "38" },
    ]
  },
  {
    category: "Pratos Principais",
    items: [
      { name: "MOQUECA DE BANANA DA TERRA", description: "Banana da terra, azeite de dendê, leite de coco, arroz de coco, farofa de dendê.", price: "78" },
      { name: "ARROZ DE PATO", description: "Pato confitado, arroz caldoso, chouriço, laranja, ervas frescas.", price: "92" },
      { name: "BIFE ANCHO", description: "Corte premium, purê de mandioquinha, farofa crocante, chimichurri.", price: "125" },
    ]
  },
  {
    category: "Sobremesas",
    items: [
      { name: "PUDIM DE LEITE", description: "Receita tradicional, calda de caramelo com flor de sal.", price: "28" },
      { name: "COCADA CREMOSA", description: "Coco fresco, leite condensado, sorvete de tapioca.", price: "32" },
    ]
  }
];

export default function MenuSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const dishImgRef = useRef<HTMLImageElement>(null);

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
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(menuListRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8')
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');

  }, { scope: containerRef });

  const handleItemHover = (isHovering: boolean) => {
    if (dishImgRef.current) {
      gsap.to(dishImgRef.current, {
        scale: isHovering ? 1.35 : 1.25,
        rotation: isHovering ? 2 : 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  };

  return (
    <section id="menu" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-0 bg-casa-cream relative overflow-hidden border-t border-casa-text/10">
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Content (Title + Menu List) */}
        <div className="lg:col-span-7 flex flex-col gap-16 relative z-10">
          
          <div ref={textRef} className="flex flex-col gap-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-accent">
              (NOSSO MENU)
            </span>
            <h2 className="font-editorial text-[10vw] lg:text-[6vw] leading-[0.9] text-casa-text uppercase tracking-tighter">
              UM MENU DESENHADO <br/>
              PARA SURPREENDER
            </h2>
          </div>

          <div ref={menuListRef} className="flex flex-col gap-16 md:pr-12">
            {MENU_ITEMS.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-8">
                <h3 className="font-editorial text-2xl md:text-3xl text-casa-text uppercase tracking-widest border-b border-casa-text/10 pb-4">
                  {section.category}
                </h3>
                <div className="flex flex-col gap-8">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex flex-col gap-2 cursor-pointer"
                      onMouseEnter={() => handleItemHover(true)}
                      onMouseLeave={() => handleItemHover(false)}
                    >
                      <div className="flex justify-between items-baseline gap-4">
                        <h4 className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-casa-text group-hover:text-casa-accent transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex-grow border-b border-dotted border-casa-text/20 relative top-[-4px]"></div>
                        <span className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-casa-text">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-casa-text-light/70 leading-relaxed max-w-[85%]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Image */}
        <div ref={imageRef} className="lg:col-span-5 relative h-[600px] md:h-full w-full flex flex-col items-end justify-start pt-12 md:pt-32">
          <div className="w-full h-[500px] absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-24 flex items-center justify-center">
            <img 
              ref={dishImgRef}
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-gourmet-food-transparent-png-image_13368549.png" 
              alt="Prato do Menu" 
              className="w-[120%] h-auto object-contain drop-shadow-2xl scale-125"
            />
          </div>
          
          {/* Book a Table Button */}
          <button className="relative z-20 bg-casa-cream/80 backdrop-blur-md px-8 py-4 flex items-center gap-4 hover:bg-casa-cream transition-colors mr-12 md:mr-24 mt-auto mb-12 border border-casa-text/10">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-casa-text">
              RESERVAR MESA
            </span>
            <span className="text-casa-accent font-light text-lg leading-none">+</span>
          </button>
        </div>

      </div>
    </section>
  );
}
