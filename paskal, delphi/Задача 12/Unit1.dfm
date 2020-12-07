object Form1: TForm1
  Left = 0
  Top = 0
  BorderStyle = bsSingle
  Caption = #1047#1072#1076#1072#1095#1072' 12'
  ClientHeight = 304
  ClientWidth = 897
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
    Top = 13
    Width = 92
    Height = 13
    Caption = #1048#1089#1093#1086#1076#1085#1099#1081' '#1084#1072#1089#1089#1080#1074':'
  end
  object Label2: TLabel
    Left = 8
    Top = 104
    Width = 111
    Height = 13
    Caption = #1069#1083#1077#1084#1077#1085#1090#1099' '#1082#1088#1072#1090#1085#1099#1077' 6:'
  end
  object Label3: TLabel
    Left = 152
    Top = 105
    Width = 36
    Height = 13
    Caption = #1054#1090#1074#1077#1090':'
  end
  object Label4: TLabel
    Left = 8
    Top = 192
    Width = 43
    Height = 13
    Caption = #1063#1080#1089#1083#1086' Z:'
  end
  object Label5: TLabel
    Left = 120
    Top = 192
    Width = 96
    Height = 13
    Caption = #1050#1086#1083#1080#1095#1077#1089#1090#1074#1086' '#1079#1072#1084#1077#1085':'
  end
  object StringGrid1: TStringGrid
    Left = 8
    Top = 32
    Width = 881
    Height = 65
    ColCount = 21
    Ctl3D = True
    FixedCols = 0
    RowCount = 1
    FixedRows = 0
    ParentCtl3D = False
    TabOrder = 0
    ColWidths = (
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64
      64)
  end
  object StringGrid2: TStringGrid
    Left = 8
    Top = 124
    Width = 881
    Height = 48
    TabOrder = 1
    ColWidths = (
      64
      64
      64
      64
      64)
  end
  object StringGrid3: TStringGrid
    Left = 8
    Top = 220
    Width = 881
    Height = 48
    TabOrder = 2
    ColWidths = (
      64
      64
      64
      64
      64)
  end
  object Edit1: TEdit
    Left = 61
    Top = 189
    Width = 28
    Height = 21
    TabOrder = 3
    Text = '5'
    OnChange = Edit1Change
  end
end
