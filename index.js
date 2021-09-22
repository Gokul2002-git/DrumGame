
var number=document.querySelectorAll("button").length;
for(var i=0;i<number;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function ()
{
 //var audio=new Audio('sounds/crash.mp3');
 //audio.play();
    var click=this.innerHTML;

    button(click);

   switch(click)
   {
   	case "w":
   	var audio=new Audio('sounds/tom-1.mp3');
     audio.play();
     break;
     case "a":
   	var audio=new Audio('sounds/tom-2.mp3');
     audio.play();
     break;
     case "s":
   	var audio=new Audio('sounds/tom-3.mp3');
     audio.play();
     break;
     case "d":
   	var audio=new Audio('sounds/tom-4.mp3');
     audio.play();
     break;
     case "j":
   	var audio=new Audio('sounds/kick-bass.mp3');
     audio.play();
     break;
      case "k":
   	var audio=new Audio('sounds/crash.mp3');
     audio.play();
     break;
      case "l":
   	var audio=new Audio('sounds/snare.mp3');
     audio.play();
     break;
   }

 });

}

document.addEventListener("keypress",function(event)
{

var press=event.key;
button(press);
  switch(press)
   {
    case "w":
    var audio=new Audio('sounds/tom-1.mp3');
     audio.play();
     break;
     case "a":
    var audio=new Audio('sounds/tom-2.mp3');
     audio.play();
     break;
     case "s":
    var audio=new Audio('sounds/tom-3.mp3');
     audio.play();
     break;
     case "d":
    var audio=new Audio('sounds/tom-4.mp3');
     audio.play();
     break;
     case "j":
    var audio=new Audio('sounds/kick-bass.mp3');
     audio.play();
     break;
      case "k":
    var audio=new Audio('sounds/crash.mp3');
     audio.play();
     break;
      case "l":
    var audio=new Audio('sounds/snare.mp3');
     audio.play();
     break;
   }

});

function button(click)
{
   var btn=document.querySelector("."+click);
   btn.classList.add("pressed");

   setTimeout(function()
   {
    btn.classList.remove("pressed");
   },100);
}