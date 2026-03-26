import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Clock } from 'lucide-react';
import { useRef, useState } from 'react';

// --- DADOS DO MENU ---

const CATEGORIES = [
  { id: 'diario', label: 'Pratos do Dia' },
  { id: 'classicos', label: 'Clássicos Diários' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'sobremesas', label: 'Sobremesas' },
  { id: 'bebidas', label: 'Bebidas' }
];

const WEEKLY_MENU = [
  {
    id: 'segunda',
    day: 'Segunda-feira',
    dish: 'Virado à Paulista',
    description: 'O clássico paulistano elevado à perfeição. Tutu de feijão cremoso, bisteca suína marinada por 12h, ovo estalado com gema mole, couve manteiga crocante e banana frita sequinha.',
    tags: ['Porco & Feijão', 'Tradição'],
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2513&auto=format&fit=crop', 
  },
  {
    id: 'terca',
    day: 'Terça-feira',
    dish: 'Bife à Rolê',
    description: 'Memória afetiva em cada garfada. Coxão mole macio recheado com bacon artesanal e cenoura, cozido lentamente em molho de tomate rústico e vinho tinto. Acompanha purê de batatas aveludado.',
    tags: ['Carne Bovinas', 'Conforto'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop', 
  },
  {
    id: 'quarta',
    day: 'Quarta-feira',
    dish: 'Feijoada Completa',
    description: 'A rainha da semana. Seleção de carnes nobres, feijão preto caldoso, farofa de alho crocante, laranja bahia e aquele torresmo que faz barulho. Uma experiência de texturas e sabores.',
    tags: ['Porco & Feijão', 'Brasilidade'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop', 
  },
  {
    id: 'quinta',
    day: 'Quinta-feira',
    dish: 'Massas Artesanais',
    description: 'Homenagem à influência italiana no Brasil. Massas frescas feitas na casa, com molhos que variam semanalmente: do ragu de costela ao pesto de manjericão fresco da horta.',
    tags: ['Trigo & Ovos', 'Artesanal'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2732&auto=format&fit=crop', 
  },
  {
    id: 'sexta',
    day: 'Sexta-feira',
    dish: 'Peixes & Frutos do Mar',
    description: 'Leveza para o fim de semana. Peixe fresco do dia, preparado com crosta de ervas ou moqueca capixaba, acompanhado de pirão e arroz de coco.',
    tags: ['Pescados', 'Frescor'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2670&auto=format&fit=crop', 
  },
];

const CLASSICOS = [
  { name: 'Picadinho', desc: 'Corte de mignon na ponta da faca, caldo rico, arroz branco, feijão, farofa de banana, ovo poché e pastel de queijo.' },
  { name: 'Strogonoff', desc: 'De carne ou frango, com cogumelos frescos, creme de leite fresco, arroz branco e batata palha artesanal.' },
  { name: 'Baião de 2', desc: 'Feijão de corda, arroz, carne seca desfiada, queijo coalho tostado, bacon e manteiga de garrafa.' },
  { name: 'Parmegiana', desc: 'Mignon ou frango empanado crocante, gratinado com queijo curado e molho rústico de tomates. Acompanha arroz e fritas.' },
  { name: 'Galeto Assado', desc: 'Marinado em ervas frescas e assado lentamente na brasa. Acompanha polenta cremosa e brócolis tostado.' },
  { name: 'Lasanha Artesanal', desc: 'Massa fresca montada na hora. Escolha seu molho: Bechamel com Gorgonzola e Brócolis, Sugo de tomates assados ou Bolonhesa clássica.' },
  { name: 'Nhoque de Capri', desc: 'Massa leve de batata, molho de tomates frescos, manjericão e stracciatella derretida.' },
  { name: 'Carbonara', desc: 'Pancetta artesanal crocante, gemas caipiras, pecorino romano e pimenta preta moída na hora.' },
  { name: 'Churrasco Misto', desc: 'Cortes nobres assados na brasa, acompanhados de farofa de ovos, vinagrete da casa e pão de alho.' },
  { name: 'Moqueca', desc: 'Peixe branco e camarões em caldo rico de leite de coco, azeite de dendê e coentro. Acompanha arroz e pirão.' },
  { name: 'Risoto', desc: 'Arroz arbório cremoso finalizado com manteiga e parmesão. Consulte as opções do chef (funghi, limão siciliano ou queijos).' },
];

const ENTRADAS = [
  { name: 'Bolinho de Bacalhau', desc: 'Receita de família, crocante por fora e cremoso por dentro. Porção com 6 unidades.' },
  { name: 'Dadinho de Tapioca', desc: 'Com queijo coalho, fritos até a perfeição. Acompanha geleia de pimenta agridoce.' },
  { name: 'Pastel de Costela', desc: 'Massa fina e crocante recheada com costela desfiada cozida por 12 horas.' },
  { name: 'Caldinho de Feijão', desc: 'Servido em caneca esmaltada com torresmo moído, cebolinha e pimenta biquinho.' },
];

const SOBREMESAS = [
  { name: 'Pudim de Leite', desc: 'Clássico sem furinhos, denso, com fava de baunilha e calda de caramelo escuro.' },
  { name: 'Cocada de Forno', desc: 'Servida quente, com bordas crocantes e uma bola de sorvete de tapioca artesanal.' },
  { name: 'Brigadeirão', desc: 'Cremoso, feito com chocolate 70% cacau e finalizado com granulado belga.' },
  { name: 'Torta de Limão', desc: 'Massa sablée amanteigada, creme de limão siciliano e merengue suíço tostado.' },
];

const BEBIDAS = [
  { name: 'Caipirinha Clássica', desc: 'Limão cravo, cachaça envelhecida em amburana, açúcar e muito gelo.' },
  { name: 'Caju Amigo', desc: 'Compota de caju da casa, gin premium, suco de limão e toque de cajuína.' },
  { name: 'Mate da Casa', desc: 'Chá mate gelado batido com limão siciliano e folhas de hortelã fresca.' },
  { name: 'Sucos Naturais', desc: 'Laranja, Maracujá, Abacaxi com Hortelã, Limonada Suíça.' },
];

// --- COMPONENT ---

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('diario');
  const [activeDay, setActiveDay] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Animação ao trocar de categoria ou dia
  useGSAP(() => {
    const tl = gsap.timeline();
    
    if (activeCategory === 'diario') {
      tl.fromTo([contentRef.current, imageRef.current], 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
      );
    } else {
      tl.fromTo(listRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, { scope: containerRef, dependencies: [activeCategory, activeDay] });

  const renderList = (items: {name: string, desc: string}[]) => (
    <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full pt-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col border-b border-casa-pink-200/50 pb-6 group">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-serif text-2xl text-casa-text group-hover:text-casa-accent transition-colors">
              {item.name}
            </h4>
          </div>
          <p className="text-casa-text-light font-light leading-relaxed text-sm group-hover:scale-[1.02] transition-transform duration-300 origin-left">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="menu" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-cream relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="font-editorial text-[22vw] leading-[0.8] text-casa-accent/5 tracking-tighter whitespace-nowrap">
          MENU
        </h2>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 border-b border-casa-pink-200/50 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-sm md:text-base font-serif italic transition-all duration-300 relative ${
                activeCategory === cat.id 
                  ? 'text-casa-accent' 
                  : 'text-casa-text-light hover:text-casa-text'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="absolute -bottom-[17px] left-0 w-full h-[1px] bg-casa-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          
          {/* PRATOS DO DIA (Layout Especial com Imagem Central) */}
          {activeCategory === 'diario' && (
            <div className="flex flex-col items-center">
              
              {/* Day Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                 {WEEKLY_MENU.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveDay(index)}
                      className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                        activeDay === index ? 'bg-casa-accent text-white' : 'bg-casa-pink-50 text-casa-text-light hover:bg-casa-pink-100'
                      }`}
                    >
                      {item.day.split('-')[0]}
                    </button>
                 ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                
                {/* Left Text */}
                <div ref={contentRef} className="lg:col-span-4 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
                  <h3 className="font-serif text-4xl md:text-5xl text-casa-text leading-tight">
                    {WEEKLY_MENU[activeDay].dish}
                  </h3>
                  <p className="text-casa-text-light leading-relaxed text-lg font-light">
                    {WEEKLY_MENU[activeDay].description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {WEEKLY_MENU[activeDay].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-casa-pink-50 text-casa-accent text-xs font-bold uppercase tracking-wide rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Central Image */}
                <div ref={imageRef} className="lg:col-span-4 relative aspect-[3/4] rounded-t-full rounded-b-full overflow-hidden shadow-2xl shadow-casa-pink-200/50 border-8 border-casa-cream z-10 order-1 lg:order-2 group">
                  <img 
                    src={WEEKLY_MENU[activeDay].image} 
                    alt={WEEKLY_MENU[activeDay].dish}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Right Info */}
                <div className="lg:col-span-4 flex flex-col gap-8 text-center lg:text-left order-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-casa-accent mb-2 block">Horário</span>
                    <p className="font-serif text-xl text-casa-text">11h30 — 15h00</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-casa-accent mb-2 block">Disponibilidade</span>
                    <p className="font-serif text-xl text-casa-text">Apenas {WEEKLY_MENU[activeDay].day}</p>
                  </div>
                   <button className="w-fit mx-auto lg:mx-0 px-8 py-3 bg-casa-text text-white rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-casa-accent transition-colors">
                    Reservar Mesa
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* OUTRAS CATEGORIAS (Grid de Texto Elegante) */}
          {activeCategory === 'classicos' && renderList(CLASSICOS)}
          {activeCategory === 'entradas' && renderList(ENTRADAS)}
          {activeCategory === 'sobremesas' && renderList(SOBREMESAS)}
          {activeCategory === 'bebidas' && renderList(BEBIDAS)}

        </div>
      </div>
    </section>
  );
}
