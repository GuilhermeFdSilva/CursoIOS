const valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 + ' por ' + valor02 + ' é ' + valor01 * valor02);
console.log(`A multiplicacção de ${valor01} por ${valor02} é ${valor01 * valor02}`);

console.clear();

const string01 = 'Instituto da Oportunidade Social';
console.log(string01.charAt(0));
console.log(string01[0]);
console.log(string01.charAt(10));
console.log(string01[10]);

console.clear();

let texto = 'abcdefehijklmnopqrstuvxwyz';
console.log(texto.length);

console.clear();

const texto2 = 'Também 123 [] é uma string 231 -1/n';
console.log(texto2.length);

console.clear();

const s = 'Hello World';
console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.clear();

const str = 'Mozilla';
console.log(str.substring(1,3));
console.log(str.substring(2));
const str1 ='A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
const chars = str1.split('');
console.log(chars[7]);
const strCopy = str1.split();
console.log(strCopy);

console.clear();

let mensagem = 'Venha para Microsoft!';
console.log(mensagem);
let novaMensagem = mensagem.replace('Microsoft', 'IOS');
console.log(novaMensagem);

console.clear();

let text = '                     Olá Alunos do IOS!       ';
console.log(text.trim());

console.clear();

let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS'));
console.log(frase.lastIndexOf('IOS'));
console.log(frase.search('IOS'));
console.log(frase.startsWith('S'));
console.log(frase.startsWith('Sou'));
console.log(frase.startsWith('a')); 
console.log(frase.endsWith('!')); 
console.log(frase.endsWith('bom!')); 
console.log(frase.endsWith('x'));