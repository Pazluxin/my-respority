var character = document.getElementById("character");
var spike = document.getElementById("spike");
var audio = document.getElementById('audio');
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        background: url(images / dino_jump.png);
        audio.play();
    }
    setTimeout(function () { character.classList.remove("animate"); }, 500);
}


var cheak = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue("left"));
    if (spikeLeft < 60 && spikeLeft > 0 && characterTop >= 390) {
        spike.style.animation = "none";
        spike.style.display = "none";
        alert("u lose");
    }
}, 10);