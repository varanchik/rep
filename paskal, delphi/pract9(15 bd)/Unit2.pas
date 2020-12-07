unit Unit2;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls,unit1;

type
  TForm2 = class(TForm)
    Label1: TLabel;
    Edit1: TEdit;
    Label2: TLabel;
    Edit2: TEdit;
    Label3: TLabel;
    Edit3: TEdit;
    Label4: TLabel;
    Label5: TLabel;
    Edit5: TEdit;
    Label6: TLabel;
    Edit6: TEdit;
    ComboBox1: TComboBox;
    Button1: TButton;
    Button2: TButton;
    Button3: TButton;
    procedure Edit1KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit5KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit6KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit3KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Edit2KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Button1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form2: TForm2;

implementation

{$R *.dfm}

procedure TForm2.Edit1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('¬водите только цифры');
 edit1.Text:='';
 end;
end;

procedure TForm2.Edit5KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('¬водите только цифры');
 edit5.Text:='';
 end;
end;

procedure TForm2.Edit6KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('¬водите только цифры');
 edit6.Text:='';
 end;
end;

procedure TForm2.Edit3KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('¬водите только буквы!');
 edit3.Text:='';
 end;
end;

procedure TForm2.Edit2KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('¬водите только буквы!');
 edit2.Text:='';
 end;
end;

procedure TForm2.Button1Click(Sender: TObject);
begin
form1.tblGibdd.Edit;
form1.tblGibdd['NUMPRAV']:=edit1.Text;
form1.tblGibdd['FIO']:=edit2.Text;
form1.tblGibdd['ADRESS']:=edit3.Text;
form1.tblGibdd['CATEGORY']:=combobox1.items[combobox1.ItemIndex];
form1.tblGibdd['BALLS']:=edit5.Text;
form1.tblGibdd['EXP']:=edit6.Text;
form1.tblGibdd.Post;
end;

end.
