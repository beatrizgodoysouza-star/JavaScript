//#region start Operadores...

//#region Operadores matematicos


const a = 1500;
const b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //Resto da divisao

//#endregion

//#region operadores de comparação

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); // Comparação de valor e tipo
console.log(a !== b);

//#endregion

//#region Exercicio


const idade1 = 20;
const idade2 = 25
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); // Comparação de valor e tipo
console.log(a !== b);
//#endregion

//#region Operador Lógico AND
const idade3 = 20;
const idade4 = 25;
console.log(idade3 > 18 && idade4 > 18 ); //todos precisam ser verdades

//Operador Lógico OR
console.log(idade3 > 18 || idade4 > 18); //todos precisam ser verdadeira

//Operador lógico NOT
console.log (!(idade3 > 18)); //inverte o valor da expressão
//#endregion

//#region Combinando operadores
const idade = 25;
const matriculaAtivo = true;

const podeComprar = idade >= 18 && matriculaAtivo;

console.log(podeComprar)
//#endregion

//#region Operadores de incremento e decremento 
let numero = 10;
console.log(numero++); //10
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10

//#endregion

//#region Exercicio 1 - Comparaçao
//faça comparaçao a partir da variavel informada
const x = 5;
const y = 10;
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); //Comparação de valor
console.log(x === y); // Comparação de valor e tipo
console.log(x !== y);
//#endregion

//#region Exercicio 2 - == VS ===
//verifique os resultados das comparações a seguir 

console.log(10 == "10");

console.log(10 === "10");

console.log (true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
//#endregion

//#region Exercicio 3 - Sistema de acesso - Desafio
const dataNascimento = new Data("2000 -02-28");
const ativo = true; 
/*Crie uma expressão que indique se o usuário pode acessar o sistema
Regra: O usuário precisa terter pelo menos 13 anos e estar ativo*/

const novaIdade =(new Data( - dataNascimento))
//#endregion

//#region Transformando 18 anos em milisegundos
const deszoitoAnosemMilisegundos = 18 * 365.25 * 24 *60 * 60 * 100;

//comparando milissegundo em milessegundo
const podeAcessar = (new Date() - dataNascimento) >= deszoitoAnosemMilisegundos && ativo
console.log(podeAcessar);

//#endregion

