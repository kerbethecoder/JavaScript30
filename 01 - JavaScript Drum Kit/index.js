function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const keyy = document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  keyy.classList.add('playing');
}

function removeTransition(e) {
  //   console.log(e.propertyName);
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
