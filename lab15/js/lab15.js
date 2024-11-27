// Author: Milo Rodriguez 
// Date: Nov 26th, 2024
// License: MILO_LAND

$('#getDinosaurFact').click(function() {
  $.ajax({
      url: "https://dinoapi.brunosouzadev.com/api/dinosaurs",  // API URL
      type: "GET",  // GET request method
      dataType: "json",  // Expecting a JSON response
      success: function(data) {
          console.log(data);  // Log the data to the console to check its structure
          
          // Assuming the response is an array and getting the first dinosaur
          const dinosaur = data[0];
          
          // Ensure the data has the properties before accessing them
          if (dinosaur && dinosaur.name && dinosaur.period && dinosaur.description) {
              const dinosaurFact = `Name: ${dinosaur.name} - Period: ${dinosaur.period} - Description: ${dinosaur.description}`;
              $('#output').html('<p>' + dinosaurFact + '</p>');
          } else {
              $('#output').html('<p>Missing data in the response.</p>');
          }
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
          $('#output').html('<p>Error Fetching Dinosaur Facts. Sorry, try again!</p>');
      }
  });
});
