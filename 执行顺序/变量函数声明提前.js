// 变量只提前声明，函数提前声明和函数体，同名变量和函数，函数声明先提前
console.log(a)//?
a();//?
var a =3;
function a(){
    console.log(10);
}
console.log(a);//?
a = 6;
a();//?

/*
function a(){
  console.log(10);
}
var a;//再次申明a，并未修改a的值，忽略此处申明
console.log(a)//输出函数本体
a();//函数申明提前，可调用，输出10
a =3;//这里修改值了,a=3，函数已不存在
console.log(a);//输出3
a = 6;//再次修改为6，函数已不存在
a();//a已经为6，没有函数所以没法调用，直接报错
* */