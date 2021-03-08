// Função armazenada em uma constante
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma Arrow Function em uma constante.

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

const subtracao = (a, b) => a - b

console.log(subtracao(4, 2))

let concat = (string1, string2) => {
    console.log(string1 + ' ' + string2)
}

concat('meu', 'pipi')

let concat2 = (string1, string2) => {
    console.log(string1 + ' ' + string2)
}

let meu = "meu"
let saco = "saco"

concat2(meu, saco)

let concat3 = (string1, string2) => {
    console.log(string1 + string2)
}

concat3(1, 2)
hseashdsahehada