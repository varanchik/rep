unit Unit3;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, Grids, DBGrids, DB, DBTables,unit1;

type
  TForm3 = class(TForm)
    tblCategory: TTable;
    CtgSource: TDataSource;
    dbgCategory: TDBGrid;
    Label1: TLabel;
    Label2: TLabel;
    Edit1: TEdit;
    Memo1: TMemo;
    Button1: TButton;
    Button4: TButton;
    Button5: TButton;
    Button2: TButton;
    Button3: TButton;
    Button6: TButton;
    procedure Button3Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button6Click(Sender: TObject);
    procedure Edit1KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form3: TForm3;

implementation

{$R *.dfm}

procedure TForm3.Button3Click(Sender: TObject);
begin
Edit1.Text:='';
Memo1.Clear;
tblCategory.Active:=true;
tblCategory.Append;
end;

procedure TForm3.Button2Click(Sender: TObject);
var
i:integer;
begin
i:=MessageDlg('Вы действительно хотите удалить запись?', mtConfirmation,[mbYes,mbNo], 0);
if i=6 then
 begin
  tblCategory.Delete;
 end;
end;

procedure TForm3.Button1Click(Sender: TObject);
begin
tblCategory.Edit;
tblCategory['CATEGORY']:=edit1.Text;
tblCategory['OPIS']:=memo1.Text;
tblCategory.Post;
end;

procedure TForm3.Button5Click(Sender: TObject);
begin
tblCategory.Prior;
end;

procedure TForm3.Button4Click(Sender: TObject);
begin
tblCategory.Next;
end;

procedure TForm3.Button6Click(Sender: TObject);
begin
edit1.Text:=tblCategory['CATEGORY'];
memo1.Text:=tblCategory['OPIS'];
end;

procedure TForm3.Edit1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [65..90,8,16,17,18,13,46,20,32]) then
 begin
 showmessage('Вводите только буквы!');
 edit1.Text:='';
 end;
end;

end.
