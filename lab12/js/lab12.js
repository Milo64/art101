// Author: Milo Rodriguez 
// Date: Nov 13th, 2024
// License: MILO_LAND

function garfHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Garfield"
  }

  else if (mod ==2) {
    return "Oddie"
  }

  else if (mod == 3) {
    return "John"
  }

  else if (mod == 4) {
    return "Nermal"
  }
}

var theGarfButton = document.getElementById("button");
theGarfButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var character = garfHat(name);
    document.getElementById("output").innerHTML = "<p>The GARF HAT has determined what character you are. You are " + character + "!! BEHOLD THE GARF UNIVERSE HAS SPOKEN !!</p>";
})