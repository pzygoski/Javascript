import entradaDados from 'readline-sync';

let nome = entradaDados.question("Informe seu nome: ");
console.log(`Olá, ${nome}!`);

let x = entradaDados.questionFloat("X:");
let y = entradaDados.questionFloat("Y:");
console.log(`Total: ${x + y}`);

//let total = Number(x)+Number(y);
//console.log(`Total: ${total}`);
