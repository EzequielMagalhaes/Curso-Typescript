function pessoas(par) {
    return [par.nome, par.idade, par.altura];
}
console.log(pessoas({
    nome: 'Ezequiel',
    idade: 19,
    altura: 1.85
}));
