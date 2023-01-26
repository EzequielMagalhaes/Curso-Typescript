class Pessoa{
    nome:string;
    idade:number;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade
    }

    getNome(){
        return this.nome;
    }

    getIdade():number{
        return this.idade;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    setIdade(idade:number){
        this.idade = idade;
    }
}

let pessoa: Pessoa = new Pessoa('Ezequiel',19);
//          variável do tipo pessoa
let pessoa2 = new Pessoa('Guilherme', 30);

pessoa2.setNome('Felipe');

console.log(pessoa.getNome());
console.log(pessoa2.getNome());