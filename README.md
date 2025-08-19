# 🍽️ Projeto 6: EFood

**Este projeto encontra-se atualmente em _manutenção_.** A API utilizada foi atualizada e, temporariamente, a aplicação foi desativada até que as chamadas sejam ajustadas ao novo esquema da API.

---

##  Situação Atual

-  O projeto está **em manutenção** e não está funcional no momento.
-  A API externa foi atualizada, e será necessário revisar e adequar as requisições (endpoints, formatos, autenticação, etc.) para restabelecer o funcionamento.

---

##  Visão (antes da manutenção): 


Sexto projeto do curso da **EBAC**, desenvolvido por [DiegoNT1](https://github.com/DiegoNT1).

O **EFood** é uma aplicação web feita com **React** e **TypeScript** que simula um sistema completo de pedidos para restaurantes. Os usuários podem navegar por estabelecimentos, visualizar cardápios, adicionar itens ao carrinho e finalizar o pedido por meio de uma página de checkout.

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
- ⚙️ **Gerenciamento de estado com React** e componentes reutilizáveis

---

## 🚀 Tecnologias Utilizadas

- **React** – biblioteca principal da interface  
- **TypeScript** – tipagem estática para maior segurança e organização  
- **Vite** – ferramenta de build e desenvolvimento rápido  
- **Styled Components** – estilização com CSS-in-JS  
- **React Hooks** – gerenciamento de estado e ciclo de vida  
- **ESLint + Prettier** – padronização de código  
- **Vercel** – deploy da aplicação

---

## 📁 Estrutura do Projeto (resumida)



```bash
Projeto_6_EFood/
├── public/ # Arquivos estáticos
├── src/
│ ├── assets/ # Imagens e ícones
│ ├── components/ # Componentes reutilizáveis
│ ├── pages/ # Páginas principais (Home, Checkout, etc.)
│ ├── services/ # Requisições e dados
│ ├── types/ # Tipagens do projeto
│ ├── styles/ # Estilos globais
│ └── main.tsx # Ponto de entrada
├── tsconfig.json # Configuração TypeScript
└── vite.config.ts # Configuração do Vitel
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
   npm run dev
   ```
5. Acesse no navegador:
   ```bash
   http://localhost:5173
   ```


---

## 🔮 Melhorias Futuras

Busca e filtro de restaurantes 🔍

Layout totalmente responsivo para dispositivos móveis 📱

