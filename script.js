const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
const fullScreen = document.querySelector('.fullscreen');

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

fullScreen.addEventListener("click", function(e) {
    toggleFullScreen();
}, false);

btnNotes.addEventListener('click', (event) => {
  btnLetters.classList.remove('btn-active');
  event.target.classList.add('btn-active');
  pianoKeys.forEach(elem => elem.classList.remove('letters'));
});

btnLetters.addEventListener('click', (event) => {
  btnNotes.classList.remove('btn-active');
  event.target.classList.add('btn-active');
  pianoKeys.forEach(elem => elem.classList.add('letters'));
});

piano.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      event.target.classList.add('piano-key-active');
      playAudio(src);
    }   
  });

piano.addEventListener('mouseenter', (event) => {
    if(event.target.classList.contains('piano-key')) {
      isToggling = true;
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      event.target.classList.add('piano-key-active');
      playAudio(src);
    }   
  });

piano.addEventListener('mouseup', (event) => {
      event.target.classList.remove('piano-key-active');
  });

piano.addEventListener('mouseout', (event) => {
      event.target.classList.remove('piano-key-active');
  });

window.addEventListener('keydown', (event) => {
  if(event.repeat) {return;};
  if(event.code === 'KeyD') {
    const src="assets/audio/c.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyF') {
    const src="assets/audio/d.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyG') {
    const src="assets/audio/e.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyH') {
    const src="assets/audio/f.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyJ') {
    const src="assets/audio/g.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyK') {
    const src="assets/audio/a.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyL') {
    const src="assets/audio/b.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyR') {
    const src="assets/audio/c♯.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyT') {
    const src="assets/audio/d♯.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyU') {
    const src="assets/audio/f♯.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyI') {
    const src="assets/audio/g♯.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyI') {
    const src="assets/audio/g♯.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  } else if(event.code === 'KeyO') {
    const src="assets/audio/a♯.mp3";
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    key.classList.add('piano-key-active');    
    playAudio(src);
  }
});

window.addEventListener('keyup', (event) => {
  const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
  key.classList.remove('piano-key-active');
});





