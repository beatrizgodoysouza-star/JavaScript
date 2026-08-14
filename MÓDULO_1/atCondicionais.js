//#region atividades 

//#region Atividade 1
// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".
const idade = 17
if (idade >= 18){
    console.log("Maior idade");
} else{
    console.log("Menor idade");
}
//#endregion

//#region Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
const nota = 6
if (nota >= 7){
    console.log("Aprovado");
} 
if (nota < 7 && nota >= 6){
    console.log("Recuperação");
} else if (nota <= 5){
    console.log("Reprovado");
}

switch(true){
    case (nota >=0 && nota < 5):
        console.log("Reprovado");
        break;
    case(nota >=5 && nota < 7):
        console.log("Recuperação");
        break;
    case(nota >=7 && nota <= 10):
        console.log("Aprovado");
        break;
default:
    console.log("Nota não encontrada");
}
//#endregion

//#region Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.
const usuario = "BiaGodoy"
const senha = 7654


if( senha == 7654 && usuario == "BiaGodoy"){
    console.log("Usuário pode entrar no sistema");
} else {
    console.log("Usuário não pode entrar no sistema");
}
//#endregion

//#region Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).
const statusPedido = 3

switch(statusPedido){
    case 1:
        console.log("Pendente");
        break;
    case 2:
        console.log("Pago");
        break;
    case 3:
        console.log("Enviado");
        break;
    case 4:
        console.log("Processando");
        break;
    case 5:
        console.log("Entregue");
        break;
    case 6:
        console.log("Concluído");
        break;
    
default:
    console.log("Status não encontrado");
}
//#endregion

//#region Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.]
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
//#endregion

//#region atividade 6 - Refaça o exercicio 5 agora usando for...of e while.]
let contador = 1;
while (contador <= 100) {
    if (contador % 2 === 0); {
        console.log(contador);
    }
    contador++;
}
//#endregion

//#region Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
const nomes = ["Beatriz","Miguel","Greice","Maria Clara","Nicoly","Henry","Mariana","Vithor","Helena","Leandro"];
  
for(const nome of nomes);
    console.log(nome);
//#endregion

//#region Atividade 8 - Crie um array com 10 nomes e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 
const nomes2 = ["Beatriz","Miguel","Greice","Maria Clara","Carlos","Henry","Maria","Ana","Helena","Leandro"];

for (const nome of nomes2) {
    if (nome.length > 5); {
        console.log(nome); 
    }
}
//#endregion

//#region Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/
const numeros = [10, 20, 30, 40, 50]
let soma = 0;

for (const numero of numeros); {
    soma = soma + numero; 
} console.log(soma);
//#endregion

//#region Atividade 10 — Desafio do backend 
// Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
for(let pedido of pedidos){
    if(pedido.pago === true)
        console.log(pedido)
}
/*for(let i = 0; i < pedidos.length; i++)
    if(pedidos[i].pago === true){
        console.log(pedido[i])
    }
*/
//#endregion