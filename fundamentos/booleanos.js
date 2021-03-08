let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo) // Lembrando que let é variável então eu posso mudar o valor.

isAtivo = 1
console.log(!!isAtivo) // Exclamação significa NÃO, 2 exclamações significa SIM.
console.log(!false) // o NÃO falso é VERDADEIRO.
console.log(!true) // o NÃO verdadeiro é FALSO.

// os !! servem para forçar um verdadeiro, exemplos abaixo
console.log(!!' ')
console.log(!![])
console.log(!!-1)
console.log(!!Infinity)
console.log(!!{})

// exemplos dos falsos com !!
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || 'Desconhecido')// || é "OU". Caso nome seja falso, usar "Descinhecido"