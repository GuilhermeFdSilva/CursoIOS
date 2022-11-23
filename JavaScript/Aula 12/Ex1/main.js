//Método getElementById

let titulo = document.getElementById('titulo');

//Alterando o conteúdo do elemnto

titulo.innerHTML = 'Olá meus caros alunos!';

//Configurando o estilo CSS do elemento

titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

//Metodo getElementByClassName

let itens = document.getElementsByClassName('item');
console.log(itens);
console.log(itens[1]);
itens[1].textContent = 'Hello 2';
itens[1].style.fontWeight = 'bold';
itens[1].style.backgroundColor = 'yellow';

//Método getElemntByTagName

let li = document.getElementsByTagName('li');

console.log(li);

for (let i = 0; i < li.length; i++) {
    if (i % 2 == 1) li[i].style.backgroundColor = '#F4F4F4';
    else li[i].style.backgroundColor = '#FFF';
}

//Método getElementsByName

let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';

//Remove elemento do DOM

let item2 = document.getElementById('item2');
item2.remove();

//Retornando o elemento

let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

// Alterar o estilo da Lista

let ul = document.getElementById('items');
ul.style.listStyle = 'none';

//Marcadores numéricos

ul.style.listStyle = 'decimal inside'