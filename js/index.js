// document.querySelector(".drum").addEventListener("click",function(){
//    alert("I got Clicked");
// });

// var allButton = document.querySelectorAll(".drum");
// for(i=0;i<allButton.length;i++){
//    allButton[i].addEventListener("click",function(){
//     alert("I got clicked");
//    });
// }

// var allDrum = document.querySelectorAll(".drum");
// for(i=0;i<allDrum.length;i++){
//    allDrum[i].addEventListener("click",function(){
//       this.style.color = "white";
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//    });
// }

var allDrum = document.querySelectorAll(".drum");
for(i=0;i<allDrum.length;i++){
   allDrum[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      choseSound(buttonInnerHTML);
      animateButton(buttonInnerHTML);
   
   });
}


document.addEventListener('keydown',function(event){
//  event holds the value of the event with which the addEventListener is associated
  // console.log(event);
  choseSound(event.key);
  animateButton(event.key);
//  alert("Key is pressed");
});


function choseSound(soundPlay){
  switch (soundPlay){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio("sounds/tom-1.mp3");
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio("sounds/tom-1.mp3");
      tom4.play();
    break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

   default:
     console.log(soundPlay);
   }
}

function animateButton(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
    
  },100);

}