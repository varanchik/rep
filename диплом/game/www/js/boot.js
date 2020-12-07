var bootState = {
    preload: function () {
        // Load the image
        game.load.image('progressBar', 'assets/progressBar.png');
    },
    create: function () {
        // Set some game settings
        game.stage.backgroundColor = '#3498db';
        this.scale.pageAlignHorisontally = true; // можно не выравнивать, но я остаил
        this.scale.pageAlignVertically = true;
        this.scale.forcePortrait = true;
        // If the device is not a desktop, so it's a mobile device
        if (!game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }

        // Start the load state
        game.state.start('load');
    }
};
