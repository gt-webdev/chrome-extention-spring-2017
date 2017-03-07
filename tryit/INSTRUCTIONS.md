# Instructions

## 1: Create manifest.json:
```
{
  "manifest_version": 2,
  "name": "Such a Cool Extention!",
  "version": "0.1",
  "content_scripts": [
    {
      "matches": [
        "<all_urls>"
      ],
      "js": [
        "thirdParty/jquery-3.1.1.min.js",
        "content.js"
      ]
    }
  ],
  "icons": {
    "16": "content/monster.png",
    "48": "content/monster.png",
    "128": "content/monster.png"
  }
}
```

## 2: Fill Out Content.js
```
var CHANCE = 100;
var WAIT = 1000;
var IMAGE = chrome.extension.getURL("content/monster.png");
var SOUND = chrome.extension.getURL("content/scream.mp3");


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
```

## 3. Update Manifest to include files
```
"web_accessible_resources": [
  "content/monster.png",
  "content/scream.mp3"
],
```
