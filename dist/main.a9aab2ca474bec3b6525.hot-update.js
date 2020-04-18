webpackHotUpdate("main",{

/***/ "./src/components/table/card/rotatingCard.js":
/*!***************************************************!*\
  !*** ./src/components/table/card/rotatingCard.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cry = _interopRequireDefault(__webpack_require__(/*! ../../../assets/img/cry.jpg */ "./src/assets/img/cry.jpg"));

var _rotate = _interopRequireDefault(__webpack_require__(/*! ../../../assets/img/rotate.png */ "./src/assets/img/rotate.png"));

var _rotatingCardModule = _interopRequireDefault(__webpack_require__(/*! ./_rotatingCard.module.scss */ "./src/components/table/card/_rotatingCard.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rotatingCard = function rotatingCard() {
  var div = document.createElement('div');
  div.classList.add(_rotatingCardModule["default"].card);
  var divFront = document.createElement('div');
  divFront.classList.add(_rotatingCardModule["default"].front);
  var frontText = document.createElement('div');
  frontText.innerHTML = 'Text 1';
  frontText.classList.add(_rotatingCardModule["default"].title);
  var rotateImg = document.createElement('div');
  rotateImg.className = _rotatingCardModule["default"].rotate;

  rotateImg.onclick = function () {
    div.style.transform = 'rotateY(180deg)';
  };

  divFront.append(frontText, rotateImg);
  var divBack = document.createElement('div');
  divBack.classList.add(_rotatingCardModule["default"].back);
  var backText = document.createElement('div');
  backText.innerHTML = 'Text 2';
  backText.classList.add(_rotatingCardModule["default"].title);
  divBack.append(backText);
  divFront.style.background = "url(".concat(_cry["default"], ") no-repeat");
  divBack.style.background = "url(".concat(_cry["default"], ") no-repeat");

  div.onmouseleave = function () {
    div.style.transform = 'rotateY(0)';
  };

  div.append(divFront, divBack);
  return div;
};

var _default = rotatingCard;
exports["default"] = _default;
module.exports = exports.default;
module.exports.default = exports.default;

/***/ })

})
//# sourceMappingURL=main.a9aab2ca474bec3b6525.hot-update.js.map