// Author: Milo Rodriguez 
// Date: Nov 19th, 2024
// License: MILO_LAND

//Create a "FizzBuzz" function loop
// Loop though num 1 to 100 using jQuery
for (var i = 0; i < 200; i++) {
    var str = "";

//multiple of 3's
  if ((i+1)%3 == 0) {
      str += "Fizz";
  }
 
//multiple of 5's 
  if ((i+1)%5 == 0) {
  str += "Buzz";
  }

//multiple of 7's 
  if ((i+1)%7 == 0) {
  str += "Boom";
  }

  //space between the num's and the strings 
  var spacing = " - "

// print out 
  if (str =="") {
  $("#output").append("<p class='num'>" + (i+1) + "</p>");
  }

  else {
    $("#output").append("<p class='text'>"+ (i+1) + spacing + str + "!" + "</p>");
  }
}