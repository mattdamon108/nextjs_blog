webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post/postPresenter.js":
/*!*************************************!*\
  !*** ./pages/post/postPresenter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PostPresenter = function PostPresenter(props) {
  var MD = __webpack_require__("./posts sync recursive ^\\.\\/.*\\.md$")("./".concat(props.post[0].filename, ".md"));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MD.default, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostPresenter);

/***/ })

})
//# sourceMappingURL=post.js.3cd3e8137843dea99e4f.hot-update.js.map