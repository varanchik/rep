unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, sLabel, sButton, sEdit;

type
  TForm1 = class(TForm)
    sEdit1: TsEdit;
    sButton1: TsButton;
    sButton2: TsButton;
    sLabel1: TsLabel;
    sEdit2: TsEdit;
    sEdit3: TsEdit;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    procedure sButton1Click(Sender: TObject);
    procedure sButton2Click(Sender: TObject);
    procedure sEdit1Exit(Sender: TObject);
    procedure sEdit2Exit(Sender: TObject);
    procedure sEdit3Exit(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  a,b,c:Double;
implementation

{$R *.dfm}


procedure TForm1.sButton1Click(Sender: TObject);
var
 d:double;
begin
  if sEdit1.Text='' then
    begin
      Label1.Caption:='Вы не ввели а';
    end
   else
    begin
      if sEdit2.Text='' then
        begin
          Label1.Caption:='Вы не ввели b'
        end
        else
          begin
            if sEdit3.Text='' then
              begin
                Label1.Caption:='Вы не ввели c'
              end
             else
             begin
              if (b*c*((a+b+c)/2))<=0 then
                begin
                  MessageDlg('Подкаренное выражение не может быть < или = 0',mtError,[mbOK],0)  ;
                  label1.Caption:='Ответ= ';
                end
               else
              begin
                d:=(2/(b+c))*sqrt(b*c*((a+b+c)/2)*(((a+b+c)/2)-a));
                label1.Caption:='Ответ= '+ (FloatToStrf(d,ffFixed,100,2));
              end;
              end;
          end;
    end;
end;

procedure TForm1.sButton2Click(Sender: TObject);
begin
  Application.Terminate;
end;

procedure TForm1.sEdit1Exit(Sender: TObject);
begin
try
 a:=StrToFloat(sEdit1.Text);
 except
 on EConvertError do
  begin
   MessageDlg('Введенные значения не являются цифрами!',mterror,[mbok],0);
   sEdit1.SetFocus;
 end;
 end;
end;

procedure TForm1.sEdit2Exit(Sender: TObject);
begin
 try
 b:=StrToFloat(sEdit2.Text);
 except
 on EConvertError do
 begin
  MessageDlg('Введенные значения не являются цифрами!',mterror,[mbok],0);
    sEdit2.SetFocus;
 end;
 end;
end;

procedure TForm1.sEdit3Exit(Sender: TObject);
begin
 try
 c:=StrToFloat(sEdit3.Text);
 except
 on EConvertError do
  begin
  MessageDlg('Введенные значения не являются цифрами!',mterror,[mbok],0);
     sEdit3.SetFocus;
  end;
 end;
end;

end.
