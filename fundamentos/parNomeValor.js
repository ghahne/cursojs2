const saudacao = 'Ola' // Contexto Léxico 1

function exec() {
    const saudacao = 'Falaa'
    return saudacao 
}

const cliente = {
    nome: 'Guilherme',
    peso: 50,
    idade: 20,
    endereco: {
        logradouro: 'ruaTal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)