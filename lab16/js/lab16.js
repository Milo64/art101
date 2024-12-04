// Author: Milo Rodriguez 
// Date: Dec 3rd, 2024
// License: MILO_LAND

$(document).ready(function (){
const comicUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/614/info.0.json";

$.ajax({
    url: comicUrl,
    type: "GET",
    dataType: "json",
    success: function (data) {
        const comic = data;

        $('#output').append(`<h3>${comic.title}</h3>`);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});
});