//Aritméticos
// "+" = adição ou concatenação
// "-" = subtração
// "*" = multiplicação
// "/" = divisão
// "**" = potenciação(elevação)
// "%" = resto da divisão(ex:10/3 = "3", porem sobra "1")

//Existem precedencial que priorizam sinais na hora de executar uma conta, por exemplo:
    //const num1 = 4;
    //const num2 = 6;
    //const num3 = 10;
    //console.log(num1 + num2 * num3);
//Neste caso o valor de (num2 * num3) foi executada primeira, pois o sinal de multiplicação tem um prioridade maior do que o sinal de adição]
//Exemplo 2:
    //const num4 = 3;
    //const num5 = 2;
    //const num6 = 9;
//console.log((num4 + num5)* num6);
//Ordem de prioridade:
// 1 - "()" tudo que estiver dentro de parenteses
// 2 - "**" potencia
// 3 - "*", "/", "%" esses três ficam no mesmo lugar de prioridade
// 4 - "+" e "-"

//Atribuição de valor
//Incremento = ++
//decremento = --
    //let contador = 1;
    //contador++; //2
    //contador++; //3
    //contador++; //4
    //contador++; //5
    //console.log(contador);

//NaN - Not a Number
    //const num1 = 10;
    //const num2 = "Matheus";
    //console.log(num1 * num2);

//Ao envolver uma string em parseInt(); ela se torna um number
//ex:
const num1 = 10;
const num2 = parseInt("5");
console.log(num1 * num2);

//parseInt(); = numero inteiro
//parseFloat(); = numero decimal