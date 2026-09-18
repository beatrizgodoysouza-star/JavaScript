//construir u array com pedidos 
 
const pedidos = [
    {
        id: 1,
        usuarioId: 1,
        produtoId: 1,
        quantidade: 2
    },
    {
        id: 2,
        usuarioId: 1,
        produtoId: 2,
        quantidade: 1
    },
    {
        id: 3,
        usuarioId: 2,
        produtoId: 4,
        quantidade: 6

    }
];

//função buscarPedidos
async function buscarPedidos(usuarioId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pedidosUsuario = pedidos.filter((pedido) => pedido.usuarioId === usuarioId);

            if(pedidosUsuario.length >0){
                resolve(pedidosUsuario);
            }
            else{
                reject("Não existe pedido para esse cliente");
            }
        }, 2000)
    })
}

//exports
module.exports = {
    buscarPedidos
};