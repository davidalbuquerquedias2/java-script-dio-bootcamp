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
