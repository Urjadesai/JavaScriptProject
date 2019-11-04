//-------------Que-1---------------
function printnumber()
{
    var targetnum = Number(prompt("Enter any number"));

    for(var start = 0; start<=targetnum; start++)
    {
        document.write(start +"<br>");
        console.log(start);
    }
}

//----------------Que-2--------------

function reversenumber()
{
    for(  var reverse = 10; reverse > 0; reverse--)
    {
        document.write(reverse + "<br>");
        console.log(reverse);
    }
}

//---------------Que-3-----------------

function oddnum()
{
    var num = 2;

    while(num<=30)
    {
        document.write(num +"<br>");
        console.log(num);
        num = num + 2;

    }
}
//-------------que-5---------------
function evennum()
{
    var  num1 = 2;
    while(num1<=30)
    {
        document.write(num1 +"<br>");
        console.log(num1);
        num1 = num1 + 2;
    }
}

//----------- que-6--------------
function primenum(n)
{
    // for(var i = 2; i<=100; i++)
    // {
    //     for(var j = 2; j<i; j++)
    //     {
    //         if(i%j == 0)
    //         {
               
    //         }
    //     }
    //     document.write(i +"<br>");
    // }

    for(i = 2; i<=n ; i++){
        var flag = true ;
        for (var j = 2; j<i; j++){
          if(i%j == 0){
           flag = false
          }
           }
          if(flag==true) {
          console.log(i)
          }
        }
        
        primenum(100);
    
}
//------------que-4----------------

function addition()
{
    var sum = 0;
    for(var add = 12; add<= 33; add++)
    {
        document.write(add +"<br>");
        console.log(add);
        sum = sum+add;
    }
   
    document.write(sum +"<br>");

}