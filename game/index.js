var game = new Phaser.Game(1200, 640, Phaser.AUTO, 'game', {preload: _preload, create: _create, update: _update});


function _preload() {
    game.load.image('space', 'assets/space.png');
    game.load.image('ship', 'assets/ship.png');
    game.load.image('meteor', 'assets/meteor.png');

}

var ship, meteors, cursors;

function _create() {
    game.add.sprite(0, 0, 'space');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ship = game.add.sprite(50, game.world.height / 2 - 50 , 'ship');
    game.physics.arcade.enable(ship);
    ship.body.collideWorldBounds = true;

    meteors = game.add.group();
    meteors.enableBody = true;


    var t = setInterval(function () {
        var rand = game.rnd.realInRange(1, 10);

        var meteor = meteors.create(game.world.width, game.world.randomX, 'meteor');
        meteor.body.velocity.x = -150 * rand;

    }, 1000);

    cursors = game.input.keyboard.createCursorKeys();

}

function _update() {
    ship.body.velocity.y = 0;
    ship.body.velocity.x = 0;

    if (cursors.left.isDown) {
        ship.body.velocity.x = -300;
    }
    else if (cursors.right.isDown) {
        ship.body.velocity.x = 300;
    } else if (cursors.up.isDown) {
        ship.body.velocity.y = -300;

    } else if (cursors.down.isDown) {
        ship.body.velocity.y = 300;
    }
}