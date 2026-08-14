//#region ante só true or false

const idade = 18

console.log(idade>=18);

//agora podemos tomar decisões com essas respostas
const idade1 = 20

if (idade >=18) {
    console.log("Maior de idade")
}

//#endregion

//#region if or else
const idade2 = 16

// em js usamos as chaves para eliminar um bloco de código
if(idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log ("Menor de idade");
}
//#endregion

//#region atividade if or else 


//aprovado >= 7, reprovado <= 4, recuperação 5 e 6
const nota = 4

if (nota >= 7) {
    console.log("Aprovado")
}
if (nota == 6){
    console.log("Recuperação")
} else if (nota <= 5){
    console.log("Reprovado")
} 
/*De outra forma*/
nota = 4
const notaArredondada = Number(nota.toFixex(2));
console.log (notaArredondada) // limita apenas duas casa decimais

if (nota < 5 ){
    console.log("Reprovado");
}
if (nota >= 5 && nota < 7) {
    console.log("Aprovado");
}
else if (nota >= 7){
    console.log("Aprovado");
}

//#endregion

//#region swithch case
//switch case
const dia = 4

switch(dia ){
    case 1: 
    console.log("Domingo")
    break;
    case 2: 
    console.log("Segunda-Feira")
    break;
    case 3: 
    console.log("Terça-Feira")
    break;
    case 4: 
    console.log("Quarta-Feira")
    break;
    case 5: 
    console.log("Quinta-Feira")
    break;
    case 6: 
    console.log("Sexta-Feira")
    break;
    case 7: 
    console.log("Sábado")
    break;

default:
    console.log("Dia não encontrado");
    
}
/* Quando usar switch case?
   - Quando temos muitos condições para verificar;
   - Quando temos uma variável que pode ter muitos valores diferentes;
   - Quando queremos deixar o código mais legível;

Quando usar if/else?
   - Quando temos poucas condições para verificar
   */
//#endregion

//#region operador ternario
//abstração de if/else
const idade4 = 20;

//pode refazer com operador ternario
const mensagem = idade4 >=18 ? "Maior" : "Menor";
console.log(mensagem)
//constante = condição ? valor se true : valor se else
/* Quando usar o operador ternario? 
   - Quando temos uma condição simples
   -Quando queremos deixar o código mais legível
   */
//#endregion

//#region laços (while)
let contador = 1;

while(contador <=10){
    console.log(contador)
    contador++
}
//#endregion

//#region laços (for)
 //for(//iniciação; condição; incremento)

for (let i = 1; i <= 5; i++){
    console.log(i)
}

//for...of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];
//otimizado para array
for(const fruta of frutas)
    console.log(fruta)

//tradicional
for (let i=0; i < frutas.length; i++){
    console.log(frutas [i])
}

//#endregion




