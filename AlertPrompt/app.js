function myFunction() {
    var age = prompt("Please enter your age");
    if (age>18) {
      document.getElementById("demo").innerHTML =
      "Your age" + " "+ age +" " + "higer than 18"  ;
    }
    else{
        document.getElementById("demo").innerHTML =
        "Your age" + " "+ age +" " + "lower than 18"  ;
    }
  }
