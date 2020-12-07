var playState = {
  create: function () {
    this.cursor = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
    //первый путь xy
    this.arrX_BlueRoute = [1250, 1200, 1150, 1110, 1090, 1060, 1040, 1000, 960, 920, 870, 830, 790, 740, 700, 670, 620, 550, 500, 460, 410, 350, 310, 270, 210, 180, 150, 140, 130];
    this.arrY_BlueRoute = [20, 70, 60, 70, 90, 120, 150, 180, 200, 210, 220, 240, 250, 270, 370, 360, 340, 320, 310, 300, 290, 270, 260, 250, 230, 210, 170, 140, 110];
    //второй путь xy
    this.arrX_RedRoute = [1250, 1230, 1200, 1160, 1110, 1090, 1055, 1010, 960, 910, 870, 830, 785, 720, 680, 640, 590, 550, 500, 460, 415, 370, 330, 290, 260, 220, 200, 180, 160, 120];
    this.arrY_RedRoute = [100, 190, 210, 230, 260, 280, 310, 310, 310, 310, 310, 310, 310, 310, 300, 300, 300, 300, 285, 280, 260, 250, 240, 230, 220, 210, 180, 160, 130, 110];
    //третий путь ху
    this.arrX_GreenRoute = [1250, 1210, 1170, 1120, 1070, 1010, 980, 920, 880, 830, 770, 700, 670, 630, 580, 550, 510, 480, 440, 400, 370, 320, 290, 250, 180, 160, 150, 130, 110, 90, 60, 80, 95, 110, 130];
    this.arrY_GreenRoute = [260, 280, 300, 310, 330, 330, 330, 330, 330, 330, 330, 330, 330, 360, 390, 420, 450, 470, 500, 530, 560, 560, 540, 530, 520, 490, 450, 420, 380, 330, 280, 230, 195, 150, 110];
    //не знаю зачем, но спользуется
    this.countBlue = 0;
    this.countRed = 0;
    this.countGreen = 0;
    this.num = 0;
    this.chi = 0;
    this.userName;
    this.flag = true;
    this.flagStopGame = false;
    this.g = 1;
    this.player_1;
    this.player_2;
    this.player_3;
    this.flagBlueLife = true;
    this.flagRedLife = true;
    this.flagGreenLife = true;
    this.spriteT;
    //для очей на путях: уточнить про рыжий путь
    this.scoreRed = 0;
    this.scoreBlue = 0;
    this.scoreGreen = 0;
    game.world.setBounds(0, 0, 1300, 602);
    bakc = game.add.sprite(0, 0, 'bg'); //главный фон с путями

    this.styleStat = {
      font: "30px Arial Black",
      fill: "#c51b7d"
    };
    this.textRnd = game.add.text(game.world.centerX, game.world.centerY, '');
    this.textRnd.anchor.set(0.5);
    this.textRnd.align = 'center';
    this.textRnd.font = 'Arial';
    this.textRnd.fontWeight = 'bold';
    this.textRnd.fontSize = 150;
    this.textRnd.fill = '#ffffff';

    this.textControl = game.add.text(1030, 360, 'Сделать ход', this.styleStat);
    this.textControl.inputEnabled = true;
    this.textControl.stroke = "#de77ae";
    this.textControl.strokeThickness = 16;
    this.textControl.setShadow(2, 2, "#333333", 2, true, false);
    this.textControl.events.onInputDown.add(function () {
      this.gh();
    }, this);
    this.point_1 = game.add.button(1200, 60, 'btnInfo', function () {
      this.ggg(1, 1);
    }, this);
    this.point_1.anchor.setTo(0.5, 0.5);

    this.point_2 = game.add.button(1110, 60, 'btnInfo', function () {
      this.ggg(2, 1);
    }, this);
    this.point_2.anchor.setTo(0.5, 0.5);

    this.point_3 = game.add.button(876, 222, 'btnInfo', function () {
      this.ggg(3, 2);
    }, this);
    this.point_3.anchor.setTo(0.5, 0.5);

    this.point_4 = game.add.button(745, 270, 'btnInfo', function () {

      this.ggg(4, 1);
    }, this);
    this.point_4.anchor.setTo(0.5, 0.5);

    this.point_5 = game.add.button(705, 365, 'btnInfo', function () {

      this.ggg(5, 2);
    }, this);
    this.point_5.anchor.setTo(0.5, 0.5);

    this.point_6 = game.add.button(829, 323, 'btnInfo', function () {

      this.ggg(13, 1);
    }, this);
    this.point_6.anchor.setTo(0.5, 0.5);

    this.point_7 = game.add.button(548, 299, 'btnInfo', function () {

      this.ggg(7, 1);
    }, this);
    this.point_7.anchor.setTo(0.5, 0.5);

    this.point_8 = game.add.button(223, 208, 'btnInfo', function () {

      this.ggg(16, 1);
    }, this);
    this.point_8.anchor.setTo(0.5, 0.5);

    this.point_9 = game.add.button(110, 375, 'btnInfo', function () {
      this.ggg(9, 1);
    }, this);
    this.point_9.anchor.setTo(0.5, 0.5);

    this.point_10 = game.add.button(480, 470, 'btnInfo', function () {
      this.ggg(10, 2);
    }, this);
    this.point_10.anchor.setTo(0.5, 0.5);

    this.point_11 = game.add.button(585, 390, 'btnInfo', function () {
      this.ggg(11, 1);
    }, this);
    this.point_11.anchor.setTo(0.5, 0.5);

    this.point_12 = game.add.button(560, 360, 'btnInfo', function () {

      this.ggg(12, 1);
    }, this);
    this.point_12.anchor.setTo(0.5, 0.5);

    this.point_13 = game.add.button(829, 300, 'btnInfo', function () {

      this.ggg(13, 1);
    }, this);
    this.point_13.anchor.setTo(0.5, 0.5);

    this.point_14 = game.add.button(460, 275, 'btnInfo', function () {

      this.ggg(15, 1);
    }, this);
    this.point_14.anchor.setTo(0.5, 0.5);

    this.point_15 = game.add.button(456, 298, 'btnInfo', function () {

      this.ggg(15, 1);
    }, this);
    this.point_15.anchor.setTo(0.5, 0.5);

    this.point_16 = game.add.button(215, 234, 'btnInfo', function () {

      this.ggg(16, 1);
    }, this);
    this.point_16.anchor.setTo(0.5, 0.5);

    this.point_17 = game.add.button(370, 555, 'btnInfo', function () {

      this.ggg(17, 1);
    }, this);
    this.point_17.anchor.setTo(0.5, 0.5);

    this.point_18 = game.add.button(360, 518, 'btnInfo', function () {
      this.ggg(18, 1);
    }, this);
    this.point_18.anchor.setTo(0.5, 0.5);
    this.point_19 = game.add.button(545, 320, 'btnInfo', function () {
      this.ggg(7, 1);
    }, this);
    this.point_19.anchor.setTo(0.5, 0.5);
    this.point_20 = game.add.button(460, 440, 'btnInfo', function () {
      this.ggg(20, 2);
    }, this);
    this.point_20.anchor.setTo(0.5, 0.5);
    this.point_21 = game.add.button(1000, 180, 'btnInfo', function () {
      this.ggg(21, 1);
    }, this);
    this.point_21.anchor.setTo(0.5, 0.5);
    this.point_22 = game.add.button(640, 300, 'btnInfo', function () {
      this.ggg(22, 2);
    }, this);
    this.point_22.anchor.setTo(0.5, 0.5);
    this.point_23 = game.add.button(160, 490, 'btnInfo', function () {

      this.ggg(20, 2);
    }, this);
    this.point_23.anchor.setTo(0.5, 0.5);
    //
    this.styleName = {
      font: "12px Arial",
      fill: "#ff0044",
      wordWrap: true,
      align: "center",
      backgroundColor: "#ffff00"
    };
    if (settingName.KolPl == 1) {
      this.player_1 = game.add.sprite(this.arrX_BlueRoute[0], this.arrY_BlueRoute[0], 'player_1');
      this.statScoreBlue = game.add.text(1030, 440, settingName.namePlayer1.value == '' ? 'Игрок 1: 0' : settingName.namePlayer1.value + ':  0', this.styleStat);
      this.namePlayer_1 = game.add.text(0, 0, settingName.namePlayer1.value == '' ? 'Игрок 1' : settingName.namePlayer1.value, this.styleName);
      this.namePlayer_1.anchor.set(0.5);
      this.statText = game.add.text(1030, 400, 'Статистика:\n', this.styleStat);
      this.statText.stroke = "#de77ae";
      this.statText.strokeThickness = 16;
      this.statText.setShadow(2, 2, "#333333", 2, true, false);

      this.statScoreBlue.stroke = "#de77ae";
      this.statScoreBlue.strokeThickness = 16;
      this.statScoreBlue.setShadow(2, 2, "#333333", 2, true, false);
    }
    if (settingName.KolPl == 2) {
      this.player_1 = game.add.sprite(this.arrX_BlueRoute[0], this.arrY_BlueRoute[0], 'player_1');
      this.player_2 = game.add.sprite(1250, 100, 'player_2');
      this.statScoreBlue = game.add.text(1030, 440, settingName.namePlayer1.value == '' ? 'Игрок 1: 0' : settingName.namePlayer1.value + ':  0', this.styleStat);
      this.statScoreRed = game.add.text(1030, 480, settingName.namePlayer2.value == '' ? 'Игрок 2: 0' : settingName.namePlayer2.value + ':  0', this.styleStat);
      this.namePlayer_1 = game.add.text(0, 0, settingName.namePlayer1.value == '' ? 'Игрок 1' : settingName.namePlayer1.value, this.styleName);
      this.namePlayer_2 = game.add.text(0, 0, settingName.namePlayer2.value == '' ? 'Игрок 2' : settingName.namePlayer2.value, this.styleName);
      this.namePlayer_1.anchor.set(0.5);
      this.namePlayer_2.anchor.set(0.5);
      this.statText = game.add.text(1030, 400, 'Статистика:\n', this.styleStat);

      this.statText.stroke = "#de77ae";
      this.statText.strokeThickness = 16;
      this.statText.setShadow(2, 2, "#333333", 2, true, false);

      this.statScoreBlue.stroke = "#de77ae";
      this.statScoreBlue.strokeThickness = 16;
      this.statScoreBlue.setShadow(2, 2, "#333333", 2, true, false);
      this.statScoreRed.stroke = "#de77ae";
      this.statScoreRed.strokeThickness = 16;
      this.statScoreRed.setShadow(2, 2, "#333333", 2, true, false);
    }
    if (settingName.KolPl == 3) {

      this.player_1 = game.add.sprite(this.arrX_BlueRoute[0], this.arrY_BlueRoute[0], 'player_1');
      this.player_2 = game.add.sprite(1250, 100, 'player_2');
      this.player_3 = game.add.sprite(1250, 200, 'player_3');
      this.statScoreBlue = game.add.text(1030, 440, settingName.namePlayer1.value == '' ? 'Игрок 1: 0' : settingName.namePlayer1.value + ':  0', this.styleStat);
      this.statScoreRed = game.add.text(1030, 480, settingName.namePlayer2.value == '' ? 'Игрок 2: 0' : settingName.namePlayer2.value + ':  0', this.styleStat);
      this.statScoreGreen = game.add.text(1030, 520, settingName.namePlayer3.value == '' ? 'Игрок 3: 0' : settingName.namePlayer3.value + ':  0', this.styleStat);
      this.namePlayer_1 = game.add.text(0, 0, settingName.namePlayer1.value == '' ? 'Игрок 1' : settingName.namePlayer1.value, this.styleName);
      this.namePlayer_2 = game.add.text(0, 0, settingName.namePlayer2.value == '' ? 'Игрок 2' : settingName.namePlayer2.value, this.styleName);
      this.namePlayer_3 = game.add.text(0, 0, settingName.namePlayer3.value == '' ? 'Игрок 3' : settingName.namePlayer3.value, this.styleName);
      this.namePlayer_1.anchor.set(0.5);
      this.namePlayer_2.anchor.set(0.5);
      this.namePlayer_3.anchor.set(0.5);
      this.statText = game.add.text(1030, 400, 'Статистика:\n', this.styleStat);
      this.statText.stroke = "#de77ae";
      this.statText.strokeThickness = 16;
      this.statText.setShadow(2, 2, "#333333", 2, true, false);

      this.statScoreBlue.stroke = "#de77ae";
      this.statScoreBlue.strokeThickness = 16;
      this.statScoreBlue.setShadow(2, 2, "#333333", 2, true, false);

      this.statScoreRed.stroke = "#de77ae";
      this.statScoreRed.strokeThickness = 16;
      this.statScoreRed.setShadow(2, 2, "#333333", 2, true, false);

      this.statScoreGreen.stroke = "#de77ae";
      this.statScoreGreen.strokeThickness = 16;
      this.statScoreGreen.setShadow(2, 2, "#333333", 2, true, false);
    }
    this.AllOpSprite = game.add.sprite(game.world.centerX - 200, game.world.centerY - 250, 'bgtest');
    this.AllOpSprite.visible = false;
    this.styleAllOp = {
      font: "15px VEGeorgianBrushCyrillicGreek",
      fill: "#fff",
      wordWrap: true,
      wordWrapWidth: this.AllOpSprite.width,
      align: "center"
    };
    if (!game.device.desktop) {
      this.styleAllOp = {
        font: "30px VEGeorgianBrushCyrillicGreek",
        fill: "#fff",
        wordWrap: true,
        wordWrapWidth: this.AllOpSprite.width,
        align: "center"
      };
    }
  },
  finishPlayer: function () {
    if (settingName.KolPl == 1) {
      if (!this.flagBlueLife || this.player_1.x == 130) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue, this.styleFinish);

      }
    }
    if (settingName.KolPl == 2) {
      if ((!this.flagBlueLife & !this.flagRedLife & this.player_1.x == 130 & this.player_2.x == 120) || (!this.flagBlueLife & !this.flagRedLife) || (!this.flagBlueLife & this.player_2 == 120) || (!this.flagRedLife & this.player_1.x == 130)) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed, this.styleFinish);
      }
    }
    if (settingName.KolPl == 3) {
      if (!this.flagBlueLife & !this.flagGreenLife & !this.flagRedLife) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }
      if (this.player_1.x == 130 & this.player_2.x == 120 & this.player_3.x == 130) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }
      if (!this.flagBlueLife & this.player_2.x == 120 & this.player_3.x == 130) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }
      if (!this.flagBlueLife & !this.flagRedLife & this.player_3.x == 130) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }

      if (this.player_1.x == 130 & this.player_2.x == 120 & !this.flagGreenLife) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }
      if (this.player_1.x == 130 & !this.flagRedLife & !this.flagGreenLife) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }
      if (!this.flagBlueLife & this.player_2 == 120 & !this.flagGreenLife) {
        this.textFinish = game.add.sprite(game.world.centerX - 200, game.world.centerY - 200, 'bgStats');
        this.styleFinish = {
          font: "30px Arial",
          fill: "#ff0044",
          align: "center"
        };
        game.add.text(Math.floor((this.textFinish.x + this.textFinish.width / 2) - 210), Math.floor((this.textFinish.y + this.textFinish.height / 2) - 80), '\tИгрок 1: ' + this.scoreBlue + "\t\nИгрок 2: " + this.scoreRed + '\t\nИгрок 3: ' + this.scoreGreen, this.styleFinish);
      }
    }
  },
  ggg: function (t, flag) {
    this.btnClose = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 28), Math.floor(this.AllOpSprite.y), 'btnClose', function () {

      if (flag == 1)
        this.closeInfo();
      else if (flag == 2) this.closeInfoNotSprite();
    }, this);
    this.AllOpSprite.visible = true;
    this.textO_1 = game.add.text(0, 0, '', this.styleAllOp);
    this.textO_1.anchor.set(0.5);
    this.textO_1.x = Math.floor(this.AllOpSprite.x + this.AllOpSprite.width / 2);
    this.textO_1.y = Math.floor((this.AllOpSprite.y + this.AllOpSprite.height / 2) + 80);
    switch (t) {
      case 1:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 25), 'dybniki');
        this.textO_1.text = "Нефтеперекачивающая станция «Дубники» была введена в эксплуатацию в 1981 году. Основная задача – поддержание заданных параметров давления и производительности на участке « Лазарево-Горький» На НПС одна насосная станция. Годовой объем перекачки нефти 59 млн. тонн в год.  Площадь занимаемая станцией составляет 7.6 гектара. Численность персонала – 70 человек.";
        break;
      case 2:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'prydki');
        this.textO_1.y = this.textO_1.y + 40;
        this.textO_1.text = "НПС «Прудки» Станция введена в эксплуатацию в 1980 году. НПС «Прудки» перекачивает нефть по магистральному нефтепроводу «Сургут – Полоцк» диаметром 1000мм. В задачи станции входит поддержание заданных параметров перекачки нефти по давлению и производительности. Численность персонала НПС -42 человека. Площадь -3.8 гектара. Станция располагается на территории Кировской области.  Длина проходящего по ней трубопровода составляет 35 километров."; //120
        break;
      case 3:

        this.textO_1.text = "НПС «Мелковка» Станция была введена в эксплуатацию в 1980 году. НПС «Мелковка» самая удаленная от центра станция на территории Марийской республики. Она обслуживает магистральный нефтепровод «Сургут – Полоцк».  Площадь территории 7.7 гектаров. Численность персонала станции 77 человек.  НПС «Мелковка» обслуживает самый крупный подводный переход через реку Ветлуга общей протяженностью около 8 километров.";
        break;
      case 4:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'makarevo');
        this.textO_1.text = "НПС «Макарьево» Станция была введена в эксплуатацию 30 декабря 1981 года. Перекачивает нефть по магистральному нефтепроводу «Сургут-Полоцк» диаметром 1000 мм. Численность персонала -80 человек. Станция находится среди лесов и болот. НПС обслуживает подводный переход трубопровода через реку Волга протяженностью около 2 километров – самый протяженный в и сложный  переход в России.";
        break;
      case 5:

        this.textO_1.text = "НПС «Горький» Станция введена в эксплуатацию в июне 1981 года. Площадь НПС – 28 га. Численность персонала станции -70 человек. В структуру НПС входят механо-технологический участок, участок по обслуживанию энергетического оборудования, участок эксплуатации автоматики и телемеханики, группа по обслуживанию резервуаров, линейно-эксплуатационная служба, местный диспетчерский пункт и приемо-сдаточный пункт. Станция перекачивает нефть по магистральному нефтепроводу «Сургут-Полоцк».";
        break;
      case 7:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'stepankovo');
        this.textO_1.y = this.textO_1.y + 20;
        this.textO_1.text = "НПС «Степаньково» Станция введена в эксплуатацию в 1973 году. Она перекачивает нефть по магистральным нефтепроводам «Горький-Ярославль» диаметром 800 мм. и «Сургут-Полоцк» диаметром 1000мм. В задачи станции входит поддержание технологических параметров перекачки нефти по трубопроводам и содержание трассы МН. По нефтепроводу «Сургут-Полоцк» НПС «Степаньково перекачивает 70 млн. тонн нефти в год. По нефтепроводу «Горький –Ярославль» 25 млн. тонн  нефти в год. Численность обслуживающего  персонала станции -89 человек.";
        break;
      case 9:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'kolomna');
        this.textO_1.text = "НПС «Коломна» Нефтеперекачивающая станция «Коломна» является структурным подразделением ОАО «ВМН» и представляет собой комплекс сооружений и устройств  для  перекачки нефти по магистральному нефтепроводу «Рязань-Москва» на участке протяженностью 97 километров. Станция введена в эксплуатацию в 1975 году. Площадь территории 6 гектаров. Численность персонала станции -67 человек.";
        break;
      case 10:
        this.textO_1.text = "НПС «Ермишь» Станция введена в эксплуатацию в 1963 году Площадь территории – 10 гектаров. Численность персонала станции -83 человека. НПС «Ермишь» является промежуточной станцией без резервуарного парка. Она имеет две насосных станции и перекачивает нефть по магистральному нефтепроводу «Горький – Рязань -1» в количестве  14 млн. тонн в год, а по магитсральному нефтепроводу «Горький – Рязань -2»  5.7 млн. тонн в год. Станция обслуживает два подводных перехода через реку Ермишь и реку Мокша.";
        break;
      case 11:
        this.textO_1.text = "НПС «Балахониха» Станция была введена в эксплуатацию 30 января 1967 года. Ее территория -14.8 га. Численность персонала -92 человека. НПС «Балахониха» обслуживает 110 километров магистральных нефтепроводов и имеет две насосные станции НПС-1 и НПС-2. Станция перекачивает нефть по магистральным нефтепроводам «Горький-Рязань-1» диаметром 700 мм.  и «Горький-Рязань-2» диаметром 500 мм. В ее задачи входит поддержание заданных параметров давления и производительности, содержание трассы и двух подводных переходов – через реки Теша и Сережа.";
        break;
      case 12:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'prydki');
        this.textO_1.text = "Нефтеперекачивающая станция «Дубники» была введена в эксплуатацию в 1981 году. Основная задача – поддержание заданных параметров давления и производительности на участке « Лазарево-Горький» На НПС одна насосная станция. Годовой объем перекачки нефти 59 млн. тонн в год.  Площадь занимаемая станцией составляет 7.6 гектара. Численность персонала – 70 человек.";
        break;
      case 13:
        this.textO_1.text = "ЛПДС «Воротынец»  В 2009 году линейная производственно-диспетчерская станция «Воротынец» отметила свое 50-летие. Станция была создана в 1959 году. В 1962 году начала постоянную работу насосная №2 МН «Алметьевск-Горький -2» диаметром 800 мм.  К 1973 году на станции работали уже три насосные системы. Третья насосная обслуживает нефтепровод «Алметьевс-Горький-3»  диаметром 1000 мм.";
        break;
      case 15:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'filino');
        this.textO_1.text = "НПС «Филино» Станция была введена в эксплуатацию в 1965 году. До 1982 года входила в состав Ярославского РНУ и работала на нефтепроводе «Горький-Ярославль». Затем после ввода в эксплуатацию нефтепровода «Сургут-Полоцк» прередана Горьковскому РНУ. Ее площадь 9.7 гектара. Численность персонала 119 человек.";
        break;
      case 16:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'zlesie');
        this.textO_1.text = "НПС «Залесье» Нефтеперекачивающая станция «Залесье» была введена в эксплуатацию в 1973 году. На НПС две насосные станции. Она перекачивает нефть по магистральным нефтепроводам «Горький-Ярославль» диаметром 800 мм. и «Сургут-Полоцк» диаметром 1000 мм. НПС «Залесье» по нефтепроводу «Сургут-Полоцк» перекачивает 70 млн. тонн нефти в год, а по нефтепроводу «Горький -Ярославль» 25 млн. тонн нефти в год. Численность персонала станции -86 человек.";
        break;
      case 17:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'shilovo');
        this.textO_1.text = "НПС «Шилово» Нефтеперекачивающая станция «Шилово» введена в эксплуатацию в 1967 году. Основная задача станции обеспечение бесперебойной поставки нефти на Московский и Рязанский нефтеперерабатывающие заводы. На НПС две насосные станции. Обьем перекачки нефти: НПС-1 13 млн. тонн нефти в год, НПС-2 -12 млн. тонн. Численность персонала станции -74 человека. В рамках  модернизации предприятия  в 2004 году НПС «Шилово» была полностью реконструирована.";
        break;
      case 18:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'prydki');
        this.textO_1.text = "Нефтеперекачивающая станция «Дубники» была введена в эксплуатацию в 1981 году. Основная задача – поддержание заданных параметров давления и производительности на участке « Лазарево-Горький» На НПС одна насосная станция. Годовой объем перекачки нефти 59 млн. тонн в год.  Площадь занимаемая станцией составляет 7.6 гектара. Численность персонала – 70 человек.";
        break;

      case 20:
        this.textO_1.text = "НПС «Рязань»  Станция введена в эксплуатациюв 1963 году. Численность персонала -98 человек. Общий  объем  резервуарного парка НПС «Рязань» -50000м3. Станция перекачивает нефть по магистральным нефтепроводам «Горький-Рязань-1» 17 млн. тонн в год, «Горький-Рязань-2» 7.5 млн. тонн в год. В задачи НПС входит прием и хранение нефти из магистральных нефтепроводов, коммерческий учет и контроль качества нефти, перекачка нефти на Рязанский нефтеперерабатывающий завод и Московский нефтеперерабатывающий завод.";
        break;
      case 21:
        this.spriteT = game.add.sprite(Math.floor(this.AllOpSprite.x + 25), Math.floor(this.AllOpSprite.y + 20), 'kilimari');
        this.textO_1.text = "НПС «Килемары»  Станция была введена в эксплуатацию 22 сентября 1981 года. Ее площадь 4.0 гектара. На НПС одна насосная станция. Численность персонала -68 человек. НПС «Килемары» отличается от всех других станций ОАО «Верхневолжскнефтепровод» тем, что имеет пункт пуска и приема скребков для очистки внутренней полости магистрального трубопровода. НПС является промежуточной станцией перекачки нефти. За станцией закреплено 82 километра линейной части, при этом 80 % обслуживаемого участка проходит по болотистым территориям.";
        break;
      case 22:
        this.textO_1.text = "ЛПДС «Староликеево» называют сердцем верхневолжской системы: через нее перекачивается значительная часть нефти из Западной Сибири, республик Татарстан и Башкортостан. В настоящее время ЛПДС принимает нефть из нефтепроводов «Алметьевск-Горький-2», «Алметьевск-Горький-3» и отвода из магистрали «Сургут-Полоцк» и перекачивает нефть по нефтепроводам «Горький-Ярославль», Горький-Рязань-1,2» а также на нефтеперерабатывающий завод «ЛУКОЙЛ-Нижегороднефтеоргсинтез»";
        break;
      default:
        break;
    }
  },
  picShow: function (pic, who) {
    this.textControl.inputEnabled = false;
    this.styleQ = {
      font: "20px Arial",
      fill: "#000000",
      wordWrap: true,
      wordWrapWidth: this.AllOpSprite.width
    };
    this.textTest = game.add.text(0, 0, "", this.styleQ);
    this.textTest.x = Math.floor(this.AllOpSprite.x - 150 + this.AllOpSprite.width / 2);
    this.textTest.y = Math.floor(this.AllOpSprite.y + 50 + this.AllOpSprite.height / 2);

    switch (pic) {
      case 'dybniki':
        this.ggg(1);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "В каком году введена в эксплуатацию НПС Дубники?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '1981',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();

          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '1969',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '2009',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'prydki':
        this.ggg(2);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Расположенна на территории Кировской области?\n";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: 'Да',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: 'Нет',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);

          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Starolikeyevo':
        this.ggg(22);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "По какому нефтепроводу качают нефть?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: 'Горький-Ярославль',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: 'Горький-Кислый',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: 'Ярославль-Москва',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
        break;
      case 'Gorkiy':
        this.ggg(5);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Какая площадь у НПС?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '36 га',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '28 га',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '68 га',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Vorotynets':
        this.ggg(13);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "В каком году была создана станция?"
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '1959',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '1941',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '1969',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Balakhonikha':
        this.ggg(11);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "В каких реках существуют переходы?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: 'Теша и Сережа',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: 'Амур и Обь',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: 'Лена и Иртыш',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Stepankovo':
        this.ggg(7);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "По какому нефтепроводу перекачивают 70 млн. тонн нефти в год?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: 'Горький-Ярославль',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: 'Сургут-Плоцк',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: 'Лазарево-Горький',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Filino':
        this.ggg(15);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Какова численность персонала?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '50 человек',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '157 человек',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '119 человек',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Zalesye':
        this.ggg(16);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Сколько перекачивают тонн нефти в год по нефтепроводу Горький-Ярославль?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '70',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '50',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '50',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;

      case 'kilimari':
        this.ggg(21);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Площадь НПС Килемары?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '2 гектара',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '4 гектара',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '6 гектара',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Melkovka':
        this.ggg(3);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Какой магистральный нефтепровод обслуживает?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: 'Сургут-Плоцк',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: 'Сладкий-Горький',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: 'Рязань-Плоцк',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Makaryevo':
        this.ggg(4);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Среди чего находится станция?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: 'Леса, болота',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: 'Пустыни, горы',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: 'Степи, леса',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Yermish':
        this.ggg(10);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Численность персонала?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '83 человека',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '52 человека',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '184 человека',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Shilovo':
        this.ggg(17);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Когда станция введена в эксплуатацию? ";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '1987',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '1967',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '1854',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Ryazan':
        this.ggg(2);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Каков общий объем резервуарного парка?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '83.000 м3',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '50.000 м3',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '150.000 м3',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      case 'Kolomna':
        this.ggg(9);
        this.btnD = game.add.button(Math.floor(this.AllOpSprite.x + this.AllOpSprite.width - 64), Math.floor(this.AllOpSprite.y + this.AllOpSprite.height - 64), 'btnDalee', function () {
          this.textO_1.destroy();
          this.btnD.visible = false;
          this.textTest.text = "Протяженность нефтепровода Рязань - Москва ?";
          this.checkbox1 = game.add.checkbox(this.textTest.x, this.textTest.y + 50, {
            text: '100 км.',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox1.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox2 = game.add.checkbox(this.textTest.x, this.textTest.y + 100, {
            text: '57 км.',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox2.events.onInputUp.add(function () {
            if (who == 1) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue - 1] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue - 1] - 65;
              this.countBlue - 1;
            }
            if (who == 2) {
              this.player_2.x = this.arrX_RedRoute[this.countRed - 1] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed - 1] - 65;
              this.countRed - 1;
            }
            if (who == 3) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen - 1] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen - 1] - 65;
              this.countGreen - 1;
            }
            this.closeInfo();
          }, this);
          this.checkbox3 = game.add.checkbox(this.textTest.x, this.textTest.y + 150, {
            text: '97 км.',
            style: {
              fill: '#fff'
            }
          }, 'texture');
          this.checkbox3.events.onInputUp.add(function () {
            if (who == 1)
              this.scoreBlue++;
            if (who == 2) this.scoreRed++;
            if (who == 3) this.scoreGreen++;
            this.closeInfo();
          }, this);
          this.textControl.inputEnabled = true;
        }, this);
        break;
      default:
        break;

    }

  },
  scorePlayerBlue: function (score) {
    if (score > 0) {
      this.afg = settingName.namePlayer1.value == '' ? 'Игрок 1' : settingName.namePlayer1.value;
      this.statScoreBlue.text = this.afg + " : " + score;
      this.statScoreBlue.stroke = "#de77ae";
      this.statScoreBlue.strokeThickness = 16;
      this.statScoreBlue.setShadow(2, 2, "#333333", 2, true, false);
    }
  },
  scorePlayerRed: function (score) {
    if (score > 0) {
      this.ghh = settingName.namePlayer2.value == '' ? 'Игрок 2' : settingName.namePlayer2.value;
      this.statScoreRed.text = this.ghh + ' : ' + score;
      this.statScoreRed.stroke = "#de77ae";
      this.statScoreRed.strokeThickness = 16;
      this.statScoreRed.setShadow(2, 2, "#333333", 2, true, false);
    }
  },
  scorePlayerGreen: function (score) {
    if (score > 0) {
      this.uyit = settingName.namePlayer3.value == '' ? 'Игрок 3' : settingName.namePlayer3.value;
      this.statScoreGreen.text = this.uyit + ': ' + score;
      this.statScoreGreen.stroke = "#de77ae";
      this.statScoreGreen.strokeThickness = 16;
      this.statScoreGreen.setShadow(2, 2, "#333333", 2, true, false);
    }
  },
  closeInfo: function () {
    this.AllOpSprite.visible = false;
    this.textControl.inputEnabled = true;
    this.textO_1.destroy();
    this.btnClose.destroy();
    this.spriteT.destroy();
    this.btnD.visible = false;

    this.checkbox1.visible = false;

    this.textTest.destroy();
    this.checkbox1.kill();
    this.checkbox2.kill();
    this.checkbox3.kill();


  },
  closeInfoNotSprite: function () {
    this.AllOpSprite.visible = false;
    this.textControl.inputEnabled = true;
    this.textO_1.destroy();
    this.btnClose.destroy();
    this.btnD.visible = false;
    this.checkbox1.visible = false;
    this.textTest.destroy();
    this.checkbox1.kill();
    this.checkbox2.kill();
    this.checkbox3.kill();
  },
  gh: function () {

    if (settingName.KolPl == 1) {
      if (this.flagBlueLife) {
        this.kubikRnd();
        this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
    }

    if (settingName.KolPl == 2) {
      if (this.flagBlueLife & this.flagRedLife) {
        this.kubikRnd();
        if (this.num < 2) this.num++;
        else this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num)
        }, this);
      }
      if (!this.flagBlueLife & this.flagRedLife) {
        this.kubikRnd();
        this.num = 2;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num)
        }, this);
      }
      if (this.flagBlueLife & !this.flagRedLife) {
        this.kubikRnd();
        this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num)
        }, this);
      }
    }
    if (settingName.KolPl == 3) {
      if (this.flagBlueLife & this.flagGreenLife & this.flagRedLife) {
        this.kubikRnd();
        if (this.num < 3) this.num++;
        else
          this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
      if (this.flagBlueLife & !this.flagGreenLife & this.flagRedLife) {
        this.kubikRnd();
        if (this.num < 2) this.num++;
        else
          this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
      if (this.flagBlueLife & this.flagGreenLife & !this.flagRedLife) {
        this.kubikRnd();
        if (this.num == 1) this.num = 3;
        else this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
      if (!this.flagBlueLife & this.flagGreenLife & this.flagRedLife) {
        this.kubikRnd();
        if (this.num == 1) this.num = 2;
        else if (this.num == 2) this.num = 3;
        else if (this.num == 3) this.num = 2;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
      if (!this.flagBlueLife & !this.flagGreenLife & this.flagRedLife) {
        this.kubikRnd();
        this.num = 2;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
      if (!this.flagBlueLife & this.flagGreenLife & !this.flagRedLife) {
        this.kubikRnd();
        this.num = 3;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
      if (this.flagBlueLife & !this.flagGreenLife & !this.flagRedLife) {
        this.kubikRnd();
        this.num = 1;
        game.time.events.add(2500, function () {
          this.randGoPlay(this.num);
        }, this);
      }
    }

  },
  kubikRnd: function () {
    this.textRnd.visible = true;
    this.chi = game.rnd.integerInRange(1, 4);
    this.textRnd.text = this.chi;

    game.time.events.add(2000, function () {
      this.textRnd.visible = false;
    }, this);

  },

  //очередность хода игроков
  randGoPlay: function (f) {

    if (settingName.KolPl == 1) {
      switch (f) {
        case 1:
          if (this.flagBlueLife) {

            this.countBlue += this.chi;
            if (this.countBlue != 28 || this.countBlue > 28) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue] - 65;
            }
            if (this.countBlue == 28 || this.countBlue > 28) {
              this.player_1.x = 130;
              this.player_1.y = 110;
            }
            this.showPointRouteBlue(this.player_1.x);
            this.wayOfDeathBlue(this.player_1.x);
          }
          break;
        default:
          break;
      }
    }
    if (settingName.KolPl == 2) {
      switch (f) {
        case 1:
          if (this.flagBlueLife) {

            this.countBlue += this.chi;
            if (this.countBlue != 27 || this.countBlue > 27) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue] - 65;
            }
            if (this.countBlue == 28 || this.countBlue > 28) {
              this.player_1.x = 130;
              this.player_1.y = 110;
            }
            this.showPointRouteBlue(this.player_1.x);
            this.wayOfDeathBlue(this.player_1.x);
          }
          break;
        case 2:
          if (this.flagRedLife) {
            this.countRed += this.chi;
            if (this.countRed != 28 || this.countRed > 28) {
              this.player_2.x = this.arrX_RedRoute[this.countRed] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed] - 65;

            }
            if (this.countRed == 29 || this.countRed > 29) {
              this.player_2.x = 120;
              this.player_2.y = 110;
            }
            this.showPointRouteRed(this.player_2.x);
            this.wayOfDeathRed(this.player_2.x);
          } else f = 3;
          break;
      }
    }
    if (settingName.KolPl == 3) {
      switch (f) {
        case 1:
          if (this.flagBlueLife) {

            this.countBlue += this.chi;
            if (this.countBlue != 27 || this.countBlue > 27) {
              this.player_1.x = this.arrX_BlueRoute[this.countBlue] - 15;
              this.player_1.y = this.arrY_BlueRoute[this.countBlue] - 65;
            }
            if (this.countBlue == 28 || this.countBlue > 28) {
              this.player_1.x = 130;
              this.player_1.y = 110;
            }
            this.showPointRouteBlue(this.player_1.x);
            this.wayOfDeathBlue(this.player_1.x);
          } else f = 2;
          break;
        case 2:
          if (this.flagRedLife) {
            this.countRed += this.chi;
            if (this.countRed != 28 || this.countRed > 28) {
              this.player_2.x = this.arrX_RedRoute[this.countRed] - 15;
              this.player_2.y = this.arrY_RedRoute[this.countRed] - 65;

            }
            if (this.countRed == 29 || this.countRed > 29) {
              this.player_2.x = 120;
              this.player_2.y = 110;
            }
            this.showPointRouteRed(this.player_2.x);
            this.wayOfDeathRed(this.player_2.x);
          } else f = 3;
          break;
        case 3:
          if (this.flagGreenLife) {
            this.countGreen += this.chi;
            if (this.countGreen != 32 || this.countGreen > 32) {
              this.player_3.x = this.arrX_GreenRoute[this.countGreen] - 15;
              this.player_3.y = this.arrY_GreenRoute[this.countGreen] - 65;
            }
            if (this.countGreen == 33 || this.countGreen > 33) {
              this.player_3.x = 130;
              this.player_3.y = 110;
            }
            this.showPointRouteGreen(this.player_3.x);
            this.wayOfDeathGreen(this.player_3.x);
          } else f = 1;
          break;
        default:
          break;
      }
    }

  },
  update: function () {
    this.finishPlayer();
    if (settingName.KolPl == 1) {
      this.scorePlayerBlue(this.scoreBlue);
      this.namePlayer_1.x = Math.floor((this.player_1.x + this.player_1.width / 2) - 10);
      this.namePlayer_1.y = Math.floor((this.player_1.y + this.player_1.height / 2) + 45);
    }
    if (settingName.KolPl == 2) {
      this.scorePlayerBlue(this.scoreBlue);
      this.scorePlayerRed(this.scoreRed);
      this.namePlayer_1.x = Math.floor((this.player_1.x + this.player_1.width / 2) - 10);
      this.namePlayer_1.y = Math.floor((this.player_1.y + this.player_1.height / 2) + 45);
      this.namePlayer_2.x = Math.floor((this.player_2.x + this.player_2.width / 2) - 10);
      this.namePlayer_2.y = Math.floor((this.player_2.y + this.player_2.height / 2) + 40);
    }
    if (settingName.KolPl == 3) {

      this.scorePlayerBlue(this.scoreBlue);
      this.scorePlayerGreen(this.scoreGreen);
      this.scorePlayerRed(this.scoreRed);
      this.namePlayer_1.x = Math.floor((this.player_1.x + this.player_1.width / 2) - 10);
      this.namePlayer_1.y = Math.floor((this.player_1.y + this.player_1.height / 2) + 45);
      this.namePlayer_2.x = Math.floor((this.player_2.x + this.player_2.width / 2) - 10);
      this.namePlayer_2.y = Math.floor((this.player_2.y + this.player_2.height / 2) + 40);
      this.namePlayer_3.x = Math.floor((this.player_3.x + this.player_3.width / 2) - 10);
      this.namePlayer_3.y = Math.floor((this.player_3.y + this.player_3.height / 2) + 40);
    }
  },
  PointsScoredToDeathBlue: function (score) {

    this.statScoreBlue.text = this.afg + "Выбыл ";
  },
  PointsScoredToDeathRed: function (score) {
    this.statScoreRed.text = this.ghh + "Выбыл ";
  },
  PointsScoredToDeathGreen: function (score) {
    this.statScoreGreen.text = this.uyit + "Выбыл ";
  },
  //смерть пользователя 
  wayOfDeathRed: function (posx) {
    switch (posx) {
      case this.arrX_RedRoute[14] - 15:
        if (this.flagRedLife) {
          game.time.events.add(1500, function () {
            this.player_2.x = this.arrX_RedRoute[14] - 15;
            this.player_2.y = this.arrY_RedRoute[14] - 65;
            this.PointsScoredToDeathRed(this.scoreRed);
            this.flagRedLife = false;
          }, this);
        }
        break;
      case this.arrX_RedRoute[28] - 15:
        if (this.flagRedLife) {
          game.time.events.add(1500, function () {
            this.player_2.x = this.arrX_RedRoute[28] - 15;
            this.player_2.y = this.arrY_RedRoute[28] - 65;
            this.PointsScoredToDeathRed(this.scoreRed);
            this.flagRedLife = false;
          }, this);
        }
        break;
      default:
        break;

    }
  },
  wayOfDeathGreen: function (posx) {
    switch (posx) {
      case this.arrX_GreenRoute[24] - 15:
        if (this.flagGreenLife) {
          game.time.events.add(1500, function () {
            this.player_3.x = this.arrX_GreenRoute[24] - 15;
            this.player_3.y = this.arrY_GreenRoute[24] - 65;
            this.PointsScoredToDeathGreen(this.scoreGreen);
            this.flagGreenLife = false;
          }, this);
        }
        break;
      case this.arrX_GreenRoute[30] - 15:
        if (this.flagGreenLife) {
          game.time.events.add(1500, function () {
            this.player_3.x = this.arrX_GreenRoute[30] - 15;
            this.player_3.y = this.arrY_GreenRoute[30] - 65;
            this.PointsScoredToDeathGreen(this.scoreGreen);
            this.flagGreenLife = false;
          }, this);
        }
        break;
      default:
        break;
    }
  },
  wayOfDeathBlue: function (posx) {
    switch (posx) {
      case this.arrX_BlueRoute[5] - 15:
        if (this.flagBlueLife) {
          game.time.events.add(1500, function () {
            this.player_1.x = 1085;
            this.player_1.y = 130;
            this.PointsScoredToDeathBlue(this.scoreBlue);
            this.flagBlueLife = false;

          }, this);
        }
        break;
      case this.arrX_BlueRoute[15] - 15:
        if (this.flagBlueLife) {
          game.time.events.add(1500, function () {
            this.player_1.x = 690;
            this.player_1.y = 430;
            this.PointsScoredToDeathBlue(this.scoreBlue);
            this.flagBlueLife = false;

          }, this);
        }
        break;
      case this.arrX_RedRoute[14] - 15:
        if (this.flagBlueRed) {
          game.time.events.add(1500, function () {
            this.player_2.x = 600;
            this.player_2.y = 190;
            this.flagRedLife = false;
            this.PointsScoredToDeathRed(this.scoreRed);
          }, this);
        }
        break;
      case this.arrX_RedRoute[28] - 15:
        game.time.events.add(1500, function () {
          this.player_2.x = 190;
          this.player_2.y = 110;
          this.flagRedLife = false;
          this.PointsScoredToDeathRed(this.scoreRed);
        }, this);
        break;
      case this.arrX_GreenRoute[24] - 15:
        game.time.events.add(1500, function () {
          this.player_3.x = 180;
          this.player_3.y = 520;
          this.flagGreenLife = false;
          this.PointsScoredToDeathGreen(this.scoreGreen);
        }, this);
        break;
      case this.arrX_GreenRoute[30] - 15:
        game.time.events.add(1500, function () {
          this.player_3.x = 60
          this.player_3.y = 280;
          this.flagGreenLife = false;
          this.PointsScoredToDeathGreen(this.scoreGreen);
        }, this);
        break;
      default:
        break;
    }
  },
  showPointRouteGreen: function (posx) {
    switch (posx) {
      case this.arrX_GreenRoute[9] - 15:
        this.picShow('Vorotynets', 3);
        break;
      case this.arrX_GreenRoute[14] - 15:
        this.picShow('Balakhonikha', 3);
        break;
      case this.arrX_GreenRoute[17] - 15:
        this.picShow('Yermish', 3);
        break;
      case this.arrX_GreenRoute[20] - 15:
        this.picShow('Shilovo', 3);
        break;
      case this.arrX_GreenRoute[25] - 15:
        this.picShow('Ryazan', 3);
        break;
      case this.arrX_GreenRoute[28] - 15:
        this.picShow('Kolomna', 3);
        break;
      default:
        break;

    }
  },
  showPointRouteRed: function (posx) {
    switch (posx) {
      case this.arrX_RedRoute[11] - 15:
        this.picShow('Vorotynets', 2);
        break;
      case this.arrX_RedRoute[15] - 15:
        this.picShow('Starolikeyevo', 2);
        break;
      case this.arrX_RedRoute[17] - 15:
        this.picShow('Stepankovo', 2);
        break;
      case this.arrX_RedRoute[19] - 15:
        this.picShow('Filino', 2);
        break;
      case this.arrX_RedRoute[25] - 15:
        this.picShow('Zalesye', 2);
        break;
      default:
        break;
    }
  },
  showPointRouteBlue: function (posx) {

    switch (posx) {
      case this.arrX_BlueRoute[1] - 15:
        this.picShow('dybniki', 1);
        break;
      case this.arrX_BlueRoute[3] - 15:
        this.picShow('prydki', 1);
        break;
      case this.arrX_BlueRoute[7] - 15:
        this.picShow('kilimari', 1);
        break;
      case this.arrX_BlueRoute[10] - 15:
        this.picShow('Melkovka', 1);
        break;
      case this.arrX_BlueRoute[13] - 15:
        this.picShow('Makaryevo', 1);
        break;
      case this.arrX_BlueRoute[14] - 15:
        this.picShow('Gorkiy', 1);
        break;
      case this.arrX_BlueRoute[17] - 15:
        this.picShow('Stepankovo', 1);
        break;
      case this.arrX_BlueRoute[19] - 15:
        this.picShow('Filino', 1);
        break;
      case this.arrX_BlueRoute[24] - 15:
        this.picShow('Zalesye', 1);
        break;
      default:
        break;


    }

  },

}
