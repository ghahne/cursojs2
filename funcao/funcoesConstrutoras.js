function Carro (VelocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0

    // Metodo público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= VelocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Metodo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const unoEscadaTeto = new Carro(350, 20)
unoEscadaTeto.acelerar()
unoEscadaTeto.acelerar()
unoEscadaTeto.acelerar()
console.log(unoEscadaTeto.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof unoEscadaTeto)