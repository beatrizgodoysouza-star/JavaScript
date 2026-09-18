//#region Array com frutas mudando lugar das frutas/acessando
const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "pera"];

//acessando algum elemento do array
console.log(frutas[1]);
console.log(frutas[4]);
console.log(frutas[2]);

//Contando elementos do array
console.log(frutas.length)

//Acessando o ultimo elememto do array
console.log(frutas[frutas.length - 1]);

//Alterando elementos do array
frutas[1] = "Morango";
console.log(frutas);

//colocando no final do array
frutas.push("Laranja");
console.log(frutas)

//colocando no início do array 
frutas.unshift("Melão")
console.log(frutas)

//remove o ultimo item
frutas.pop();
console.log(frutas)

//deleta do início do array
frutas.shift();
console.log(frutas);

//mostra o item que foi removido
const itemRemovido = frutas.pop();
console.log(itemRemovido);

//varrendo (percorrer) o array
//for of
for (const fruta of frutas){
    console.log(fruta)
    return fruta //consegue usar em outros pontos do códifo (interrompe o código)
}

//forEach executa uam função para cada elemento do array
//Eles fazem algo semelhantes, mas forEach é específico para percorrer
//uam coleção e executar uma ação para cada elemento
frutas.forEach((fruta) =>{
    console.log(fruta);
})

//alterando a primeira letra para maiúscula
frutas.forEach((fruta) =>{
    const nomeFrutaPrimeiraLetraMaiuscula = 
    fruta.charAt(0).toUpperCase() + fruta.slice(1) 
    console.log(nomeFrutaPrimeiraLetraMaiuscula)
})
 //charAt pega o primeiro caracter de cada fruta e
    // da um toUperCase para transformar em letra maiuscula
    //Slice: a apartir da posição/ índice 1 (priemira letra) ele deixa todas as outras minusculas ("fatia a palavra")
//#endregion

//#region Array com número e umas condições
const numeros = [1, 2, 3, 4, 5, 6];

//map - cria um novo array com os elementos modificados
const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});
console.log(numerosDobrados)

//filter - cria um novo array com os elementos que atendem a uma condição
const maioresQue3 = numeros.filter((numero)=>{
    return numero > 3;
}) 
console.log(maioresQue3);

/*
| Método    | Pergunta                              |
|-----------|-------------------------------------- |
| forEach   | O que quero fazer com cada elemento?  |
|  Map      | Comoi quero transformar cada elemento?|
|  Filter   | Quais elementos quero manter          |

*/
//find - procura um elemento que satisfaça uma condiçao (mostrar o primeiro elemnto dps da condição no caso um numero maior que 4 foi o 5)
const numerof = numeros.find((n) => n > 4);
console.log(numerof)

/* filter x find
        filter
        ->retorna vários elementos

        find
        ->retorna o primeiro elemento
*/
//some - verifica se pelo menos um elemento atende a uma condição
//retorna true ou false (boolean)
const existeMaiorQue5 = numeros.some(n => n > 5);
console.log(existeMaiorQue5);

//every - verifica s etodos os elementos atendem a uma condição
//retorna true ou false (boolean)
const todosMaioresQue0 = numeros.every (n => n > 0);
console.log(todosMaioresQue0);

//reduce - reduz o array a um unico valor
//aplicando uma função a cada elemnto
const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);
//#endregion