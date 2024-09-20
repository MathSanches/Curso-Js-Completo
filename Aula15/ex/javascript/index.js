let numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const texto6 = document.getElementById('texto6');

numeroTitulo.innerHTML = numero;
texto1.innerHTML = `<p>Raiz quadrada: <b>${numero ** 0.5}</b></p>`
texto2.innerHTML = `<p>${numero} é inteiro? <b>${!!(Number.isInteger(numero))}</b></p>`
texto3.innerHTML = `<p>É inteiro? <b>${!!(Number.isNaN(numero))}</b></p>`
texto4.innerHTML = `<p>Arredondando para cima fica: <b>${Math.ceil(numero)}</b></p>`
texto5.innerHTML = `<p>Arredondando para baixo fica: <b>${Math.floor(numero)}</b></p>`
texto6.innerHTML = `<p>Com duas casas decimais fica: <b>${numero.toFixed(2)}</b></p>`

//Em vez de criar varias divs igual o idiota aqui fez, você pode fazer usando "texto.innerHTML +="