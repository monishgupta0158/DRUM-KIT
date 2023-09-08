
var noOfButtons = document.querySelectorAll(".drum").length;

// for(var i=0 ; i<noOfButtons ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
//         var audio = new Audio("./sounds/crash.mp3");
//          audio.play();     
//     });

//     //  var audio1 = new Audio('snare.mp3');

// }

// when any button is pressed
for(var i=0;i<noOfButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonSelected = this.innerHTML;

      playsound(buttonSelected);
      addAnimation(buttonSelected);
    
           } );
}
     
    
    
//any keyboard key si pressed

document.addEventListener("keydown" , function(event){
   // alert("key was pressed");
     playsound(event.key);
     addAnimation(event.key);
});


function playsound(key){


    // if(key === "w"){
    //     var sound1 = new Audio("./sounds/crash.mp3");
    //     sound1.play();
    // }
    // else if(key === "a"){
    //       var kick = new Audio("./sounds/kick-bass.mp3");
    //              kick.play();
    // }
    // else if(key === "s"){
    //     var snare = new Audio("./sounds/snare.mp3");
    //              snare.play();
    // }
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
     
         case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
            
         case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
            
            case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;   

            case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;  
            
            case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;   

            case "l":
            var  tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;   
        default:console.log(buttonSelected);
            
     }


}


function addAnimation(key){

    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
         document.querySelector("."+key).classList.remove("pressed");
        // document.querySelector("."+key).style.color = "yellow";    
    }, 200);
}

//  document.querySelectorAll(".drum")[3].addEventListener("click" , gotclicked);
// function gotclicked(){
//     alert("i got clicked");
// }


