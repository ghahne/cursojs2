const notas = [1.1, 2.2, 3.3, 4.4, 5.5]

for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 22,
    peso: 62
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
