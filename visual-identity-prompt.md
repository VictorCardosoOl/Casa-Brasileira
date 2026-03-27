# Prompt de Refatoração de Identidade Visual (Estilo "Casa Brasileira")

Este documento contém um prompt extremamente detalhado, projetado especificamente para você **copiar e colar em um projeto já existente no AI Studio**. Ele instruirá o agente de IA a reescrever e reestilizar o projeto atual para adotar a estética minimalista, elegante, terrosa e editorial que construímos.

---

## 📋 Copie o texto abaixo e cole no chat do seu outro projeto:

```text
Atue como um Engenheiro de Front-end e Designer de UI/UX de alto nível. Preciso que você aplique uma refatoração completa na identidade visual, layout e animações deste projeto existente, baseando-se em um design system rigoroso de estilo "Bistrô Editorial / Minimalista Terroso". 

Por favor, atualize os arquivos globais de CSS, componentes de layout, seções e animações seguindo estritamente as diretrizes abaixo:

### 1. Configuração Global e Paleta de Cores (index.css)
Substitua as configurações de fonte e cores no arquivo CSS global (Tailwind v4 `@theme` ou configuração equivalente) para usar exatamente estes valores:
- **Importação de Fontes:** `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');`
- **Variáveis de Fonte:** 
  - `--font-sans: "Montserrat", sans-serif;`
  - `--font-editorial: "Cormorant Garamond", serif;`
- **Paleta de Cores:**
  - Fundo Principal (Creme): `#F4F3EE` (Use como background padrão do `main` e seções).
  - Texto Principal (Carvão): `#1A1A1A`
  - Texto Secundário (Cinza Escuro): `#4A4A4A`
  - Destaque/Accent (Terracota): `#D96C31`
  - Fundo do Footer (Stone): `#EAE6DF`
- A cor de seleção de texto (`selection:bg-...`) deve ser a cor de destaque com 20% de opacidade e o texto na cor de destaque.

### 2. Regras de Tipografia (Crucial para o visual)
- **Títulos (Headings):** Devem usar a fonte editorial (`font-editorial`). Devem ser MASSIVOS (ex: `text-[10vw]` em desktop, `text-[14vw]` em mobile), totalmente em MAIÚSCULAS (`uppercase`), com entrelinha muito justa (`leading-[0.85]` ou `leading-[0.9]`) e tracking negativo (`tracking-tighter`).
- **Micro-textos, Parágrafos e Labels:** Devem usar a fonte sans-serif (`font-sans`). Devem ser PEQUENOS (ex: `text-[10px]` ou `text-[11px]`), totalmente em MAIÚSCULAS (`uppercase`), com espaçamento de letras muito largo (`tracking-[0.2em]`) e entrelinha relaxada (`leading-relaxed`).

### 3. Disposição de Elementos e Layout (Seções)
- **Espaçamento:** Use paddings generosos nas seções (ex: `py-32 px-6 md:px-12`).
- **Divisões:** Separe as seções com uma borda superior sutil (`border-t border-[#1A1A1A]/10`).
- **Grids Assimétricos:** Use `grid-cols-12`. Coloque títulos gigantes ocupando 6 a 8 colunas e textos descritivos pequenos nas colunas restantes, alinhados ao fundo (`items-end`) ou ao topo, criando um forte contraste de tamanho.
- **Imagens:** NUNCA use bordas arredondadas (`rounded`). Todas as imagens devem ser retangulares (aspect ratios como `4:3`, `3:4`, `21:9`). Use imagens em tons quentes ou aplique filtros sutis. Para itens de destaque (como pratos), use imagens PNG sem fundo com `drop-shadow-2xl` para interagir com o fundo creme.

### 4. Navegação (Navbar e Lateral)
- **Navbar Superior:** Fixo no topo (`fixed top-0 w-full z-50`). Fundo transparente no topo, mas ao rolar a página, deve ganhar um fundo de vidro fosco (`bg-[#F4F3EE]/95 backdrop-blur-md`). Deve conter: Localização/Status à esquerda (micro-texto), Logo centralizado (fonte editorial grande) e botão de Menu à direita.
- **Navegação Lateral (Paginação):** Crie um componente de navegação fixo à esquerda (`fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8`). Deve mostrar números (01, 02, 03) em micro-texto. Ao passar o mouse ou quando a seção estiver ativa (use `IntersectionObserver`), o número muda para a cor terracota e o nome da seção desliza suavemente para a direita.

### 5. Footer (Rodapé)
- Fundo na cor `#EAE6DF`.
- **Marca d'água:** Adicione um texto gigante ao fundo, posicionado no limite inferior (`absolute bottom-[-2%]`), dizendo o nome do projeto em fonte editorial, com opacidade muito baixa (`opacity-10`) e `whitespace-nowrap`.
- **Formulário:** Minimalista. Inputs de texto devem ter fundo transparente, sem bordas laterais ou superiores, apenas uma borda inferior (`border-b border-[#1A1A1A]/40`).
- **Ícones Sociais:** Botões circulares com borda fina (`border border-[#1A1A1A]/20`), que preenchem de cor escura no hover.

### 6. Animações e Interatividade
- **Scroll Suave:** Implemente `Lenis` para um scroll fluido em toda a página.
- **GSAP ScrollTrigger:** Todas as seções devem ter animações de entrada. Quando a seção entra na tela, os textos devem subir suavemente (`y: 50`, `opacity: 0`, `duration: 1`, `ease: 'power3.out'`). As imagens devem ter um leve efeito de paralaxe ou scale-down (`scale: 1.05` para `1`).
- **Hover em Imagens:** Em galerias, adicione um efeito de zoom sutil na imagem (`group-hover:scale-105 transition-transform duration-700`).
- **Interatividade em Mapas/Gráficos:** Se houver SVG ou mapas, faça com que os elementos reajam ao clique/hover, aumentando a espessura da linha (`stroke-width`) e exibindo tooltips flutuantes com micro-textos.

Por favor, revise todos os componentes do projeto atual e aplique essas regras rigorosamente. Comece atualizando o `index.css` e o `App.tsx`, depois refatore o `Navbar`, adicione a navegação lateral e atualize as seções uma a uma.
```
