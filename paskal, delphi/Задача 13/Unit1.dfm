object Form1: TForm1
  Left = 0
  Top = 0
  BorderStyle = bsSingle
  Caption = #1047#1072#1076#1072#1095#1072' 13'
  ClientHeight = 449
  ClientWidth = 675
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 8
    Top = 271
    Width = 213
    Height = 13
    Caption = #1057#1088#1077#1076#1085#1077#1077' '#1072#1088#1080#1092#1084#1080#1090#1080#1095#1077#1089#1082#1086#1077' '#1087#1077#1088#1074#1086#1081' '#1089#1090#1088#1086#1082#1080':'
  end
  object Label2: TLabel
    Left = 8
    Top = 295
    Width = 44
    Height = 13
    Caption = #1063#1080#1089#1083#1086' H:'
  end
  object Label3: TLabel
    Left = 8
    Top = 316
    Width = 209
    Height = 13
    Caption = #1050#1086#1083#1080#1095#1077#1089#1090#1074#1086' '#1101#1083#1077#1084#1077#1085#1090#1086#1074' '#1074' '#1082#1072#1078#1076#1086#1081' '#1089#1090#1088#1086#1082#1077':'
  end
  object StringGrid1: TStringGrid
    Left = 8
    Top = 8
    Width = 657
    Height = 257
    ColCount = 10
    FixedCols = 0
    RowCount = 10
    FixedRows = 0
    TabOrder = 0
  end
  object StringGrid2: TStringGrid
    Left = 8
    Top = 335
    Width = 659
    Height = 34
    ColCount = 10
    FixedCols = 0
    RowCount = 1
    FixedRows = 0
    TabOrder = 1
  end
  object Edit1: TEdit
    Left = 58
    Top = 292
    Width = 39
    Height = 21
    TabOrder = 2
    Text = '5'
    OnChange = Edit1Change
  end
end
