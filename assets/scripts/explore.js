// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // select voices
  const voices = speechSynthesis.getVoices();
  function populateVoiceList(voices) {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList(voices);
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // talk button
  const butn = document.querySelector("button");
  const selected = document.getElementById("voice-select");
  var text = document.getElementById("text-to-speak");
  const synth = window.speechSynthesis;
  var image = document.querySelector("header+img");
  butn.addEventListener('click', function () { talk(selected,text,voices)} );
  function talk(selected,text,voices){
    const utterThis = new SpeechSynthesisUtterance(text.value);
    var voiceSelect = selected.value.split(" ")[0]
    for (let i = 0; i < voices.length ; i++) {
      if (voiceSelect == "select"){
        continue;
      }
      if (voices[i].name === voiceSelect) {
        utterThis.voice = voices[i];
      }
    }
    if (voiceSelect != "select"){
      image.src = "assets/images/smiling-open.png";
      utterThis.volume = 0.5;
      synth.speak(utterThis);
      utterThis.addEventListener('end', function() {
        image.src = "assets/images/smiling.png"
      });
    }
  };
  onclick = talk(selected,text,voices);


}