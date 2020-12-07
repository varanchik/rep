unit Unit2;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, sButton,Unit4;

type
  TForm2 = class(TForm)
    sButton1: TsButton;
    Edit1: TEdit;
    Label1: TLabel;
    Label2: TLabel;
    Edit2: TEdit;
    procedure sButton1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form2: TForm2;

implementation
uses Unit1;

{$R *.dfm}

procedure TForm2.sButton1Click(Sender: TObject);
begin
Form1.StringGrid1.ColCount:=strtoint(Edit1.Text)+1;
form4.StringGrid2.ColCount:=strtoint(Edit1.Text)+1;
Form1.StringGrid1.RowCount:=strtoint(Edit2.Text)+1;
form4.StringGrid2.RowCount:=strtoint(Edit2.Text)+1;
Form2.Destroy;
end;

end.
