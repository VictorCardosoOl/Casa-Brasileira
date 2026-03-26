import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#EAE6DF] pt-20 pb-10 px-6 md:px-16 min-h-[800px] flex flex-col justify-between overflow-hidden">
      {/* Tile Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] mix-blend-multiply grayscale"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Massive Background Text */}
      <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none select-none overflow-hidden flex justify-center">
        <h2 className="font-editorial text-[22vw] leading-none text-[#2B3A4A]/10 uppercase tracking-tighter whitespace-nowrap">
          CASA BRASILEIRA
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-[1400px] mx-auto w-full h-full flex-grow">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-10">
            <nav className="flex flex-col gap-5">
              <a href="#about" className="font-sans font-medium uppercase tracking-[0.1em] text-[#2B3A4A] text-xs hover:text-[#5C3D2E] transition-colors">
                Sobre nós
              </a>
              <a href="#menu" className="font-sans font-medium uppercase tracking-[0.1em] text-[#2B3A4A] text-xs hover:text-[#5C3D2E] transition-colors">
                Menu
              </a>
              <a href="#contact" className="font-sans font-medium uppercase tracking-[0.1em] text-[#2B3A4A] text-xs hover:text-[#5C3D2E] transition-colors">
                Contatos
              </a>
            </nav>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#5C3D2E] flex items-center justify-center text-white hover:bg-[#4A3125] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#5C3D2E] flex items-center justify-center text-white hover:bg-[#4A3125] transition-all">
                <Send className="w-5 h-5 -ml-1" />
              </a>
            </div>
          </div>

          <div className="mt-32 md:mt-auto pb-20">
            <h3 className="font-sans font-bold uppercase tracking-[0.05em] text-[#2B3A4A] text-2xl md:text-3xl leading-snug">
              COM ALEGRIA<br />
              ESPERAMOS SUA VISITA!
            </h3>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col justify-start md:items-end w-full">
          <div className="w-full max-w-md flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-[#2B3A4A] uppercase tracking-[0.05em] text-2xl md:text-3xl">
                Ficou alguma dúvida?
              </h3>
              <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.1em] text-[#2B3A4A]/70 leading-relaxed">
                Teremos o prazer em responder a cada uma delas.<br/>Fale conosco!
              </p>
            </div>

            <form className="flex flex-col gap-8 mt-4">
              <input 
                type="text" 
                placeholder="SEU NOME" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/40 pb-3 text-xs focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/60 uppercase tracking-[0.1em] text-[#2B3A4A] transition-colors"
              />
              <input 
                type="tel" 
                placeholder="NÚMERO DE TELEFONE" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/40 pb-3 text-xs focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/60 uppercase tracking-[0.1em] text-[#2B3A4A] transition-colors"
              />
              <input 
                type="text" 
                placeholder="SUA DÚVIDA/COMENTÁRIO" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/40 pb-3 text-xs focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/60 uppercase tracking-[0.1em] text-[#2B3A4A] transition-colors"
              />
              <button 
                type="button"
                className="mt-4 w-full bg-[#5C3D2E] text-white text-xs font-bold uppercase tracking-[0.15em] py-4 rounded-full hover:bg-[#4A3125] transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

      </div>
    </footer>
  );
}
