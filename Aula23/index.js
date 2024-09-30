/*
FALSY -----------> TODOS OS VALORES DENTRO DO JAVASCRIPT QUE SÃO AVALIADOS COMO FALSOS
-false
-0
-'', "", `` ----> todo tipo de string vazia
-null/undefined
-NaN
*/ 

function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'Ok';

console.log(vaiExecutar && falaOi()); // teste usando AND

console.log(0 || false || false || 'Tudo bem com você?' || undefined); // teste usando OR

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

