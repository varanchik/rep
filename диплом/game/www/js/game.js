// Initialise Phaser


game = new Phaser.Game(1300, 602, Phaser.AUTO, '');
if (!game.device.desktop) {
  Phaser.Game(800, 600, Phaser.AUTO, '');
}
// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('sName', settingName);
game.state.add('play', playState);
game.state.start('boot');
