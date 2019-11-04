// -------------Que-1------------
function printnum()
{
    for(var i = 1; i<=10; i++)
    {
        document.write(i +"<br>");
    }
}

//-----------Que-2---------------
function revnum()
{
    for(var j=10; j>=1; j--)
    {
        document.write(j +"<br>");
    }
}

//-----------Que-3--------------
function oddnum()
{
    var n11 = 1;
    while(n<=50)
    {
        document.write(n11 +"<br>");
        n11 = n11 +2;
    }
}

//-----------que-4--------------
function evennum()
{
    var e = 2;
    while(e <= 100)
    {
        document.write(e +"<br>");
        e = e + 2;
    }
}

//-----------que-5--------------
function middlenum()
{
    for(var m = 40; m<=60; m++)
    {
        document.write(m +"<br>");
    }
}

//------------que-6-------------
function endnum()
{
    for(var nd=80; nd<=100; nd++)
    {
        document.write(nd +"<br>");
    }
}

//----------que-7---------------
function totalnum()
{
    var num20 = Number(prompt("Enter number"));

    if(num20 == 1)
    {
        for(var n1 = 1; n1<=11; n1++)
        {
            document.write(n1 +"<br>");
        }
    }

    else if(num20 == 2)
    {
        for(var n2 = 2; n2<=12; n2++)
        {
            document.write(n2 +"<br>");
        }
    }

    else if(num20 == 3)
    {
        for(var n3 = 3; n3<=13; n3++)
        {
            document.write(n3 +"<br>");
        }
    }

    else if(num20 == 4)
    {
        for(var n4 = 4; n4 <= 14; n4++)
        {
            document.write(n4 +"<br>");
        }
    }

    else if(num20 == 5)
    {
        for(var n5 = 5; n5<=15; n5++)
        {
            document.write(n5 +"<br>");
        }
    }
}

//---------------Que-8---------------
function entervalue()
{
    var anynum = Number(prompt("Enter number"));

    if(anynum == 123)
    {
        alert("One Two Three");
    }

    else if(anynum == 124)
    {
        alert("One Two Four");
    }
    else if(anynum == 125)
    {
        alert("One Two Five");
    }

    else if(anynum == 126)
    {
        alert("One Two Five");
    }

    else if(anynum == 127)
    {
        alert("One Two Seven");
    }
    else
    {
        alert("Please enter between 122 to 127");
    }
}

//----------------Que-9----------------
function examplefor()
{
    var num10 = Number(prompt("Enter Number"));

    if(num10 == 1)
    {
        alert("One");
    }

    else if(num10 == 2)
    {
        alert("Two");
    }
    else if(num10 == 3)
    {
        alert("Three");
    }
    else if(num10 == 4)
    {
        alert("four");
    }

    else if (num10 == 5)
    {
        alert("Five");
    }

    else
    {
        alert("Please enter enter a valid number");
    }
}

//--------------Que-10--------------
function targetnum()
{
    var anynum22 = Number(prompt("Enter number"));

    if(anynum22 >0 && anynum22<= 10)
    {
        alert("The number is between '1 to 10'");
    }
    else if(anynum22 >=11 && anynum22 <= 20)
    {
        alert("The number is between '11 and 20'");
    }
    else if(anynum22 >= 21 && anynum22 <= 30)
    {
        alert("The number is between '21 and 30");
    }
    else if(anynum22 >= 31 && anynum22 <= 40)
    {
        alert("The number is between '31 and 40");
    }

    else if(anynum22 >= 41 && anynum22 <= 50)
    {
        alert("The number is between '41 and 50'");
    }

    else
    {
        alert("Please enter number between 1 to 50");
    }
}

//------------Que-11-------------
function lessgrater()
{
    var validnum = Number(prompt("Enter number"));

    if(validnum < 50 || validnum > 200)
    {
        alert("Number is valid number");
    }
    else if(validnum > 50 && validnum <200)
    {
        alert("This is a good Number");
    }

    else
    {
        alert("It is an invalid Number");
    }
}

//-----------que-12------------
function printalert()
{
    var prialrt = prompt("Enter Number");

    if(prialrt == 'One')
    {
        alert("this is 1");
    }
    else if(prialrt == 'Two')
    {
        alert("this is 2");
    }
    else if(prialrt == 'Three')
    {
        alert("this is 3");
    }
    else if(prialrt == 'Four')
    {
        alert("this is 4");
    }
    else if(prialrt == 'Five')
    {
        alert("this is 5");
    }

    else
    {
        alert("Oops wrong num");
    }
}

//-------------Que-13------------
function propervalid()
{
    var provalnum = Number(prompt("Enter number"));

    if(provalnum >5 && provalnum < 11)
    {
        alert("Enter proper number");
    }
    else{
        alert("Enter valid number");
    }
}

//------------Que-14-----------
function printevennum()
{
    var prinum = Number(prompt("Enter Number"));
    var n30 = prinum+20;
    if(prinum % 2 == 0)
    {
        for(var i = prinum; i<=n30 ; i= i+2)
        {
            document.write(i +"<br>");
        }
    }
    else if(prinum % 2 != 0)
    {
        for(var j = prinum; j<= n30; j=j+2)
        {
            document.write(j +"<br>");
        }
    }
    else
    {
        document.write("Number is not Even or odd");
    }
}

//--------------Que-15---------------------
function evenoddprint()
{
    var priviousnum = Number(prompt("Enter Number"));
    var nn50 = priviousnum - 10;

    if(priviousnum % 2 == 0)
    {
        for(var l= priviousnum; l>=nn50; l= l-2)
        {
            document.write(l +"<br>");
        }
    }
    else if(priviousnum % 2 != 0)
    {
        for(var r = priviousnum; r>=nn50; r= r-2)
        {
            document.write(r +"<br>");
        }
    }
}