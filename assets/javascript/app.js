
$( document ).ready(function() {

//declare and initalize variables.

var apiKey = "Y3h4ksc22JmMFoYTKH2XUYmRwrnYL8Gd";
var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + rando +"&key=" + apiKey;
var rando = "Romulan";
var starTrek = ["Kirk","Spock","Scotty","Picard","Riker","Sulu","Uhura","Trois","Data","Wharf"];


//Styles the exiting page.
setupButtonsInitial();

//callGihphyAPI(){

    //wrap ajax callback in function.
    function callGiphyAPI(){
        $.ajax({
            url: giphyUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            
        });
    }



    //setup buttonsS
    function setupButtonsInitial(){
        for(var i = 0; i< starTrek.length; i++){
            $(".buttonROw").append(`<button name='starTrek${[i]}' type='submit'>${starTrek[i]}</button>`);
        }
    }
});