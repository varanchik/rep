unit MainForm;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls,GryphikForm, Vcl.ExtCtrls;

type
  TForm1 = class(TForm)
    Edit2: TEdit;
    Edit3: TEdit;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Edit1: TEdit;
    Button1: TButton;
    procedure Button1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

function Check(a1,a2: integer): Boolean;
begin
  if a1>a2 then
    begin
      Check:=False;
      MessageDlg('������������ ������, �1 ������� ���� ������ �2',mtError,[mbok],0);
    end
  else
   Check:=true;
end;

procedure TForm1.Button1Click(Sender: TObject);
begin
 if check(StrToInt(Edit2.Text),StrToInt(Edit3.Text)) then
  begin
    Form3:=TForm3.Create(self,StrToInt(Edit2.Text),StrToInt(Edit3.Text),StrToInt(Edit1.Text));
    Form3.Show;
  end;
end;


end.
