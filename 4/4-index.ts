interface Pessoas{
    nome:string,
    idade?:number, //o ponto de interrogação é pra sinalizar que esse item é opcional
    altura?:number // qunado for implementar essa interface em alguma função;
}

function pessoas(par:Pessoas){
    return [par.nome, par.idade, par.altura];
}

console.log(pessoas({
    nome:'Ezequiel',
    idade:19,
    altura:1.85
}));