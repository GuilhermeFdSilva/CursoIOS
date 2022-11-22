//Classes
class Carro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
};

//Instanciando objetos a classe

let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);

//Imprimindo Vlores

console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);