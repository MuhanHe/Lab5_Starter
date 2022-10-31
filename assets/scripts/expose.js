// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // show pics with selection
  const selected = document.getElementById("horn-select");
  selected.addEventListener("change", function () { selectImg(selected)} ); // (event)=> 
  function selectImg(selected){
    var imgUrl = "";
    if (selected.value == "air-horn") {
        imgUrl = "assets/images/air-horn.svg";
    } else if (selected.value == "car-horn") {
        imgUrl = "assets/images/car-horn.svg";
    } else if (selected.value == "party-horn") {
      imgUrl = "assets/images/party-horn.svg";
    }
    var el = document.querySelector("header+img");
    el.src = imgUrl;
  }
    // control volume
  const volume = document.getElementById("volume");
  volume.addEventListener('input', function () { controlVolume(volume,aud)} );
  const aud = document.querySelector("audio");
  function controlVolume(volume,aud){
    const inpt = volume.value;
    var image = document.querySelector("input+img");
    var value = parseInt(inpt);
    aud.volume = value/100;
    if (value == 0){
      image.src = "assets/icons/volume-level-0.svg"
    }else if(1<= value && value < 33){
      image.src = "assets/icons/volume-level-1.svg"
    }else if(33<= value && value < 67){
      image.src = "assets/icons/volume-level-2.svg"
    }else if(67<= value && value <= 100){
      image.src = "assets/icons/volume-level-3.svg"
    }
  }
  // play sound with selection
  // addEventListener('click', function () { playSound(selected)} );
  const jsConfetti = new JSConfetti();
  const butn = document.querySelector("button");
  function playSound(selected,jsConfetti,aud){
    if (selected.value == "air-horn"){
      aud.src = "assets/audio/air-horn.mp3";
    }else if (selected.value == "car-horn"){
      aud.src = "assets/audio/car-horn.mp3";
    }else if (selected.value == "party-horn"){
      aud.src = "assets/audio/party-horn.mp3";
      jsConfetti.addConfetti();
    }
    aud.play();
  }
  butn.addEventListener('click', function () { playSound(selected,jsConfetti,aud)} );
  onclick = playSound(selected,jsConfetti,aud);
}
