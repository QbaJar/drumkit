window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; // if data key is not in the hmtl it doesnt go forward
    audio.currentTime = 0; // can play multiple times
    audio.play() // plays audio
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove ('playing');
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))