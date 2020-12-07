unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Grids;

type
  TForm1 = class(TForm)
    StringGrid1: TStringGrid;
    Label1: TLabel;
    StringGrid2: TStringGrid;
    Label2: TLabel;
    Edit1: TEdit;
    Label3: TLabel;
    procedure FormCreate(Sender: TObject);
    procedure Edit1Change(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  arr: array [1 .. 10, 1 .. 10] of integer;
  b: array [1 .. 10] of integer;
  i, j: integer;
  sum: double;
  h: integer;
  countH: integer;

implementation

{$R *.dfm}

procedure TForm1.Edit1Change(Sender: TObject);
begin
  h := strtoint(Edit1.Text);
  for i := 1 to 10 do
  begin
    countH := 0;
    for j := 1 to 10 do
    begin
      if arr[i, j] > h then
        Inc(countH);
      b[i] := countH;
      StringGrid2.Cells[i - 1, 0] := inttostr(b[i]);
    end;
  end;
end;

procedure TForm1.FormCreate(Sender: TObject);
begin
  StringGrid1.RowCount := 10;
  StringGrid1.ColCount := 10;
  StringGrid2.RowCount := 1;
  StringGrid2.ColCount := 10;
  h := strtoint(Edit1.Text);
  sum := 0.0;

  for i := 1 to 10 do
  begin
    countH := 0;
    for j := 1 to 10 do
    begin
      arr[i, j] := Random(51) - 25;
      sum := sum + arr[1, j];
      StringGrid1.Cells[i - 1, j - 1] := inttostr(arr[i, j]);
      if arr[i, j] > h then
        Inc(countH);
      b[i] := countH;
      StringGrid2.Cells[i - 1, 0] := inttostr(b[i]);
    end;
  end;
  Label1.Caption := '������� �������������� ������ ������: ' +
    floattostr(sum / 10);

end;

end.
