//exemplo de template string abaixo.
const nome ='Guilherme'
const concatenacao = 'Olá ' + nome + '!' // isso é uma concatenação normal 
const template = `Olá ${nome}!` // isso é com template string.
const template2 = `
    Olá 
    ${nome}!` /*
    * Templante é mais flexível no geral, permite quebra de linhas e etc. 
    */

console.log(concatenacao, template)

// expressões...
console.log(`1+1 = ${1+1}`)

// interpolação de strings permite funções.
const up = texto => texto.toUpperCase()
    
console.log(`Ei... ${up('cuidado')}!`)
    
const caixaAlta = s => s.toUpperCase()

console.log(`deixar ${caixaAlta('esse')} item`) 