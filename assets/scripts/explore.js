// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // select voices
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // talk button
  // const butn = document.querySelector("button");
  // function talk(){
  //   var selected = document.getElementById("voice-select");

  // }
  // butn.addEventListener('click', function () { talk(selected,jsConfetti)} );
  // onclick = talk(selected,jsConfetti);

}