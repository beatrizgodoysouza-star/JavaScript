//#region funcoes simples
function quandoClicarNoBotao(){
    console.log("Obrigado por comprar em nossa loja!");
}
//invocação da função
quandoClicarNoBotao();

function exibirMensagem(){
    console.log("Bebam água!");
}
exibirMensagem();
//mais simples -  dentro do parenteses sõ os parametros
//---------------------------------------------------------------------------
//#endregion

//#region calculos na função

function somar(){
    const resultado = 8 + 3;
    console.log(resultado);
}
somar();

//----------reutilizavel
function somar(numero1, numero2){
    console.log(numero1 + numero2)
} 
somar(8, 3);
somar(10, 20);
somar(128, 156);

//#endregion

//#region retorno

function somar(numero1, numero2){
    return(numero1 + numero2);
}
const resultado1 = somar(21, 9)
console.log(resultado1)

//---------------------------------------

function somar(numero1, numero2){
    return(numero1 + numero2);
}
const resultado = somar(7, 9);

if (resultado >=11){
    console.log("O senai é legal");
}
else{
    console.log("ainda é massa")
}
//#endregion

//console.log() é como mostar o resultado em uma tela
//return é como entregar o rsultado para outra parte do programa utilizar.

//#region calcular desconto
function calcularDesconto(valor, desconto){
    return valor - desconto;
}
const valorFina1 = calcularDesconto(100, 20)
console.log(valorFinal);

//imposto sobre produto
const valorImposto = valorFinal * 0.04;
console.log("Valor tributário: "+ valorImposto)

//Regra cashback
if (valorFinal > 50){
    const cashback = valorFinal*0.10
    console.log("Valor do cashback: " + cashback);
}
//parcelamento
function parcelamento(valorFinal){
    if(valorFinal > 399){
    //compras acima de 399 sem juros
    const valorParcelado = valorFinal / 6;
    console.log("Valor das parcelas 6x sem juros: R$" +valorParcelado);
}
else if (valorFinal >= 100){
    //compras entre 100 e 399: com juros de 2% no total
    const valorParcelado = (valorFinal * 1.02) / 6;
    console.log("Valor das parcelas 6x com juros: R$" + valorParcelado);
}
else {
    //  compras abaixo de 100 não parcla
    console.log("O valor não atinge o mínimo de R$100 para parcelamento")
}
}
parcelamento(420)
//#endregion

//declarar as constantes
const valor = 400;
const desconto = 20;
//constante com calculo do valor final
const valorFinal = calcularDesconto(valor, desconto);

//chamada das funções
calculoImporto(valorFinal);
cashback(valorFinal);
parcelamento(valorFinal);

//#region funções

function calcularDesconto(valor, desconto){
    return valor - desconto;
}

//imposto sobre produto
function calculoImporto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: "+ valorImposto)
}

//Regra cashback
function cashback(valorFinal){
    if (valorFinal > 50){
    const cashback = valorFinal*0.10
    console.log("Valor do cashback: " + cashback);
}
}

/* regra de parcelamento
    R$ 100  ja começa a parcelar e tem juros de 2% do total
    para ser sem juros acima de 399
    o limite é de 6 parcelas 
    
*/

function parcelamento(valorFinal){
    if(valorFinal > 399){
    //compras acima de 399 sem juros
    const valorParcelado = valorFinal / 6;
    console.log("Valor das parcelas 6x sem juros: R$" +valorParcelado);
}
else if (valorFinal >= 100){
    //compras entre 100 e 399: com juros de 2% no total
    const valorParcelado = (valorFinal * 1.02) / 6;
    console.log("Valor das parcelas 6x com juros: R$" + valorParcelado);
}
else {
    //  compras abaixo de 100 não parcla
    console.log("O valor não atinge o mínimo de R$100 para parcelamento")
}
}


//#endregion

//#region função tradicional

function somarTra(numero1, numero2){
    return numero1 + numero2
}

//Arrow Function
const somar = (numero1, numero2) => {
    return numero1 + numero2
}
console.log("Tradidional:", somarTra(8, 3));
console.log("Soma:", somar(9,2));

//#endregion
