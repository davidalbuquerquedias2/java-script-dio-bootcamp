const prompt = require('prompt-sync')({ sigint: true });

let estoque = {

  nome: "David",
  idade: "Idade",

  produtos: [
    { id: 1, nome: "MOUSE Sem Fio", preco: 50.00, },
    { id: 2, nome: "TECLADO Mecânico", preco: 120.50, },
    { id: 3, nome: "MONITOR Gamer", preco: 800.00, },
    { id: 4, nome: "WEBCAM HD", preco: 95.00, }
  ]
}

function intemStock(estoque) {

  estoque.nome = prompt("Nome do comprador:  ")
  estoque.idade = prompt("Idade do comprador:  ")


  console.log('\n======================================');
  console.log('         ESTOQUE ATUAL (Index)         ');
  console.log('======================================');

  for (const [index, produto] of estoque.produtos.entries()) {
    const { id, nome, preco } = produto;

    console.log(`${index} Produto é ${nome} valor é ${preco.toFixed(2)} Stock ${id}`)
  }
}

function Selecionar(estoque) {

  intemStock(estoque)

  const escolha = parseInt(prompt("Digite o produto "))
  const dadosselecionado = estoque.produtos[escolha]

  const { id, nome, preco } = dadosselecionado;

  console.log('\n======================================');
  console.log('         Informação (Compra)         ');
  console.log(`Nome do comprador ${estoque.nome}`)
  console.log(`Idade do comprador ${estoque.idade}`)
  console.log(`O produto Se encontra no stock ${id}`)
  console.log(`Produto ${nome} preço ${preco.toFixed}(2)`)
  console.log('======================================') 

}

Selecionar(estoque)