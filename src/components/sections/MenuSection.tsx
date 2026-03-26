import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';

const RECIPES = [
  {
    id: 'traditional',
    label: 'Pratos Tradicionais',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop',
    ingredients: [
      'Feijoada Completa',
      'Virado à Paulista',
      'Baião de Dois',
      'Moqueca Baiana',
      'Picadinho de Carne',
      'Galeto Assado',
      'Farofa Crocante'
    ]
  },
  {
    id: 'modern',
    label: 'Clássicos Modernos',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2732&auto=format&fit=crop',
    ingredients: [
      'Lasanha Artesanal',
      'Nhoque de Capri',
      'Carbonara Perfeita',
      'Risoto de Limão Siciliano',
      'Parmegiana Crocante',
      'Strogonoff Clássico'
    ]
  },
  {
    id: 'secret',
    label: 'Nossas Entradas',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop',
    ingredients: [
      'Bolinho de Bacalhau',
      'Dadinho de Tapioca',
      'Pastel de Costela',
      'Caldinho de Feijão',
      'Queijo Coalho Tostado',
      'Mandioca Frita'
    ]
  }
];

export default function MenuSection() {
  const [activeRecipe, setActiveRecipe] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 0.9, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.5)' }
    );
  }, { scope: containerRef, dependencies: [activeRecipe] });

  return (
    <section id="menu" ref={containerRef} className="py-32 px-6 lg:pl-40 lg:pr-12 bg-casa-cream relative overflow-hidden flex flex-col items-center">
      
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="font-serif text-[24vw] leading-[0.8] text-casa-accent/10 tracking-tighter whitespace-nowrap">
          CARDÁPIO
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 w-full border-b border-casa-pink-200/50 pb-4">
          {RECIPES.map((recipe, idx) => (
            <button
              key={recipe.id}
              onClick={() => setActiveRecipe(idx)}
              className={`font-serif text-lg md:text-2xl transition-all duration-300 relative ${
                activeRecipe === idx 
                  ? 'text-casa-accent font-bold' 
                  : 'text-casa-text-light hover:text-casa-text'
              }`}
            >
              {recipe.label}
              {activeRecipe === idx && (
                <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-casa-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full">
          
          {/* Left: Title */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-casa-text-light mb-2">Seleção de</span>
            <h3 className="font-serif text-4xl md:text-5xl text-casa-accent leading-tight">
              {RECIPES[activeRecipe].label}
            </h3>
          </div>

          {/* Center: Image */}
          <div ref={imageRef} className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl shadow-casa-pink-200/50 border-8 border-casa-cream z-10 order-1 lg:order-2">
            <img 
              src={RECIPES[activeRecipe].image} 
              alt={RECIPES[activeRecipe].label}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Ingredients List */}
          <div className="flex flex-col items-center lg:items-start order-3">
            <div className="grid grid-cols-1 gap-y-3 text-casa-text font-sans text-sm md:text-base">
              {RECIPES[activeRecipe].ingredients.map((ingredient, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-casa-accent" />
                  <span className="font-medium">{ingredient}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8 text-casa-text-light">
              <Instagram className="w-4 h-4 cursor-pointer hover:text-casa-accent transition-colors" />
              <Facebook className="w-4 h-4 cursor-pointer hover:text-casa-accent transition-colors" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
