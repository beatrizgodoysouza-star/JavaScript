//simulação
//função auxiliar
const esperar = (ms) => new Promise (
    resolve => setTimeout(
        resolve, ms
    )
);

// buscarUsuario
async function buscarUsuario(Id){ // vai entrar e esperar e entar no return
    await esperar(2000); //await vai simular o tempo

    return {
        id: Id, //O Id que a gnt manda executar,
        nome: " Robyn Riahnna Oliveira",
        email: "ririoliveira10@email.com"
    }
};

//função Buscarpedidos

async function buscarPedidos(usuarioId){
    await esperar (3000);

    const todosPedidos = [
        {id:1, prduto: "x-tudo" },
        {id:2, produto: "Coca-Cola"},
        {id:3, produto: "X-frango"}
    ]

    return todosPedidos.filter(pedido => pedido.id === usuarioId);

}

    //execuatr função
async function executar(){
    try{
         console.log("Iniciando simulação")
         console.log("Buscando Usuário...")
         buscarUsuario()
         const usuario = await buscarUsuario(1);
         console.log("Usuário encontardo! ",  usuario);

         //buscar pedidos
         console.log("Buscando Pedidos pelo id...", usuario.id);
         const pedidos = await buscarPedidos(usuario.id);
         console.log("O pedido encontrado foi:", pedidos)
        
         
    }
    catch(erro){
        console.log("Deu errado!");
    }
}                                    
executar();