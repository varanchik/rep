unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Menus, Grids, DBGrids, DB, DBTables, StdCtrls;

type
  TForm1 = class(TForm)
    MainMenu1: TMainMenu;
    N1: TMenuItem;
    N5: TMenuItem;
    N6: TMenuItem;
    N7: TMenuItem;
    N2: TMenuItem;
    N8: TMenuItem;
    N9: TMenuItem;
    N3: TMenuItem;
    N10: TMenuItem;
    N11: TMenuItem;
    N4: TMenuItem;
    N12: TMenuItem;
    N13: TMenuItem;
    N15: TMenuItem;
    N14: TMenuItem;
    tblGibdd: TTable;
    MySource: TDataSource;
    dbgGibdd: TDBGrid;
    CheckBox1: TCheckBox;
    CheckBox2: TCheckBox;
    CheckBox3: TCheckBox;
    CheckBox4: TCheckBox;
    CheckBox5: TCheckBox;
    CheckBox6: TCheckBox;
    Edit7: TEdit;
    Edit8: TEdit;
    Edit10: TEdit;
    Edit11: TEdit;
    ComboBox1: TComboBox;
    Edit1: TEdit;
    procedure N15Click(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure N5Click(Sender: TObject);
    procedure N6Click(Sender: TObject);
    procedure N7Click(Sender: TObject);
    procedure N11Click(Sender: TObject);
    procedure N10Click(Sender: TObject);
    procedure N8Click(Sender: TObject);
    procedure N9Click(Sender: TObject);
    procedure Edit7KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit8KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit10KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit11KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure N12Click(Sender: TObject);
    procedure N13Click(Sender: TObject);
    procedure N14Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  nach:boolean;

implementation

uses unit3,unit2,unit4;

{$R *.dfm}

procedure TForm1.N15Click(Sender: TObject);
begin
form3.show;
end;

procedure TForm1.FormActivate(Sender: TObject);
begin
if nach=false then
begin
Application.CreateForm(TForm3, Form3);
form3.Hide;
Application.CreateForm(TForm2, Form2);
form2.Hide;
 form3.tblCategory.First;		{������ �� ������ ������}
While not form3.tblCategory.Eof do    {���� �� ����� ��}
  begin
     Form2.combobox1.Items.Add(form3.tblCategory['CATEGORY']);
     combobox1.Items.Add(form3.tblCategory['CATEGORY']);
     form3.tblCategory.Next;    	{������������� �� ��������� ������}
  end;
  nach:=true;
 end;
end;

procedure TForm1.N5Click(Sender: TObject);
begin
tblGibdd.Append;
Form2.Show;
end;

procedure TForm1.N6Click(Sender: TObject);
begin
form2.Show;
form2.edit1.Text:=form1.tblGibdd['NUMPRAV'];
form2.edit2.Text:=form1.tblGibdd['FIO'];
form2.edit3.Text:=form1.tblGibdd['ADRESS'];
if form1.tblGibdd['CATEGORY']='�' then form2.combobox1.ItemIndex:=0;
if form1.tblGibdd['CATEGORY']='�' then form2.combobox1.ItemIndex:=1;
if form1.tblGibdd['CATEGORY']='�' then form2.combobox1.ItemIndex:=2;
if form1.tblGibdd['CATEGORY']='�' then form2.combobox1.ItemIndex:=3;
if form1.tblGibdd['CATEGORY']='�' then form2.combobox1.ItemIndex:=4;
form2.edit5.Text:=form1.tblGibdd['BALLS'];
form2.edit6.Text:=form1.tblGibdd['EXP'];
end;

procedure TForm1.N7Click(Sender: TObject);
var
i:integer;
begin
i:=MessageDlg('�� ������������� ������ ������� ������?', mtConfirmation,[mbYes,mbNo], 0);
if i=6 then
 begin
  tblGibdd.Delete;
 end;
end;

procedure TForm1.N11Click(Sender: TObject);
var
allchek:boolean;
begin
allchek:=false;
 if form1.checkbox1.Checked then allchek:=true;
 if form1.checkbox2.Checked then allchek:=true;
 if form1.checkbox3.Checked then allchek:=true;
 if form1.checkbox4.Checked then allchek:=true;
 if form1.checkbox5.Checked then allchek:=true;
 if form1.checkbox6.Checked then allchek:=true;
 if allchek=false then
 begin
 showmessage('�� �� �������� ���� ��� ������!');
 end
 else
 begin
  if (edit7.text='') or (edit8.text='') or (edit1.text='') or (combobox1.Items[combobox1.ItemIndex]='��������� ��� ������') or (edit10.text='') or (edit11.text='') then
  begin
   showmessage('�� �� ����� �������� ��� ������ �� �����!')
  end
  else
  begin
  if checkbox1.Checked then  tblGibdd.Locate('NUMPRAV', (edit7.text), [loPartialKey]);
  if checkbox2.Checked then  tblGibdd.Locate('FIO', (edit8.text), [loPartialKey]);
  if checkbox3.Checked then  tblGibdd.Locate('ADRESS', (edit1.text), [loPartialKey]);
  if checkbox4.Checked then  tblGibdd.Locate('CATEGORY', (combobox1.Items[combobox1.ItemIndex]), [loPartialKey]);
  if checkbox6.Checked then  tblGibdd.Locate('BALLS', (edit10.text), [loPartialKey]);
  if checkbox5.Checked then  tblGibdd.Locate('EXP', (edit11.text), [loPartialKey]);
  end;
 end;
end;

procedure TForm1.N10Click(Sender: TObject);
var
allchek:boolean;
begin
  if checkbox1.Checked then
  begin
   if (edit7.text<>'') and (pos('����� ��� ������',edit7.text)=0) then
   tblGibdd.FindKey([edit7.Text])
   else showmessage('�� �� ����� ����� ��� ������');
  end
  else
  begin
  showmessage('�� �� �������� ���� ������ ��� ������!');
  end;
end;

procedure TForm1.N8Click(Sender: TObject);
var
allchek:boolean;
begin
allchek:=false;
 if form1.checkbox1.Checked then allchek:=true;
 if form1.checkbox5.Checked then allchek:=true;
 if form1.checkbox6.Checked then allchek:=true;
 if allchek=false then
 begin
 showmessage('�� �� �������� ���� ��� ������!');
 end
 else
 begin
 tblGibdd.Filtered:= True;
 if checkbox1.Checked then tblGibdd.Filter:='NUMPRAV<>'+edit7.Text;
 if checkbox6.Checked then tblGibdd.Filter:='Balls>'+edit10.text;
 if checkbox5.Checked then tblGibdd.Filter:='EXP>'+edit11.Text;
 end;
end;

procedure TForm1.N9Click(Sender: TObject);
begin
tblGibdd.Filtered:= False;
end;

procedure TForm1.Edit7KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('������� ������ �����');
 edit7.Text:='';
 end;
end;

procedure TForm1.Edit8KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('������� ������ �����!');
 edit8.Text:='';
 end;
end;

procedure TForm1.Edit10KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('������� ������ �����');
 edit10.Text:='';
 end;
end;

procedure TForm1.Edit11KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('������� ������ �����');
 edit11.Text:='';
 end;
end;


procedure TForm1.N12Click(Sender: TObject);
begin
Application.CreateForm(Tform4, Form4);
Form4.QuickRep1.Preview;
end;

procedure TForm1.N13Click(Sender: TObject);
begin
Application.CreateForm(Tform4, Form4);
Form4.QuickRep1.Print;
end;

procedure TForm1.N14Click(Sender: TObject);
begin
close;
end;

procedure TForm1.FormCreate(Sender: TObject);
begin
nach:=false;
end;

end.
