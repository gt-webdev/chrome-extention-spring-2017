var CHANCE = 100;
var WAIT = 1000;
var IMAGE = chrome.extension.getURL("content/monster.png");
var SOUND = chrome.extension.getURL("content/scream.mp3");
console.log(IMAGE);


$(document).ready(function() {
  if (Math.floor(Math.random() * CHANCE) + 1 === 1) {
    setTimeout(function() {
      var audio = $('<audio/>', {src: SOUND, autoplay: true});
      $("body").append(audio);
      var image = $('<img/>', {src: IMAGE, style: 'all: initial; height: 0vh;'});
      $("body").append($('<div />', { style: 'all: initial; position: fixed; display: flex; align-items: center; justify-content: center; top: 0; bottom: 0; left: 0; right: 0; pointer-events: none; z-index: 9999999999999999;' }).append(image));
      image.animate({
        height: '150vh'
      }, 1000, 'linear', function() {
          image.remove();
      });
    }, WAIT);
  }
})
