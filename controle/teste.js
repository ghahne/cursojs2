function getInteiroAleatorioEntreEsses(min, max) {
    const valorAleatorio = Math.random () * (max- min) + min 
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntreEsses(-1, 10)
    console.log (`Opção escolhida foi ${opcao}.`)
}

console.log('Achou o danado')
