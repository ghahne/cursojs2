const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger me informa se o valor é INTEIRO
console.log(Number.isInteger(peso2))

/*
* Operação matemática, aqui foram definidos como constantes
* os valores iniciais da operação
*/
const avaliacao1 = 9.871
const avaliacao2 = 6.871

/* 
* Avaliação 1 VEZES o peso 1 MAIS 
* Avaliação 2 VEZES o peso 2
* O que eu defini como média seria o total dessa operação 
* dividido pela soma do peso1 + peso2
*/
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

/*
* Pedi para o console imprimir o valor da media
* toFixed determina 2 casas decimais como 
* limite no resultado da operação executada
*/
console.log(media.toFixed(2))

/* 
* toString 2 transforma o valor de média em um número Binário.
*/
console.log(media.toString(2))
console.log(typeof media)