# 📖 DOC-TEMPLATE: Manual de Operação e Escala (White-Label)

> **Documentação Técnica e Comercial**
> *Status:* Produção | *Arquitetura:* SPA Modular (Data-Driven)

---

## 1. Visão Geral e Propósito Comercial

Este projeto foi arquitetado não apenas como um website, mas como uma **Solução Digital Escalável (White-Label)** voltada para o setor gastronômico de alto padrão. O modelo de negócios embutido no código permite duas frentes de monetização:

1. **Cardápio Digital Independente (Abre-Portas):** Uma rota isolada (`/cardapio`) otimizada para dispositivos móveis e acesso via QR Code nas mesas. Resolve a dor imediata do restaurante (cardápios em PDF ruins) com baixo custo de entrada.
2. **Site Institucional Premium (Upsell):** Uma experiência imersiva na rota principal (`/`), projetada para transmitir luxo, atrair turistas e justificar um ticket médio mais alto através de um design editorial.

---

## 2. Stack Tecnológica e Comportamento Visual

A base de código foi construída com foco em performance extrema e fluidez visual, utilizando tecnologias modernas:

* **React 18 + Vite:** Motor principal, garantindo carregamento instantâneo e componentização eficiente.
* **React Router Dom:** Gerenciamento de rotas, separando o site institucional (`/`) do módulo de cardápio (`/cardapio`).
* **Tailwind CSS v4:** Estilização utilitária e tematização dinâmica, permitindo mudanças drásticas de design sem escrever CSS customizado.
* **GSAP (GreenSock):** Motor de animações premium. Utilizado para criar o componente reutilizável `<FadeIn />` e orquestrar entradas de elementos baseadas no scroll (ScrollTrigger).
* **Lenis:** Biblioteca de *Smooth Scroll*. Substitui a rolagem travada padrão dos navegadores por uma rolagem fluida e baseada em inércia, fundamental para a sensação de "luxo" e "revista editorial".

---

## 3. Arquitetura Orientada a Dados (Data-Driven)

Para garantir que o template seja escalável (vender para 10, 50 ou 100 restaurantes), a interface (UI) foi estritamente separada dos dados (Conteúdo). 

Você **não precisa** abrir os componentes `.tsx` para alterar textos ou preços.

* **O Arquivo Central (`src/data/clientConfig.ts`):** Funciona como o "Cérebro" do cliente. Ele armazena o nome do restaurante, links de redes sociais e configurações globais. O hook `useDynamicTitle` lê este arquivo para atualizar o SEO automaticamente.
* **Integração com Google Sheets (CMS Gratuito):** O cardápio é alimentado de forma dinâmica. O hook `useGoogleSheetsMenu` utiliza a biblioteca `papaparse` para ler uma planilha do Google publicada como CSV. Isso permite que o próprio dono do restaurante atualize os preços pelo celular, refletindo no site em tempo real, sem necessidade de deploy.

---

## 4. Tematização Dinâmica (Tailwind v4)

O projeto utiliza a nova sintaxe do Tailwind v4 para tematização. Toda a identidade visual do cliente é controlada por variáveis CSS centralizadas no arquivo global.

Para mudar completamente a "vibe" do restaurante (ex: de um restaurante rústico para um sushi bar moderno), basta alterar o arquivo `src/index.css`:

```css
@theme {
  /* Cores Principais */
  --color-casa-cream: #F4F3EE; /* Fundo principal */
  --color-casa-text: #1A1A1A;  /* Texto principal */
  --color-casa-text-light: #666666; /* Texto secundário */
  --color-casa-accent: #D96C31; /* Cor de destaque (botões, links) */

  /* Tipografia */
  --font-sans: "Montserrat", sans-serif;
  --font-editorial: "Cormorant Garamond", serif;
}
```

---

## 5. Guia Rápido de Customização (Passo a Passo)

Siga este checklist para adaptar o template para um novo cliente em **menos de 15 minutos**:

### Passo 1: Configurar os Dados do Cliente
Abra o arquivo `src/data/clientConfig.ts` e atualize as informações básicas:
```typescript
export const restaurantData = {
  name: "NOME DO NOVO CLIENTE",
  description: "Bistrô & Bar",
  menuCsvUrl: "LINK_DO_GOOGLE_SHEETS_AQUI", 
};
```

### Passo 2: Ajustar a Paleta de Cores e Fontes
Abra `src/index.css` e modifique as variáveis dentro do bloco `@theme`. 
* *Dica:* Se o cliente tiver um logo escuro, mude o `--color-casa-cream` para um tom claro. Se for um bar noturno, inverta: fundo escuro e texto claro.

### Passo 3: Substituir as Imagens (Assets)
Navegue pelos componentes principais (como `Hero.tsx`, `TheSpace.tsx`, `ChefTayna.tsx`) e substitua as URLs das imagens (tags `<img>`) pelas fotos do novo restaurante. Mantenha a proporção das imagens para não quebrar o layout.

### Passo 4: Configurar o Cardápio (Google Sheets)
1. Crie uma planilha no Google Sheets com as colunas: `category`, `name`, `description`, `price`.
2. Vá em *Arquivo > Compartilhar > Publicar na Web*.
3. Escolha publicar como **Valores separados por vírgula (.csv)**.
4. Cole o link gerado no `clientConfig.ts`.

### Passo 5: Deploy
Faça o build do projeto (`npm run build`) e publique na sua plataforma de hospedagem preferida (Vercel, Netlify, Cloud Run). O site e o cardápio QR Code já estarão prontos para uso!
