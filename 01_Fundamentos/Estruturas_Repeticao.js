// =======================================================
// 01_Fundamentos/Estruturas_Repeticao.js
// Demonstração dos loops FOR, WHILE e DOWHILE
// =======================================================


// -------------------------------------------------------
// EXEMPLO 1: LOOP FOR
// -------------------------------------------------------
console.log("--- Loop FOR ---");

// FOR básico
for (let contador = 0; contador <= 4; contador++) {
    console.log(contador);
    console.log("Aumentando o contador ");
}

// FOR usando 'i' (padrão de índice)
for (let i = 0; i < 4; i++) {
    // Nota: O 'contador' foi substituído por 'i' para evitar redeclaração e seguir a prática de mercado.
    console.log(i); 
    console.log("Aumentando o contador (usando 'i') ");
}
console.log("\n------------------------------");


// -------------------------------------------------------
// EXEMPLO 2: LOOP WHILE
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
// Executa o bloco antes de verificar a condição.
// -------------------------------------------------------
console.log("--- Loop DOWHILE ---");

let contadorDoWhile = 0;

do {
    console.log("olá (do/while)");
    contadorDoWhile++;
} while (contadorDoWhile < 3);

console.log("------------------------------\n");