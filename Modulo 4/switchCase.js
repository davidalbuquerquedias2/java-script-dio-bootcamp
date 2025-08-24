//estrutura de decisão
//switch/case/nreak/default

let fruta = "morango"

switch (fruta) {
    case "laranja":
        console.log("suco de laranja" + fruta)
        break

    case "banana":
    case "morango":
    case "abaicaxi":
        console.log("vitamina " + fruta)
        break

    case "maça":
        console.log("suco de maça " + fruta)
        break

    default:{
        console.log("Suco generico sem fruta" )
    }
}