//-------------Que-3 A-----------------------

function setCustInfo(name){
    alert("The name is set as:" +name);
}

function displayCustInfo(name, i)
{
    alert("Name is displayed as:" +name);
    var K = name+ " " +i;
    document.write(K);
    return K;

}

function Result()
{
    setCustInfo('Bruce');
    displayCustInfo('wayne', 30);

}

//---------------que-3 B-------------------
var lname3 = 'Desai';

function setValue3(fname3,lname3,age3)
{
    document.write(fname3);
    document.write(lname3);
    document.write(age3);
}

function setCustInfo3(name4)
{
    alert("The name is set as: "+name4)
}

function displayCustInfo3(name5, i5)
{
    alert("Name is displayed as: " +name5);
    var c = name5 + " " +i5;
    document.write(c);
    return c;
}

function total()
{
    setValue3(lname3);
    setCustInfo3('Bruce');
    displayCustInfo3('wayne', 30);

}

//-----------------que-3 C------------------
var name1 = 'Bruce';
var name2 = 'Wayne';
var i1 = 30;

function setCustInfo1(name1)
{
    alert("The name is set as: " +name1);
}

function displayCustInfo1(name2, i1)
{
    alert("Name is displayed as: " +name2);
    var k1 = name2+ " " +i1;
    document.write(k1);

    var k2 = 'Hello'+" "+name1+" "+name2+" "+'at'+" "+i1 ;
    document.write(k2);
    return k1;
    
}

function Result1()
{
    
    setCustInfo1(name1);
    displayCustInfo1(name2, i1);
   
}

//------------que-3 D-----------------

function setCustInfo10(name10)
{
    alert("The name is set as: " +name10);
}

var name11;
var i11;
var k10 = name11+ " "+ i11;


function displayCustInfo10(k10)
{
    // alert("Name is displayed as: " +name11);

    var k10 = "DATA VANISHED";
    document.write(name11 + "  value of k10" + i11);
    return k10;
}

function total1()
{
    setCustInfo10('Bruce');
    displayCustInfo10('wayne', 30);

}