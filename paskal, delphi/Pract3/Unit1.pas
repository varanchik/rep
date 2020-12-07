unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, sSkinManager, sButton, Vcl.StdCtrls,KMaWk,
  sComboBox;

type
  TForm1 = class(TForm)
    Label1: TLabel;
    ListBox1: TListBox;
    Button1: TButton;
    Button2: TButton;
    sComboBox1: TsComboBox;
    Button3: TButton;
    Edit1: TEdit;
    sSkinManager1: TsSkinManager;
    Label2: TLabel;
    Button4: TButton;
    sButton1: TsButton;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
    procedure Edit1Exit(Sender: TObject);
    procedure sComboBox1Exit(Sender: TObject);
    procedure sComboBox1Change(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  work:boolean;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
begin
if Edit1.Text='' then
begin
  ShowMessage('Вы ничего не ввели');
end
else
begin
ListBox1.Items.Add(Edit1.Text);
Edit1.Text:='';
Edit1.SetFocus;
end;
end;

procedure TForm1.Button2Click(Sender: TObject);
var
 i : Integer;
begin
 sComboBox1.Clear;
 for i:=0 to ListBox1.Items.Count-1 do
  begin
   if (StrToInt(ListBox1.Items[i]) mod 10)=0 then
    sComboBox1.Items.Add(ListBox1.Items[i]);
  end;
  sComboBox1.Style:= csDropDownList;
 sComboBox1.Text:=sComboBox1.Items[0];
 label2.Caption:=IntToStr(sComboBox1.Items.Count);
 Edit1.SetFocus;
end;

procedure TForm1.Button3Click(Sender: TObject);
begin
close;
end;

procedure TForm1.Button4Click(Sender: TObject);
begin
ListBox1.Clear;
sComboBox1.Clear;
label2.Caption:=IntToStr(0);
end;


procedure TForm1.Edit1Exit(Sender: TObject);
begin
 if KMaWk.nalbuk(Edit1.Text)=true then
begin
  ShowMessage('Используйте только цифры!');
  Edit1.Text:='';
  Edit1.SetFocus;
end;
end;


procedure TForm1.sButton1Click(Sender: TObject);
var
i:integer;
begin
ListBox1.Clear;
 for i := 1 to 20 do
 begin
 Randomize;
 ListBox1.Items.Add(IntToStr(-200+Random(400)));
 end;
end;


procedure TForm1.sComboBox1Change(Sender: TObject);
begin
sComboBox1.Style:= csDropDownList;
sComboBox1.Text:=sComboBox1.Items[0];
end;

procedure TForm1.sComboBox1Exit(Sender: TObject);
var
i:integer;
begin
sComboBox1.Clear;
 for i:=0 to ListBox1.Items.Count-1 do
  begin
   if (StrToInt(ListBox1.Items[i]) mod 10)=0 then
    sComboBox1.Items.Add(ListBox1.Items[i]);
  end;
  sComboBox1.Style:= csDropDownList;
 sComboBox1.Text:=sComboBox1.Items[0];
 label2.Caption:=IntToStr(sComboBox1.Items.Count);
end;

end.
