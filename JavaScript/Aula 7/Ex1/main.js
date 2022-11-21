// Estrutura Condicional Simples
// Igual Duplo
const a = 10;

if (a == 10) {
    console.log('a é 10');
}

const b = '10';

if (b == 10) {
    console.log('b é 10');
}

// Triplo Igual - Verifica o Tipo

console.clear();

const c = 10;

if (c === 10) {
    console.log('c é 10');
}

const d = '10';

if (d === 10) {
    console.log('d é 10');
}
console.log('Estou fora do If que compara string');

//Estrutura Condicional Composta

console.clear();

const e = '10';

if (e === 10) {
    console.log('e é o numeral 10');
} else {
    console.log(`Resultado da Condição: ${e === 10}`);
    console.log('e não é o numeral 10');
}

// Multiplas Condições

console.clear();

const f = 4;
const g = 11;

if (f > 5 || g > 10) {
    console.log(`Condição é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior do que 10');
} else {
    console.log('f não é maior do que 5 e g não é maior do que 10');
}
if (f > 5 && g > 10) {
    console.log('f é maior do que 5 e g é maior do que 10');
} else {
    console.log(`Condição é ${f > 5 && g > 10}`);
    console.log('f não é maior do que 5 ou g não é maior do que 10');
}

//Desvios Encadeados

console.clear();

const num = 10;

if (num % 2 == 0 && !isNaN(num)) {
    console.log('Número Par!');
} else if (num % 2 != 0 && !isNaN(num)) {
    console.log('Número Impar');
} else {
    console.log('Não é um número!');
}

//Operador Ternario - Exemplo 1

console.clear();

let resultado = 3 > 4 ? 'Sim' : 'Não';
console.log(resultado);

//Operador Ternario - Exemplo 2

console.clear();

let resultado1 = Math.PI < 4 ? console.log('True') : console.log('False');

//Switch

const h = 11;
const cor = h > 10 ? 'Vermelha' : 'Azul';

console.clear();

switch (cor) {
    case 'Vermelha':
        console.log('A cor é vermelha');
        break;
    case 'Azul':
        console.log('A cor é azul');
        break;
    default:
        console.log('A cor não é vermelha nem azul');
}
