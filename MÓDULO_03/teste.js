//qurero criar um novo array contando apenas os nomes dos produtos que estão disponíveis

//const produtosDisponiveis = [];

const produtos = [
    {nome: "Produto 1", disponivel: true},
    {nome: "Produto 2", disponivel: false},
    {nome: "Produto 3", disponivel: true},
    {nome: "Produto 4", disponivel: true}
];
//for or
for (const produto of produtos){
     if (produto.disponivel == true){
             console.log(produto)
}
 }
 //map

 //filter
 const disponivel = produtos.filter((produto) =>{
        if(produto.disponivel == true)
        return produto 
 })
 console.log(disponivel);
    
//do gersão
console.log("____________Com for of___________")
const produtosDisponiveis = [];

for (const produto of produtos){
    if (produto.disponivel) {
        produtosDisponiveis.push(produto.nome);
    }
};
console.log(produtosDisponiveis);
console.log("_________Com Map__________")

const prodDisponiveisMap = produtos
    .filter((produto) => produto.disponivel === true)
    .map((produto) => produto.nome);
console.log(prodDisponiveisMap)
