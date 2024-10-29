
// Author: Milo Rodriguez 
// Date: October 21, 2024
// License: MILO_LAND

function sortUserName(){
    var userName= window.prompt("Hello there. Want a New Name!");
    console.log("userName=", userName);
  //convert string to array
    var nameArray = userName.split('');
    console.log("nameArray=", nameArray);
 //sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
 //convert array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted=", nameSorted);}

//output
    document.writeln("Howdy again.I fixed your New name.",sortUserName(), "<b/br>");

