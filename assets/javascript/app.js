$( document ).ready(function() {
//declare and initalize variables.
    var apiKey = "Y3h4ksc22JmMFoYTKH2XUYmRwrnYL8Gd";
    var rando = "Romulan";  
    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + rando + "&key=" + apiKey;
    var starTrek = ["Kirk","Spock","Scotty","Picard","Riker","Sulu","Uhura","Trois","Data","Wharf"];
    var redShirt;
    var blueShirt;
    var helper = 0; //if you press button too many times helper will help you out.
    
//Styles the existing page.
    setupButtons();  
    
    
//call GiphyApi
    function callAPI(crewmanGuy){
        rando = crewmanGuy;
        giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + rando + "&key=" + apiKey;

        $.ajax({
            url: giphyUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
    }

//When any lcars button is clicked.
    $(document).on('click','.lcarsButton',function(event){
        event.preventDefault();
        redShirt = $(this).attr("name");
        callAPI(redShirt);                   
    });
//When add button is clicked
    $('#addButton').click(function(event){
        event.preventDefault();
        blueShirt = $('#searchBox').val();
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
        for(var i = 0; i < starTrek.length; i++){
            $('.buttonRow').append(`<button class="lcarsButton" name="${starTrek[i]}" type="submit">${starTrek[i]}</button>`);
        }
    }
});

//bonus ideas...add custom alert box featuring helper from venture bros.
//style like lcars from star trek.
