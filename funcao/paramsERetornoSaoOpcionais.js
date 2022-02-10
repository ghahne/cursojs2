function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log (`Valor acima do permitido: ${area}m2.`) // Se você jogar um Return aqui ao inves de Console.log, terá apenas a string concatenada e não o undef
    } else {
        return area
    }     
}


console.log(area(4, 5))
console.log(area(5, 5))

