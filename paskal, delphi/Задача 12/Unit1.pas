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
    Label2: TLabel;
    StringGrid2: TStringGrid;
    Label3: TLabel;
    StringGrid3: TStringGrid;
    Label4: TLabel;
    Edit1: TEdit;
    Label5: TLabel;
    procedure FormCreate(Sender: TObject);
    procedure Edit1Change(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  arr: array [1 .. 20] of integer;
  z, i, j, sum: integer;
  swapCount: integer;

implementation

{$R *.dfm}

procedure TForm1.Edit1Change(Sender: TObject);
begin
  swapCount := 0;
  z := strtoint(Edit1.Text);
  for i := 1 to 20 do
  begin
    if (arr[i] > z) then
    begin
      StringGrid3.Cells[i - 1, 0] := inttostr(z);
      Inc(swapCount);
    end
    else
      StringGrid3.Cells[i - 1, 0] := inttostr(arr[i]);
  end;
  Label5.Caption := '���������� �����: ' + inttostr(swapCount);
end;

procedure TForm1.FormCreate(Sender: TObject);

begin
  StringGrid1.ColCount := 21;
  StringGrid2.ColCount := 21;
  StringGrid3.ColCount := 21;
  z := strtoint(Edit1.Text);
  swapCount := 0;
  sum := 0;
  j := 0;
  for i := 1 to 20 do
  begin
    arr[i] := Random(51) - 25;
    StringGrid1.Cells[i - 1, 0] := inttostr(arr[i]); // ������� � string grid
    if (arr[i] > z) then
    begin
      StringGrid3.Cells[i - 1, 0] := inttostr(z);
      Inc(swapCount);
    end
    else
      StringGrid3.Cells[i - 1, 0] := inttostr(arr[i]);
    if (arr[i] mod 6 = 0) then
    begin
      StringGrid2.Cells[j, 0] := inttostr(arr[i]);
      sum := sum + arr[i];
      Inc(j);
    end;

  end;
  Label3.Caption := '�����: ����� ��������� ������� ������� 6 : ' +
    inttostr(sum);
  Label5.Caption := '���������� �����: ' + inttostr(swapCount);
end;

end.
