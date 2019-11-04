//---------------------Que-1-------------------------------

function mathdate()
{
    var fvalue = document.getElementById("fahren").value;

     if(fvalue != ''){
        if(isNaN(fvalue.value) && fvalue.value=="")
        {
            document.getElementById("fahren").style.borderColor = "red";
            fvalue = Number(prompt("Enter number")); 
            document.getElementById("fahren").value = fvalue;
            var cel = (fvalue - 32) * 5/9;
            document.getElementById("celsius").innerHTML = Math.floor(cel);
            cel.value=""; 
        }
        
     }
         
}

//------------------------Que-2-------------------------------

function foodmenu()
{
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("demo").innerHTML = days[d.getDay()];

    if(days[d.getDay()] == 'Monday')
    {
        alert("Monday: Special Menu is AAmras");
    }

    else if(days[d.getDay()] == 'Tuesday')
    {
        alert("Tuesday: Special Menu is kadhiRice");
    }

    else if( days[d.getDay()] == 'Wednesday')
    {
        alert("Wednesday: Special Menu is ButterMilk");
    }

    else if( days[d.getDay()] == 'Thursday')
    {
        alert("Thursday: Special Menu is PavBhaji");
    }

    else if(days[d.getDay()] == 'Friday')
    {
        alert("Friday: Special Menu is Chaat");
    }

    else if(days[d.getDay()] == 'Saturday')
    {
        alert("Saturday: Special Menu is Lassi");
    }

    else if(days[d.getDay()] == 'Sunday')
    {
        alert("Sunday: Special Menu is burger");
    }

    else
    {
        alert("Out of week");
    }
}