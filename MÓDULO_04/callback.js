//#region Callback

/**
 * Se você pedir uma operação que demora muito o node não precisa esperar parado
 */
//Callback é uma função passada para outra função para ser executada

console.log("1");
console.log("2");
console.log("3");

// Sincrono

//--------------------------------------------------------------

console.log("Início");

console.log("Fim!") // esse Fim aparece antes por conta dos 20000 milisegundos

setTimeout(()=>{ //Uma função
    console.log("Processamento terminou") //isso mostra que o callback não espera uma ação pararealizar outra, ou seja, não espera aparecer "Processamento terminou" para mostrar a palavra Fim
}, 2000);

setTimeout(()=>{ //esse Fim aparece depois porque o tempo de aparição é maior
    console.log("Fim")
}, 2002);
//-------------------------------------------------------------------------------------------------------------------------------

numeros = [1, 2, 3, 4, 5, 6, 7, 90,]

numeros.forEach((n) => { //ele varre a função, mas só aparece se alguém chamar ele
    console.log(n)
});

// //isso é callback
// (n) => {
//     console.log(n)
// };

//Callback é uma função passada para outra função para ser executada perfeitamente
function processarUsuario(nome, callback) {
    console.log("Processando " + nome)
    callback();
}
processarUsuario("Rihanna", () => { // () => {} isso que é chamar o callback {é o que vai acontecer}
    console.log("Usuário processado")
});

//f5vacabalogo de uma vez f10 vai ate a proxima linha de função f11 vai para proxima execução

//--------------------------------------------------------------
//3
function buscarUsuario(callback) {
    //simulação de tempo
    setTimeout(() => {
        //contruindo objeto
        const usuario = {
            id: 1,
            nome: "Rihanna"
        };
        callback(usuario)
    }, 2000)
}
//1
console.log("Início de chamada");
//2
buscarUsuario((usuario) => {
    console.log(usuario);
});
//4
console.log("Fim de Processo")

//problema do callback 
buscarUsuario => buscarPedido => buscarPedido => calcularTotal
//#endregion
