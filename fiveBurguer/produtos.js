//contruir meu array de produtos
const produtos = [
    {
        id: 1,
        nome: "Five Pool",
        preco: 46
    },
     {
        id: 2,
        nome: "Five BBQ",
        preco: 32
    },
     {
        id: 3,
        nome: "Batata Frita",
        preco: 8
    },
     {
        id: 4,
        nome: "Coca-Cola Lata",
        preco: 9
    },
     {
        id: 5,
        nome: "Five Kids",
        preco: 35
    },
     {
        id: 6,
        nome: "Porção Tilápia",
        preco: 55
    }
]


//função buscarProdutos
async function buscarProduto(id){
      return new Promise ((resolve,reject) => {

        setTimeout(() => {
            
            const produto = produtos.find(produto => produto.id === id); //find usado para buscar o usuário
            
            if (produto){
                resolve(produto);
            }
            else{
                reject("Produto não encontrado")
            }

        },1000)
    })
};

//module para exportar
module.exports = {
    buscarProduto
};