var menuState = {
  create: function () {
    // Add a background image
    game.add.image(0, 0, 'background');

    // Display the name of the game
    var nameLabel = game.add.text(game.world.centerX, -50, 'Прогулка по нефтепроводам', {
      font: '70px Geo',
      fill: '#ffffff'
    });
    //{ font: '50px Arial', fill: '#ffffff' });
    nameLabel.anchor.setTo(0.5, 0.5);
    game.add.tween(nameLabel).to({
      y: 80
    }, 1000).easing(Phaser.Easing.Bounce.Out).start();


    if (this.game.device.desktop) {
      var text = 'Нажмите клавишу для начала';
    } else {
      var text = 'Каснитесь экрана дляначала';
    }
    // Explain how to start the game
    var startLabel = game.add.text(game.world.centerX, game.world.height - 80,
      text, {
        font: '25px Arial',
        fill: '#ffffff'
      });
    startLabel.anchor.setTo(0.5, 0.5);

    startLabel.angle = 2;
    game.add.tween(startLabel).to({
      angle: -2
    }, 500).to({
      angle: 2
    }, 500).loop().start();


    game.input.onDown.addOnce(this.start, this);
  },


  start: function () {
    // Start the actual game
    game.state.start('sName');
  },
};
