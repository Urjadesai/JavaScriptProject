function mybrowser()
{
    var x = "";
    x += "Browser Name: " + navigator.appName +"<br>";
    x += "Browser CodeName: " + navigator.appCodeName +"<br>";
    x += "Browser Version:" + navigator.appVersion + "<br>";
    x += "Browser Language:" + navigator.language +"<br>";
    x += "Browser Online" + navigator.onLine + "<br>";
    x += "Platform: " + navigator.platform + "<br>";
    x += "User-agent header :" + navigator.userAgent + "<br>";

    document.getElementById("demo").innerHTML = x ;

    if(navigator.platform != "MacOS")
 
    {
        alert("User should use MAC OS only");
    }

}

var obj = {
    name: 'kai',
    display: function(){
        alert(this.name);
    }
}

var name = 'june';
function abc(a,b)
{
    console.log(this.name + a + b);
}

abc.call(obj ,10,20);

