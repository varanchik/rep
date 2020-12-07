unit GryphikForm;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.ExtCtrls,System.Math;

type
  TForm3 = class(TForm)
    Panel1: TPanel;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    Label6: TLabel;
    Button1: TButton;
    Button2: TButton;
    ScrollBox1: TScrollBox;
    Image1: TImage;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
  private
    _a1,_a2,_b,_minh,_minw,_zoom:Integer;
  public
    constructor Create(AOwner: TComponent;a1,a2,b:Integer); overload;
    procedure Graph overload;
    procedure Graph(h,w:integer)overload;
    procedure Razmetka overload;
    procedure Razmetka(w:Integer) overload;
    procedure Graphik overload;
    procedure Graphik(w:integer)overload;
  end;

var
  Form3: TForm3;

implementation

{$R *.dfm}

{ TForm3 }


procedure TForm3.Button1Click(Sender: TObject);
begin
 Image1.Picture:=nil;
 Image1.Width:=Image1.Width+100;
 Image1.Height:=Image1.Height+100;
 Inc(_zoom);
 Graph(Image1.Height,Image1.Width);
end;

procedure TForm3.Button2Click(Sender: TObject);
begin
   if _zoom>0 then
    begin
       Image1.Picture:=nil;
       Image1.Width:=Image1.Width-100;
       Image1.Height:=Image1.Height-100;
       Dec(_zoom);
       Graph(Image1.Height,Image1.Width);
    end
    else
     begin
        Image1.Picture:=nil;
       if _zoom=0 then
        begin
         Graph;
        end;
     end;
end;

constructor TForm3.Create(AOwner: TComponent; a1,a2,b: Integer);
begin
  inherited Create(AOwner);
  Width:=816;
  Height:=920;
  Image1.Height:=800;
  Image1.Width:=800;
  ScrollBox1.Height:=800;
  ScrollBox1.Width:=800;
  _a1:=a1;
  _a2:=a2;
  _b:=b;
  _zoom:=0;
  Graph;
end;




procedure TForm3.Graph;
var
  n:Integer;
begin
  Label2.Caption:=inttostr(_a1);
  Label4.Caption:= IntToStr(_a2);
  Label6.Caption:= IntToStr(_b);
  n:=10;
  while n<790 do
    begin
     Image1.Canvas.Pixels[n,400]:=clBlack;
     Inc(n);
    end;
  n:=10;
  while n<790 do
    begin
      Image1.Canvas.Pixels[405,n]:=clBlack;
      Inc(n);
    end;
  n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[770+n,380+n]:=clBlack;
      Inc(n);
    end;
    n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[790-n,400+n]:=clBlack;
      Inc(n);
    end;
    n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[385+n,770+n]:=clBlack;
      Inc(n);
    end;
    n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[405+n,790-n]:=clBlack;
      Inc(n);
    end;
    Razmetka;
end;
procedure TForm3.Graph(h, w: integer);
var
n:integer;
begin
  Image1.Picture:=nil;
  n:=10;
  while n<w-10 do
    begin
     Image1.Canvas.Pixels[n,Round((h-20)/2)]:=clBlack;
     Inc(n);
    end;
  n:=10;
  while n<w-10 do
    begin
      Image1.Canvas.Pixels[Round((w-20)/2),n]:=clBlack;
      Inc(n);
    end;
  n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[w-30+n,Round((h-20)/2)-20+n]:=clBlack;
      Inc(n);
    end;
    n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[w-10-n,Round((h-20)/2)+n]:=clBlack;
      Inc(n);
    end;
    n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[Round((w-20)/2)-20+n,h-30+n]:=clBlack;
      Inc(n);
    end;
    n:=0;
  while n<20 do
    begin
      Image1.Canvas.Pixels[Round((w-20)/2)+n,h-10-n]:=clBlack;
      Inc(n);
    end;
    Razmetka(w);
end;

procedure TForm3.Graphik(w: integer);
var x,y,a1 :Double;
    g:integer;
begin
  g:=Round((w-20)/2);
  Image1.Canvas.Pixels[g,g]:=clRed;//����� �������
  a1:=_a1;
  while a1<_a2 do
   begin
    if Cos(a1)=0 then
      a1:=a1+0.001
      else
      begin
       x:= (3*(_b+100*_zoom)*Tan(a1))/(1+power(tan(a1),3));
       y:=(3*(_b+100*_zoom)*sqr(tan(a1)))/(1+power(Tan(a1),3));
       //ShowMessage('x= '+inttostr(Round(x))+' '+inttostr(Round(y)));
       Image1.Canvas.Pixels[g+Round(x),g+Round(y)]:=clRed;
       a1:=a1+0.001;
      end;
   end;
end;

