console.log('trabalhando com variáveis.')

const name = `Alex de Jesus`
console.log(`My names is ${name}`)

const number = 10.5
//Por default o JS converte string em numero quando há uma operação entre string e numero
//Se não for possível converter em numero a string é gerado erro "NaN: Not a number"
console.log(`10` * number)

let dois = `2`
//parseInt e parseFloat para conversão
console.log(parseInt(dois))

//cidades
const cidades = new Array(`São Paulo`, `Rio de Janeiro`, `Salvador`)
console.log(cidades)
cidades.push(`Rio de Janeiro`) //adicionar um valor a cidades
console.log(cidades)

//indicando somente a posição será excluído da cidades tudo a parti da posição indicada
//parâmetros: posição, quantidade
cidades.splice(1, 1) //remover valor da cidades
console.log(cidades[0])

//condicionais e operadores lógicos:
const idade = 17
const acompanhado = true

//lógicos: &&-AND; ||-OR; !-NOT
const podeViajar = idade >= 18 || acompanhado

if (podeViajar) {
    console.log(`\nPode viajar.`)
} else if (acompanhado) {
    console.log(`Menor de idade acompanhado.`)
} else {
    console.log(`Não é maior de idade.`)
}

//laços de repetição:
let n = 0
while (n < 3) {
    if (cidades[n] == `São Paulo`) {
        console.log(`Cidade existe.`)
        break
    }
    n++
}

for (let num; num < 3; num++) {

}