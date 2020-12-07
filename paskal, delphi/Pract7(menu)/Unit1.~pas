unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Menus, Grids, DBGrids, DB, DBTables, StdCtrls;

type
  TForm1 = class(TForm)
    MainMenu1: TMainMenu;
    N1: TMenuItem;
    N2: TMenuItem;
    N3: TMenuItem;
    N4: TMenuItem;
    N5: TMenuItem;
    N6: TMenuItem;
    N7: TMenuItem;
    N8: TMenuItem;
    N9: TMenuItem;
    N10: TMenuItem;
    N11: TMenuItem;
    tblExample: TTable;
    MySource: TDataSource;
    dbfExample: TDBGrid;
    Edit1: TEdit;
    Label1: TLabel;
    Edit2: TEdit;
    Label2: TLabel;
    Edit3: TEdit;
    Label3: TLabel;
    Edit4: TEdit;
    Label4: TLabel;
    Edit5: TEdit;
    Label5: TLabel;
    Label6: TLabel;
    Button1: TButton;
    Button4: TButton;
    Button5: TButton;
    Edit7: TEdit;
    Edit8: TEdit;
    N12: TMenuItem;
    N13: TMenuItem;
    N14: TMenuItem;
    CheckBox1: TCheckBox;
    CheckBox2: TCheckBox;
    CheckBox3: TCheckBox;
    CheckBox4: TCheckBox;
    CheckBox5: TCheckBox;
    CheckBox6: TCheckBox;
    Edit9: TEdit;
    Edit10: TEdit;
    Edit11: TEdit;
    Edit12: TEdit;
    N15: TMenuItem;
    ComboBox1: TComboBox;
    procedure N5Click(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure N6Click(Sender: TObject);
    procedure Edit1KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit2KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit4KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit5KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit3KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure N7Click(Sender: TObject);
    procedure N10Click(Sender: TObject);
    procedure N11Click(Sender: TObject);
    procedure N8Click(Sender: TObject);
    procedure N9Click(Sender: TObject);
    procedure N12Click(Sender: TObject);
    procedure N14Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure N13Click(Sender: TObject);
    procedure Edit7KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit8KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit9KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit10KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit11KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit12KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure N15Click(Sender: TObject);
    procedure FormActivate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  str:string;
implementation

uses unit2,unit3;
{$R *.dfm}

function cifra(ch:char): Boolean;
begin
if (ch='0') or (ch = '1') or (ch = '2')  or (ch = '3') or (ch = '4') or (ch = '5') or (ch = '6') or (ch = '7') or (ch = '8')  or (ch = '9') or (ch = ',') or (ch = '-')then
 cifra:=True
 else
  cifra:=false;
end;

{function allchek:boolean;
begin
 if form1.checkbox1.Checked then allchek:=true;
 if form1.checkbox2.Checked then allchek:=true;
 if form1.checkbox3.Checked then allchek:=true;
 if form1.checkbox4.Checked then allchek:=true;
 if form1.checkbox5.Checked then allchek:=true;
 if form1.checkbox6.Checked then allchek:=true;
 if allchek<>true then allchek:=false;
end; }

procedure TForm1.N5Click(Sender: TObject);
begin
Edit1.Text:='';
Edit2.Text:='';
Edit3.Text:='';
Edit4.Text:='';
Edit5.Text:='';
combobox1.ItemIndex:=0;
tblExample.Active:=true;
tblExample.Append;
end;

procedure TForm1.Button1Click(Sender: TObject);
begin
tblExample.Edit;
tblExample['FIO']:=edit1.Text;
tblExample['NAZV']:=edit2.Text;
tblExample['PRICE']:=edit3.Text;
tblExample['YEAR']:=edit4.Text;
tblExample['NUM']:=edit5.Text;
tblExample['NUMZAL']:=combobox1.items[combobox1.ItemIndex];
tblExample.Post;
end;

procedure TForm1.N6Click(Sender: TObject);
begin
Edit1.Text:=tblExample['FIO'];
Edit2.Text:=tblExample['NAZV'];
Edit3.Text:=tblExample['PRICE'];
Edit4.Text:=tblExample['YEAR'];
Edit5.Text:=tblExample['NUM'];
combobox1.Itemindex:=tblExample['NUMZAL']-1;
end;



procedure TForm1.Edit1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,32,46,20]) then
 begin
 showmessage('Вводите только буквы!');
 edit1.Text:='';
 end;
end;

procedure TForm1.Edit2KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('Вводите только буквы!');
 edit2.Text:='';
 end;
end;

procedure TForm1.Edit4KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit4.Text:='';
 end;
end;

procedure TForm1.Edit5KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit5.Text:='';
 end;
end;



procedure TForm1.Edit3KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit3.Text:='';
 end;
end;

procedure TForm1.N7Click(Sender: TObject);
var
i:integer;
begin
i:=MessageDlg('Вы действительно хотите удалить запись?', mtConfirmation,[mbYes,mbNo], 0);
if i=6 then
 begin
  tblExample.Delete;
 end;
