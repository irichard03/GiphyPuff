$( document ).ready(function() {
//declare and initalize variables.
    var apiKey = "Y3h4ksc22JmMFoYTKH2XUYmRwrnYL8Gd";
    var rando = "Romulan";  
    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + rando + "&key=" + apiKey;
    var starTrek = ["Kirk","Spock","Scotty","Picard","Riker","Sulu","Uhura","Trois","Data","Worf"];
    var theme = "+star+trek";
    var redShirt;
    var blueShirt;
    var helper = 0; //if you press button too many times helper will help you out.
    var mySound = new sound("assets/sounds/ButtonPress.mp3");
    var mySound1 = new sound("assets/sounds/ThematicMusic.mp3");
    var mySound2 = new sound("assets/sounds/ThematicMusic2.mp3");
    
//Styles the existing page.
    setupButtons();  
    

    
//call GiphyApi
    function callAPI(crewmanGuy){
        $('.displayZone').empty();
        rando = crewmanGuy;
        giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + rando + theme+ "&key=" + apiKey;

        $.ajax({
            url: giphyUrl,
            method: "GET"
        }).then(function(response) {
            if(response){
                console.log("api call succeesfull");
                console.log(response);
                
                for (i = 0; i < 20; i++) {
                    $(".displayZone").append(`<div class="pictureFrame"><img class='stillGif' id='gif${i}' src='${response.data[i].images.downsized_still.url}' data-animatedGif='${response.data[i].images.original.url}'><p>Rated: ${response.data[i].rating}</p></div>`)                
                }
            }
            else{
                console.log("FAILED API CALL");
            }
        });
    }

//clickevent gif is clicked (should play)
    $(document).on('click','.stillGif',function(event){
        event.preventDefault();
    //if already playing, store the static give in a data-stoppedGif
        if($(this).attr("src") !== $(this).attr("data-animatedGif")){
            mySound1.stop();
            mySound2.stop();
            mySound1.play();
            $(this).attr("data-stoppedGif",$(this).attr("src"));
            $(this).attr("src",$(this).attr("data-animatedGif"));
            console.log("GifClick happend on:" + this);
        }else{
            mySound1.stop();
            mySound2.stop();
            mySound2.play();
            $(this).attr("src",$(this).attr("data-stoppedGif"));
        }
    });
    

//clickevent any button is clicked.
    $(document).on('click','.lcarsButton',function(event){
        mySound.play();
        event.preventDefault();
        redShirt = $(this).attr("name");
        callAPI(redShirt);                   
    });
//clickevent to add button when add button is clicked
    $('#addButton').click(function(event){
        event.preventDefault();
        mySound.play();
        blueShirt = $('#searchBox').val().trim();
        if(blueShirt){
            starTrek.push(blueShirt);
            setupButtons();
            console.log("Button added successfully:" + blueShirt);
        }
        else{
            console.log("empty press");
            helper++;
            if(helper > 1){
                alert("Use the text box to add a button.")
                $('#searchBox').css('background-color','yellow');
            }
        }
        
    });

//setup buttons
    function setupButtons(){
        $('#searchBox').css('background-color','white');
        $('.buttonRow').empty();
        for(let i = 0; i < starTrek.length; i++){
            $('.buttonRow').append(`<button class="lcarsButton" name="${starTrek[i]}" type="submit">${starTrek[i]}</button>`);
        }
    }
});

//sound object from w3schools, sounds are orgingal though.
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
