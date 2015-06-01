var game = new Phaser.Game(900, 480, Phaser.AUTO, 'game', {preload: _preload, create: _create, update: _update});


function _preload() {
    game.load.image('space', 'assets/space.png');
    game.load.image('ship', 'assets/ship.png');

}

var ship;

function _create() {
    game.add.sprite(0, 0, 'space');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ship = game.add.sprite(50, game.world.height / 2 - 50 , 'ship');
    game.physics.arcade.enable(ship);
    ship.body.collideWorldBounds = true;
    ship.body.gravity.y = 20;

    cursors = game.input.keyboard.createCursorKeys();

}

function _update() {

    if (cursors.left.isDown) {
        ship.body.velocity.x = -120;
    }
    else if (cursors.right.isDown) {
        ship.body.velocity.x = 120;
    } else if (cursors.up.isDown) {
        ship.body.velocity.y = -120;

    } else if (cursors.down.isDown) {
        ship.body.velocity.y = 120;
    }
}