procedure TForm3.Graphik;
var x,y,a1 :Double;
begin
  Image1.Canvas.Pixels[405,400]:=clRed;//����� �������
  a1:=_a1;
  while a1<_a2 do
   begin
    if Cos(a1)=0 then
      a1:=a1+0.001
      else
      begin
       x:= (3*_b*Tan(a1))/(1+power(tan(a1),3));
       y:=(3*_b*sqr(tan(a1)))/(1+power(Tan(a1),3));
       //ShowMessage('x= '+inttostr(Round(x))+' '+inttostr(Round(y)));
       Image1.Canvas.Pixels[405+Round(x),400+Round(y)]:=clRed;
       a1:=a1+0.001;
      end;
   end;
end;

procedure TForm3.Razmetka(w: Integer);
var
  n,j,g:Integer;
  i,b:Double;
begin
 g:=Round((w-20)/2);
 n:=Round((w-20)/2);
 j:=Round((g*2)/13);
 i:=0;
 b:=_a2/30;
 while n<w-20 do
  begin
    if j>=Round((g*2)/13) then
      begin
        Image1.Canvas.MoveTo(n,g-10);
        Image1.Canvas.LineTo(n,g+10);
        if i>0 then
        Image1.Canvas.TextOut(n,g+15,floatToStrf((i*b),fffixed,0,1)+'|');
        j:=0;
        i:=i+1;
      end;
      Inc(n);
      Inc(j);
  end;
 n:=g;
 j:=Round((g*2)/13);
 i:=-1;
 while n>10 do
  begin
    if j>=Round((g*2)/13) then
      begin
        Image1.Canvas.MoveTo(n,g-10);
        Image1.Canvas.LineTo(n,g+10);
        if (i>-13) and (i<=-2) then
        Image1.Canvas.TextOut(n-5,g+15,floatToStrf((i*b),fffixed,0,1));
        j:=0;
        i:=i-1;
      end;
      Dec(n);
      Inc(j);
  end;
 n:=g;
 j:=Round((g*2)/13);
 i:=1;
 while n>10 do
  begin
    if j>=Round((g*2)/13) then
      begin
        Image1.Canvas.MoveTo(g-10,n);
        Image1.Canvas.LineTo(g+10,n);
        if (i<13) and (i>=2) then
        Image1.Canvas.TextOut(g+15,n-10,floatToStrf((i*b),fffixed,0,1));
        j:=0;
        i:=i+1;
      end;
      dec(n);
      Inc(j);
  end;
 n:=g;
 j:=Round((g*2)/13);
 i:=-1;
 while n<w-10 do
  begin
    if j>=Round((g*2)/13) then
      begin
        Image1.Canvas.MoveTo(g-10,n);
        Image1.Canvas.LineTo(g+10,n);
        if i<-1 then
        Image1.Canvas.TextOut(g-30,n-5,floatToStrf(((i+1)*b),fffixed,0,1));
        j:=0;
        i:=i-1;
      end;
      Inc(n);
      Inc(j);
  end;
  Graphik(w);
end;

procedure TForm3.Razmetka;
var
  n,j:Integer;
  i,b:Double;
begin
 n:=405;
 j:=30;
 i:=0;
 b:=_a2/30;
 while n<780 do
  begin
    if j=30 then
      begin
        Image1.Canvas.MoveTo(n,400-10);
        Image1.Canvas.LineTo(n,400+10);
        if i>0 then
        Image1.Canvas.TextOut(n,415,floatToStrf((i*b),fffixed,0,1)+'|');
        j:=0;
        i:=i+1;
      end;
      Inc(n);
      Inc(j);
  end;
 n:=15;
 j:=30;
 i:=-13;
 while n<405 do
  begin
    if j=30 then
      begin
        Image1.Canvas.MoveTo(n,400-10);
        Image1.Canvas.LineTo(n,400+10);
        if i<0 then
        Image1.Canvas.TextOut(n-5,415,floatToStrf((i*b),fffixed,0,1));
        j:=0;
        i:=i+1;
      end;
      Inc(n);
      Inc(j);
  end;
 n:=10;
 j:=30;
 i:=13;
 while n<405 do
  begin
    if j=30 then
      begin
        Image1.Canvas.MoveTo(405-10,n);
        Image1.Canvas.LineTo(405+10,n);
        if i>0 then
        Image1.Canvas.TextOut(415,n-10,floatToStrf((i*b),fffixed,0,1));
        j:=0;
        i:=i-1;
      end;
      Inc(n);
      Inc(j);
  end;
 n:=400;
 j:=30;
 i:=-1;
 while n<780 do
  begin
    if j=30 then
      begin
        Image1.Canvas.MoveTo(405-10,n);
        Image1.Canvas.LineTo(405+10,n);
        if i<-2 then
        Image1.Canvas.TextOut(380,n-5,floatToStrf(((i+1)*b),fffixed,0,1));
        j:=0;
        i:=i-1;
      end;
      Inc(n);
      Inc(j);
  end;
  Graphik;
end;

end.
