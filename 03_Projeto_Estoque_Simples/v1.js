// v2exemplo.js
const prompt = require("prompt-sync")();

// CRIAÇÃO DO ESTOQUE
let ESTOQUE = {
  NOME: "David",
  IDADE: "19",
  PRODUTOS: {
    0: ["MOUSE GAMER", 1990],
    1: ["TECLADO MECÂNICO", 350],
    2: ["HEADSET", 250]
  }
};

// MOSTRA OS ITENS DO ESTOQUE
function ITENSTOCK(ESTOQUE) {
  console.log("PRODUTOS NO ESTOQUE:");
  for (let INDEX in ESTOQUE.PRODUTOS) {
    let PRODUTO = ESTOQUE.PRODUTOS[INDEX];
    console.log(INDEX + ": " + PRODUTO[0] + " | R$ " + PRODUTO[1]);
  }
}

// MOSTRA O ESTOQUE
ITENSTOCK(ESTOQUE);

// PEDE AO USUÁRIO PARA ESCOLHER UM PRODUTO
let ESCOLHA = readline.question("Digite o número do produto (0, 1 ou 2): ");
let PRODUTO = ESTOQUE.PRODUTOS[ESCOLHA];

if (PRODUTO) {
  console.log("Você escolheu: " + PRODUTO[0] + " | Preço: R$ " + PRODUTO[1]);
} else {
  console.log("Produto não encontrado!");
}
