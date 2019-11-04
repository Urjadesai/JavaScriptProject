//---------------Que-1----------------
function couponage()
{
    var age11 = prompt("Enter valid age");

    switch(age11)
    {
        case '14':
        alert('coupon 1');
        break;

        case '21':
        alert('Coupon 2');
        break;

        case '30':
        alert('Coupon 3');
        break;

        case '50':
        alert('coupon 4');
        break;

        default:
        alert('No Coupon');
        
    }
}

//--------------Que-2--------------

function week()
{
    var days11 = prompt("Please enter a day");

    switch(days11)
    {
        case '0':
        alert("Monday, We serve Pasta");
        break;

        case '1':
        alert("Tuesday,we serve spaghetti");
        break;

        case '2':
        alert("Wednseday, we serve burger");
        break;

        case '3':
        alert("Thursday, we serve juice and salad");
        break;

        case '4':
        alert("Friday, we serve Tacos");
        break;

        case '5':
        alert("Saturday, we serve Mac and cheese");
        break;

        case '6':
        alert("Sunady, We serve Pizza");
        break;

        default:
        alert("No food available");
    }
}

//--------------Que-3-------------------

function oscar()
{
    var movie = prompt("Enter a year ");

    switch(movie)
    {
        case '2018':
        alert('Oscar wiiner movie is: greenbook');
        break;

        case '20s17':
        alert("Oscar wiiner movie is: Logan");
        break;

        case '2016':
        alert("Oscar wiiner movie is: La La Land");
        break;

        case '2015':
        alert("Oscar wiiner movie is: siver linning");
        break;

        case '2014':
        alert("Oscar wiiner movie is: Red sparrow");
        break;

        case '2013':
        alert("Oscar wiiner movie is: Hangover");
        break;

        case '2012':
        alert("Oscar wiiner movie is: FRIENDS"); 
        break;

        case '2011':
        alert("Oscar wiiner movie is: Friends with Benefits ");
        break;

        default:
        alert("Please enter the year between 2011 to 2018");

    }
}

//---------------que-4----------------------

function student()
{
    var grade = prompt("Enter Student Garde here");

    switch(grade)
    {
        case 'A':
        alert("Excellent");
        break;

        case 'B':
        alert("Good Job");
        break;

        case 'C':
        alert("Average");
        break;

        case 'D':
        alert('Pass');
        break;

        case 'F':
        alert('Fail');
        break;

        default:
        alert("Please enter correct grade");
    }
}