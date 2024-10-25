// index.js - LAB6
// Author: Milo Rodriguez 
// Date: 10/24/2024

// define variables
myTransport= ["bus" , "walking" ,"friends Car"];

//create an object for my main ride
mainRide = {
  make: "newFlyer",
  model: "proterra zx5 electric buses",
  color:["white","blue"],
  year: 2022,
  age: function() {return 2024 - this.year; }
}

//output
document.writeln("Getting Around"+ myTransport + "<br>");
document.writeln("Main Ride: <pre>", 
  JSON.stringify(mainRide, null,'\t'), "</pre>");


 