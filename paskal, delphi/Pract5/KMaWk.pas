unit KMaWk;
interface


uses
  System.SysUtils,
  System.Classes;

 function cifra(ch:char): Boolean;
 function nalbuk(s:string):Boolean;

implementation
  function cifra(ch:char): Boolean;
begin

if (ch='0') or (ch = '1') or (ch = '2')  or (ch = '3') or (ch = '4') or (ch = '5') or (ch = '6') or (ch = '7') or (ch = '8')  or (ch = '9') or (ch = ',') or (ch = '-')then
 cifra:=True
 else
  cifra:=false;
end;

function nalbuk(s:string):Boolean;
var
 i: Integer;
 flag: Boolean;
begin
  flag:=false;
  for i:= 1 to Length(s) do
    begin
      if not cifra(s[i]) then
         flag:=true;
    end;
   if flag then
    nalbuk:=True
   else
    nalbuk:=False;
end;
end.

