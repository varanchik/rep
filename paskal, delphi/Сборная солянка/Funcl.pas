unit Funcl;

interface

uses Math;

 Function Tg(x:extended)   : extended;
 Function Ch(x:extended)   : extended;
 Function Sin2(x:extended) : extended;
 Function evc(x:extended) : extended;
 Function S(x: extended) : extended;

implementation
 Function Tg;
  begin
    Result:=Sin(x)/Cos(x);
 end;
 Function Ch;
  begin
    Result:=(exp(x)-exp(-x))/2;
 end;
 Function Sin2;
  begin
    Result:=sqr(sin(x));
 end;
 Function evc;
 const e = 2.71828;
 begin
   Result:=power(e, 2*x);
 end;
 Function S;
 var n: Integer;
lr, t: Real;
begin
lr := 1;
t := 1;
for n := 1 to 10 do
begin
t := t*2*x/n;
lr := lr + t;
end;
Result := lr;
end;

end.
