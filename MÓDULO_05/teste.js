// Criar um arquivo 
const fs = require("fs/promises");

async function criarArquivo(){
    const livros = [
        {
            id: 1,
            título: "É assim que acaba",
            autor: "Collen"
        },
        {
            id: 2,
            título: "Harry Potter",
            autor: " J. K. Rowling"
        }
    ];
    // Criar o arquivo
    await fs.writeFile("Livros.json", JSON.stringify("livros.json", null, 2)); // stringify transforma em JASON

    console.log("Arquivo criado com sucesso")
}


//Listar arquivo
async function listarLivros(){
    //ler arquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //transformar para objeto
    const livros = JSON.parse(dados); // parse tranforma em objeto de novo (sai do jason)
    //exibir no console (no futuro será seu site)
    console.log (livros);
}

//Adicionar um arquivo
async function adicionarLivros(){
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8"); //readfile le o arquivo
    
    //transformar em objeto(parse)
    const livros = JSON.parse(dados); //parse volta a ser um objeto


    //retransformar eno objeto para json
    await fs.writeFile("Livros.json", JSON.stringify("livros.json", null, 2));

    //*livro adicionado com sucesso
    console.log("Livro adicionado com sucesso");
}

//Alterar livros
async function alterarLivro(id){
    //precisamos saber o livro 
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar o arquivo de JSON para objeto
    const livros = JSON.parse(dados);

    //descorbir o livro
    const livro = livros.find((livro)=> livro.id === id); // quer procurar o livro específico (filter)

    //lógico = se não existir
    //! => é com negação,  como false
    if(!livro){
        console.log("Livro não encontardo")
        return;
    }

    //altera o livro
    livro.autor = "Beatriz Godoy";

    //retransformar para JSON
    await fs.writeFile("Livros.json", JSON.stringify("livros.json", null, 2));
    //falar que deu certo (console)
}

//Deletar livros

//Função executar 
async function executar(){
    //await criarArquivo();

    await listarLivros();

    await adicionarLivros();

    await alterarLivro(2);
}
//chamando o início (endpoint)
executar();