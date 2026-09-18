//#region Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!
function saudacao(){
    console.log("Olá, Maria!")
}
saudacao()
console.log("----------------------------------")
//#endregion
//----------------------------------------------------------------------

//#region Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.
function soma (numero1, numero2){
    return numero1 + numero2
}
function subtracao (numero1, numero2){
    return numero1 - numero2
}
function multiplicacao (numero1, numero2){
    return numero1 * numero2
}
function divisao (numero1, numero2){
    return numero1 / numero2
} 
console.log("Soma:", soma(10, 5))
console.log("Subtração:", subtracao(10, 5))
console.log("Multipliação:", multiplicacao(20, 5))
console.log("Divisão:", divisao(15, 5))

console.log("---------------------------------------------------------")
//#endregion
//----------------------------------------------------------------------

//#region Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade
const idade = 13
function verificacaoIdade(idade){
    if(idade >=18){
        return ("Maior de idade")
    } else{
        return("Menor de idade")
    }
}
console.log(verificacaoIdade(20))
console.log("------------------------------------------")
//#endregion

//----------------------------------------------------------------------

//#region Atividade 4 — Arrow Function

/*

    Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/
function calcularDobro(numero) {
            return numero * 2;
        }
const calcularDobro2 = (numero) =>{
    return numero * 2
}
console.log("Calcular o dobro (número 1):", calcularDobro (8));
console.log("Calcular o dobro (número 2):", calcularDobro2(9));
console.log("---------------------------------------------------------")
//#endregion
//----------------------------------------------------------------------
