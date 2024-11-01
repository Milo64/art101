
// Author: Milo Rodriguez 
// Date: October 31, 2024
// License: MILO_LAND

let myArray= [1,2,3,4,5,6];

function adding(x){
   var results= 20 + x;
   return results;}
//addition
let addedResults = myArray.map(adding);
console.log("Added Results:", addedResults);
//Added Results: [21, 22, 23, 24, 25, 26]

//subtraction
let subtractedResults = myArray.map(function(x){
   var results= 15 - x;
   return results;})
console.log("Subtracted Results:", subtractedResults);
//Results: [14, 13, 12, 11, 10, 9]

      