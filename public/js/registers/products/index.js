/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/registers/products/index.js":
/*!********************************************************!*\
  !*** ./resources/js/pages/registers/products/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/request */ "./resources/js/utils/request.js");
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/alert */ "./resources/js/utils/alert.js");


$(function () {
  $('#products-list').DataTable({
    "scrollX": true,
    columnDefs: [{
      orderable: false,
      searchable: false,
      targets: [3]
    }]
  });
  $('body').on('click', '.btn-delete', function (e) {
    var t = $(e.currentTarget);
    _utils_alert__WEBPACK_IMPORTED_MODULE_1__["deleteConfirm"](null, function () {
      _utils_request__WEBPACK_IMPORTED_MODULE_0__["handle"](axios({
        method: 'delete',
        url: '/registers/products/' + t.data('id'),
        data: {}
      }), function () {
        _utils_alert__WEBPACK_IMPORTED_MODULE_1__["successReload"]('Placa removida.');
      });
    });
  });
});

/***/ }),

/***/ "./resources/js/utils/alert.js":
/*!*************************************!*\
  !*** ./resources/js/utils/alert.js ***!
  \*************************************/
/*! exports provided: error, warning, success, successReload, deleteConfirm, warningConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successReload", function() { return successReload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfirm", function() { return deleteConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningConfirm", function() { return warningConfirm; });
function error(message) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return $.alert({
    title: 'Erro',
    content: message,
    theme: 'modern',
    icon: 'fas fa-exclamation-circle',
    closeIcon: true,
    type: 'red',
    typeAnimated: true,
    draggable: false,
    buttons: {
      ok: {
        isHidden: true
      }
    },
    onClose: function onClose() {
      callback();
    }
  });
}
function warning(message) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return $.alert({
    title: 'Atenção',
    content: message,
    theme: 'modern',
    icon: 'fas fa-exclamation-triangle',
    closeIcon: true,
    type: 'orange',
    typeAnimated: true,
    draggable: false,
    buttons: {
      ok: {
        isHidden: true
      }
    },
    onClose: function onClose() {
      callback();
    }
  });
}
function success(message) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return $.alert({
    title: 'Sucesso',
    content: message,
    theme: 'modern',
    icon: 'fas fa-check-circle',
    closeIcon: true,
    type: 'green',
    typeAnimated: true,
    draggable: false,
    buttons: {
      ok: {
        isHidden: true
      }
    },
    onClose: function onClose() {
      callback();
    }
  });
}
function successReload(message) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return location.reload(true);
  };
  return $.alert({
    title: 'Sucesso',
    content: message,
    theme: 'modern',
    icon: 'fas fa-check-circle',
    type: 'green',
    typeAnimated: true,
    draggable: false,
    autoClose: 'autoReload|3000',
    buttons: {
      ok: {
        isHidden: true
      },
      autoReload: {
        text: "Atualizando página em...",
        action: function action() {
          return callback();
        }
      }
    }
  });
}
function deleteConfirm() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return $.confirm({
    title: 'Confirmação de Exclusão',
    content: !message ? 'Tem certeza que deseja realizar essa exclusão?' : message,
    theme: 'modern',
    icon: 'fas fa-exclamation-circle',
    closeIcon: true,
    type: 'red',
    typeAnimated: true,
    draggable: false,
    buttons: {
      confirm: {
        text: 'Excluir',
        btnClass: 'btn-danger',
        action: function action() {
          callback();
        }
      }
    },
    onClose: function onClose() {}
  });
}
function warningConfirm() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return $.confirm({
    title: 'Atenção',
    content: !message ? 'Tem certeza que deseja realizar essa ação?' : message,
    theme: 'modern',
    icon: 'fas fa-exclamation-triangle',
    closeIcon: true,
    type: 'orange' + '',
    typeAnimated: true,
    draggable: false,
    buttons: {
      confirm: {
        text: 'Confirmar',
        btnClass: 'btn-warning',
        action: function action() {
          callback();
        }
      }
    },
    onClose: function onClose() {}
  });
}

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
var load = function load(string) {
  $.LoadingOverlay(string);
};

/***/ }),

/***/ "./resources/js/utils/request.js":
/*!***************************************!*\
  !*** ./resources/js/utils/request.js ***!
  \***************************************/
/*! exports provided: handle, getFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormData", function() { return getFormData; });
/* harmony import */ var _requestHandlerExceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestHandlerExceptions */ "./resources/js/utils/requestHandlerExceptions.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./resources/js/utils/index.js");


var handle = function handle(promise, handler) {
  ___WEBPACK_IMPORTED_MODULE_1__["load"]('show');
  promise.then(function (data) {
    ___WEBPACK_IMPORTED_MODULE_1__["load"]('hide');
    handler(data);
  })["catch"](_requestHandlerExceptions__WEBPACK_IMPORTED_MODULE_0__["requestHandlerExceptions"])["finally"](function () {
    return ___WEBPACK_IMPORTED_MODULE_1__["load"]('hide');
  });
};
var getFormData = function getFormData($formEl) {
  var originalArray = $formEl.serializeArray();
  var formObject = {};
  originalArray.map(function (item) {
    var name = item.name,
        value = item.value;
    formObject[name] = value;
  });
  return formObject;
};

/***/ }),

/***/ "./resources/js/utils/requestHandlerExceptions.js":
/*!********************************************************!*\
  !*** ./resources/js/utils/requestHandlerExceptions.js ***!
  \********************************************************/
/*! exports provided: requestHandlerExceptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestHandlerExceptions", function() { return requestHandlerExceptions; });
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./resources/js/utils/alert.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var requestHandlerExceptions = function requestHandlerExceptions(error) {
  var _data$message;

  var response = error.response;
  var status = response.status,
      data = response.data;

  switch (status) {
    case 422:
      var errors = data.errors;
      var errorsClean = transformErrors(errors);
      var errorsHtml = errorsClean.join('</li><li>');
      _alert__WEBPACK_IMPORTED_MODULE_0__["warning"]("Existem erros de preenchimento no formul\xE1rio: <ul><li>".concat(errorsHtml, "</li></ul>"));
      break;

    case 404:
      _alert__WEBPACK_IMPORTED_MODULE_0__["error"]((_data$message = data.message) !== null && _data$message !== void 0 ? _data$message : 'Recurso não encontrado.');
      break;

    case 403:
      _alert__WEBPACK_IMPORTED_MODULE_0__["error"]('Você não possui permissão para acessar esta informação.', function () {
        return location.reload();
      });
      break;

    case 401:
      _alert__WEBPACK_IMPORTED_MODULE_0__["warning"]('Sua sessão expirou. Por favor, faça login novamente.', function () {
        return location.reload();
      });
      break;

    default:
      if (data.message !== undefined) {
        _alert__WEBPACK_IMPORTED_MODULE_0__["warning"](data.message);
      } else {
        _alert__WEBPACK_IMPORTED_MODULE_0__["error"]('Ocorreu um erro interno inesperado');
      }

  }
};

var transformErrors = function transformErrors(errors) {
  var keys = Object.keys(errors);
  var transformedErrors = [];
  keys.map(function (key) {
    var errorsKey = errors[key];
    transformedErrors = [].concat(_toConsumableArray(transformedErrors), _toConsumableArray(errorsKey));
  });
  return transformedErrors;
};

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** multi ./resources/js/pages/registers/products/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/order-management/resources/js/pages/registers/products/index.js */"./resources/js/pages/registers/products/index.js");


/***/ })

/******/ });