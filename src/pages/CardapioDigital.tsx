import { useEffect } from 'react';

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

export default function CardapioDigital() {
  // Garante que a página inicie no topo, sem animações complexas de scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-casa-cream px-6 py-12 selection:bg-casa-accent/20 selection:text-casa-accent">
      {/* Header Simples do Cardápio */}
      <header className="flex flex-col items-center justify-center mb-16 text-center">
        <h1 className="font-editorial text-4xl text-casa-text uppercase tracking-widest">
          CASA BRASILEIRA
        </h1>
        <p className="font-sans text-[10px] tracking-[0.3em] text-casa-text-light uppercase mt-2">
          Menu Digital
        </p>
      </header>

      {/* Lista de Itens */}
      <main className="max-w-2xl mx-auto flex flex-col gap-12">
        {MENU_ITEMS.map((section, idx) => (
          <section key={idx} className="flex flex-col gap-6">
            <h2 className="font-editorial text-2xl text-casa-accent uppercase tracking-widest border-b border-casa-text/10 pb-2 text-center">
              {section.category}
            </h2>
            
            <div className="flex flex-col gap-6">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col gap-1">
                  <div className="flex justify-between items-end gap-4">
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-casa-text">
                      {item.name}
                    </h3>
                    <div className="flex-grow border-b border-dotted border-casa-text/20 mb-1"></div>
                    <span className="font-sans text-xs font-semibold tracking-[0.1em] text-casa-text">
                      R$ {item.price}
                    </span>
                  </div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-casa-text-light/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer Simples */}
      <footer className="mt-20 text-center border-t border-casa-text/10 pt-8">
        <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-casa-text-light">
          Taxa de serviço de 10% não inclusa.<br/>
          Se tiver alguma restrição alimentar, informe o garçom.
        </p>
      </footer>
    </div>
  );
}
