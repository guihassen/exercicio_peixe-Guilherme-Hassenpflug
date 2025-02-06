
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var tubarao ;


function preload() {
    this.load.image('fundo', 'assets/Fundo_mar.png');
   
   //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar peixe
    this.load.image('tubarao', 'assets/peixes/tubarao.png');

    //carregar planta 1
    this.load.image('planta_1', 'assets/plantas/planta_1.png');

    //carregar planta 2
    this.load.image('planta_2', 'assets/plantas/planta_2.png');
}

function create() {
    this.add.image(400, 300, 'fundo');
    
    //adicionar logo na tela
    this.add.image(400, 525, 'logo').setScale(0.75, 0.75);

    //adicionar planta 1 na tela
    this.add.image(250, 250, 'planta_1').setOrigin(0.5, 0.5).setScale(0.4, 0.4).setPosition(100, 500) ;
   
    //adicionar planta 2 na tela
    this.add.image(250,250, 'planta_2').setOrigin(0.5, 0.5).setScale(0.4, 0.4).setPosition(600,500);
   
    //guardar tubarão em uma variavel
   tubarao = this.add.image(200, 150, 'tubarao').setOrigin(0.5, 0.5).setScale(0.4, 0.4) ;

    // transformando a variável
    tubarao.setFlip(true, false);


}

function update() { 

    //adicionando controles no peixe
    tubarao.x = this.input.x;
    tubarao.y = this.input.y;
 }