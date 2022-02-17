let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = (a) => 2 * a // return implícito 

console.log(dobro (Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // NÃO tem parâmetro 
ola = _ => 'Olá' // TEM parâmetro
console.log(ola()) // Você pode ignorar o parâmetro ao chamar a function
