const escola = 'Cod3r'

console.log(escola.charAt(4)) // Pede o QUARTO caracter da constante (COMEÇANDO PELO 0)
console.log(escola.charAt(5)) // Se esse caracter não existir ele não gerará erro e sim apontará isso.
console.log(escola.charCodeAt(3)) // Pede o código da Unicode relacionado ao número 3
console.log(escola.indexOf('3')) // Consultei o indíce do número 3 na string

console.log(escola.substring(1)) // Me mostra do caracter 1 em diante da string inteira 
console.log(escola.substring(0, 3)) // Me mostra apartir do caracter 0, 3 caracteres seguintes.

console.log('Escola '.concat(escola).concat("!")) // Concatenar a string para a const escola com "!"
console.log('Escola '+ escola + "!") // Concatenar com + funciona também "!"
console.log(escola.replace(3, 'e')) // Replace do dígito 3 pela letra e.

console.log('ana,maria,pedro'.split(',')) // ARRAY

/*
* String é uma cadeia de caracteres
* Existem varias formas de manipular as strings e esses foram exemplos disso
* Array é um conceito que se refere a organização linear dessas strings
* REGEX É UM TEMA IMPORTANTE PARA PESQUISAR SOBRE O ASSUNTO
*/