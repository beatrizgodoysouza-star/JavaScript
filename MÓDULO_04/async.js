//Async

//no promesses temos 
buscarUsuario().then(usuario => {
    console.log(usuario)
});

//async await - essa função vai funcionar  de forma assincrona e vai ter um pedaço que vamso precisar espearar

//no async-await
async function buscarUsuario() {  //MUITO IMPORTANTE SABER

//aqui é que o que eu quero que aconteça
    try {
        const usuario = await buscarUsuario();
        console.log(usuario);
    }
    catch (erro)
    {
        //erro que rolou
        console.log(erro);
    }
};