// funções importantes do JS dentro de Object

const pessoa = {
    nome: 'Julia',
    idade: 21,
    peso: 48,
}

console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))
console.log(Object.values(pessoa))


Object.entries(pessoa).forEach (([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '21/09/2001'
})

pessoa.dataDeNascimento = '03/10/2000'
console.log(pessoa.dataDeNascimento)

// Object.assign ECMAScript 2015

const dest = {
    a: 1
}

const o1 = {
    b: 2
}

const o2 = {
    c: 3,
    a: 4,
}

const obj = Object.assign(dest, o1, o2)

console.log(obj)

// junta tudo que é passado depois do primeiro obj nos parametros da função (ele junta no próprio primeiro objeto)