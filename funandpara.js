//-----------------Que-2 A-----------------

function setValue(fName,lName, age)
{

}

function setCustInfo(name)
{
    alert("The last name is set as:" +name);
}

function displayCustInfo(name)
{
    alert("Frist Name is displayed as:" +name);
}

function AllinOne()
{
    setValue();
    setCustInfo('Bruce');
    displayCustInfo('Wayne');
}

//-----------------Que-2 AA-----------------

var a = function setValue1(fsName,ltName, age1)
{

}

var b = function setCustInfo1(name1)
{
    alert("The last name is set as:" +name1);
}

var c = function displayCustInfo1(name2)
{
    alert("Frist Name is displayed as:" +name2);
}

var d = function()
{
    a();
    b('Bruce');
    c('Wayne');
}

//-----------------Que-2 B-----------------


function setValue2(fName2,lName2, age2)
{
    setCustInfo2('Bruce');
    displayCustInfo2('Bruce');
}

function setCustInfo2(name3)
{
    alert("The last name is set as:" +name3);
}

function displayCustInfo2(name4)
{
    alert("Frist Name is displayed as:" +name4);
}


//-----------------Que-2 C-----------------

var p = 'Bruce';
var q = 'Wayne';

// function setValue3(fName3,lName3, age3)
// {

// }

function setCustInfo3(sa)
{
    alert("The last name is set as:" + sa);
    console.log(sa)
}

function displayCustInfo3(q)
{
    alert("Frist Name is displayed as:" +q);
}

function AllinOne1()
{
    // setValue3();
    setCustInfo3(p);
    displayCustInfo3(q);
}