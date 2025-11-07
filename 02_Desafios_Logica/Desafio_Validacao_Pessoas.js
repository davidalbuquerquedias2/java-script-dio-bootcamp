// =======================================================
// 02_Desafios_Logica/Desafio_Validacao_Pessoas.js
// Desafio: Implementa o cálculo e classificação do IMC e a validação de Maioridade.
// =======================================================


// --- SEÇÃO 1: CÁLCULO E CLASSIFICAÇÃO DO IMC ---

function calcularImc(peso, altura) {
    // Fórmula: peso / altura²
    return peso / Math.pow(altura, 2); 
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    }
    // NOTA: Ajustei a lógica de intervalos. Os seus ifs originais estavam incorretos (ex: imc < 5).
    else if (imc < 25) { // 18.5 a 24.9
        return "Peso normal";
    }
    else if (imc < 30) { // 25 a 29.9
        return "Acima do peso";
    }
    else if (imc < 40) { // 30 a 39.9
        return "Obeso";
    }
    else { // 40 ou mais
        return "Obesidade Grave";
    }
}

function mainIMC() {
    console.log("--- VALIDAÇÃO DE IMC ---");
    const peso = 40; // Seus valores originais
    const altura = 1.70;
    
    const imc = calcularImc(peso, altura);
    console.log(`IMC: ${imc.toFixed(2)} - Classificação: ${classificarImc(imc)}`);
}


// --- SEÇÃO 2: VERIFICAÇÃO DE MAIORIDADE ---

function verificarIdade(idade) {
    console.log(`\n--- VERIFICAÇÃO DE IDADE (${idade} anos) ---`);
    if (idade >= 18) {
        console.log("Maior de idade.");
    }
    else {
        console.log("Menor de idade.");
    }
}


// --- EXECUÇÃO ---
mainIMC();
verificarIdade(30);
verificarIdade(15);