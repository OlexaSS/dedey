"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //========================================================================

var numberPlusBtns = document.querySelectorAll('.number-plus');
var numberMinusBtns = document.querySelectorAll('.number-minus');

var _loop = function _loop(index) {
  var numberPlusBtn = numberPlusBtns[index];

  numberPlusBtn.onclick = function () {
    numberPlusBtn.nextElementSibling.stepUp();
  };
};

for (var index = 0; index < numberPlusBtns.length; index++) {
  _loop(index);
}

var _loop2 = function _loop2(_index) {
  var numberMinusBtn = numberMinusBtns[_index];

  numberMinusBtn.onclick = function () {
    numberMinusBtn.previousElementSibling.stepDown();
  };
};

for (var _index = 0; _index < numberMinusBtns.length; _index++) {
  _loop2(_index);
}