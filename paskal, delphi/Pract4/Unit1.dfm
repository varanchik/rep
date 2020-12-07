object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 281
  ClientWidth = 635
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object GroupBox1: TGroupBox
    Left = 8
    Top = 8
    Width = 137
    Height = 257
    Caption = #1042#1074#1086#1076' '#1076#1072#1085#1085#1099#1093
    TabOrder = 0
    object Label1: TLabel
      Left = 19
      Top = 24
      Width = 87
      Height = 13
      Caption = #1042#1074#1077#1076#1080#1090#1077' '#1101#1083#1077#1084#1077#1085#1090
    end
    object Edit1: TEdit
      Left = 6
      Top = 43
      Width = 131
      Height = 21
      TabOrder = 0
      OnExit = Edit1Exit
    end
    object Button1: TButton
      Left = 6
      Top = 70
      Width = 131
      Height = 25
      Caption = #1044#1086#1073#1072#1074#1080#1090#1100
      TabOrder = 1
      OnClick = Button1Click
    end
    object ListBox1: TListBox
      Left = 6
      Top = 128
      Width = 131
      Height = 126
      ItemHeight = 13
      TabOrder = 2
    end
  end
  object GroupBox2: TGroupBox
    Left = 151
    Top = 8
    Width = 185
    Height = 257
    Caption = #1053#1072#1089#1090#1088#1086#1081#1082#1080
    TabOrder = 1
    object CheckBox1: TCheckBox
      Left = 16
      Top = 45
      Width = 166
      Height = 17
      Caption = #1057#1086#1088#1090#1080#1088#1086#1074#1072#1090#1100
      TabOrder = 0
    end
    object RadioGroup1: TRadioGroup
      Left = 6
      Top = 78
      Width = 174
      Height = 121
      Caption = #1064#1088#1080#1092#1090
      ItemIndex = 0
      Items.Strings = (
        #1086#1073#1099#1095#1085#1099#1081
        #1082#1091#1088#1089#1080#1074
        #1087#1086#1083#1091#1078#1080#1088#1085#1099#1081)
      TabOrder = 1
      OnClick = RadioGroup1Click
    end
  end
  object GroupBox3: TGroupBox
    Left = 342
    Top = 8
    Width = 185
    Height = 257
    Caption = #1056#1077#1079#1091#1083#1100#1090#1072#1090
    TabOrder = 2
    object Label2: TLabel
      Left = 16
      Top = 24
      Width = 49
      Height = 13
      Caption = #1052#1072#1082#1089#1080#1084#1091#1084
    end
    object Label3: TLabel
      Left = 16
      Top = 73
      Width = 49
      Height = 13
      Caption = #1074' '#1084#1072#1089#1089#1080#1074#1077
    end
    object Edit2: TEdit
      Left = 16
      Top = 43
      Width = 121
      Height = 21
      ReadOnly = True
      TabOrder = 0
    end
    object ListBox2: TListBox
      Left = 16
      Top = 104
      Width = 153
      Height = 139
      ItemHeight = 13
      TabOrder = 1
    end
  end
  object Button3: TButton
    Left = 533
    Top = 20
    Width = 94
    Height = 25
    Caption = #1056#1077#1096#1077#1085#1080#1077
    TabOrder = 3
    OnClick = Button3Click
  end
  object Button4: TButton
    Left = 533
    Top = 51
    Width = 94
    Height = 25
    Caption = #1054#1095#1080#1089#1090#1080#1090#1100
    TabOrder = 4
    OnClick = Button4Click
  end
  object Button5: TButton
    Left = 533
    Top = 82
    Width = 94
    Height = 25
    Caption = #1042#1099#1093#1086#1076
    TabOrder = 5
    OnClick = Button5Click
  end
  object Button2: TButton
    Left = 14
    Top = 106
    Width = 131
    Height = 24
    Caption = #1056#1072#1085#1076#1086#1084' 5'
    TabOrder = 6
    OnClick = Button2Click
  end
end
