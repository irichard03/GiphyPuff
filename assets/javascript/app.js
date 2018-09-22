$( document ).ready(function() {

    //declare and initalize variables.

    var apiKey = "Y3h4ksc22JmMFoYTKH2XUYmRwrnYL8Gd";
    var rando = "Romulan";
    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + rando +"&key=" + apiKey;
    var starTrek = ["Kirk","Spock","Scotty","Picard","Riker","Sulu","Uhura","Trois","Data","Wharf"];


    //Styles the exiting page.
    setupButtonsInitial();

    
    
    
     



    //When any static button is clicked.
$('.staticButton').click(function(){
    var redShirt = $(this).attr("name");
    alert(redShirt);
    callGiphy(redShirt);    //call giphy API
});
    //setup buttonsS
    function setupButtonsInitial(){
        for(var i = 0; i< starTrek.length; i++){
            $(".buttonRow").append(`<button class='staticButton' name='${starTrek[i]}' type='submit'>${starTrek[i]}</button>`);
        }
    }
});