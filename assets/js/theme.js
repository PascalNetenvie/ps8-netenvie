/*! For license information please see theme.js.LICENSE.txt */
/******/!function(){// webpackBootstrap
/******/var e={
/***/"./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);s().cart=s().cart||{};s().cart.active_inputs=null;var a='input[name="product-quantity-spin"]';var l=false;var c=false;var u="";
/**
 * Attach Bootstrap TouchSpin event handlers
 */function d(){o().each(o()(a),(function(e,t){o()(t).TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(o()(t).attr("min"),10),max:1e6})}));f.switchErrorStat()}o()(document).ready((function(){var e=".js-cart-line-product-quantity";var t=[];s().on("updateCart",(function(){o()(".quickview").modal("hide");o()(".js-cart__card-body").addClass("is--loading")}));s().on("updatedCart",(function(){d();o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));s().on("handleError",(function(e){o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));d();var n=o()("body");function i(e){return"on.startupspin"===e||"on.startdownspin"===e}function r(e){return"on.startupspin"===e}function l(t){var n=t.parents(".bootstrap-touchspin").find(e);if(n.is(":focus"))return null;return n}function c(e){var t=e.split("-");var n;var i;var o="";for(n=0;n<t.length;n++){i=t[n];if(0!==n)i=i.substring(0,1).toUpperCase()+i.substring(1);o+=i}return o}function u(e,t){if(!i(t))return{url:e.attr("href"),type:c(e.data("link-action"))};var n=l(e);if(!n)return;var o={};if(r(t))o={url:n.data("up-url"),type:"increaseProductQuantity"};else o={url:n.data("down-url"),type:"decreaseProductQuantity"};return o}var p=function e(){for(;t.length>0;)t.pop().abort()};var h=function e(t){return o()(t.parents(".bootstrap-touchspin").find("input"))};var v=function e(n){n.preventDefault();var i=o()(n.currentTarget);var r=n.currentTarget.dataset;var a=u(i,n.namespace);var l={ajax:"1",action:"update"};if(void 0===a)return;p();o().ajax({url:a.url,method:"POST",data:l,dataType:"json",beforeSend:function e(n){t.push(n)}}).then((function(e){f.checkUpdateOpertation(e);h(i).val(e.quantity);
// Refresh cart preview
s().emit("updateCart",{reason:r,resp:e})})).fail((function(e){s().emit("handleError",{eventType:"updateProductInCart",resp:e,cartAction:a.type})}))};n.on("click",'[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',v);n.on("touchspin.on.startdownspin",a,v);n.on("touchspin.on.startupspin",a,v);function m(e,n,i){p();return o().ajax({url:e,method:"POST",data:n,dataType:"json",beforeSend:function e(n){t.push(n)}}).then((function(e){f.checkUpdateOpertation(e);i.val(e.quantity);var t;if(i&&i.dataset)t=i.dataset;else t=e;
// Refresh cart preview
s().emit("updateCart",{reason:t,resp:e})})).fail((function(e){s().emit("handleError",{eventType:"updateProductQuantityInCart",resp:e})}))}function g(e){return{ajax:"1",qty:Math.abs(e),action:"update",op:y(e)}}function y(e){return e>0?"up":"down"}function b(e){var t=o()(e.currentTarget);var n=t.data("update-url");var i=t.attr("value");
// There should be a valid product quantity in cart
var r=t.val();if(r!=parseInt(r)||r<0||isNaN(r)){t.val(i);return}
// There should be a new product quantity in cart
var s=r-i;if(0===s)return;t.attr("value",r);m(n,g(s),t)}n.on("focusout keyup",e,(function(e){if("keyup"===e.type){if(13===e.keyCode)b(e);return false}b(e)}));n.on("click",".js-discount .code",(function(e){e.stopPropagation();var t=o()(e.currentTarget);o()("[name=discount_name]").val(t.text());o()("#promo-code").collapse("show");return false}))}));var f={switchErrorStat:function e(){
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
var t=o()(".checkout a");if(o()("#notifications article.alert-danger").length||""!==u&&!l)t.addClass("disabled");if(""!==u){var n=' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'+u+"</li></ul></article>";o()("#notifications.notifications-container").html(n);u="";c=false;if(l)
// if hasError is true, quantity was not updated : allow checkout
t.removeClass("disabled")}else if(!l&&c){l=false;c=false;o()("#notifications.notifications-container").html("");t.removeClass("disabled")}},checkUpdateOpertation:function e(t){
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
l=t.hasOwnProperty("hasError");var n=t.errors||"";
// 1.7.2.x returns errors as string, 1.7.3.x returns array
if(n instanceof Array)u=n.join(" ");else u=n;c=true}};
/***/},
/***/"./js/checkout.js":
/*!************************!*\
  !*** ./js/checkout.js ***!
  \************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);var a=void 0;
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function l(){o()(".js-terms a").on("click",(function(e){e.preventDefault();var t=o()(e.target).attr("href");if(t){
// TODO: Handle request if no pretty URL
t+="?content_only=1";o().get(t,(function(e){o()("#modal").find(".js-modal-content").html(o()(e).find(".page-content--cms").contents())})).fail((function(e){s().emit("handleError",{eventType:"clickTerms",resp:e})}))}o()("#modal").modal("show")}));o()(".js-gift-checkbox").on("click",(function(e){o()("#gift").collapse("toggle")}))}o()(document).ready((function(){if(1===o()("body#checkout").length)l();s().on("updatedDeliveryForm",(function(e){if(void 0===e.deliveryOption||0===e.deliveryOption.length)return;
// Hide all carrier extra content ...
o()(".carrier-extra-content").hide();
// and show the one related to the selected carrier
e.deliveryOption.next(".carrier-extra-content").slideDown()}));s().on("changedCheckoutStep",(function(e){if(void 0!==e.event.currentTarget)o()(".collapse",e.event.currentTarget).not(".show").not(".collapse .collapse").collapse("show")}))}));o()(document).on("change",".js-input-delivery:checked",(function(e){o()(".js-label-delivery.selected").removeClass("selected");o()("#js-"+o()(a).attr("id")).addClass("selected")}));o()(document).on("click",".js-checkout-step-header",(function(e){var t=o()(e.currentTarget).data("identifier");o()("#"+t).addClass("-current");o()("#content-"+t).collapse("show").scrollTop()}));
/***/},
/***/"./js/components/block-cart.js":
/*!*************************************!*\
  !*** ./js/components/block-cart.js ***!
  \*************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! prestashop */"prestashop");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! jquery */"jquery");
/* harmony import */var s=n.n(r);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */o().blockcart=o().blockcart||{};o().blockcart.showModal=function(e){function t(){return s()("#blockcart-modal")}var n=t();if(n.length)n.remove();s()("body").append(e);(n=t()).modal("show").on("hidden.bs.modal",(function(e){o().emit("updateProduct",{reason:e.currentTarget.dataset,event:e})}))};
/***/},
/***/"./js/components/form.js":
/*!*******************************!*\
  !*** ./js/components/form.js ***!
  \*******************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony export */n.d(t,{
/* harmony export */default:function(){/* binding */return d}
/* harmony export */});
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,c(i.key),i)}}function l(e,t,n){if(t)a(e.prototype,t);if(n)a(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"==r(t)?t:t+""}function u(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var d=function(){function e(){s(this,e)}return l(e,[{key:"init",value:function e(){this.parentFocus();this.togglePasswordVisibility();this.formValidation()}},{key:"parentFocus",value:function e(){o()(".js-child-focus").focus((function(){o()(this).closest(".js-parent-focus").addClass("focus")}));o()(".js-child-focus").focusout((function(){o()(this).closest(".js-parent-focus").removeClass("focus")}))}},{key:"togglePasswordVisibility",value:function e(){o()('button[data-action="show-password"]').on("click",(function(){var e=o()(this).closest(".input-group").children("input.js-visible-password");if("password"===e.attr("type")){e.attr("type","text");o()(this).text(o()(this).data("textHide"))}else{e.attr("type","password");o()(this).text(o()(this).data("textShow"))}}))}},{key:"formValidation",value:function e(){
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var t=document.getElementsByClassName("needs-validation");if(t.length>0){console.log(f());if(!f())return;
// Loop over them and prevent submission
var n=false;Array.prototype.filter.call(t,(function(e){e.addEventListener("submit",(function(t){if(false===e.checkValidity()){t.preventDefault();t.stopPropagation();o()("input:invalid,select:invalid,textarea:invalid",e).each((function(e){var t=o()(this),i=t.parents(".form-group").first();o()(".js-invalid-feedback-browser",i).text(t[0].validationMessage);if(!n)n=i}));o()(this).data("disabled",false);o()('button[type="submit"]',e).removeClass("disabled")}e.classList.add("was-validated");if(n){o()("html, body").animate({scrollTop:n.offset().top},300);n=false}}),false)}))}}}])}();var f=function e(){var t=document.createElement("input");return"validity"in t&&"badInput"in t.validity&&"patternMismatch"in t.validity&&"rangeOverflow"in t.validity&&"rangeUnderflow"in t.validity&&"tooLong"in t.validity&&"tooShort"in t.validity&&"typeMismatch"in t.validity&&"valid"in t.validity&&"valueMissing"in t.validity};
/***/},
/***/"./js/components/slick.js":
/*!********************************!*\
  !*** ./js/components/slick.js ***!
  \********************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony export */n.d(t,{
/* harmony export */default:function(){/* binding */return d}
/* harmony export */});
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,c(i.key),i)}}function l(e,t,n){if(t)a(e.prototype,t);if(n)a(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"==r(t)?t:t+""}function u(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var d=function(){function e(){s(this,e)}return l(e,[{key:"init",value:function e(){o()("[data-slick]").not(".slick-initialized").each((function(){var e=o()(this);if(1===e.data("count"))return;e.slick({prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons left">&#xE314;</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons right">&#xE315;</i></button>'})}))}}])}();
/***/},
/***/"./js/components/top-menu.js":
/*!***********************************!*\
  !*** ./js/components/top-menu.js ***!
  \***********************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony export */n.d(t,{
/* harmony export */default:function(){/* binding */return d}
/* harmony export */});
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,c(i.key),i)}}function l(e,t,n){if(t)a(e.prototype,t);if(n)a(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"==r(t)?t:t+""}function u(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var d=function(){function e(t){s(this,e);this.el=t}return l(e,[{key:"init",value:function e(){var t=this;t.el.hoverIntent({over:t.toggleClassSubMenu,out:t.toggleClassSubMenu,selector:" > li",timeout:100})}},{key:"toggleClassSubMenu",value:function e(){var t=o()(this);var n=t.attr("aria-expanded");if(void 0!==n){n="true"===n.toLowerCase();t.toggleClass("menu__item--active").attr("aria-expanded",!n);o()(".menu-sub",t).attr("aria-expanded",!n).attr("aria-hidden",n)}}}])}();
/***/},
/***/"./js/customer.js":
/*!************************!*\
  !*** ./js/customer.js ***!
  \************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function r(){o()("#order-return-form table thead input[type=checkbox]").on("click",(function(){var e=o()(this).prop("checked");o()("#order-return-form table tbody input[type=checkbox]").each((function(t,n){o()(n).prop("checked",e)}))}))}function s(){if(o()("body#order-detail"))r()}o()(document).ready(s);
/***/},
/***/"./js/lib/jquery.hoverIntent.min.js":
/*!******************************************!*\
  !*** ./js/lib/jquery.hoverIntent.min.js ***!
  \******************************************/
/***/function(e,t,n){var i,o,r;
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */!function(s){"use strict";o=[n(/*! jquery */"jquery")],void 0!==(r="function"==typeof(i=s)?i.apply(t,o):i)&&(e.exports=r)}((function(e){"use strict";var t,n,i={interval:100,sensitivity:6,timeout:0},o=0,r=function e(i){t=i.pageX,n=i.pageY},s=function e(i,o,s,a){if(Math.sqrt((s.pX-t)*(s.pX-t)+(s.pY-n)*(s.pY-n))<a.sensitivity)return o.off(s.event,r),delete s.timeoutId,s.isActive=!0,i.pageX=t,i.pageY=n,delete s.pX,delete s.pY,a.over.apply(o[0],[i]);s.pX=t,s.pY=n,s.timeoutId=setTimeout((function(){e(i,o,s,a)}),a.interval)},a=function e(t,n,i,o){return delete n.data("hoverIntent")[i.id],o.apply(n[0],[t])};e.fn.hoverIntent=function(t,n,l){var c=o++,u=e.extend({},i);e.isPlainObject(t)?(u=e.extend(u,t),e.isFunction(u.out)||(u.out=u.over)):u=e.isFunction(n)?e.extend(u,{over:t,out:n,selector:l}):e.extend(u,{over:t,out:t,selector:n});var d=function t(n){var i=e.extend({},n),o=e(this),l=o.data("hoverIntent");l||o.data("hoverIntent",l={});var d=l[c];d||(l[c]=d={id:c}),d.timeoutId&&(d.timeoutId=clearTimeout(d.timeoutId));var f=d.event="mousemove.hoverIntent.hoverIntent"+c;if("mouseenter"===n.type){if(d.isActive)return;d.pX=i.pageX,d.pY=i.pageY,o.off(f,r).on(f,r),d.timeoutId=setTimeout((function(){s(i,o,d,u)}),u.interval)}else{if(!d.isActive)return;o.off(f,r),d.timeoutId=setTimeout((function(){a(i,o,d,u.out)}),u.timeout)}};return this.on({"mouseenter.hoverIntent":d,"mouseleave.hoverIntent":d},u.selector)}}));
/***/},
/***/"./js/lib/slick.min.js":
/*!*****************************!*\
  !*** ./js/lib/slick.min.js ***!
  \*****************************/
