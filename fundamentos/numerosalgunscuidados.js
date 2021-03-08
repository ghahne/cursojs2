console.log(7 / 0)

/*
* Exemplo de tipagem fraca do Js, em outras linguagens
* isso não funcionária pois "10" foi definido como STRING e não numero
*/
console.log('10' / 2)
console.log('show' * 2) //essa string não é interpretada como number, resultado: NaN
console.log('3' + 2) // o + aqui tem sentido de concatenação, não realizando a soma "3+2" e sim acrescentando um número 2 ao lado da STRING "3".

/* 
* Alguns resultados de operações não são 100% precisos pelo fato do js escolher
* velocidade de aplicação das funcionalidades sobre isso
*/
console.log(0.1 + 0.7) //0.7999999999999999 é o resultado informado, não 0.8
