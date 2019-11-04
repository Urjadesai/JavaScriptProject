

//---------Que-1 ------------------

function convertftoc()
{
    var ftemp1 = document.getElementById("ftemp").value;
   
    if(ftemp1 != '')
    {
        var celsius =  (ftemp1 - 32) * 5 / 9;
        document.getElementById("result").value = Math.floor(celsius);
    }
}

//---------------Que-2-----------------

function alertboxblog()
{
    alert("Welcome to my blog");
}

//------------Que-3-------------
function hidecontent()
{
    console.log("hii");
    document.getElementById("hideElems").style.visibility = "hidden";
}
//----------Que-4---------------
function showcontent()
{
    document.getElementById("showElems").style.visibility = 'visible';
}
document.getElementById("tohideandshow").style.visibility = 'hidden';
//----------- Que-5 A------------
function toshow()
{
    document.getElementById("tohideandshow").style.visibility = 'visible';
}
//------------Que-5 B------------
function tohide()
{
    document.getElementById("tohideandshow").style.visibility = "hidden";
}

//-------------Que-6--------------
function elementshide()
{
    document.getElementById("main_one").style.visibility = "hidden";
    document.getElementById("main_two").style.visibility = "hidden";
    document.getElementById("main_three").style.display="none";
}

//------------Que-7--------------

function selectall()
{
    var items = document.getElementsByName('vehicle');
    for(var i = 0; i<items.length; i++)
    {
        items[i].checked = true;
    }
}

function unselectall()
{
    var item = document.getElementsByName('vehicle');
    for(var j = 0; j<item.length; j++)
    {
        item[j].checked = false;
    }
}

//--------------Que-8-----------------
function checkbutton()
{
    var x = document.getElementById("fruits");
    
    // for(var p =0; p < x.length; p++)
    // {
    //     if( x[p].checked = true)
    //     {
           
    //         alert("Box is selected");
    //     }
       
    // }

    // if(x.checked = true || x.value !='')
    // {
    //     alert("Box is selected");
    // }
    // else if(x.value == '')
    // {
    //     alert("please select at least one box");
        
    // }

    if(x.value == '')
    {
        alert("please select at least one box");
    }
    else
    {
        alert("Box is selected");
    }

}

//-------------Que-9--------------------

function addlinktourl()
{
    var myarray = document.getElementsByTagName('li');

    var comparr = ['http://www.pro-tekconsulting.com'];

    for(var k = 0; k<myarray.length; k++)
    {
        if(myarray[length].innerText != comparr)
    {
        alert("Protek link is not there in the list");
    }
        
   else { 
       alert("link is mentioned in the list");
    }
    break;
    }  
   
}

function addlink()
{
    var para = document.createElement("a");
    var tem = document.createTextNode("Protek");
    para.setAttribute("href", "http://www.pro-tekconsulting.com");
    para.appendChild(tem);
    document.body.appendChild(para);
}
