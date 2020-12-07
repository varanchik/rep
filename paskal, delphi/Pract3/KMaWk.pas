unit KMaWk;
interface


uses
  System.SysUtils,
  System.Classes;

 function cifra(ch:char): Boolean;
 function nalbuk(s:string):Boolean;

implementation

uses unit1;

procedure sort(b:integer);
var
i,j,g,max,po:integer;
mas:array[0..10000] of integer;
begin
 max:=Mas[0];
  for i:=1 to b do
  begin
   for j := 0 to i do
     begin
       if mas[j]<mas[i] then
         begin
           po:=mas[j];
           mas[j]:=Mas[i];
           Mas[i]:=po;
         end;
     end;
  end;
end;

function cifra(ch:char): Boolean;
begin
 if (ch<'0') or (ch > '9') then
 cifra:=False
 else
  cifra:=True;
end;

function nalbuk(s:string):Boolean;
var
 i: Integer;
 flag: Boolean;
begin
  flag:=false;
  for i:= 1 to Length(s) do
    begin
    if s[1]<>'-' then
    begin
    if not cifra(s[i]) then
         flag:=true;
    end;
    end;
   if flag then
    nalbuk:=True
   else
    nalbuk:=False;
end;

end.

