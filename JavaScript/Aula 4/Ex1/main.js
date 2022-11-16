const num1 = new Array(30, -1, 5, 3, 121);
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

console.log(`Primeiro elemento do num1: ${num1[0]}`);
console.log(`Primeiro elemento do num2: ${num2[0]}`);

console.log(`Terceiro elemento do num1: ${num1[2]}`);
console.log(`Quinto elemento do num2: ${num2[4]}`);

console.clear();

const matrix = [['Banana', 'Maçã', 'Pêra'], ['Laranja', true, 1], [null, 'Uva', -350]];

console.log(`Acessar a primeira linha: ${matrix[0]}`);
console.log(`Acessar o segundo elemento: ${matrix[0][1]}`);

console.clear();

let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];

console.log(`Antes: ${moedas}`);
moedas[2] = 'Yen';
console.log(`Depois: ${moedas}`);

let matrix1 = [[1, 2, 3], [4, 5, 6]];
console.log('Antes:');
console.log(matrix1);
matrix1[0][2] = -10;
console.log('Depois:')
console.log(matrix1);

console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

console.clear();

let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);

console.clear();

let array = [0, 1, 2, 3, 4];
console.log(array.length);

console.clear();

const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); // x = 'Manga'
console.log(frutas1);
console.log(x);

console.clear();

const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi'); // y = 5

console.log(frutas2);
console.log(y);

console.clear();

const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift(); // z = 'Banana'
console.log(frutas3);
console.log(z);

console.clear();
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi');
console.log(frutas4);
console.log(w);

console.clear();
const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];

console.log(frutas5);