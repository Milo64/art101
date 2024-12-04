// Author: Milo Rodriguez 
// Date: Dec 3rd, 2024
// License: MILO_LAND

$(comic).ready(function (){

const comicUrl  = "https://xkcd.com/614/info.0.json";

$a.jax({

    URL: comicUrl,
    typeof: "GET",
    dataType: "json",
    success: function (data) {

        const comic = data;

        $('#output').append('<h3>${comic.title}</h3');
        $('#output').append(
        <img src="${comic.img}"></img>

        );
    },
    error: function(jqXHR, textStatus, errorThrown) {
        consolelog("ERROR:", textStatus, errorThrown);
    }
});

});