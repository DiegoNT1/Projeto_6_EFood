# 🍽️ Projeto 6: EFood

---

Sexto projeto do curso da **EBAC**, desenvolvido por [DiegoNT1](https://github.com/DiegoNT1).

O **EFood** é uma aplicação web desenvolvida com **React** e **TypeScript** que simula um sistema de pedidos para restaurantes. Os usuários podem navegar pelos estabelecimentos, visualizar cardápios, adicionar produtos ao carrinho e finalizar pedidos.

🔗 **Visualize online:**  
👉 [https://projeto-6-e-food.vercel.app](https://projeto-6-e-food.vercel.app)

---

## 🧾 Visão Geral

A aplicação apresenta uma experiência fluida e moderna de e-commerce voltado para restaurantes:

- 🏪 **Listagem de restaurantes** com imagem, nome, tipo e avaliação  
- 🍝 **Cardápio detalhado**, com descrição, imagem e preço dos pratos  
- 🛒 **Carrinho de compras funcional**, com opção de adicionar/remover itens  
- 📋 **Página de checkout** com formulário de dados do cliente  
- ✅ **Tela de confirmação de pedido**, com feedback final
- ⚙️ **Gerenciamento de estado com Redux Toolkit** e componentes reutilizáveis

---

## 🚀 Tecnologias Utilizadas

- **React** – biblioteca principal da interface
- **Redux Toolkit** – gerenciamento de estado global
- **React Router DOM** – gerenciamento de rotas
- **Formik + Yup** – gerenciamento e validação de formulários
- **TypeScript** – tipagem estática para maior segurança e organização
- **Styled Components** – estilização com CSS-in-JS
- **ESLint + Prettier** – padronização de código
- **Vercel** – deploy da aplicação

---

## 📁 Estrutura do Projeto (resumida)



```bash
Projeto_6_EFood/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens e ícones
│   ├── componests/          # Componentes reutilizáveis
│   ├── pages/               # Páginas principais (Home, Profile)
│   ├── services/            # Requisições à API
│   ├── store/               # Gerenciamento de estado global (Redux)
│   │   └── reducers/        # Reducers do Redux
│   ├── App.tsx
│   ├── index.tsx            # Ponto de entrada
│   ├── routes.tsx           # Configuração das rotas
│   ├── styles.ts            # Estilos globais
│   └── types.d.ts            # Tipagens do projeto
├── package.json
├── tsconfig.json
└── package-lock.json
```


---

## 🧪 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/DiegoNT1/Projeto_6_EFood.git
   ```
2. Acesse a pasta do projeto:
  ```bash
  cd Projeto_6_EFood
  ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o servidor local:
   ```bash
   npm start
   ```
5. Acesse no navegador:
   ```bash
   http://localhost:3000
   ```


---

## 🔮 Melhorias Futuras

Busca e filtro de restaurantes 🔍

Layout totalmente responsivo para dispositivos móveis 📱

