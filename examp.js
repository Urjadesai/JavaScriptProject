// -------------------que--1----------------------------

function abc(){
    var a = 20;
    var b = 10;

    var sum = a+b;
    document.write(sum);
    alert(sum);

    var sub = a-b;
    document.write(sub);
    alert(sub);

    var multi = a*b;
    document.write(multi);
    alert(multi);

    var modulus = a%b;
    document.write(modulus);
    alert(modulus);
}

//------------------ que--2--------------------

function addition()
{
    var a = 30;
    var b = 20;

    var result = a+b;
    document.write(result);
    alert(result);
}

function subtraction()
{
    var a = 20;
    var b = 10;

    var result = a-b;
    document.write(result);
    alert(result);
}

function multiplication()
{
    var a = 50;
    var b = 200;

    var result = a*b;
    document.write(result);
    alert(result);
}

function modu()
{
    var a = 60;
    var b = 30;

    var result = a%b;
    document.write(result);
    alert(result);
}

function callitall()
{
    addition();
     subtraction();
     multiplication();
     modu();
}


// -------------que-3-------------------

function addi()
{
    var a =20;
    var b = 40;

    var res = a+b;
    return res;
}

function subtr()
{
    var a=50;
    var b= 25;

    var res1 = a-b;
    return res1;
}

function multy()
{
    var a=60;
    var b=29;

    var res2= a*b;
    return res2;
}

function modulo()
{
    var a=30;
    var b=7;

    var res3= a%b;
    return res3;
}

function allinone()
{
    
    alert(addi());
    
    alert(subtr());
    
    alert(multy());
    
    alert(modulo());
}


//-----------------que-4------------------

var p = 30;
var q = 25;

function addition1()
{
    var ans = p+q;
    document.write(ans);
}

function subtraction1()
{
    var p = 40;
    var q= 30;

    var ans = p - q;
    document.write(ans);
}

function allinone1()
{
    addition1();
    subtraction1();
}

//-----------------que-5-------------------

var x=70;
var y=5;

function addi2(){
    var m=10;

    var rslt = x + m;
    document.write(rslt);
}

function multy2(){

    var n=40;

    var rslt1= y*n;
    document.write(rslt1);
}

function modulo2()
{
    var s=20;

    var rslt2= x%s;
    document.write(rslt2);
}

function lgex()
{
    addi2();
    multy2();
    modulo2();
}


//--------------------que-6-----------------

var c = 88;
var d= 22;

function add3()
{
    var ans3 = c + d;
    document.write(ans3);
}

function sub3()
{
    var ans3 = c - d;
    document.write(ans3);
}

function multi3()
{
    var ans3 = c * d;
    document.write(ans3);
}

function div3()
{
    var ans3 = c / d;
    document.write(ans3);
}

function modu3()
{
    var ans3 = c % d;
    document.write(ans3);
}

//--------------que-7--- (A) ----------------


var E = 40;
var F = 20;

function add4()
{
    E++;
    var solution5 = E+F;
    document.write(solution5);
}
//--------------que-7--- (B) ----------------

var W = 50;
var Y = 30;

function sub4()
{
    Y--;
    var solution1 = W-Y;
    document.write(solution1);
    alert(solution1);
}

//--------------que-7--- (C) ----------------

function multiply()
{
    var a =10;
    var b = 5;

    var solu1 = a+b;
    document.write(solu1);

    var solu2 = a-b;
    document.write(solu2);

    var solu3 = a*b;
    document.write(solu3);

    var solu4 = a%b;
    document.write(solu4);

    var solu5 = a/b;
    document.write(solu5);
}

//--------------que-8------------------

function convert()
{
    var F =10;

    var C = (F-32) * 5/9;
    document.write(C);
}

//--------------que-9------------------

function boxes()
{
    var name = 'Bruce';
    alert('The Name is Set:' +name);
    
    var name2 = 'Wayne';
    alert('Name is Displayed as:' +name2);
}