function gente(){
    return {nome: 'Ezequiel', idade:28}
}

type G = ReturnType<typeof gente>;

interface Testes{
    nome: G
}

class Test implements Testes{
    nome = {
        nome:'Ezequiel',
        idade:19
    }
}