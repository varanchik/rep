object Form1: TForm1
  Left = 192
  Top = 126
  Width = 846
  Height = 439
  Caption = #1059#1095#1077#1090' '#1074#1086#1076#1080#1090#1077#1083#1077#1081' '#1090#1088#1072#1085#1089#1087#1086#1088#1090#1085#1099#1093' '#1089#1088#1077#1076#1089#1090#1074
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  Menu = MainMenu1
  OldCreateOrder = False
  OnActivate = FormActivate
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object dbgGibdd: TDBGrid
    Left = 0
    Top = 0
    Width = 830
    Height = 273
    DataSource = MySource
    TabOrder = 0
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'MS Sans Serif'
    TitleFont.Style = []
    Columns = <
      item
        Expanded = False
        FieldName = 'NUMPRAV'
        Title.Caption = #1053#1086#1084#1077#1088' '#1074#1086#1076'. '#1087#1088#1072#1074
        Width = 95
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'FIO'
        Title.Caption = #1060'.'#1048'.'#1054'.'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'ADRESS'
        Title.Caption = #1040#1076#1088#1077#1089
        Width = 233
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'CATEGORY'
        Title.Caption = #1050#1072#1090#1077#1075#1086#1088#1080#1103
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'BALLS'
        Title.Caption = #1064#1090#1088#1072#1092'.'#1041#1072#1083#1083#1099
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'EXP'
        Title.Caption = #1057#1090#1072#1078' '#1042#1086#1078#1076#1077#1085#1080#1103
        Width = 88
        Visible = True
      end>
  end
  object CheckBox1: TCheckBox
    Left = 4
    Top = 282
    Width = 154
    Height = 17
    Caption = #1042#1082#1083#1102#1080#1090#1100' '#1087'/'#1092' '#1087#1086' '#1085#1086#1084#1077#1088#1091
    TabOrder = 1
  end
  object CheckBox2: TCheckBox
    Left = 180
    Top = 282
    Width = 149
    Height = 17
    Caption = #1042#1082#1083#1102#1080#1090#1100' '#1087#1086#1080#1089#1082' '#1087#1086' '#1060'.'#1048'.'#1054'.'
    TabOrder = 2
  end
  object CheckBox3: TCheckBox
    Left = 397
    Top = 282
    Width = 159
    Height = 17
    Caption = #1042#1082#1083#1102#1080#1090#1100' '#1087#1086#1080#1089#1082' '#1087#1086' '#1072#1076#1088#1077#1089#1091
    TabOrder = 3
  end
  object CheckBox4: TCheckBox
    Left = 4
    Top = 306
    Width = 170
    Height = 17
    Caption = #1042#1082#1083#1102#1080#1090#1100' '#1087#1086#1080#1089#1082' '#1087#1086' '#1082#1072#1090#1077#1075#1086#1088#1080#1080
    TabOrder = 4
  end
  object CheckBox5: TCheckBox
    Left = 396
    Top = 306
    Width = 205
    Height = 17
    Caption = #1042#1082#1083#1102#1080#1090#1100' '#1087'/'#1092' '#1087#1086' '#1089#1090#1072#1078#1091' '#1074#1086#1078#1076#1077#1085#1080#1103
    TabOrder = 5
  end
  object CheckBox6: TCheckBox
    Left = 180
    Top = 306
    Width = 213
    Height = 17
    Caption = #1042#1082#1083#1102#1080#1090#1100' '#1087'/'#1092' '#1087#1086' '#1096#1090#1088#1072#1092#1085#1099#1084' '#1073#1072#1083#1083#1072#1084
    TabOrder = 6
  end
  object Edit7: TEdit
    Left = 0
    Top = 328
    Width = 169
    Height = 21
    TabOrder = 7
    Text = #1053#1086#1084#1077#1088' '#1076#1083#1103' '#1087#1086#1080#1089#1082#1072
    OnKeyUp = Edit7KeyUp
  end
  object Edit8: TEdit
    Left = 176
    Top = 328
    Width = 169
    Height = 21
    TabOrder = 8
    Text = #1060#1048#1054' '#1076#1083#1103' '#1087#1086#1080#1089#1082#1072
    OnKeyUp = Edit8KeyUp
  end
  object Edit10: TEdit
    Left = 0
    Top = 352
    Width = 169
    Height = 21
    TabOrder = 9
    Text = #1064#1090#1088#1072#1081'. '#1041#1072#1083#1083#1099' '#1076#1083#1103' '#1087#1086#1080#1089#1082#1072
    OnKeyUp = Edit10KeyUp
  end
  object Edit11: TEdit
    Left = 176
    Top = 352
    Width = 169
    Height = 21
    TabOrder = 10
    Text = #1057#1090#1072#1078' '#1074#1086#1078#1076#1077#1085#1080#1103' '#1076#1083#1103' '#1087#1086#1080#1089#1082#1072
    OnKeyUp = Edit11KeyUp
  end
  object ComboBox1: TComboBox
    Left = 352
    Top = 352
    Width = 169
    Height = 21
    ItemHeight = 13
    TabOrder = 11
    Text = #1050#1072#1090#1077#1075#1086#1088#1080#1103' '#1076#1083#1103' '#1087#1086#1080#1089#1082#1072
  end
  object Edit1: TEdit
    Left = 352
    Top = 328
    Width = 169
    Height = 21
    TabOrder = 12
    Text = #1040#1076#1088#1077#1089' '#1076#1083#1103' '#1087#1086#1080#1089#1082#1072
  end
  object MainMenu1: TMainMenu
    Left = 128
    Top = 96
    object N1: TMenuItem
      Caption = #1041#1072#1079#1072
      object N5: TMenuItem
        Caption = #1044#1086#1073#1072#1074#1080#1090#1100
        OnClick = N5Click
      end
      object N6: TMenuItem
        Caption = #1056#1077#1076#1072#1082#1090#1080#1088#1086#1074#1072#1090#1100
        OnClick = N6Click
      end
      object N7: TMenuItem
        Caption = #1059#1076#1072#1083#1080#1090#1100
        OnClick = N7Click
      end
    end
    object N2: TMenuItem
      Caption = #1060#1080#1083#1100#1090#1088
      object N8: TMenuItem
        Caption = #1053#1072#1083#1086#1078#1080#1090#1100
        OnClick = N8Click
      end
      object N9: TMenuItem
        Caption = #1057#1085#1103#1090#1100
        OnClick = N9Click
      end
    end
    object N3: TMenuItem
      Caption = #1055#1086#1080#1089#1082
      object N10: TMenuItem
        Caption = #1055#1086' '#1087#1086#1083#1102
        OnClick = N10Click
      end
      object N11: TMenuItem
        Caption = #1055#1086' '#1085#1077#1089#1082#1086#1083#1100#1082#1080#1084' '#1087#1086#1083#1103#1084
        OnClick = N11Click
      end
    end
    object N4: TMenuItem
      Caption = #1054#1090#1095#1077#1090
      object N12: TMenuItem
        Caption = #1055#1088#1077#1076#1087#1088#1086#1089#1084#1086#1090#1088
        OnClick = N12Click
      end
      object N13: TMenuItem
        Caption = #1055#1077#1095#1072#1090#1100
        OnClick = N13Click
      end
    end
    object N15: TMenuItem
      Caption = #1057#1087#1088#1072#1074#1082#1072
      OnClick = N15Click
    end
    object N14: TMenuItem
      Caption = #1042#1099#1093#1086#1076
      OnClick = N14Click
    end
  end
  object tblGibdd: TTable
    Active = True
    DatabaseName = 'gibdd'
    IndexFieldNames = 'NUMPRAV'
    TableName = 'Gibdd.dbf'
    Left = 64
    Top = 96
  end
  object MySource: TDataSource
    DataSet = tblGibdd
    Left = 96
    Top = 96
  end
end
