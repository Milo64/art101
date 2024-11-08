
// Author: Milo Rodriguez 
// Date: Nov 7th, 2024
// License: MILO_LAND
// lab.js - This simple JavaScript/jQuery script appends new elements to an output div

function generateRandomText() {
    const text = "'Winston, you’ve been staring at this girl for 5 minutes. Please tell me youre checking her out, otherwise youre a serial killer. Which would explain a lot.' Schmidt: New Girl, New Girl Season 2: Fluffer";
    const min = 5;
    const max = 80;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to New Girl, Season 4: The Last Wedding
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
 
 // click listener for button
 $("#make-convo").click(function(){
    const newText= generateRandomText();
// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
 
});
 
 