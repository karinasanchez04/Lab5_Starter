// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var face = document.querySelector('img');
var voiceSelect = document.getElementById('voice-select');
var talkButton = document.querySelector('button');
var input = document.querySelector('textarea');
var voices = [];

function init() {
  // TODO
      populateVoiceList();

      talkButton.addEventListener('click', (event)=>{
        var utterance = new SpeechSynthesisUtterance(input.value);
        var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        for(var i = 0; i < voices.length ; i++) {
           if(voices[i].name === selectedOption) {
           utterance.voice = voices[i];
        }
      }

        synth.speak(utterance);

        utterance.addEventListener('start', (event)=>{
          face.src= "assets/images/smiling-open.png"
        } )

        utterance.addEventListener('end', (event)=>{
          face.src= "assets/images/smiling.png"
        } )

      })

      



}

function populateVoiceList(){
  voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}