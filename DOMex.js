document.getElementById("myid").style.visibility = 'hidden';
//------------Que-1 and 2-----------------

function paragraphname()
{
   // var paraname = document.getElementsByTagName("p").innerHTML;
   var x = document.getElementById("myp");
   x.style.color = 'red';
   x.style.backgroundColor = "green";
   alert(x.innerHTML);
  
    //alert(paraname)
}

//-------------Que-3------------------

function textbox()
{
    var y = document.getElementById("fname").value;

    document.getElementById("lname").value = y;
}

//-------------que-4----------------

function imagereplace()
{
    document.getElementById("imgclickandchange").src = "imgs/car2_t.png";
}

//------------Que-4 B---------------

function imagehide()
{
    document.getElementById("clickimgandhide").style.visibility = 'hidden';
    document.write("Image is hidden");
}

//---------que-4 C-----------------

function showimage()
{
    console.log("hiiii");
    // document.getElementById("clickbuttonandshowimg").src="imgs/car2_t.png";
    document.getElementById("myid").style.visibility = 'visible';
}

//------------Que-5-----------------
var myarray = ['imgs/car1.jpg', 'imgs/car2.jpg','imgs/car3.gif','imgs/car5.jpg','imgs/car6.gif','imgs/car7.jpg','imgs/car1_t.png'];

var img = document.getElementById("myimages");
var index = 0;
img.src = myarray[index];
function nextimg()
{
    if(index == 5)
    {
        index = 0;
    }
    else
    {
        index++;
    }
    img.src = myarray[index];
}

function previmg()
{
    if(index == 0)
    {
        index = 5;
    }

    else
    {
        index -- ;
    }

    img.src = myarray[index];
}