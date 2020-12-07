unit Unit3;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, Grids, DBGrids, DB, DBTables,unit1;

type
  TForm3 = class(TForm)
    tblNumzal: TTable;
    MySource2: TDataSource;
    DBGrid1: TDBGrid;
    Edit1: TEdit;
    Label1: TLabel;
    Label2: TLabel;
    Memo1: TMemo;
    Button1: TButton;
    Button4: TButton;
    Button5: TButton;
    Button2: TButton;
    Button3: TButton;
    Button6: TButton;
    procedure Button1Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Edit1KeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure Button6Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form3: TForm3;

implementation

{$R *.dfm}

procedure TForm3.Button1Click(Sender: TObject);
begin
tblNumZal.Edit;
tblNumZal['NUMZAL']:=edit1.Text;
tblNumZal['OPIS']:=memo1.Text;
tblNumzal.Post;
end;

procedure TForm3.Button3Click(Sender: TObject);
begin
Edit1.Text:='';
Memo1.Clear;
tblNumZal.Active:=true;
tblNumZal.Append;
end;

procedure TForm3.Button5Click(Sender: TObject);
begin
tblNumZal.Prior;
end;

procedure TForm3.Button4Click(Sender: TObject);
begin
tblNumzal.Next;
end;

procedure TForm3.Button2Click(Sender: TObject);
var
i:integer;
begin
i:=MessageDlg('Вы действительно хотите удалить запись?', mtConfirmation,[mbYes,mbNo], 0);
if i=6 then
 begin
  tblNumZal.Delete;
 end;
end;

procedure TForm3.Edit1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
 If not (Key in [48..59,96..105,46,8]) then
 begin
 showmessage('Вводите только цифры');
 edit1.Text:='';
 end;
end;

procedure TForm3.Button6Click(Sender: TObject);
begin
edit1.Text:=tblNumzal['NUMZAL'];
memo1.Text:=tblNumZal['OPIS'];
end;

end.
