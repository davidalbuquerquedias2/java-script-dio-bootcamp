const precoEtiqueta1 = 100;
const formaDePagamento1 = 1;

if (formaDePagamento1 === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}

else if (formaDePagamento1 === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}

else if (formaDePagamento1 === 3){
    console.log(precoEtiqueta);
}
else {
    console.log(precoEtiqueta1 + (precoEtiqueta1 * 0.1))
}


______________________________________________



const precoEtiqueta = 100;
const formaDePagamento = 1;


function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))

}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));

}



if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}

else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}
else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
}
else {
    console.log(aplicarJuros + (precoEtiqueta, 10));
}
