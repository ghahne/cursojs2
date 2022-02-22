function antiga(a, b) {
    return a + b
}

const nova = function (a, b, atualizada = antiga) {
    console.log(atualizada(a, b, 'opaaa'))
}

nova (3, 2)
