/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/jsPsychPavlovia.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsPsychPavlovia": () => (/* binding */ jsPsychPavlovia)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable */

/**
 * jsPsych plugin (version > 7.0) for pavlovia.org
 *
 * This plugin handles communications with the pavlovia.org server: it opens and closes sessions,
 * and uploads data to the server.
 *
 * @author Alain Pitiot
 * @version 2022.1.1
 * @copyright (c) 2017-2020 Ilixa Ltd. (http://ilixa.com) (c) 2020-2021 Open Science Tools Ltd.
 *   (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 */
var jsPsychPavlovia = function (jsPsych) {
  'use strict';
  /**
   * **pavlovia**
   *
   * This plugin handles communications with the pavlovia.org server: it opens and closes sessions,
   * and uploads data to the server.
   *
   * @author Alain Pitiot
   * @see {@link https://pavlovia.org/docs/experiments/create-jsPsych Running jsPsych experiments from Pavlovia}
   */

  var PavloviaPlugin = /*#__PURE__*/function () {
    function PavloviaPlugin(jsPsych) {
      _classCallCheck(this, PavloviaPlugin);

      this._jsPsych = jsPsych;
    }
    /**
     * Run the plugin.
     *
     * @param {HTMLElement} display_element - the HTML DOM element where jsPsych content
     * 	is rendered
     * @param {Object} trial - the jsPsych trial
     * @public
     */


    _createClass(PavloviaPlugin, [{
      key: "trial",
      value: function () {
        var _trial2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(display_element, _trial) {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = _trial.command.toLowerCase();
                  _context.next = _context.t0 === 'init' ? 3 : _context.t0 === 'finish' ? 6 : 10;
                  break;

                case 3:
                  _context.next = 5;
                  return this._init(_trial);

                case 5:
                  return _context.abrupt("break", 11);

                case 6:
                  data = this._jsPsych.data.get().csv();
                  _context.next = 9;
                  return this._finish(_trial, data);

                case 9:
                  return _context.abrupt("break", 11);

                case 10:
                  _trial.errorCallback('unknown command: ' + _trial.command);

                case 11:
                  // end trial
                  this._jsPsych.finishTrial();

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function trial(_x, _x2) {
          return _trial2.apply(this, arguments);
        }

        return trial;
      }()
      /**
       * The default error callback function.
       *
       * Error messages are displayed in the body of the document and in the browser's console.
       *
       * @param {Object} error - the error json object to be displayed.
       * @public
       */

    }, {
      key: "_init",
      value:
      /**
       * Initialise the connection with pavlovia.org: configure the plugin and open a new session.
       *
       * @param {Object} trial - the jsPsych trial
       * @param {string} [configURL= "config.json"] - the URL of the pavlovia.org json configuration file
       * @returns {Promise<void>}
       * @private
       */
      function () {
        var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(trial) {
          var _this = this;

          var configURL,
              response,
              _beforeunloadCallback,
              _args2 = arguments;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  configURL = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'config.json';
                  _context2.prev = 1;
                  _context2.next = 4;
                  return this._configure(configURL);

                case 4:
                  response = _context2.sent;
                  PavloviaPlugin._config = response.config;

                  this._log('init | _configure.response=', response); // open a new session:


                  _context2.next = 9;
                  return this._openSession();

                case 9:
                  response = _context2.sent;

                  // _config.experiment.token = response.token;
                  this._log('init | _openSession.response=', response); // warn the user when they attempt to close the tab or browser:


                  _beforeunloadCallback = function _beforeunloadCallback(event) {
                    // preventDefault should ensure that the user gets prompted:
                    event.preventDefault(); // Chrome requires returnValue to be set:

                    event.returnValue = '';
                  };

                  window.addEventListener('beforeunload', _beforeunloadCallback); // when the user closes the tab or browser, we attempt to close the session
                  // and optionally save the results
                  // note: we communicate with the server using the Beacon API

                  window.addEventListener('unload', function (event) {
                    if (PavloviaPlugin._config.session.status === 'OPEN') {
                      // get and save the incomplete results if need be:
                      if (PavloviaPlugin._config.experiment.saveIncompleteResults) {
                        var data = _this._jsPsych.data.get().csv();

                        _this._save(trial, data, true);
                      } // close the session:


                      _this._closeSession(false, true);
                    }
                  });
                  _context2.next = 19;
                  break;

                case 16:
                  _context2.prev = 16;
                  _context2.t0 = _context2["catch"](1);
                  trial.errorCallback(_context2.t0);

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[1, 16]]);
        }));

        function _init(_x3) {
          return _init2.apply(this, arguments);
        }

        return _init;
      }()
      /**
       * Finish the connection with pavlovia.org: upload the collected data and close the session.
       *
       * @param {Object} trial - the jsPsych trial
       * @param {Object} data - the experiment data to be uploaded
       * @returns {Promise<void>}
       * @private
       */

    }, {
      key: "_finish",
      value: function () {
        var _finish2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(trial, data) {
          var msg, displayElement, sync, response;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  // remove the beforeunload listener:
                  window.removeEventListener('beforeunload', PavloviaPlugin._beforeunloadCallback); // tell the participant that the data is being uploaded:

                  msg = 'Please wait a moment while the data are uploaded to the pavlovia.org server...';
                  displayElement = this._jsPsych.getDisplayElement();
                  displayElement.innerHTML = '<pre id="pavlovia-data-upload"></pre>';
                  document.getElementById('pavlovia-data-upload').textContent = msg; // upload the data to pavlovia.org:

                  sync = typeof trial.sync !== 'undefined' ? trial.sync : false;
                  _context3.next = 9;
                  return this._save(trial, data, sync);

                case 9:
                  response = _context3.sent;

                  this._log('finish | _save.response=', response); // check for errors:


                  if (!('serverData' in response && 'error' in response.serverData)) {
                    _context3.next = 13;
                    break;
                  }

                  throw response.serverData;

                case 13:
                  _context3.next = 15;
                  return this._closeSession(true, false);

                case 15:
                  response = _context3.sent;

                  this._log('finish | _closeSession.response=', response);

                  _context3.next = 22;
                  break;

                case 19:
                  _context3.prev = 19;
                  _context3.t0 = _context3["catch"](0);
                  trial.errorCallback(_context3.t0);

                case 22:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 19]]);
        }));

        function _finish(_x4, _x5) {
          return _finish2.apply(this, arguments);
        }

        return _finish;
      }()
      /**
       * Configure the plugin by reading the configuration file created upon activation
       * of the experiment.
       *
       * @param {string} [configURL= "config.json"] - the URL of the pavlovia.org json
       * 	configuration file
       * @returns {Promise<any>}
       * @private
       */

    }, {
      key: "_configure",
      value: function () {
        var _configure2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(configURL) {
          var response, configurationResponse, urlQuery, urlParameters;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  response = {
                    origin: '_configure',
                    context: 'when configuring the plugin'
                  };
                  _context4.prev = 1;
                  _context4.next = 4;
                  return this._getConfiguration(configURL);

                case 4:
                  configurationResponse = _context4.sent;

                  // legacy experiments had a psychoJsManager block instead of a pavlovia block, and the URL
                  // pointed to https://pavlovia.org/server
                  if ('psychoJsManager' in configurationResponse.config) {
                    delete configurationResponse.config.psychoJsManager;
                    configurationResponse.config.pavlovia = {
                      URL: 'https://pavlovia.org'
                    };
                  } // tests for the presence of essential blocks in the configuration:


                  if ('experiment' in configurationResponse.config) {
                    _context4.next = 8;
                    break;
                  }

                  throw 'missing experiment block in configuration';

                case 8:
                  if ('name' in configurationResponse.config.experiment) {
                    _context4.next = 10;
                    break;
                  }

                  throw 'missing name in experiment block in configuration';

                case 10:
                  if ('fullpath' in configurationResponse.config.experiment) {
                    _context4.next = 12;
                    break;
                  }

                  throw 'missing fullpath in experiment block in configuration';

                case 12:
                  if ('pavlovia' in configurationResponse.config) {
                    _context4.next = 14;
                    break;
                  }

                  throw 'missing pavlovia block in configuration';

                case 14:
                  if ('URL' in configurationResponse.config.pavlovia) {
                    _context4.next = 16;
                    break;
                  }

                  throw 'missing URL in pavlovia block in configuration';

                case 16:
                  // get the server parameters (those starting with a double underscore):
                  urlQuery = window.location.search.slice(1);
                  urlParameters = new URLSearchParams(urlQuery);
                  urlParameters.forEach(function (value, key) {
                    if (key.indexOf('__') === 0) {
                      PavloviaPlugin._serverMsg.set(key, value);
                    }
                  });
                  return _context4.abrupt("return", configurationResponse);

                case 22:
                  _context4.prev = 22;
                  _context4.t0 = _context4["catch"](1);
                  throw _objectSpread(_objectSpread({}, response), {}, {
                    error: _context4.t0
                  });

                case 25:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[1, 22]]);
        }));

        function _configure(_x6) {
          return _configure2.apply(this, arguments);
        }

        return _configure;
      }()
      /**
       * Get the pavlovia.org json configuration file.
       *
       * @param {string} configURL - the URL of the pavlovia.org json configuration file
       * @returns {Promise<any>}
       * @private
       */

    }, {
      key: "_getConfiguration",
      value: function _getConfiguration(configURL) {
        var response = {
          origin: '_getConfiguration',
          context: 'when reading the configuration file: ' + configURL
        };
        return new Promise( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
            var serverResponse, serverData;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return fetch(configURL, {
                      method: 'GET',
                      mode: 'cors',
                      cache: 'no-cache',
                      credentials: 'same-origin',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      redirect: 'follow',
                      referrerPolicy: 'no-referrer'
                    });

                  case 3:
                    serverResponse = _context5.sent;
                    _context5.next = 6;
                    return serverResponse.json();

                  case 6:
                    serverData = _context5.sent;
                    resolve(_objectSpread(_objectSpread({}, response), {}, {
                      config: serverData
                    }));
                    _context5.next = 14;
                    break;

                  case 10:
                    _context5.prev = 10;
                    _context5.t0 = _context5["catch"](0);
                    console.error(_context5.t0);
                    reject(_objectSpread(_objectSpread({}, response), {}, {
                      error: _context5.t0
                    }));

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, null, [[0, 10]]);
          }));

          return function (_x7, _x8) {
            return _ref.apply(this, arguments);
          };
        }());
      }
      /**
       * Open a new session for this experiment on pavlovia.org.
       *
       * @returns {Promise<any>}
       * @private
       */

    }, {
      key: "_openSession",
      value: function _openSession() {
        var response = {
          origin: '_openSession',
          context: 'when opening a session for experiment: ' + PavloviaPlugin._config.experiment.fullpath
        }; // prepare a POST query:

        var formData = new FormData();

        if (PavloviaPlugin._serverMsg.has('__pilotToken')) {
          formData.append('pilotToken', PavloviaPlugin._serverMsg.get('__pilotToken'));
        } // query pavlovia server:


        return new Promise( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
            var url, serverResponse, serverData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    url = "".concat(PavloviaPlugin._config.pavlovia.URL, "/api/v2/experiments/").concat(PavloviaPlugin._config.gitlab.projectId, "/sessions");
                    _context6.prev = 1;
                    _context6.next = 4;
                    return fetch(url, {
                      method: 'POST',
                      mode: 'cors',
                      cache: 'no-cache',
                      credentials: 'same-origin',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      redirect: 'follow',
                      referrerPolicy: 'no-referrer',
                      body: formData
                    });

                  case 4:
                    serverResponse = _context6.sent;
                    _context6.next = 7;
                    return serverResponse.json();

                  case 7:
                    serverData = _context6.sent;

                    // check for required attributes:
                    if (!('token' in serverData)) {
                      reject(Object.assign(response, {
                        error: 'unexpected answer from server: no token'
                      }));
                    }

                    if (!('experiment' in serverData)) {
                      reject(Object.assign(response, {
                        error: 'unexpected answer from server: no experiment'
                      }));
                    } // update the configuration:


                    PavloviaPlugin._config.session = {
                      token: serverData.token,
                      status: 'OPEN'
                    };
                    PavloviaPlugin._config.experiment.status = serverData.experiment.status2;
                    PavloviaPlugin._config.experiment.saveFormat = Symbol["for"](serverData.experiment.saveFormat);
                    PavloviaPlugin._config.experiment.saveIncompleteResults = serverData.experiment.saveIncompleteResults;
                    PavloviaPlugin._config.experiment.license = serverData.experiment.license;
                    PavloviaPlugin._config.runMode = serverData.experiment.runMode;
                    resolve(Object.assign(response, {
                      token: serverData.token,
                      status: serverData.experiment.status2
                    }));
                    _context6.next = 23;
                    break;

                  case 19:
                    _context6.prev = 19;
                    _context6.t0 = _context6["catch"](1);
                    console.error(_context6.t0);
                    reject(_objectSpread(_objectSpread({}, response), {}, {
                      error: _context6.t0
                    }));

                  case 23:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, null, [[1, 19]]);
          }));

          return function (_x9, _x10) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
      /**
       * Close the previously opened session on pavlovia.org.
       *
       * @param {boolean} isCompleted - whether or not the participant completed the experiment
       * @param {boolean} [sync = false] - whether or not to use the Beacon API to communicate
       * 	with the server
       * @private
       */

    }, {
      key: "_closeSession",
      value: function _closeSession() {
        var isCompleted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var response = {
          origin: '_closeSession',
          context: 'when closing the session for experiment: ' + PavloviaPlugin._config.experiment.fullpath
        }; // prepare a DELETE query:

        var url = PavloviaPlugin._config.pavlovia.URL + '/api/v2/experiments/' + PavloviaPlugin._config.gitlab.projectId + '/sessions/' + PavloviaPlugin._config.session.token;
        var formData = new FormData();
        formData.append('isCompleted', isCompleted); // synchronously query the pavlovia server:

        if (sync) {
          navigator.sendBeacon(url + '/delete', formData);
          PavloviaPlugin._config.session.status = 'CLOSED';
        } else {
          // asynchronously query the pavlovia server:
          return new Promise( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
              var serverResponse, serverData;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return fetch(url, {
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: formData
                      });

                    case 3:
                      serverResponse = _context7.sent;
                      _context7.next = 6;
                      return serverResponse.json();

                    case 6:
                      serverData = _context7.sent;
                      PavloviaPlugin._config.session.status = 'CLOSED';
                      resolve(Object.assign(response, {
                        serverData: serverData
                      }));
                      _context7.next = 15;
                      break;

                    case 11:
                      _context7.prev = 11;
                      _context7.t0 = _context7["catch"](0);
                      console.error(_context7.t0);
                      reject(_objectSpread(_objectSpread({}, response), {}, {
                        error: _context7.t0
                      }));

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, null, [[0, 11]]);
            }));

            return function (_x11, _x12) {
              return _ref3.apply(this, arguments);
            };
          }());
        }
      }
      /**
       * Upload data to the pavlovia.org server.
       *
       * @param {Object} trial - the jsPsych trial
       * @param {string} data - the experiment data to be uploaded
       * @param {boolean} [sync = false] - whether or not to use the Beacon API to communicate
       * 	with the server
       * @return {Promise<any>}
       * @private
       */

    }, {
      key: "_save",
      value: function () {
        var _save2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(trial, data) {
          var sync,
              date,
              dateString,
              key,
              filteredData,
              _args8 = arguments;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  sync = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : false;
                  date = new Date();
                  dateString = date.getFullYear() + '-' + ('0' + (1 + date.getMonth())).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + '_';
                  dateString += ('0' + date.getHours()).slice(-2) + 'h' + ('0' + date.getMinutes()).slice(-2) + '.' + ('0' + date.getSeconds()).slice(-2) + '.' + date.getMilliseconds();
                  key = PavloviaPlugin._config.experiment.name + '_' + trial.participantId + '_' + 'SESSION' + '_' + dateString + '.csv';
                  filteredData = trial.dataFilter(data);

                  if (!(PavloviaPlugin._config.experiment.status === 'RUNNING' && !PavloviaPlugin._serverMsg.has('__pilotToken'))) {
                    _context8.next = 12;
                    break;
                  }

                  _context8.next = 9;
                  return this._uploadData(key, filteredData, sync);

                case 9:
                  return _context8.abrupt("return", _context8.sent);

                case 12:
                  this._offerDataForDownload(key, filteredData, 'text/csv');

                  return _context8.abrupt("return", {
                    origin: '_save',
                    context: 'when saving results for experiment: ' + PavloviaPlugin._config.experiment.fullpath,
                    message: 'offered the .csv file for download'
                  });

                case 14:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function _save(_x13, _x14) {
          return _save2.apply(this, arguments);
        }

        return _save;
      }()
      /**
       * Upload data (a key/value pair) to pavlovia.org.
       *
       * @param {string} key - the key
       * @param {string} value - the value
       * @param {boolean} [sync = false] - whether or not to upload the data using the Beacon API
       * @returns {Promise<any>}
       * @private
       */

    }, {
      key: "_uploadData",
      value: function _uploadData(key, value) {
        var sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var response = {
          origin: '_uploadData',
          context: "when uploading participant' results for experiment: " + PavloviaPlugin._config.experiment.fullpath
        };
        var url = PavloviaPlugin._config.pavlovia.URL + '/api/v2/experiments/' + PavloviaPlugin._config.gitlab.projectId + '/sessions/' + PavloviaPlugin._config.session.token + '/results';
        var formData = new FormData();
        formData.append('key', key);
        formData.append('value', value); // synchronous query the pavlovia server:

        if (sync) {
          navigator.sendBeacon(url, formData);
        } // asynchronously query the pavlovia server:
        else {
          return new Promise( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
              var serverResponse, serverData;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return fetch(url, {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: formData
                      });

                    case 3:
                      serverResponse = _context9.sent;
                      _context9.next = 6;
                      return serverResponse.json();

                    case 6:
                      serverData = _context9.sent;
                      resolve(Object.assign(response, {
                        serverData: serverData
                      }));
                      _context9.next = 14;
                      break;

                    case 10:
                      _context9.prev = 10;
                      _context9.t0 = _context9["catch"](0);
                      console.error(_context9.t0);
                      reject(_objectSpread(_objectSpread({}, response), {}, {
                        error: _context9.t0
                      }));

                    case 14:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, null, [[0, 10]]);
            }));

            return function (_x15, _x16) {
              return _ref4.apply(this, arguments);
            };
          }());
        }
      }
      /**
       * Log messages to the browser's console.
       *
       * @param {...*} messages - the messages to be displayed in the browser's console
       * @private
       */

    }, {
      key: "_log",
      value: function _log() {
        var _console;

        for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
          messages[_key] = arguments[_key];
        }

        (_console = console).log.apply(_console, ['[pavlovia ' + PavloviaPlugin.version + ']'].concat(messages));
      }
      /**
       * Offer data as download in the browser.
       *
       * @param {string} filename - the name of the file to be downloaded
       * @param {*} data - the data
       * @param {string} type - the MIME type of the data, e.g. 'text/csv' or 'application/json'
       * @private
       */

    }, {
      key: "_offerDataForDownload",
      value: function _offerDataForDownload(filename, data, type) {
        var blob = new Blob([data], {
          type: type
        });

        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
        } else {
          var elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = filename;
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
        }
      }
    }], [{
      key: "defaultErrorCallback",
      value: function defaultErrorCallback(error) {
        // output the error to the console:
        console.error('[pavlovia ' + PavloviaPlugin.version + ']', error); // output the error to the html body:

        var htmlCode = '<h3>[jspsych-pavlovia plugin ' + PavloviaPlugin.version + '] Error</h3><ul>';

        while (true) {
          if (_typeof(error) === 'object' && 'context' in error) {
            htmlCode += '<li>' + error.context + '</li>';
            error = error.error;
          } else {
            htmlCode += '<li><b>' + error + '</b></li>';
            break;
          }
        }

        htmlCode += '</ul>';
        document.querySelector('body').innerHTML = htmlCode;
      }
      /**
       * The default data filter, applied to the data gathered by jsPsych, before they are
       * uploaded to the server.
       *
       * The filter typically prunes and reformat jsPsych.data.get().csv().
       *
       * @param {Object} data - input data, typically from jsPsych.data.get().csv()
       * @returns filtered data, ready for upload to the server
       * @public
       */

    }, {
      key: "defaultDataFilter",
      value: function defaultDataFilter(data) {
        return data;
      }
    }]);

    return PavloviaPlugin;
  }();
  /**
   * Plugin version:
   * @public
   */


  PavloviaPlugin.version = '2022.1.1';
  /**
   * The pavlovia.org configuration (usually read from the config.json configuration file).
   *
   * @type {Object}
   * @private
   */

  PavloviaPlugin._config = {};
  /**
   * The callback for the beforeunload event, which is triggered when the participant
   * tries to leave the experiment by closing the tab or browser.
   *
   * @type {null}
   * @private
   */

  PavloviaPlugin._beforeunloadCallback = null;
  /**
   * The server parameters (those starting with a double underscore).
   *
   * @type {Object}
   * @private
   */

  PavloviaPlugin._serverMsg = new Map();
  /**
   * Plugin information.
   * @public
   */

  PavloviaPlugin.info = {
    name: 'pavlovia',
    description: 'communication with pavlovia.org',
    parameters: {
      command: {
        type: jsPsych.ParameterType.STRING,
        pretty_name: 'Command',
        "default": 'init',
        description: 'The pavlovia command: "init" (default) or "finish"'
      },
      participantId: {
        type: jsPsych.ParameterType.STRING,
        pretty_name: 'Participant Id',
        "default": 'PARTICIPANT',
        description: 'The participant Id: "PARTICIPANT" (default) or any string'
      },
      errorCallback: {
        type: jsPsych.ParameterType.FUNCTION,
        pretty_name: 'ErrorCallback',
        "default": PavloviaPlugin.defaultErrorCallback,
        description: 'The callback function called whenever an error has occurred'
      },
      dataFilter: {
        type: jsPsych.ParameterType.FUNCTION,
        pretty_name: 'DataFilter',
        "default": PavloviaPlugin.defaultDataFilter,
        description: 'The filter applied to the data gathered by jsPsych before upload to the server'
      }
    }
  };
  return PavloviaPlugin;
}(jsPsychModule);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNQc3ljaFBhdmxvdmlhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBSSxVQUFVQyxPQUFWLEVBQW1CO0FBQ2pEO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVhtRCxNQVkzQ0MsY0FaMkM7QUFhL0MsNEJBQVlELE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsV0FBS0UsUUFBTCxHQUFnQkYsT0FBaEI7QUFDRDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXhCbUQ7QUFBQTtBQUFBO0FBQUEsOEVBeUIvQyxpQkFBWUcsZUFBWixFQUE2QkMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRVVBLE1BQUssQ0FBQ0MsT0FBTixDQUFjQyxXQUFkLEVBRlY7QUFBQSxrREFHUyxNQUhULHVCQU9TLFFBUFQ7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBSVksS0FBS0MsS0FBTCxDQUFXSCxNQUFYLENBSlo7O0FBQUE7QUFBQTs7QUFBQTtBQVFZSSxrQkFBQUEsSUFSWixHQVFtQixLQUFLTixRQUFMLENBQWNNLElBQWQsQ0FBbUJDLEdBQW5CLEdBQXlCQyxHQUF6QixFQVJuQjtBQUFBO0FBQUEseUJBU1ksS0FBS0MsT0FBTCxDQUFhUCxNQUFiLEVBQW9CSSxJQUFwQixDQVRaOztBQUFBO0FBQUE7O0FBQUE7QUFhTUosa0JBQUFBLE1BQUssQ0FBQ1EsYUFBTixDQUFvQixzQkFBc0JSLE1BQUssQ0FBQ0MsT0FBaEQ7O0FBYk47QUFnQkU7QUFDQSx1QkFBS0gsUUFBTCxDQUFjVyxXQUFkOztBQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXpCK0M7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE2Qy9DO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcERtRDtBQUFBO0FBQUE7QUF5Ri9DO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoR21EO0FBQUEsNkVBaUcvQyxrQkFBWVQsS0FBWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1CVSxrQkFBQUEsU0FBbkIsOERBQStCLGFBQS9CO0FBQUE7QUFBQTtBQUFBLHlCQUd5QixLQUFLQyxVQUFMLENBQWdCRCxTQUFoQixDQUh6Qjs7QUFBQTtBQUdRRSxrQkFBQUEsUUFIUjtBQUlJZixrQkFBQUEsY0FBYyxDQUFDZ0IsT0FBZixHQUF5QkQsUUFBUSxDQUFDRSxNQUFsQzs7QUFDQSx1QkFBS0MsSUFBTCxDQUFVLDZCQUFWLEVBQXlDSCxRQUF6QyxFQUxKLENBT0k7OztBQVBKO0FBQUEseUJBUXFCLEtBQUtJLFlBQUwsRUFSckI7O0FBQUE7QUFRSUosa0JBQUFBLFFBUko7O0FBU0k7QUFDQSx1QkFBS0csSUFBTCxDQUFVLCtCQUFWLEVBQTJDSCxRQUEzQyxFQVZKLENBWUk7OztBQUNNSyxrQkFBQUEscUJBYlYsR0Fha0MsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFDdkM7QUFDQUEsb0JBQUFBLEtBQUssQ0FBQ0MsY0FBTixHQUZ1QyxDQUl2Qzs7QUFDQUQsb0JBQUFBLEtBQUssQ0FBQ0UsV0FBTixHQUFvQixFQUFwQjtBQUNELG1CQW5CTDs7QUFvQklDLGtCQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDTCxxQkFBeEMsRUFwQkosQ0FzQkk7QUFDQTtBQUNBOztBQUNBSSxrQkFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDSixLQUFELEVBQVc7QUFDM0Msd0JBQUlyQixjQUFjLENBQUNnQixPQUFmLENBQXVCVSxPQUF2QixDQUErQkMsTUFBL0IsS0FBMEMsTUFBOUMsRUFBc0Q7QUFDcEQ7QUFDQSwwQkFBSTNCLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJZLFVBQXZCLENBQWtDQyxxQkFBdEMsRUFBNkQ7QUFDM0QsNEJBQU10QixJQUFJLEdBQUcsS0FBSSxDQUFDTixRQUFMLENBQWNNLElBQWQsQ0FBbUJDLEdBQW5CLEdBQXlCQyxHQUF6QixFQUFiOztBQUNBLDZCQUFJLENBQUNxQixLQUFMLENBQVczQixLQUFYLEVBQWtCSSxJQUFsQixFQUF3QixJQUF4QjtBQUNELHVCQUxtRCxDQU9wRDs7O0FBQ0EsMkJBQUksQ0FBQ3dCLGFBQUwsQ0FBbUIsS0FBbkIsRUFBMEIsSUFBMUI7QUFDRDtBQUNGLG1CQVhEO0FBekJKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBc0NJNUIsa0JBQUFBLEtBQUssQ0FBQ1EsYUFBTjs7QUF0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FqRytDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMkkvQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxKbUQ7QUFBQTtBQUFBO0FBQUEsK0VBbUovQyxrQkFBY1IsS0FBZCxFQUFxQkksSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSTtBQUNBaUIsa0JBQUFBLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FDRSxjQURGLEVBRUVoQyxjQUFjLENBQUNvQixxQkFGakIsRUFISixDQVFJOztBQUNNYSxrQkFBQUEsR0FUVixHQVVNLGdGQVZOO0FBV1VDLGtCQUFBQSxjQVhWLEdBVzJCLEtBQUtqQyxRQUFMLENBQWNrQyxpQkFBZCxFQVgzQjtBQVlJRCxrQkFBQUEsY0FBYyxDQUFDRSxTQUFmLEdBQTJCLHVDQUEzQjtBQUNBQyxrQkFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLHNCQUF4QixFQUFnREMsV0FBaEQsR0FBOEROLEdBQTlELENBYkosQ0FlSTs7QUFDTU8sa0JBQUFBLElBaEJWLEdBZ0JpQixPQUFPckMsS0FBSyxDQUFDcUMsSUFBYixLQUFzQixXQUF0QixHQUFvQ3JDLEtBQUssQ0FBQ3FDLElBQTFDLEdBQWlELEtBaEJsRTtBQUFBO0FBQUEseUJBaUJ5QixLQUFLVixLQUFMLENBQVczQixLQUFYLEVBQWtCSSxJQUFsQixFQUF3QmlDLElBQXhCLENBakJ6Qjs7QUFBQTtBQWlCUXpCLGtCQUFBQSxRQWpCUjs7QUFrQkksdUJBQUtHLElBQUwsQ0FBVSwwQkFBVixFQUFzQ0gsUUFBdEMsRUFsQkosQ0FvQkk7OztBQXBCSix3QkFxQlEsZ0JBQWdCQSxRQUFoQixJQUE0QixXQUFXQSxRQUFRLENBQUMwQixVQXJCeEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0JBc0JZMUIsUUFBUSxDQUFDMEIsVUF0QnJCOztBQUFBO0FBQUE7QUFBQSx5QkEwQnFCLEtBQUtWLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsS0FBekIsQ0ExQnJCOztBQUFBO0FBMEJJaEIsa0JBQUFBLFFBMUJKOztBQTJCSSx1QkFBS0csSUFBTCxDQUFVLGtDQUFWLEVBQThDSCxRQUE5Qzs7QUEzQko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2QklaLGtCQUFBQSxLQUFLLENBQUNRLGFBQU47O0FBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbkorQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQW9ML0M7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVMbUQ7QUFBQTtBQUFBO0FBQUEsa0ZBNkwvQyxrQkFBaUJFLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNNRSxrQkFBQUEsUUFETixHQUNpQjtBQUNiMkIsb0JBQUFBLE1BQU0sRUFBRSxZQURLO0FBRWJDLG9CQUFBQSxPQUFPLEVBQUU7QUFGSSxtQkFEakI7QUFBQTtBQUFBO0FBQUEseUJBT3dDLEtBQUtDLGlCQUFMLENBQXVCL0IsU0FBdkIsQ0FQeEM7O0FBQUE7QUFPVWdDLGtCQUFBQSxxQkFQVjs7QUFTSTtBQUNBO0FBQ0Esc0JBQUkscUJBQXFCQSxxQkFBcUIsQ0FBQzVCLE1BQS9DLEVBQXVEO0FBQ3JELDJCQUFPNEIscUJBQXFCLENBQUM1QixNQUF0QixDQUE2QjZCLGVBQXBDO0FBQ0FELG9CQUFBQSxxQkFBcUIsQ0FBQzVCLE1BQXRCLENBQTZCOEIsUUFBN0IsR0FBd0M7QUFDdENDLHNCQUFBQSxHQUFHLEVBQUU7QUFEaUMscUJBQXhDO0FBR0QsbUJBaEJMLENBa0JJOzs7QUFsQkosc0JBbUJVLGdCQUFnQkgscUJBQXFCLENBQUM1QixNQW5CaEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0JBb0JZLDJDQXBCWjs7QUFBQTtBQUFBLHNCQXNCVSxVQUFVNEIscUJBQXFCLENBQUM1QixNQUF0QixDQUE2QlcsVUF0QmpEO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdCQXVCWSxtREF2Qlo7O0FBQUE7QUFBQSxzQkF5QlUsY0FBY2lCLHFCQUFxQixDQUFDNUIsTUFBdEIsQ0FBNkJXLFVBekJyRDtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3QkEwQlksdURBMUJaOztBQUFBO0FBQUEsc0JBNEJVLGNBQWNpQixxQkFBcUIsQ0FBQzVCLE1BNUI5QztBQUFBO0FBQUE7QUFBQTs7QUFBQSx3QkE2QlkseUNBN0JaOztBQUFBO0FBQUEsc0JBK0JVLFNBQVM0QixxQkFBcUIsQ0FBQzVCLE1BQXRCLENBQTZCOEIsUUEvQmhEO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdCQWdDWSxnREFoQ1o7O0FBQUE7QUFtQ0k7QUFDTUUsa0JBQUFBLFFBcENWLEdBb0NxQnpCLE1BQU0sQ0FBQzBCLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QixDQUE3QixDQXBDckI7QUFxQ1VDLGtCQUFBQSxhQXJDVixHQXFDMEIsSUFBSUMsZUFBSixDQUFvQkwsUUFBcEIsQ0FyQzFCO0FBc0NJSSxrQkFBQUEsYUFBYSxDQUFDRSxPQUFkLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNwQyx3QkFBSUEsR0FBRyxDQUFDQyxPQUFKLENBQVksSUFBWixNQUFzQixDQUExQixFQUE2QjtBQUMzQjFELHNCQUFBQSxjQUFjLENBQUMyRCxVQUFmLENBQTBCQyxHQUExQixDQUE4QkgsR0FBOUIsRUFBbUNELEtBQW5DO0FBQ0Q7QUFDRixtQkFKRDtBQXRDSixvREE0Q1dYLHFCQTVDWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REE4Q2U5QixRQTlDZjtBQThDeUI4QyxvQkFBQUEsS0FBSztBQTlDOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E3TCtDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBK08vQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyUG1EO0FBQUE7QUFBQSxhQXNQL0MsMkJBQWtCaEQsU0FBbEIsRUFBNkI7QUFDM0IsWUFBSUUsUUFBUSxHQUFHO0FBQ2IyQixVQUFBQSxNQUFNLEVBQUUsbUJBREs7QUFFYkMsVUFBQUEsT0FBTyxFQUFFLDBDQUEwQzlCO0FBRnRDLFNBQWY7QUFLQSxlQUFPLElBQUlpRCxPQUFKO0FBQUEsNkVBQVksa0JBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFHY0MsS0FBSyxDQUFDcEQsU0FBRCxFQUFZO0FBQzVDcUQsc0JBQUFBLE1BQU0sRUFBRSxLQURvQztBQUU1Q0Msc0JBQUFBLElBQUksRUFBRSxNQUZzQztBQUc1Q0Msc0JBQUFBLEtBQUssRUFBRSxVQUhxQztBQUk1Q0Msc0JBQUFBLFdBQVcsRUFBRSxhQUorQjtBQUs1Q0Msc0JBQUFBLE9BQU8sRUFBRTtBQUNQLHdDQUFnQjtBQURULHVCQUxtQztBQVE1Q0Msc0JBQUFBLFFBQVEsRUFBRSxRQVJrQztBQVM1Q0Msc0JBQUFBLGNBQWMsRUFBRTtBQVQ0QixxQkFBWixDQUhuQjs7QUFBQTtBQUdUQyxvQkFBQUEsY0FIUztBQUFBO0FBQUEsMkJBY1VBLGNBQWMsQ0FBQ0MsSUFBZixFQWRWOztBQUFBO0FBY1RqQyxvQkFBQUEsVUFkUztBQWdCZnNCLG9CQUFBQSxPQUFPLGlDQUFNaEQsUUFBTjtBQUFnQkUsc0JBQUFBLE1BQU0sRUFBRXdCO0FBQXhCLHVCQUFQO0FBaEJlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0Jma0Msb0JBQUFBLE9BQU8sQ0FBQ2QsS0FBUjtBQUNBRyxvQkFBQUEsTUFBTSxpQ0FBTWpELFFBQU47QUFBZ0I4QyxzQkFBQUEsS0FBSztBQUFyQix1QkFBTjs7QUFuQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBc0JEO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXpSbUQ7QUFBQTtBQUFBLGFBMFIvQyx3QkFBZTtBQUNiLFlBQUk5QyxRQUFRLEdBQUc7QUFDYjJCLFVBQUFBLE1BQU0sRUFBRSxjQURLO0FBRWJDLFVBQUFBLE9BQU8sRUFDTCw0Q0FDQTNDLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJZLFVBQXZCLENBQWtDZ0Q7QUFKdkIsU0FBZixDQURhLENBUWI7O0FBQ0EsWUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7O0FBQ0EsWUFBSTlFLGNBQWMsQ0FBQzJELFVBQWYsQ0FBMEJvQixHQUExQixDQUE4QixjQUE5QixDQUFKLEVBQW1EO0FBQ2pERixVQUFBQSxRQUFRLENBQUNHLE1BQVQsQ0FDRSxZQURGLEVBRUVoRixjQUFjLENBQUMyRCxVQUFmLENBQTBCbkQsR0FBMUIsQ0FBOEIsY0FBOUIsQ0FGRjtBQUlELFNBZlksQ0FpQmI7OztBQUNBLGVBQU8sSUFBSXNELE9BQUo7QUFBQSw4RUFBWSxrQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hpQixvQkFBQUEsR0FEVyxhQUNGakYsY0FBYyxDQUFDZ0IsT0FBZixDQUF1QitCLFFBQXZCLENBQWdDQyxHQUQ5QixpQ0FDd0RoRCxjQUFjLENBQUNnQixPQUFmLENBQXVCa0UsTUFBdkIsQ0FBOEJDLFNBRHRGO0FBQUE7QUFBQTtBQUFBLDJCQUljbEIsS0FBSyxDQUFDZ0IsR0FBRCxFQUFNO0FBQ3RDZixzQkFBQUEsTUFBTSxFQUFFLE1BRDhCO0FBRXRDQyxzQkFBQUEsSUFBSSxFQUFFLE1BRmdDO0FBR3RDQyxzQkFBQUEsS0FBSyxFQUFFLFVBSCtCO0FBSXRDQyxzQkFBQUEsV0FBVyxFQUFFLGFBSnlCO0FBS3RDQyxzQkFBQUEsT0FBTyxFQUFFO0FBQ1Asd0NBQWdCO0FBRFQsdUJBTDZCO0FBUXRDQyxzQkFBQUEsUUFBUSxFQUFFLFFBUjRCO0FBU3RDQyxzQkFBQUEsY0FBYyxFQUFFLGFBVHNCO0FBVXRDWSxzQkFBQUEsSUFBSSxFQUFFUDtBQVZnQyxxQkFBTixDQUpuQjs7QUFBQTtBQUlUSixvQkFBQUEsY0FKUztBQUFBO0FBQUEsMkJBZ0JVQSxjQUFjLENBQUNDLElBQWYsRUFoQlY7O0FBQUE7QUFnQlRqQyxvQkFBQUEsVUFoQlM7O0FBa0JmO0FBQ0Esd0JBQUksRUFBRSxXQUFXQSxVQUFiLENBQUosRUFBOEI7QUFDNUJ1QixzQkFBQUEsTUFBTSxDQUNKcUIsTUFBTSxDQUFDQyxNQUFQLENBQWN2RSxRQUFkLEVBQXdCO0FBQ3RCOEMsd0JBQUFBLEtBQUssRUFBRTtBQURlLHVCQUF4QixDQURJLENBQU47QUFLRDs7QUFDRCx3QkFBSSxFQUFFLGdCQUFnQnBCLFVBQWxCLENBQUosRUFBbUM7QUFDakN1QixzQkFBQUEsTUFBTSxDQUNKcUIsTUFBTSxDQUFDQyxNQUFQLENBQWN2RSxRQUFkLEVBQXdCO0FBQ3RCOEMsd0JBQUFBLEtBQUssRUFBRTtBQURlLHVCQUF4QixDQURJLENBQU47QUFLRCxxQkFoQ2MsQ0FrQ2Y7OztBQUNBN0Qsb0JBQUFBLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJVLE9BQXZCLEdBQWlDO0FBQy9CNkQsc0JBQUFBLEtBQUssRUFBRTlDLFVBQVUsQ0FBQzhDLEtBRGE7QUFFL0I1RCxzQkFBQUEsTUFBTSxFQUFFO0FBRnVCLHFCQUFqQztBQUlBM0Isb0JBQUFBLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJZLFVBQXZCLENBQWtDRCxNQUFsQyxHQUNFYyxVQUFVLENBQUNiLFVBQVgsQ0FBc0I0RCxPQUR4QjtBQUVBeEYsb0JBQUFBLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJZLFVBQXZCLENBQWtDNkQsVUFBbEMsR0FBK0NDLE1BQU0sT0FBTixDQUM3Q2pELFVBQVUsQ0FBQ2IsVUFBWCxDQUFzQjZELFVBRHVCLENBQS9DO0FBR0F6RixvQkFBQUEsY0FBYyxDQUFDZ0IsT0FBZixDQUF1QlksVUFBdkIsQ0FBa0NDLHFCQUFsQyxHQUNFWSxVQUFVLENBQUNiLFVBQVgsQ0FBc0JDLHFCQUR4QjtBQUVBN0Isb0JBQUFBLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJZLFVBQXZCLENBQWtDK0QsT0FBbEMsR0FDRWxELFVBQVUsQ0FBQ2IsVUFBWCxDQUFzQitELE9BRHhCO0FBRUEzRixvQkFBQUEsY0FBYyxDQUFDZ0IsT0FBZixDQUF1QjRFLE9BQXZCLEdBQWlDbkQsVUFBVSxDQUFDYixVQUFYLENBQXNCZ0UsT0FBdkQ7QUFFQTdCLG9CQUFBQSxPQUFPLENBQ0xzQixNQUFNLENBQUNDLE1BQVAsQ0FBY3ZFLFFBQWQsRUFBd0I7QUFDdEJ3RSxzQkFBQUEsS0FBSyxFQUFFOUMsVUFBVSxDQUFDOEMsS0FESTtBQUV0QjVELHNCQUFBQSxNQUFNLEVBQUVjLFVBQVUsQ0FBQ2IsVUFBWCxDQUFzQjREO0FBRlIscUJBQXhCLENBREssQ0FBUDtBQWxEZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlEZmIsb0JBQUFBLE9BQU8sQ0FBQ2QsS0FBUjtBQUNBRyxvQkFBQUEsTUFBTSxpQ0FBTWpELFFBQU47QUFBZ0I4QyxzQkFBQUEsS0FBSztBQUFyQix1QkFBTjs7QUExRGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBNkREO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsWG1EO0FBQUE7QUFBQSxhQW1YL0MseUJBQWdEO0FBQUEsWUFBbENnQyxXQUFrQyx1RUFBcEIsSUFBb0I7QUFBQSxZQUFkckQsSUFBYyx1RUFBUCxLQUFPO0FBQzlDLFlBQUl6QixRQUFRLEdBQUc7QUFDYjJCLFVBQUFBLE1BQU0sRUFBRSxlQURLO0FBRWJDLFVBQUFBLE9BQU8sRUFDTCw4Q0FDQTNDLGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJZLFVBQXZCLENBQWtDZ0Q7QUFKdkIsU0FBZixDQUQ4QyxDQVE5Qzs7QUFDQSxZQUFNSyxHQUFHLEdBQ1BqRixjQUFjLENBQUNnQixPQUFmLENBQXVCK0IsUUFBdkIsQ0FBZ0NDLEdBQWhDLEdBQ0Esc0JBREEsR0FFQWhELGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJrRSxNQUF2QixDQUE4QkMsU0FGOUIsR0FHQSxZQUhBLEdBSUFuRixjQUFjLENBQUNnQixPQUFmLENBQXVCVSxPQUF2QixDQUErQjZELEtBTGpDO0FBTUEsWUFBTVYsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsUUFBQUEsUUFBUSxDQUFDRyxNQUFULENBQWdCLGFBQWhCLEVBQStCYSxXQUEvQixFQWhCOEMsQ0FrQjlDOztBQUNBLFlBQUlyRCxJQUFKLEVBQVU7QUFDUnNELFVBQUFBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQmQsR0FBRyxHQUFHLFNBQTNCLEVBQXNDSixRQUF0QztBQUNBN0UsVUFBQUEsY0FBYyxDQUFDZ0IsT0FBZixDQUF1QlUsT0FBdkIsQ0FBK0JDLE1BQS9CLEdBQXdDLFFBQXhDO0FBQ0QsU0FIRCxNQUdPO0FBQ0w7QUFDQSxpQkFBTyxJQUFJbUMsT0FBSjtBQUFBLGdGQUFZLGtCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBR2NDLEtBQUssQ0FBQ2dCLEdBQUQsRUFBTTtBQUN0Q2Ysd0JBQUFBLE1BQU0sRUFBRSxRQUQ4QjtBQUV0Q0Msd0JBQUFBLElBQUksRUFBRSxNQUZnQztBQUd0Q0Msd0JBQUFBLEtBQUssRUFBRSxVQUgrQjtBQUl0Q0Msd0JBQUFBLFdBQVcsRUFBRSxhQUp5QjtBQUt0Q0Usd0JBQUFBLFFBQVEsRUFBRSxRQUw0QjtBQU10Q0Msd0JBQUFBLGNBQWMsRUFBRSxhQU5zQjtBQU90Q1ksd0JBQUFBLElBQUksRUFBRVA7QUFQZ0MsdUJBQU4sQ0FIbkI7O0FBQUE7QUFHVEosc0JBQUFBLGNBSFM7QUFBQTtBQUFBLDZCQVlVQSxjQUFjLENBQUNDLElBQWYsRUFaVjs7QUFBQTtBQVlUakMsc0JBQUFBLFVBWlM7QUFjZnpDLHNCQUFBQSxjQUFjLENBQUNnQixPQUFmLENBQXVCVSxPQUF2QixDQUErQkMsTUFBL0IsR0FBd0MsUUFBeEM7QUFDQW9DLHNCQUFBQSxPQUFPLENBQUNzQixNQUFNLENBQUNDLE1BQVAsQ0FBY3ZFLFFBQWQsRUFBd0I7QUFBRTBCLHdCQUFBQSxVQUFVLEVBQVZBO0FBQUYsdUJBQXhCLENBQUQsQ0FBUDtBQWZlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJma0Msc0JBQUFBLE9BQU8sQ0FBQ2QsS0FBUjtBQUNBRyxzQkFBQUEsTUFBTSxpQ0FBTWpELFFBQU47QUFBZ0I4Qyx3QkFBQUEsS0FBSztBQUFyQix5QkFBTjs7QUFsQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBcUJEO0FBQ0Y7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE1YW1EO0FBQUE7QUFBQTtBQUFBLDZFQTZhL0Msa0JBQVkxRCxLQUFaLEVBQW1CSSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCaUMsa0JBQUFBLElBQXpCLDhEQUFnQyxLQUFoQztBQUNRd0Qsa0JBQUFBLElBRFIsR0FDZSxJQUFJQyxJQUFKLEVBRGY7QUFFTUMsa0JBQUFBLFVBRk4sR0FHSUYsSUFBSSxDQUFDRyxXQUFMLEtBQ0EsR0FEQSxHQUVBLENBQUMsT0FBTyxJQUFJSCxJQUFJLENBQUNJLFFBQUwsRUFBWCxDQUFELEVBQThCaEQsS0FBOUIsQ0FBb0MsQ0FBQyxDQUFyQyxDQUZBLEdBR0EsR0FIQSxHQUlBLENBQUMsTUFBTTRDLElBQUksQ0FBQ0ssT0FBTCxFQUFQLEVBQXVCakQsS0FBdkIsQ0FBNkIsQ0FBQyxDQUE5QixDQUpBLEdBS0EsR0FSSjtBQVNFOEMsa0JBQUFBLFVBQVUsSUFDUixDQUFDLE1BQU1GLElBQUksQ0FBQ00sUUFBTCxFQUFQLEVBQXdCbEQsS0FBeEIsQ0FBOEIsQ0FBQyxDQUEvQixJQUNBLEdBREEsR0FFQSxDQUFDLE1BQU00QyxJQUFJLENBQUNPLFVBQUwsRUFBUCxFQUEwQm5ELEtBQTFCLENBQWdDLENBQUMsQ0FBakMsQ0FGQSxHQUdBLEdBSEEsR0FJQSxDQUFDLE1BQU00QyxJQUFJLENBQUNRLFVBQUwsRUFBUCxFQUEwQnBELEtBQTFCLENBQWdDLENBQUMsQ0FBakMsQ0FKQSxHQUtBLEdBTEEsR0FNQTRDLElBQUksQ0FBQ1MsZUFBTCxFQVBGO0FBU01oRCxrQkFBQUEsR0FsQlIsR0FtQkl6RCxjQUFjLENBQUNnQixPQUFmLENBQXVCWSxVQUF2QixDQUFrQzhFLElBQWxDLEdBQ0EsR0FEQSxHQUVBdkcsS0FBSyxDQUFDd0csYUFGTixHQUdBLEdBSEEsR0FJQSxTQUpBLEdBS0EsR0FMQSxHQU1BVCxVQU5BLEdBT0EsTUExQko7QUEyQlFVLGtCQUFBQSxZQTNCUixHQTJCdUJ6RyxLQUFLLENBQUMwRyxVQUFOLENBQWlCdEcsSUFBakIsQ0EzQnZCOztBQUFBLHdCQThCSVAsY0FBYyxDQUFDZ0IsT0FBZixDQUF1QlksVUFBdkIsQ0FBa0NELE1BQWxDLEtBQTZDLFNBQTdDLElBQ0EsQ0FBQzNCLGNBQWMsQ0FBQzJELFVBQWYsQ0FBMEJvQixHQUExQixDQUE4QixjQUE5QixDQS9CTDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQWlDaUIsS0FBSytCLFdBQUwsQ0FBaUJyRCxHQUFqQixFQUFzQm1ELFlBQXRCLEVBQW9DcEUsSUFBcEMsQ0FqQ2pCOztBQUFBO0FBQUE7O0FBQUE7QUFtQ0ksdUJBQUt1RSxxQkFBTCxDQUEyQnRELEdBQTNCLEVBQWdDbUQsWUFBaEMsRUFBOEMsVUFBOUM7O0FBbkNKLG9EQW9DVztBQUNMbEUsb0JBQUFBLE1BQU0sRUFBRSxPQURIO0FBRUxDLG9CQUFBQSxPQUFPLEVBQ0wseUNBQ0EzQyxjQUFjLENBQUNnQixPQUFmLENBQXVCWSxVQUF2QixDQUFrQ2dELFFBSi9CO0FBS0xvQyxvQkFBQUEsT0FBTyxFQUFFO0FBTEosbUJBcENYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBN2ErQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTJkL0M7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5lbUQ7QUFBQTtBQUFBLGFBb2UvQyxxQkFBWXZELEdBQVosRUFBaUJELEtBQWpCLEVBQXNDO0FBQUEsWUFBZGhCLElBQWMsdUVBQVAsS0FBTztBQUNwQyxZQUFJekIsUUFBUSxHQUFHO0FBQ2IyQixVQUFBQSxNQUFNLEVBQUUsYUFESztBQUViQyxVQUFBQSxPQUFPLEVBQ0wseURBQ0EzQyxjQUFjLENBQUNnQixPQUFmLENBQXVCWSxVQUF2QixDQUFrQ2dEO0FBSnZCLFNBQWY7QUFPQSxZQUFNSyxHQUFHLEdBQ1BqRixjQUFjLENBQUNnQixPQUFmLENBQXVCK0IsUUFBdkIsQ0FBZ0NDLEdBQWhDLEdBQ0Esc0JBREEsR0FFQWhELGNBQWMsQ0FBQ2dCLE9BQWYsQ0FBdUJrRSxNQUF2QixDQUE4QkMsU0FGOUIsR0FHQSxZQUhBLEdBSUFuRixjQUFjLENBQUNnQixPQUFmLENBQXVCVSxPQUF2QixDQUErQjZELEtBSi9CLEdBS0EsVUFORjtBQVFBLFlBQU1WLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELFFBQUFBLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixLQUFoQixFQUF1QnZCLEdBQXZCO0FBQ0FvQixRQUFBQSxRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJ4QixLQUF6QixFQWxCb0MsQ0FvQnBDOztBQUNBLFlBQUloQixJQUFKLEVBQVU7QUFDUnNELFVBQUFBLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQmQsR0FBckIsRUFBMEJKLFFBQTFCO0FBQ0QsU0FGRCxDQUdBO0FBSEEsYUFJSztBQUNILGlCQUFPLElBQUlmLE9BQUo7QUFBQSxnRkFBWSxrQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUVjQyxLQUFLLENBQUNnQixHQUFELEVBQU07QUFDdENmLHdCQUFBQSxNQUFNLEVBQUUsTUFEOEI7QUFFdENDLHdCQUFBQSxJQUFJLEVBQUUsTUFGZ0M7QUFHdENDLHdCQUFBQSxLQUFLLEVBQUUsVUFIK0I7QUFJdENDLHdCQUFBQSxXQUFXLEVBQUUsYUFKeUI7QUFLdENFLHdCQUFBQSxRQUFRLEVBQUUsUUFMNEI7QUFNdENDLHdCQUFBQSxjQUFjLEVBQUUsYUFOc0I7QUFPdENZLHdCQUFBQSxJQUFJLEVBQUVQO0FBUGdDLHVCQUFOLENBRm5COztBQUFBO0FBRVRKLHNCQUFBQSxjQUZTO0FBQUE7QUFBQSw2QkFXVUEsY0FBYyxDQUFDQyxJQUFmLEVBWFY7O0FBQUE7QUFXVGpDLHNCQUFBQSxVQVhTO0FBYWZzQixzQkFBQUEsT0FBTyxDQUFDc0IsTUFBTSxDQUFDQyxNQUFQLENBQWN2RSxRQUFkLEVBQXdCO0FBQUUwQix3QkFBQUEsVUFBVSxFQUFWQTtBQUFGLHVCQUF4QixDQUFELENBQVA7QUFiZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVma0Msc0JBQUFBLE9BQU8sQ0FBQ2QsS0FBUjtBQUNBRyxzQkFBQUEsTUFBTSxpQ0FBTWpELFFBQU47QUFBZ0I4Qyx3QkFBQUEsS0FBSztBQUFyQix5QkFBTjs7QUFoQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBbUJEO0FBQ0Y7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBemhCbUQ7QUFBQTtBQUFBLGFBMGhCL0MsZ0JBQWtCO0FBQUE7O0FBQUEsMENBQVZvRCxRQUFVO0FBQVZBLFVBQUFBLFFBQVU7QUFBQTs7QUFDaEIsb0JBQUF0QyxPQUFPLEVBQUN1QyxHQUFSLGtCQUFZLGVBQWVsSCxjQUFjLENBQUNtSCxPQUE5QixHQUF3QyxHQUFwRCxTQUE0REYsUUFBNUQ7QUFDRDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcmlCbUQ7QUFBQTtBQUFBLGFBc2lCL0MsK0JBQXNCRyxRQUF0QixFQUFnQzdHLElBQWhDLEVBQXNDOEcsSUFBdEMsRUFBNEM7QUFDMUMsWUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBUyxDQUFDaEgsSUFBRCxDQUFULEVBQWlCO0FBQUU4RyxVQUFBQSxJQUFJLEVBQUpBO0FBQUYsU0FBakIsQ0FBYjs7QUFFQSxZQUFJN0YsTUFBTSxDQUFDc0UsU0FBUCxDQUFpQjBCLGdCQUFyQixFQUF1QztBQUNyQ2hHLFVBQUFBLE1BQU0sQ0FBQ3NFLFNBQVAsQ0FBaUIyQixVQUFqQixDQUE0QkgsSUFBNUIsRUFBa0NGLFFBQWxDO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBTU0sSUFBSSxHQUFHbEcsTUFBTSxDQUFDYSxRQUFQLENBQWdCc0YsYUFBaEIsQ0FBOEIsR0FBOUIsQ0FBYjtBQUNBRCxVQUFBQSxJQUFJLENBQUNFLElBQUwsR0FBWXBHLE1BQU0sQ0FBQ3dCLEdBQVAsQ0FBVzZFLGVBQVgsQ0FBMkJQLElBQTNCLENBQVo7QUFDQUksVUFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCVixRQUFoQjtBQUNBL0UsVUFBQUEsUUFBUSxDQUFDK0MsSUFBVCxDQUFjMkMsV0FBZCxDQUEwQkwsSUFBMUI7QUFDQUEsVUFBQUEsSUFBSSxDQUFDTSxLQUFMO0FBQ0EzRixVQUFBQSxRQUFRLENBQUMrQyxJQUFULENBQWM2QyxXQUFkLENBQTBCUCxJQUExQjtBQUNEO0FBQ0Y7QUFuakI4QztBQUFBO0FBQUEsYUFxRC9DLDhCQUE0QjdELEtBQTVCLEVBQW1DO0FBQ2pDO0FBQ0FjLFFBQUFBLE9BQU8sQ0FBQ2QsS0FBUixDQUFjLGVBQWU3RCxjQUFjLENBQUNtSCxPQUE5QixHQUF3QyxHQUF0RCxFQUEyRHRELEtBQTNELEVBRmlDLENBSWpDOztBQUNBLFlBQUlxRSxRQUFRLEdBQ1Ysa0NBQ0FsSSxjQUFjLENBQUNtSCxPQURmLEdBRUEsa0JBSEY7O0FBSUEsZUFBTyxJQUFQLEVBQWE7QUFDWCxjQUFJLFFBQU90RCxLQUFQLE1BQWlCLFFBQWpCLElBQTZCLGFBQWFBLEtBQTlDLEVBQXFEO0FBQ25EcUUsWUFBQUEsUUFBUSxJQUFJLFNBQVNyRSxLQUFLLENBQUNsQixPQUFmLEdBQXlCLE9BQXJDO0FBQ0FrQixZQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0EsS0FBZDtBQUNELFdBSEQsTUFHTztBQUNMcUUsWUFBQUEsUUFBUSxJQUFJLFlBQVlyRSxLQUFaLEdBQW9CLFdBQWhDO0FBQ0E7QUFDRDtBQUNGOztBQUNEcUUsUUFBQUEsUUFBUSxJQUFJLE9BQVo7QUFDQTdGLFFBQUFBLFFBQVEsQ0FBQzhGLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IvRixTQUEvQixHQUEyQzhGLFFBQTNDO0FBQ0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwRm1EO0FBQUE7QUFBQSxhQXFGL0MsMkJBQXlCM0gsSUFBekIsRUFBK0I7QUFDN0IsZUFBT0EsSUFBUDtBQUNEO0FBdkY4Qzs7QUFBQTtBQUFBO0FBc2pCakQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFUCxFQUFBQSxjQUFjLENBQUNtSCxPQUFmLEdBQXlCLFVBQXpCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFbkgsRUFBQUEsY0FBYyxDQUFDZ0IsT0FBZixHQUF5QixFQUF6QjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFaEIsRUFBQUEsY0FBYyxDQUFDb0IscUJBQWYsR0FBdUMsSUFBdkM7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0VwQixFQUFBQSxjQUFjLENBQUMyRCxVQUFmLEdBQTRCLElBQUl5RSxHQUFKLEVBQTVCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7O0FBQ0VwSSxFQUFBQSxjQUFjLENBQUNxSSxJQUFmLEdBQXNCO0FBQ3BCM0IsSUFBQUEsSUFBSSxFQUFFLFVBRGM7QUFFcEI0QixJQUFBQSxXQUFXLEVBQUUsaUNBRk87QUFHcEJDLElBQUFBLFVBQVUsRUFBRTtBQUNWbkksTUFBQUEsT0FBTyxFQUFFO0FBQ1BpSCxRQUFBQSxJQUFJLEVBQUV0SCxPQUFPLENBQUN5SSxhQUFSLENBQXNCQyxNQURyQjtBQUVQQyxRQUFBQSxXQUFXLEVBQUUsU0FGTjtBQUdQLG1CQUFTLE1BSEY7QUFJUEosUUFBQUEsV0FBVyxFQUFFO0FBSk4sT0FEQztBQU9WM0IsTUFBQUEsYUFBYSxFQUFFO0FBQ2JVLFFBQUFBLElBQUksRUFBRXRILE9BQU8sQ0FBQ3lJLGFBQVIsQ0FBc0JDLE1BRGY7QUFFYkMsUUFBQUEsV0FBVyxFQUFFLGdCQUZBO0FBR2IsbUJBQVMsYUFISTtBQUliSixRQUFBQSxXQUFXLEVBQ1Q7QUFMVyxPQVBMO0FBY1YzSCxNQUFBQSxhQUFhLEVBQUU7QUFDYjBHLFFBQUFBLElBQUksRUFBRXRILE9BQU8sQ0FBQ3lJLGFBQVIsQ0FBc0JHLFFBRGY7QUFFYkQsUUFBQUEsV0FBVyxFQUFFLGVBRkE7QUFHYixtQkFBUzFJLGNBQWMsQ0FBQzRJLG9CQUhYO0FBSWJOLFFBQUFBLFdBQVcsRUFDVDtBQUxXLE9BZEw7QUFxQlZ6QixNQUFBQSxVQUFVLEVBQUU7QUFDVlEsUUFBQUEsSUFBSSxFQUFFdEgsT0FBTyxDQUFDeUksYUFBUixDQUFzQkcsUUFEbEI7QUFFVkQsUUFBQUEsV0FBVyxFQUFFLFlBRkg7QUFHVixtQkFBUzFJLGNBQWMsQ0FBQzZJLGlCQUhkO0FBSVZQLFFBQUFBLFdBQVcsRUFDVDtBQUxRO0FBckJGO0FBSFEsR0FBdEI7QUFrQ0EsU0FBT3RJLGNBQVA7QUFDRCxDQTVuQjhCLENBNG5CNUI4SSxhQTVuQjRCLENBQXhCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWQtYXR0YWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svLi9zcmMvanNQc3ljaFBhdmxvdmlhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICoganNQc3ljaCBwbHVnaW4gKHZlcnNpb24gPiA3LjApIGZvciBwYXZsb3ZpYS5vcmdcbiAqXG4gKiBUaGlzIHBsdWdpbiBoYW5kbGVzIGNvbW11bmljYXRpb25zIHdpdGggdGhlIHBhdmxvdmlhLm9yZyBzZXJ2ZXI6IGl0IG9wZW5zIGFuZCBjbG9zZXMgc2Vzc2lvbnMsXG4gKiBhbmQgdXBsb2FkcyBkYXRhIHRvIHRoZSBzZXJ2ZXIuXG4gKlxuICogQGF1dGhvciBBbGFpbiBQaXRpb3RcbiAqIEB2ZXJzaW9uIDIwMjIuMS4xXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LTIwMjAgSWxpeGEgTHRkLiAoaHR0cDovL2lsaXhhLmNvbSkgKGMpIDIwMjAtMjAyMSBPcGVuIFNjaWVuY2UgVG9vbHMgTHRkLlxuICogICAoaHR0cHM6Ly9vcGVuc2NpZW5jZXRvb2xzLm9yZylcbiAqIEBsaWNlbnNlIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIExpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY29uc3QganNQc3ljaFBhdmxvdmlhID0gKGZ1bmN0aW9uIChqc1BzeWNoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogKipwYXZsb3ZpYSoqXG4gICAqXG4gICAqIFRoaXMgcGx1Z2luIGhhbmRsZXMgY29tbXVuaWNhdGlvbnMgd2l0aCB0aGUgcGF2bG92aWEub3JnIHNlcnZlcjogaXQgb3BlbnMgYW5kIGNsb3NlcyBzZXNzaW9ucyxcbiAgICogYW5kIHVwbG9hZHMgZGF0YSB0byB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAYXV0aG9yIEFsYWluIFBpdGlvdFxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3BhdmxvdmlhLm9yZy9kb2NzL2V4cGVyaW1lbnRzL2NyZWF0ZS1qc1BzeWNoIFJ1bm5pbmcganNQc3ljaCBleHBlcmltZW50cyBmcm9tIFBhdmxvdmlhfVxuICAgKi9cbiAgY2xhc3MgUGF2bG92aWFQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKGpzUHN5Y2gpIHtcbiAgICAgIHRoaXMuX2pzUHN5Y2ggPSBqc1BzeWNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGlzcGxheV9lbGVtZW50IC0gdGhlIEhUTUwgRE9NIGVsZW1lbnQgd2hlcmUganNQc3ljaCBjb250ZW50XG4gICAgICogXHRpcyByZW5kZXJlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0cmlhbCAtIHRoZSBqc1BzeWNoIHRyaWFsXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGFzeW5jIHRyaWFsKGRpc3BsYXlfZWxlbWVudCwgdHJpYWwpIHtcbiAgICAgIC8vIGV4ZWN1dGUgdGhlIGNvbW1hbmQ6XG4gICAgICBzd2l0Y2ggKHRyaWFsLmNvbW1hbmQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0KHRyaWFsKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmaW5pc2gnOlxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9qc1BzeWNoLmRhdGEuZ2V0KCkuY3N2KCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoKHRyaWFsLCBkYXRhKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRyaWFsLmVycm9yQ2FsbGJhY2soJ3Vua25vd24gY29tbWFuZDogJyArIHRyaWFsLmNvbW1hbmQpO1xuICAgICAgfVxuXG4gICAgICAvLyBlbmQgdHJpYWxcbiAgICAgIHRoaXMuX2pzUHN5Y2guZmluaXNoVHJpYWwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBlcnJvciBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEVycm9yIG1lc3NhZ2VzIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50IGFuZCBpbiB0aGUgYnJvd3NlcidzIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3IgLSB0aGUgZXJyb3IganNvbiBvYmplY3QgdG8gYmUgZGlzcGxheWVkLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVmYXVsdEVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICAgIC8vIG91dHB1dCB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGU6XG4gICAgICBjb25zb2xlLmVycm9yKCdbcGF2bG92aWEgJyArIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gKyAnXScsIGVycm9yKTtcblxuICAgICAgLy8gb3V0cHV0IHRoZSBlcnJvciB0byB0aGUgaHRtbCBib2R5OlxuICAgICAgbGV0IGh0bWxDb2RlID1cbiAgICAgICAgJzxoMz5banNwc3ljaC1wYXZsb3ZpYSBwbHVnaW4gJyArXG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gK1xuICAgICAgICAnXSBFcnJvcjwvaDM+PHVsPic7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnY29udGV4dCcgaW4gZXJyb3IpIHtcbiAgICAgICAgICBodG1sQ29kZSArPSAnPGxpPicgKyBlcnJvci5jb250ZXh0ICsgJzwvbGk+JztcbiAgICAgICAgICBlcnJvciA9IGVycm9yLmVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWxDb2RlICs9ICc8bGk+PGI+JyArIGVycm9yICsgJzwvYj48L2xpPic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGh0bWxDb2RlICs9ICc8L3VsPic7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5uZXJIVE1MID0gaHRtbENvZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZGF0YSBmaWx0ZXIsIGFwcGxpZWQgdG8gdGhlIGRhdGEgZ2F0aGVyZWQgYnkganNQc3ljaCwgYmVmb3JlIHRoZXkgYXJlXG4gICAgICogdXBsb2FkZWQgdG8gdGhlIHNlcnZlci5cbiAgICAgKlxuICAgICAqIFRoZSBmaWx0ZXIgdHlwaWNhbGx5IHBydW5lcyBhbmQgcmVmb3JtYXQganNQc3ljaC5kYXRhLmdldCgpLmNzdigpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBpbnB1dCBkYXRhLCB0eXBpY2FsbHkgZnJvbSBqc1BzeWNoLmRhdGEuZ2V0KCkuY3N2KClcbiAgICAgKiBAcmV0dXJucyBmaWx0ZXJlZCBkYXRhLCByZWFkeSBmb3IgdXBsb2FkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHREYXRhRmlsdGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIGNvbm5lY3Rpb24gd2l0aCBwYXZsb3ZpYS5vcmc6IGNvbmZpZ3VyZSB0aGUgcGx1Z2luIGFuZCBvcGVuIGEgbmV3IHNlc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdHJpYWwgLSB0aGUganNQc3ljaCB0cmlhbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29uZmlnVVJMPSBcImNvbmZpZy5qc29uXCJdIC0gdGhlIFVSTCBvZiB0aGUgcGF2bG92aWEub3JnIGpzb24gY29uZmlndXJhdGlvbiBmaWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdCh0cmlhbCwgY29uZmlnVVJMID0gJ2NvbmZpZy5qc29uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gY29uZmlndXJlOlxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9jb25maWd1cmUoY29uZmlnVVJMKTtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZyA9IHJlc3BvbnNlLmNvbmZpZztcbiAgICAgICAgdGhpcy5fbG9nKCdpbml0IHwgX2NvbmZpZ3VyZS5yZXNwb25zZT0nLCByZXNwb25zZSk7XG5cbiAgICAgICAgLy8gb3BlbiBhIG5ldyBzZXNzaW9uOlxuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX29wZW5TZXNzaW9uKCk7XG4gICAgICAgIC8vIF9jb25maWcuZXhwZXJpbWVudC50b2tlbiA9IHJlc3BvbnNlLnRva2VuO1xuICAgICAgICB0aGlzLl9sb2coJ2luaXQgfCBfb3BlblNlc3Npb24ucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuXG4gICAgICAgIC8vIHdhcm4gdGhlIHVzZXIgd2hlbiB0aGV5IGF0dGVtcHQgdG8gY2xvc2UgdGhlIHRhYiBvciBicm93c2VyOlxuICAgICAgICBjb25zdCBfYmVmb3JldW5sb2FkQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCBzaG91bGQgZW5zdXJlIHRoYXQgdGhlIHVzZXIgZ2V0cyBwcm9tcHRlZDpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgLy8gQ2hyb21lIHJlcXVpcmVzIHJldHVyblZhbHVlIHRvIGJlIHNldDpcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9ICcnO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgX2JlZm9yZXVubG9hZENhbGxiYWNrKTtcblxuICAgICAgICAvLyB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgdGFiIG9yIGJyb3dzZXIsIHdlIGF0dGVtcHQgdG8gY2xvc2UgdGhlIHNlc3Npb25cbiAgICAgICAgLy8gYW5kIG9wdGlvbmFsbHkgc2F2ZSB0aGUgcmVzdWx0c1xuICAgICAgICAvLyBub3RlOiB3ZSBjb21tdW5pY2F0ZSB3aXRoIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIEJlYWNvbiBBUElcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnNlc3Npb24uc3RhdHVzID09PSAnT1BFTicpIHtcbiAgICAgICAgICAgIC8vIGdldCBhbmQgc2F2ZSB0aGUgaW5jb21wbGV0ZSByZXN1bHRzIGlmIG5lZWQgYmU6XG4gICAgICAgICAgICBpZiAoUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LnNhdmVJbmNvbXBsZXRlUmVzdWx0cykge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fanNQc3ljaC5kYXRhLmdldCgpLmNzdigpO1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlKHRyaWFsLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2xvc2UgdGhlIHNlc3Npb246XG4gICAgICAgICAgICB0aGlzLl9jbG9zZVNlc3Npb24oZmFsc2UsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0cmlhbC5lcnJvckNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5pc2ggdGhlIGNvbm5lY3Rpb24gd2l0aCBwYXZsb3ZpYS5vcmc6IHVwbG9hZCB0aGUgY29sbGVjdGVkIGRhdGEgYW5kIGNsb3NlIHRoZSBzZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRyaWFsIC0gdGhlIGpzUHN5Y2ggdHJpYWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIHRoZSBleHBlcmltZW50IGRhdGEgdG8gYmUgdXBsb2FkZWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9maW5pc2godHJpYWwsIGRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgYmVmb3JldW5sb2FkIGxpc3RlbmVyOlxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAnYmVmb3JldW5sb2FkJyxcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fYmVmb3JldW5sb2FkQ2FsbGJhY2tcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0ZWxsIHRoZSBwYXJ0aWNpcGFudCB0aGF0IHRoZSBkYXRhIGlzIGJlaW5nIHVwbG9hZGVkOlxuICAgICAgICBjb25zdCBtc2cgPVxuICAgICAgICAgICdQbGVhc2Ugd2FpdCBhIG1vbWVudCB3aGlsZSB0aGUgZGF0YSBhcmUgdXBsb2FkZWQgdG8gdGhlIHBhdmxvdmlhLm9yZyBzZXJ2ZXIuLi4nO1xuICAgICAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IHRoaXMuX2pzUHN5Y2guZ2V0RGlzcGxheUVsZW1lbnQoKTtcbiAgICAgICAgZGlzcGxheUVsZW1lbnQuaW5uZXJIVE1MID0gJzxwcmUgaWQ9XCJwYXZsb3ZpYS1kYXRhLXVwbG9hZFwiPjwvcHJlPic7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXZsb3ZpYS1kYXRhLXVwbG9hZCcpLnRleHRDb250ZW50ID0gbXNnO1xuXG4gICAgICAgIC8vIHVwbG9hZCB0aGUgZGF0YSB0byBwYXZsb3ZpYS5vcmc6XG4gICAgICAgIGNvbnN0IHN5bmMgPSB0eXBlb2YgdHJpYWwuc3luYyAhPT0gJ3VuZGVmaW5lZCcgPyB0cmlhbC5zeW5jIDogZmFsc2U7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX3NhdmUodHJpYWwsIGRhdGEsIHN5bmMpO1xuICAgICAgICB0aGlzLl9sb2coJ2ZpbmlzaCB8IF9zYXZlLnJlc3BvbnNlPScsIHJlc3BvbnNlKTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgZXJyb3JzOlxuICAgICAgICBpZiAoJ3NlcnZlckRhdGEnIGluIHJlc3BvbnNlICYmICdlcnJvcicgaW4gcmVzcG9uc2Uuc2VydmVyRGF0YSkge1xuICAgICAgICAgIHRocm93IHJlc3BvbnNlLnNlcnZlckRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSB0aGUgc2Vzc2lvbjpcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9jbG9zZVNlc3Npb24odHJ1ZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9sb2coJ2ZpbmlzaCB8IF9jbG9zZVNlc3Npb24ucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdHJpYWwuZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIHRoZSBwbHVnaW4gYnkgcmVhZGluZyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGNyZWF0ZWQgdXBvbiBhY3RpdmF0aW9uXG4gICAgICogb2YgdGhlIGV4cGVyaW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZ1VSTD0gXCJjb25maWcuanNvblwiXSAtIHRoZSBVUkwgb2YgdGhlIHBhdmxvdmlhLm9yZyBqc29uXG4gICAgICogXHRjb25maWd1cmF0aW9uIGZpbGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2NvbmZpZ3VyZShjb25maWdVUkwpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgICAgb3JpZ2luOiAnX2NvbmZpZ3VyZScsXG4gICAgICAgIGNvbnRleHQ6ICd3aGVuIGNvbmZpZ3VyaW5nIHRoZSBwbHVnaW4nLFxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvblJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0Q29uZmlndXJhdGlvbihjb25maWdVUkwpO1xuXG4gICAgICAgIC8vIGxlZ2FjeSBleHBlcmltZW50cyBoYWQgYSBwc3ljaG9Kc01hbmFnZXIgYmxvY2sgaW5zdGVhZCBvZiBhIHBhdmxvdmlhIGJsb2NrLCBhbmQgdGhlIFVSTFxuICAgICAgICAvLyBwb2ludGVkIHRvIGh0dHBzOi8vcGF2bG92aWEub3JnL3NlcnZlclxuICAgICAgICBpZiAoJ3BzeWNob0pzTWFuYWdlcicgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZykge1xuICAgICAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLnBzeWNob0pzTWFuYWdlcjtcbiAgICAgICAgICBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLnBhdmxvdmlhID0ge1xuICAgICAgICAgICAgVVJMOiAnaHR0cHM6Ly9wYXZsb3ZpYS5vcmcnLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0ZXN0cyBmb3IgdGhlIHByZXNlbmNlIG9mIGVzc2VudGlhbCBibG9ja3MgaW4gdGhlIGNvbmZpZ3VyYXRpb246XG4gICAgICAgIGlmICghKCdleHBlcmltZW50JyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnKSkge1xuICAgICAgICAgIHRocm93ICdtaXNzaW5nIGV4cGVyaW1lbnQgYmxvY2sgaW4gY29uZmlndXJhdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ25hbWUnIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcuZXhwZXJpbWVudCkpIHtcbiAgICAgICAgICB0aHJvdyAnbWlzc2luZyBuYW1lIGluIGV4cGVyaW1lbnQgYmxvY2sgaW4gY29uZmlndXJhdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ2Z1bGxwYXRoJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLmV4cGVyaW1lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgJ21pc3NpbmcgZnVsbHBhdGggaW4gZXhwZXJpbWVudCBibG9jayBpbiBjb25maWd1cmF0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoISgncGF2bG92aWEnIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcpKSB7XG4gICAgICAgICAgdGhyb3cgJ21pc3NpbmcgcGF2bG92aWEgYmxvY2sgaW4gY29uZmlndXJhdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ1VSTCcgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5wYXZsb3ZpYSkpIHtcbiAgICAgICAgICB0aHJvdyAnbWlzc2luZyBVUkwgaW4gcGF2bG92aWEgYmxvY2sgaW4gY29uZmlndXJhdGlvbic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIHNlcnZlciBwYXJhbWV0ZXJzICh0aG9zZSBzdGFydGluZyB3aXRoIGEgZG91YmxlIHVuZGVyc2NvcmUpOlxuICAgICAgICBjb25zdCB1cmxRdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSk7XG4gICAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KTtcbiAgICAgICAgdXJsUGFyYW1ldGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdfXycpID09PSAwKSB7XG4gICAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb25maWd1cmF0aW9uUmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyB7IC4uLnJlc3BvbnNlLCBlcnJvciB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGF2bG92aWEub3JnIGpzb24gY29uZmlndXJhdGlvbiBmaWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ1VSTCAtIHRoZSBVUkwgb2YgdGhlIHBhdmxvdmlhLm9yZyBqc29uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0Q29uZmlndXJhdGlvbihjb25maWdVUkwpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgICAgb3JpZ2luOiAnX2dldENvbmZpZ3VyYXRpb24nLFxuICAgICAgICBjb250ZXh0OiAnd2hlbiByZWFkaW5nIHRoZSBjb25maWd1cmF0aW9uIGZpbGU6ICcgKyBjb25maWdVUkwsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb25maWdVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSBhd2FpdCBzZXJ2ZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICByZXNvbHZlKHsgLi4ucmVzcG9uc2UsIGNvbmZpZzogc2VydmVyRGF0YSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICByZWplY3QoeyAuLi5yZXNwb25zZSwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gYSBuZXcgc2Vzc2lvbiBmb3IgdGhpcyBleHBlcmltZW50IG9uIHBhdmxvdmlhLm9yZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb3BlblNlc3Npb24oKSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yaWdpbjogJ19vcGVuU2Vzc2lvbicsXG4gICAgICAgIGNvbnRleHQ6XG4gICAgICAgICAgJ3doZW4gb3BlbmluZyBhIHNlc3Npb24gZm9yIGV4cGVyaW1lbnQ6ICcgK1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5mdWxscGF0aCxcbiAgICAgIH07XG5cbiAgICAgIC8vIHByZXBhcmUgYSBQT1NUIHF1ZXJ5OlxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGlmIChQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLmhhcygnX19waWxvdFRva2VuJykpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdwaWxvdFRva2VuJyxcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLmdldCgnX19waWxvdFRva2VuJylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gcXVlcnkgcGF2bG92aWEgc2VydmVyOlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7UGF2bG92aWFQbHVnaW4uX2NvbmZpZy5wYXZsb3ZpYS5VUkx9L2FwaS92Mi9leHBlcmltZW50cy8ke1BhdmxvdmlhUGx1Z2luLl9jb25maWcuZ2l0bGFiLnByb2plY3RJZH0vc2Vzc2lvbnNgO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSBhd2FpdCBzZXJ2ZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAvLyBjaGVjayBmb3IgcmVxdWlyZWQgYXR0cmlidXRlczpcbiAgICAgICAgICBpZiAoISgndG9rZW4nIGluIHNlcnZlckRhdGEpKSB7XG4gICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ3VuZXhwZWN0ZWQgYW5zd2VyIGZyb20gc2VydmVyOiBubyB0b2tlbicsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoISgnZXhwZXJpbWVudCcgaW4gc2VydmVyRGF0YSkpIHtcbiAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwge1xuICAgICAgICAgICAgICAgIGVycm9yOiAndW5leHBlY3RlZCBhbnN3ZXIgZnJvbSBzZXJ2ZXI6IG5vIGV4cGVyaW1lbnQnLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1cGRhdGUgdGhlIGNvbmZpZ3VyYXRpb246XG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uID0ge1xuICAgICAgICAgICAgdG9rZW46IHNlcnZlckRhdGEudG9rZW4sXG4gICAgICAgICAgICBzdGF0dXM6ICdPUEVOJyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zdGF0dXMgPVxuICAgICAgICAgICAgc2VydmVyRGF0YS5leHBlcmltZW50LnN0YXR1czI7XG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LnNhdmVGb3JtYXQgPSBTeW1ib2wuZm9yKFxuICAgICAgICAgICAgc2VydmVyRGF0YS5leHBlcmltZW50LnNhdmVGb3JtYXRcbiAgICAgICAgICApO1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zYXZlSW5jb21wbGV0ZVJlc3VsdHMgPVxuICAgICAgICAgICAgc2VydmVyRGF0YS5leHBlcmltZW50LnNhdmVJbmNvbXBsZXRlUmVzdWx0cztcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQubGljZW5zZSA9XG4gICAgICAgICAgICBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQubGljZW5zZTtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnJ1bk1vZGUgPSBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQucnVuTW9kZTtcblxuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgIHRva2VuOiBzZXJ2ZXJEYXRhLnRva2VuLFxuICAgICAgICAgICAgICBzdGF0dXM6IHNlcnZlckRhdGEuZXhwZXJpbWVudC5zdGF0dXMyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHJlamVjdCh7IC4uLnJlc3BvbnNlLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIHByZXZpb3VzbHkgb3BlbmVkIHNlc3Npb24gb24gcGF2bG92aWEub3JnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBsZXRlZCAtIHdoZXRoZXIgb3Igbm90IHRoZSBwYXJ0aWNpcGFudCBjb21wbGV0ZWQgdGhlIGV4cGVyaW1lbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzeW5jID0gZmFsc2VdIC0gd2hldGhlciBvciBub3QgdG8gdXNlIHRoZSBCZWFjb24gQVBJIHRvIGNvbW11bmljYXRlXG4gICAgICogXHR3aXRoIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbG9zZVNlc3Npb24oaXNDb21wbGV0ZWQgPSB0cnVlLCBzeW5jID0gZmFsc2UpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgICAgb3JpZ2luOiAnX2Nsb3NlU2Vzc2lvbicsXG4gICAgICAgIGNvbnRleHQ6XG4gICAgICAgICAgJ3doZW4gY2xvc2luZyB0aGUgc2Vzc2lvbiBmb3IgZXhwZXJpbWVudDogJyArXG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LmZ1bGxwYXRoLFxuICAgICAgfTtcblxuICAgICAgLy8gcHJlcGFyZSBhIERFTEVURSBxdWVyeTpcbiAgICAgIGNvbnN0IHVybCA9XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcucGF2bG92aWEuVVJMICtcbiAgICAgICAgJy9hcGkvdjIvZXhwZXJpbWVudHMvJyArXG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZ2l0bGFiLnByb2plY3RJZCArXG4gICAgICAgICcvc2Vzc2lvbnMvJyArXG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbi50b2tlbjtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lzQ29tcGxldGVkJywgaXNDb21wbGV0ZWQpO1xuXG4gICAgICAvLyBzeW5jaHJvbm91c2x5IHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICBpZiAoc3luYykge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwgKyAnL2RlbGV0ZScsIGZvcm1EYXRhKTtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnN0YXR1cyA9ICdDTE9TRUQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYXN5bmNocm9ub3VzbHkgcXVlcnkgdGhlIHBhdmxvdmlhIHNlcnZlcjpcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gcXVlcnkgdGhlIHBhdmxvdmlhIHNlcnZlcjpcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHNlcnZlclJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnN0YXR1cyA9ICdDTE9TRUQnO1xuICAgICAgICAgICAgcmVzb2x2ZShPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB7IHNlcnZlckRhdGEgfSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdCh7IC4uLnJlc3BvbnNlLCBlcnJvciB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwbG9hZCBkYXRhIHRvIHRoZSBwYXZsb3ZpYS5vcmcgc2VydmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRyaWFsIC0gdGhlIGpzUHN5Y2ggdHJpYWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIHRoZSBleHBlcmltZW50IGRhdGEgdG8gYmUgdXBsb2FkZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzeW5jID0gZmFsc2VdIC0gd2hldGhlciBvciBub3QgdG8gdXNlIHRoZSBCZWFjb24gQVBJIHRvIGNvbW11bmljYXRlXG4gICAgICogXHR3aXRoIHRoZSBzZXJ2ZXJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfc2F2ZSh0cmlhbCwgZGF0YSwgc3luYyA9IGZhbHNlKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBkYXRlU3RyaW5nID1cbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgKCcwJyArICgxICsgZGF0ZS5nZXRNb250aCgpKSkuc2xpY2UoLTIpICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgKCcwJyArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgK1xuICAgICAgICAnXyc7XG4gICAgICBkYXRlU3RyaW5nICs9XG4gICAgICAgICgnMCcgKyBkYXRlLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICdoJyArXG4gICAgICAgICgnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgKCcwJyArIGRhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMikgK1xuICAgICAgICAnLicgK1xuICAgICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXG4gICAgICBjb25zdCBrZXkgPVxuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQubmFtZSArXG4gICAgICAgICdfJyArXG4gICAgICAgIHRyaWFsLnBhcnRpY2lwYW50SWQgK1xuICAgICAgICAnXycgK1xuICAgICAgICAnU0VTU0lPTicgK1xuICAgICAgICAnXycgK1xuICAgICAgICBkYXRlU3RyaW5nICtcbiAgICAgICAgJy5jc3YnO1xuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdHJpYWwuZGF0YUZpbHRlcihkYXRhKTtcblxuICAgICAgaWYgKFxuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc3RhdHVzID09PSAnUlVOTklORycgJiZcbiAgICAgICAgIVBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cuaGFzKCdfX3BpbG90VG9rZW4nKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl91cGxvYWREYXRhKGtleSwgZmlsdGVyZWREYXRhLCBzeW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29mZmVyRGF0YUZvckRvd25sb2FkKGtleSwgZmlsdGVyZWREYXRhLCAndGV4dC9jc3YnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcmlnaW46ICdfc2F2ZScsXG4gICAgICAgICAgY29udGV4dDpcbiAgICAgICAgICAgICd3aGVuIHNhdmluZyByZXN1bHRzIGZvciBleHBlcmltZW50OiAnICtcbiAgICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5mdWxscGF0aCxcbiAgICAgICAgICBtZXNzYWdlOiAnb2ZmZXJlZCB0aGUgLmNzdiBmaWxlIGZvciBkb3dubG9hZCcsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBsb2FkIGRhdGEgKGEga2V5L3ZhbHVlIHBhaXIpIHRvIHBhdmxvdmlhLm9yZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdGhlIHZhbHVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc3luYyA9IGZhbHNlXSAtIHdoZXRoZXIgb3Igbm90IHRvIHVwbG9hZCB0aGUgZGF0YSB1c2luZyB0aGUgQmVhY29uIEFQSVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBsb2FkRGF0YShrZXksIHZhbHVlLCBzeW5jID0gZmFsc2UpIHtcbiAgICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgICAgb3JpZ2luOiAnX3VwbG9hZERhdGEnLFxuICAgICAgICBjb250ZXh0OlxuICAgICAgICAgIFwid2hlbiB1cGxvYWRpbmcgcGFydGljaXBhbnQnIHJlc3VsdHMgZm9yIGV4cGVyaW1lbnQ6IFwiICtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuZnVsbHBhdGgsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cmwgPVxuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnBhdmxvdmlhLlVSTCArXG4gICAgICAgICcvYXBpL3YyL2V4cGVyaW1lbnRzLycgK1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmdpdGxhYi5wcm9qZWN0SWQgK1xuICAgICAgICAnL3Nlc3Npb25zLycgK1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnNlc3Npb24udG9rZW4gK1xuICAgICAgICAnL3Jlc3VsdHMnO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdrZXknLCBrZXkpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd2YWx1ZScsIHZhbHVlKTtcblxuICAgICAgLy8gc3luY2hyb25vdXMgcXVlcnkgdGhlIHBhdmxvdmlhIHNlcnZlcjpcbiAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgZm9ybURhdGEpO1xuICAgICAgfVxuICAgICAgLy8gYXN5bmNocm9ub3VzbHkgcXVlcnkgdGhlIHBhdmxvdmlhIHNlcnZlcjpcbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICByZXNvbHZlKE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHsgc2VydmVyRGF0YSB9KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KHsgLi4ucmVzcG9uc2UsIGVycm9yIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyJ3MgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4uKn0gbWVzc2FnZXMgLSB0aGUgbWVzc2FnZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBicm93c2VyJ3MgY29uc29sZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2xvZyguLi5tZXNzYWdlcykge1xuICAgICAgY29uc29sZS5sb2coJ1twYXZsb3ZpYSAnICsgUGF2bG92aWFQbHVnaW4udmVyc2lvbiArICddJywgLi4ubWVzc2FnZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9mZmVyIGRhdGEgYXMgZG93bmxvYWQgaW4gdGhlIGJyb3dzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBiZSBkb3dubG9hZGVkXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIC0gdGhlIGRhdGFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHRoZSBNSU1FIHR5cGUgb2YgdGhlIGRhdGEsIGUuZy4gJ3RleHQvY3N2JyBvciAnYXBwbGljYXRpb24vanNvbidcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vZmZlckRhdGFGb3JEb3dubG9hZChmaWxlbmFtZSwgZGF0YSwgdHlwZSkge1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlIH0pO1xuXG4gICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbGVtID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZWxlbS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGVsZW0uZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgZWxlbS5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQbHVnaW4gdmVyc2lvbjpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgUGF2bG92aWFQbHVnaW4udmVyc2lvbiA9ICcyMDIyLjEuMSc7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXZsb3ZpYS5vcmcgY29uZmlndXJhdGlvbiAodXN1YWxseSByZWFkIGZyb20gdGhlIGNvbmZpZy5qc29uIGNvbmZpZ3VyYXRpb24gZmlsZSkuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayBmb3IgdGhlIGJlZm9yZXVubG9hZCBldmVudCwgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHBhcnRpY2lwYW50XG4gICAqIHRyaWVzIHRvIGxlYXZlIHRoZSBleHBlcmltZW50IGJ5IGNsb3NpbmcgdGhlIHRhYiBvciBicm93c2VyLlxuICAgKlxuICAgKiBAdHlwZSB7bnVsbH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIFBhdmxvdmlhUGx1Z2luLl9iZWZvcmV1bmxvYWRDYWxsYmFjayA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBzZXJ2ZXIgcGFyYW1ldGVycyAodGhvc2Ugc3RhcnRpbmcgd2l0aCBhIGRvdWJsZSB1bmRlcnNjb3JlKS5cbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIFBhdmxvdmlhUGx1Z2luLl9zZXJ2ZXJNc2cgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFBsdWdpbiBpbmZvcm1hdGlvbi5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgUGF2bG92aWFQbHVnaW4uaW5mbyA9IHtcbiAgICBuYW1lOiAncGF2bG92aWEnLFxuICAgIGRlc2NyaXB0aW9uOiAnY29tbXVuaWNhdGlvbiB3aXRoIHBhdmxvdmlhLm9yZycsXG4gICAgcGFyYW1ldGVyczoge1xuICAgICAgY29tbWFuZDoge1xuICAgICAgICB0eXBlOiBqc1BzeWNoLlBhcmFtZXRlclR5cGUuU1RSSU5HLFxuICAgICAgICBwcmV0dHlfbmFtZTogJ0NvbW1hbmQnLFxuICAgICAgICBkZWZhdWx0OiAnaW5pdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBhdmxvdmlhIGNvbW1hbmQ6IFwiaW5pdFwiIChkZWZhdWx0KSBvciBcImZpbmlzaFwiJyxcbiAgICAgIH0sXG4gICAgICBwYXJ0aWNpcGFudElkOiB7XG4gICAgICAgIHR5cGU6IGpzUHN5Y2guUGFyYW1ldGVyVHlwZS5TVFJJTkcsXG4gICAgICAgIHByZXR0eV9uYW1lOiAnUGFydGljaXBhbnQgSWQnLFxuICAgICAgICBkZWZhdWx0OiAnUEFSVElDSVBBTlQnLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnVGhlIHBhcnRpY2lwYW50IElkOiBcIlBBUlRJQ0lQQU5UXCIgKGRlZmF1bHQpIG9yIGFueSBzdHJpbmcnLFxuICAgICAgfSxcbiAgICAgIGVycm9yQ2FsbGJhY2s6IHtcbiAgICAgICAgdHlwZToganNQc3ljaC5QYXJhbWV0ZXJUeXBlLkZVTkNUSU9OLFxuICAgICAgICBwcmV0dHlfbmFtZTogJ0Vycm9yQ2FsbGJhY2snLFxuICAgICAgICBkZWZhdWx0OiBQYXZsb3ZpYVBsdWdpbi5kZWZhdWx0RXJyb3JDYWxsYmFjayxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ1RoZSBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbmV2ZXIgYW4gZXJyb3IgaGFzIG9jY3VycmVkJyxcbiAgICAgIH0sXG4gICAgICBkYXRhRmlsdGVyOiB7XG4gICAgICAgIHR5cGU6IGpzUHN5Y2guUGFyYW1ldGVyVHlwZS5GVU5DVElPTixcbiAgICAgICAgcHJldHR5X25hbWU6ICdEYXRhRmlsdGVyJyxcbiAgICAgICAgZGVmYXVsdDogUGF2bG92aWFQbHVnaW4uZGVmYXVsdERhdGFGaWx0ZXIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdUaGUgZmlsdGVyIGFwcGxpZWQgdG8gdGhlIGRhdGEgZ2F0aGVyZWQgYnkganNQc3ljaCBiZWZvcmUgdXBsb2FkIHRvIHRoZSBzZXJ2ZXInLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBQYXZsb3ZpYVBsdWdpbjtcbn0pKGpzUHN5Y2hNb2R1bGUpO1xuIl0sIm5hbWVzIjpbImpzUHN5Y2hQYXZsb3ZpYSIsImpzUHN5Y2giLCJQYXZsb3ZpYVBsdWdpbiIsIl9qc1BzeWNoIiwiZGlzcGxheV9lbGVtZW50IiwidHJpYWwiLCJjb21tYW5kIiwidG9Mb3dlckNhc2UiLCJfaW5pdCIsImRhdGEiLCJnZXQiLCJjc3YiLCJfZmluaXNoIiwiZXJyb3JDYWxsYmFjayIsImZpbmlzaFRyaWFsIiwiY29uZmlnVVJMIiwiX2NvbmZpZ3VyZSIsInJlc3BvbnNlIiwiX2NvbmZpZyIsImNvbmZpZyIsIl9sb2ciLCJfb3BlblNlc3Npb24iLCJfYmVmb3JldW5sb2FkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Vzc2lvbiIsInN0YXR1cyIsImV4cGVyaW1lbnQiLCJzYXZlSW5jb21wbGV0ZVJlc3VsdHMiLCJfc2F2ZSIsIl9jbG9zZVNlc3Npb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibXNnIiwiZGlzcGxheUVsZW1lbnQiLCJnZXREaXNwbGF5RWxlbWVudCIsImlubmVySFRNTCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsInN5bmMiLCJzZXJ2ZXJEYXRhIiwib3JpZ2luIiwiY29udGV4dCIsIl9nZXRDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvblJlc3BvbnNlIiwicHN5Y2hvSnNNYW5hZ2VyIiwicGF2bG92aWEiLCJVUkwiLCJ1cmxRdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJ1cmxQYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiaW5kZXhPZiIsIl9zZXJ2ZXJNc2ciLCJzZXQiLCJlcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5Iiwic2VydmVyUmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImZ1bGxwYXRoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImhhcyIsImFwcGVuZCIsInVybCIsImdpdGxhYiIsInByb2plY3RJZCIsImJvZHkiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2tlbiIsInN0YXR1czIiLCJzYXZlRm9ybWF0IiwiU3ltYm9sIiwibGljZW5zZSIsInJ1bk1vZGUiLCJpc0NvbXBsZXRlZCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJkYXRlIiwiRGF0ZSIsImRhdGVTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJuYW1lIiwicGFydGljaXBhbnRJZCIsImZpbHRlcmVkRGF0YSIsImRhdGFGaWx0ZXIiLCJfdXBsb2FkRGF0YSIsIl9vZmZlckRhdGFGb3JEb3dubG9hZCIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsImxvZyIsInZlcnNpb24iLCJmaWxlbmFtZSIsInR5cGUiLCJibG9iIiwiQmxvYiIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwiZWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJodG1sQ29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJNYXAiLCJpbmZvIiwiZGVzY3JpcHRpb24iLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyVHlwZSIsIlNUUklORyIsInByZXR0eV9uYW1lIiwiRlVOQ1RJT04iLCJkZWZhdWx0RXJyb3JDYWxsYmFjayIsImRlZmF1bHREYXRhRmlsdGVyIiwianNQc3ljaE1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=