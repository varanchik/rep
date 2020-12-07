unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Grids,KMaWk,Unit2,Unit4,
  acPNG, Vcl.ExtCtrls, sSkinManager;

type
  TForm1 = class(TForm)
    Label1: TLabel;
    Label2: TLabel;
    StringGrid1: TStringGrid;
    Button1: TButton;
    Button2: TButton;
    Button3: TButton;
    Button4: TButton;
    Image1: TImage;
    procedure FormActivate(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure StringGrid1Click(Sender: TObject);
    procedure StringGrid1SetEditText(Sender: TObject; ACol, ARow: Integer;
      const Value: string);
    procedure Button4Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);

  private
    { Private declarations }
  public
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
var
 j,k: Integer;
 fl: Boolean;
begin
 fl:=True;
for j := 1 to StringGrid1.RowCount-1 do
 for k := 1 to StringGrid1.ColCount-1 do
 begin
  if StringGrid1.Cells[j,k]='' then
   begin
    fl:=false;
   end;
 end;
 if fl=false then
  begin
    ShowMessage('Не все ячейки заполнены!');
  end
  else
  begin
for j := 1 to StringGrid1.RowCount do
 for k := 1 to StringGrid1.ColCount do
 begin
  form4.StringGrid2.Cells[j,k]:=StringGrid1.Cells[k,j];
 end;
   Form4.Show;
  end;
end;


procedure TForm1.Button2Click(Sender: TObject);
var
 j,k: Integer;
begin
for j := 1 to StringGrid1.RowCount do
 for k := 1 to StringGrid1.ColCount do
 begin
  StringGrid1.Cells[j,k]:='';
  form4.StringGrid2.Cells[j,k]:='';
 end;
end;

procedure TForm1.Button3Click(Sender: TObject);
begin
close;
end;

procedure TForm1.Button4Click(Sender: TObject);
begin
Application.CreateForm(TForm2, Form2);
form2.Show;
end;

procedure TForm1.FormActivate(Sender: TObject);
var
 i,j : Integer;
begin
 for i:=1 to stringGrid1.RowCount do
   stringGrid1.Cells[0,i]:=IntToStr(i);
 for j:=1 to stringGrid1.ColCount do
   stringGrid1.Cells[j,0]:=IntToStr(j);
 for i:=1 to form4.stringGrid2.RowCount do
   form4.stringGrid2.Cells[0,i]:=IntToStr(i);
 for j:=1 to form4.stringGrid2.ColCount do
   form4.stringGrid2.Cells[j,0]:=IntToStr(j);
end;



procedure TForm1.StringGrid1Click(Sender: TObject);
begin
 Stringgrid1.Options := Stringgrid1.Options + [goEditing];
end;




procedure TForm1.StringGrid1SetEditText(Sender: TObject; ACol, ARow: Integer;
const Value: string);
begin
if KMaWk.nalbuk(StringGrid1.Cells[StringGrid1.Col,StringGrid1.Row]) then
begin
 ShowMessage('Вводите только цифры');
 StringGrid1.Cells[StringGrid1.row,StringGrid1.col]:='';
end;
end;

end.