end;

procedure TForm1.N10Click(Sender: TObject);
begin
if (pos('ФИО для поиска',edit7.text)<>0) or (edit7.text='') then
 begin
  showmessage('Вы не ввели ФИО для поиска по полю!')
 end
 else
 begin
  tblExample.FindKey([edit7.text]);
 end;
end;

procedure TForm1.N11Click(Sender: TObject);
var
allchek,one:boolean;
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
 showmessage('Вы не отметили поля для поиска!');
 end
 else
 begin
  if (edit7.text='') or (edit8.text='') or (edit9.text='') or (edit10.text='') or (edit11.text='') or (edit12.text='')then
  begin
   showmessage('Вы не ввели критерии для поиска по полям!')
  end
  else
  begin
  if checkbox1.Checked then  tblExample.Locate('Fio', (edit7.text), [loPartialKey]);
  if checkbox2.Checked then  tblExample.Locate('NAZV', (edit8.text), [loPartialKey]);
  if checkbox3.Checked then  tblExample.Locate('PRICE', (edit9.text), [loPartialKey]);
  if checkbox4.Checked then  tblExample.Locate('YEAR', (edit10.text), [loPartialKey]);
  if checkbox5.Checked then  tblExample.Locate('NUM', (edit11.text), [loPartialKey]);
  if checkbox6.Checked then  tblExample.Locate('NUMZAL', (edit12.text), [loPartialKey]);
  end;
 end;
end;

procedure TForm1.N8Click(Sender: TObject);
begin
 tblExample.Filtered:= True;
 tblExample.Filter:='PRICE>1500';
end;

procedure TForm1.N9Click(Sender: TObject);
begin
tblExample.Filtered:= false;
end;

procedure TForm1.N12Click(Sender: TObject);
begin
 Application.CreateForm(Tform2, form2);
 Form2.QuickRep1.Preview;
end;

procedure TForm1.N14Click(Sender: TObject);
begin
close;
end;

procedure TForm1.Button4Click(Sender: TObject);
begin
tblExample.Next;
end;

procedure TForm1.Button5Click(Sender: TObject);
begin
tblExample.Prior;
end;

procedure TForm1.N13Click(Sender: TObject);
begin
 Application.CreateForm(Tform2, form2);
 Form2.QuickRep1.Print;
end;

procedure TForm1.Edit7KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('Вводите только буквы!');
 edit7.Text:='';
 end;
end;

procedure TForm1.Edit8KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('Вводите только буквы!');
 edit8.Text:='';
 end;
end;

procedure TForm1.Edit9KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit9.Text:='';
 end;
end;

procedure TForm1.Edit10KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit10.Text:='';
 end;
end;

procedure TForm1.Edit11KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit11.Text:='';
 end;
end;

procedure TForm1.Edit12KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit12.Text:='';
 end;
end;

procedure TForm1.N15Click(Sender: TObject);
begin
 Form3.Show;
end;


procedure TForm1.FormActivate(Sender: TObject);
begin
 Application.CreateForm(TForm3, Form3);
 form3.Hide;
 form3.tblNumZal.Edit;
 form3.tblNumZal.First;		{встаем на первую запись}
While not form3.tblNumZal.Eof do    {пока не конец БД}
  begin
     combobox1.Items.Add(form3.tblNumzal['NUMZAL']);
     form3.tblNumzal.Next;    	{переместиться на следующую запись}
  end;
end;

 //Злые задумки
 //#№1 удаление поля для поиска
 {if checkbox1.Checked then
 begin
  if length(str)<>0 then
  begin
   if pos(';FIO',str)<>0 then delete(str,pos(';FIO',str),4);
   if pos('FIO',str)<>0 then delete(str,pos('FIO',str),4);
   showmessage(str);
  end;
 end;
 }
 //№2 Альтернативный мульти поиск
 { str:='';
  one:=true;
  if checkbox1.Checked then
   if one then
    begin
    str:=str+'FIO';
    one:=false;
    end
   else
   str:=str+';FIO';
  if checkbox2.Checked then
   if one then
    begin
    str:=str+'NAZV';
    one:=false;
    end
   else
   str:=str+';NAZV';
  if checkbox3.Checked then
   if one then
    begin
    str:=str+'PRICE';
    one:=false;
    end
   else
    str:=str+';PRICE';
  if checkbox4.Checked then
   if one then
    begin
    str:=str+'YEAR';
    one:=false;
    end
   else
   str:=str+';YEAR';
  if checkbox5.Checked then
   if one then
    begin
    str:=str+'NUM';
    one:=false;
    end
   else
   str:=str+';NUM';
  if checkbox6.Checked then
   if one then
    begin
    str:=str+'NUMZAL';
    one:=false;
    end
    else
     str:=str+';NUMZAL';
  tblExample.Locate(str,VarArrayOf([edit7.text,edit8.text,edit9.text,edit10.text,edit11.text,edit12.text]), [loPartialKey]); }


end.
