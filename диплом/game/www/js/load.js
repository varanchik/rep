var loadState = {
  preload: function () {
    // Add a 'loading...' label on the screen
    var loadingLabel = game.add.text(game.world.centerX, 150, 'Загрузка...', {
      font: '30px Arial',
      fill: '#ffffff'
    });
    loadingLabel.anchor.setTo(0.5, 0.5);

    // Display the progress bar
    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);
    game.plugins.add(PhaserInput.Plugin);

    game.load.image('background', 'assets/background.png');
    game.load.image('bg', 'assets/bg.jpg');
    game.load.image('btnInfo', 'assets/info.png');
    game.load.spritesheet('texture', 'assets/checksprite.png', 22, 22);
    game.load.image('player_1', 'assets/player1.png');
    game.load.image('player_2', 'assets/player2.png');
    game.load.image('player_3', 'assets/player3.png');

    game.load.image('bgtext', 'assets/bgtext.jpg');
    game.load.image('dybniki', 'assets/dybniki.jpg');
    game.load.image('prydki', 'assets/prydki.jpg');
    game.load.image('kolomna', 'assets/kolomna.jpg');
    game.load.image('kilimari', 'assets/kilimari.jpg');
    game.load.image('shilovo', 'assets/shilovo.jpg');
    game.load.image('makarevo', 'assets/makarevo.jpg');
    game.load.image('zlesie', 'assets/zlesie.jpg');
    game.load.image('stepankovo', 'assets/stepankovo.jpg');
    game.load.image('filino', 'assets/filino.jpg');
    game.load.image('filino', 'assets/filino.jpg');
    game.load.image('bgtest', 'assets/test.jpeg');
    game.load.image('btnDalee', 'assets/dalee.png');
    game.load.image('btnClose', 'assets/close.png');
    game.load.image('randPlayer', 'assets/start.png');
    game.load.image('bgStats', 'assets/bgStats.png');
  },
  create: function () {
    // Go to the menu state
    game.state.start('menu');
  }
};
