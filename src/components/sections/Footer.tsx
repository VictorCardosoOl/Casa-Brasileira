import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#EAE6DF] py-16 px-6 md:px-12 min-h-[700px] flex flex-col justify-between overflow-hidden">
      {/* Tile Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] mix-blend-multiply grayscale"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 flex-grow items-center max-w-[1600px] mx-auto w-full">
        
        {/* Left: Form */}
        <div className="md:col-span-6 lg:col-span-5">
          <div className="border border-[#2B3A4A]/30 bg-white/60 backdrop-blur-md p-10 md:p-14 flex flex-col gap-10 shadow-sm">
            <div className="flex flex-col gap-5">
              <h3 className="font-sans font-bold text-[#2B3A4A] uppercase tracking-[0.15em] text-lg md:text-xl">
                Ficou com dúvidas?
              </h3>
              <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#2B3A4A]/70 leading-relaxed max-w-[280px]">
                Teremos o prazer em responder a cada uma delas. Entre em contato conosco.
              </p>
            </div>

            <form className="flex flex-col gap-8">
              <input 
                type="text" 
                placeholder="SEU NOME" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/20 pb-3 text-[11px] focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/40 uppercase tracking-[0.15em] text-[#2B3A4A] transition-colors"
              />
              <input 
                type="tel" 
                placeholder="NÚMERO DE TELEFONE" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/20 pb-3 text-[11px] focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/40 uppercase tracking-[0.15em] text-[#2B3A4A] transition-colors"
              />
              <input 
                type="text" 
                placeholder="SUA DÚVIDA/COMENTÁRIO" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/20 pb-3 text-[11px] focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/40 uppercase tracking-[0.15em] text-[#2B3A4A] transition-colors"
              />
              <button 
                type="button"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2B3A4A] text-left hover:text-casa-accent transition-colors mt-4 w-fit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Middle: Links & Socials */}
        <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center gap-10 md:pl-12">
          <nav className="flex flex-col gap-6">
            <a href="#about" className="font-sans font-bold uppercase tracking-[0.2em] text-[#2B3A4A] text-[11px] hover:text-casa-accent transition-colors">
              Sobre nós
            </a>
            <a href="#menu" className="font-sans font-bold uppercase tracking-[0.2em] text-[#2B3A4A] text-[11px] hover:text-casa-accent transition-colors">
              Menu
            </a>
            <a href="#contact" className="font-sans font-bold uppercase tracking-[0.2em] text-[#2B3A4A] text-[11px] hover:text-casa-accent transition-colors">
              Contatos
            </a>
          </nav>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full border border-[#2B3A4A]/40 flex items-center justify-center text-[#2B3A4A] hover:bg-[#2B3A4A] hover:text-white hover:border-[#2B3A4A] transition-all">
              <Send className="w-3.5 h-3.5 -ml-0.5" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#2B3A4A]/40 flex items-center justify-center text-[#2B3A4A] hover:bg-[#2B3A4A] hover:text-white hover:border-[#2B3A4A] transition-all">
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Huge Text */}
        <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-center items-end text-right mt-16 md:mt-0 select-none">
          <h2 className="font-editorial text-[25vw] md:text-[11vw] lg:text-[12vw] leading-[0.75] text-casa-accent uppercase tracking-tighter">
            CASA
          </h2>
          <h2 className="font-editorial text-[25vw] md:text-[11vw] lg:text-[12vw] leading-[0.75] text-casa-accent uppercase tracking-tighter flex items-baseline gap-2 md:gap-4">
            <span className="font-sans font-light text-[14vw] md:text-[6vw] lg:text-[7vw] text-[#2B3A4A]/80">&</span> BRASIL
          </h2>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-20 max-w-[1600px] mx-auto w-full">
        <p className="font-sans font-bold uppercase tracking-[0.2em] text-[#2B3A4A] text-[10px] md:text-[11px]">
          Esperamos sua visita!
        </p>
      </div>
    </footer>
  );
}
