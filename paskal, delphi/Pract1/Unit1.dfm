object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 226
  ClientWidth = 341
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object sLabel1: TsLabel
    Left = 112
    Top = 32
    Width = 116
    Height = 13
    Caption = '<a=(2/(b+c))'#8730'bcp(p-a)'
  end
  object Label1: TLabel
    Left = 88
    Top = 144
    Width = 46
    Height = 13
    Caption = #1054#1090#1074#1077#1090' = '
  end
  object Label2: TLabel
    Left = 26
    Top = 69
    Width = 56
    Height = 13
    Caption = #1042#1074#1077#1076#1080#1090#1077' '#1072':'
  end
  object Label3: TLabel
    Left = 143
    Top = 69
    Width = 56
    Height = 13
    Caption = #1042#1074#1077#1076#1080#1090#1077' b:'
  end
  object Label4: TLabel
    Left = 254
    Top = 69
    Width = 55
    Height = 13
    Caption = #1042#1074#1077#1076#1080#1090#1077' c:'
  end
  object sEdit1: TsEdit
    Left = 16
    Top = 88
    Width = 73
    Height = 21
    TabOrder = 0
    OnExit = sEdit1Exit
    SkinData.SkinSection = 'EDIT'
    BoundLabel.Indent = 0
    BoundLabel.Font.Charset = DEFAULT_CHARSET
    BoundLabel.Font.Color = clWindowText
    BoundLabel.Font.Height = -11
    BoundLabel.Font.Name = 'Tahoma'
    BoundLabel.Font.Style = []
    BoundLabel.Layout = sclLeft
    BoundLabel.MaxWidth = 0
    BoundLabel.UseSkinColor = True
  end
  object sButton1: TsButton
    Left = 56
    Top = 187
    Width = 75
    Height = 25
    Caption = #1057#1095#1077#1090
    TabOrder = 1
    OnClick = sButton1Click
    SkinData.SkinSection = 'BUTTON'
  end
  object sButton2: TsButton
    Left = 197
    Top = 187
    Width = 75
    Height = 25
    Caption = #1042#1099#1093#1086#1076
    TabOrder = 2
    OnClick = sButton2Click
    SkinData.SkinSection = 'BUTTON'
  end
  object sEdit2: TsEdit
    Left = 139
    Top = 88
    Width = 65
    Height = 21
    TabOrder = 3
    OnExit = sEdit2Exit
    SkinData.SkinSection = 'EDIT'
    BoundLabel.Indent = 0
    BoundLabel.Font.Charset = DEFAULT_CHARSET
    BoundLabel.Font.Color = clWindowText
    BoundLabel.Font.Height = -11
    BoundLabel.Font.Name = 'Tahoma'
    BoundLabel.Font.Style = []
    BoundLabel.Layout = sclLeft
    BoundLabel.MaxWidth = 0
    BoundLabel.UseSkinColor = True
  end
  object sEdit3: TsEdit
    Left = 247
    Top = 88
    Width = 73
    Height = 21
    TabOrder = 4
    OnExit = sEdit3Exit
    SkinData.SkinSection = 'EDIT'
    BoundLabel.Indent = 0
    BoundLabel.Font.Charset = DEFAULT_CHARSET
    BoundLabel.Font.Color = clWindowText
    BoundLabel.Font.Height = -11
    BoundLabel.Font.Name = 'Tahoma'
    BoundLabel.Font.Style = []
    BoundLabel.Layout = sclLeft
    BoundLabel.MaxWidth = 0
    BoundLabel.UseSkinColor = True
  end
end
