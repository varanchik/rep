var settingName = {
  create: function () {
    // Add a background image
    game.add.image(0, 0, 'background');

    this.namePlayer1 = game.add.inputField(400, 100, {
      font: '18px Arial',
      fill: '#212121',
      fontWeight: 'bold',
      forceCase: PhaserInput.ForceCase.upper,
      width: 250,
      max: 20,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
      placeHolder: 'Username',
      textAlign: 'center',
      zoom: true,
      placeHolder: 'Имя первого игрока',
      type: PhaserInput.InputType.UserName
    });
    this.namePlayer1.blockInput = false;
    this.namePlayer2 = game.add.inputField(400, 180, {
      font: '18px Arial',
      fill: '#212121',
      fontWeight: 'bold',
      forceCase: PhaserInput.ForceCase.upper,
      width: 250,
      max: 20,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
      placeHolder: 'Username',
      textAlign: 'center',
      zoom: true,
      placeHolder: 'Имя второго игрока',
      type: PhaserInput.InputType.UserName
    });
    this.namePlayer2.blockInput = false;

    this.namePlayer3 = game.add.inputField(400, 260, {
      font: '18px Arial',
      fill: '#212121',
      fontWeight: 'bold',
      forceCase: PhaserInput.ForceCase.upper,
      width: 250,
      max: 20,
      padding: 8,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
      placeHolder: 'Username',
      textAlign: 'center',
      zoom: true,
      placeHolder: 'Имя третьего игрока',
      type: PhaserInput.InputType.UserName
    });
    this.namePlayer1.visible = false;
    this.namePlayer2.visible = false;
    this.namePlayer3.visible = false;
    this.checkboxKol1 = game.add.checkbox(150, 110, {
      text: '1 человек',
      style: {
        fill: '#fff'
      }
    }, 'texture');
    this.checkboxKol1.events.onInputUp.add(function () {
      if (this.checkboxKol1.state == true) {
        this.KolPl = 1;
        this.namePlayer1.visible = true;
        this.namePlayer2.visible = false;
        this.namePlayer3.visible = false;
        this.checkboxKol2.state = false;
        this.checkboxKol3.state = false;
      } else if (this.checkboxKol1.state == false) {
        this.namePlayer1.visible = false;
      }
    }, this);
    this.checkboxKol2 = game.add.checkbox(150, 190, {
      text: '2 человека',
      style: {
        fill: '#fff'
      }
    }, 'texture');
    this.checkboxKol2.events.onInputUp.add(function () {
      if (this.checkboxKol2.state == true) {
        this.KolPl = 2;
        this.namePlayer1.visible = true;
        this.namePlayer2.visible = true;
        this.namePlayer3.visible = false;
        this.checkboxKol1.state = false;
        this.checkboxKol3.state = false;
      } else if (this.checkboxKol2.state == false) {
        this.namePlayer1.visible = false;
        this.namePlayer2.visible = false;
      }

    }, this);
    this.checkboxKol3 = game.add.checkbox(150, 270, {
      text: '3 человека',
      style: {
        fill: '#fff'
      }
    }, 'texture');
    this.checkboxKol3.events.onInputUp.add(function () {
      if (this.checkboxKol3.state == true) {
        this.KolPl = 3;
        this.namePlayer1.visible = true;
        this.namePlayer2.visible = true;
        this.namePlayer3.visible = true;
        this.checkboxKol1.state = false;
        this.checkboxKol2.state = false;
      } else if (this.checkboxKol3.state == false) {
        this.namePlayer1.visible = false;
        this.namePlayer2.visible = false;
        this.namePlayer3.visible = false;
      }
    }, this);
    this.namePlayer3.blockInput = false;
    this.textControlset = game.add.text(150, 340, 'Начать игру', {
      font: "30px Arial Black",
      fill: "blue"
    });
    this.textControlset.inputEnabled = true;
    this.textControlset.stroke = "#ffffff";
    this.textControlset.strokeThickness = 16;
    this.textControlset.setShadow(2, 2, "#333333", 2, true, false);
    this.textControlset.events.onInputDown.add(function () {

      game.state.start('play');
    }, this);

  }
};
