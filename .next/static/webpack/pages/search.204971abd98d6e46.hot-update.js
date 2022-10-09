"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Search() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _query = router.query, location = _query.location, startDate = _query.startDate, endDate = _query.endDate, noOfGuests = _query.noOfGuests;\n    var formattedStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(startDate), \"dd MMMM yy\");\n    var formattedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(endDate), \"dd MMMM yy\");\n    var range = \"${formattedStartDate} - ${formattedEndDate}\";\n    console.log(range);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow pt-14 px-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"300+ stays - \",\n                                range,\n                                \" - for \",\n                                noOfGuests,\n                                \" number of guests\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mt-2 mb-6\",\n                            children: [\n                                \" Stays in \",\n                                location\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"button\",\n                                    children: \"Cancellation Flexibility\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"button\",\n                                    children: \"Type of Place\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"button\",\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"button\",\n                                    children: \"Rooms and Beds\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"button\",\n                                    children: \"More filters\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dl/web/airbnb-next/pages/search.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUNpQjtBQUNBO0FBQ0Y7QUFDTjtBQUVsQyxTQUFTSyxNQUFNLEdBQUc7O0lBQ2hCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUFtREcsTUFBWSxHQUFaQSxNQUFNLENBQUNDLEtBQUssRUFBeERDLFFBQVEsR0FBb0NGLE1BQVksQ0FBeERFLFFBQVEsRUFBRUMsU0FBUyxHQUF5QkgsTUFBWSxDQUE5Q0csU0FBUyxFQUFFQyxPQUFPLEdBQWdCSixNQUFZLENBQW5DSSxPQUFPLEVBQUVDLFVBQVUsR0FBSUwsTUFBWSxDQUExQkssVUFBVTtJQUUvQyxJQUFNQyxrQkFBa0IsR0FBR1IsZ0RBQU0sQ0FBQyxJQUFJUyxJQUFJLENBQUNKLFNBQVMsQ0FBQyxFQUFFLFlBQVksQ0FBQztJQUNwRSxJQUFNSyxnQkFBZ0IsR0FBR1YsZ0RBQU0sQ0FBQyxJQUFJUyxJQUFJLENBQUNILE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQztJQUNoRSxJQUFNSyxLQUFLLEdBQUcsNkNBQTZDO0lBQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBRWxCLHFCQUNFLDhEQUFDRyxLQUFHOzswQkFDQSw4REFBQ2pCLDBEQUFNOzs7O29CQUFHOzBCQUNOLDhEQUFDa0IsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjswQkFDbEMsNEVBQUNDLFNBQU87O3NDQUNKLDhEQUFDQyxHQUFDOztnQ0FBQyxlQUFhO2dDQUFDUCxLQUFLO2dDQUFDLFNBQU87Z0NBQUNKLFVBQVU7Z0NBQUMsbUJBQWlCOzs7Ozs7Z0NBQUk7c0NBQy9ELDhEQUFDWSxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsa0NBQWtDOztnQ0FBQyxZQUFVO2dDQUFDWixRQUFROzs7Ozs7Z0NBQU07c0NBQzFFLDhEQUFDVSxLQUFHOzRCQUFDRSxTQUFTLEVBQUMsc0VBQXNFOzs4Q0FDbkYsOERBQUNFLEdBQUM7b0NBQUNGLFNBQVMsRUFBQyxRQUFROzhDQUFDLDBCQUF3Qjs7Ozs7d0NBQUk7OENBQ2xELDhEQUFDRSxHQUFDO29DQUFDRixTQUFTLEVBQUMsUUFBUTs4Q0FBQyxlQUFhOzs7Ozt3Q0FBSTs4Q0FDdkMsOERBQUNFLEdBQUM7b0NBQUNGLFNBQVMsRUFBQyxRQUFROzhDQUFDLE9BQUs7Ozs7O3dDQUFJOzhDQUMvQiw4REFBQ0UsR0FBQztvQ0FBQ0YsU0FBUyxFQUFDLFFBQVE7OENBQUMsZ0JBQWM7Ozs7O3dDQUFJOzhDQUN4Qyw4REFBQ0UsR0FBQztvQ0FBQ0YsU0FBUyxFQUFDLFFBQVE7OENBQUMsY0FBWTs7Ozs7d0NBQUk7Ozs7OztnQ0FDbEM7Ozs7Ozt3QkFDQTs7Ozs7b0JBQ1A7MEJBQ1gsOERBQUNsQiwwREFBTTs7OztvQkFBRzs7Ozs7O1lBQ1IsQ0FDUDtBQUNILENBQUM7R0E1QlFHLE1BQU07O1FBQ0VGLGtEQUFTOzs7QUFEakJFLEtBQUFBLE1BQU07QUE4QmYsK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzkyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge2xvY2F0aW9uLCBzdGFydERhdGUsIGVuZERhdGUsIG5vT2ZHdWVzdHN9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShzdGFydERhdGUpLCBcImRkIE1NTU0geXlcIilcbiAgY29uc3QgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbmREYXRlKSwgXCJkZCBNTU1NIHl5XCIpXG4gIGNvbnN0IHJhbmdlID0gJyR7Zm9ybWF0dGVkU3RhcnREYXRlfSAtICR7Zm9ybWF0dGVkRW5kRGF0ZX0nXG4gIGNvbnNvbGUubG9nKHJhbmdlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4LWdyb3cgcHQtMTQgcHgtNic+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxwPjMwMCsgc3RheXMgLSB7cmFuZ2V9IC0gZm9yIHtub09mR3Vlc3RzfSBudW1iZXIgb2YgZ3Vlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LXNlbWlib2xkIG10LTIgbWItNic+IFN0YXlzIGluIHtsb2NhdGlvbn08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIGxnOmlubGluZS1mbGV4IG1iLTUgc3BhY2UteC0zIHRleHQtZ3JheS04MDAgd2hpdGVzcGFjZS1ub3dyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnV0dG9uJz5DYW5jZWxsYXRpb24gRmxleGliaWxpdHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidXR0b24nPlR5cGUgb2YgUGxhY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidXR0b24nPlByaWNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnV0dG9uJz5Sb29tcyBhbmQgQmVkczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J1dHRvbic+TW9yZSBmaWx0ZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJ1c2VSb3V0ZXIiLCJmb3JtYXQiLCJTZWFyY2giLCJyb3V0ZXIiLCJxdWVyeSIsImxvY2F0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm5vT2ZHdWVzdHMiLCJmb3JtYXR0ZWRTdGFydERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRW5kRGF0ZSIsInJhbmdlIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n"));

/***/ })

});