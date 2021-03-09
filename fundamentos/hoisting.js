// hoisting é o efeito do JS que "sobe" a variavel como no exemplo abaixo
console.log('a =', a)
var a = 2
console.log('a =', a)

// isso não ocorre com Let
console.log('b =', b)
let b = 3
console.log('b =', b)