let a = Number(prompt("Insira o primeiro número"))
let b = Number(prompt("Insira o segundo número"))
let c

console.log("O primeiro número é maior que o segundo?", a > b)
console.log("O primeiro número é igual ao segundo?", a === b)

if (a % b === 0){
    c = true
    console.log("O primeiro número é divisível pelo segundo", c)
} else{
    c = false
    console.log("O primeiro número Não é divisível pelo segundo", c)
}

if (b % a === 0){
    c = true
    console.log("O segundo número é divisível pelo primeiro", c)
} else{
    c = false
    console.log("O segundo número Não é divisível pelo primeiro", c)
}