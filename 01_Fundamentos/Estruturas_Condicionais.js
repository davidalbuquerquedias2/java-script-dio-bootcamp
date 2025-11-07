// =======================================================
// 01_Fundamentos/Estruturas_Condicionais.js
// Demonstração de IF/ELSE, ELSE IF, e SWITCH/CASE
// =======================================================


// -------------------------------------------------------
// EXEMPLO 1: IF, ELSE IF, ELSE (Múltiplas Condições)
// Avalia diferentes níveis de fome
// -------------------------------------------------------
console.log("--- Exemplo 1: IF, ELSE IF, ELSE (Níveis de Fome) ---");

let nivelDeFome = 2; // Teste com 1, 2, e 5 para ver os resultados

if (nivelDeFome === 1) {
    console.log("POUCA FOME");
    
} else if (nivelDeFome === 2) {
    console.log("MUITO FOME");

} else {
    console.log("Você comeria o Bugger King");
}

console.log("\n------------------------------");


// -------------------------------------------------------
// EXEMPLO 2: IF/ELSE Simples (Decisão Binária)
// Verifica se a variável booleana 'possuiOvos' é verdadeira
// -------------------------------------------------------
console.log("--- Exemplo 2: IF/ELSE Simples ---");

let possuiOvos = false; // Teste com true para ver a diferença
let itensComprado = "";

if (possuiOvos) {
    itensComprado = "Leite";
} else {
    console.log("Passou na sessão congelados");
    itensComprado = "Lasanha Congelada";
}

console.log("itensComprado: " + itensComprado);
console.log("\n------------------------------");


// -------------------------------------------------------
// EXEMPLO 3: IF sem ELSE (Apenas Executa se Verdadeiro)
// A variável só é alterada se a condição for atendida
// -------------------------------------------------------
console.log("--- Exemplo 3: IF sem ELSE ---");

// Redefinimos a variável para true para o exemplo
possuiOvos = true; 
itensComprado = ""; 

if (possuiOvos) {
    itensComprado = "Leite"; // Só executa se for true
}

console.log("itensComprado: " + itensComprado); // Mostrará "Leite"
console.log("\n------------------------------");


// -------------------------------------------------------
// EXEMPLO 4: ESTRUTURA SWITCH/CASE (do seu código anterior)
// Melhor para múltiplas condições exatas
// -------------------------------------------------------
console.log("--- Exemplo 4: SWITCH/CASE ---");

let fruta = "morango";

switch (fruta) {
    case "laranja":
        console.log("suco de laranja " + fruta);
        break;
    case "banana":
    case "morango":
    case "abacaxi":
        console.log("vitamina " + fruta);
        break;
    case "maça":
        console.log("suco de maça " + fruta);
        break;
    default: {
        console.log("Suco generico sem fruta");
    }
}
console.log("------------------------------");




let carros = "bugatti" //seletor de carro

switch (carros) {
    case "ferrari":
        console.log("Seu carro é " + carros + ", veículo esportivo. Velocidade máxima: 340 km/h.");
        break;

    case "bugatti":
        console.log("Seu carro é " + carros + ", veículo de luxo. Velocidade máxima: 420 km/h.");
        break;

    case "corsa":
        console.log("Seu carro é " + carros + ", veículo popular. Velocidade máxima: 180 km/h.");
        break;

    case "gol":
        console.log("Seu carro é " + carros + ", veículo popular. Velocidade máxima: 175 km/h.");
        break;

    case "Uno":
        console.log("Seu carro é " + carros + ", veículo econômico. Velocidade máxima: 160 km/h.");
        break;

    default:
        console.log("Carro desconhecido.");
}
