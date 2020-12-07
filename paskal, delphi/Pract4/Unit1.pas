unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.StdCtrls,KMaWk;

type
  TForm1 = class(TForm)
    GroupBox1: TGroupBox;
    GroupBox2: TGroupBox;
    GroupBox3: TGroupBox;
    Label1: TLabel;
    Edit1: TEdit;
    Button1: TButton;
    ListBox1: TListBox;
    CheckBox1: TCheckBox;
    RadioGroup1: TRadioGroup;
    Edit2: TEdit;
    Label2: TLabel;
    Label3: TLabel;
    ListBox2: TListBox;
    Button3: TButton;
    Button4: TButton;
    Button5: TButton;
    Button2: TButton;
    procedure Button1Click(Sender: TObject);
    procedure RadioGroup1Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure Edit1Exit(Sender: TObject);
  private
    { Private declarations }
  public
    procedure sort;
  end;

 type mass = array[0..1000] of Double;

var
  Form1: TForm1;
  Mas:mass;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
begin
ListBox1.Items.Add(Edit1.Text);
Edit1.Text:='';
Edit1.SetFocus;
end;



procedure TForm1.Button2Click(Sender: TObject);
var
i:integer;
begin
Randomize;
for I := 0 to 4 do
ListBox1.Items.Add(IntToStr(Random(1000)));
end;

procedure TForm1.Button3Click(Sender: TObject);
var
i: Integer;
max: double;
begin
 max := StrToFloat(ListBox1.Items[0]);
 for i:=1 to ListBox1.Items.Count-1 do
  if max < StrToFloat(ListBox1.Items[i]) then
    max := StrToFloat(ListBox1.Items[i]);
 Edit2.Text := FloatToStrF(max,ffFixed,100,2);
 ListBox2.Items := ListBox1.Items;
 if CheckBox1.Checked then
  begin
      for i := 0 to ListBox1.Items.Count-1 do
    begin
     Mas[i]:=StrToFloat(ListBox1.Items[i]);
    end;
    sort;
    for I := 0 to ListBox1.Items.Count-1 do
    ListBox2.Items[i]:=FloatToStrF(mas[i],ffFixed,100,2);
  end
 else
  ListBox2.Items := ListBox1.Items;
end;

procedure TForm1.Button4Click(Sender: TObject);
begin
ListBox2.Clear;
ListBox1.Clear;
Edit2.Text:='';
end;

procedure TForm1.Button5Click(Sender: TObject);
begin
Application.Terminate;
end;

procedure TForm1.Edit1Exit(Sender: TObject);
begin
if KMaWk.nalbuk(Edit1.Text)=true then
begin
 ShowMessage('¬водите только цифры!');
 Edit1.Text:='';
 Edit1.SetFocus;
end;
end;

procedure TForm1.RadioGroup1Click(Sender: TObject);
begin
begin
 case RadioGroup1.ItemIndex of
  0: begin
      Edit2.Font.Style := [];
      ListBox2.Font.Style := [];
     end;
  1: begin
      Edit2.Font.Style := [fsItalic];
      ListBox2.Font.Style := [fsItalic];
     end;
  2: begin
      Edit2.Font.Style := [fsBold];
      ListBox2.Font.Style := [fsBold];
     end;
 end;
end;
end;

procedure TForm1.sort;
var
g,max,po:Double;
i,j:Integer;
begin
 max:=Mas[0];
  for i:=1 to ListBox1.Items.Count-1 do
  begin
   for j := 0 to 0+i do
     begin
       if mas[j]<mas[i] then
         begin
           po:=mas[j];
           mas[j]:=Mas[i];
           Mas[i]:=po;
         end;
     end;
  end;
end;

end.