/***/function(e,t,n){var i,o,r;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */}!function(s){"use strict";o=[n(/*! jquery */"jquery")],void 0!==(r="function"==typeof(i=s)?i.apply(t,o):i)&&(e.exports=r)}((function(e){"use strict";var t=window.Slick||{};(t=function(){function t(t,i){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function t(n,i){return e('<button type="button" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,i,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,void 0!==document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=n++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var n=0;return t}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,n,i){var o=this;if("boolean"==typeof n)i=n,n=null;else if(n<0||n>=o.slideCount)return!1;o.unload(),"number"==typeof n?0===n&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):i?e(t).insertBefore(o.$slides.eq(n)):e(t).insertAfter(o.$slides.eq(n)):!0===i?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each((function(t,n){e(n).attr("data-slick-index",t)})),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,n){var i={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(t=-t),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,n):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,n):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function e(t){t=Math.ceil(t),!1===o.options.vertical?(i[o.animType]="translate("+t+"px, 0px)",o.$slideTrack.css(i)):(i[o.animType]="translate(0px,"+t+"px)",o.$slideTrack.css(i))},complete:function e(){n&&n.call()}})):(o.applyTransition(),t=Math.ceil(t),!1===o.options.vertical?i[o.animType]="translate3d("+t+"px, 0px, 0px)":i[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(i),n&&setTimeout((function(){o.disableTransition(),n.call()}),o.options.speed))},t.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&null!==n&&(n=e(n).not(t.$slider)),n},t.prototype.asNavFor=function(t){var n=this.getNavTarget();null!==n&&"object"==s(n)&&n.each((function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)}))},t.prototype.applyTransition=function(e){var t=this,n={};!1===t.options.fade?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(!0===i.options.dots&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=e("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)n.append(e("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each((function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")})),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var u=e*s+(t*a.options.slidesPerRow+n);r.get(u)&&c.appendChild(r.get(u))}l.appendChild(c)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,n){var i,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||e(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(!1===s.originalSettings.mobileFirst?r<s.breakpoints[i]&&(o=s.breakpoints[i]):r>s.breakpoints[i]&&(o=s.breakpoints[i]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||n)&&(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||!1===a||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,n){var i,o,r=this,s=e(t.currentTarget);switch(s.is("a")&&t.preventDefault(),s.is("li")||(s=s.closest("li")),i=r.slideCount%r.options.slidesToScroll!=0?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":o=0===i?r.options.slidesToScroll:r.options.slidesToShow-i,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,n);break;case"next":o=0===i?r.options.slidesToScroll:i,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,n);break;case"index":var a=0===t.data.index?0:t.data.index||s.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,n),s.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n;if(n=0,e>(t=this.getNavigableIndexes())[t.length-1])e=t[t.length-1];else for(var i in t){if(e<t[i]){e=n;break}n=t[i]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&((e=t.$slides.children().children()).removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){e(this).attr("style",e(this).data("originalStyling"))})),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;!1===n.cssTransitions?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout((function(){n.disableTransition(e),t.call()}),n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick","*",(function(n){var i=e(this);setTimeout((function(){t.options.pauseOnFocus&&i.is(":focus")&&(t.focussed=!0,t.autoPlay())}),0)})).on("blur.slick","*",(function(n){e(this);t.options.pauseOnFocus&&(t.focussed=!1,t.autoPlay())}))},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},t.prototype.getLeft=function(e){var t,n,i,o,r=this,s=0;return r.slideOffset=0,n=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=n*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&e+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(e>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(e-r.slideCount))*r.slideWidth*-1,s=(r.options.slidesToShow-(e-r.slideCount))*n*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,s=r.slideCount%r.options.slidesToScroll*n*-1))):e+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(e+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(e+r.options.slidesToShow-r.slideCount)*n),r.slideCount<=r.options.slidesToShow&&(r.slideOffset=0,s=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),t=!1===r.options.vertical?e*r.slideWidth*-1+r.slideOffset:e*n*-1+s,!0===r.options.variableWidth&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,!0===r.options.centerMode&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow+1),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,t+=(r.$list.width()-i.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,o=[];for(!1===t.options.infinite?e=t.slideCount:(n=-1*t.options.slidesToScroll,i=-1*t.options.slidesToScroll,e=2*t.slideCount);n<e;)o.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i,o=this;return i=!0===o.options.centerMode?Math.floor(o.$list.width()/2):0,n=-1*o.swipeLeft+i,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each((function(i,r){var s,a;if(s=e(r).outerWidth(),a=r.offsetLeft,!0!==o.options.centerMode&&(a+=s/2),n<a+s)return t=r,!1})),Math.abs(e(t).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),!0===n.options.accessibility&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},t.prototype.initADA=function(){var t=this,n=Math.ceil(t.slideCount/t.options.slidesToShow),i=t.getNavigableIndexes().filter((function(e){return e>=0&&e<t.slideCount}));t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n){var o=i.indexOf(n);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+n,tabindex:-1}),-1!==o){var r="slick-slide-control"+t.instanceUid+o;e("#"+r).length&&e(this).attr({"aria-describedby":r})}})),t.$dots.attr("role","tablist").find("li").each((function(o){var r=i[o];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+o,"aria-controls":"slick-slide"+t.instanceUid+r,"aria-label":o+1+" of "+n,"aria-selected":null,tabindex:"-1"})})).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=t.currentSlide,r=o+t.options.slidesToShow;o<r;o++)t.options.focusOnChange?t.$slides.eq(o).attr({tabindex:"0"}):t.$slides.eq(o).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each((function(){var t=e(this),n=e(this).attr("data-lazy"),i=e(this).attr("data-srcset"),o=e(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){t.animate({opacity:0},100,(function(){i&&(t.attr("srcset",i),o&&t.attr("sizes",o)),t.attr("src",n).animate({opacity:1},200,(function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),r.$slider.trigger("lazyLoaded",[r,t,n])}))},s.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,t,n])},s.src=n}))}var n,i,o,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?o=(i=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(i=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),o=r.options.slidesToShow/2+1+2+r.currentSlide):(i=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,o=Math.ceil(i+r.options.slidesToShow),!0===r.options.fade&&(i>0&&i--,o<=r.slideCount&&o++)),n=r.$slider.find(".slick-slide").slice(i,o),"anticipated"===r.options.lazyLoad)for(var s=i-1,a=o,l=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)s<0&&(s=r.slideCount-1),n=(n=n.add(l.eq(s))).add(l.eq(a)),s--,a++;t(n),r.slideCount<=r.options.slidesToShow?t(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?t(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&t(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var n=this;if(!n.unslicked&&(n.$slider.trigger("afterChange",[n,t]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),!0===n.options.accessibility&&(n.initADA(),n.options.focusOnChange))){e(n.$slides.get(n.currentSlide)).attr("tabindex",0).focus()}},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var n,i,o,r,s,a=this,l=e("img[data-lazy]",a.$slider);l.length?(n=l.first(),i=n.attr("data-lazy"),o=n.attr("data-srcset"),r=n.attr("data-sizes")||a.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){o&&(n.attr("srcset",o),r&&n.attr("sizes",r)),n.attr("src",i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,n,i]),a.progressiveLazyLoad()},s.onerror=function(){t<3?setTimeout((function(){a.progressiveLazyLoad(t+1)}),500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,i]),a.progressiveLazyLoad())},s.src=i):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var n,i,o=this;i=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>i&&(o.currentSlide=i),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),n=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:n}),o.init(),t||o.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.registerBreakpoints=function(){var t,n,i,o=this,r=o.options.responsive||null;if("array"===e.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(t in r)if(i=o.breakpoints.length-1,r.hasOwnProperty(t)){for(n=r[t].breakpoint;i>=0;)o.breakpoints[i]&&o.breakpoints[i]===n&&o.breakpoints.splice(i,1),i--;o.breakpoints.push(n),o.breakpointSettings[n]=r[t].settings}o.breakpoints.sort((function(e,t){return o.options.mobileFirst?e-t:t-e}))}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout((function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()}),50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,n){var i=this;return"boolean"==typeof e?e=!0===(t=e)?0:i.slideCount-1:e=!0===t?--e:e,!(i.slideCount<1||e<0||e>i.slideCount-1)&&(i.unload(),!0===n?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,void i.reinit())},t.prototype.setCSS=function(e){var t,n,i=this,o={};!0===i.options.rtl&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,!1===i.transformsEnabled?i.$slideTrack.css(o):(o={},!1===i.cssTransitions?(o[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(o)):(o[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each((function(i,o){t=n.slideWidth*i*-1,!0===n.options.rtl?e(o).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})})),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,n,i,o,r,s=this,a=!1;if("object"===e.type(arguments[0])?(i=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(i=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)s.options[i]=o;else if("multiple"===r)e.each(i,(function(e,t){s.options[e]=t}));else if("responsive"===r)for(n in o)if("array"!==e.type(s.options.responsive))s.options.responsive=[o[n]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===o[n].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[n])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,n,i,o,r=this;if(n=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode){var s=r.options.slidesToShow%2==0?1:0;t=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t+s,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=r.options.slidesToShow+e,n.slice(i-t+1+s,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&n.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=r.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,i=!0===r.options.infinite?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?n.slice(i-(r.options.slidesToShow-o),i+o).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(n=null,o.slideCount>o.options.slidesToShow)){for(i=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-i;t-=1)n=t-1,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<i+o.slideCount;t+=1)n=t,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each((function(){e(this).attr("id","")}))}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));return o||(o=0),n.slideCount<=n.options.slidesToShow?void n.slideHandler(o,!1,!0):void n.slideHandler(o)},t.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l=null,c=this;if(t=t||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e))return!1===t&&c.asNavFor(e),i=e,l=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(e<0||e>c.getDotCount()*c.options.slidesToScroll)?void(!1===c.options.fade&&(i=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(i)})):c.postSlide(i))):!1===c.options.infinite&&!0===c.options.centerMode&&(e<0||e>c.slideCount-c.options.slidesToScroll)?void(!1===c.options.fade&&(i=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(i)})):c.postSlide(i))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&((a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade?(!0!==n?(c.fadeSlideOut(r),c.fadeSlide(o,(function(){c.postSlide(o)}))):c.postSlide(o),void c.animateHeight()):void(!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(l,(function(){c.postSlide(o)})):c.postSlide(o)))},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(t,e),(i=Math.round(180*n/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0?!1===o.options.rtl?"left":"right":i<=360&&i>=315?!1===o.options.rtl?"left":"right":i>=135&&i<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?i>=35&&i<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1,!1;if(i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,o,r,s,a=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||r&&1!==r.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,a.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),n=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),i=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===n||a.currentSlide>=a.getDotCount()&&"left"===n)&&(i=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+i*o:a.swipeLeft=t+i*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=t+i*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},t.prototype.swipeStart=function(e){var t,n=this;return n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(n.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,n,i=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),a=i.length;for(e=0;e<a;e++)if("object"==s(o)||void 0===o?i[e].slick=new t(i[e],o):n=i[e].slick[o].apply(i[e].slick,r),void 0!==n)return n;return i}}));
/***/},
/***/"./js/listing.js":
/*!***********************!*\
  !*** ./js/listing.js ***!
  \***********************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);
/* harmony import */var a=n(/*! ./components/slick */"./js/components/slick.js");
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */o()(document).ready((function(){s().on("clickQuickView",(function(t){var n={action:"quickview",id_product:t.dataset.idProduct,id_product_attribute:t.dataset.idProductAttribute};o().post(s().urls.pages.product,n,null,"json").then((function(t){o()("body").append(t.quickview_html);var n=o()("#quickview-modal-".concat(t.product.id,"-").concat(t.product.id_product_attribute));n.modal("show");n.on("hidden.bs.modal",(function(){n.remove()}));n.on("shown.bs.modal",(function(){e(n)}))})).fail((function(e){s().emit("handleError",{eventType:"clickQuickView",resp:e})}))}));var e=function e(t){(new a.default).init();t.find("#quantity_wanted").TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:1,max:1e6})};var t=function e(t){if(void 0!==t.target.dataset.searchUrl)return t.target.dataset.searchUrl;if(void 0===o()(t.target).parent()[0].dataset.searchUrl)throw new Error("Can not parse search URL");return o()(t.target).parent()[0].dataset.searchUrl};o()("body").on("change","#search_filters input[data-search-url]",(function(e){s().emit("updateFacets",t(e))}));o()("body").on("click",".js-search-filters-clear-all",(function(e){s().emit("updateFacets",t(e))}));o()("body").on("click",".js-search-link",(function(e){e.preventDefault();s().emit("updateFacets",o()(e.target).closest("a").get(0).href)}));o()("body").on("change","#select-sort-order",(function(){var e=o()(this).val();s().emit("updateFacets",e)}));o()("body").on("change","#search_filters select",(function(e){var t=o()(this).val();s().emit("updateFacets",t)}));s().on("updateProductList",(function(e){l(e);window.scrollTo(0,0)}))}));function l(e){o()("#search_filters").replaceWith(e.rendered_facets);o()("#js-active-search-filters").replaceWith(e.rendered_active_filters);o()("#js-product-list-top").replaceWith(e.rendered_products_top);o()("#js-product-list").replaceWith(e.rendered_products);o()("#js-product-list-bottom").replaceWith(e.rendered_products_bottom);if(void 0!==e.rendered_products_header&&e.rendered_products_header)o()("#js-product-list-header").replaceWith(e.rendered_products_header)}
/***/},
/***/"./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);
/* harmony import */n(/*! ./components/slick */"./js/components/slick.js");
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */o()(document).ready((function(){console.log("ready product");n();t();
//let slickSlider = new SlickSlider();
e();if(s().responsive.mobile){
//$(".btn-zoom").hide();
console.log("zoom");
//$(".product-img img").parent().zoom();
o()("#product-modal img").parent().zoom({magnify:.8})}s().on("updatedProduct",(function(n){console.log("updatedProduct");t();if(n&&n.product_minimal_quantity){var i=parseInt(n.product_minimal_quantity,10);var r="#quantity_wanted";
// @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
o()(r).trigger("touchspin.updatesettings",{min:i})}o()(o()(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade");o()(".js-product-images-modal").replaceWith(n.product_images_modal);
// slickSlider.init();
e()}));function e(){console.log("slickSliderProductInit");o()(".product-thumbs").slick({asNavFor:".products-imagescover",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">expand_less</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">expand_more</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:6,slidesToScroll:1,focusOnSelect:true,vertical:true,verticalSwiping:true,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2,vertical:false,verticalSwiping:false,prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1,vertical:false,verticalSwiping:false,prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'}}]});o()(".products-imagescover").slick({asNavFor:".product-thumbs",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:1,slidesToScroll:1,vertical:false,verticalSwiping:false});o()("#js-slick-product").slick({asNavFor:".product-thumbs, .products-imagescover",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow d-none d-md-flex"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow d-none d-md-flex"><i class="material-icons">chevron_right</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:1,slidesToScroll:1,vertical:false,verticalSwiping:false,swipe:false});
// On before slide change
/*
     $('#js-slick-product').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
     console.log(nextSlide);
     //$('.products-imagescover').slick('slickGoTo', nextSlide);
     //$('.product-thumbs').slick('slickGoTo', nextSlide);
     
     });*/o()(".btn-zoom").on("click",(function(){console.log("btn-zoom click");o()(this).data("id-image");a=o()(this).data("num-image");l=o()(this).parent().data("slick-index");o()("#js-slick-product").slick("slickGoTo",l);console.log("numImage : "+a);console.log("numSlide : "+l);
/*  $("#product-modal img.img-fluid").addClass('d-none').removeClass('current');
       $("#product-modal img#image-" + idImage).removeClass('d-none').addClass('current');*/}))}function t(){o()(".js-file-input").on("change",(function(e){var t,n;if((t=o()(e.currentTarget)[0])&&(n=t.files[0]))o()(t).prev().text(n.name)}))}function n(){var e=o()("#quantity_wanted");e.TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(e.attr("min"),10),max:1e6});o()("body").on("change keyup","#quantity_wanted",(function(e){o()(e.currentTarget).trigger("touchspin.stopspin");s().emit("updateProduct",{eventType:"updatedProductQuantity",event:e})}))}}));var a=0;var l=0;o()(document).on("shown.bs.modal","#product-modal",(function(e){console.log("shown #product-modal");console.log("numImage : "+a);o()("#js-slick-product").resize()}));o()(document).on("click",".next-image-modal",(function(e){console.log("next-image-modal click");o()("#js-slick-product").slick("slickNext")}));o()(document).on("click",".prev-image-modal",(function(e){console.log("prev-image-modal click");o()("#js-slick-product").slick("slickPrev")}));
//add to cart loader
o()(document).on("click",".js-add-to-cart:enabled:not(.is--loading)",(function(){o()(this).addClass("is--loading").attr("disabled",true)}));s().on("updateCart",(function(e){c()}));s().on("handleError",(function(e){c();o()(".js-add-to-cart").attr("disabled",false)}));function c(){o()(".js-add-to-cart.is--loading").removeClass("is--loading")}
/***/},
/***/"./js/responsive.js":
/*!**************************!*\
  !*** ./js/responsive.js ***!
  \**************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */s().responsive=s().responsive||{};s().responsive.current_width=window.innerWidth;s().responsive.min_width=992;s().responsive.mobile=s().responsive.current_width<s().responsive.min_width;function a(e,t){var n=t.children().detach();t.empty().append(e.children().detach());e.append(n)}function l(){if(s().responsive.mobile){o()("*[id^='_desktop_']").each((function(e,t){var n=o()("#"+t.id.replace("_desktop_","_mobile_"));if(n.length)a(o()(t),n)}));o()("[data-collapse-hide-mobile]").collapse("hide")}else{o()("*[id^='_mobile_']").each((function(e,t){var n=o()("#"+t.id.replace("_mobile_","_desktop_"));if(n.length)a(o()(t),n)}));o()("[data-collapse-hide-mobile]").not(".show").collapse("show");o()("[data-modal-hide-mobile].show").modal("hide")}s().emit("responsive update",{mobile:s().responsive.mobile})}o()(window).on("resize",(function(){var e=s().responsive.current_width;var t=s().responsive.min_width;var n=window.innerWidth;var i=e>=t&&n<t||e<t&&n>=t;s().responsive.current_width=n;s().responsive.mobile=s().responsive.current_width<s().responsive.min_width;if(i)l()}));o()(document).ready((function(){if(s().responsive.mobile)l()}));
/***/},
/***/"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js ***!
  \*****************************************************************************/
/***/function(e,t,n){"use strict";var i,o,r;
/*
 *  Bootstrap Touchspin - v4.7.3
 *  A mobile and touch friendly input spinner component for Bootstrap 3 & 4.
 *  https://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under MIT License
 */
!function(s){if(true)o=[n(/*! jquery */"jquery")],void 0!==(r="function"==typeof(i=s)?i.apply(t,o):i)&&(e.exports=r)}((function(e){var t=0;e.fn.TouchSpin=function(n){var i={min:0,
// If null, there is no minimum enforced
max:100,
// If null, there is no maximum enforced
initval:"",replacementval:"",firstclickvalueifempty:null,step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",
// none | floor | round | ceil
stepintervaldelay:500,verticalbuttons:false,verticalup:"&plus;",verticaldown:"&minus;",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:true,boostat:10,maxboostedstep:false,mousewheel:true,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"&minus;",buttonup_txt:"&plus;",callback_before_calculation:function e(t){return t},callback_after_calculation:function e(t){return t}};var o={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",firstclickvalueifempty:"first-click-value-if-empty",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each((function(){var r,s,a,l,c,u,d,f,p,h,v,m=e(this),g=m.data(),y=0,b=false;w();function w(){if(m.data("alreadyinitialized"))return;m.data("alreadyinitialized",true);t+=1;m.data("spinnerid",t);if(!m.is("input")){console.log("Must be an input.");return}T();_();I();E();A();F();P();N();$();D()}function _(){if(""!==r.initval&&""===m.val())m.val(r.initval)}function k(e){j(e);I();var t=c.input.val();if(""!==t){t=parseFloat(r.callback_before_calculation(c.input.val()));c.input.val(r.callback_after_calculation(parseFloat(t).toFixed(r.decimals)))}}function T(){r=e.extend({},i,g,S(),n);if(1!==parseFloat(r.step)){var t;
// Modify settings.max to be divisible by step
if(0!==(t=r.max%r.step))r.max=parseFloat(r.max)-t;
// Do the same with min, should work with negative numbers too
if(0!==(t=r.min%r.step))r.min=parseFloat(r.min)+(parseFloat(r.step)-t)}}function S(){var t={};
// Setting up based on data attributes
e.each(o,(function(e,n){var i="bts-"+n;if(m.is("[data-"+i+"]"))t[e]=m.data(i)}));
// Setting up based on input attributes if specified (input attributes have precedence)
e.each(["min","max","step"],(function(e,n){if(m.is("["+n+"]")){if(void 0!==t[n])console.warn('Both the "data-bts-'+n+'" data attribute and the "'+n+'" individual attribute were specified, the individual attribute will take precedence on: ',m);t[n]=m.attr(n)}}));return t}function C(){var t=m.parent();B();m.off(".touchspin");if(t.hasClass("bootstrap-touchspin-injected")){m.siblings().remove();m.unwrap()}else{e(".bootstrap-touchspin-injected",t).remove();t.removeClass("bootstrap-touchspin")}m.data("alreadyinitialized",false)}function j(t){r=e.extend({},r,t);
// Update postfix and prefix texts if those settings were changed.
if(t.postfix){if(0===m.parent().find(".bootstrap-touchspin-postfix").length)a.insertAfter(m);m.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix)}if(t.prefix){if(0===m.parent().find(".bootstrap-touchspin-prefix").length)s.insertBefore(m);m.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix)}P()}function E(){var e=m.val(),t=m.parent();if(""!==e){
// initval may not be parsable as a number (callback_after_calculation() may decorate it so it cant be parsed).  Use the callbacks if provided.
e=r.callback_before_calculation(e);e=r.callback_after_calculation(parseFloat(e).toFixed(r.decimals))}m.data("initvalue",e).val(e);m.addClass("form-control");u='\n          <span class="input-group-addon bootstrap-touchspin-vertical-button-wrapper">\n            <span class="input-group-btn-vertical">\n              <button tabindex="-1" class="'.concat(r.buttondown_class," bootstrap-touchspin-up ").concat(r.verticalupclass,'" type="button">').concat(r.verticalup,'</button>\n              <button tabindex="-1" class="').concat(r.buttonup_class," bootstrap-touchspin-down ").concat(r.verticaldownclass,'" type="button">').concat(r.verticaldown,"</button>\n            </span>\n          </span>\n       ");if(t.hasClass("input-group"))x(t);else O()}function x(t){t.addClass("bootstrap-touchspin");var n=m.prev(),i=m.next();var o,s,a='\n            <span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected">\n              <span class="input-group-text">'.concat(r.prefix,"</span>\n            </span>\n          "),c='\n            <span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected">\n              <span class="input-group-text">'.concat(r.postfix,"</span>\n            </span>\n          ");if(r.verticalbuttons)e(u).insertAfter(m);else{if(n.hasClass("input-group-btn")||n.hasClass("input-group-prepend")){o='\n              <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">').concat(r.buttondown_txt,"</button>\n            ");n.append(o)}else{o='\n              <span class="input-group-btn input-group-prepend bootstrap-touchspin-injected">\n                <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down" type="button">').concat(r.buttondown_txt,"</button>\n              </span>\n            ");e(o).insertBefore(m)}if(i.hasClass("input-group-btn")||i.hasClass("input-group-append")){s='\n            <button tabindex="-1" class="'.concat(r.buttonup_class,' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">').concat(r.buttonup_txt,"</button>\n          ");i.prepend(s)}else{s='\n            <span class="input-group-btn input-group-append bootstrap-touchspin-injected">\n              <button tabindex="-1" class="'.concat(r.buttonup_class,' bootstrap-touchspin-up" type="button">').concat(r.buttonup_txt,"</button>\n            </span>\n          ");e(s).insertAfter(m)}}e(a).insertBefore(m);e(c).insertAfter(m);l=t}function O(){var t;var n="";if(m.hasClass("input-sm")||m.hasClass("form-control-sm"))n="input-group-sm";else if(m.hasClass("input-lg")||m.hasClass("form-control-lg"))n="input-group-lg";if(r.verticalbuttons)t='\n            <div class="input-group '.concat(n,' bootstrap-touchspin bootstrap-touchspin-injected">\n              <span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix">\n                <span class="input-group-text">').concat(r.prefix,'</span>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">\n                <span class="input-group-text">').concat(r.postfix,"</span>\n              </span>\n              ").concat(u,"\n            </div>\n          ");else t='\n            <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">\n              <span class="input-group-btn input-group-prepend">\n                <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down" type="button">').concat(r.buttondown_txt,'</button>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend">\n                <span class="input-group-text">').concat(r.prefix,'</span>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">\n                <span class="input-group-text">').concat(r.postfix,'</span>\n              </span>\n              <span class="input-group-btn input-group-append">\n                <button tabindex="-1" class="').concat(r.buttonup_class,' bootstrap-touchspin-up" type="button">').concat(r.buttonup_txt,"</button>\n              </span>\n            </div>");l=e(t).insertBefore(m);e(".bootstrap-touchspin-prefix",l).after(m);if(m.hasClass("input-sm")||m.hasClass("form-control-sm"))l.addClass("input-group-sm");else if(m.hasClass("input-lg")||m.hasClass("form-control-lg"))l.addClass("input-group-lg")}function A(){c={down:e(".bootstrap-touchspin-down",l),up:e(".bootstrap-touchspin-up",l),input:e("input",l),prefix:e(".bootstrap-touchspin-prefix",l).addClass(r.prefix_extraclass),postfix:e(".bootstrap-touchspin-postfix",l).addClass(r.postfix_extraclass)}}function P(){if(""===r.prefix)s=c.prefix.detach();if(""===r.postfix)a=c.postfix.detach()}function $(){m.on("keydown.touchspin",(function(e){var t=e.keyCode||e.which;if(38===t){if("up"!==b){H();W()}e.preventDefault()}else if(40===t){if("down"!==b){q();R()}e.preventDefault()}else if(9===t||13===t)I()}));m.on("keyup.touchspin",(function(e){var t=e.keyCode||e.which;if(38===t)B();else if(40===t)B()}));
// change is fired before blur, so we need to work around that
e(document).on("mousedown touchstart",(function(t){if(e(t.target).is(m))return;I()}));m.on("blur.touchspin",(function(){I()}));c.down.on("keydown",(function(e){var t=e.keyCode||e.which;if(32===t||13===t){if("down"!==b){q();R()}e.preventDefault()}}));c.down.on("keyup.touchspin",(function(e){var t=e.keyCode||e.which;if(32===t||13===t)B()}));c.up.on("keydown.touchspin",(function(e){var t=e.keyCode||e.which;if(32===t||13===t){if("up"!==b){H();W()}e.preventDefault()}}));c.up.on("keyup.touchspin",(function(e){var t=e.keyCode||e.which;if(32===t||13===t)B()}));c.down.on("mousedown.touchspin",(function(e){c.down.off("touchstart.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;q();R();e.preventDefault();e.stopPropagation()}));c.down.on("touchstart.touchspin",(function(e){c.down.off("mousedown.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;q();R();e.preventDefault();e.stopPropagation()}));c.up.on("mousedown.touchspin",(function(e){c.up.off("touchstart.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;H();W();e.preventDefault();e.stopPropagation()}));c.up.on("touchstart.touchspin",(function(e){c.up.off("mousedown.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;H();W();e.preventDefault();e.stopPropagation()}));c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(e){if(!b)return;e.stopPropagation();B()}));c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(e){if(!b)return;e.stopPropagation();B()}));c.down.on("mousemove.touchspin touchmove.touchspin",(function(e){if(!b)return;e.stopPropagation();e.preventDefault()}));c.up.on("mousemove.touchspin touchmove.touchspin",(function(e){if(!b)return;e.stopPropagation();e.preventDefault()}));m.on("mousewheel.touchspin DOMMouseScroll.touchspin",(function(e){if(!r.mousewheel||!m.is(":focus"))return;var t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail;e.stopPropagation();e.preventDefault();if(t<0)q();else H()}))}function D(){m.on("touchspin.destroy",(function(){C()}));m.on("touchspin.uponce",(function(){B();H()}));m.on("touchspin.downonce",(function(){B();q()}));m.on("touchspin.startupspin",(function(){W()}));m.on("touchspin.startdownspin",(function(){R()}));m.on("touchspin.stopspin",(function(){B()}));m.on("touchspin.updatesettings",(function(e,t){k(t)}))}function N(){if("undefined"!=typeof MutationObserver){new MutationObserver((function(e){e.forEach((function(e){if("attributes"===e.type&&("disabled"===e.attributeName||"readonly"===e.attributeName))F()}))})).observe(m[0],{attributes:true})}}function L(e){switch(r.forcestepdivisibility){case"round":return(Math.round(e/r.step)*r.step).toFixed(r.decimals);case"floor":return(Math.floor(e/r.step)*r.step).toFixed(r.decimals);case"ceil":return(Math.ceil(e/r.step)*r.step).toFixed(r.decimals);default:return e.toFixed(r.decimals)}}function I(){var e,t,n;if(""===(e=r.callback_before_calculation(m.val()))){if(""!==r.replacementval){m.val(r.replacementval);m.trigger("change")}return}if(r.decimals>0&&"."===e)return;t=parseFloat(e);if(isNaN(t))if(""!==r.replacementval)t=r.replacementval;else t=0;n=t;if(t.toString()!==e)n=t;n=L(t);if(null!==r.min&&t<r.min)n=r.min;if(null!==r.max&&t>r.max)n=r.max;if(parseFloat(t).toString()!==parseFloat(n).toString())m.val(n);m.val(r.callback_after_calculation(parseFloat(n).toFixed(r.decimals)))}function z(){if(!r.booster)return r.step;else{var e=Math.pow(2,Math.floor(y/r.boostat))*r.step;if(r.maxboostedstep)if(e>r.maxboostedstep){e=r.maxboostedstep;d=Math.round(d/e)*e}return Math.max(r.step,e)}}function M(){if("number"==typeof r.firstclickvalueifempty)return r.firstclickvalueifempty;else return(r.min+r.max)/2}function F(){var e=m.is(":disabled,[readonly]");c.up.prop("disabled",e);c.down.prop("disabled",e);if(e)B()}function H(){if(m.is(":disabled,[readonly]"))return;I();var e=d=parseFloat(r.callback_before_calculation(c.input.val()));var t;if(isNaN(d))d=M();else{t=z();d+=t}if(null!==r.max&&d>=r.max){d=r.max;m.trigger("touchspin.on.max");B()}c.input.val(r.callback_after_calculation(parseFloat(d).toFixed(r.decimals)));if(e!==d)m.trigger("change")}function q(){if(m.is(":disabled,[readonly]"))return;I();var e=d=parseFloat(r.callback_before_calculation(c.input.val()));var t;if(isNaN(d))d=M();else{t=z();d-=t}if(null!==r.min&&d<=r.min){d=r.min;m.trigger("touchspin.on.min");B()}c.input.val(r.callback_after_calculation(parseFloat(d).toFixed(r.decimals)));if(e!==d)m.trigger("change")}function R(){if(m.is(":disabled,[readonly]"))return;B();y=0;b="down";m.trigger("touchspin.on.startspin");m.trigger("touchspin.on.startdownspin");h=setTimeout((function(){f=setInterval((function(){y++;q()}),r.stepinterval)}),r.stepintervaldelay)}function W(){if(m.is(":disabled,[readonly]"))return;B();y=0;b="up";m.trigger("touchspin.on.startspin");m.trigger("touchspin.on.startupspin");v=setTimeout((function(){p=setInterval((function(){y++;H()}),r.stepinterval)}),r.stepintervaldelay)}function B(){clearTimeout(h);clearTimeout(v);clearInterval(f);clearInterval(p);switch(b){case"up":m.trigger("touchspin.on.stopupspin");m.trigger("touchspin.on.stopspin");break;case"down":m.trigger("touchspin.on.stopdownspin");m.trigger("touchspin.on.stopspin")}y=0;b=false}}))}}));
/***/},
/***/"./node_modules/bootstrap/js/src/alert.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,u(i.key),i)}}function c(e,t,n){if(t)l(e.prototype,t);if(n)l(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function u(e){var t=d(e,"string");return"symbol"==s(t)?t:t+""}function d(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var f="alert";var p="4.6.2";var h="bs.alert";var v=".".concat(h);var m=".data-api";var g=o().fn[f];var y="alert";var b="fade";var w="show";var _="close".concat(v);var k="closed".concat(v);var T="click".concat(v).concat(m);var S='[data-dismiss="alert"]';
/**
 * Class definition
 */var C=function(){function e(t){a(this,e);this._element=t}
// Getters
return c(e,[{key:"close",value:
// Public
function e(t){var n=this._element;if(t)n=this._getRootElement(t);if(this._triggerCloseEvent(n).isDefaultPrevented())return;this._removeElement(n)}},{key:"dispose",value:function e(){o().removeData(this._element,h);this._element=null}
// Private
},{key:"_getRootElement",value:function e(t){var n=r.default.getSelectorFromElement(t);var i=false;if(n)i=document.querySelector(n);if(!i)i=o()(t).closest(".".concat(y))[0];return i}},{key:"_triggerCloseEvent",value:function e(t){var n=o().Event(_);o()(t).trigger(n);return n}},{key:"_removeElement",value:function e(t){var n=this;o()(t).removeClass(w);if(!o()(t).hasClass(b)){this._destroyElement(t);return}var i=r.default.getTransitionDurationFromElement(t);o()(t).one(r.default.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}},{key:"_destroyElement",value:function e(t){o()(t).detach().trigger(k).remove()}
// Static
}],[{key:"VERSION",get:function e(){return p}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=o()(this);var i=t.data(h);if(!i){i=new e(this);t.data(h,i)}if("close"===n)i[n](this)}))}},{key:"_handleDismiss",value:function e(t){return function(e){if(e)e.preventDefault();t.close(this)}}}])}();
/**
 * Data API implementation
 */o()(document).on(T,S,C._handleDismiss(new C));
