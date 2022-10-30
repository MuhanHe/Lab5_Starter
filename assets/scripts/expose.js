// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
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
}
