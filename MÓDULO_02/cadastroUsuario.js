// cadastro de usuario
function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };

}
const usuario = cadastroUsuario(1, 
                                "Bia",
                                "200709", 
                                41995483869, 
                                "beatrizgogoysouza@gmail.com");
console.log(usuario);

console.log("Olá " + usuario.nome + ", seu cadastro foi realizado com sucesso!")