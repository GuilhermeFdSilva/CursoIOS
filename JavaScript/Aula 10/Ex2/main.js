class Carro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano){
        return ano - this.ano;
    }
};

let dataHoje = new Date();
let ano = dataHoje.getFullYear();

let meuCarro = new Carro('Ford', 2014);

console.log(meuCarro.idadeCarro(ano));