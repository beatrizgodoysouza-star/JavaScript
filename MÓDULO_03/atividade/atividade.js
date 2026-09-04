//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/
//coloca o elemento no final
frutas.push("Melão")
console.log(frutas)

//coloca o elemneto no início
frutas.unshift("Amora")
console.log(frutas)

//remove o ultimo item
frutas.pop();
console.log(frutas)

//remove o primeiro elemento
frutas.shift();
console.log(frutas)

//mostrando a quantidade de elementos
console.log(frutas.length);

//#endregion

console.log("---------------------------------------------")

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
nomes.forEach((nome) =>{
    console.log(`Olá ${nome}!`);
})
//#endregion

console.log("---------------------------------------------")

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.
const numerosCom10Porcento = precos.map((precos) => {
    return (precos * 10 / 100) + precos;
});
console.log(numerosCom10Porcento)

//#endregion

console.log("---------------------------------------------")

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.
const maiorQue20 = numeros.filter((numero) => {
    return numero > 20
})
console.log(maiorQue20)

//#endregion

console.log("---------------------------------------------")

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const numero1 = numeros.find((n) => n > 20);
console.log(numero1)

//#endregion

console.log("---------------------------------------------")

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 

const maiorDeIdade = idades.some(n => n > 18);
console.log(maiorDeIdade)

//every
//Usando o array acima codifique respondendo: Todos são maiores de idade?
const maioresQue18 = numeros.every (n => n > 18);
console.log("Todos são maiores de 18? True ou False:",maioresQue18);

//#endregion

console.log("---------------------------------------------")

//#region reduce
//Calcule o valor total.
const valores = [100, 200, 50, 150];

const somas = valores.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(somas)
//#endregion