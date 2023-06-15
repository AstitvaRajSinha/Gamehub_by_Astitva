var end= document.querySelectorAll("button").length;
for(var i =0; i< end;i++){

   document.querySelectorAll("button")[i].addEventListener("click",function(){
      var a= this.id;
      makesound(a);
      blink(a);
   })
}
function makesound(key){
   switch (key) {
      case "a":
         var audio=new Audio("music/do-80236.mp3");
         audio.play();
         break;
      case "s":
         var audio=new Audio("music/re-78500.mp3");
         audio.play();
         break;
      case "d":
         var audio=new Audio("music/mi-80239.mp3");
         audio.play();
         break;
      case "f":
         var audio=new Audio("music/fa-78409.mp3");
         audio.play();
         break;
      case "g":
         var audio=new Audio("music/sol-101774.mp3");
         audio.play();
         break;
      case "h":
         var audio=new Audio("music/la-80237.mp3");
         audio.play();
         break;
      case "j":
         var audio=new Audio("music/si-80238.mp3");
         audio.play();
         break;
      case "k":
         var audio=new Audio("music/do-80236.mp3");
         audio.play();
         break;
      default:
         break;
   }
}
document.addEventListener("keypress",function(event){
   makesound(event.key);
   blink(event.key);
})
 function blink(pressedkey){
   document.querySelector("#"+ pressedkey).classList.add("pressed");
   setTimeout(function(){
      document.querySelector("#"+pressedkey).classList.remove("pressed");
   },180)
 }