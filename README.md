🛒 Mini Sistema de Compras - JS
<p align="center"> <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge" /> <img src="https://img.shields.io/badge/Runtime-Node.js-green?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Status-Experimental-orange?style=for-the-badge" /> </p>

Um mini carrinho de compras feito em JavaScript, com três versões que evoluem em complexidade. Ideal pra treinar manipulação de variáveis, arrays, objetos e JSON.

🚀 Versões do Projeto
<span style="color:#FFD700">1️⃣ Versão 1 – v1exemplo.js
</span>

Script simples que mostra informações do comprador e do primeiro produto.

Funcionalidades:

Armazena nome e idade do comprador.

Mantém listas de produtos e preços.

Mostra no console:

🧑 Primeira letra do nome

🎂 Primeira letra da idade

🖱️ Primeiro produto

💰 Preço do produto

<span style="color:#00BFFF">2️⃣ Versão 2 – Interativa – v2exemplo.js
</span>

Permite que o usuário escolha um produto digitando o número correspondente.

Funcionalidades:

Mostra lista de produtos disponíveis com preços.

Permite seleção de produto pelo usuário.

Exibe resumo da compra no console:

🧑 Nome do comprador

🎂 Idade do comprador

🖱️ Produto selecionado

💰 Preço do produto

<span style="color:#32CD32">3️⃣ Versão 3 – JS + JSON – v3exemplo.js
</span>

Usa JSON para organizar produtos e preços, deixando o sistema mais limpo.

Funcionalidades:

Armazena informações do comprador (nome e idade) em JSON.

Armazena produtos e preços em um objeto JSON.

Lista todos os produtos disponíveis no console.

Destaca o primeiro produto do carrinho.

Utiliza destructuring para separar nome e preço.

Formata preços com duas casas decimais e emojis.

💻 Como usar

Clone o repositório:

git clone <seu-repositorio>


Entre na pasta do projeto:

cd mini-sistema-compras


Execute a versão desejada:

node v1exemplo.js   # versão 1
node v2exemplo.js   # versão 2
node v3exemplo.js   # versão 3

📌 Exemplo de saída da Versão 3
🧑 Comprador: David
🎂 Idade: 20

🛍️ Produtos Disponíveis:
   1. Mouse gamer RGB - 💰 R$19.90
   2. Teclado gamer Tdagger Bora RGB - 💰 R$299.90
   3. Mouse pad Redragon Ryu - 💰 R$239.90
   4. Microfone Fifine A8 - 💰 R$399.90
   5. Soundbar Redragon - 💰 R$499.90
   6. Gabinete Magic - 💰 R$699.90

🎯 Produto destaque:
🖱️ Mouse gamer RGB - 💰 R$19.90