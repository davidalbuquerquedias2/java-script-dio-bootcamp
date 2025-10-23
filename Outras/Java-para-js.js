const prompt = require("prompt-sync")();

// Função 1: soma dos dois primeiros números divisível pelo terceiro
function quatitat() {
    let num1 = parseInt(prompt("Da aí o número 1: "));
    let num2 = parseInt(prompt("Da aí o número 2: "));
    let num3 = parseInt(prompt("Da aí o número 3: "));

    return (num1 + num2) % num3 === 0;
}

// Função 2: verificar pares e ímpares
function quatitat2() {
    let num1 = parseInt(prompt("Da aí o número 1: "));
    let num2 = parseInt(prompt("Da aí o número 2: "));

    if (num1 % 2 === 0 && num2 % 2 === 0) {
        return "Ambos são pares";
    } else if (num1 % 2 === 0 || num2 % 2 === 0) {
        let parVerdadeiro = num1 % 2 === 0 ? num1 : num2;
        return "Um deles é par, no caso... " + parVerdadeiro;
    } else {
        return "Ambos são ímpares";
    }
}

// Função 3: soma de múltiplos de 4 até n
function quatitat3() {
    let n = parseInt(prompt("Digite um número: "));
    if (n < 0) return 0;

    let soma = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 4 === 0) soma += i;
    }
    return soma;
}

// Função 4: múltiplo de 5 ou 7
function quatitat4() {
    let n = parseInt(prompt("Digite um número: "));
    if (n % 5 === 0) return "Múltiplo de 5";
    if (n % 7 === 0) return "Múltiplo de 7";
    return "Nenhum dos dois";
}

// Função 5: tipo de triângulo
function quatitat5() {
    let l1 = parseInt(prompt("Digite o lado 1: "));
    let l2 = parseInt(prompt("Digite o lado 2: "));
    let l3 = parseInt(prompt("Digite o lado 3: "));

    if (l1 === l2 && l2 === l3) return "Equilátero";
    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) return "Nem triângulo é";
    if (l1 === l2 || l2 === l3 || l1 === l3) return "Isóceles";
    return "Escaleno";
}

// Exemplos de chamada
console.log("Função 1: ", quatitat());
console.log("Função 2: ", quatitat2());
console.log("Função 3: ", quatitat3());
console.log("Função 4: ", quatitat4());
console.log("Função 5: ", quatitat5());
