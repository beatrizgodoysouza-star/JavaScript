/*const nome = "Bia"; //string texto
const idade = 17;   // number
const estudante = true; //boolean (sla como escreve) falso ou verdadeiro

console.log(typeof nome); //mostra os tipos */
console.log("_------------------------------------------------------_")
// ------ string -------
const nomeNovo = "Maria";
const cidade = "São Paulo";
const idadeNova = 19
const altura = 1.90
const possuiTatuagem = true;

//forma 1 - interpolação de string
console.log(`Meu nome é ${nomeNovo}, tenho ${idadeNova} anos, minha altura é ${altura}, moro na cidade de ${cidade} e tenho tatuagem: ${possuiTatuagem}`);

//forma 2 - concatenaçao de string
console.log("Meu nome é " + nomeNovo +
    ", tenho " + idadeNova + " anos. Moro na cidade de " + cidade + ". Minha altura é "+ altura + " e tenho tatuagem: "+ possuiTatuagem);

console.log("_------------------------------------------------------_")

const idadeDois = 18;
let maiorDeIdade = true;
//quero saber se é maior de idade
if( idadeDois >=18){
    console.log("É maior de idade");
}

else{
    maiorDeIdade = false
    console.log("Ele é menor de idade")
    maiorDeIdade = false;
    console.log(maiorDeIdade);
}
console.log(maiorDeIdade)

console.log("_------------------------------------------------------_")
//Undefined e null (indefinido e nulo)

let nome;
nome = 10;
console.log(typeof nome)

let usuario = null
console.log(usuario)
