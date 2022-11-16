function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

let x = addNums(4, 5);
console.log(x);

let z = myFunc(4, 5);
console.log(z);

function myFunc(num1, num2){
    return num1 * num2;
}

console.clear();

const hello = () => 'Olá Arrow Function';

console.log(hello);
console.log(hello());

console.clear();
const addNums2 = (num1 , num2) => num1 + num2;

let soma = addNums2(5, 10);
console.log(soma);