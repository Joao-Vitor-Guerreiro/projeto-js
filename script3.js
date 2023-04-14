function Carro(marca, ano, motor, cambio) {
    this.marca = marca;
    this.ano = ano;
    this.motor = motor;
    this.cambio = cambio;
}

const Meucarro1 = new Carro("Audi", 2023, "Turbo", "Automático");

const Meucarro2 = new Carro("Bmw", 2000, "Aspirado", "Manual");

const Garagem = [Meucarro1, Meucarro2];

//console.log(Garagem);

let date = new Date();
//console.log(date.getSeconds())

let total = (2 + 3 + 6) * 5

//console.log(total)

let one = 1

//console.log(one != "1")

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}


let frutas = ["laranja", "banana", "melancia"]

console.log(frutas[2])