unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Math, Vcl.Grids;

type
  TForm1 = class(TForm)
    StringGrid1: TStringGrid;
    procedure FormShow(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.FormShow(Sender: TObject);

var
  a, b, h, x, y, s, k: double;
  i, n, z: integer;
begin
  z := 1;
  a := 0.1;
  b := 1;
  x := a;
  h := (b - a) / 10;
  n := 11;
  StringGrid1.Cells[0, 0] := 'X';
  StringGrid1.Cells[1, 0] := 'S(x)';
  StringGrid1.Cells[2, 0] := 'Y(x)';
  while x <= b do
  begin
    s := 1;
    k := 1;
    y := (1 - power(x, 2) / 2) * cos(x) - x / 2 * sin(x);
    for i := 1 to n do
    begin
      k := k / (2 * i);
      s := s + power((-1), i) * (2 * power(i, 2) + 1) * power(x, (2 * i)) * k;
    end;
    StringGrid1.Cells[0, z] := floattostr(x);
    StringGrid1.Cells[1, z] := floattostr(s);
    StringGrid1.Cells[2, z] := floattostr(y);
    { Memo1.Lines.Add('| ' + floattostr(x) + '    |   ' + floattostr(y) +
      '   |   ' + floattostr(s) + '   |'); }
    x := x + h;
    Inc(z);
  end;
end;

end.
