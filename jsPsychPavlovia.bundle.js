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
var jsPsychPavlovia = function jsPsychPavlovia(jsPsych) {
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
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UzFJLGNBQWMsQ0FBQzZJLGlCQUhkO0FBSVZQLFFBQUFBLFdBQVcsRUFDVDtBQUxRO0FBckJGO0FBSFEsR0FBdEI7QUFrQ0EsU0FBT3RJLGNBQVA7QUFDRCxDQTVuQk0sQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzdGVyb2lkLWF0dGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3Rlcm9pZC1hdHRhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzdGVyb2lkLWF0dGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzdGVyb2lkLWF0dGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzdGVyb2lkLWF0dGFjay8uL3NyYy9qc1BzeWNoUGF2bG92aWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBqc1BzeWNoIHBsdWdpbiAodmVyc2lvbiA+IDcuMCkgZm9yIHBhdmxvdmlhLm9yZ1xuICpcbiAqIFRoaXMgcGx1Z2luIGhhbmRsZXMgY29tbXVuaWNhdGlvbnMgd2l0aCB0aGUgcGF2bG92aWEub3JnIHNlcnZlcjogaXQgb3BlbnMgYW5kIGNsb3NlcyBzZXNzaW9ucyxcbiAqIGFuZCB1cGxvYWRzIGRhdGEgdG8gdGhlIHNlcnZlci5cbiAqXG4gKiBAYXV0aG9yIEFsYWluIFBpdGlvdFxuICogQHZlcnNpb24gMjAyMi4xLjFcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTctMjAyMCBJbGl4YSBMdGQuIChodHRwOi8vaWxpeGEuY29tKSAoYykgMjAyMC0yMDIxIE9wZW4gU2NpZW5jZSBUb29scyBMdGQuXG4gKiAgIChodHRwczovL29wZW5zY2llbmNldG9vbHMub3JnKVxuICogQGxpY2Vuc2UgRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgTGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCBqc1BzeWNoUGF2bG92aWEgPSAoanNQc3ljaCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqICoqcGF2bG92aWEqKlxuICAgKlxuICAgKiBUaGlzIHBsdWdpbiBoYW5kbGVzIGNvbW11bmljYXRpb25zIHdpdGggdGhlIHBhdmxvdmlhLm9yZyBzZXJ2ZXI6IGl0IG9wZW5zIGFuZCBjbG9zZXMgc2Vzc2lvbnMsXG4gICAqIGFuZCB1cGxvYWRzIGRhdGEgdG8gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQGF1dGhvciBBbGFpbiBQaXRpb3RcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9wYXZsb3ZpYS5vcmcvZG9jcy9leHBlcmltZW50cy9jcmVhdGUtanNQc3ljaCBSdW5uaW5nIGpzUHN5Y2ggZXhwZXJpbWVudHMgZnJvbSBQYXZsb3ZpYX1cbiAgICovXG4gIGNsYXNzIFBhdmxvdmlhUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3Rvcihqc1BzeWNoKSB7XG4gICAgICB0aGlzLl9qc1BzeWNoID0ganNQc3ljaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gdGhlIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRpc3BsYXlfZWxlbWVudCAtIHRoZSBIVE1MIERPTSBlbGVtZW50IHdoZXJlIGpzUHN5Y2ggY29udGVudFxuICAgICAqIFx0aXMgcmVuZGVyZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdHJpYWwgLSB0aGUganNQc3ljaCB0cmlhbFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBhc3luYyB0cmlhbChkaXNwbGF5X2VsZW1lbnQsIHRyaWFsKSB7XG4gICAgICAvLyBleGVjdXRlIHRoZSBjb21tYW5kOlxuICAgICAgc3dpdGNoICh0cmlhbC5jb21tYW5kLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgYXdhaXQgdGhpcy5faW5pdCh0cmlhbCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmluaXNoJzpcbiAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fanNQc3ljaC5kYXRhLmdldCgpLmNzdigpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuX2ZpbmlzaCh0cmlhbCwgZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0cmlhbC5lcnJvckNhbGxiYWNrKCd1bmtub3duIGNvbW1hbmQ6ICcgKyB0cmlhbC5jb21tYW5kKTtcbiAgICAgIH1cblxuICAgICAgLy8gZW5kIHRyaWFsXG4gICAgICB0aGlzLl9qc1BzeWNoLmZpbmlzaFRyaWFsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZXJyb3IgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBFcnJvciBtZXNzYWdlcyBhcmUgZGlzcGxheWVkIGluIHRoZSBib2R5IG9mIHRoZSBkb2N1bWVudCBhbmQgaW4gdGhlIGJyb3dzZXIncyBjb25zb2xlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yIC0gdGhlIGVycm9yIGpzb24gb2JqZWN0IHRvIGJlIGRpc3BsYXllZC5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRFcnJvckNhbGxiYWNrKGVycm9yKSB7XG4gICAgICAvLyBvdXRwdXQgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlOlxuICAgICAgY29uc29sZS5lcnJvcignW3BhdmxvdmlhICcgKyBQYXZsb3ZpYVBsdWdpbi52ZXJzaW9uICsgJ10nLCBlcnJvcik7XG5cbiAgICAgIC8vIG91dHB1dCB0aGUgZXJyb3IgdG8gdGhlIGh0bWwgYm9keTpcbiAgICAgIGxldCBodG1sQ29kZSA9XG4gICAgICAgICc8aDM+W2pzcHN5Y2gtcGF2bG92aWEgcGx1Z2luICcgK1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi52ZXJzaW9uICtcbiAgICAgICAgJ10gRXJyb3I8L2gzPjx1bD4nO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgJ2NvbnRleHQnIGluIGVycm9yKSB7XG4gICAgICAgICAgaHRtbENvZGUgKz0gJzxsaT4nICsgZXJyb3IuY29udGV4dCArICc8L2xpPic7XG4gICAgICAgICAgZXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sQ29kZSArPSAnPGxpPjxiPicgKyBlcnJvciArICc8L2I+PC9saT4nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBodG1sQ29kZSArPSAnPC91bD4nO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmlubmVySFRNTCA9IGh0bWxDb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGRhdGEgZmlsdGVyLCBhcHBsaWVkIHRvIHRoZSBkYXRhIGdhdGhlcmVkIGJ5IGpzUHN5Y2gsIGJlZm9yZSB0aGV5IGFyZVxuICAgICAqIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICpcbiAgICAgKiBUaGUgZmlsdGVyIHR5cGljYWxseSBwcnVuZXMgYW5kIHJlZm9ybWF0IGpzUHN5Y2guZGF0YS5nZXQoKS5jc3YoKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gaW5wdXQgZGF0YSwgdHlwaWNhbGx5IGZyb20ganNQc3ljaC5kYXRhLmdldCgpLmNzdigpXG4gICAgICogQHJldHVybnMgZmlsdGVyZWQgZGF0YSwgcmVhZHkgZm9yIHVwbG9hZCB0byB0aGUgc2VydmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0RGF0YUZpbHRlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBjb25uZWN0aW9uIHdpdGggcGF2bG92aWEub3JnOiBjb25maWd1cmUgdGhlIHBsdWdpbiBhbmQgb3BlbiBhIG5ldyBzZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRyaWFsIC0gdGhlIGpzUHN5Y2ggdHJpYWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZ1VSTD0gXCJjb25maWcuanNvblwiXSAtIHRoZSBVUkwgb2YgdGhlIHBhdmxvdmlhLm9yZyBqc29uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2luaXQodHJpYWwsIGNvbmZpZ1VSTCA9ICdjb25maWcuanNvbicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbmZpZ3VyZTpcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fY29uZmlndXJlKGNvbmZpZ1VSTCk7XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcgPSByZXNwb25zZS5jb25maWc7XG4gICAgICAgIHRoaXMuX2xvZygnaW5pdCB8IF9jb25maWd1cmUucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuXG4gICAgICAgIC8vIG9wZW4gYSBuZXcgc2Vzc2lvbjpcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9vcGVuU2Vzc2lvbigpO1xuICAgICAgICAvLyBfY29uZmlnLmV4cGVyaW1lbnQudG9rZW4gPSByZXNwb25zZS50b2tlbjtcbiAgICAgICAgdGhpcy5fbG9nKCdpbml0IHwgX29wZW5TZXNzaW9uLnJlc3BvbnNlPScsIHJlc3BvbnNlKTtcblxuICAgICAgICAvLyB3YXJuIHRoZSB1c2VyIHdoZW4gdGhleSBhdHRlbXB0IHRvIGNsb3NlIHRoZSB0YWIgb3IgYnJvd3NlcjpcbiAgICAgICAgY29uc3QgX2JlZm9yZXVubG9hZENhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgLy8gcHJldmVudERlZmF1bHQgc2hvdWxkIGVuc3VyZSB0aGF0IHRoZSB1c2VyIGdldHMgcHJvbXB0ZWQ6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIC8vIENocm9tZSByZXF1aXJlcyByZXR1cm5WYWx1ZSB0byBiZSBzZXQ6XG4gICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSAnJztcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIF9iZWZvcmV1bmxvYWRDYWxsYmFjayk7XG5cbiAgICAgICAgLy8gd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIHRhYiBvciBicm93c2VyLCB3ZSBhdHRlbXB0IHRvIGNsb3NlIHRoZSBzZXNzaW9uXG4gICAgICAgIC8vIGFuZCBvcHRpb25hbGx5IHNhdmUgdGhlIHJlc3VsdHNcbiAgICAgICAgLy8gbm90ZTogd2UgY29tbXVuaWNhdGUgd2l0aCB0aGUgc2VydmVyIHVzaW5nIHRoZSBCZWFjb24gQVBJXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnN0YXR1cyA9PT0gJ09QRU4nKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW5kIHNhdmUgdGhlIGluY29tcGxldGUgcmVzdWx0cyBpZiBuZWVkIGJlOlxuICAgICAgICAgICAgaWYgKFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zYXZlSW5jb21wbGV0ZVJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2pzUHN5Y2guZGF0YS5nZXQoKS5jc3YoKTtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZSh0cmlhbCwgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBzZXNzaW9uOlxuICAgICAgICAgICAgdGhpcy5fY2xvc2VTZXNzaW9uKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdHJpYWwuZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluaXNoIHRoZSBjb25uZWN0aW9uIHdpdGggcGF2bG92aWEub3JnOiB1cGxvYWQgdGhlIGNvbGxlY3RlZCBkYXRhIGFuZCBjbG9zZSB0aGUgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0cmlhbCAtIHRoZSBqc1BzeWNoIHRyaWFsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSB0aGUgZXhwZXJpbWVudCBkYXRhIHRvIGJlIHVwbG9hZGVkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfZmluaXNoKHRyaWFsLCBkYXRhKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyByZW1vdmUgdGhlIGJlZm9yZXVubG9hZCBsaXN0ZW5lcjpcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2JlZm9yZXVubG9hZCcsXG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2JlZm9yZXVubG9hZENhbGxiYWNrXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gdGVsbCB0aGUgcGFydGljaXBhbnQgdGhhdCB0aGUgZGF0YSBpcyBiZWluZyB1cGxvYWRlZDpcbiAgICAgICAgY29uc3QgbXNnID1cbiAgICAgICAgICAnUGxlYXNlIHdhaXQgYSBtb21lbnQgd2hpbGUgdGhlIGRhdGEgYXJlIHVwbG9hZGVkIHRvIHRoZSBwYXZsb3ZpYS5vcmcgc2VydmVyLi4uJztcbiAgICAgICAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSB0aGlzLl9qc1BzeWNoLmdldERpc3BsYXlFbGVtZW50KCk7XG4gICAgICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9ICc8cHJlIGlkPVwicGF2bG92aWEtZGF0YS11cGxvYWRcIj48L3ByZT4nO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF2bG92aWEtZGF0YS11cGxvYWQnKS50ZXh0Q29udGVudCA9IG1zZztcblxuICAgICAgICAvLyB1cGxvYWQgdGhlIGRhdGEgdG8gcGF2bG92aWEub3JnOlxuICAgICAgICBjb25zdCBzeW5jID0gdHlwZW9mIHRyaWFsLnN5bmMgIT09ICd1bmRlZmluZWQnID8gdHJpYWwuc3luYyA6IGZhbHNlO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9zYXZlKHRyaWFsLCBkYXRhLCBzeW5jKTtcbiAgICAgICAgdGhpcy5fbG9nKCdmaW5pc2ggfCBfc2F2ZS5yZXNwb25zZT0nLCByZXNwb25zZSk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGVycm9yczpcbiAgICAgICAgaWYgKCdzZXJ2ZXJEYXRhJyBpbiByZXNwb25zZSAmJiAnZXJyb3InIGluIHJlc3BvbnNlLnNlcnZlckRhdGEpIHtcbiAgICAgICAgICB0aHJvdyByZXNwb25zZS5zZXJ2ZXJEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgdGhlIHNlc3Npb246XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fY2xvc2VTZXNzaW9uKHRydWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fbG9nKCdmaW5pc2ggfCBfY2xvc2VTZXNzaW9uLnJlc3BvbnNlPScsIHJlc3BvbnNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRyaWFsLmVycm9yQ2FsbGJhY2soZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSB0aGUgcGx1Z2luIGJ5IHJlYWRpbmcgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBjcmVhdGVkIHVwb24gYWN0aXZhdGlvblxuICAgICAqIG9mIHRoZSBleHBlcmltZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWdVUkw9IFwiY29uZmlnLmpzb25cIl0gLSB0aGUgVVJMIG9mIHRoZSBwYXZsb3ZpYS5vcmcganNvblxuICAgICAqIFx0Y29uZmlndXJhdGlvbiBmaWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9jb25maWd1cmUoY29uZmlnVVJMKSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yaWdpbjogJ19jb25maWd1cmUnLFxuICAgICAgICBjb250ZXh0OiAnd2hlbiBjb25maWd1cmluZyB0aGUgcGx1Z2luJyxcbiAgICAgIH07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb25SZXNwb25zZSA9IGF3YWl0IHRoaXMuX2dldENvbmZpZ3VyYXRpb24oY29uZmlnVVJMKTtcblxuICAgICAgICAvLyBsZWdhY3kgZXhwZXJpbWVudHMgaGFkIGEgcHN5Y2hvSnNNYW5hZ2VyIGJsb2NrIGluc3RlYWQgb2YgYSBwYXZsb3ZpYSBibG9jaywgYW5kIHRoZSBVUkxcbiAgICAgICAgLy8gcG9pbnRlZCB0byBodHRwczovL3BhdmxvdmlhLm9yZy9zZXJ2ZXJcbiAgICAgICAgaWYgKCdwc3ljaG9Kc01hbmFnZXInIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcpIHtcbiAgICAgICAgICBkZWxldGUgY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5wc3ljaG9Kc01hbmFnZXI7XG4gICAgICAgICAgY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5wYXZsb3ZpYSA9IHtcbiAgICAgICAgICAgIFVSTDogJ2h0dHBzOi8vcGF2bG92aWEub3JnJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGVzdHMgZm9yIHRoZSBwcmVzZW5jZSBvZiBlc3NlbnRpYWwgYmxvY2tzIGluIHRoZSBjb25maWd1cmF0aW9uOlxuICAgICAgICBpZiAoISgnZXhwZXJpbWVudCcgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZykpIHtcbiAgICAgICAgICB0aHJvdyAnbWlzc2luZyBleHBlcmltZW50IGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCduYW1lJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLmV4cGVyaW1lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgJ21pc3NpbmcgbmFtZSBpbiBleHBlcmltZW50IGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCdmdWxscGF0aCcgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5leHBlcmltZW50KSkge1xuICAgICAgICAgIHRocm93ICdtaXNzaW5nIGZ1bGxwYXRoIGluIGV4cGVyaW1lbnQgYmxvY2sgaW4gY29uZmlndXJhdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ3BhdmxvdmlhJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnKSkge1xuICAgICAgICAgIHRocm93ICdtaXNzaW5nIHBhdmxvdmlhIGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCdVUkwnIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcucGF2bG92aWEpKSB7XG4gICAgICAgICAgdGhyb3cgJ21pc3NpbmcgVVJMIGluIHBhdmxvdmlhIGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBzZXJ2ZXIgcGFyYW1ldGVycyAodGhvc2Ugc3RhcnRpbmcgd2l0aCBhIGRvdWJsZSB1bmRlcnNjb3JlKTpcbiAgICAgICAgY29uc3QgdXJsUXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpO1xuICAgICAgICBjb25zdCB1cmxQYXJhbWV0ZXJzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmxRdWVyeSk7XG4gICAgICAgIHVybFBhcmFtZXRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignX18nKSA9PT0gMCkge1xuICAgICAgICAgICAgUGF2bG92aWFQbHVnaW4uX3NlcnZlck1zZy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29uZmlndXJhdGlvblJlc3BvbnNlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgeyAuLi5yZXNwb25zZSwgZXJyb3IgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhdmxvdmlhLm9yZyBqc29uIGNvbmZpZ3VyYXRpb24gZmlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdVUkwgLSB0aGUgVVJMIG9mIHRoZSBwYXZsb3ZpYS5vcmcganNvbiBjb25maWd1cmF0aW9uIGZpbGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldENvbmZpZ3VyYXRpb24oY29uZmlnVVJMKSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yaWdpbjogJ19nZXRDb25maWd1cmF0aW9uJyxcbiAgICAgICAgY29udGV4dDogJ3doZW4gcmVhZGluZyB0aGUgY29uZmlndXJhdGlvbiBmaWxlOiAnICsgY29uZmlnVVJMLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29uZmlnVVJMLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgcmVzb2x2ZSh7IC4uLnJlc3BvbnNlLCBjb25maWc6IHNlcnZlckRhdGEgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KHsgLi4ucmVzcG9uc2UsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGEgbmV3IHNlc3Npb24gZm9yIHRoaXMgZXhwZXJpbWVudCBvbiBwYXZsb3ZpYS5vcmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29wZW5TZXNzaW9uKCkge1xuICAgICAgbGV0IHJlc3BvbnNlID0ge1xuICAgICAgICBvcmlnaW46ICdfb3BlblNlc3Npb24nLFxuICAgICAgICBjb250ZXh0OlxuICAgICAgICAgICd3aGVuIG9wZW5pbmcgYSBzZXNzaW9uIGZvciBleHBlcmltZW50OiAnICtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuZnVsbHBhdGgsXG4gICAgICB9O1xuXG4gICAgICAvLyBwcmVwYXJlIGEgUE9TVCBxdWVyeTpcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBpZiAoUGF2bG92aWFQbHVnaW4uX3NlcnZlck1zZy5oYXMoJ19fcGlsb3RUb2tlbicpKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAncGlsb3RUb2tlbicsXG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX3NlcnZlck1zZy5nZXQoJ19fcGlsb3RUb2tlbicpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIHF1ZXJ5IHBhdmxvdmlhIHNlcnZlcjpcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke1BhdmxvdmlhUGx1Z2luLl9jb25maWcucGF2bG92aWEuVVJMfS9hcGkvdjIvZXhwZXJpbWVudHMvJHtQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmdpdGxhYi5wcm9qZWN0SWR9L3Nlc3Npb25zYDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgLy8gY2hlY2sgZm9yIHJlcXVpcmVkIGF0dHJpYnV0ZXM6XG4gICAgICAgICAgaWYgKCEoJ3Rva2VuJyBpbiBzZXJ2ZXJEYXRhKSkge1xuICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6ICd1bmV4cGVjdGVkIGFuc3dlciBmcm9tIHNlcnZlcjogbm8gdG9rZW4nLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoJ2V4cGVyaW1lbnQnIGluIHNlcnZlckRhdGEpKSB7XG4gICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ3VuZXhwZWN0ZWQgYW5zd2VyIGZyb20gc2VydmVyOiBubyBleHBlcmltZW50JyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdXBkYXRlIHRoZSBjb25maWd1cmF0aW9uOlxuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbiA9IHtcbiAgICAgICAgICAgIHRva2VuOiBzZXJ2ZXJEYXRhLnRva2VuLFxuICAgICAgICAgICAgc3RhdHVzOiAnT1BFTicsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc3RhdHVzID1cbiAgICAgICAgICAgIHNlcnZlckRhdGEuZXhwZXJpbWVudC5zdGF0dXMyO1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zYXZlRm9ybWF0ID0gU3ltYm9sLmZvcihcbiAgICAgICAgICAgIHNlcnZlckRhdGEuZXhwZXJpbWVudC5zYXZlRm9ybWF0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc2F2ZUluY29tcGxldGVSZXN1bHRzID1cbiAgICAgICAgICAgIHNlcnZlckRhdGEuZXhwZXJpbWVudC5zYXZlSW5jb21wbGV0ZVJlc3VsdHM7XG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LmxpY2Vuc2UgPVxuICAgICAgICAgICAgc2VydmVyRGF0YS5leHBlcmltZW50LmxpY2Vuc2U7XG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5ydW5Nb2RlID0gc2VydmVyRGF0YS5leHBlcmltZW50LnJ1bk1vZGU7XG5cbiAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwge1xuICAgICAgICAgICAgICB0b2tlbjogc2VydmVyRGF0YS50b2tlbixcbiAgICAgICAgICAgICAgc3RhdHVzOiBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQuc3RhdHVzMixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICByZWplY3QoeyAuLi5yZXNwb25zZSwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBwcmV2aW91c2x5IG9wZW5lZCBzZXNzaW9uIG9uIHBhdmxvdmlhLm9yZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDb21wbGV0ZWQgLSB3aGV0aGVyIG9yIG5vdCB0aGUgcGFydGljaXBhbnQgY29tcGxldGVkIHRoZSBleHBlcmltZW50XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc3luYyA9IGZhbHNlXSAtIHdoZXRoZXIgb3Igbm90IHRvIHVzZSB0aGUgQmVhY29uIEFQSSB0byBjb21tdW5pY2F0ZVxuICAgICAqIFx0d2l0aCB0aGUgc2VydmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2xvc2VTZXNzaW9uKGlzQ29tcGxldGVkID0gdHJ1ZSwgc3luYyA9IGZhbHNlKSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yaWdpbjogJ19jbG9zZVNlc3Npb24nLFxuICAgICAgICBjb250ZXh0OlxuICAgICAgICAgICd3aGVuIGNsb3NpbmcgdGhlIHNlc3Npb24gZm9yIGV4cGVyaW1lbnQ6ICcgK1xuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5mdWxscGF0aCxcbiAgICAgIH07XG5cbiAgICAgIC8vIHByZXBhcmUgYSBERUxFVEUgcXVlcnk6XG4gICAgICBjb25zdCB1cmwgPVxuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnBhdmxvdmlhLlVSTCArXG4gICAgICAgICcvYXBpL3YyL2V4cGVyaW1lbnRzLycgK1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmdpdGxhYi5wcm9qZWN0SWQgK1xuICAgICAgICAnL3Nlc3Npb25zLycgK1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnNlc3Npb24udG9rZW47XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpc0NvbXBsZXRlZCcsIGlzQ29tcGxldGVkKTtcblxuICAgICAgLy8gc3luY2hyb25vdXNseSBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsICsgJy9kZWxldGUnLCBmb3JtRGF0YSk7XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbi5zdGF0dXMgPSAnQ0xPU0VEJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFzeW5jaHJvbm91c2x5IHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSBhd2FpdCBzZXJ2ZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbi5zdGF0dXMgPSAnQ0xPU0VEJztcbiAgICAgICAgICAgIHJlc29sdmUoT2JqZWN0LmFzc2lnbihyZXNwb25zZSwgeyBzZXJ2ZXJEYXRhIH0pKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZWplY3QoeyAuLi5yZXNwb25zZSwgZXJyb3IgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGxvYWQgZGF0YSB0byB0aGUgcGF2bG92aWEub3JnIHNlcnZlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0cmlhbCAtIHRoZSBqc1BzeWNoIHRyaWFsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSB0aGUgZXhwZXJpbWVudCBkYXRhIHRvIGJlIHVwbG9hZGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc3luYyA9IGZhbHNlXSAtIHdoZXRoZXIgb3Igbm90IHRvIHVzZSB0aGUgQmVhY29uIEFQSSB0byBjb21tdW5pY2F0ZVxuICAgICAqIFx0d2l0aCB0aGUgc2VydmVyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX3NhdmUodHJpYWwsIGRhdGEsIHN5bmMgPSBmYWxzZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZGF0ZVN0cmluZyA9XG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgICAgICctJyArXG4gICAgICAgICgnMCcgKyAoMSArIGRhdGUuZ2V0TW9udGgoKSkpLnNsaWNlKC0yKSArXG4gICAgICAgICctJyArXG4gICAgICAgICgnMCcgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgJ18nO1xuICAgICAgZGF0ZVN0cmluZyArPVxuICAgICAgICAoJzAnICsgZGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMikgK1xuICAgICAgICAnaCcgK1xuICAgICAgICAoJzAnICsgZGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICcuJyArXG4gICAgICAgICgnMCcgKyBkYXRlLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgJy4nICtcbiAgICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcblxuICAgICAgY29uc3Qga2V5ID1cbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50Lm5hbWUgK1xuICAgICAgICAnXycgK1xuICAgICAgICB0cmlhbC5wYXJ0aWNpcGFudElkICtcbiAgICAgICAgJ18nICtcbiAgICAgICAgJ1NFU1NJT04nICtcbiAgICAgICAgJ18nICtcbiAgICAgICAgZGF0ZVN0cmluZyArXG4gICAgICAgICcuY3N2JztcbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRyaWFsLmRhdGFGaWx0ZXIoZGF0YSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LnN0YXR1cyA9PT0gJ1JVTk5JTkcnICYmXG4gICAgICAgICFQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLmhhcygnX19waWxvdFRva2VuJylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fdXBsb2FkRGF0YShrZXksIGZpbHRlcmVkRGF0YSwgc3luYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vZmZlckRhdGFGb3JEb3dubG9hZChrZXksIGZpbHRlcmVkRGF0YSwgJ3RleHQvY3N2Jyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb3JpZ2luOiAnX3NhdmUnLFxuICAgICAgICAgIGNvbnRleHQ6XG4gICAgICAgICAgICAnd2hlbiBzYXZpbmcgcmVzdWx0cyBmb3IgZXhwZXJpbWVudDogJyArXG4gICAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuZnVsbHBhdGgsXG4gICAgICAgICAgbWVzc2FnZTogJ29mZmVyZWQgdGhlIC5jc3YgZmlsZSBmb3IgZG93bmxvYWQnLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwbG9hZCBkYXRhIChhIGtleS92YWx1ZSBwYWlyKSB0byBwYXZsb3ZpYS5vcmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGtleVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N5bmMgPSBmYWxzZV0gLSB3aGV0aGVyIG9yIG5vdCB0byB1cGxvYWQgdGhlIGRhdGEgdXNpbmcgdGhlIEJlYWNvbiBBUElcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwbG9hZERhdGEoa2V5LCB2YWx1ZSwgc3luYyA9IGZhbHNlKSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yaWdpbjogJ191cGxvYWREYXRhJyxcbiAgICAgICAgY29udGV4dDpcbiAgICAgICAgICBcIndoZW4gdXBsb2FkaW5nIHBhcnRpY2lwYW50JyByZXN1bHRzIGZvciBleHBlcmltZW50OiBcIiArXG4gICAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LmZ1bGxwYXRoLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdXJsID1cbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5wYXZsb3ZpYS5VUkwgK1xuICAgICAgICAnL2FwaS92Mi9leHBlcmltZW50cy8nICtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5naXRsYWIucHJvamVjdElkICtcbiAgICAgICAgJy9zZXNzaW9ucy8nICtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnRva2VuICtcbiAgICAgICAgJy9yZXN1bHRzJztcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgna2V5Jywga2V5KTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmFsdWUnLCB2YWx1ZSk7XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzIHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICBpZiAoc3luYykge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGZvcm1EYXRhKTtcbiAgICAgIH1cbiAgICAgIC8vIGFzeW5jaHJvbm91c2x5IHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHNlcnZlclJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgcmVzb2x2ZShPYmplY3QuYXNzaWduKHJlc3BvbnNlLCB7IHNlcnZlckRhdGEgfSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdCh7IC4uLnJlc3BvbnNlLCBlcnJvciB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBtZXNzYWdlcyB0byB0aGUgYnJvd3NlcidzIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gey4uLip9IG1lc3NhZ2VzIC0gdGhlIG1lc3NhZ2VzIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlcidzIGNvbnNvbGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9sb2coLi4ubWVzc2FnZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbcGF2bG92aWEgJyArIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gKyAnXScsIC4uLm1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPZmZlciBkYXRhIGFzIGRvd25sb2FkIGluIHRoZSBicm93c2VyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gYmUgZG93bmxvYWRlZFxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHRoZSBkYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0aGUgTUlNRSB0eXBlIG9mIHRoZSBkYXRhLCBlLmcuICd0ZXh0L2Nzdicgb3IgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb2ZmZXJEYXRhRm9yRG93bmxvYWQoZmlsZW5hbWUsIGRhdGEsIHR5cGUpIHtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZSB9KTtcblxuICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGVsZW0uaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBlbGVtLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIGVsZW0uY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGx1Z2luIHZlcnNpb246XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gPSAnMjAyMi4xLjEnO1xuXG4gIC8qKlxuICAgKiBUaGUgcGF2bG92aWEub3JnIGNvbmZpZ3VyYXRpb24gKHVzdWFsbHkgcmVhZCBmcm9tIHRoZSBjb25maWcuanNvbiBjb25maWd1cmF0aW9uIGZpbGUpLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgZm9yIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQsIHdoaWNoIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBwYXJ0aWNpcGFudFxuICAgKiB0cmllcyB0byBsZWF2ZSB0aGUgZXhwZXJpbWVudCBieSBjbG9zaW5nIHRoZSB0YWIgb3IgYnJvd3Nlci5cbiAgICpcbiAgICogQHR5cGUge251bGx9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBQYXZsb3ZpYVBsdWdpbi5fYmVmb3JldW5sb2FkQ2FsbGJhY2sgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgc2VydmVyIHBhcmFtZXRlcnMgKHRob3NlIHN0YXJ0aW5nIHdpdGggYSBkb3VibGUgdW5kZXJzY29yZSkuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBQbHVnaW4gaW5mb3JtYXRpb24uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFBhdmxvdmlhUGx1Z2luLmluZm8gPSB7XG4gICAgbmFtZTogJ3BhdmxvdmlhJyxcbiAgICBkZXNjcmlwdGlvbjogJ2NvbW11bmljYXRpb24gd2l0aCBwYXZsb3ZpYS5vcmcnLFxuICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgdHlwZToganNQc3ljaC5QYXJhbWV0ZXJUeXBlLlNUUklORyxcbiAgICAgICAgcHJldHR5X25hbWU6ICdDb21tYW5kJyxcbiAgICAgICAgZGVmYXVsdDogJ2luaXQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBwYXZsb3ZpYSBjb21tYW5kOiBcImluaXRcIiAoZGVmYXVsdCkgb3IgXCJmaW5pc2hcIicsXG4gICAgICB9LFxuICAgICAgcGFydGljaXBhbnRJZDoge1xuICAgICAgICB0eXBlOiBqc1BzeWNoLlBhcmFtZXRlclR5cGUuU1RSSU5HLFxuICAgICAgICBwcmV0dHlfbmFtZTogJ1BhcnRpY2lwYW50IElkJyxcbiAgICAgICAgZGVmYXVsdDogJ1BBUlRJQ0lQQU5UJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ1RoZSBwYXJ0aWNpcGFudCBJZDogXCJQQVJUSUNJUEFOVFwiIChkZWZhdWx0KSBvciBhbnkgc3RyaW5nJyxcbiAgICAgIH0sXG4gICAgICBlcnJvckNhbGxiYWNrOiB7XG4gICAgICAgIHR5cGU6IGpzUHN5Y2guUGFyYW1ldGVyVHlwZS5GVU5DVElPTixcbiAgICAgICAgcHJldHR5X25hbWU6ICdFcnJvckNhbGxiYWNrJyxcbiAgICAgICAgZGVmYXVsdDogUGF2bG92aWFQbHVnaW4uZGVmYXVsdEVycm9yQ2FsbGJhY2ssXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW5ldmVyIGFuIGVycm9yIGhhcyBvY2N1cnJlZCcsXG4gICAgICB9LFxuICAgICAgZGF0YUZpbHRlcjoge1xuICAgICAgICB0eXBlOiBqc1BzeWNoLlBhcmFtZXRlclR5cGUuRlVOQ1RJT04sXG4gICAgICAgIHByZXR0eV9uYW1lOiAnRGF0YUZpbHRlcicsXG4gICAgICAgIGRlZmF1bHQ6IFBhdmxvdmlhUGx1Z2luLmRlZmF1bHREYXRhRmlsdGVyLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAnVGhlIGZpbHRlciBhcHBsaWVkIHRvIHRoZSBkYXRhIGdhdGhlcmVkIGJ5IGpzUHN5Y2ggYmVmb3JlIHVwbG9hZCB0byB0aGUgc2VydmVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUGF2bG92aWFQbHVnaW47XG59O1xuIl0sIm5hbWVzIjpbImpzUHN5Y2hQYXZsb3ZpYSIsImpzUHN5Y2giLCJQYXZsb3ZpYVBsdWdpbiIsIl9qc1BzeWNoIiwiZGlzcGxheV9lbGVtZW50IiwidHJpYWwiLCJjb21tYW5kIiwidG9Mb3dlckNhc2UiLCJfaW5pdCIsImRhdGEiLCJnZXQiLCJjc3YiLCJfZmluaXNoIiwiZXJyb3JDYWxsYmFjayIsImZpbmlzaFRyaWFsIiwiY29uZmlnVVJMIiwiX2NvbmZpZ3VyZSIsInJlc3BvbnNlIiwiX2NvbmZpZyIsImNvbmZpZyIsIl9sb2ciLCJfb3BlblNlc3Npb24iLCJfYmVmb3JldW5sb2FkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Vzc2lvbiIsInN0YXR1cyIsImV4cGVyaW1lbnQiLCJzYXZlSW5jb21wbGV0ZVJlc3VsdHMiLCJfc2F2ZSIsIl9jbG9zZVNlc3Npb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibXNnIiwiZGlzcGxheUVsZW1lbnQiLCJnZXREaXNwbGF5RWxlbWVudCIsImlubmVySFRNTCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsInN5bmMiLCJzZXJ2ZXJEYXRhIiwib3JpZ2luIiwiY29udGV4dCIsIl9nZXRDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvblJlc3BvbnNlIiwicHN5Y2hvSnNNYW5hZ2VyIiwicGF2bG92aWEiLCJVUkwiLCJ1cmxRdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJ1cmxQYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiaW5kZXhPZiIsIl9zZXJ2ZXJNc2ciLCJzZXQiLCJlcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5Iiwic2VydmVyUmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImZ1bGxwYXRoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImhhcyIsImFwcGVuZCIsInVybCIsImdpdGxhYiIsInByb2plY3RJZCIsImJvZHkiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2tlbiIsInN0YXR1czIiLCJzYXZlRm9ybWF0IiwiU3ltYm9sIiwibGljZW5zZSIsInJ1bk1vZGUiLCJpc0NvbXBsZXRlZCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJkYXRlIiwiRGF0ZSIsImRhdGVTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJuYW1lIiwicGFydGljaXBhbnRJZCIsImZpbHRlcmVkRGF0YSIsImRhdGFGaWx0ZXIiLCJfdXBsb2FkRGF0YSIsIl9vZmZlckRhdGFGb3JEb3dubG9hZCIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsImxvZyIsInZlcnNpb24iLCJmaWxlbmFtZSIsInR5cGUiLCJibG9iIiwiQmxvYiIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwiZWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJodG1sQ29kZSIsInF1ZXJ5U2VsZWN0b3IiLCJNYXAiLCJpbmZvIiwiZGVzY3JpcHRpb24iLCJwYXJhbWV0ZXJzIiwiUGFyYW1ldGVyVHlwZSIsIlNUUklORyIsInByZXR0eV9uYW1lIiwiRlVOQ1RJT04iLCJkZWZhdWx0RXJyb3JDYWxsYmFjayIsImRlZmF1bHREYXRhRmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==