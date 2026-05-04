let num = [5,8,2,9,3]

/*
num[5] = 6 // adiciona o 6 a 5 posicao das chaves

num.push(7) // adiciona o 7 na ultima chave

num.length // mostra a quantidade de elementos

num.sort() // Ordena de forma crescente
*/

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}