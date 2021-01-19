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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/registers/clients/form.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/registers/clients/form.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/alert */ "./resources/js/utils/alert.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/request */ "./resources/js/utils/request.js");


$(function () {
  $('#client-addresses-list').DataTable({
    "scrollX": true
  });
  $('#client-addresses .btn-warning').on('click', function (e) {
    var id = $(e.currentTarget).data('id');
    _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
      method: 'get',
      url: '/registers/addresses/' + id + '/edit',
      data: {}
    }), function (res) {
      $.confirm({
        title: 'Editar Endereço',
        content: '<div class="container">' + res.data + '</div>',
        icon: 'fas fa-edit',
        columnClass: 'col-12',
        closeIcon: true,
        type: 'orange',
        typeAnimated: true,
        draggable: false,
        buttons: {
          confirm: {
            text: 'Salvar',
            btnClass: 'btn-orange',
            action: function action() {
              var form = this.$content.find('#address-form');
              var formData = _utils_request__WEBPACK_IMPORTED_MODULE_1__["getFormData"](form);
              formData.zipcode = formData.zipcode.replace(/([.-])+/g, '');
              _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
                method: 'put',
                url: '/registers/addresses/' + id,
                data: formData
              }), function () {
                _utils_alert__WEBPACK_IMPORTED_MODULE_0__["successReload"]('Endereço atualizado.');
              });
            }
          }
        },
        onClose: function onClose() {},
        onContentReady: function onContentReady() {
          this.$content.find('#zipcode').mask('00.000-000');
          this.$content.find('#addressable-type').val('App\\Models\\Client');
          this.$content.find('#addressable-id').val($('#client-id').val());
        }
      });
    });
  });
  $('#client-addresses  .btn-danger').on('click', function (e) {
    var id = $(e.currentTarget).data('id');
    _utils_alert__WEBPACK_IMPORTED_MODULE_0__["deleteConfirm"](null, function () {
      _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
        method: 'delete',
        url: '/registers/addresses/' + id,
        data: {}
      }), function () {
        _utils_alert__WEBPACK_IMPORTED_MODULE_0__["successReload"]('Endereço removido.');
      });
    });
  });
  $('#client-addresses .btn-success').on('click', function () {
    _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
      method: 'get',
      url: '/registers/addresses/create',
      data: {}
    }), function (res) {
      $.confirm({
        title: 'Novo Endereço',
        content: res.data,
        icon: 'fas fa-plus',
        columnClass: 'col-12',
        closeIcon: true,
        type: 'green',
        typeAnimated: true,
        draggable: false,
        buttons: {
          confirm: {
            text: 'Salvar',
            btnClass: 'btn-green',
            action: function action() {
              var form = this.$content.find('#address-form');
              var formData = _utils_request__WEBPACK_IMPORTED_MODULE_1__["getFormData"](form);
              formData.zipcode = formData.zipcode.replace(/([.-])+/g, '').trim();
              _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
                method: 'post',
                url: '/registers/addresses',
                data: formData
              }), function () {
                _utils_alert__WEBPACK_IMPORTED_MODULE_0__["successReload"]('Endereço criado.');
              });
            }
          }
        },
        onClose: function onClose() {},
        onContentReady: function onContentReady() {
          this.$content.find('#zipcode').mask('00.000-000');
          this.$content.find('#addressable-type').val('App\\Models\\Client');
          this.$content.find('#addressable-id').val($('#client-id').val());
        }
      });
    });
  });
  $(document).on('blur', '#zipcode', function (e) {
    var t = $(e.currentTarget);
    var zipcode = t.val();
    zipcode = zipcode.replace(/([.-])+/g, '').trim();

    if (zipcode != '') {
      _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
        method: 'get',
        url: '/registers/addresses/get-by-zipcode/' + zipcode,
        data: {}
      }), function (res) {
        var data = res.data;
        $('#state-id').val(data.state_id);
        loadCitiesByState(data.state_id, data.city_id);
        $('#district').val(data.district);
        $('#street').val(data.street);
      });
    }
  });
  $(document).on('change', '#state-id', function (e) {
    var t = $(e.currentTarget);
    var id = t.val();
    loadCitiesByState(id);
    $('body #zipcode').val('');
    $('body #district').val('');
    $('body #street').val('');
    $('body #number').val('');
    $('body #complement').val('');
  });
  showTradingNameBox();
  registerNumberMask();
  $('#person-type-id').on('change', function () {
    showTradingNameBox();
    registerNumberMask();
  });
  $('#client-edit-form').on('submit', function (e) {
    e.preventDefault();
    var form = _utils_request__WEBPACK_IMPORTED_MODULE_1__["getFormData"]($(e.currentTarget));
    form.register_number = form.register_number.replace(/([./-])+/g, '');
    var requestData;

    if ($('#client-id').val() != undefined) {
      requestData = {
        method: 'put',
        url: '/registers/clients/' + $('#client-id').val(),
        message: 'Dados do cliente atualizados.'
      };
    } else {
      requestData = {
        method: 'post',
        url: '/registers/clients',
        message: 'Dados do cliente inseridos.'
      };
    }

    _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
      method: requestData.method,
      url: requestData.url,
      data: form
    }), function (res) {
      _utils_alert__WEBPACK_IMPORTED_MODULE_0__["successReload"](requestData.message, function () {
        return location.href = '/registers/clients/' + res.data.id + '/edit';
      });
    });
  });
});

function loadCitiesByState(stateId) {
  var cityId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  _utils_request__WEBPACK_IMPORTED_MODULE_1__["handle"](axios({
    method: 'get',
    url: '/cities/get-by-state/' + stateId,
    data: {}
  }), function (res) {
    $('#city-id').html('');
    $.each(res.data, function (key, value) {
      $('#city-id').append('<option value=' + value.id + '>' + value.name + '</option>');

      if (cityId) {
        $('#city-id').val(cityId);
      }
    });
  });
}

function registerNumberMask() {
  $('#register-number').unmask();

  if ($('#person-type-id').val() == 1) {
    $('#register-number').mask("000.000.000-00");
  } else if ($('#person-type-id').val() == 2) {
    $('#register-number').mask("00.000.000/0000-00");
  }
}

function showTradingNameBox() {
  $('#trading-name').parent('div').show();

  if ($('#person-type-id').val() == 1) {
    $('#trading-name').parent('div').hide();
  }
}

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

/***/ 3:
/*!************************************************************!*\
  !*** multi ./resources/js/pages/registers/clients/form.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/order-management/resources/js/pages/registers/clients/form.js */"./resources/js/pages/registers/clients/form.js");


/***/ })

/******/ });