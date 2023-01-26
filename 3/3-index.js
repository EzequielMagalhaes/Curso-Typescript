var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('Ezequiel', 19);
//          variável do tipo pessoa
var pessoa2 = new Pessoa('Guilherme', 30);
pessoa2.setNome('Felipe');
console.log(pessoa.getNome());
console.log(pessoa2.getNome());
