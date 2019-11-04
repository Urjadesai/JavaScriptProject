function formvalidation1()
{
    var x = document.getElementById("fname");
    {
        if(x.value == '' || !isNaN(x.value))
    {
        x.style.backgroundColor="red";
        alert("Please enter first name information11");
    }
   
    }

    var y = document.getElementById("lname");
    
        if(y.value == '' || !isNaN(y.value))
        {
            y.style.backgroundColor="red";
            alert("Please enter last name information22");
        }
    

    var z = document.getElementById("mgender");
    var w = document.getElementById("fgender");
    {
        if(z.checked == false && w.checked == false)
        {
            alert("Must select atleast one gender option ");
        }
    }

    var s = document.getElementById("selectstate");
    {
        if(s.value == '')
        
        {
            alert("Select atleast one state");
        }
    }
    
    var p = document.getElementById("accept");
    {
        if(p.checked == false)
        {
            alert("check the box is mandatory");
        }
    }
    
}