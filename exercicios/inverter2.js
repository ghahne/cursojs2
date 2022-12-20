const inverso = (a) => {
    let type = typeof a

    const validTypes = ['boolean','number']

    if(!validTypes.includes(type)) {
        return `Booleano ou número esperados, mas o parametro é do tipo ${type}`
    }

    if(type =='boolean') return !a 
    else return a * -1
}

console.log(inverso('matheus vagabundo'))