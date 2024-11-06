
// Author: Milo Rodriguez 
// Date: Nov 5th, 2024
// License: MILO_LAND

$("#Challenge").append("<button id='button-Challenge'>BUTTON</button>");
$("#button-Challenge").click(function(){
   
   $("#Challenge").toggleClass("special");
});

$("#Problems").append("<button id='button-Problems'>BUTTON</button>");
$("#button-Problems").click(function(){
   
   $("#Problems").toggleClass("special");
});

$("#Reflection").append("<button id='button-Reflection'>BUTTON</button>");
$("#button-Reflection").click(function(){

   $("#Reflection").toggleClass("special");
});

$("#Results").append("<button id='button-Results'>BUTTON</button>");
$("#button-Results").click(function(){
  
   $("#Results").toggleClass("special");
});

