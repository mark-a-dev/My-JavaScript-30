console.log("js loaded")


// document.onkeyup = function keyPlay(event){

var playSound = function(e) {
  console.log("playing sound")
  console.log(e)
  console.log(e.key)
  // console.log(e.keyCode)

  // debugger

  var keyPressed = e.keyCode;
  console.log(keyPressed)
  console.log(typeof keyPressed)
  let audio = document.querySelector(`audio[data-key="${keyPressed}"]`)
  console.log(audio);
  if(audio !== null){
    audio.currentTime = 0;
    audio.play();
  }


  // audio.stop();
  //
  switch (keyPressed) {
    // case 65:
    case 97:
      console.log("a was pressed")
      console.log(audio);
        break;
    // case 83:
    case 115:
      console.log("s was pressed")
        break;
    // case 68:
    case 100:
      console.log("d was pressed")
        break;
    // case 70:
    case 102:
      console.log("f was pressed")
        break;
    // case 71:
    case 103:
      console.log("g was pressed")
        break;

    // case 72:
    case 104:
      console.log("h was pressed")
        break;
    // case 74:
    case 106:
      console.log("j was pressed")
        break;
    // case 75:
    case 107:
      console.log("k was pressed")
        break;
    // case 76:
    case 108:
      console.log("l was pressed")
        break;

    default:
      console.error("Please hit a valid key");
  }

}

// var playSound = function(e){
//   console.log(e)
//   // console.log(this)
//   // console.log(this.dataset)
//   soundToPlay = this.dataset.key;
//   getInstrument(soundToPlay);
// }
//
// window.addEventListener("keyup", playSound(event));
window.addEventListener("keypress", function(){
  // debugger
  playSound(event);


});



var keysToPress  = document.getElementsByClassName('key');
// keys.onclick = playSound;
console.log(keysToPress)
// console.log(keys.onclick)

// for( key in keysToPress) {
//   console.log(key)
//
//   Array.from(keysToPress).forEach(function(element) {
//         // console.log("adding event listener")
//         element.addEventListener('click', playSound(event));
//   });
// }


// document.getElementById("test").addEventListener("click", function( event ) {
//     // display the current click count inside the clicked div
//     event.target.textContent = "click count: " + event.detail;
//   }, false);
