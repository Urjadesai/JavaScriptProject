//---------------Que-1----------------

var quotes = ["Frist name", "Last name","Given name","Age","Gender","address","height","weight","Bloodgroup","Phone number"];
 
function displayQuotes()
{
     document.write(quotes);
}

//-----------Que-2-------------------

// function disquotes(a)
// {
   
//     var mylength = a.length;
//     alert(mylength);

//     for(var i = 3; i<a.length; i++)
//     {
//         alert(a[i]);
//     }
// }
// disquotes(quotes);

//-------------Que-3---------------

function total()
{
    document.write("regular array"+quotes +"<br>");
    quotes.pop();
    document.write("A)" +quotes +"<br><br>");
    
    document.write("B)"+quotes.length+"<br><br>");
    console.log(quotes.length);

    document.write("C)"+quotes.reverse()+"<br><br>");

    document.write("D)"+quotes[7]+"<br><br>");
    console.log(quotes[7]);

    document.write("E)"+quotes.shift()+"<br><br>");

    document.write("F)"+quotes.length+"<br><br>");
    console.log(quotes.length);
    
    document.write("G)"+quotes.sort()+"<br><br>");

}

//---------------Que-4---------------
function userinputex()
{
    
    var myarray = [];

     var userinput = prompt("Enter string here");
     myarray[0] = prompt("Enter string here");
     myarray[1] = prompt("Enter string here");
     myarray[2] = prompt("Enter string here");
     

    document.write(myarray +"<br><br>");
   
    myarray.push("banana");
    myarray.push(userinput);
    console.log(myarray);
    console.log(myarray[0]);


    document.write("A)"+ myarray + "<br><br>");

    document.write("B)"+ myarray.length + "<br><br>");

    myarray.unshift("Lemon","chiku");
    document.write("C)"+ myarray + "<br><br>");

    document.write("D)"+myarray.length + "<br><br>");
    
    myarray.splice(2, 0, "Strawberry","kiwi");
    document.write("E)" +myarray +"<br><br>");

    document.write("F)" + myarray.length + "<br><br>");
    console.log(myarray);

    document.write("FF)"+myarray[5]+"<br><br>");
    console.log(myarray[5]);

    var citrus =  myarray.slice(1,2);
    document.write("G)"+citrus+"<br><br>");
}

//----------------Que-5-------------------
function year()
{
    var month = ['January', 'February','March','April','May','June','july','august','September','october','Novermber','December'];

    document.write("Main String "+ month + "<br><br>");

    document.write("A)"+month.pop()+"<br><br>");
    document.write("B)"+ month.length + "<br><br>");
    document.write("C)"+month.reverse()+"<br><br>");
    document.write("D)"+month[8] +"<br><br>");
    console.log(month[8]);
    document.write("E)"+month.shift() + "<br><br>");
    document.write("F)" + month.length + "<br><br>");
    console.log(month.length);
    document.write("G)"+ month.sort()+ "<br><br>" );
    
    var month1 = month;
   console.log("Array1" + month1);


    month.push("December");
    document.write("AA)" + month+"<br><br>");
    document.write("BB)" + month.length + "<br><br>");
    month.unshift("Monday","Sunday");
    document.write("CC)"+month+"<br><br>");
    document.write("DD)"+month.length+"<br><br>");

    month.splice(2,0,"Thursday","Friday");
    document.write("EE)"+month+"<br><br>");

    document.write("FF)"+month.length+ "<br><br>")
    console.log(month.length);
    document.write("FFF)"+month[5]+"<br><br>");
    console.log(month[5]);

    var citrus1 =  month.slice(1,2);
    document.write("GG)"+citrus1+"<br><br>");

    var month12 = month;

    console.log("Array-2" + month12);
    var ref = month1.concat(month12);
    console.log("concatination between 2 arrays " + ref);
    document.write(ref +"<br><br>");

    for(var i = 0; i<ref.length; i++)
    {
        document.write(ref[i] +"<br>");
        console.log(ref[i]);
    }
}

//-----------------que-6------------------

function weekname()
{
    var daysname = ['Monday','Tuesday','wednesday','Thursday','Friday','saturday','sunaday'];

    for(var j = 0; j< daysname.length; j++)
    {
        document.write(daysname[j]+ "<br>");
        console.log(daysname[j]);
    }
}

//-------------------que-7------------------
function weeklyname()
{
    var dname = prompt("Enter days here");

    var wname = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
   
    for(var k = 0 ; k<wname.length ; k++)
    {
       if(dname == wname[k])
       for(var xy=k+1;xy<wname.length;xy++){
       document.write("this is array :"+ wname[xy] + "<br>");
    } 
    }
    
}

//---------------que-8----------------------

function displayweek()
{
    var nameday = prompt("Enter days here");

    var nameweek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

    for(var dw = 0; dw<nameweek.length; dw++)
    {
        
        if(nameday == nameweek[dw])
        {
            for(var pq = dw+1; pq<nameweek.length; pq++)
            {
                document.write(nameweek[pq]+ "<br>");   
            }
           
            if(pq == nameweek.length)
            {
                for(var result = 0; result<dw+1 ; result++)
                {
                    document.write(nameweek[result] +"<br>");
                }
            }  
        }
        }

        // var dname = prompt("Enter days here");

        // var wname = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
       
        // for(var k = 0 ; k<wname.length ; k++)
        // {
        //    if(dname == wname[k]){
        //     for(var xy=k+1;xy<wname.length;xy++){
        //         document.write("this is array :"+ wname[xy] + "<br>");
               
                   
        //         }
        //         if(xy == wname.length){
        //         for( ty = 0;ty<k+1;ty++){
        //             console.log(wname[ty] + "hii");
        //             document.write(wname[ty]);
        //         }
        //      } 
        //    }
          
        // }
        
}

//-----------------que-9-----------------
function matchdiplay()
{
    var myarray11 = prompt("Enter value here");
    var diplaymatch = ['jan', 'feb','march','april','may','june'];

    for(var p = 0; p<diplaymatch.length; p++)
    {
    if(myarray11 == diplaymatch[p])
    {
        alert("Match :" + diplaymatch[p]);
    }
    else
    {
        alert("Not match");
    }
    }
    
}

//------------------Que-10------------------
function matching()
{
    var arrayname1 = ['mon','tue','wed','thurs','fri','sat','sun'];

    var arrayname2 = ['jan','feb','mon','fri','sun'];

    for (var w = 0 ; w<arrayname1.length ; w++)
    {
        for(var z = 0; z<arrayname2.length; z++)
        {
            if(arrayname1[w] == arrayname2[z] )
        {
            alert("There is a match :" + "   " +arrayname2[z] );
        }
        }
        
    }
}
