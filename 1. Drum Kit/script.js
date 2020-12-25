const allKeys = document.querySelectorAll('.key');

window.addEventListener('keyup', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    const keyP = document.querySelector(`.key[data-key="${e.keyCode}"]`).parentElement;
    console.log(keyP);
    keyP.classList.add('playing');
})

allKeys.forEach(keyP => {
    keyP.parentNode.addEventListener('transitionend', () => {
        keyP.parentNode.classList.remove('playing');
    });
});