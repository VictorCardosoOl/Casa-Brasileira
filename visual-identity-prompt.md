# Prompt de Identidade Visual - Casa Brasileira

Este prompt foi desenvolvido para replicar fielmente a estética minimalista, elegante e editorial do projeto "Casa Brasileira". Ele contém todos os detalhes técnicos de cores, fontes, layout e comportamento para ser usado como referência em novos projetos no AI Studio.

---

## 🎨 Paleta de Cores (Earthy & Minimalist)
- **Base (Creme Off-White):** `#F4F3EE` (Use como fundo principal para uma sensação de "papel" premium).
- **Texto Principal (Carvão):** `#1A1A1A` (Quase preto, para alto contraste e elegância).
- **Texto Secundário:** `#4A4A4A` (Cinza escuro para descrições e micro-textos).
- **Acento (Terracota/Laranja Queimado):** `#D96C31` (Use para detalhes sutis, labels e botões de destaque).
- **Fundo Footer (Stone):** `#EAE6DF` (Um creme levemente mais escuro e acinzentado).

## 🖋️ Tipografia (Editorial High-End)
- **Fonte Serifada (Editorial):** `Cormorant Garamond`.
  - **Uso:** Títulos de seções (H1, H2) e citações.
  - **Estilo:** Tamanhos grandes (`10vw` ou `6vw`), `leading-[0.9]`, `tracking-tighter` ou `tracking-tight`. Frequentemente em caixa baixa para um toque moderno ou caixa alta para impacto.
- **Fonte Sans-Serif (Moderna):** `Montserrat`.
  - **Uso:** Navegação, labels, botões e parágrafos.
  - **Estilo:** Frequentemente em **CAIXA ALTA (UPPERCASE)**, tamanhos pequenos (`10px` a `11px`), com **espaçamento entre letras generoso** (`tracking-[0.2em]`).

## 📐 Layout e Estrutura
- **Navegação Lateral Fixa (Pagination):**
  - Posicionada à esquerda (`fixed left-8 top-1/2`).
  - Design minimalista com pontos verticais e números de seção (ex: 01, 02).
  - Labels que aparecem no hover com fundo creme e texto pequeno.
- **Header (Navbar):**
  - Minimalista e fixo no topo.
  - Logo centralizado em fonte editorial.
  - Informações de status/localização à esquerda e menu/idioma à direita em fonte sans-serif pequena.
- **Seções:**
  - Espaçamento amplo (`py-24` ou `py-32`).
  - Layouts de duas colunas assimétricos (ex: título gigante em uma coluna, texto descritivo pequeno na outra).
  - Bordas sutis separando seções (`border-t border-black/5`).
- **Imagens:**
  - Formatos estritamente **retangulares**.
  - **Sem bordas arredondadas** (radius-none).
  - Uso de imagens com aspecto "fine art" ou fotografia gastronômica de alta qualidade.

## 🖼️ Elementos de Design Específicos
- **Footer:**
  - Texto de fundo massivo ("CASA BRASILEIRA") em opacidade baixa (`opacity-10`) e fonte editorial.
  - Formulário minimalista com apenas bordas inferiores (`border-b`).
  - Ícones sociais circulares com bordas finas.
  - Textura de ruído sutil ou padrão de repetição no fundo.
- **Botões:**
  - Estilo "Pill" (arredondado) ou retangular clássico.
  - Cores sólidas (Terracota) ou apenas bordas (Ghost buttons).
  - Texto sempre em uppercase com tracking alto.
- **Interatividade:**
  - Animações de entrada suaves (fade-in up) usando GSAP.
  - Efeito de zoom sutil em imagens no hover.
  - Scroll suave (Lenis).

---

## 📝 Prompt para o AI Studio (Copie e Cole)

> "Crie um website para um restaurante de luxo chamado 'Casa Brasileira' seguindo uma identidade visual minimalista, elegante e editorial. 
>
> **Cores:** Fundo creme off-white (#F4F3EE), texto carvão (#1A1A1A) e detalhes em terracota (#D96C31).
> **Fontes:** Use 'Cormorant Garamond' para títulos grandes e impactantes (serifa editorial) e 'Montserrat' para textos de apoio, labels e navegação (sans-serif). 
> **Tipografia:** Os micro-textos e labels devem estar sempre em UPPERCASE, com tamanho de 10px e espaçamento entre letras de 0.2em. Os títulos devem ser massivos (ex: 10vw) com entrelinha apertada.
> **Layout:** Implemente uma navegação lateral fixa à esquerda com pontos e números de seção. O header deve ser fixo e minimalista. As seções devem ter muito respiro (espaço em branco) e layouts assimétricos.
> **Imagens:** Use apenas formatos retangulares sem cantos arredondados. No menu, use imagens de pratos com fundo transparente para interagir com o layout.
> **Footer:** Deve ter um texto gigante de fundo em marca d'água, um formulário de contato limpo com inputs apenas com linha inferior e ícones sociais minimalistas.
> **Vibe Geral:** Sofisticada, terrosa, limpa e premium, lembrando uma revista de design ou gastronomia de alto padrão."
