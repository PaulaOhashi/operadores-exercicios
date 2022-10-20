//Parte 1
console.log("5 é maior que 20 e também é menor que 2",(5 > 20) && (5 < 2))
console.log("5 é igual a 5 ou é igual a “5”", (5 === 5) || (5 === "5"))
console.log("negação de (vinte é maior que cinquenta)", !(20>50))
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", !((20 > 50) || (50 > 70)))
console.log("\n")
//Parte 2
const salarioFixo = 2000
const comissao = 0.1
const auxilioCreche = 45.5
const numFilhos = 2
const inss = 0.05

const janeiro = 5784.50
const fevereiro = 3418.41
const março = 4124.10
const abril = 1874
const maio = 7000
const junho = 9450

//1) O salário fixo mais o auxílio creche
let x = salarioFixo + (numFilhos * auxilioCreche)
console.log("Auxílio creche", x)

/* 2) Quanto Fulano de Silva receberá de comissão 
em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2) */
let comJan = janeiro * comissao
console.log("Comissao de Janeiro", comJan)

/* 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.) */
let z = comJan + salarioFixo
let descInssJan = z * inss
console.log("Desconto INSS mes de Janeiro", descInssJan)
console.log("\n")
//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

let salarioJan
salarioJan = salarioFixo + comJan - descInssJan + (numFilhos*auxilioCreche)
console.log("Salário Janeiro", salarioJan)

let salarioFev
salarioFev = salarioFixo + (fevereiro*comissao) - (salarioFixo+(fevereiro*comissao))*inss + (numFilhos*auxilioCreche)
console.log("Salário Fevereiro", salarioFev)

let salarioMar
salarioMar =  salarioFixo + (março*comissao) - (salarioFixo+(março*comissao))*inss + (numFilhos*auxilioCreche)
console.log("Salário Março", salarioMar)

let salarioAbr
salarioAbr = salarioFixo + (abril*comissao) - (salarioFixo+(abril*comissao))*inss + (numFilhos*auxilioCreche)
console.log("Salário Abril", salarioAbr)

let salarioMai
salarioMai = salarioFixo + (maio*comissao) - (salarioFixo+(maio*comissao))*inss + (numFilhos*auxilioCreche)
console.log("Salário Maio", salarioMai)

let salarioJun
salarioJun = salarioFixo + (junho*comissao) - (salarioFixo+(junho*comissao))*inss + (numFilhos*auxilioCreche)
console.log("Salário Junho", salarioJun)

console.log("\n")
//5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
let media = (salarioJan+salarioFev+salarioMar+salarioAbr+salarioMai+salarioJun)/6
console.log("A media de salarios é:", media)






