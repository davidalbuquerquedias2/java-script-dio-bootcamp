const prompt = require('prompt-sync')({ sigint: true });

const ESTOQUE = {
    PRODUTOS: [
        { id: 1, nome: "MOUSE Sem Fio", preco: 50.00, quantidade: 30 },
        { id: 2, nome: "TECLADO Mecânico", preco: 120.50, quantidade: 15 },
        { id: 3, nome: "MONITOR Gamer", preco: 800.00, quantidade: 5 },
        { id: 4, nome: "WEBCAM HD", preco: 95.00, quantidade: 40 }
    ]
};

// --- FUNÇÃO 1: EXIBIR O ESTOQUE ---
// Adaptação da sua função itemStock
function itemStock(estoque) {
    console.log('\n======================================');
    console.log('         ESTOQUE ATUAL (Index)         ');
    console.log('======================================');
    
    // Usamos for...of com .entries() para obter o índice (INDEX) e o produto (ITEM)
    for (const [index, produto] of estoque.PRODUTOS.entries()) {
        const { nome, preco, quantidade } = produto;
        
        // Exibe as informações, incluindo o stock
        console.log(
            `${index} | PRODUTO: ${nome} | R$ ${preco.toFixed(2)} | STOCK: ${quantidade}`
        );
    }
    console.log('======================================');
}

// --- FUNÇÃO 2: PROCESSAR A COMPRA/SAÍDA DE STOCK ---
function processarCompra(estoque) {
    // 1. Exibe a lista para que o usuário possa escolher
    itemStock(estoque);

    // 2. Coleta a escolha do usuário (INDEX)
    // O seu código original: LET ESCOLHA = parseInt(PROMPT("!! ESCOLHA"));
    const ESCOLHA_INDEX = parseInt(prompt("Digite o INDEX (número) do produto que deseja vender/dar saída: "));
    

    const produtoSelecionado = estoque.PRODUTOS[ESCOLHA_INDEX];
    const { nome, preco, quantidade } = produtoSelecionado;

    // 4. Coleta a quantidade a ser vendida
    const qtdVenda = parseInt(prompt(`Quantas unidades de "${nome}" (Stock: ${quantidade}) deseja vender? `));


    produtoSelecionado.quantidade -= qtdVenda;
    const novoStock = produtoSelecionado.quantidade;
    
    const valorTotal = preco * qtdVenda;

    console.log("\n======================================");
    console.log("       DETALHES DA VENDA/SAÍDA        ");
    console.log("======================================");
    console.log(`Produto: ${nome}`);
    console.log(`Quantidade Vendida: ${qtdVenda}`);
    console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);
    console.log(`NOVO STOCK: ${novoStock}`);
    console.log("======================================");

    // Mostra a lista atualizada
    itemStock(estoque);
}


// --- EXECUÇÃO DO SISTEMA ---
processarCompra(ESTOQUE);