/**
 * jQuery
 */o().fn[f]=C._jQueryInterface;o().fn[f].Constructor=C;o().fn[f].noConflict=function(){o().fn[f]=g;return C._jQueryInterface};
/* harmony default export */t.default=C;
/***/},
/***/"./node_modules/bootstrap/js/src/button.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,c(i.key),i)}}function l(e,t,n){if(t)a(e.prototype,t);if(n)a(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"==r(t)?t:t+""}function u(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var d="button";var f="4.6.2";var p="bs.button";var h=".".concat(p);var v=".data-api";var m=o().fn[d];var g="active";var y="btn";var b="focus";var w="click".concat(h).concat(v);var _="focus".concat(h).concat(v," ")+"blur".concat(h).concat(v);var k="load".concat(h).concat(v);var T='[data-toggle^="button"]';var S='[data-toggle="buttons"]';var C='[data-toggle="button"]';var j='[data-toggle="buttons"] .btn';var E='input:not([type="hidden"])';var x=".active";var O=".btn";
/**
 * Class definition
 */var A=function(){function e(t){s(this,e);this._element=t;this.shouldAvoidTriggerChange=false}
// Getters
return l(e,[{key:"toggle",value:
// Public
function e(){var t=true;var n=true;var i=o()(this._element).closest(S)[0];if(i){var r=this._element.querySelector(E);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(g))t=false;else{var s=i.querySelector(x);if(s)o()(s).removeClass(g)}if(t){
// if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
if("checkbox"===r.type||"radio"===r.type)r.checked=!this._element.classList.contains(g);if(!this.shouldAvoidTriggerChange)o()(r).trigger("change")}r.focus();n=false}}if(!(this._element.hasAttribute("disabled")||this._element.classList.contains("disabled"))){if(n)this._element.setAttribute("aria-pressed",!this._element.classList.contains(g));if(t)o()(this._element).toggleClass(g)}}},{key:"dispose",value:function e(){o().removeData(this._element,p);this._element=null}
// Static
}],[{key:"VERSION",get:function e(){return f}},{key:"_jQueryInterface",value:function t(n,i){return this.each((function(){var t=o()(this);var r=t.data(p);if(!r){r=new e(this);t.data(p,r)}r.shouldAvoidTriggerChange=i;if("toggle"===n)r[n]()}))}}])}();
/**
 * Data API implementation
 */o()(document).on(w,T,(function(e){var t=e.target;var n=t;if(!o()(t).hasClass(y))t=o()(t).closest(O)[0];if(!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();// work around Firefox bug #1540995
else{var i=t.querySelector(E);if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled"))){e.preventDefault();// work around Firefox bug #1540995
return}if("INPUT"===n.tagName||"LABEL"!==t.tagName)A._jQueryInterface.call(o()(t),"toggle","INPUT"===n.tagName)}})).on(_,T,(function(e){var t=o()(e.target).closest(O)[0];o()(t).toggleClass(b,/^focus(in)?$/.test(e.type))}));o()(window).on(k,(function(){
// ensure correct active class is set to match the controls' actual values/states
// find all checkboxes/readio buttons inside data-toggle groups
var e=[].slice.call(document.querySelectorAll(j));for(var t=0,n=e.length;t<n;t++){var i=e[t];var o=i.querySelector(E);if(o.checked||o.hasAttribute("checked"))i.classList.add(g);else i.classList.remove(g)}
// find all button toggles
for(var r=0,s=(e=[].slice.call(document.querySelectorAll(C))).length;r<s;r++){var a=e[r];if("true"===a.getAttribute("aria-pressed"))a.classList.add(g);else a.classList.remove(g)}}));
/**
 * jQuery
 */o().fn[d]=A._jQueryInterface;o().fn[d].Constructor=A;o().fn[d].noConflict=function(){o().fn[d]=m;return A._jQueryInterface};
/* harmony default export */t.default=A;
/***/},
/***/"./node_modules/bootstrap/js/src/collapse.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/collapse.js ***!
  \***************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){if((t=p(t))in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,p(i.key),i)}}function f(e,t,n){if(t)d(e.prototype,t);if(n)d(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function p(e){var t=h(e,"string");return"symbol"==s(t)?t:t+""}function h(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var v="collapse";var m="4.6.2";var g="bs.collapse";var y=".".concat(g);var b=".data-api";var w=o().fn[v];var _="show";var k="collapse";var T="collapsing";var S="collapsed";var C="width";var j="height";var E="show".concat(y);var x="shown".concat(y);var O="hide".concat(y);var A="hidden".concat(y);var P="click".concat(y).concat(b);var $=".show, .collapsing";var D='[data-toggle="collapse"]';var N={toggle:true,parent:""};var L={toggle:"boolean",parent:"(string|element)"};
/**
 * Class definition
 */var I=function(){function e(t,n){u(this,e);this._isTransitioning=false;this._element=t;this._config=this._getConfig(n);this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'.concat(t.id,'"],')+'[data-toggle="collapse"][data-target="#'.concat(t.id,'"]')));var i=[].slice.call(document.querySelectorAll(D));for(var o=0,s=i.length;o<s;o++){var a=i[o];var l=r.default.getSelectorFromElement(a);var c=[].slice.call(document.querySelectorAll(l)).filter((function(e){return e===t}));if(null!==l&&c.length>0){this._selector=l;this._triggerArray.push(a)}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent)this._addAriaAndCollapsedClass(this._element,this._triggerArray);if(this._config.toggle)this.toggle()}
// Getters
return f(e,[{key:"toggle",value:
// Public
function e(){if(o()(this._element).hasClass(_))this.hide();else this.show()}},{key:"show",value:function t(){var n=this;if(this._isTransitioning||o()(this._element).hasClass(_))return;var i;var s;if(this._parent)if(0===(i=[].slice.call(this._parent.querySelectorAll($)).filter((function(e){if("string"==typeof n._config.parent)return e.getAttribute("data-parent")===n._config.parent;return e.classList.contains(k)}))).length)i=null;if(i)if((s=o()(i).not(this._selector).data(g))&&s._isTransitioning)return;var a=o().Event(E);o()(this._element).trigger(a);if(a.isDefaultPrevented())return;if(i){e._jQueryInterface.call(o()(i).not(this._selector),"hide");if(!s)o()(i).data(g,null)}var l=this._getDimension();o()(this._element).removeClass(k).addClass(T);this._element.style[l]=0;if(this._triggerArray.length)o()(this._triggerArray).removeClass(S).attr("aria-expanded",true);this.setTransitioning(true);var c=function e(){o()(n._element).removeClass(T).addClass("".concat(k," ").concat(_));n._element.style[l]="";n.setTransitioning(false);o()(n._element).trigger(x)};var u=l[0].toUpperCase()+l.slice(1);var d="scroll".concat(u);var f=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,c).emulateTransitionEnd(f);this._element.style[l]="".concat(this._element[d],"px")}},{key:"hide",value:function e(){var t=this;if(this._isTransitioning||!o()(this._element).hasClass(_))return;var n=o().Event(O);o()(this._element).trigger(n);if(n.isDefaultPrevented())return;var i=this._getDimension();this._element.style[i]="".concat(this._element.getBoundingClientRect()[i],"px");r.default.reflow(this._element);o()(this._element).addClass(T).removeClass("".concat(k," ").concat(_));var s=this._triggerArray.length;if(s>0)for(var a=0;a<s;a++){var l=this._triggerArray[a];var c=r.default.getSelectorFromElement(l);if(null!==c){if(!o()([].slice.call(document.querySelectorAll(c))).hasClass(_))o()(l).addClass(S).attr("aria-expanded",false)}}this.setTransitioning(true);var u=function e(){t.setTransitioning(false);o()(t._element).removeClass(T).addClass(k).trigger(A)};this._element.style[i]="";var d=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,u).emulateTransitionEnd(d)}},{key:"setTransitioning",value:function e(t){this._isTransitioning=t}},{key:"dispose",value:function e(){o().removeData(this._element,g);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null}
// Private
},{key:"_getConfig",value:function e(t){(t=l(l({},N),t)).toggle=Boolean(t.toggle);// Coerce string values
r.default.typeCheckConfig(v,t,L);return t}},{key:"_getDimension",value:function e(){return o()(this._element).hasClass(C)?C:j}},{key:"_getParent",value:function t(){var n=this;var i;if(r.default.isElement(this._config.parent)){i=this._config.parent;
// It's a jQuery object
if(void 0!==this._config.parent.jquery)i=this._config.parent[0]}else i=document.querySelector(this._config.parent);var s='[data-toggle="collapse"][data-parent="'.concat(this._config.parent,'"]');var a=[].slice.call(i.querySelectorAll(s));o()(a).each((function(t,i){n._addAriaAndCollapsedClass(e._getTargetFromElement(i),[i])}));return i}},{key:"_addAriaAndCollapsedClass",value:function e(t,n){var i=o()(t).hasClass(_);if(n.length)o()(n).toggleClass(S,!i).attr("aria-expanded",i)}
// Static
}],[{key:"VERSION",get:function e(){return m}},{key:"Default",get:function e(){return N}},{key:"_getTargetFromElement",value:function e(t){var n=r.default.getSelectorFromElement(t);return n?document.querySelector(n):null}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=o()(this);var i=t.data(g);var r=l(l(l({},N),t.data()),"object"===s(n)&&n?n:{});if(!i&&r.toggle&&"string"==typeof n&&/show|hide/.test(n))r.toggle=false;if(!i){i=new e(this,r);t.data(g,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n]()}}))}}])}();
/**
 * Data API implementation
 */o()(document).on(P,D,(function(e){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
if("A"===e.currentTarget.tagName)e.preventDefault();var t=o()(this);var n=r.default.getSelectorFromElement(this);var i=[].slice.call(document.querySelectorAll(n));o()(i).each((function(){var e=o()(this);var n=e.data(g)?"toggle":t.data();I._jQueryInterface.call(e,n)}))}));
/**
 * jQuery
 */o().fn[v]=I._jQueryInterface;o().fn[v].Constructor=I;o().fn[v].noConflict=function(){o().fn[v]=w;return I._jQueryInterface};
