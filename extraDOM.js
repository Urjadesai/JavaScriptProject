//---------------Que-1------------------

function checkoption()
{
    var myitem1 =  document.getElementById("myid").value;

    var myval = document.getElementById("checkvisibility").value;
    var myval1 = document.getElementById("checkcolor").value;
    var myval2 = document.getElementById("checkvisibilityandcolor").value;
    var myval3 = document.getElementById("default1");

    if(myitem1 == myval)
    {
        document.getElementById("myp").style.visibility = 'hidden';
        
    }
  
    else if(myitem1 == myval1)
    {
        document.getElementById('myp').style.color = 'red';
    }

    else if(myitem1 == myval2)
    {
        //document.getElementById("myp").style.visibility = 'visible';
        document.getElementById('myp').style.color = 'blue';
    }

    else if(myitem1 == myval3)
    {
        document.getElementById('myp');
    }
}

//--------------Que-2-------------------

function valtransfer()
{
    var fname = document.getElementById("fname");
    var gname = document.getElementById("gname");

    console.log(fname.value);
    gname.value = fname.value; // compare the value with fname so this will print fname value in gname
    fname.value =' '; // to empty the text after the data transfer
}


//-------------------Que-3-------------------

function checkradiobutton()
{
    var x = document.getElementsByName("radio");
    
    for(var i = 0; i<x.length; i++)
    {
        if(x[i].checked == true)
    {
       // document.getElementById("tempval").innerHTML;
        alert("check box selected");
    }
    else
    {
        alert("check box is not selected");
    }
    }  
}

//-----------------Que-4---------------------

function checkthefollowing()
{

    var p = document.getElementById("myname").value;

    if(p=='black')
    {
        console.log("border is black");
        document.getElementById("myname").style.borderColor = "black";
        //document.getElementById("changediv").style.borderColor = "black";
    }
    else if(p=='red')
    {
        console.log("border is red");
        document.getElementById("myname").style.borderColor = 'red';
    }
    else
    {
        alert("please enter a valid color");
    }
}

//--------------Que-5--------------------

function checkradiobox()
{
    var b = document.getElementById("firstname");
   // var d = document.getElementById("givenname").value;

    

    if(b.value !== "")
    {
        document.getElementById("veg").checked = true;
    }
    else if (b.value == "")
    {
        alert("Please enter one text");
    }
    else{
        document.getElementById("nonveg").checked = true;
    }
}

//-------------Que-6---------------------
function formvalidation()
{
    var s = document.getElementById("fullname");
    var u = document.getElementById("cname");

    var gq = document.getElementsByName("cooler");
    var q = document.getElementById("cooler1");
    var g = document.getElementById("cooler2");

    var ab = document.getElementById("right");
    var bc = document.getElementById("wrong");
    var cd = document.getElementById("maybe");

    if( s.value == "")
    {
        alert("Please enter full name");
    }
    if(u.value == "")
    {
        alert("Please enter company name");
    }

    if(q.checked == false && g.checked == false)
    {
        alert("radio button is not selected");
    }
    
    if(ab.checked == false && bc.checked == false && cd.checked == false)
    {
        alert("check box is not selected");
    }
   
    // it should show all input types which are blank.
    

    if( s.value == "")
    {
        var str1 = "Please enter full name";
    }else {
        str1 = "";
    }
    if(u.value == "")
    {
        var str2 = "Please enter company name";
    }
    else
    {
        str2 = "";
    }

    if(q.checked == false && g.checked == false)
    {
        var str3 = "radio button is not selected";
    }
    else
    {
        str3 = "";
    }
    
    if(ab.checked == false && bc.checked == false && cd.checked == false)
    {
        var str4 = "check box is not selected";
    }
    else
    {
        str4 = " ";
    }
   
    
    alert(str1+"   " + str2 +"   "+ str3+"    " +str4);
}
//-------------Que-7--------------------
var flag = true;
function wrapperelement()
{
     var elem = document.getElementById("removeimg").style.display = 'none';
     var temp = document.getElementById("ename").style.display = "block";
     var tem1 = document.getElementById("jtitle").style.display = "block";
     var tem2 = document.getElementById("imgshow").style.display = "block";
     //elem.classList.toggle("mydiv");

    //  if(elem === "none")
    //  {
    //     elem = "block";
    //  }
    //  else
    //  {
    //      elem = "none";
    //  }
    document.getElementById(temp + tem1 + tem2) ;
    if(flag)
    {
        document.getElementById("removeimg").style.display = 'none';
    }
    else
    {
        document.getElementById("removeimg").style.display = 'block';
    }
    flag = !flag;
}

