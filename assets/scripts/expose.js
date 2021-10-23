// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {

var soundButton = document.querySelector('button');
var selectSound = document.getElementById('horn-select');

let img = document.querySelector('img');
let audio = document.querySelector('audio');

var volume_sound = document.getElementById('volume-controls');
let vol = volume_sound.querySelector('img');

const jsConfetti = new JSConfetti();



selectSound.addEventListener('change', (event) => {
  if(event.target.value == 'air-horn'){
    img.src = 'assets/images/air-horn.svg'
    audio.src = 'assets/audio/air-horn.mp3'
  }

  if(event.target.value == 'car-horn'){
    img.src = 'assets/images/car-horn.svg'
    audio.src = 'assets/audio/car-horn.mp3'
  }

  if(event.target.value == 'party-horn'){
    img.src = 'assets/images/party-horn.svg'
    audio.src = 'assets/audio/party-horn.mp3'
  }
})

volume.addEventListener('change', (event) => {
  audio.volume = event.target.value/100;
  if(event.target.value == 0 ){
    vol.src = 'assets/icons/volume-level-0.svg';
  }
  if(event.target.value > 32 && event.target.value < 67){
    vol.src = 'assets/icons/volume-level-2.svg';
  }

  if(event.target.value > 0 && event.target.value < 33){
    vol.src = 'assets/icons/volume-level-1.svg';
  }

  if(event.target.value > 66 ){
    vol.src = 'assets/icons/volume-level-3.svg';
  }
})

soundButton.addEventListener('click', (event) =>{
  audio.play();
  if(selectSound.value == 'party-horn'){
    jsConfetti.addConfetti();
  }
})


}

