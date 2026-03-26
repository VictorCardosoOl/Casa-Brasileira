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
          <p className="text-casa-text-light font-light leading-relaxed text-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="menu" ref={containerRef} className="py-32 px-6 md:px-12 bg-casa-cream relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-casa-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Nossa Cozinha
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-casa-text leading-tight mb-6">
            Cardápio
          </h2>
          <p className="text-casa-text-light max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A tradição brasileira reinventada com técnica e ingredientes premium. Dos pratos do dia aos grandes clássicos.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-sm font-bold uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'border-casa-accent text-casa-accent' 
                  : 'border-transparent text-casa-text-light hover:text-casa-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          
          {/* PRATOS DO DIA (Layout Especial com Imagem) */}
          {activeCategory === 'diario' && (
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Navigation (Tabs) - Minimalist List */}
              <div className="lg:w-1/3 flex flex-col w-full border-l border-casa-pink-200 pl-8 relative">
                {/* Active Indicator Line */}
                <div 
                  className="absolute left-[-1px] w-[3px] bg-casa-accent transition-all duration-300 ease-in-out"
                  style={{ 
                    height: '4rem', 
                    top: `calc(${activeDay * 5.5}rem + 1.5rem)` 
                  }}
                />

                {WEEKLY_MENU.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveDay(index)}
                    className={`group flex items-center justify-between py-6 pr-4 transition-all duration-300 text-left w-full ${
                      activeDay === index 
                        ? 'pl-4' 
                        : 'hover:pl-2 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-widest block mb-1 transition-colors ${
                        activeDay === index ? 'text-casa-accent' : 'text-casa-text-light'
                      }`}>
                        {item.day}
                      </span>
                      <span className={`font-serif text-2xl transition-colors ${
                        activeDay === index ? 'text-casa-text' : 'text-casa-text/80'
                      }`}>
                        {item.dish}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Content Display - Editorial Style */}
              <div className="lg:w-2/3 w-full relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  
                  {/* Image Side */}
                  <div ref={imageRef} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50 group">
                    <img 
                      src={WEEKLY_MENU[activeDay].image} 
                      alt={WEEKLY_MENU[activeDay].dish}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-casa-text/30 to-transparent mix-blend-multiply" />
                  </div>

                  {/* Details Side */}
                  <div ref={contentRef} className="flex flex-col justify-center">
                    <div className="flex gap-2 mb-8">
                      {WEEKLY_MENU[activeDay].tags.map(tag => (
                        <span key={tag} className="px-4 py-1 border border-casa-pink-200 text-casa-accent text-xs font-bold uppercase tracking-wide rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-4xl text-casa-text mb-6 leading-tight">
                      {WEEKLY_MENU[activeDay].dish}
                    </h3>
                    
                    <p className="text-casa-text-light leading-relaxed mb-10 text-lg font-light">
                      {WEEKLY_MENU[activeDay].description}
                    </p>

                    <div className="flex items-center justify-between border-t border-casa-pink-100 pt-8">
                      <div className="flex items-center gap-3 text-casa-text-light">
                        <Clock className="w-5 h-5 text-casa-accent" />
                        <span className="text-sm font-medium tracking-wide">11h30 — 15h</span>
                      </div>
                      <button className="group flex items-center gap-2 text-casa-accent font-bold text-sm uppercase tracking-widest hover:text-casa-accent-hover transition-colors">
                        Reservar
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

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
