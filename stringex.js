//------------Que-1--------------
function printstring()
{
    var name = ("3"+5+6);
    document.write(name);
}

//----------Que-2---------------
function printstring1()
{
    var name1 = (3+5+"6");
    document.write(name1);
}

//-----------Que-3--------------
function printstring2()
{
    var name3 = 3 + "5" + 6;
    document.write(name3);
}

//-----------Que-4-------------

function lenghtofstring()
{
    var val11 = "Pneumonoultramicroscopicsilicovolcanoconiosis";

    document.write(val11.length);
}

//-----------Que-5-------------

function upperstringex()
{
    var string1 = "Pneumonoultramicroscopicsilicovolcanoconiosis";
    var tempstring = string1.toUpperCase();
    document.write(tempstring);
}

//------------Que-6----------------
function lowerstringex()
{
    var string2 = "Pneumonoultramicroscopicsilicovolcanoconiosis";
    var tempstring11 = string2.toLowerCase();
    document.write(tempstring11);
}

//---------------Que-7---------------
function samplestring()
{
    var breakstring = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
    var tempval = breakstring.split(";");
    //document.write(tempval);
    for(var i = 0; i<tempval.length;i++)
    {
       
        console.log(tempval[i]);
        document.write(tempval[i] + "<br>");
    }
    
}

//----------------Que-8------------------
function samplestring1()
{
    var repeatstring = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
    var tempstr = repeatstring.split("o").length - 1;

    document.write(tempstr);
}

//---------------Que-9-----------------
function replaesentance()
{
    var repstring = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
    var temprep = repstring.replace(/product/g, "javascript");

    document.write(temprep);
    console.log(temprep);
}

//----------------Que-10-------------------
function repeatsentence()
{
    var repsentence = "Javascript notation %^&* notes that structure rules and not context for nothing";
    var repsent = repsentence.split("not").length - 1;
    var x = repsentence.split("not");

    document.write(repsent +"<br>");
    document.write(x);
}

