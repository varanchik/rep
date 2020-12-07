object Form2: TForm2
  Left = 0
  Top = 0
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = #1048#1079#1084#1080#1085#1077#1085#1080#1077
  ClientHeight = 130
  ClientWidth = 237
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poOwnerFormCenter
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 24
    Top = 27
    Width = 114
    Height = 26
    Caption = #1050#1086#1083#1080#1095#1077#1089#1090#1074#1086' '#1089#1090#1086#1083#1073#1094#1086#1074':'#13#10
  end
  object Label2: TLabel
    Left = 24
    Top = 56
    Width = 96
    Height = 26
    Caption = #1050#1086#1083#1080#1095#1077#1089#1090#1074#1086' '#1089#1090#1088#1086#1082':'#13#10
  end
  object sButton1: TsButton
    Left = 32
    Top = 90
    Width = 177
    Height = 31
    Caption = #1055#1088#1080#1084#1077#1085#1080#1090#1100
    TabOrder = 0
    OnClick = sButton1Click
    SkinData.SkinSection = 'BUTTON'
  end
  object Edit1: TEdit
    Left = 147
    Top = 24
    Width = 77
    Height = 21
    NumbersOnly = True
    TabOrder = 1
  end
  object Edit2: TEdit
    Left = 147
    Top = 53
    Width = 77
    Height = 21
    NumbersOnly = True
    TabOrder = 2
  end
end
