// tentando entender algumas formas de usar objetos, fora do curso

var meuObjeto = new Object ()
meuObjeto.nome = "pedro"
meuObjeto.altura = "1.92"
meuObjeto.idade = "25"

var meuObj2 = new Object(),
    str = "minhaString"
    aleat = Math.random(),
    obj = new Object


meuObj2.tipo = "sintaxe de ponto"
meuObj2 ["data de criacao"] = "string com espaco"
meuObj2 [str] = "valor da string"
meuObj2 [aleat] = "numero aleatorio"
meuObj2 [obj] = "Objeto"
meuObj2 [""] = "Mesmo uma string vazia"

console.log(meuObj2)

var nomeDaPropriedade = 'altura'
meuObjeto[nomeDaPropriedade] = '1.50'

console.log(nomeDaPropriedade)