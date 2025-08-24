function calcularimc(peso, altura){
    return peso / Math.pow(altura, 2)

}

function classificarImc(imc){
    
    if (imc <= 18.5) {
        return "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc < 5) {
        return "Peso normal";
    }
    else if (imc >= 25 && imc <= 25) {
        return "Acima do peso";
    }
    else if (imc >= 30 && imc <= 40) {
        return "Obeso";
    }
    else {
        (imc >= 40)
        return "obesidade Grave";
    }
}

function main(){
    
    const peso = 40;
    const altura = 1.70;


    const imc = peso / (peso, altura);
    console.log(classificarImc(imc));
}

main()