/* harmony default export */t.default=I;
/***/},
/***/"./node_modules/bootstrap/js/src/dropdown.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/dropdown.js ***!
  \***************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var s=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){if((t=h(t))in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,h(i.key),i)}}function p(e,t,n){if(t)f(e.prototype,t);if(n)f(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function h(e){var t=v(e,"string");return"symbol"==a(t)?t:t+""}function v(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var m="dropdown";var g="4.6.2";var y="bs.dropdown";var b=".".concat(y);var w=".data-api";var _=o().fn[m];var k=27;// KeyboardEvent.which value for Escape (Esc) key
var T=32;// KeyboardEvent.which value for space key
var S=9;// KeyboardEvent.which value for tab key
var C=38;// KeyboardEvent.which value for up arrow key
var j=40;// KeyboardEvent.which value for down arrow key
var E=3;// MouseEvent.which value for the right button (assuming a right-handed mouse)
var x=new RegExp("".concat(C,"|").concat(j,"|").concat(k));var O="disabled";var A="show";var P="dropup";var $="dropright";var D="dropleft";var N="dropdown-menu-right";var L="position-static";var I="hide".concat(b);var z="hidden".concat(b);var M="show".concat(b);var F="shown".concat(b);var H="click".concat(b);var q="click".concat(b).concat(w);var R="keydown".concat(b).concat(w);var W="keyup".concat(b).concat(w);var B='[data-toggle="dropdown"]';var U=".dropdown form";var Q=".dropdown-menu";var Y=".navbar-nav";var V=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";var X="top-start";var K="top-end";var G="bottom-start";var Z="bottom-end";var J="right-start";var ee="left-start";var te={offset:0,flip:true,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null};var ne={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"};
/**
 * Class definition
 */var ie=function(){function e(t,n){d(this,e);this._element=t;this._popper=null;this._config=this._getConfig(n);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}
// Getters
return p(e,[{key:"toggle",value:
// Public
function t(){if(this._element.disabled||o()(this._element).hasClass(O))return;var n=o()(this._menu).hasClass(A);e._clearMenus();if(n)return;this.show(true)}},{key:"show",value:function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:false;if(this._element.disabled||o()(this._element).hasClass(O)||o()(this._menu).hasClass(A))return;var i={relatedTarget:this._element};var a=o().Event(M,i);var l=e._getParentFromElement(this._element);o()(l).trigger(a);if(a.isDefaultPrevented())return;
// Totally disable Popper for Dropdowns in Navbar
if(!this._inNavbar&&n){
// Check for Popper dependency
if(void 0===r.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var c=this._element;if("parent"===this._config.reference)c=l;else if(s.default.isElement(this._config.reference)){c=this._config.reference;
// Check if it's jQuery element
if(void 0!==this._config.reference.jquery)c=this._config.reference[0]}
// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
if("scrollParent"!==this._config.boundary)o()(l).addClass(L);this._popper=new r.default(c,this._menu,this._getPopperConfig())}
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement&&0===o()(l).closest(Y).length)o()(document.body).children().on("mouseover",null,o().noop);this._element.focus();this._element.setAttribute("aria-expanded",true);o()(this._menu).toggleClass(A);o()(l).toggleClass(A).trigger(o().Event(F,i))}},{key:"hide",value:function t(){if(this._element.disabled||o()(this._element).hasClass(O)||!o()(this._menu).hasClass(A))return;var n={relatedTarget:this._element};var i=o().Event(I,n);var r=e._getParentFromElement(this._element);o()(r).trigger(i);if(i.isDefaultPrevented())return;if(this._popper)this._popper.destroy();o()(this._menu).toggleClass(A);o()(r).toggleClass(A).trigger(o().Event(z,n))}},{key:"dispose",value:function e(){o().removeData(this._element,y);o()(this._element).off(b);this._element=null;this._menu=null;if(null!==this._popper){this._popper.destroy();this._popper=null}}},{key:"update",value:function e(){this._inNavbar=this._detectNavbar();if(null!==this._popper)this._popper.scheduleUpdate()}
// Private
},{key:"_addEventListeners",value:function e(){var t=this;o()(this._element).on(H,(function(e){e.preventDefault();e.stopPropagation();t.toggle()}))}},{key:"_getConfig",value:function e(t){t=c(c(c({},this.constructor.Default),o()(this._element).data()),t);s.default.typeCheckConfig(m,t,this.constructor.DefaultType);return t}},{key:"_getMenuElement",value:function t(){if(!this._menu){var n=e._getParentFromElement(this._element);if(n)this._menu=n.querySelector(Q)}return this._menu}},{key:"_getPlacement",value:function e(){var t=o()(this._element.parentNode);var n=G;
// Handle dropup
if(t.hasClass(P))n=o()(this._menu).hasClass(N)?K:X;else if(t.hasClass($))n=J;else if(t.hasClass(D))n=ee;else if(o()(this._menu).hasClass(N))n=Z;return n}},{key:"_detectNavbar",value:function e(){return o()(this._element).closest(".navbar").length>0}},{key:"_getOffset",value:function e(){var t=this;var n={};if("function"==typeof this._config.offset)n.fn=function(e){e.offsets=c(c({},e.offsets),t._config.offset(e.offsets,t._element));return e};else n.offset=this._config.offset;return n}},{key:"_getPopperConfig",value:function e(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};
// Disable Popper if we have a static display
if("static"===this._config.display)t.modifiers.applyStyle={enabled:false};return c(c({},t),this._config.popperConfig)}
// Static
}],[{key:"VERSION",get:function e(){return g}},{key:"Default",get:function e(){return te}},{key:"DefaultType",get:function e(){return ne}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=o()(this).data(y);var i="object"===a(n)?n:null;if(!t){t=new e(this,i);o()(this).data(y,t)}if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'.concat(n,'"'));t[n]()}}))}},{key:"_clearMenus",value:function t(n){if(n&&(n.which===E||"keyup"===n.type&&n.which!==S))return;var i=[].slice.call(document.querySelectorAll(B));for(var r=0,s=i.length;r<s;r++){var a=e._getParentFromElement(i[r]);var l=o()(i[r]).data(y);var c={relatedTarget:i[r]};if(n&&"click"===n.type)c.clickEvent=n;if(!l)continue;var u=l._menu;if(!o()(a).hasClass(A))continue;if(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&n.which===S)&&o().contains(a,n.target))continue;var d=o().Event(I,c);o()(a).trigger(d);if(d.isDefaultPrevented())continue;
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)o()(document.body).children().off("mouseover",null,o().noop);i[r].setAttribute("aria-expanded","false");if(l._popper)l._popper.destroy();o()(u).removeClass(A);o()(a).removeClass(A).trigger(o().Event(z,c))}}},{key:"_getParentFromElement",value:function e(t){var n;var i=s.default.getSelectorFromElement(t);if(i)n=document.querySelector(i);return n||t.parentNode}
// eslint-disable-next-line complexity
},{key:"_dataApiKeydownHandler",value:function t(n){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(n.target.tagName)?n.which===T||n.which!==k&&(n.which!==j&&n.which!==C||o()(n.target).closest(Q).length):!x.test(n.which))return;if(this.disabled||o()(this).hasClass(O))return;var i=e._getParentFromElement(this);var r=o()(i).hasClass(A);if(!r&&n.which===k)return;n.preventDefault();n.stopPropagation();if(!r||n.which===k||n.which===T){if(n.which===k)o()(i.querySelector(B)).trigger("focus");o()(this).trigger("click");return}var s=[].slice.call(i.querySelectorAll(V)).filter((function(e){return o()(e).is(":visible")}));if(0===s.length)return;var a=s.indexOf(n.target);if(n.which===C&&a>0)
// Up
a--;if(n.which===j&&a<s.length-1)
// Down
a++;if(a<0)a=0;s[a].focus()}}])}();
/**
 * Data API implementation
 */o()(document).on(R,B,ie._dataApiKeydownHandler).on(R,Q,ie._dataApiKeydownHandler).on("".concat(q," ").concat(W),ie._clearMenus).on(q,B,(function(e){e.preventDefault();e.stopPropagation();ie._jQueryInterface.call(o()(this),"toggle")})).on(q,U,(function(e){e.stopPropagation()}));
/**
 * jQuery
 */o().fn[m]=ie._jQueryInterface;o().fn[m].Constructor=ie;o().fn[m].noConflict=function(){o().fn[m]=_;return ie._jQueryInterface};
/* harmony default export */t.default=ie;
/***/},
/***/"./node_modules/bootstrap/js/src/modal.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/modal.js ***!
  \************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){if((t=p(t))in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,p(i.key),i)}}function f(e,t,n){if(t)d(e.prototype,t);if(n)d(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function p(e){var t=h(e,"string");return"symbol"==s(t)?t:t+""}function h(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var v="modal";var m="4.6.2";var g="bs.modal";var y=".".concat(g);var b=".data-api";var w=o().fn[v];var _=27;// KeyboardEvent.which value for Escape (Esc) key
var k="modal-dialog-scrollable";var T="modal-scrollbar-measure";var S="modal-backdrop";var C="modal-open";var j="fade";var E="show";var x="modal-static";var O="hide".concat(y);var A="hidePrevented".concat(y);var P="hidden".concat(y);var $="show".concat(y);var D="shown".concat(y);var N="focusin".concat(y);var L="resize".concat(y);var I="click.dismiss".concat(y);var z="keydown.dismiss".concat(y);var M="mouseup.dismiss".concat(y);var F="mousedown.dismiss".concat(y);var H="click".concat(y).concat(b);var q=".modal-dialog";var R=".modal-body";var W='[data-toggle="modal"]';var B='[data-dismiss="modal"]';var U=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";var Q=".sticky-top";var Y={backdrop:true,keyboard:true,focus:true,show:true};var V={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"};
/**
 * Class definition
 */var X=function(){function e(t,n){u(this,e);this._config=this._getConfig(n);this._element=t;this._dialog=t.querySelector(q);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0}
// Getters
return f(e,[{key:"toggle",value:
// Public
function e(t){return this._isShown?this.hide():this.show(t)}},{key:"show",value:function e(t){var n=this;if(this._isShown||this._isTransitioning)return;var i=o().Event($,{relatedTarget:t});o()(this._element).trigger(i);if(i.isDefaultPrevented())return;this._isShown=true;if(o()(this._element).hasClass(j))this._isTransitioning=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();o()(this._element).on(I,B,(function(e){return n.hide(e)}));o()(this._dialog).on(F,(function(){o()(n._element).one(M,(function(e){if(o()(e.target).is(n._element))n._ignoreBackdropClick=true}))}));this._showBackdrop((function(){return n._showElement(t)}))}},{key:"hide",value:function e(t){var n=this;if(t)t.preventDefault();if(!this._isShown||this._isTransitioning)return;var i=o().Event(O);o()(this._element).trigger(i);if(!this._isShown||i.isDefaultPrevented())return;this._isShown=false;var s=o()(this._element).hasClass(j);if(s)this._isTransitioning=true;this._setEscapeEvent();this._setResizeEvent();o()(document).off(N);o()(this._element).removeClass(E);o()(this._element).off(I);o()(this._dialog).off(F);if(s){var a=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,(function(e){return n._hideModal(e)})).emulateTransitionEnd(a)}else this._hideModal()}},{key:"dispose",value:function e(){[window,this._element,this._dialog].forEach((function(e){return o()(e).off(y)}));
/**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */o()(document).off(N);o().removeData(this._element,g);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null}},{key:"handleUpdate",value:function e(){this._adjustDialog()}
// Private
},{key:"_getConfig",value:function e(t){t=l(l({},Y),t);r.default.typeCheckConfig(v,t,V);return t}},{key:"_triggerBackdropTransition",value:function e(){var t=this;var n=o().Event(A);o()(this._element).trigger(n);if(n.isDefaultPrevented())return;var i=this._element.scrollHeight>document.documentElement.clientHeight;if(!i)this._element.style.overflowY="hidden";this._element.classList.add(x);var s=r.default.getTransitionDurationFromElement(this._dialog);o()(this._element).off(r.default.TRANSITION_END);o()(this._element).one(r.default.TRANSITION_END,(function(){t._element.classList.remove(x);if(!i)o()(t._element).one(r.default.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,s)})).emulateTransitionEnd(s);this._element.focus()}},{key:"_showElement",value:function e(t){var n=this;var i=o()(this._element).hasClass(j);var s=this._dialog?this._dialog.querySelector(R):null;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)
// Don't move modal's DOM position
document.body.appendChild(this._element);this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");if(o()(this._dialog).hasClass(k)&&s)s.scrollTop=0;else this._element.scrollTop=0;if(i)r.default.reflow(this._element);o()(this._element).addClass(E);if(this._config.focus)this._enforceFocus();var a=o().Event(D,{relatedTarget:t});var l=function e(){if(n._config.focus)n._element.focus();n._isTransitioning=false;o()(n._element).trigger(a)};if(i){var c=r.default.getTransitionDurationFromElement(this._dialog);o()(this._dialog).one(r.default.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},{key:"_enforceFocus",value:function e(){var t=this;o()(document).off(N).on(N,(function(e){if(document!==e.target&&t._element!==e.target&&0===o()(t._element).has(e.target).length)t._element.focus()}))}},{key:"_setEscapeEvent",value:function e(){var t=this;if(this._isShown)o()(this._element).on(z,(function(e){if(t._config.keyboard&&e.which===_){e.preventDefault();t.hide()}else if(!t._config.keyboard&&e.which===_)t._triggerBackdropTransition()}));else if(!this._isShown)o()(this._element).off(z)}},{key:"_setResizeEvent",value:function e(){var t=this;if(this._isShown)o()(window).on(L,(function(e){return t.handleUpdate(e)}));else o()(window).off(L)}},{key:"_hideModal",value:function e(){var t=this;this._element.style.display="none";this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");this._isTransitioning=false;this._showBackdrop((function(){o()(document.body).removeClass(C);t._resetAdjustments();t._resetScrollbar();o()(t._element).trigger(P)}))}},{key:"_removeBackdrop",value:function e(){if(this._backdrop){o()(this._backdrop).remove();this._backdrop=null}}},{key:"_showBackdrop",value:function e(t){var n=this;var i=o()(this._element).hasClass(j)?j:"";if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement("div");this._backdrop.className=S;if(i)this._backdrop.classList.add(i);o()(this._backdrop).appendTo(document.body);o()(this._element).on(I,(function(e){if(n._ignoreBackdropClick){n._ignoreBackdropClick=false;return}if(e.target!==e.currentTarget)return;if("static"===n._config.backdrop)n._triggerBackdropTransition();else n.hide()}));if(i)r.default.reflow(this._backdrop);o()(this._backdrop).addClass(E);if(!t)return;if(!i){t();return}var s=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,t).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){o()(this._backdrop).removeClass(E);var a=function e(){n._removeBackdrop();if(t)t()};if(o()(this._element).hasClass(j)){var l=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,a).emulateTransitionEnd(l)}else a()}else if(t)t()}
// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
},{key:"_adjustDialog",value:function e(){var t=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&t)this._element.style.paddingLeft="".concat(this._scrollbarWidth,"px");if(this._isBodyOverflowing&&!t)this._element.style.paddingRight="".concat(this._scrollbarWidth,"px")}},{key:"_resetAdjustments",value:function e(){this._element.style.paddingLeft="";this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function e(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function e(){var t=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var n=[].slice.call(document.querySelectorAll(U));var i=[].slice.call(document.querySelectorAll(Q));
// Adjust fixed content padding
o()(n).each((function(e,n){var i=n.style.paddingRight;var r=o()(n).css("padding-right");o()(n).data("padding-right",i).css("padding-right","".concat(parseFloat(r)+t._scrollbarWidth,"px"))}));
// Adjust sticky content margin
o()(i).each((function(e,n){var i=n.style.marginRight;var r=o()(n).css("margin-right");o()(n).data("margin-right",i).css("margin-right","".concat(parseFloat(r)-t._scrollbarWidth,"px"))}));
// Adjust body padding
var r=document.body.style.paddingRight;var s=o()(document.body).css("padding-right");o()(document.body).data("padding-right",r).css("padding-right","".concat(parseFloat(s)+this._scrollbarWidth,"px"))}o()(document.body).addClass(C)}},{key:"_resetScrollbar",value:function e(){
// Restore fixed content padding
var t=[].slice.call(document.querySelectorAll(U));o()(t).each((function(e,t){var n=o()(t).data("padding-right");o()(t).removeData("padding-right");t.style.paddingRight=n?n:""}));
// Restore sticky content
var n=[].slice.call(document.querySelectorAll("".concat(Q)));o()(n).each((function(e,t){var n=o()(t).data("margin-right");if(void 0!==n)o()(t).css("margin-right",n).removeData("margin-right")}));
// Restore body padding
var i=o()(document.body).data("padding-right");o()(document.body).removeData("padding-right");document.body.style.paddingRight=i?i:""}},{key:"_getScrollbarWidth",value:function e(){
// thx d.walsh
var t=document.createElement("div");t.className=T;document.body.appendChild(t);var n=t.getBoundingClientRect().width-t.clientWidth;document.body.removeChild(t);return n}
// Static
}],[{key:"VERSION",get:function e(){return m}},{key:"Default",get:function e(){return Y}},{key:"_jQueryInterface",value:function t(n,i){return this.each((function(){var t=o()(this).data(g);var r=l(l(l({},Y),o()(this).data()),"object"===s(n)&&n?n:{});if(!t){t=new e(this,r);o()(this).data(g,t)}if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'.concat(n,'"'));t[n](i)}else if(r.show)t.show(i)}))}}])}();
/**
 * Data API implementation
 */o()(document).on(H,W,(function(e){var t=this;var n;var i=r.default.getSelectorFromElement(this);if(i)n=document.querySelector(i);var s=o()(n).data(g)?"toggle":l(l({},o()(n).data()),o()(this).data());if("A"===this.tagName||"AREA"===this.tagName)e.preventDefault();var a=o()(n).one($,(function(e){if(e.isDefaultPrevented())
// Only register focus restorer if modal will actually get shown
return;a.one(P,(function(){if(o()(t).is(":visible"))t.focus()}))}));X._jQueryInterface.call(o()(n),s,this)}));
/**
 * jQuery
 */o().fn[v]=X._jQueryInterface;o().fn[v].Constructor=X;o().fn[v].noConflict=function(){o().fn[v]=w;return X._jQueryInterface};
/* harmony default export */t.default=X;
/***/},
/***/"./node_modules/bootstrap/js/src/popover.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/popover.js ***!
  \**************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./tooltip */"./node_modules/bootstrap/js/src/tooltip.js");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,w(i.key),i)}}function c(e,t,n){if(t)l(e.prototype,t);if(n)l(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function u(e,t,n){return t=h(t),d(e,p()?Reflect.construct(t,n||[],h(e).constructor):t.apply(e,n))}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;else if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function t(){return!!e})()}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return h(e)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)m(e,t)}function m(e,t){m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,n){t.__proto__=n;return t};return m(e,t)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){if((t=w(t))in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}function w(e){var t=_(e,"string");return"symbol"==s(t)?t:t+""}function _(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var k="popover";var T="4.6.2";var S="bs.popover";var C=".".concat(S);var j=o().fn[k];var E="bs-popover";var x=new RegExp("(^|\\s)".concat(E,"\\S+"),"g");var O="fade";var A="show";var P=".popover-header";var $=".popover-body";var D=y(y({},r.default.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'});var N=y(y({},r.default.DefaultType),{},{content:"(string|element|function)"});var L={HIDE:"hide".concat(C),HIDDEN:"hidden".concat(C),SHOW:"show".concat(C),SHOWN:"shown".concat(C),INSERTED:"inserted".concat(C),CLICK:"click".concat(C),FOCUSIN:"focusin".concat(C),FOCUSOUT:"focusout".concat(C),MOUSEENTER:"mouseenter".concat(C),MOUSELEAVE:"mouseleave".concat(C)};
/**
 * Class definition
 */var I=function(e){function t(){a(this,t);return u(this,t,arguments)}v(t,e);return c(t,[{key:"isWithContent",value:
// Overrides
function e(){return this.getTitle()||this._getContent()}},{key:"addAttachmentClass",value:function e(t){o()(this.getTipElement()).addClass("".concat(E,"-").concat(t))}},{key:"getTipElement",value:function e(){this.tip=this.tip||o()(this.config.template)[0];return this.tip}},{key:"setContent",value:function e(){var t=o()(this.getTipElement());
// We use append for html objects to maintain js events
this.setElementContent(t.find(P),this.getTitle());var n=this._getContent();if("function"==typeof n)n=n.call(this.element);this.setElementContent(t.find($),n);t.removeClass("".concat(O," ").concat(A))}
// Private
},{key:"_getContent",value:function e(){return this.element.getAttribute("data-content")||this.config.content}},{key:"_cleanTipClass",value:function e(){var t=o()(this.getTipElement());var n=t.attr("class").match(x);if(null!==n&&n.length>0)t.removeClass(n.join(""))}
// Static
}],[{key:"VERSION",get:
// Getters
function e(){return T}},{key:"Default",get:function e(){return D}},{key:"NAME",get:function e(){return k}},{key:"DATA_KEY",get:function e(){return S}},{key:"Event",get:function e(){return L}},{key:"EVENT_KEY",get:function e(){return C}},{key:"DefaultType",get:function e(){return N}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=o()(this).data(S);var i="object"===s(n)?n:null;if(!e&&/dispose|hide/.test(n))return;if(!e){e=new t(this,i);o()(this).data(S,e)}if("string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'.concat(n,'"'));e[n]()}}))}}])}(r.default);
/**
 * jQuery
 */o().fn[k]=I._jQueryInterface;o().fn[k].Constructor=I;o().fn[k].noConflict=function(){o().fn[k]=j;return I._jQueryInterface};
/* harmony default export */t.default=I;
/***/},
/***/"./node_modules/bootstrap/js/src/tab.js":
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/src/tab.js ***!
  \**********************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,u(i.key),i)}}function c(e,t,n){if(t)l(e.prototype,t);if(n)l(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function u(e){var t=d(e,"string");return"symbol"==s(t)?t:t+""}function d(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var f="tab";var p="4.6.2";var h="bs.tab";var v=".".concat(h);var m=".data-api";var g=o().fn[f];var y="dropdown-menu";var b="active";var w="disabled";var _="fade";var k="show";var T="hide".concat(v);var S="hidden".concat(v);var C="show".concat(v);var j="shown".concat(v);var E="click".concat(v).concat(m);var x=".dropdown";var O=".nav, .list-group";var A=".active";var P="> li > .active";var $='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';var D=".dropdown-toggle";var N="> .dropdown-menu .active";
/**
 * Class definition
 */var L=function(){function e(t){a(this,e);this._element=t}
// Getters
return c(e,[{key:"show",value:
// Public
function e(){var t=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o()(this._element).hasClass(b)||o()(this._element).hasClass(w)||this._element.hasAttribute("disabled"))return;var n;var i;var s=o()(this._element).closest(O)[0];var a=r.default.getSelectorFromElement(this._element);if(s){var l="UL"===s.nodeName||"OL"===s.nodeName?P:A;i=(i=o().makeArray(o()(s).find(l)))[i.length-1]}var c=o().Event(T,{relatedTarget:this._element});var u=o().Event(C,{relatedTarget:i});if(i)o()(i).trigger(c);o()(this._element).trigger(u);if(u.isDefaultPrevented()||c.isDefaultPrevented())return;if(a)n=document.querySelector(a);this._activate(this._element,s);var d=function e(){var n=o().Event(S,{relatedTarget:t._element});var r=o().Event(j,{relatedTarget:i});o()(i).trigger(n);o()(t._element).trigger(r)};if(n)this._activate(n,n.parentNode,d);else d()}},{key:"dispose",value:function e(){o().removeData(this._element,h);this._element=null}
// Private
},{key:"_activate",value:function e(t,n,i){var s=this;var a=(n&&("UL"===n.nodeName||"OL"===n.nodeName)?o()(n).find(P):o()(n).children(A))[0];var l=i&&a&&o()(a).hasClass(_);var c=function e(){return s._transitionComplete(t,a,i)};if(a&&l){var u=r.default.getTransitionDurationFromElement(a);o()(a).removeClass(k).one(r.default.TRANSITION_END,c).emulateTransitionEnd(u)}else c()}},{key:"_transitionComplete",value:function e(t,n,i){if(n){o()(n).removeClass(b);var s=o()(n.parentNode).find(N)[0];if(s)o()(s).removeClass(b);if("tab"===n.getAttribute("role"))n.setAttribute("aria-selected",false)}o()(t).addClass(b);if("tab"===t.getAttribute("role"))t.setAttribute("aria-selected",true);r.default.reflow(t);if(t.classList.contains(_))t.classList.add(k);var a=t.parentNode;if(a&&"LI"===a.nodeName)a=a.parentNode;if(a&&o()(a).hasClass(y)){var l=o()(t).closest(x)[0];if(l){var c=[].slice.call(l.querySelectorAll(D));o()(c).addClass(b)}t.setAttribute("aria-expanded",true)}if(i)i()}
// Static
}],[{key:"VERSION",get:function e(){return p}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=o()(this);var i=t.data(h);if(!i){i=new e(this);t.data(h,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n]()}}))}}])}();
/**
 * Data API implementation
 */o()(document).on(E,$,(function(e){e.preventDefault();L._jQueryInterface.call(o()(this),"show")}));
/**
 * jQuery
 */o().fn[f]=L._jQueryInterface;o().fn[f].Constructor=L;o().fn[f].noConflict=function(){o().fn[f]=g;return L._jQueryInterface};
/* harmony default export */t.default=L;
/***/},
/***/"./node_modules/bootstrap/js/src/toast.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/toast.js ***!
  \************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){if((t=p(t))in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,p(i.key),i)}}function f(e,t,n){if(t)d(e.prototype,t);if(n)d(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function p(e){var t=h(e,"string");return"symbol"==s(t)?t:t+""}function h(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var v="toast";var m="4.6.2";var g="bs.toast";var y=".".concat(g);var b=o().fn[v];var w="fade";var _="hide";var k="show";var T="showing";var S="click.dismiss".concat(y);var C="hide".concat(y);var j="hidden".concat(y);var E="show".concat(y);var x="shown".concat(y);var O='[data-dismiss="toast"]';var A={animation:true,autohide:true,delay:500};var P={animation:"boolean",autohide:"boolean",delay:"number"};
/**
 * Class definition
 */var $=function(){function e(t,n){u(this,e);this._element=t;this._config=this._getConfig(n);this._timeout=null;this._setListeners()}
// Getters
return f(e,[{key:"show",value:
// Public
function e(){var t=this;var n=o().Event(E);o()(this._element).trigger(n);if(n.isDefaultPrevented())return;this._clearTimeout();if(this._config.animation)this._element.classList.add(w);var i=function e(){t._element.classList.remove(T);t._element.classList.add(k);o()(t._element).trigger(x);if(t._config.autohide)t._timeout=setTimeout((function(){t.hide()}),t._config.delay)};this._element.classList.remove(_);r.default.reflow(this._element);this._element.classList.add(T);if(this._config.animation){var s=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,i).emulateTransitionEnd(s)}else i()}},{key:"hide",value:function e(){if(!this._element.classList.contains(k))return;var t=o().Event(C);o()(this._element).trigger(t);if(t.isDefaultPrevented())return;this._close()}},{key:"dispose",value:function e(){this._clearTimeout();if(this._element.classList.contains(k))this._element.classList.remove(k);o()(this._element).off(S);o().removeData(this._element,g);this._element=null;this._config=null}
// Private
},{key:"_getConfig",value:function e(t){t=l(l(l({},A),o()(this._element).data()),"object"===s(t)&&t?t:{});r.default.typeCheckConfig(v,t,this.constructor.DefaultType);return t}},{key:"_setListeners",value:function e(){var t=this;o()(this._element).on(S,O,(function(){return t.hide()}))}},{key:"_close",value:function e(){var t=this;var n=function e(){t._element.classList.add(_);o()(t._element).trigger(j)};this._element.classList.remove(k);if(this._config.animation){var i=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},{key:"_clearTimeout",value:function e(){clearTimeout(this._timeout);this._timeout=null}
// Static
}],[{key:"VERSION",get:function e(){return m}},{key:"DefaultType",get:function e(){return P}},{key:"Default",get:function e(){return A}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=o()(this);var i=t.data(g);var r="object"===s(n)&&n;if(!i){i=new e(this,r);t.data(g,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n](this)}}))}}])}();
/**
 * jQuery
 */o().fn[v]=$._jQueryInterface;o().fn[v].Constructor=$;o().fn[v].noConflict=function(){o().fn[v]=b;return $._jQueryInterface};
