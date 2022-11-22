class Pessoa{
    constructor(fristName, lastName, dob){
        this.fristName = fristName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.fristName} ${this.lastName}`;
    }
}

const pessoa1 = new Pessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new Pessoa('Marry', 'Smith', '1970-06-13');

console.log(pessoa1);

console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());

console.log(pessoa1.getFullName());

console.clear();

function PessoaFunc(fristName, lastName, dob){
    this.fristName = fristName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    };
    this.getFullName = function(){
        return `${this.fristName} ${this.lastName}`
    };
}

const pessoa3 = new PessoaFunc('John', 'Doe', '1980-04-03');
const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');

console.log(pessoa3);
console.log(pessoa4.dob.getFullYear
    );

PessoaFunc.prototype.getBirthDayMonth = function(){
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};

PessoaFunc.prototype.getFristName = function(){
    return `${this.fristName}`;
};

console.clear();

console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFristName())