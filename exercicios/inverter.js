
const inverso = (dado) => {

    const type = typeof dado

    if(type !== 'boolean' && type !== 'number') {
        return `Booleano ou número esperados, mas o parametro é do tipo ${type}`
    } else if (type === 'boolean') {
        return !dado
    } else {
        return dado * -1
    }
}

console.log(inverso(-2))
