//----------Que-4 A-------------------------

var batmane_age = 27;

function setCustInfo(name)
{
    alert("The name is set as: "+name);
    // batmane_age = i;

}


function displayCustInfo(name1,batmane_age)
{
    alert("Name is displayed as: " +name1); 
    document.write(name1 + " " + batmane_age);
    return name1 + " " + batmane_age;
}

function Result()
{
    setCustInfo('Bruce');
    displayCustInfo('Wayne',25);

}

//-------------- Que-4 B--------------------

function setCustInfo1(name2)
{
    alert("The name is set as: " +name2);
}

function displayCustInfo2(name3,batmane_age1)
{
    document.write(name3+" "+batmane_age1);
    alert("Name is dipslayed as: " +name3);
    return name3 + " " + batmane_age1;
}

function Result1()
{
    setCustInfo1('Wayne');
    displayCustInfo2('Batman', 27);

}

//------------Que-4 C--------------
var batmane_age5 = 24;

function setCustInfo3(name4)
{
    alert("The name is set as: " +name4);
}

function displayCustInfo3(name5,batmane_age5)
{
    document.write(name5+" "+batmane_age5);
    alert("Name is dipslayed as: " +name5);
    return name5 + " " + batmane_age5;
}

function checkPerson(age)
{
   
    if(age > batmane_age5)
    {
        alert("THIS person seems like BATMAN");
    }
    else if(age == 24)
    {
        alert("This Person may be ROBIN");
    } 
    else
    {
        alert("I am not sure who this joker is");
    }
}

function Result3()
{
    setCustInfo3('Wayne');
    displayCustInfo3('Batman', 27);
    checkPerson(24);

}