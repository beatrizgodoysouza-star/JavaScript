
const usuarios = [
    {
        id: 1,
        nome: "Beatriz",
        whats: "(19)2986-4820",
        email: "beatriz.souza@gmail.com",
        cpf: "13657-3456"


},

{
        id: 2,
        nome: "Helena",
        whats: "(19)97104-2838",
        email: "heleninha.doGrau@gmail.com",
        cpf: "67549292"
},

{
        id: 3,
        nome: "Carol",
        whats: "(19)97104-7654",
        email: "carolzinha.dafamilia@gmail.com",
        cpf: "6765292"
},
];

//função buscarusuario
async function buscarUsuario(id){

    return new Promise ((resolve,reject) => {

        setTimeout(() => {
            
            const usuario = usuarios.find(usuario => usuario.id === id); //find usado para buscar o usuário
            
            if (usuario){
                resolve(usuario);
            }
            else{
                reject("Usuário não encontrado")
            }

        },1000)
    })//instanciar - iniciando
};

//transformando em módulo
module.exports = {
    buscarUsuario
};

