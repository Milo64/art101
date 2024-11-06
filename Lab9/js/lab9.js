
// Author: Milo Rodriguez 
// Date: Nov 5th, 2024
// License: MILO_LAND


/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
   Requirements: jQuery must be loaded for this script to work.
// add button to challenge section
*/
$("#Challenge").append("<button id='button-Challenge'>BUTTON</button>");

// add a click listener to the challenge button

$("#button-Challenge").click(function(){
   // now add (or subtract) the "special" class to the section
   $("#Challenge").toggleClass("special");
});

$("#Problems").append("<button id='button-Problems'>BUTTON</button>");

// add a click listener to the challenge button

$("#button-Problems").click(function(){
   // now add (or subtract) the "special" class to the section
   $("#Problems").toggleClass("special");
});

$("#Reflection").append("<button id='button-Reflection'>BUTTON</button>");

// add a click listener to the challenge button

$("#button-Reflection").click(function(){
   // now add (or subtract) the "special" class to the section
   $("#Reflection").toggleClass("special");
});

$("#Results").append("<button id='button-Results'>BUTTON</button>");

// add a click listener to the challenge button

$("#button-Results").click(function(){
   // now add (or subtract) the "special" class to the section
   $("#Results").toggleClass("special");
});

