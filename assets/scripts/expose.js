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
  volume.addEventListener('input', function () { controlVolume(volume)} );
  function controlVolume(volume){
    const inpt = volume.value;
    var image = document.querySelector("input+img");
    var value = parseInt(inpt)
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
  function playSound(selected,jsConfetti){
    var el = document.getElementsByClassName("hidden");
    if (selected.value == "air-horn"){
      el.src = "assets/audio/air-horn.mp3";
      console.log(el.src);
    }else if (selected.value == "car-horn"){
      el.src = "assets/audio/car-horn.mp3";
      console.log(el.src);
    }else if (selected.value == "party-horn"){
      el.src = "assets/audio/party-horn.mp3";
      jsConfetti.addConfetti();
      console.log("3");
    }
  }
  addEventListener('click', function () { playSound(selected,jsConfetti)} );
  onclick = playSound(selected,jsConfetti);
}
