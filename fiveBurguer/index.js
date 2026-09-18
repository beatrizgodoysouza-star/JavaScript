//exportes e imports
const fs = require("fs/promises");

const {buscarUsuario} = require ("./usuarios");
const {buscarProduto} = require("./produtos");
const {buscarPedidos} = require ("./pedidos")

//função
async function fecharConta(usuarioId){ // try catch ajuda a mostrar e controlar o erro (segurança)
    try{
        //Usuario
        console.log("Buscando Usuário...")
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuario);
       
        console.log("Buscando Pedidos...")
        const pedidos = await buscarPedidos(usuarioId);

    //     //Produto
    //     console.log("Buscando Produto...")
    //     const produto = await buscarProduto(usuarioId);
    //     console.log(produto)
    //
    
        //pedido
        //total geral
        let totalGeral = 0;

        //array para os itens
        const itensConta = [];
        //varrar os pedidos para ver se o itm pedido do cliente
        //varrer os itens(produtos)ve add(push) os itens no itens conta 
        //estrutura da comanda
        for(const pedido of pedidos){
            const produto = await buscarProduto(pedido.produtoId);
            const subTotal = produto.preco * pedido.quantidade;

            itensConta.push({
                item: produto.nome,
                quantidade: pedido.quantidade,
                precoUnitario: produto.preco,
                subTotal: subTotal

            });
            totalGeral += subTotal // += adiciona o total
        }
        //construir nosso arquivo
        const comanda ={
            estabelecimento: "Five Burguer",
            cliente: {
                        id: usuario.id,
                        nome:usuario.nome
                     },
            itens: itensConta,
            totalPagar: totalGeral
        }
        await fs.writeFile ("ComandaCliente.json",
        JSON.stringify(comanda, null, 2), "utf-8");
    }

    catch(erro){
        console.error("Erro ao fechar a conta", erro)
    }
};

fecharConta(1);