function buttonelement()
{
    document.getElementById("removeimg").style.display = 'none';
    document.getElementById("ename").style.display = 'none';
    document.getElementById("jtitle").style.display = 'none';
    document.getElementById("imgshow").style.display = 'none';
    document.getElementById("state").style.display = "block";
    document.getElementById("country").style.display = "block";

}
//-------------------Que-8------------------

document.getElementById("blue").innerHTML = Date();
document.getElementById("pink").innerHTML = Date();
document.getElementById("purple").innerHTML = Date();
document.getElementById("red").innerHTML = Date();

//---------------Que-9----------------------
function displaydata()
{
    var abc = document.getElementById("namegiven");
    var xyz = document.getElementById("add");
    var pqr = document.getElementById("stt");

    //var mydata1 = document.getElementById("mydata");
    var one1 = document.getElementById("one");
    var two2 = document.getElementById("two");
    var three3 = document.getElementById("three");

    // mydata1 = abc.value;
    //  console.log(mydata1);
    
     one1 = abc.value;
     console.log(one1);
    // document.getElementById("mydata").innerHTML= mydata1;
    document.getElementById("one").innerHTML = one1;
   //  document.write(mydata1.value);
    abc.value = " ";

    two2 = xyz.value;
    console.log(two2);
    document.getElementById("two").innerHTML = two2;
    xyz.value=" ";

    three3 = pqr.value;
    console.log(three3);
    document.getElementById("three").innerHTML = three3;
    pqr.value = " ";
}
function returndisplaydata()
{
    //abc = one1.value;
    // document.getElementById("namegiven").innerHTML = abc;
 var a = document.getElementById("one").innerHTML;

 document.getElementById("namegiven").value = a;

 var b = document.getElementById("two").innerHTML;
 document.getElementById("add").value = b;

 var c = document.getElementById("three").innerHTML;
 document.getElementById("stt").value = c;

}
// -------------Que-10----------------------

function season()
{
    var item = document.getElementById("summer");
    if(item.checked == true)
    {
        alert("radio button checked");
    }
    var item1 = document.getElementById("winter");
    if(item1.checked == true)
    {
        alert("checkbox is checked");
    }

    var xyz = document.getElementById("spring").value;
    document.getElementById("fall").innerHTML = xyz;
}

//------------------Que-11-------------------

// var get = document.getElementById("mytext1"),value;
// get.addEventListener('keyup', fix)


// function fix(e){
  

//     e.preventDefault()
    
// if(e.keyCode == '8'){
   
//     alert('hello')
//     console.log(e)
//     console.log(e.target)
//     // returnValue = false;
//     // e.disabled = true;

//     // e.preventDefault()
//     return false;
// }
// }
// var get = document.getElementById("mytext1"),value;
// get.addEventListener('keyup', fix)



function allinone()
{
    var sal = document.getElementById("mytext1");

  
    if(!isNaN(sal.value) && (sal.value != ""))
    {
        alert("It's a number : Text1");
    }
    if(isNaN(sal.value) && (sal.value != ""))
    {
        alert("It's a String: Text1");
    }
    if(sal.value == "")
    {
        alert("It's a NULL: Text1");
    }

    var get = document.getElementById("mytext2");

    if(!isNaN(get.value) && (get.value != ""))
    {
        alert("It's a Number : Text2");
    }    
    if(isNaN(get.value) && (get.value != ""))
    {
        alert("It's a String: Text2");
    }
    if(get.value == "")
    {
        alert("It's a NULL: Text2");
    }

    var pol = document.getElementById("mytext3");

    if(!isNaN(pol.value) && (pol.value != ""))
    {
        alert("It's a Number : Text3");
    }

    if(!isNaN(pol.value) && (pol.value != ""))
    {
        alert("It's a String: Text3");
    }

    if(pol.value == "")
    {
        alert("It's a NULL: Text3");
    }


    var tag =document.getElementById("myradio1");
    var gat = document.getElementById("myradio2");

    if(tag.checked == true || gat.checked == true && tag.value != "" && gat.value != "")
    {
        
        alert("selected");
    }
    else
    {
        alert("unselected");
    }

    var gap = document.getElementById("mycheckbox");

    if(gap.checked == true && gap.value != "")
    {
        alert("checked");
    }
    else
    {
        alert("unchecked");
    }

    var sub = document.getElementById("submit");
    
    if(sub.value == "")
    {
        alert("The form has been successfully Submitted");
    }

}

//-----------------Que-12--------------------------

function showimg()
{
   var x = document.getElementById("myimg").alt;
   document.getElementById("demo").innerHTML = x;

   var oye = document.getElementById("test").value;
   document.getElementById("myspan").innerHTML = oye;

   
 
}

