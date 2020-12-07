unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, sLabel, Vcl.StdCtrls;

type
  TForm1 = class(TForm)
    Label1: TLabel;
    Button1: TButton;
    Button2: TButton;
    Button3: TButton;
    Memo1: TMemo;
    Edit1: TEdit;
    Edit2: TEdit;
    Edit3: TEdit;
    sLabel1: TsLabel;
    sLabel2: TsLabel;
    sLabel3: TsLabel;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;
const
 pud: Double = 16.28;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
var
i:integer;
res:string;
begin
Memo1.Clear;
i:=StrToInt(Edit2.text);
while i<=StrToInt(Edit3.text) do
begin
res:=FloatToStrF(pud*i,ffFixed,100,2);
Memo1.Lines.Add('Êã: '+inttostr(i)+'  Ïóäû: '+res);
i:=i+StrToInt(Edit1.text);
end;
end;
procedure TForm1.Button2Click(Sender: TObject);
var
i:integer;
res:string;
begin
Memo1.Clear;
i:=StrToInt(Edit2.text);
while i<=StrToInt(Edit3.text) do
begin
res:=FloatToStrF(i/pud,ffFixed,100,2);
Memo1.Lines.Add('Ïóä: '+inttostr(i)+'  Êã: '+res);
i:=i+StrToInt(Edit1.text);
end;
end;

procedure TForm1.Button3Click(Sender: TObject);
begin
Application.Terminate;
end;

end.
