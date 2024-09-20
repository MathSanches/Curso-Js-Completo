const nome = 'Matheus Mariano';
const sobrenome = 'Sanches';
const idade = '18';
const pesoEmKg = '78';
const alturaEmM = '1.75';
const anoDeNascimento = '2005';
const IMC = pesoEmKg/(alturaEmM*alturaEmM);

// console.log('Meu nome é', nome, sobrenome, 'eu tenho', idade, 'peso', pesoEmKg, 'kg tenho', alturaEmM, 'de altura', 'e meu IMC é de:', IMC);

// TEMPLATE STRINGS

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoEmKg} Kg`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de:${IMC}`);
console.log(`${nome} nasceu em ${anoDeNascimento}.`)