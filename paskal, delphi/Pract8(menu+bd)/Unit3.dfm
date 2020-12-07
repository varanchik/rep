object Form3: TForm3
  Left = 583
  Top = 254
  BorderStyle = bsSingle
  Caption = #1057#1087#1088#1072#1074#1082#1072
  ClientHeight = 505
  ClientWidth = 402
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  Position = poDesktopCenter
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 8
    Top = 344
    Width = 61
    Height = 13
    Caption = #1053#1086#1084#1077#1088' '#1079#1072#1083#1072
  end
  object Label2: TLabel
    Left = 8
    Top = 368
    Width = 50
    Height = 13
    Caption = #1054#1087#1080#1089#1072#1085#1080#1077
  end
  object DBGrid1: TDBGrid
    Left = 0
    Top = 0
    Width = 401
    Height = 297
    DataSource = MySource2
    Options = [dgTitles, dgIndicator, dgColumnResize, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit]
    TabOrder = 0
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'MS Sans Serif'
    TitleFont.Style = []
    Columns = <
      item
        Alignment = taLeftJustify
        Expanded = False
        FieldName = 'NUMZAL'
        Title.Alignment = taCenter
        Title.Caption = #1053#1086#1084#1077#1088' '#1047#1072#1083#1072
        Width = 125
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'OPIS'
        Title.Alignment = taCenter
        Title.Caption = #1054#1087#1080#1089#1072#1085#1080#1077' '#1047#1072#1083#1072
        Visible = True
      end>
  end
  object Edit1: TEdit
    Left = 80
    Top = 339
    Width = 76
    Height = 21
    TabOrder = 1
    OnKeyUp = Edit1KeyUp
  end
  object Memo1: TMemo
    Left = 80
    Top = 368
    Width = 322
    Height = 129
    ScrollBars = ssBoth
    TabOrder = 2
  end
  object Button1: TButton
    Left = 3
    Top = 304
    Width = 75
    Height = 25
    Caption = #1057#1086#1093#1088#1072#1085#1080#1090#1100
    TabOrder = 3
    OnClick = Button1Click
  end
  object Button4: TButton
    Left = 163
    Top = 304
    Width = 75
    Height = 25
    Caption = #1044#1072#1083#1077#1077
    TabOrder = 4
    OnClick = Button4Click
  end
  object Button5: TButton
    Left = 83
    Top = 304
    Width = 75
    Height = 25
    Caption = #1053#1072#1079#1072#1076
    TabOrder = 5
    OnClick = Button5Click
  end
  object Button2: TButton
    Left = 323
    Top = 304
    Width = 75
    Height = 25
    Caption = #1059#1076#1072#1083#1080#1090#1100
    TabOrder = 6
    OnClick = Button2Click
  end
  object Button3: TButton
    Left = 243
    Top = 304
    Width = 75
    Height = 25
    Caption = #1044#1086#1073#1072#1074#1080#1090#1100
    TabOrder = 7
    OnClick = Button3Click
  end
  object Button6: TButton
    Left = 163
    Top = 336
    Width = 102
    Height = 25
    Caption = #1056#1077#1076#1072#1082#1090#1080#1088#1086#1074#1072#1090#1100
    TabOrder = 8
    OnClick = Button6Click
  end
  object tblNumzal: TTable
    Active = True
    DatabaseName = 'numzal'
    IndexFieldNames = 'NUMZAL'
    TableName = 'zal.DBF'
    Left = 96
    Top = 112
  end
  object MySource2: TDataSource
    DataSet = tblNumzal
    Left = 240
    Top = 128
  end
end
