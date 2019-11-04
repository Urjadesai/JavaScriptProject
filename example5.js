// -----------------que-5-------------------
function passangerAge()
{
    var age = prompt("Please enter your age");

    if(age < 2)
    {
        alert("No Charge");
    }
    else if(age >= 2 && age <= 14 )
    {
        alert("10% discount");
    }
    else if(age >= 14 && age <= 55)
    {
        alert("Regular Price");
    }
    else if(age>= 55 && age<=100)
    {
        alert("20% discount");
    }
    else
    {
        alert("Enter the right age");
    }
}

//----------------que-6---------------------
function oddeven()
{
    var number1 = Number(prompt("Enter numver to check odd or even"));

    if( number1 % 2 == 0)
    {
        document.write("Even Number");
    }

    else if (number1 % 2 !== 0)
    {
        console.log(number1);
        document.write("Odd Number");
    }

    else if(isNaN(number1) ){
   
        document.write("Enter Number please");
    }

    else
    {
        document.write("Oops somrthing went wrong");
    }
}

//-----------------que-7--------------------

function atmmachine()
{
    var money = prompt("Enter amount he/she wants to withdraw");

    if( money % 20 === 0)
    {
        alert("Your amount is ready");
    }
    else if(isNaN(money) )
    {
        alert("Please enter valid number");
    }
    else
    {
        alert("Please enter multiples of 20");
    }
}