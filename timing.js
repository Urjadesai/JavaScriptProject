   // var img = ;
    var imgarray = ["imgs/car2.jpg", "imgs/car3.gif", "imgs/car5.jpg", "imgs/car6.gif", "imgs/car7.jpg","imgs/car1.jpg"];
    var index = 0;
    //img.src = imgarray[index];
function slide()
{
    setInterval(image_show, 3000);
}

function image_show()
{
    
        if(index == 5)
        {
            index = 0;
        }
        else
        {
            index++;
            
        }
        
        document.getElementById("imgggg").src = ""+ imgarray[index];    

    
    
}
