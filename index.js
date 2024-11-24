
let Mensagem = ' atacou usando ';
class Heroi{
    constructor(nome, idade ,tipo){
        this.nome=nome;
        this.idade=idade;
        this.tipo=tipo;
    }

}

let ataque = new Heroi ('lucas', 26, 'ninja');

if(ataque.tipo==='mago'){
    console.log('o '+ataque.tipo+Mensagem+ 'magia');
}else if(ataque.tipo==='guerreiro'){
    console.log('o '+ataque.tipo+Mensagem+ 'espada');
}else if(ataque.tipo===' monge'){
    console.log('o '+ataque.tipo+Mensagem+ 'artes marciais');
}else{
    console.log('o '+ataque.tipo+Mensagem+ 'shuriken');
}
