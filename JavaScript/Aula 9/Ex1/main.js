// Método ForEach

const frutas = ['apple', 'orange', 'cherry'];

frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
    console.log(`Índice: ${index}`);
    console.log(`Elemnto: ${item}`);
}

// Método ForEach com Arrow Function

console.clear();

const frutas01 = ['apple', 'orange', 'cherry'];

frutas01.forEach((index, item) => {
    console.log(`Índice: ${index}`);
    console.log(`Elemnto: ${item}`);
});

// ForEach com Array de Objetos

console.clear();

const tarefas = [
    {
        id: 1,
        texto: 'Acordar',
        isComplited: true,
    },
    {
        id: 2,
        texto: 'Criar coragem',
        isComplited: false,
    },
    {
        id: 3,
        texto: 'Estudar',
        isComplited: true,
    },
];

tarefas.forEach((teste) => console.log(teste.texto));

// Método Map

console.clear();

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.log('Números: ');
console.log(numeros);
console.log('Novo Array: ');
console.log(newArray);

// Outro Exemplo

console.clear();

const mapText = tarefas.map((valor) => valor.texto);

console.log(mapText);

// Método Filter

console.clear();

const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => idade >= 18);
console.log(filtroIdade);

// Outro Exemplo

console.clear();

const filtroCompletas = tarefas.filter((item) => item.isComplited === true);

console.log(filtroCompletas);

// Método Find

console.clear();

const meuArray = [
    { nome: 'apple', quantidade: 2 },
    { nome: 'banana', quantidade: 0 },
    { nome: 'cereja', quantidade: 5 },
];

console.log(meuArray.find((item) => item.nome === 'cereja'));
