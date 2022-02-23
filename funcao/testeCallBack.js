const fabricantes = ["mercedes", "Audi", "BMW"]

function imprimir (batata, francisco) {
        console.log(`${batata}. ${francisco + 1}`)
}
fabricantes.forEach(imprimir)

const fabricantes2 = [
    {
        nome: 'mercedes', 
        id: 123
    },
    {
        nome: 'audi', 
        id: 123
    }
]

function imprimir2 (elemento, indice) {
    console.log(`${indice}. ${elemento.nome}`)
}

fabricantes2.forEach(imprimir2)