program Project1;

uses
  Vcl.Forms,
  Unit1 in 'Unit1.pas' {Form1},
  KMaWk in 'KMaWk.pas',
  Unit2 in 'Unit2.pas' {Form2},
  Unit3 in 'Unit3.pas' {Form3},
  Unit4 in 'Unit4.pas' {Form4};

{$R *.res}

begin
  Application.Initialize;
  Form3:=TForm3.Create(Application);
  Form3.Show;
  Form3.Update;
  While Form3.Timer1.Enabled do
  Application.ProcessMessages;
  Application.CreateForm(TForm1, Form1);
  Application.CreateForm(TForm4, Form4);
  {Убираем заставку с экрана}
  Form3.Hide;
{Освобождаем память}
  form3.Free;
  Application.Run;

end.
