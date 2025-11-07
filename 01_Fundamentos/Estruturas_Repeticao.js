// =======================================================
// 01_Fundamentos/Estruturas_Repeticao.js
// Demonstração dos loops FOR, WHILE e DOWHILE
// =======================================================


// -------------------------------------------------------
// EXEMPLO 1: LOOP FOR
// Mais comum para quando se sabe o número de repetições
// -------------------------------------------------------
console.log("--- Loop FOR ---");

// FOR básico
for (let contador = 0; contador <= 4; contador++) {
    console.log(contador);
    console.log("Aumentando o contador ");
}

// FOR usando 'i' (padrão de mercado para índice)
for (let i = 0; i < 4; i++) {
    // Nota: O 'contador' aqui precisa ser uma variável diferente ou declarada
    // Se você usa 'contador' aqui, ele pode gerar 'ReferenceError' se não for declarado.
    // Usaremos 'i' para seguir a prática de mercado.
    console.log(i); 
    console.log("Aumentando o contador (usando 'i') ");
}
console.log("\n------------------------------");


// -------------------------------------------------------
// EXEMPLO 2: LOOP WHILE
// Comum para quando a condição de parada é incerta
// -------------------------------------------------------
console.log("--- Loop WHILE ---");

let contadorWhile = 0;
while (contadorWhile < 3) {
    console.log("olá (while)");
    contadorWhile++;
}

let iWhile = 0;
while (iWhile <= 3) {
    console.log("olá (while com i)");
    iWhile++;
}
console.log("\n------------------------------");


// -------------------------------------------------------
// EXEMPLO 3: LOOP DO/WHILE
// Garante que o bloco de código execute pelo menos uma vez
// -------------------------------------------------------
console.log("--- Loop DOWHILE ---");

// ⚠ Nota do seu código: O DOWHILE é pouco usado, mas útil quando a ação deve ocorrer antes do teste da condição.

let contadorDoWhile = 0;

do {
    console.log("olá (do/while)");
    contadorDoWhile++;
} while (contadorDoWhile < 3);

console.log("------------------------------\n");