// 📁 Mapeamento de Estrutura do Projeto
//
// .
// ├── .env.example                // Template para variáveis de ambiente
// ├── .gitignore                  // Arquivos e pastas ignorados pelo Git
// ├── DOC-TEMPLATE.md             // Documentação técnica e comercial do template
// ├── index.html                  // Ponto de entrada HTML da aplicação
// ├── metadata.json               // Metadados do projeto (nome, descrição, permissões)
// ├── package-lock.json           // Árvore de dependências exata travada
// ├── package.json                // Dependências e scripts do projeto (npm)
// ├── tsconfig.json               // Configuração do compilador TypeScript
// ├── visual-identity-prompt.md   // Diretrizes de identidade visual do projeto
// ├── vite.config.ts              // Configuração do bundler Vite
// └── src/                        // Código fonte principal
//     ├── App.tsx                 // Componente orquestrador de rotas e layout principal
//     ├── index.css               // Estilos globais e variáveis do Tailwind CSS
//     ├── main.tsx                // Ponto de entrada principal do React/TypeScript
//     ├── components/             // Componentes visuais da interface
//     │   ├── animations/         // Componentes focados em animações
//     │   │   └── FadeIn.tsx      // Componente reutilizável para animações de entrada
//     │   ├── hooks/              // Hooks específicos para componentes de UI
//     │   │   └── useScrollDirection.ts // Hook para detectar a direção do scroll
//     │   ├── layout/             // Componentes estruturais globais
//     │   │   ├── Navbar.tsx      // Barra de navegação global
//     │   │   └── SmoothScrollWrapper.tsx // Wrapper genérico para scroll suave
//     │   └── sections/           // Grandes blocos modulares da Landing Page
//     │       ├── ChefTayna.tsx   // Seção da página sobre a Chef
//     │       ├── CulinaryConcept.tsx // Seção sobre o conceito culinário
//     │       ├── Footer.tsx      // Rodapé da página
//     │       ├── Hero.tsx        // Seção principal (topo) da landing page
//     │       ├── MapSection.tsx  // Seção com mapa/localização
//     │       ├── MenuSection.tsx // Seção de demonstração do menu na landing page
//     │       └── TheSpace.tsx    // Seção sobre o ambiente/espaço do restaurante
//     ├── data/                   // Dados estáticos e configurações
//     │   └── clientConfig.ts     // Dados e configurações do cliente (White-Label)
//     ├── hooks/                  // Hooks customizados globais (lógica de negócios)
//     │   ├── useDynamicTitle.ts  // Hook para atualizar o título da página dinamicamente
//     │   └── useGoogleSheetsMenu.ts // Hook para buscar dados do cardápio via Google Sheets
//     ├── lib/                    // Funções utilitárias genéricas
//     │   └── utils.ts            // Funções auxiliares (ex: merge de classes CSS)
//     └── pages/                  // Componentes de alto nível que representam rotas
//         └── CardapioDigital.tsx // Página independente do cardápio digital
//
// 🏗️ Arquitetura
// - /src/components: Contém os blocos de construção visuais da aplicação. É subdividido semanticamente (animations, layout, sections) para separar responsabilidades.
// - /src/data: Atua como a camada de configuração do cliente. Centraliza variáveis para que o template seja facilmente adaptável (White-Label).
// - /src/hooks: Extrai a lógica de negócios e o consumo de dados para fora dos componentes de UI, mantendo-os limpos.
// - /src/pages: Agrupa componentes de alto nível que representam rotas completas e independentes na aplicação.
// - /src/lib: Destinado a funções utilitárias puras e helpers que podem ser usados em qualquer parte do sistema.
// O projeto segue um padrão arquitetural de Componentização Modular (Single Page Application - SPA), focado na separação de responsabilidades entre UI, Lógica e Dados.
//
// 🚀 Ponto de Entrada
// - index.html: É o arquivo raiz carregado pelo navegador. Ele importa o script principal da aplicação.
// - src/main.tsx: É o ponto de entrada do código TypeScript/React. Ele inicializa a árvore do React e a injeta no HTML.
// - src/App.tsx: Atua como o orquestrador principal, definindo as rotas e agrupando os componentes de layout e páginas.
//
// ⚙️ Configurações
// - vite.config.ts: Configura o Vite, responsável por empacotar (bundle), otimizar e servir a aplicação.
// - package.json: Define as dependências do projeto (bibliotecas npm) e os scripts de execução.
// - tsconfig.json: Estabelece as regras de compilação e tipagem estática do TypeScript.
// - metadata.json: Armazena metadados do ambiente de execução (nome, descrição, permissões de hardware).
// - .env.example: Serve como um gabarito para as variáveis de ambiente necessárias para rodar o projeto.
