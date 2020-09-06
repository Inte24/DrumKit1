
function handleClick(Btb)
{

switch (Btb) {
  case "w":
  var audio=new Audio("sounds/tom-1.mp3");
    audio.play()
    break;
    case "a":
    var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play()
      break;
      case "s":
      var t3=new Audio("sounds/tom-3.mp3");
        t3.play()
        break;
        case "d":
        var t4=new Audio("sounds/tom-4.mp3");
          t4.play()
          break;
          case "j":
          var sn=new Audio("sounds/snare.mp3");
            sn.play()
            break;
            case "k":
            var cr=new Audio("sounds/crash.mp3");
              cr.play()
              break;
              case "l":
              var ki=new Audio("sounds/kick-bass.mp3");
                ki.play()
                break;

  default: alert("Error");
  }
}

var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++)
{

document.querySelectorAll("button")[i].addEventListener("click",function(){
var Bt= this.innerHTML;
handleClick(Bt);
 buttonAnimation(Bt);

});
}

document.addEventListener("keypress",function(event){
handleClick(event.key); buttonAnimation(event.key)
})

function buttonAnimation(Ani)
{
  var active= document.querySelector("."+Ani);
active.classList.add("pressed");
setTimeout(function(){
  active.classList.remove("pressed");
},100);
}
