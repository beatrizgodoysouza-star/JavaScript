temperatura = 380;
freioPressionado = true

const alertaDePerigo = temperatura >= 400;
console.log(alertaDePerigo)

const usoIntenso = temperatura > 300 && freioPressionado;
console.log(usoIntenso)

const freioSeguro = temperatura < 400 && temperatura >= 50;
console.log(freioSeguro)

console.log(temperatura > 400 || temperatura < 0);

console.log (!( freioPressionado == true));