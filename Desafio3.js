// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para atacar
    atacar() {
        let ataque;

        // Definindo o tipo de ataque com base no tipo de herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${ataque}`);
    }
}

// Criando instâncias de heróis
const mago = new Heroi('Merlin', 35, 'mago');
const guerreiro = new Heroi('Conan', 40, 'guerreiro');
const monge = new Heroi('Bruce', 30, 'monge');
const ninja = new Heroi('Hanzo', 28, 'ninja');

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
