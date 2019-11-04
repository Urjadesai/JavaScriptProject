//-------------Que-1-------------

function userage()
{
    var age = prompt("Enter User Age");

    if(age <= 14)
    {
        alert("Not Allowed");
    }
    else if(age == 50)
    {
        alert("Special Discount");
    }

    else if(age >= 14 && age < 65)
    {
        alert("Regular Price"); 
    }
    else if(isNaN(age))
    {
        alert("Please enter valid number");
    }
    else
    {
        alert("Oops somrthing went wrong");
    }
}

//-------------Que-2---------------

function userage1()
{
    var legalage = prompt("Enter User Age");

    if(legalage == 14)
    {
        alert("Coupon1");
    }
    else if(legalage == 21)
    {
        alert("Coupon2");
    }

    else if(legalage == 30)
    {
        alert("coupon3");
    }

    else if(legalage == 50)
    {
        alert("coupon 4");
    }

    else if(isNaN(legalage))
    {
        alert("Please enter valid number");
    }

    else
    {
        alert("No coupons");
    }
}

//------------Que-3--------------

function week()
{
    var day = prompt("Enter a day");

    if(day == 1)
    {
        alert("Monday, we serve Pasta");
    }
    else if(day == 2)
    {
        alert("Tuesday,we serve spaghetti");
    }
    else if(day == 3)
    {
        alert("Wednseday, we serve burger");
    }
    else if(day == 4)
    {
        alert("Thursday, we serve juice and salad");
    }
    else if(day == 5)
    {
        alert("Friday, we serve Tacos");
    }
    else if(day == 6)
    {
        alert("Saturday, we serve Mac and cheese");
    }
    else if(day == 7)
    {
        alert("Sunady, We serve Pizza");
    }
    else if(isNaN(day))
    {
        alert("Please enter valid number");
    }

    else{
        alert("we do not serve other then this");
    }
}

//--------------Que-4-------------------

function oscar()
{
    var movie = prompt("Enter a year ");

    if(movie == 2018)
    {
        alert("Oscar wiiner movie is: greenbook");
    }

    else if(movie == 2017)
    {
        alert("Oscar wiiner movie is: Logan");
    }

    else if(movie == 2016)
    {
        alert("Oscar wiiner movie is: La La Land");
    }

    else if(movie == 2015)
    {
        alert("Oscar wiiner movie is: siver linning");
    }

    else if(movie == 2014)
    {
        alert("Oscar wiiner movie is: Red sparrow");
    }

    else if(movie == 2013)
    {
        alert("Oscar wiiner movie is: Hangover");
    }

    else if(movie == 2012)
    {
        alert("Oscar wiiner movie is: FRIENDS");
    }
    else if(movie == 2011)
    {
        alert("Oscar wiiner movie is: Friends with Benefits ");
    }

    else if(isNaN(movie))
    {
        alert("Please enter valid year");
    }

    else{
        alert("Please enter the year between 2011 to 2018");
    }
}

//---------------Que-5-----------------------

function student()
{
    var grade = prompt("Enter Student Garde here");

    if(grade == 'A+')
    {
        alert("Excellent");
    }

    else if(grade == 'A')
    {
        alert("Good Job");
    }

    else if(grade == 'A-')
    {
        alert("Good");
    }

    else if(grade == 'B+')
    {
        alert("Above Average");
    }

    else if(grade == 'B')
    {
        alert("Average");
    }

    else if(grade == 'B-')
    {
        alert("Below Average");
    }

    else if(grade == 'C')
    {
        alert('Pass');
    }

    else if(grade == 'F')
    {
        alert('Fail');
    }

    else
    {
        alert("Please enter correct grade");
    }
}