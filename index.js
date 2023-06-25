var n = document.querySelectorAll(".drum").length;
var drums = document.querySelectorAll(".drum");
for(var i=0;i<n;i++){
    drums[i].addEventListener("click",function(){
        var inhtml = this.innerHTML;
        helper(inhtml);
        anim(inhtml);
    });
    drums[i].addEventListener("keypress",function(event){
        helper(event.key);
        anim(event.key);
    });
}
function helper(event){
    switch (event) {
        case "w":
            var sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;
        case "a":
            var sound2 = new Audio("sounds/tom-2.mp3");
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio("sounds/tom-3.mp3");
            sound3.play();
            break;
        case "d":
            var sound4 = new Audio("sounds/tom-4.mp3");
            sound4.play();
            break;
        case "j":
            var sound5 = new Audio("sounds/crash.mp3");
            sound5.play();
            break;
        case "k":
            var sound6 = new Audio("sounds/kick-bass.mp3");
            sound6.play();
            break;
        case "l":
            var sound7 = new Audio("sounds/snare.mp3");
            sound7.play();
            break;
        default:
            break;
    }
}
function anim(key){
    var cur = document.querySelector("."+key);

    cur.classList.add("pressed");

    setTimeout(function(){
        cur.classList.remove("pressed");
    },100);
}