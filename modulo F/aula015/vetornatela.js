var num = [4,5,6,7]

console.log(num)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for (var pos = 0; pos<num.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
*/

for (var pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}