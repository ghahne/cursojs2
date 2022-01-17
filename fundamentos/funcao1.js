// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma (2, 3)
imprimirSoma (2)
imprimirSoma (2, 10, 39, 2, 4, 5)
imprimirSoma ()

// Função com retorno // O segundo parâmetro da função(b) tem um valor padrão que eu "forcei", que é 1.
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

function multiplicacao(n) {
    return n*n
}

console.log(multiplicacao(7))