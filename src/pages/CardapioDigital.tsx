import { useEffect, useState } from 'react';
import { useDynamicTitle } from '../hooks/useDynamicTitle';
import { useGoogleSheetsMenu } from '../hooks/useGoogleSheetsMenu';
import FadeIn from '../components/animations/FadeIn';

const FALLBACK_MENU = [
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

export default function CardapioDigital() {
  useDynamicTitle("Menu Digital");
  const { menu, loading } = useGoogleSheetsMenu(FALLBACK_MENU);
  const [lang, setLang] = useState<'PT' | 'EN' | 'ES'>('PT');

  // Garante que a página inicie no topo, sem animações complexas de scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-casa-cream selection:bg-casa-accent/20 selection:text-casa-accent flex flex-col">
      
      <div className="flex-grow px-6 py-12">
        {/* Language Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        {['PT', 'EN', 'ES'].map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l as any)}
            className={`font-sans text-[10px] tracking-[0.2em] transition-colors ${lang === l ? 'text-casa-accent font-bold' : 'text-casa-text-light hover:text-casa-text'}`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Header Simples do Cardápio */}
      <FadeIn>
        <header className="flex flex-col items-center justify-center mb-16 text-center">
          <h1 className="font-editorial text-4xl text-casa-text uppercase tracking-widest">
            CASA BRASILEIRA
          </h1>
          <p className="font-sans text-[10px] tracking-[0.3em] text-casa-text-light uppercase mt-2">
            {lang === 'EN' ? 'Digital Menu' : lang === 'ES' ? 'Menú Digital' : 'Menu Digital'}
          </p>
        </header>
      </FadeIn>

      {/* Lista de Itens */}
      <main className="max-w-4xl mx-auto flex flex-col gap-12">
        {loading ? (
          <div className="text-center font-sans text-xs tracking-widest text-casa-text-light uppercase py-12">
            Carregando menu...
          </div>
        ) : (
          menu.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <section className="flex flex-col gap-6">
                <h2 className="font-editorial text-2xl text-casa-accent uppercase tracking-widest border-b border-casa-text/10 pb-2 text-center">
                  {section.category}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col gap-1">
                      <div className="flex justify-between items-end gap-4">
                        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-casa-text">
                          {item.name}
                        </h3>
                        <div className="flex-grow border-b border-dotted border-casa-text/20 mb-1"></div>
                        <span className="font-sans text-xs font-semibold tracking-[0.1em] text-casa-text whitespace-nowrap text-right">
                          {item.price.includes('R$') ? item.price : `R$ ${item.price}`}
                        </span>
                      </div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-casa-text-light/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          ))
        )}
      </main>

      </div>

      {/* Footer Simples */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 mt-auto">
        <FadeIn delay={0.3}>
          <div className="text-center max-w-4xl mx-auto">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] leading-relaxed">
              {lang === 'EN' ? '10% service charge not included.' : lang === 'ES' ? 'Tasa de servicio del 10% no incluida.' : 'Taxa de serviço de 10% não inclusa.'}<br/>
              {lang === 'EN' ? 'Please inform the waiter of any dietary restrictions.' : lang === 'ES' ? 'Si tiene alguna restricción alimentaria, informe al camarero.' : 'Se tiver alguma restrição alimentar, informe o garçom.'}
            </p>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
}