/* harmony default export */t.default=$;
/***/},
/***/"./node_modules/bootstrap/js/src/tools/sanitizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tools/sanitizer.js ***!
  \**********************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony export */n.d(t,{
/* harmony export */DefaultWhitelist:function(){/* binding */return o},
/* harmony export */sanitizeHtml:function(){/* binding */return l}
/* harmony export */});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tools/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */var i=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"];var o={
// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */var r=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */var s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function a(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n)){if(-1!==i.indexOf(n))return Boolean(r.test(e.nodeValue)||s.test(e.nodeValue));return true}var o=t.filter((function(e){return e instanceof RegExp}));
// Check if a regular expression validates the attribute.
for(var a=0,l=o.length;a<l;a++)if(o[a].test(n))return true;return false}function l(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);var i=(new window.DOMParser).parseFromString(e,"text/html");var o=Object.keys(t);var r=[].slice.call(i.body.querySelectorAll("*"));var s=function e(){var n=r[l];var i=n.nodeName.toLowerCase();if(-1===o.indexOf(n.nodeName.toLowerCase())){n.parentNode.removeChild(n);return 1;// continue
}var s=[].slice.call(n.attributes);
// eslint-disable-next-line unicorn/prefer-spread
var c=[].concat(t["*"]||[],t[i]||[]);s.forEach((function(e){if(!a(e,c))n.removeAttribute(e.nodeName)}))};for(var l=0,c=r.length;l<c;l++)if(s())continue;return i.body.innerHTML}
/***/},
/***/"./node_modules/bootstrap/js/src/tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tooltip.js ***!
  \**************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! ./tools/sanitizer */"./node_modules/bootstrap/js/src/tools/sanitizer.js");
/* harmony import */var o=n(/*! jquery */"jquery");
/* harmony import */var r=n.n(o);
/* harmony import */var s=n(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var a=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){if((t=v(t))in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,v(i.key),i)}}function h(e,t,n){if(t)p(e.prototype,t);if(n)p(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function v(e){var t=m(e,"string");return"symbol"==d(t)?t:t+""}function m(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var g="tooltip";var y="4.6.2";var b="bs.tooltip";var w=".".concat(b);var _=r().fn[g];var k="bs-tooltip";var T=new RegExp("(^|\\s)".concat(k,"\\S+"),"g");var S=["sanitize","whiteList","sanitizeFn"];var C="fade";var j="show";var E="show";var x="out";var O=".tooltip-inner";var A=".arrow";var P="hover";var $="focus";var D="click";var N="manual";var L={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"};var I={animation:true,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,selector:false,placement:"top",offset:0,container:false,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:true,sanitizeFn:null,whiteList:i.DefaultWhitelist,popperConfig:null};var z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"};var M={HIDE:"hide".concat(w),HIDDEN:"hidden".concat(w),SHOW:"show".concat(w),SHOWN:"shown".concat(w),INSERTED:"inserted".concat(w),CLICK:"click".concat(w),FOCUSIN:"focusin".concat(w),FOCUSOUT:"focusout".concat(w),MOUSEENTER:"mouseenter".concat(w),MOUSELEAVE:"mouseleave".concat(w)};
/**
 * Class definition
 */var F=function(){function e(t,n){f(this,e);if(void 0===s.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
// Private
this._isEnabled=true;this._timeout=0;this._hoverState="";this._activeTrigger={};this._popper=null;
// Protected
this.element=t;this.config=this._getConfig(n);this.tip=null;this._setListeners()}
// Getters
return h(e,[{key:"enable",value:
// Public
function e(){this._isEnabled=true}},{key:"disable",value:function e(){this._isEnabled=false}},{key:"toggleEnabled",value:function e(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function e(t){if(!this._isEnabled)return;if(t){var n=this.constructor.DATA_KEY;var i=r()(t.currentTarget).data(n);if(!i){i=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(n,i)}i._activeTrigger.click=!i._activeTrigger.click;if(i._isWithActiveTrigger())i._enter(null,i);else i._leave(null,i)}else{if(r()(this.getTipElement()).hasClass(j)){this._leave(null,this);return}this._enter(null,this)}}},{key:"dispose",value:function e(){clearTimeout(this._timeout);r().removeData(this.element,this.constructor.DATA_KEY);r()(this.element).off(this.constructor.EVENT_KEY);r()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler);if(this.tip)r()(this.tip).remove();this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper)this._popper.destroy();this._popper=null;this.element=null;this.config=null;this.tip=null}},{key:"show",value:function e(){var t=this;if("none"===r()(this.element).css("display"))throw new Error("Please use show on visible elements");var n=r().Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){r()(this.element).trigger(n);var i=a.default.findShadowRoot(this.element);var o=r().contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!o)return;var l=this.getTipElement();var c=a.default.getUID(this.constructor.NAME);l.setAttribute("id",c);this.element.setAttribute("aria-describedby",c);this.setContent();if(this.config.animation)r()(l).addClass(C);var u="function"==typeof this.config.placement?this.config.placement.call(this,l,this.element):this.config.placement;var d=this._getAttachment(u);this.addAttachmentClass(d);var f=this._getContainer();r()(l).data(this.constructor.DATA_KEY,this);if(!r().contains(this.element.ownerDocument.documentElement,this.tip))r()(l).appendTo(f);r()(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new s.default(this.element,l,this._getPopperConfig(d));r()(l).addClass(j);r()(l).addClass(this.config.customClass);
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement)r()(document.body).children().on("mouseover",null,r().noop);var p=function e(){if(t.config.animation)t._fixTransition();var n=t._hoverState;t._hoverState=null;r()(t.element).trigger(t.constructor.Event.SHOWN);if(n===x)t._leave(null,t)};if(r()(this.tip).hasClass(C)){var h=a.default.getTransitionDurationFromElement(this.tip);r()(this.tip).one(a.default.TRANSITION_END,p).emulateTransitionEnd(h)}else p()}}},{key:"hide",value:function e(t){var n=this;var i=this.getTipElement();var o=r().Event(this.constructor.Event.HIDE);var s=function e(){if(n._hoverState!==E&&i.parentNode)i.parentNode.removeChild(i);n._cleanTipClass();n.element.removeAttribute("aria-describedby");r()(n.element).trigger(n.constructor.Event.HIDDEN);if(null!==n._popper)n._popper.destroy();if(t)t()};r()(this.element).trigger(o);if(o.isDefaultPrevented())return;r()(i).removeClass(j);
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)r()(document.body).children().off("mouseover",null,r().noop);this._activeTrigger[D]=false;this._activeTrigger[$]=false;this._activeTrigger[P]=false;if(r()(this.tip).hasClass(C)){var l=a.default.getTransitionDurationFromElement(i);r()(i).one(a.default.TRANSITION_END,s).emulateTransitionEnd(l)}else s();this._hoverState=""}},{key:"update",value:function e(){if(null!==this._popper)this._popper.scheduleUpdate()}
// Protected
},{key:"isWithContent",value:function e(){return Boolean(this.getTitle())}},{key:"addAttachmentClass",value:function e(t){r()(this.getTipElement()).addClass("".concat(k,"-").concat(t))}},{key:"getTipElement",value:function e(){this.tip=this.tip||r()(this.config.template)[0];return this.tip}},{key:"setContent",value:function e(){var t=this.getTipElement();this.setElementContent(r()(t.querySelectorAll(O)),this.getTitle());r()(t).removeClass("".concat(C," ").concat(j))}},{key:"setElementContent",value:function e(t,n){if("object"===d(n)&&(n.nodeType||n.jquery)){
// Content is a DOM node or a jQuery
if(this.config.html){if(!r()(n).parent().is(t))t.empty().append(n)}else t.text(r()(n).text());return}if(this.config.html){if(this.config.sanitize)n=(0,i.sanitizeHtml)(n,this.config.whiteList,this.config.sanitizeFn);t.html(n)}else t.text(n)}},{key:"getTitle",value:function e(){var t=this.element.getAttribute("data-original-title");if(!t)t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title;return t}
// Private
},{key:"_getPopperConfig",value:function e(t){var n=this;return c(c({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:A},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function e(t){if(t.originalPlacement!==t.placement)n._handlePopperPlacementChange(t)},onUpdate:function e(t){return n._handlePopperPlacementChange(t)}}),this.config.popperConfig)}},{key:"_getOffset",value:function e(){var t=this;var n={};if("function"==typeof this.config.offset)n.fn=function(e){e.offsets=c(c({},e.offsets),t.config.offset(e.offsets,t.element));return e};else n.offset=this.config.offset;return n}},{key:"_getContainer",value:function e(){if(false===this.config.container)return document.body;if(a.default.isElement(this.config.container))return r()(this.config.container);return r()(document).find(this.config.container)}},{key:"_getAttachment",value:function e(t){return L[t.toUpperCase()]}},{key:"_setListeners",value:function e(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)r()(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if(e!==N){var n=e===P?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN;var i=e===P?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;r()(t.element).on(n,t.config.selector,(function(e){return t._enter(e)})).on(i,t.config.selector,(function(e){return t._leave(e)}))}}));this._hideModalHandler=function(){if(t.element)t.hide()};r()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler);if(this.config.selector)this.config=c(c({},this.config),{},{trigger:"manual",selector:""});else this._fixTitle()}},{key:"_fixTitle",value:function e(){var t=d(this.element.getAttribute("data-original-title"));if(this.element.getAttribute("title")||"string"!==t){this.element.setAttribute("data-original-title",this.element.getAttribute("title")||"");this.element.setAttribute("title","")}}},{key:"_enter",value:function e(t,n){var i=this.constructor.DATA_KEY;if(!(n=n||r()(t.currentTarget).data(i))){n=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(i,n)}if(t)n._activeTrigger["focusin"===t.type?$:P]=true;if(r()(n.getTipElement()).hasClass(j)||n._hoverState===E){n._hoverState=E;return}clearTimeout(n._timeout);n._hoverState=E;if(!n.config.delay||!n.config.delay.show){n.show();return}n._timeout=setTimeout((function(){if(n._hoverState===E)n.show()}),n.config.delay.show)}},{key:"_leave",value:function e(t,n){var i=this.constructor.DATA_KEY;if(!(n=n||r()(t.currentTarget).data(i))){n=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(i,n)}if(t)n._activeTrigger["focusout"===t.type?$:P]=false;if(n._isWithActiveTrigger())return;clearTimeout(n._timeout);n._hoverState=x;if(!n.config.delay||!n.config.delay.hide){n.hide();return}n._timeout=setTimeout((function(){if(n._hoverState===x)n.hide()}),n.config.delay.hide)}},{key:"_isWithActiveTrigger",value:function e(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return true;return false}},{key:"_getConfig",value:function e(t){var n=r()(this.element).data();Object.keys(n).forEach((function(e){if(-1!==S.indexOf(e))delete n[e]}));if("number"==typeof(t=c(c(c({},this.constructor.Default),n),"object"===d(t)&&t?t:{})).delay)t.delay={show:t.delay,hide:t.delay};if("number"==typeof t.title)t.title=t.title.toString();if("number"==typeof t.content)t.content=t.content.toString();a.default.typeCheckConfig(g,t,this.constructor.DefaultType);if(t.sanitize)t.template=(0,i.sanitizeHtml)(t.template,t.whiteList,t.sanitizeFn);return t}},{key:"_getDelegateConfig",value:function e(){var t={};if(this.config)for(var n in this.config)if(this.constructor.Default[n]!==this.config[n])t[n]=this.config[n];return t}},{key:"_cleanTipClass",value:function e(){var t=r()(this.getTipElement());var n=t.attr("class").match(T);if(null!==n&&n.length)t.removeClass(n.join(""))}},{key:"_handlePopperPlacementChange",value:function e(t){this.tip=t.instance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(t.placement))}},{key:"_fixTransition",value:function e(){var t=this.getTipElement();var n=this.config.animation;if(null!==t.getAttribute("x-placement"))return;r()(t).removeClass(C);this.config.animation=false;this.hide();this.show();this.config.animation=n}
// Static
}],[{key:"VERSION",get:function e(){return y}},{key:"Default",get:function e(){return I}},{key:"NAME",get:function e(){return g}},{key:"DATA_KEY",get:function e(){return b}},{key:"Event",get:function e(){return M}},{key:"EVENT_KEY",get:function e(){return w}},{key:"DefaultType",get:function e(){return z}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=r()(this);var i=t.data(b);var o="object"===d(n)&&n;if(!i&&/dispose|hide/.test(n))return;if(!i){i=new e(this,o);t.data(b,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n]()}}))}}])}();
/**
 * jQuery
 */r().fn[g]=F._jQueryInterface;r().fn[g].Constructor=F;r().fn[g].noConflict=function(){r().fn[g]=_;return F._jQueryInterface};
