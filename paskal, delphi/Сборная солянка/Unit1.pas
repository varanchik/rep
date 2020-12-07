unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Funcl, Vcl.StdCtrls, Vcl.Buttons, Math;

type
  TForm1 = class(TForm)
    BitBtn1: TBitBtn;
    BitBtn2: TBitBtn;
    Memo1: TMemo;
    procedure FormCreate(Sender: TObject);
    procedure BitBtn1Click(Sender: TObject);
    procedure BitBtn2Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}
Function f(x:integer):integer;
var i,n:integer;
begin
n:=1;
for i:=1 to x do
begin
n:=n*i;
end;
f:=n;
end;

procedure TForm1.BitBtn1Click(Sender: TObject);
var
xn, xk, xh, x, lr: real;
n:integer;
begin
xn:=0.1;
xk:=1.0;
xh:=0.09;
x:=0.1;
n:=0;
while (x<=1) do begin
  lr := lr + power(2*x, n)/f(n);
  Memo1.Lines.Add('x = '+FloatToStrF(x, fffixed, 8,2) + ' ||| y = ' + FloatToStrF(evc(x), fffixed, 8,7) + ' ||| S = ' + FloatToStrF(S(x), fffixed, 8,7));
  x:=x+xh;
  n:=n+1;
end;
end;

procedure TForm1.BitBtn2Click(Sender: TObject);
begin
Application.Terminate;
  Exit;
end;

procedure TForm1.FormCreate(Sender: TObject);
begin
  Memo1.Text:='';
end;
end.
