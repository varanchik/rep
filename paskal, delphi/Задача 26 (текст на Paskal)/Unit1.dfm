object Form1: TForm1
  Left = 0
  Top = 0
  BorderStyle = bsSingle
  Caption = #1055#1086#1076#1089#1095#1077#1090' '#1082#1086#1083#1080#1095#1077#1089#1090#1074#1072' begin '#1080' end '#1074' '#1090#1077#1082#1089#1090#1077
  ClientHeight = 343
  ClientWidth = 745
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 8
    Top = 8
    Width = 222
    Height = 13
    Caption = #1042#1074#1077#1076#1080#1090#1077' '#1090#1077#1082#1089#1090'  '#1087#1088#1086#1075#1088#1072#1084#1084#1099' '#1085#1072' '#1103#1079#1099#1082#1077' Paskal:'
  end
  object Label2: TLabel
    Left = 8
    Top = 314
    Width = 213
    Height = 19
    Caption = #1050#1086#1083#1080#1095#1077#1089#1090#1074#1086' begin: 0; end: 0;'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object Memo1: TMemo
    Left = 8
    Top = 83
    Width = 728
    Height = 225
    Lines.Strings = (
      '  swapCount := 0;'
      '  z := strtoint(Edit1.Text);'
      '  for i := 1 to 20 do'
      '  begin'
      '    if (arr[i] > z) then'
      '    begin'
      '      StringGrid3.Cells[i - 1, 0] := inttostr(z);'
      '      Inc(swapCount);'
      '    end'
      '    else'
      '      StringGrid3.Cells[i - 1, 0] := inttostr(arr[i]);'
      '  end;'
      '  Label5.Caption := '#39#1050#1086#1083#1080#1095#1077#1089#1090#1074#1086' '#1079#1072#1084#1077#1085': '#39' + inttostr(swapCount);'
      'end;')
    ScrollBars = ssBoth
    TabOrder = 0
  end
  object Edit1: TEdit
    Left = 8
    Top = 27
    Width = 728
    Height = 21
    TabOrder = 1
    Text = 'procedure TForm1.Edit1Change(Sender: TObject);'
  end
  object Button1: TButton
    Left = 8
    Top = 52
    Width = 728
    Height = 25
    Caption = #1044#1086#1073#1072#1074#1080#1090#1100' '#1089#1090#1088#1086#1082#1091
    TabOrder = 2
    OnClick = Button1Click
  end
  object Memo2: TMemo
    Left = 304
    Top = 352
    Width = 185
    Height = 89
    Lines.Strings = (
      'begin'
      'end')
    TabOrder = 3
    Visible = False
  end
  object Button2: TButton
    Left = 256
    Top = 314
    Width = 481
    Height = 25
    Caption = #1055#1086#1076#1089#1095#1080#1090#1072#1090#1100
    TabOrder = 4
    OnClick = Button2Click
  end
end
