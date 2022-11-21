//While

let contador = 1;

while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

//Do While

console.clear();

let i = 0,
    text = '';

do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

//For

console.clear();

for (let i = 0; i < 10; i++) {
    console.log(`Laço For número = ${i}`);
}

// Laço de Array

const frutas = ['Apple', 'Orange', 'grape', 10, true];
console.clear();

for (let i = 0; i < frutas.length; i++) {
    console.log(`Nome: ${frutas[i]}`);
}

// Array de Objetos e laços

console.clear();

const todos = [
    {
        id: 1,
        text: 'Batata',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Arroz',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Feijão',
        isCompleted: false,
    },
];

for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}
