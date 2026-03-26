import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#EAE6DF] py-12 px-6 md:px-12 min-h-[600px] flex flex-col justify-between overflow-hidden">
      {/* Tile Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: '250px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 flex-grow items-center">
        
        {/* Left: Form */}
        <div className="md:col-span-6 lg:col-span-5">
          <div className="border border-[#2B3A4A] bg-white/50 backdrop-blur-sm p-8 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans font-bold text-[#2B3A4A] uppercase tracking-wider text-xl">
                Ficou com dúvidas?
              </h3>
              <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-[#2B3A4A]/80 leading-relaxed max-w-sm">
                Teremos o prazer em responder a cada uma delas. Entre em contato conosco.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <input 
                type="text" 
                placeholder="SEU NOME" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/30 pb-2 text-sm focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/50 uppercase tracking-widest text-[#2B3A4A]"
              />
              <input 
                type="tel" 
                placeholder="NÚMERO DE TELEFONE" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/30 pb-2 text-sm focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/50 uppercase tracking-widest text-[#2B3A4A]"
              />
              <input 
                type="text" 
                placeholder="SUA DÚVIDA/COMENTÁRIO" 
                className="w-full bg-transparent border-b border-[#2B3A4A]/30 pb-2 text-sm focus:outline-none focus:border-[#2B3A4A] placeholder:text-[#2B3A4A]/50 uppercase tracking-widest text-[#2B3A4A]"
              />
              <button 
                type="button"
                className="text-xs font-bold uppercase tracking-widest text-[#2B3A4A] text-left hover:text-casa-accent transition-colors mt-2 w-fit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Middle: Links & Socials */}
        <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center gap-8 md:pl-8">
          <nav className="flex flex-col gap-6">
            <a href="#about" className="font-sans font-bold uppercase tracking-widest text-[#2B3A4A] text-sm hover:text-casa-accent transition-colors">
              Sobre nós
            </a>
            <a href="#menu" className="font-sans font-bold uppercase tracking-widest text-[#2B3A4A] text-sm hover:text-casa-accent transition-colors">
              Menu
            </a>
            <a href="#contact" className="font-sans font-bold uppercase tracking-widest text-[#2B3A4A] text-sm hover:text-casa-accent transition-colors">
              Contatos
            </a>
          </nav>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#2B3A4A] flex items-center justify-center text-[#2B3A4A] hover:bg-[#2B3A4A] hover:text-white transition-all">
              <Send className="w-4 h-4 -ml-1" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#2B3A4A] flex items-center justify-center text-[#2B3A4A] hover:bg-[#2B3A4A] hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Huge Text */}
        <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-center items-end text-right mt-12 md:mt-0">
          <h2 className="font-editorial text-[22vw] md:text-[9vw] lg:text-[10vw] leading-[0.8] text-casa-accent uppercase tracking-tighter">
            CASA
          </h2>
          <h2 className="font-editorial text-[22vw] md:text-[9vw] lg:text-[10vw] leading-[0.8] text-casa-accent uppercase tracking-tighter flex items-baseline gap-2 md:gap-4">
            <span className="font-sans font-light text-[12vw] md:text-[5vw] lg:text-[6vw]">&</span> BRASIL
          </h2>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-16">
        <p className="font-sans font-bold uppercase tracking-widest text-[#2B3A4A] text-sm md:text-base">
          Esperamos sua visita!
        </p>
      </div>
    </footer>
  );
}