/* harmony default export */t.default=F;
/***/},
/***/"./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Private TransitionEnd Helpers
 */var r="transitionend";var s=1e6;var a=1e3;
// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function l(e){if(null==e)return"".concat(e);return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function c(){return{bindType:r,delegateType:r,handle:function e(t){if(o()(t.target).is(this))return t.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
return}}}function u(e){var t=this;var n=false;o()(this).one(f.TRANSITION_END,(function(){n=true}));setTimeout((function(){if(!n)f.triggerTransitionEnd(t)}),e);return this}function d(){o().fn.emulateTransitionEnd=u;o().event.special[f.TRANSITION_END]=c()}
/**
 * Public Util API
 */var f={TRANSITION_END:"bsTransitionEnd",getUID:function e(t){do{
// eslint-disable-next-line no-bitwise
t+=~~(Math.random()*s);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(t));return t},getSelectorFromElement:function e(t){var n=t.getAttribute("data-target");if(!n||"#"===n){var i=t.getAttribute("href");n=i&&"#"!==i?i.trim():""}try{return document.querySelector(n)?n:null}catch(e){return null}},getTransitionDurationFromElement:function e(t){if(!t)return 0;
// Get transition-duration of the element
var n=o()(t).css("transition-duration");var i=o()(t).css("transition-delay");var r=parseFloat(n);var s=parseFloat(i);
// Return 0 if element or transition duration is not found
if(!r&&!s)return 0;
// If multiple durations are defined, take the first
n=n.split(",")[0];i=i.split(",")[0];return(parseFloat(n)+parseFloat(i))*a},reflow:function e(t){return t.offsetHeight},triggerTransitionEnd:function e(t){o()(t).trigger(r)},supportsTransitionEnd:function e(){return Boolean(r)},isElement:function e(t){return(t[0]||t).nodeType},typeCheckConfig:function e(t,n,i){for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var r=i[o];var s=n[o];var a=s&&f.isElement(s)?"element":l(s);if(!new RegExp(r).test(a))throw new Error("".concat(t.toUpperCase(),": ")+'Option "'.concat(o,'" provided type "').concat(a,'" ')+'but expected type "'.concat(r,'".'))}},findShadowRoot:function e(t){if(!document.documentElement.attachShadow)return null;
// Can find the shadow root otherwise it'll return the document
if("function"==typeof t.getRootNode){var n=t.getRootNode();return n instanceof ShadowRoot?n:null}if(t instanceof ShadowRoot)return t;
// when we don't find a shadow root
if(!t.parentNode)return null;return f.findShadowRoot(t.parentNode)},jQueryDetection:function e(){if(void 0===o())throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=o().fn.jquery.split(" ")[0].split(".");var n=1;var i=2;var r=9;var s=1;var a=4;if(t[0]<i&&t[1]<r||t[0]===n&&t[1]===r&&t[2]<s||t[0]>=a)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};f.jQueryDetection();d();
/* harmony default export */t.default=f;
/***/},
/***/"./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/function(e){"use strict";
// Copyright Joyent, Inc. and other Node contributors.

// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:

// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var n="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect:null;var i=n&&"function"==typeof n.apply?n.apply:function e(t,n,i){return Function.prototype.apply.call(t,n,i)};var o;if(n&&"function"==typeof n.ownKeys)o=n.ownKeys;else if(Object.getOwnPropertySymbols)o=function e(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))};else o=function e(t){return Object.getOwnPropertyNames(t)};function r(e){if(console&&console.warn)console.warn(e)}var s=Number.isNaN||function e(t){return t!=t};function a(){a.init.call(this)}e.exports=a;e.exports.once=b;
// Backwards-compat with node 0.10.x
a.EventEmitter=a;a.prototype._events=void 0;a.prototype._eventsCount=0;a.prototype._maxListeners=void 0;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var l=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+t(e))}Object.defineProperty(a,"defaultMaxListeners",{enumerable:true,get:function e(){return l},set:function e(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");l=t}});a.init=function(){if(void 0===this._events||this._events===Object.getPrototypeOf(this)._events){this._events=Object.create(null);this._eventsCount=0}this._maxListeners=this._maxListeners||void 0};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
a.prototype.setMaxListeners=function e(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");this._maxListeners=t;return this};function u(e){if(void 0===e._maxListeners)return a.defaultMaxListeners;return e._maxListeners}a.prototype.getMaxListeners=function e(){return u(this)};a.prototype.emit=function e(t){var n=[];for(var o=1;o<arguments.length;o++)n.push(arguments[o]);var r="error"===t;var s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return false;
// If there is no 'error' event listener then throw.
if(r){var a;if(n.length>0)a=n[0];if(a instanceof Error)
// Note: The comments on the `throw` lines are intentional, they show
// up in Node's output if this results in an unhandled exception.
throw a;// Unhandled 'error' event
// At least give some kind of context to the user
var l=new Error("Unhandled error."+(a?" ("+a.message+")":""));l.context=a;throw l;// Unhandled 'error' event
}var c=s[t];if(void 0===c)return false;if("function"==typeof c)i(c,this,n);else{var u=c.length;var d=m(c,u);for(o=0;o<u;++o)i(d[o],this,n)}return true};function d(e,t,n,i){var o;var s;var a;c(n);if(void 0===(s=e._events)){s=e._events=Object.create(null);e._eventsCount=0}else{
// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(void 0!==s.newListener){e.emit("newListener",t,n.listener?n.listener:n);
// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
s=e._events}a=s[t]}if(void 0===a){
// Optimize the case of one listener. Don't need the extra array object.
a=s[t]=n;++e._eventsCount}else{if("function"==typeof a)
// Adding the second element, need to change to array.
a=s[t]=i?[n,a]:[a,n];
// If we've already got an array, just append.
else if(i)a.unshift(n);else a.push(n);
// Check for listener leak
if((o=u(e))>0&&a.length>o&&!a.warned){a.warned=true;
// No error code for this since it is a Warning
// eslint-disable-next-line no-restricted-syntax
var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning";l.emitter=e;l.type=t;l.count=a.length;r(l)}}return e}a.prototype.addListener=function e(t,n){return d(this,t,n,false)};a.prototype.on=a.prototype.addListener;a.prototype.prependListener=function e(t,n){return d(this,t,n,true)};function f(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;if(0===arguments.length)return this.listener.call(this.target);return this.listener.apply(this.target,arguments)}}function p(e,t,n){var i={fired:false,wrapFn:void 0,target:e,type:t,listener:n};var o=f.bind(i);o.listener=n;i.wrapFn=o;return o}a.prototype.once=function e(t,n){c(n);this.on(t,p(this,t,n));return this};a.prototype.prependOnceListener=function e(t,n){c(n);this.prependListener(t,p(this,t,n));return this};
// Emits a 'removeListener' event if and only if the listener was removed.
a.prototype.removeListener=function e(t,n){var i,o,r,s,a;c(n);if(void 0===(o=this._events))return this;if(void 0===(i=o[t]))return this;if(i===n||i.listener===n)if(0==--this._eventsCount)this._events=Object.create(null);else{delete o[t];if(o.removeListener)this.emit("removeListener",t,i.listener||n)}else if("function"!=typeof i){r=-1;for(s=i.length-1;s>=0;s--)if(i[s]===n||i[s].listener===n){a=i[s].listener;r=s;break}if(r<0)return this;if(0===r)i.shift();else g(i,r);if(1===i.length)o[t]=i[0];if(void 0!==o.removeListener)this.emit("removeListener",t,a||n)}return this};a.prototype.off=a.prototype.removeListener;a.prototype.removeAllListeners=function e(t){var n,i,o;if(void 0===(i=this._events))return this;
// not listening for removeListener, no need to emit
if(void 0===i.removeListener){if(0===arguments.length){this._events=Object.create(null);this._eventsCount=0}else if(void 0!==i[t])if(0==--this._eventsCount)this._events=Object.create(null);else delete i[t];return this}
// emit removeListener for all listeners on all events
if(0===arguments.length){var r=Object.keys(i);var s;for(o=0;o<r.length;++o){if("removeListener"===(s=r[o]))continue;this.removeAllListeners(s)}this.removeAllListeners("removeListener");this._events=Object.create(null);this._eventsCount=0;return this}if("function"==typeof(n=i[t]))this.removeListener(t,n);else if(void 0!==n)
// LIFO order
for(o=n.length-1;o>=0;o--)this.removeListener(t,n[o]);return this};function h(e,t,n){var i=e._events;if(void 0===i)return[];var o=i[t];if(void 0===o)return[];if("function"==typeof o)return n?[o.listener||o]:[o];return n?y(o):m(o,o.length)}a.prototype.listeners=function e(t){return h(this,t,true)};a.prototype.rawListeners=function e(t){return h(this,t,false)};a.listenerCount=function(e,t){if("function"==typeof e.listenerCount)return e.listenerCount(t);else return v.call(e,t)};a.prototype.listenerCount=v;function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;else if(void 0!==n)return n.length}return 0}a.prototype.eventNames=function e(){return this._eventsCount>0?o(this._events):[]};function m(e,t){var n=new Array(t);for(var i=0;i<t;++i)n[i]=e[i];return n}function g(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function y(e){var t=new Array(e.length);for(var n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function b(e,t){return new Promise((function(n,i){function o(n){e.removeListener(t,r);i(n)}function r(){if("function"==typeof e.removeListener)e.removeListener("error",o);n([].slice.call(arguments))}_(e,t,r,{once:true});if("error"!==t)w(e,o,{once:true})}))}function w(e,t,n){if("function"==typeof e.on)_(e,"error",t,n)}function _(e,n,i,o){if("function"==typeof e.on)if(o.once)e.once(n,i);else e.on(n,i);else if("function"==typeof e.addEventListener)
// EventTarget does not have `error` event semantics like Node
// EventEmitters, we do not listen for `error` events here.
e.addEventListener(n,(function t(r){
// IE does not have builtin `{ once: true }` support so we
// have to do it manually.
if(o.once)e.removeEventListener(n,t);i(r)}));else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+t(e))}
/***/},
/***/"./node_modules/jquery-zoom/jquery.zoom.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-zoom/jquery.zoom.min.js ***!
  \*****************************************************/
/***/function(){
/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
e=window.jQuery,t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1},e.zoom=function(t,n,i,o){var r,s,a,l,c,u,d,f=e(t),p=f.css("position"),h=e(n);return t.style.position=/(absolute|fixed)/.test(p)?p:"relative",t.style.overflow="hidden",i.style.width=i.style.height="",e(i).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:i.width*o,height:i.height*o,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function e(){s=f.outerWidth(),r=f.outerHeight(),n===t?(l=s,a=r):(l=h.outerWidth(),a=h.outerHeight()),c=(i.width-s)/l,u=(i.height-r)/a,d=h.offset()},move:function e(t){var n=t.pageX-d.left,o=t.pageY-d.top;o=Math.max(Math.min(o,a),0),n=Math.max(Math.min(n,l),0),i.style.left=n*-c+"px",i.style.top=o*-u+"px"}}},e.fn.zoom=function(n){return this.each((function(){var i=e.extend({},t,n||{}),o=i.target&&e(i.target)[0]||this,r=this,s=e(r),a=document.createElement("img"),l=e(a),c="mousemove.zoom",u=!1,d=!1;if(!i.url){var f=r.querySelector("img");if(f&&(i.url=f.getAttribute("data-src")||f.currentSrc||f.src),!i.url)return}s.one("zoom.destroy",function(e,t){s.off(".zoom"),o.style.position=e,o.style.overflow=t,a.onload=null,l.remove()}.bind(this,o.style.position,o.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),l.stop().fadeTo(e.support.opacity?i.duration:0,1,e.isFunction(i.onZoomIn)?i.onZoomIn.call(a):!1)}function n(){l.stop().fadeTo(i.duration,0,e.isFunction(i.onZoomOut)?i.onZoomOut.call(a):!1)}var f=e.zoom(o,r,a,i.magnify);"grab"===i.on?s.on("mousedown.zoom",(function(i){1===i.which&&(e(document).one("mouseup.zoom",(function(){n(),e(document).off(c,f.move)})),t(i),e(document).on(c,f.move),i.preventDefault())})):"click"===i.on?s.on("click.zoom",(function(i){return u?void 0:(u=!0,t(i),e(document).on(c,f.move),e(document).one("click.zoom",(function(){n(),u=!1,e(document).off(c,f.move)})),!1)})):"toggle"===i.on?s.on("click.zoom",(function(e){u?n():t(e),u=!u})):"mouseover"===i.on&&(f.init(),s.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(c,f.move)),i.touch&&s.on("touchstart.zoom",(function(e){e.preventDefault(),d?(d=!1,n()):(d=!0,t(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]))})).on("touchmove.zoom",(function(e){e.preventDefault(),f.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])})).on("touchend.zoom",(function(e){e.preventDefault(),d&&(d=!1,n())})),e.isFunction(i.callback)&&i.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=i.url}))},e.fn.zoom.defaults=t;
/***/var e,t},
/***/"./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/function(e,t,n){
/* module decorator */e=n.nmd(e);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}!function(t,n){var o=n(t,t.document,Date);t.lazySizes=o;if("object"==(false?0:i(e))&&e.exports)e.exports=o}("undefined"!=typeof window?window:{},(
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function e(t,n,i){
// Pass in the window Date function also for SSR because the Date class can be lost
"use strict";
/*jshint eqnull:true */var o,
/**
     * @type { LazySizesConfigPartial }
     */
r;!function(){var e;var n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",
//strictClass: 'lazystrict',
autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",
//preloadAfterLoad: false,
minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};r=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)if(!(e in r))r[e]=n[e]}();if(!n||!n.getElementsByClassName)return{init:function e(){},
/**
       * @type { LazySizesConfigPartial }
       */
cfg:r,
/**
       * @type { true }
       */
noSupport:true};var s=n.documentElement;var a=t.HTMLPictureElement;var l="addEventListener";var c="getAttribute";
/**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */var u=t[l].bind(t);var d=t.setTimeout;var f=t.requestAnimationFrame||d;var p=t.requestIdleCallback;var h=/^picture$/i;var v=["load","error","lazyincluded","_lazyloaded"];var m={};var g=Array.prototype.forEach;
/**
   * @param ele {Element}
   * @param cls {string}
   */var y=function e(t,n){if(!m[n])m[n]=new RegExp("(\\s|^)"+n+"(\\s|$)");return m[n].test(t[c]("class")||"")&&m[n]};
/**
   * @param ele {Element}
   * @param cls {string}
   */var b=function e(t,n){if(!y(t,n))t.setAttribute("class",(t[c]("class")||"").trim()+" "+n)};
/**
   * @param ele {Element}
   * @param cls {string}
   */var w=function e(t,n){var i;if(i=y(t,n))t.setAttribute("class",(t[c]("class")||"").replace(i," "))};var _=function e(t,n,i){var o=i?l:"removeEventListener";if(i)e(t,n);v.forEach((function(e){t[o](e,n)}))};
/**
   * @param elem { Element }
   * @param name { string }
   * @param detail { any }
   * @param noBubbles { boolean }
   * @param noCancelable { boolean }
   * @returns { CustomEvent }
   */var k=function e(t,i,r,s,a){var l=n.createEvent("Event");if(!r)r={};r.instance=o;l.initEvent(i,!s,!a);l.detail=r;t.dispatchEvent(l);return l};var T=function e(n,i){var o;if(!a&&(o=t.picturefill||r.pf)){if(i&&i.src&&!n[c]("srcset"))n.setAttribute("srcset",i.src);o({reevaluate:true,elements:[n]})}else if(i&&i.src)n.src=i.src};var S=function e(t,n){return(getComputedStyle(t,null)||{})[n]};
/**
   *
   * @param elem { Element }
   * @param parent { Element }
   * @param [width] {number}
   * @returns {number}
   */var C=function e(t,n,i){i=i||t.offsetWidth;for(;i<r.minSize&&n&&!t._lazysizesWidth;){i=n.offsetWidth;n=n.parentNode}return i};var j=function(){var e,t;var i=[];var o=[];var r=i;var s=function n(){var s=r;r=i.length?o:i;e=true;t=false;for(;s.length;)s.shift()();e=false};var a=function i(o,a){if(e&&!a)o.apply(this,arguments);else{r.push(o);if(!t){t=true;(n.hidden?d:f)(s)}}};a._lsFlush=s;return a}();var E=function e(t,n){return n?function(){j(t)}:function(){var e=this;var n=arguments;j((function(){t.apply(e,n)}))}};var x=function e(t){var n;var o=0;var s=r.throttleDelay;var a=r.ricTimeout;var l=function e(){n=false;o=i.now();t()};var c=p&&a>49?function(){p(l,{timeout:a});if(a!==r.ricTimeout)a=r.ricTimeout}:E((function(){d(l)}),true);return function(e){var t;if(e=true===e)a=33;if(n)return;n=true;if((t=s-(i.now()-o))<0)t=0;if(e||t<9)c();else d(c,t)}};
//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
var O=function e(t){var n,o;var r=99;var s=function e(){n=null;t()};var a=function e(){var t=i.now()-o;if(t<r)d(e,r-t);else(p||s)(s)};return function(){o=i.now();if(!n)n=d(a,r)}};var A=(W=/^img$/i,B=/^iframe$/i,U="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,Y=0,V=0,X=-1,K=function e(t){V--;if(!t||V<0||!t.target)V=0},G=function e(t){if(null==R)R="hidden"==S(n.body,"visibility");return R||!("hidden"==S(t.parentNode,"visibility")&&"hidden"==S(t,"visibility"))},Z=function e(t,i){var o;var r=t;var a=G(t);M-=i;q+=i;F-=i;H+=i;for(;a&&(r=r.offsetParent)&&r!=n.body&&r!=s;)if((a=(S(r,"opacity")||1)>0)&&"visible"!=S(r,"overflow")){o=r.getBoundingClientRect();a=H>o.left&&F<o.right&&q>o.top-1&&M<o.bottom+1}return a},ee=x(J=function e(){var t,i,a,l,u,d,f,p,h,v,m,g;var y=o.elements;if((N=r.loadMode)&&V<8&&(t=y.length)){i=0;X++;for(;i<t;i++){if(!y[i]||y[i]._lazyRace)continue;if(!U||o.prematureUnveil&&o.prematureUnveil(y[i])){ae(y[i]);continue}if(!(p=y[i][c]("data-expand"))||!(d=1*p))d=Y;if(!v){v=!r.expand||r.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:r.expand;o._defEx=v;m=v*r.expFactor;g=r.hFac;R=null;if(Y<m&&V<1&&X>2&&N>2&&!n.hidden){Y=m;X=0}else if(N>1&&X>1&&V<6)Y=v;else Y=Q}if(h!==d){I=innerWidth+d*g;z=innerHeight+d;f=-1*d;h=d}a=y[i].getBoundingClientRect();if((q=a.bottom)>=f&&(M=a.top)<=z&&(H=a.right)>=f*g&&(F=a.left)<=I&&(q||H||F||M)&&(r.loadHidden||G(y[i]))&&($&&V<3&&!p&&(N<3||X<4)||Z(y[i],d))){ae(y[i]);u=true;if(V>9)break}else if(!u&&$&&!l&&V<4&&X<4&&N>2&&(P[0]||r.preloadAfterLoad)&&(P[0]||!p&&(q||H||F||M||"auto"!=y[i][c](r.sizesAttr))))l=P[0]||y[i]}if(l&&!u)ae(l)}}),ne=E(te=function e(t){var n=t.target;if(n._lazyCache){delete n._lazyCache;return}K(t);b(n,r.loadedClass);w(n,r.loadingClass);_(n,ie);k(n,"lazyloaded")}),ie=function e(t){ne({target:t.target})},oe=function e(t,n){var i=t.getAttribute("data-load-mode")||r.iframeLoadMode;
// loadMode can be also a string!
if(0==i)t.contentWindow.location.replace(n);else if(1==i)t.src=n},re=function e(t){var n;var i=t[c](r.srcsetAttr);if(n=r.customMedia[t[c]("data-media")||t[c]("media")])t.setAttribute("media",n);if(i)t.setAttribute("srcset",i)},se=E((function(e,t,n,i,o){var s,a,l,u,f,p;if(!(f=k(e,"lazybeforeunveil",t)).defaultPrevented){if(i)if(n)b(e,r.autosizesClass);else e.setAttribute("sizes",i);a=e[c](r.srcsetAttr);s=e[c](r.srcAttr);if(o)u=(l=e.parentNode)&&h.test(l.nodeName||"");p=t.firesLoad||"src"in e&&(a||s||u);f={target:e};b(e,r.loadingClass);if(p){clearTimeout(D);D=d(K,2500);_(e,ie,true)}if(u)g.call(l.getElementsByTagName("source"),re);if(a)e.setAttribute("srcset",a);else if(s&&!u)if(B.test(e.nodeName))oe(e,s);else e.src=s;if(o&&(a||u))T(e,{src:s})}if(e._lazyRace)delete e._lazyRace;w(e,r.lazyClass);j((function(){
// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
var t=e.complete&&e.naturalWidth>1;if(!p||t){if(t)b(e,r.fastLoadedClass);te(f);e._lazyCache=true;d((function(){if("_lazyCache"in e)delete e._lazyCache}),9)}if("lazy"==e.loading)V--}),true)})),ae=function e(t){if(t._lazyRace)return;var n;var i=W.test(t.nodeName);
//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
var o=i&&(t[c](r.sizesAttr)||t[c]("sizes"));var s="auto"==o;if((s||!$)&&i&&(t[c]("src")||t.srcset)&&!t.complete&&!y(t,r.errorClass)&&y(t,r.lazyClass))return;n=k(t,"lazyunveilread").detail;if(s)de.updateElem(t,true,t.offsetWidth);t._lazyRace=true;V++;se(t,n,s,o,i)},le=O((function(){r.loadMode=3;ee()})),ue=function e(){if($)return;if(i.now()-L<999){d(e,999);return}$=true;r.loadMode=3;ee();u("scroll",ce,true)},{_:function e(){L=i.now();o.elements=n.getElementsByClassName(r.lazyClass);P=n.getElementsByClassName(r.lazyClass+" "+r.preloadClass);u("scroll",ee,true);u("resize",ee,true);u("pageshow",(function(e){if(e.persisted){var t=n.querySelectorAll("."+r.loadingClass);if(t.length&&t.forEach)f((function(){t.forEach((function(e){if(e.complete)ae(e)}))}))}}));if(t.MutationObserver)new MutationObserver(ee).observe(s,{childList:true,subtree:true,attributes:true});else{s[l]("DOMNodeInserted",ee,true);s[l]("DOMAttrModified",ee,true);setInterval(ee,999)}u("hashchange",ee,true);
//, 'fullscreenchange'
["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){n[l](e,ee,true)}));if(/d$|^c/.test(n.readyState))ue();else{u("load",ue);n[l]("DOMContentLoaded",ee);d(ue,2e4)}if(o.elements.length){J();j._lsFlush()}else ee()},checkElems:ee,unveil:ae,_aLSL:ce=function e(){if(3==r.loadMode)r.loadMode=2;le()}});var P,$,D,N,L,I,z,M,F,H,q,R,W,B,U,Q,Y,V,X,K,G,Z,J,ee,te,ne,ie,oe,re,se,ae,le,ce,ue;var de=(pe=E((function(e,t,n,i){var o,r,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(h.test(t.nodeName||""))for(r=0,s=(o=t.getElementsByTagName("source")).length;r<s;r++)o[r].setAttribute("sizes",i);if(!n.detail.dataAttr)T(e,n.detail)})),he=function e(t,n,i){var o;var r=t.parentNode;if(r){i=C(t,r,i);if(!(o=k(t,"lazybeforesizes",{width:i,dataAttr:!!n})).defaultPrevented)if((i=o.detail.width)&&i!==t._lazysizesWidth)pe(t,r,o,i)}},{_:function e(){fe=n.getElementsByClassName(r.autosizesClass);u("resize",ve)},checkElems:ve=O((function e(){var t;var n=fe.length;if(n){t=0;for(;t<n;t++)he(fe[t])}})),updateElem:he});var fe,pe,he,ve;var me=function e(){if(!e.i&&n.getElementsByClassName){e.i=true;de._();A._()}};d((function(){if(r.init)me()}));return o={
/**
     * @type { LazySizesConfigPartial }
     */
cfg:r,autoSizer:de,loader:A,init:me,uP:T,aC:b,rC:w,hC:y,fire:k,gW:C,rAF:j}}));
/***/},
/***/"./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/function(e,t,n){"use strict";n.r(t);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator;var o=function(){var e=["Edge","Trident","Firefox"];for(var t=0;t<e.length;t+=1)if(i&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();function r(e){var t=false;return function(){if(t)return;t=true;window.Promise.resolve().then((function(){t=false;e()}))}}function s(e){var t=false;return function(){if(!t){t=true;setTimeout((function(){t=false;e()}),o)}}}
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var a=i&&window.Promise?r:s;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function l(e){return e&&"[object Function]"==={}.toString.call(e)}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function c(e,t){if(1!==e.nodeType)return[];
// NOTE: 1 DOM access here
var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function u(e){if("HTML"===e.nodeName)return e;return e.parentNode||e.host}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function d(e){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}
// Firefox want us to check `-x` and `-y` variations as well
var t=c(e),n=t.overflow,i=t.overflowX,o=t.overflowY;if(/(auto|scroll|overlay)/.test(n+o+i))return e;return d(u(e))}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */function f(e){return e&&e.referenceNode?e.referenceNode:e}var p=i&&!!(window.MSInputMethodContext&&document.documentMode);var h=i&&/MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function v(e){if(11===e)return p;if(10===e)return h;return p||h}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function m(e){if(!e)return document.documentElement;var t=v(10)?document.body:null;
// NOTE: 1 DOM access here
var n=e.offsetParent||null;
// Skip hidden elements which don't have an offsetParent
for(;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;if(!i||"BODY"===i||"HTML"===i)return e?e.ownerDocument.documentElement:document.documentElement;
// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===c(n,"position"))return m(n);return n}function g(e){var t=e.nodeName;if("BODY"===t)return false;return"HTML"===t||m(e.firstElementChild)===e}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function y(e){if(null!==e.parentNode)return y(e.parentNode);return e}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function b(e,t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;var i=n?e:t;var o=n?t:e;
// Get common ancestor container
var r=document.createRange();r.setStart(i,0);r.setEnd(o,0);var s=r.commonAncestorContainer;
// Both nodes are inside #document
if(e!==s&&t!==s||i.contains(o)){if(g(s))return s;return m(s)}
// one of the nodes is inside shadowDOM, find which one
var a=y(e);if(a.host)return b(a.host,t);else return b(e,y(t).host)}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function w(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft";var n=e.nodeName;if("BODY"===n||"HTML"===n){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[t]}return e[t]}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var i=w(t,"top");var o=w(t,"left");var r=n?-1:1;e.top+=i*r;e.bottom+=i*r;e.left+=o*r;e.right+=o*r;return e}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function k(e,t){var n="x"===t?"Left":"Top";var i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+i+"Width"])}function T(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],v(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function S(e){var t=e.body;var n=e.documentElement;var i=v(10)&&getComputedStyle(n);return{height:T("Height",t,n,i),width:T("Width",t,n,i)}}var C=function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")};var j=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();var E=function e(t,n,i){if(n in t)Object.defineProperty(t,n,{value:i,enumerable:true,configurable:true,writable:true});else t[n]=i;return t};var x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))e[i]=n[i]}return e};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function O(e){return x({},e,{right:e.left+e.width,bottom:e.top+e.height})}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function A(e){var t={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(v(10)){t=e.getBoundingClientRect();var n=w(e,"top");var i=w(e,"left");t.top+=n;t.left+=i;t.bottom+=n;t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top};
// subtract scrollbar size from sizes
var r="HTML"===e.nodeName?S(e.ownerDocument):{};var s=r.width||e.clientWidth||o.width;var a=r.height||e.clientHeight||o.height;var l=e.offsetWidth-s;var u=e.offsetHeight-a;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(l||u){var d=c(e);l-=k(d,"x");u-=k(d,"y");o.width-=l;o.height-=u}return O(o)}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var i=v(10);var o="HTML"===t.nodeName;var r=A(e);var s=A(t);var a=d(e);var l=c(t);var u=parseFloat(l.borderTopWidth);var f=parseFloat(l.borderLeftWidth);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(n&&o){s.top=Math.max(s.top,0);s.left=Math.max(s.left,0)}var p=O({top:r.top-s.top-u,left:r.left-s.left-f,width:r.width,height:r.height});p.marginTop=0;p.marginLeft=0;
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!i&&o){var h=parseFloat(l.marginTop);var m=parseFloat(l.marginLeft);p.top-=u-h;p.bottom-=u-h;p.left-=f-m;p.right-=f-m;
// Attach marginTop and marginLeft because in some circumstances we may need them
p.marginTop=h;p.marginLeft=m}if(i&&!n?t.contains(a):t===a&&"BODY"!==a.nodeName)p=_(p,t);return p}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var n=e.ownerDocument.documentElement;var i=P(e,n);var o=Math.max(n.clientWidth,window.innerWidth||0);var r=Math.max(n.clientHeight,window.innerHeight||0);var s=!t?w(n):0;var a=!t?w(n,"left"):0;return O({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function D(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return false;if("fixed"===c(e,"position"))return true;var n=u(e);if(!n)return false;return D(n)}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function N(e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||v())return document.documentElement;var t=e.parentElement;for(;t&&"none"===c(t,"transform");)t=t.parentElement;return t||document.documentElement}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function L(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:false;
// NOTE: 1 DOM access here
var r={top:0,left:0};var s=o?N(e):b(e,f(t));
// Handle viewport case
if("viewport"===i)r=$(s,o);else{
// Handle other cases based on DOM element used as boundaries
var a=void 0;if("scrollParent"===i){if("BODY"===(a=d(u(t))).nodeName)a=e.ownerDocument.documentElement}else if("window"===i)a=e.ownerDocument.documentElement;else a=i;var l=P(a,s,o);
// In case of HTML, we need a different computation
if("HTML"===a.nodeName&&!D(s)){var c=S(e.ownerDocument),p=c.height,h=c.width;r.top+=l.top-l.marginTop;r.bottom=p+l.top;r.left+=l.left-l.marginLeft;r.right=h+l.left}else
// for all the other DOM elements, this one is good
r=l}
// Add paddings
var v="number"==typeof(n=n||0);r.left+=v?n:n.left||0;r.top+=v?n:n.top||0;r.right-=v?n:n.right||0;r.bottom-=v?n:n.bottom||0;return r}function I(e){return e.width*e.height}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function z(e,t,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=L(n,i,r,o);var a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}};var l=Object.keys(a).map((function(e){return x({key:e},a[e],{area:I(a[e])})})).sort((function(e,t){return t.area-e.area}));var c=l.filter((function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}));var u=c.length>0?c[0].key:l[0].key;var d=e.split("-")[1];return u+(d?"-"+d:"")}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function M(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return P(n,i?N(t):b(t,f(n)),i)}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function F(e){var t=e.ownerDocument.defaultView.getComputedStyle(e);var n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0);var i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function H(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function q(e,t,n){n=n.split("-")[0];
// Get popper node sizes
var i=F(e);
// Add position, width and height to our offsets object
var o={width:i.width,height:i.height};
// depending by the popper placement we have to compute its offsets slightly differently
var r=-1!==["right","left"].indexOf(n);var s=r?"top":"left";var a=r?"left":"top";var l=r?"height":"width";var c=!r?"height":"width";o[s]=t[s]+t[l]/2-i[l]/2;if(n===a)o[a]=t[a]-i[c];else o[a]=t[H(a)];return o}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function R(e,t){
// use native find if supported
if(Array.prototype.find)return e.find(t);
// use `filter` to obtain the same behavior of `find`
return e.filter(t)[0]}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function W(e,t,n){
// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));
// use `find` + `indexOf` if `findIndex` isn't supported
var i=R(e,(function(e){return e[t]===n}));return e.indexOf(i)}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function B(e,t,n){(void 0===n?e:e.slice(0,W(e,"name",n))).forEach((function(e){if(e.function)
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;// eslint-disable-line dot-notation
if(e.enabled&&l(n)){
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
t.offsets.popper=O(t.offsets.popper);t.offsets.reference=O(t.offsets.reference);t=n(t,e)}}));return t}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function U(){
// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed)return;var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};
// compute reference element offsets
e.offsets.reference=M(this.state,this.popper,this.reference,this.options.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=z(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);
// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement;e.positionFixed=this.options.positionFixed;
// compute the popper offsets
e.offsets.popper=q(this.popper,e.offsets.reference,e.placement);e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";
// run the modifiers
e=B(this.modifiers,e);
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(e)}else this.options.onUpdate(e)}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function Q(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function Y(e){var t=[false,"ms","Webkit","Moz","O"];var n=e.charAt(0).toUpperCase()+e.slice(1);for(var i=0;i<t.length;i++){var o=t[i];var r=o?""+o+n:e;if(void 0!==document.body.style[r])return r}return null}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function V(){this.state.isDestroyed=true;
// touch DOM only if `applyStyle` modifier is enabled
if(Q(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[Y("transform")]=""}this.disableEventListeners();
// remove the popper if user explicitly asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy)this.popper.parentNode.removeChild(this.popper);return this}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function X(e){var t=e.ownerDocument;return t?t.defaultView:window}function K(e,t,n,i){var o="BODY"===e.nodeName;var r=o?e.ownerDocument.defaultView:e;r.addEventListener(t,n,{passive:true});if(!o)K(d(r.parentNode),t,n,i);i.push(r)}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function G(e,t,n,i){
// Resize event listener on window
n.updateBound=i;X(e).addEventListener("resize",n.updateBound,{passive:true});
// Scroll event listener on scroll parents
var o=d(e);K(o,"scroll",n.updateBound,n.scrollParents);n.scrollElement=o;n.eventsEnabled=true;return n}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function Z(){if(!this.state.eventsEnabled)this.state=G(this.reference,this.options,this.state,this.scheduleUpdate)}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function J(e,t){
// Remove resize event listener on window
X(e).removeEventListener("resize",t.updateBound);
// Remove scroll event listener on scroll parents
t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)}));
// Reset state
t.updateBound=null;t.scrollParents=[];t.scrollElement=null;t.eventsEnabled=false;return t}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function ee(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=J(this.reference,this.state)}}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function te(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function ne(e,t){Object.keys(t).forEach((function(n){var i="";
// add unit if the value is numeric and is one of the following
if(-1!==["width","height","top","right","bottom","left"].indexOf(n)&&te(t[n]))i="px";e.style[n]=t[n]+i}))}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function ie(e,t){Object.keys(t).forEach((function(n){if(false!==t[n])e.setAttribute(n,t[n]);else e.removeAttribute(n)}))}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function oe(e){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
ne(e.instance.popper,e.styles);
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
ie(e.instance.popper,e.attributes);
// if arrowElement is defined and arrowStyles has some properties
if(e.arrowElement&&Object.keys(e.arrowStyles).length)ne(e.arrowElement,e.arrowStyles);return e}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function re(e,t,n,i,o){
// compute reference element offsets
var r=M(o,t,e,n.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var s=z(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);t.setAttribute("x-placement",s);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
ne(t,{position:n.positionFixed?"fixed":"absolute"});return n}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */function se(e,t){var n=e.offsets,i=n.popper,o=n.reference;var r=Math.round,s=Math.floor;var a=function e(t){return t};var l=r(o.width);var c=r(i.width);var u=-1!==["left","right"].indexOf(e.placement);var d=-1!==e.placement.indexOf("-");var f=!t?a:u||d||l%2==c%2?r:s;var p=!t?a:r;return{left:f(l%2==1&&c%2==1&&!d&&t?i.left-1:i.left),top:p(i.top),bottom:p(i.bottom),right:f(i.right)}}var ae=i&&/Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function le(e,t){var n=t.x,i=t.y;var o=e.offsets.popper;
// Remove this legacy support in Popper.js v2
var r=R(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;if(void 0!==r)console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration;var a=m(e.instance.popper);var l=A(a);
// Styles
var c={position:o.position};var u=se(e,window.devicePixelRatio<2||!ae);var d="bottom"===n?"top":"bottom";var f="right"===i?"left":"right";
// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var p=Y("transform");
// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var h=void 0,v=void 0;if("bottom"===d)
// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if("HTML"===a.nodeName)v=-a.clientHeight+u.bottom;else v=-l.height+u.bottom;else v=u.top;if("right"===f)if("HTML"===a.nodeName)h=-a.clientWidth+u.right;else h=-l.width+u.right;else h=u.left;if(s&&p){c[p]="translate3d("+h+"px, "+v+"px, 0)";c[d]=0;c[f]=0;c.willChange="transform"}else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var g="bottom"===d?-1:1;var y="right"===f?-1:1;c[d]=v*g;c[f]=h*y;c.willChange=d+", "+f}
// Attributes
var b={"x-placement":e.placement};
// Update `data` attributes, styles and arrowStyles
e.attributes=x({},b,e.attributes);e.styles=x({},c,e.styles);e.arrowStyles=x({},e.offsets.arrow,e.arrowStyles);return e}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function ce(e,t,n){var i=R(e,(function(e){return e.name===t}));var o=!!i&&e.some((function(e){return e.name===n&&e.enabled&&e.order<i.order}));if(!o){var r="`"+t+"`";var s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ue(e,t){var n;
// arrow depends on keepTogether in order to work
if(!ce(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof i){
// if arrowElement is not found, don't run the modifier
if(!(i=e.instance.popper.querySelector(i)))return e}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!e.instance.popper.contains(i)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return e}var o=e.placement.split("-")[0];var r=e.offsets,s=r.popper,a=r.reference;var l=-1!==["left","right"].indexOf(o);var u=l?"height":"width";var d=l?"Top":"Left";var f=d.toLowerCase();var p=l?"left":"top";var h=l?"bottom":"right";var v=F(i)[u];

// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction

// top/left side
if(a[h]-v<s[f])e.offsets.popper[f]-=s[f]-(a[h]-v);
// bottom/right side
if(a[f]+v>s[h])e.offsets.popper[f]+=a[f]+v-s[h];e.offsets.popper=O(e.offsets.popper);
// compute center of the popper
var m=a[f]+a[u]/2-v/2;
// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var g=c(e.instance.popper);var y=parseFloat(g["margin"+d]);var b=parseFloat(g["border"+d+"Width"]);var w=m-e.offsets.popper[f]-y-b;
// prevent arrowElement from being placed not contiguously to its popper
w=Math.max(Math.min(s[u]-v,w),0);e.arrowElement=i;e.offsets.arrow=(E(n={},f,Math.round(w)),E(n,p,""),n);return e}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function de(e){if("end"===e)return"start";else if("start"===e)return"end";return e}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var fe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];
// Get rid of `auto` `auto-start` and `auto-end`
var pe=fe.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var n=pe.indexOf(e);var i=pe.slice(n+1).concat(pe.slice(0,n));return t?i.reverse():i}var ve={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function me(e,t){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(Q(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return e;var n=L(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed);var i=e.placement.split("-")[0];var o=H(i);var r=e.placement.split("-")[1]||"";var s=[];switch(t.behavior){case ve.FLIP:s=[i,o];break;case ve.CLOCKWISE:s=he(i);break;case ve.COUNTERCLOCKWISE:s=he(i,true);break;default:s=t.behavior}s.forEach((function(a,l){if(i!==a||s.length===l+1)return e;i=e.placement.split("-")[0];o=H(i);var c=e.offsets.popper;var u=e.offsets.reference;
// using floor because the reference offsets may contain decimals we are not going to consider here
var d=Math.floor;var f="left"===i&&d(c.right)>d(u.left)||"right"===i&&d(c.left)<d(u.right)||"top"===i&&d(c.bottom)>d(u.top)||"bottom"===i&&d(c.top)<d(u.bottom);var p=d(c.left)<d(n.left);var h=d(c.right)>d(n.right);var v=d(c.top)<d(n.top);var m=d(c.bottom)>d(n.bottom);var g="left"===i&&p||"right"===i&&h||"top"===i&&v||"bottom"===i&&m;
// flip the variation if required
var y=-1!==["top","bottom"].indexOf(i);
// flips variation if reference element overflows boundaries
var b=!!t.flipVariations&&(y&&"start"===r&&p||y&&"end"===r&&h||!y&&"start"===r&&v||!y&&"end"===r&&m);
// flips variation if popper content overflows boundaries
var w=!!t.flipVariationsByContent&&(y&&"start"===r&&h||y&&"end"===r&&p||!y&&"start"===r&&m||!y&&"end"===r&&v);var _=b||w;if(f||g||_){
// this boolean to detect any flip loop
e.flipped=true;if(f||g)i=s[l+1];if(_)r=de(r);e.placement=i+(r?"-"+r:"");
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
e.offsets.popper=x({},e.offsets.popper,q(e.instance.popper,e.offsets.reference,e.placement));e=B(e.instance.modifiers,e,"flip")}}));return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ge(e){var t=e.offsets,n=t.popper,i=t.reference;var o=e.placement.split("-")[0];var r=Math.floor;var s=-1!==["top","bottom"].indexOf(o);var a=s?"right":"bottom";var l=s?"left":"top";var c=s?"width":"height";if(n[a]<r(i[l]))e.offsets.popper[l]=r(i[l])-n[c];if(n[l]>r(i[a]))e.offsets.popper[l]=r(i[a]);return e}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function ye(e,t,n,i){
// separate value from unit
var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var r=+o[1];var s=o[2];
// If it's not a number it's an operator, I guess
if(!r)return e;if(0===s.indexOf("%")){var a=void 0;if("%p"===s)a=n;else a=i;return O(a)[t]/100*r}else if("vh"===s||"vw"===s){
// if is a vh or vw, we calculate the size based on the viewport
var l=void 0;if("vh"===s)l=Math.max(document.documentElement.clientHeight,window.innerHeight||0);else l=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return l/100*r}else
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return r}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */function be(e,t,n,i){var o=[0,0];
// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var r=-1!==["right","left"].indexOf(i);
// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var s=e.split(/(\+|\-)/).map((function(e){return e.trim()}));
// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var a=s.indexOf(R(s,(function(e){return-1!==e.search(/,|\s/)})));if(s[a]&&-1===s[a].indexOf(","))console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/;var c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
(c=c.map((function(e,i){
// Most of the units rely on the orientation of the popper
var o=(1===i?!r:r)?"height":"width";var s=false;return e.reduce((function(e,t){if(""===e[e.length-1]&&-1!==["+","-"].indexOf(t)){e[e.length-1]=t;s=true;return e}else if(s){e[e.length-1]+=t;s=false;return e}else return e.concat(t)}),[]).map((function(e){return ye(e,o,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,i){if(te(n))o[t]+=n*("-"===e[i-1]?-1:1)}))}));return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function we(e,t){var n=t.offset;var i=e.placement,o=e.offsets,r=o.popper,s=o.reference;var a=i.split("-")[0];var l=void 0;if(te(+n))l=[+n,0];else l=be(n,r,s,a);if("left"===a){r.top+=l[0];r.left-=l[1]}else if("right"===a){r.top+=l[0];r.left+=l[1]}else if("top"===a){r.left+=l[0];r.top-=l[1]}else if("bottom"===a){r.left+=l[0];r.top+=l[1]}e.popper=r;return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function _e(e,t){var n=t.boundariesElement||m(e.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(e.instance.reference===n)n=m(n);
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var i=Y("transform");var o=e.instance.popper.style;// assignment to help minification
var r=o.top,s=o.left,a=o[i];o.top="";o.left="";o[i]="";var l=L(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
o.top=r;o.left=s;o[i]=a;t.boundaries=l;var c=t.priority;var u=e.offsets.popper;var d={primary:function e(n){var i=u[n];if(u[n]<l[n]&&!t.escapeWithReference)i=Math.max(u[n],l[n]);return E({},n,i)},secondary:function e(n){var i="right"===n?"left":"top";var o=u[i];if(u[n]>l[n]&&!t.escapeWithReference)o=Math.min(u[i],l[n]-("right"===n?u.width:u.height));return E({},i,o)}};c.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=x({},u,d[t](e))}));e.offsets.popper=u;return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ke(e){var t=e.placement;var n=t.split("-")[0];var i=t.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(i){var o=e.offsets,r=o.reference,s=o.popper;var a=-1!==["bottom","top"].indexOf(n);var l=a?"left":"top";var c=a?"width":"height";var u={start:E({},l,r[l]),end:E({},l,r[l]+r[c]-s[c])};e.offsets.popper=x({},s,u[i])}return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function Te(e){if(!ce(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference;var n=R(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(true===e.hide)return e;e.hide=true;e.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(false===e.hide)return e;e.hide=false;e.attributes["x-out-of-boundaries"]=false}return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function Se(e){var t=e.placement;var n=t.split("-")[0];var i=e.offsets,o=i.popper,r=i.reference;var s=-1!==["left","right"].indexOf(n);var a=-1===["top","left"].indexOf(n);o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0);e.placement=H(t);e.offsets.popper=O(o);return e}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */
/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */
/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Ce={
/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
placement:"bottom",
/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
positionFixed:false,
/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
eventsEnabled:true,
/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
removeOnDestroy:false,
/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
onCreate:function e(){},
/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
onUpdate:function e(){},
/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
modifiers:{
/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
shift:{
/** @prop {number} order=100 - Index used to define the order of execution */
order:100,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ke},
/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
offset:{
/** @prop {number} order=200 - Index used to define the order of execution */
order:200,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:we,
/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
offset:0},
/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
preventOverflow:{
/** @prop {number} order=300 - Index used to define the order of execution */
order:300,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:_e,
/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
priority:["left","right","top","bottom"],
/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
padding:5,
/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
boundariesElement:"scrollParent"},
/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
keepTogether:{
/** @prop {number} order=400 - Index used to define the order of execution */
order:400,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ge},
/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
arrow:{
/** @prop {number} order=500 - Index used to define the order of execution */
order:500,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ue,
/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},
/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
flip:{
/** @prop {number} order=600 - Index used to define the order of execution */
order:600,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:me,
/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
behavior:"flip",
/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
padding:5,
/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
boundariesElement:"viewport",
/**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
flipVariations:false,
/**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
flipVariationsByContent:false},
/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
inner:{
/** @prop {number} order=700 - Index used to define the order of execution */
order:700,
/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:false,
/** @prop {ModifierFn} */
fn:Se},
/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
hide:{
/** @prop {number} order=800 - Index used to define the order of execution */
order:800,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:Te},
/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
computeStyle:{
/** @prop {number} order=850 - Index used to define the order of execution */
order:850,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:le,
/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
gpuAcceleration:true,
/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
x:"bottom",
/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
y:"right"},
/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
applyStyle:{
/** @prop {number} order=900 - Index used to define the order of execution */
order:900,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:oe,
/** @prop {Function} */
onLoad:re,
/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
gpuAcceleration:void 0}}};
/**
 * @callback onCreate
 * @param {dataObject} data
 */
/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods
var je=function(){
/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function e(t,n){var i=this;var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};C(this,e);this.scheduleUpdate=function(){return requestAnimationFrame(i.update)};
// make update() debounced, so that it only runs at most once-per-tick
this.update=a(this.update.bind(this));
// with {} we create a new object with the options inside it
this.options=x({},e.Defaults,o);
// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};
// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t;this.popper=n&&n.jquery?n[0]:n;
// Deep merge modifiers options
this.options.modifiers={};Object.keys(x({},e.Defaults.modifiers,o.modifiers)).forEach((function(t){i.options.modifiers[t]=x({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}));
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map((function(e){return x({name:e},i.options.modifiers[e])})).sort((function(e,t){return e.order-t.order}));
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach((function(e){if(e.enabled&&l(e.onLoad))e.onLoad(i.reference,i.popper,i.options,e,i.state)}));
// fire the first update to position the popper in the right place
this.update();var r=this.options.eventsEnabled;if(r)
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();this.state.eventsEnabled=r}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
j(e,[{key:"update",value:function e(){return U.call(this)}},{key:"destroy",value:function e(){return V.call(this)}},{key:"enableEventListeners",value:function e(){return Z.call(this)}},{key:"disableEventListeners",value:function e(){return ee.call(this)}
/**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
/**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */}]);return e}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */je.Utils=("undefined"!=typeof window?window:n.g).PopperUtils;je.placements=fe;je.Defaults=Ce;
/* harmony default export */t.default=je;
/***/},
/***/jquery:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/function(e){"use strict";e.exports=jQuery;
/***/},
/***/prestashop:
/*!*****************************!*\
  !*** external "prestashop" ***!
  \*****************************/
/***/function(e){"use strict";e.exports=prestashop;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/var t={};
/******/
/******/ // The require function
/******/function n(i){
/******/ // Check if module is in cache
/******/var o=t[i];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=t[i]={
/******/id:i,
/******/loaded:false,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/e[i](r,r.exports,n);
/******/
/******/ // Flag the module as loaded
/******/r.loaded=true;
/******/
/******/ // Return the exports of the module
/******/return r.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){
/******/var t=e&&e.__esModule?
/******/function(){return e.default}:
/******/function(){return e};
/******/n.d(t,{a:t});
/******/return t;
/******/};
/******/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/n.d=function(e,t){
/******/for(var i in t)
/******/if(n.o(t,i)&&!n.o(e,i))
/******/Object.defineProperty(e,i,{enumerable:true,get:t[i]});
/******/
/******/
/******/};
/******/
/******/ /* webpack/runtime/global */
/******/
/******/n.g=function(){
/******/if("object"==typeof globalThis)return globalThis;
/******/try{
/******/return this||new Function("return this")();
/******/}catch(e){
/******/if("object"==typeof window)return window;
/******/}
/******/}();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/******/;
/******/
/******/ /* webpack/runtime/make namespace object */
/******/
/******/ // define __esModule on exports
/******/n.r=function(e){
/******/if("undefined"!=typeof Symbol&&Symbol.toStringTag)
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});
/******/
/******/Object.defineProperty(e,"__esModule",{value:true});
/******/};
/******/
/******/ /* webpack/runtime/node module decorator */
/******/
/******/n.nmd=function(e){
/******/e.paths=[];
/******/if(!e.children)e.children=[];
/******/return e;
/******/};
/******/
/************************************************************************/var i={};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function(){"use strict";var e={};
/*!*********************!*\
  !*** ./js/theme.js ***!
  \*********************/n.r(e);
/* harmony import */n(/*! bootstrap/js/src/util */"./node_modules/bootstrap/js/src/util.js");
/* harmony import */n(/*! bootstrap/js/src/alert */"./node_modules/bootstrap/js/src/alert.js");
/* harmony import */n(/*! bootstrap/js/src/button */"./node_modules/bootstrap/js/src/button.js");
/* harmony import */n(/*! bootstrap/js/src/collapse */"./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */n(/*! bootstrap/js/src/dropdown */"./node_modules/bootstrap/js/src/dropdown.js");
/* harmony import */n(/*! bootstrap/js/src/modal */"./node_modules/bootstrap/js/src/modal.js");
/* harmony import */n(/*! bootstrap/js/src/popover */"./node_modules/bootstrap/js/src/popover.js");
/* harmony import */n(/*! bootstrap/js/src/tab */"./node_modules/bootstrap/js/src/tab.js");
/* harmony import */n(/*! bootstrap/js/src/toast */"./node_modules/bootstrap/js/src/toast.js");
/* harmony import */n(/*! bootstrap/js/src/tooltip */"./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */n(/*! bootstrap-touchspin */"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js");
/* harmony import */
/* harmony import */n(/*! ./lib/slick.min */"./js/lib/slick.min.js");
/* harmony import */
/* harmony import */n(/*! ./lib/jquery.hoverIntent.min */"./js/lib/jquery.hoverIntent.min.js");
/* harmony import */
/* harmony import */var t=n(/*! ./components/slick */"./js/components/slick.js");
/* harmony import */n(/*! ../node_modules/jquery-zoom/jquery.zoom.min.js */"./node_modules/jquery-zoom/jquery.zoom.min.js");
/* harmony import */
/* harmony import */n(/*! ./responsive */"./js/responsive.js");
/* harmony import */n(/*! ./checkout */"./js/checkout.js");
/* harmony import */n(/*! ./customer */"./js/customer.js");
/* harmony import */n(/*! ./listing */"./js/listing.js");
/* harmony import */n(/*! ./product */"./js/product.js");
/* harmony import */n(/*! ./cart */"./js/cart.js");
/* harmony import */var i=n(/*! ./components/form */"./js/components/form.js");
/* harmony import */var o=n(/*! ./components/top-menu */"./js/components/top-menu.js");
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);
/* harmony import */var a=n(/*! events */"./node_modules/events/events.js");
/* harmony import */var l=n.n(a);
/* harmony import */n(/*! ./components/block-cart */"./js/components/block-cart.js");
/* harmony import */n(/*! lazysizes */"./node_modules/lazysizes/lazysizes.js");
/* harmony import */
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
// "inherit" EventEmitter
for(var c in l().prototype)s()[c]=l().prototype[c];$(document).ready((function(){var e=new i.default;var n=new t.default;var r=$("#_desktop_top_menu #top-menu");var s=new o.default(r);e.init();n.init();s.init();
//display input file content in custom file input BS
$(".custom-file-input").on("change",(function(){var e=$(this).val().split("\\").pop();$(this).next(".custom-file-label").addClass("selected").html(e)}))}));document.addEventListener("lazyloaded",(function(e){$(e.target).parent().addClass("rc--lazyload")}));$(document).ready((function(){console.log("ready");
/* SCROLL TO ANCHOR */if(window.location.hash&&"/"!=window.location.hash[1])i(window.location.hash);e();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname")){t();n()}$(window).resize((function(){e();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname"))n()}));function e(){$(".fullwidth").each((function(){var e=$(this);var t=$("body").width(),n=t/2;
//console.log(fullwidth);
//console.log(content);
e.css({left:"50%",position:"relative",width:t,"margin-left":-n})}))}function t(){console.log("sticky");var e=$("#header");var t="sticky";var n="unsticky";var i=$("#header").height();$(window).scroll((function(){if($(this).scrollTop()>0){e.addClass(t).removeClass(n);$("body").css("padding-top",i)}else{e.addClass(n).removeClass(t);$("body").css("padding-top",0)}}));
/*
     var yourHeader = $('#header').height();
     $(window).scroll(function () {
     if ($(this).scrollTop() > (yourHeader)) {
     yourNavigation.addClass(stickyDiv).removeClass(unStickyDiv);
     } else if ($(this).scrollTop() < (yourHeader)) {
     yourNavigation.addClass(unStickyDiv).removeClass(stickyDiv);
     }
     });*/}function n(){$(".modal-dialog__offcanvas #adtm_menu").addClass("adtm_menu_toggle_open");
//$('#adtm_menu').toggleClass('adtm_menu_toggle_open');
//$('#adtm_menu .advtm_menu_toggle').toggleClass('adtm_menu_mobile_mode');
}function i(e){console.log(e);var t=$(e);var n=t.offset().top-$("#header").height()-40;
//var scrollTop = target.offset().top - $('#header').height();
console.log("header height: "+$("#header").height());console.log("scrollTop : "+n);$("html, body").animate({scrollTop:n},1e3,(function(){
// Callback after animation
// Must change focus!
var e=$(t);e.focus();if(e.is(":focus"))
// Checking if the target was focused
return false;else{e.attr("tabindex","-1");// Adding tabindex for elements not focusable
e.focus();// Set focus again
}}))}
// Fonction pour scroller les liens vers ancres
$('a[href*="#"]').not('[href="#"]').not('[href*="#footer"]')
/*
   .not('[href="#0"]')
   .not('[href="#bt_tabs-0"]')
   .not('[href="#bt_tabs-1"]')*/.click((function(e){
// On-page links
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
// Figure out element to scroll to
if($(this).hasClass("nav-link"))var t=$(this).parent().parent();else{t=(t=$(this.hash)).length?t:$("[name="+this.hash.slice(1)+"]")}console.log("target");console.log(t);console.log(t.offset().top);console.log("header height");console.log($("#header").height());
// Does a scroll target exist?
if(t.length){
// Only prevent default if animation is actually gonna happen
//event.preventDefault();
var n=t.offset().top-$("#header").height()-40;console.log("header height: "+$("#header").height());console.log("scrollTop : "+n);$("html, body").animate({scrollTop:n},1e3,(function(){
// Callback after animation
// Must change focus!
var e=$(t);e.focus();if(e.is(":focus"))
// Checking if the target was focused
return false;else{e.attr("tabindex","-1");// Adding tabindex for elements not focusable
e.focus();// Set focus again
}}))}}}))}))}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function(){"use strict";
/*!************************!*\
  !*** ./css/theme.scss ***!
  \************************/n.r(i);
// extracted by mini-css-extract-plugin
}();
/******/}();
//# sourceMappingURL=theme.js.map