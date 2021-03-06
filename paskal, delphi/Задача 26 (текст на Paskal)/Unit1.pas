unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, StrUtils;

type
  TForm1 = class(TForm)
    Memo1: TMemo;
    Label1: TLabel;
    Edit1: TEdit;
    Button1: TButton;
    Label2: TLabel;
    Memo2: TMemo;
    Button2: TButton;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

function CountPos(const subtext: string; Text: string): Integer;
begin
  if (Length(subtext) = 0) or (Length(Text) = 0) or (Pos(subtext, Text) = 0)
  then
    Result := 0
  else
    Result := (Length(Text) - Length(StringReplace(Text, subtext, '',
      [rfReplaceAll]))) div Length(subtext);
end;

procedure TForm1.Button1Click(Sender: TObject);
begin
  Memo1.Lines.Add(Edit1.Text);

end;

procedure TForm1.Button2Click(Sender: TObject);
const
  L: array [1 .. 2] of String = ('begin', 'end');
var
  countItem, countBegin, countEnd: Integer;
  I, J: Integer;

begin
  countBegin := 0;
  countEnd := 0;
  countItem := 0;
  for J := 1 to 2 do
  begin
    for I := 0 to Memo1.Lines.Count - 1 do
    begin
      countItem := CountPos(L[J], Memo1.Lines.Strings[I]);
      if J = 1 then
        countBegin := countBegin + countItem;
      if J = 2 then
        countEnd := countEnd + countItem;
    end;
  end;
  Label2.Caption := 'Количество begin: ' + inttostr(countBegin) + ', end: ' +
    inttostr(countEnd) + ';';
end;

end.
