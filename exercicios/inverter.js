
const inverso = (a) => {

    const test = typeof a

    if(!test === 'boolean' || !test === 'number') {
        return `Booleano ou número esperados, mas o parametro é do tipo ${test}`
    } else if (test === 'boolean') {
        return !a
    } else {
        return a * -1
    }
}

console.log(inverso('matheus vagabundo'))
console.log(inverso(2))
console.log(inverso(true))