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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: goods, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"goods\":[{\"id\":\"001\",\"ingredient\":\"с фуа-гра\",\"portions\":\"10\",\"mouses\":\"1\",\"weight\":\"0.5\",\"comment\":\"\",\"description\":\"Печень утки разварная с артишоками\",\"available\":\"0\"},{\"id\":\"002\",\"ingredient\":\"с рыбой\",\"portions\":\"40\",\"mouses\":\"2\",\"weight\":\"2\",\"comment\":\"\",\"description\":\"Головы щучьи с чесноком да свежайшая сёмгушка\",\"available\":\"3\"},{\"id\":\"003\",\"ingredient\":\"с курой\",\"portions\":\"100\",\"mouses\":\"5\",\"weight\":\"5\",\"comment\":\"заказчик доволен\",\"description\":\"Филе из цыплят с трюфелями в бульоне\",\"available\":\"10\"}]}");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/data.json", 1);


const goods = _data_json__WEBPACK_IMPORTED_MODULE_0__["goods"];

const makeAdditionalClass = (isChosen, available) => {
    if (available === '0') return 'disabled';
    if (!!isChosen) return 'selected';
    else return '';
}

Vue.component('card', {

  props: ['product'],

  data() {
    return {
      mousesQuantity: this.product.mouses, 
      portionsQuantity: this.product.portions,
      isChosen: false
    }
  },

  template: '<div class="card" v-bind:class="{ selected: isChosen, disabled: product.available <= 0 }" v-on:click="choose">\
    <div class="inner">\
      <div class="content">\
        <p class="pre-name">Сказочное заморское яство</p>\
        <h3 class="product-name">Нямушка</h3>\
        <h4 class="ingredient">{{ product.ingredient }}</h4>\
        <p class="details">\
          <span class="portions"><strong>{{ product.portions }}</strong> {{ quantity }}</span>\
          <span v-if="product.mouses > 0" class="mouses"><strong v-if="product.mouses > 1">{{ product.mouses }}</strong> {{ gift }} в подарок</span>\
          <span v-if="product.comment.length > 0" class="comment">{{ product.comment }}</span>\
        </p>\
      </div>\
      <span class="weight">\
        <big>{{ product.weight }}</big> кг\
      </span>\
    </div>\
    <p v-if="!!isChosen && product.available > 0" class="description text-default">{{ product.description }}</p>\
    <p v-else-if="!isChosen && product.available > 0" class="description text-chosen">Чего сидишь? Порадуй котэ, <span class="buy">купи.</span></p>\
    <p v-else="product.available <= 0" class="description text-out">Печалька, {{ product.ingredient }} закончился.</p>\
  </div>',

  computed: {

    quantity() {
      const lastChar = this.portionsQuantity[this.portionsQuantity.length - 1];
      const lastNumber = parseInt(lastChar, 10);
      if (lastNumber === 1) {
        return ' порция';
      } else if (lastNumber > 1 && lastNumber < 5) {
        return ' порции';
      } else {
        return ' порций';
      }
    },

    gift() {
      const lastChar = this.mousesQuantity[this.mousesQuantity.length - 1];
      const lastNumber = parseInt(lastChar, 10);
      if (lastNumber === 1) {
        return 'мышь';
      } else if (lastNumber > 1 && lastNumber < 5) {
        return ' мыши';
      } else {
        return ' мышей';
      }
    },

  },

  methods: {
    choose() {
      if (this.product.available > 0) {
      this.isChosen = !this.isChosen;
      } else return;
    }
  }

});

const app = new Vue({
  el: '#app',
  data: {
    goods,
  }
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map