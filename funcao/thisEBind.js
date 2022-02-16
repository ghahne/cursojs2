const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() 
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
