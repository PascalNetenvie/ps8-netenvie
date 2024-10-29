/*! For license information please see theme.js.LICENSE.txt */
/******/!function(){// webpackBootstrap
/******/var t={
/***/"./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! prestashop */"prestashop");
/* harmony import */var s=n.n(r);s().cart=s().cart||{};s().cart.active_inputs=null;var a='input[name="product-quantity-spin"]';var l=false;var c=false;var u="";
/**
 * Attach Bootstrap TouchSpin event handlers
 */function d(){o().each(o()(a),(function(t,e){o()(e).TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(o()(e).attr("min"),10),max:1e6})}));f.switchErrorStat()}o()(document).ready((function(){var t=".js-cart-line-product-quantity";var e=[];s().on("updateCart",(function(){o()(".quickview").modal("hide");o()(".js-cart__card-body").addClass("is--loading")}));s().on("updatedCart",(function(){d();o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));s().on("handleError",(function(t){o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));d();var n=o()("body");function i(t){return"on.startupspin"===t||"on.startdownspin"===t}function r(t){return"on.startupspin"===t}function l(e){var n=e.parents(".bootstrap-touchspin").find(t);if(n.is(":focus"))return null;return n}function c(t){var e=t.split("-");var n;var i;var o="";for(n=0;n<e.length;n++){i=e[n];if(0!==n)i=i.substring(0,1).toUpperCase()+i.substring(1);o+=i}return o}function u(t,e){if(!i(e))return{url:t.attr("href"),type:c(t.data("link-action"))};var n=l(t);if(!n)return;var o={};if(r(e))o={url:n.data("up-url"),type:"increaseProductQuantity"};else o={url:n.data("down-url"),type:"decreaseProductQuantity"};return o}var p=function t(){for(;e.length>0;)e.pop().abort()};var h=function t(e){return o()(e.parents(".bootstrap-touchspin").find("input"))};var v=function t(n){n.preventDefault();var i=o()(n.currentTarget);var r=n.currentTarget.dataset;var a=u(i,n.namespace);var l={ajax:"1",action:"update"};if(void 0===a)return;p();o().ajax({url:a.url,method:"POST",data:l,dataType:"json",beforeSend:function t(n){e.push(n)}}).then((function(t){f.checkUpdateOpertation(t);h(i).val(t.quantity);
// Refresh cart preview
s().emit("updateCart",{reason:r,resp:t})})).fail((function(t){s().emit("handleError",{eventType:"updateProductInCart",resp:t,cartAction:a.type})}))};n.on("click",'[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',v);n.on("touchspin.on.startdownspin",a,v);n.on("touchspin.on.startupspin",a,v);function m(t,n,i){p();return o().ajax({url:t,method:"POST",data:n,dataType:"json",beforeSend:function t(n){e.push(n)}}).then((function(t){f.checkUpdateOpertation(t);i.val(t.quantity);var e;if(i&&i.dataset)e=i.dataset;else e=t;
// Refresh cart preview
s().emit("updateCart",{reason:e,resp:t})})).fail((function(t){s().emit("handleError",{eventType:"updateProductQuantityInCart",resp:t})}))}function g(t){return{ajax:"1",qty:Math.abs(t),action:"update",op:y(t)}}function y(t){return t>0?"up":"down"}function b(t){var e=o()(t.currentTarget);var n=e.data("update-url");var i=e.attr("value");
// There should be a valid product quantity in cart
var r=e.val();if(r!=parseInt(r)||r<0||isNaN(r)){e.val(i);return}
// There should be a new product quantity in cart
var s=r-i;if(0===s)return;e.attr("value",r);m(n,g(s),e)}n.on("focusout keyup",t,(function(t){if("keyup"===t.type){if(13===t.keyCode)b(t);return false}b(t)}));n.on("click",".js-discount .code",(function(t){t.stopPropagation();var e=o()(t.currentTarget);o()("[name=discount_name]").val(e.text());o()("#promo-code").collapse("show");return false}))}));var f={switchErrorStat:function t(){
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
var e=o()(".checkout a");if(o()("#notifications article.alert-danger").length||""!==u&&!l)e.addClass("disabled");if(""!==u){var n=' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'+u+"</li></ul></article>";o()("#notifications.notifications-container").html(n);u="";c=false;if(l)
// if hasError is true, quantity was not updated : allow checkout
e.removeClass("disabled")}else if(!l&&c){l=false;c=false;o()("#notifications.notifications-container").html("");e.removeClass("disabled")}},checkUpdateOpertation:function t(e){
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
l=e.hasOwnProperty("hasError");var n=e.errors||"";
// 1.7.2.x returns errors as string, 1.7.3.x returns array
if(n instanceof Array)u=n.join(" ");else u=n;c=true}};
/***/},
/***/"./js/checkout.js":
/*!************************!*\
  !*** ./js/checkout.js ***!
  \************************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */function l(){o()(".js-terms a").on("click",(function(t){t.preventDefault();var e=o()(t.target).attr("href");if(e){
// TODO: Handle request if no pretty URL
e+="?content_only=1";o().get(e,(function(t){o()("#modal").find(".js-modal-content").html(o()(t).find(".page-content--cms").contents())})).fail((function(t){s().emit("handleError",{eventType:"clickTerms",resp:t})}))}o()("#modal").modal("show")}));o()(".js-gift-checkbox").on("click",(function(t){o()("#gift").collapse("toggle")}))}o()(document).ready((function(){if(1===o()("body#checkout").length)l();s().on("updatedDeliveryForm",(function(t){if(void 0===t.deliveryOption||0===t.deliveryOption.length)return;
// Hide all carrier extra content ...
o()(".carrier-extra-content").hide();
// and show the one related to the selected carrier
t.deliveryOption.next(".carrier-extra-content").slideDown()}));s().on("changedCheckoutStep",(function(t){if(void 0!==t.event.currentTarget)o()(".collapse",t.event.currentTarget).not(".show").not(".collapse .collapse").collapse("show")}))}));o()(document).on("change",".js-input-delivery:checked",(function(t){o()(".js-label-delivery.selected").removeClass("selected");o()("#js-"+o()(a).attr("id")).addClass("selected")}));o()(document).on("click",".js-checkout-step-header",(function(t){var e=o()(t.currentTarget).data("identifier");o()("#"+e).addClass("-current");o()("#content-"+e).collapse("show").scrollTop()}));
/***/},
/***/"./js/components/block-cart.js":
/*!*************************************!*\
  !*** ./js/components/block-cart.js ***!
  \*************************************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */o().blockcart=o().blockcart||{};o().blockcart.showModal=function(t){function e(){return s()("#blockcart-modal")}var n=e();if(n.length)n.remove();s()("body").append(t);(n=e()).modal("show").on("hidden.bs.modal",(function(t){o().emit("updateProduct",{reason:t.currentTarget.dataset,event:t})}))};
/***/},
/***/"./js/components/form.js":
/*!*******************************!*\
  !*** ./js/components/form.js ***!
  \*******************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony export */n.d(e,{
/* harmony export */default:function(){/* binding */return d}
/* harmony export */});
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function l(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=u(t,"string");return"symbol"==r(e)?e:e+""}function u(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var d=function(){function t(){s(this,t)}return l(t,[{key:"init",value:function t(){this.parentFocus();this.togglePasswordVisibility();this.formValidation()}},{key:"parentFocus",value:function t(){o()(".js-child-focus").focus((function(){o()(this).closest(".js-parent-focus").addClass("focus")}));o()(".js-child-focus").focusout((function(){o()(this).closest(".js-parent-focus").removeClass("focus")}))}},{key:"togglePasswordVisibility",value:function t(){o()('button[data-action="show-password"]').on("click",(function(){var t=o()(this).closest(".input-group").children("input.js-visible-password");if("password"===t.attr("type")){t.attr("type","text");o()(this).text(o()(this).data("textHide"))}else{t.attr("type","password");o()(this).text(o()(this).data("textShow"))}}))}},{key:"formValidation",value:function t(){
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var e=document.getElementsByClassName("needs-validation");if(e.length>0){console.log(f());if(!f())return;
// Loop over them and prevent submission
var n=false;Array.prototype.filter.call(e,(function(t){t.addEventListener("submit",(function(e){if(false===t.checkValidity()){e.preventDefault();e.stopPropagation();o()("input:invalid,select:invalid,textarea:invalid",t).each((function(t){var e=o()(this),i=e.parents(".form-group").first();o()(".js-invalid-feedback-browser",i).text(e[0].validationMessage);if(!n)n=i}));o()(this).data("disabled",false);o()('button[type="submit"]',t).removeClass("disabled")}t.classList.add("was-validated");if(n){o()("html, body").animate({scrollTop:n.offset().top},300);n=false}}),false)}))}}}])}();var f=function t(){var e=document.createElement("input");return"validity"in e&&"badInput"in e.validity&&"patternMismatch"in e.validity&&"rangeOverflow"in e.validity&&"rangeUnderflow"in e.validity&&"tooLong"in e.validity&&"tooShort"in e.validity&&"typeMismatch"in e.validity&&"valid"in e.validity&&"valueMissing"in e.validity};
/***/},
/***/"./js/components/slick.js":
/*!********************************!*\
  !*** ./js/components/slick.js ***!
  \********************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony export */n.d(e,{
/* harmony export */default:function(){/* binding */return d}
/* harmony export */});
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function l(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=u(t,"string");return"symbol"==r(e)?e:e+""}function u(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var d=function(){function t(){s(this,t)}return l(t,[{key:"init",value:function t(){o()("[data-slick]").not(".slick-initialized").each((function(){var t=o()(this);if(1===t.data("count"))return;t.slick({prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons left">&#xE314;</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons right">&#xE315;</i></button>'})}))}}])}();
/***/},
/***/"./js/components/top-menu.js":
/*!***********************************!*\
  !*** ./js/components/top-menu.js ***!
  \***********************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony export */n.d(e,{
/* harmony export */default:function(){/* binding */return d}
/* harmony export */});
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function l(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=u(t,"string");return"symbol"==r(e)?e:e+""}function u(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var d=function(){function t(e){s(this,t);this.el=e}return l(t,[{key:"init",value:function t(){var e=this;e.el.hoverIntent({over:e.toggleClassSubMenu,out:e.toggleClassSubMenu,selector:" > li",timeout:100})}},{key:"toggleClassSubMenu",value:function t(){var e=o()(this);var n=e.attr("aria-expanded");if(void 0!==n){n="true"===n.toLowerCase();e.toggleClass("menu__item--active").attr("aria-expanded",!n);o()(".menu-sub",e).attr("aria-expanded",!n).attr("aria-hidden",n)}}}])}();
/***/},
/***/"./js/customer.js":
/*!************************!*\
  !*** ./js/customer.js ***!
  \************************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */function r(){o()("#order-return-form table thead input[type=checkbox]").on("click",(function(){var t=o()(this).prop("checked");o()("#order-return-form table tbody input[type=checkbox]").each((function(e,n){o()(n).prop("checked",t)}))}))}function s(){if(o()("body#order-detail"))r()}o()(document).ready(s);
/***/},
/***/"./js/lib/jquery.hoverIntent.min.js":
/*!******************************************!*\
  !*** ./js/lib/jquery.hoverIntent.min.js ***!
  \******************************************/
/***/function(t,e,n){var i,o,r;
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */!function(s){"use strict";o=[n(/*! jquery */"jquery")],void 0!==(r="function"==typeof(i=s)?i.apply(e,o):i)&&(t.exports=r)}((function(t){"use strict";var e,n,i={interval:100,sensitivity:6,timeout:0},o=0,r=function t(i){e=i.pageX,n=i.pageY},s=function t(i,o,a,l){if(Math.sqrt((a.pX-e)*(a.pX-e)+(a.pY-n)*(a.pY-n))<l.sensitivity)return o.off(a.event,r),delete a.timeoutId,a.isActive=!0,i.pageX=e,i.pageY=n,delete a.pX,delete a.pY,l.over.apply(o[0],[i]);a.pX=e,a.pY=n,a.timeoutId=setTimeout((function(){s(i,o,a,l)}),l.interval)},a=function t(e,n,i,o){return delete n.data("hoverIntent")[i.id],o.apply(n[0],[e])};t.fn.hoverIntent=function(e,n,l){var c=o++,u=t.extend({},i);t.isPlainObject(e)?(u=t.extend(u,e),t.isFunction(u.out)||(u.out=u.over)):u=t.isFunction(n)?t.extend(u,{over:e,out:n,selector:l}):t.extend(u,{over:e,out:e,selector:n});var d=function e(n){var i=t.extend({},n),o=t(this),l=o.data("hoverIntent");l||o.data("hoverIntent",l={});var d=l[c];d||(l[c]=d={id:c}),d.timeoutId&&(d.timeoutId=clearTimeout(d.timeoutId));var f=d.event="mousemove.hoverIntent.hoverIntent"+c;if("mouseenter"===n.type){if(d.isActive)return;d.pX=i.pageX,d.pY=i.pageY,o.off(f,r).on(f,r),d.timeoutId=setTimeout((function(){s(i,o,d,u)}),u.interval)}else{if(!d.isActive)return;o.off(f,r),d.timeoutId=setTimeout((function(){a(i,o,d,u.out)}),u.timeout)}};return this.on({"mouseenter.hoverIntent":d,"mouseleave.hoverIntent":d},u.selector)}}));
/***/},
/***/"./js/lib/slick.min.js":
/*!*****************************!*\
  !*** ./js/lib/slick.min.js ***!
  \*****************************/
/***/function(t,e,n){var i,o,r;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)
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

 */}!function(s){"use strict";o=[n(/*! jquery */"jquery")],void 0!==(r="function"==typeof(i=s)?i.apply(e,o):i)&&(t.exports=r)}((function(t){"use strict";var e=window.Slick||{};(e=function(){function e(e,i){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(e),appendDots:t(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function e(n,i){return t('<button type="button" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=t(e),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=t(e).data("slick")||{},r.options=t.extend({},r.defaults,i,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,void 0!==document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=t.proxy(r.autoPlay,r),r.autoPlayClear=t.proxy(r.autoPlayClear,r),r.autoPlayIterator=t.proxy(r.autoPlayIterator,r),r.changeSlide=t.proxy(r.changeSlide,r),r.clickHandler=t.proxy(r.clickHandler,r),r.selectHandler=t.proxy(r.selectHandler,r),r.setPosition=t.proxy(r.setPosition,r),r.swipeHandler=t.proxy(r.swipeHandler,r),r.dragHandler=t.proxy(r.dragHandler,r),r.keyHandler=t.proxy(r.keyHandler,r),r.instanceUid=n++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var n=0;return e}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,n,i){var o=this;if("boolean"==typeof n)i=n,n=null;else if(n<0||n>=o.slideCount)return!1;o.unload(),"number"==typeof n?0===n&&0===o.$slides.length?t(e).appendTo(o.$slideTrack):i?t(e).insertBefore(o.$slides.eq(n)):t(e).insertAfter(o.$slides.eq(n)):!0===i?t(e).prependTo(o.$slideTrack):t(e).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each((function(e,n){t(n).attr("data-slick-index",e)})),o.$slidesCache=o.$slides,o.reinit()},e.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},e.prototype.animateSlide=function(e,n){var i={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(e=-e),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:e},o.options.speed,o.options.easing,n):o.$slideTrack.animate({top:e},o.options.speed,o.options.easing,n):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),t({animStart:o.currentLeft}).animate({animStart:e},{duration:o.options.speed,easing:o.options.easing,step:function t(e){e=Math.ceil(e),!1===o.options.vertical?(i[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(i)):(i[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(i))},complete:function t(){n&&n.call()}})):(o.applyTransition(),e=Math.ceil(e),!1===o.options.vertical?i[o.animType]="translate3d("+e+"px, 0px, 0px)":i[o.animType]="translate3d(0px,"+e+"px, 0px)",o.$slideTrack.css(i),n&&setTimeout((function(){o.disableTransition(),n.call()}),o.options.speed))},e.prototype.getNavTarget=function(){var e=this,n=e.options.asNavFor;return n&&null!==n&&(n=t(n).not(e.$slider)),n},e.prototype.asNavFor=function(e){var n=this.getNavTarget();null!==n&&"object"==s(n)&&n.each((function(){var n=t(this).slick("getSlick");n.unslicked||n.slideHandler(e,!0)}))},e.prototype.applyTransition=function(t){var e=this,n={};!1===e.options.fade?n[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:n[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(n):e.$slides.eq(t).css(n)},e.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1==0&&(t.direction=1))),t.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=t(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=t(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,n,i=this;if(!0===i.options.dots&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=t("<ul />").addClass(i.options.dotsClass),e=0;e<=i.getDotCount();e+=1)n.append(t("<li />").append(i.options.customPaging.call(this,i,e)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each((function(e,n){t(n).attr("data-slick-index",e).data("originalStyling",t(n).attr("style")||"")})),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?t('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),t("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var t,e,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),t=0;t<o;t++){var l=document.createElement("div");for(e=0;e<a.options.rows;e++){var c=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var u=t*s+(e*a.options.slidesPerRow+n);r.get(u)&&c.appendChild(r.get(u))}l.appendChild(c)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,n){var i,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||t(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(i in s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(!1===s.originalSettings.mobileFirst?r<s.breakpoints[i]&&(o=s.breakpoints[i]):r>s.breakpoints[i]&&(o=s.breakpoints[i]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||n)&&(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[o]),!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[o]),!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e),a=o),e||!1===a||s.$slider.trigger("breakpoint",[s,a])}},e.prototype.changeSlide=function(e,n){var i,o,r=this,s=t(e.currentTarget);switch(s.is("a")&&e.preventDefault(),s.is("li")||(s=s.closest("li")),i=r.slideCount%r.options.slidesToScroll!=0?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":o=0===i?r.options.slidesToScroll:r.options.slidesToShow-i,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,n);break;case"next":o=0===i?r.options.slidesToScroll:i,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,n);break;case"index":var a=0===e.data.index?0:e.data.index||s.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,n),s.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var e,n;if(n=0,t>(e=this.getNavigableIndexes())[e.length-1])t=e[e.length-1];else for(var i in e){if(t<e[i]){t=n;break}n=e[i]}return t},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(t("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",t.proxy(e.interrupt,e,!0)).off("mouseleave.slick",t.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),t(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().off("click.slick",e.selectHandler),t(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),t(window).off("resize.slick.slick-"+e.instanceUid,e.resize),t("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),t(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var t,e=this;e.options.rows>0&&((t=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(t))},e.prototype.clickHandler=function(t){!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(e){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),t(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){t(this).attr("style",t(this).data("originalStyling"))})),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,e||n.$slider.trigger("destroy",[n])},e.prototype.disableTransition=function(t){var e=this,n={};n[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(n):e.$slides.eq(t).css(n)},e.prototype.fadeSlide=function(t,e){var n=this;!1===n.cssTransitions?(n.$slides.eq(t).css({zIndex:n.options.zIndex}),n.$slides.eq(t).animate({opacity:1},n.options.speed,n.options.easing,e)):(n.applyTransition(t),n.$slides.eq(t).css({opacity:1,zIndex:n.options.zIndex}),e&&setTimeout((function(){n.disableTransition(t),e.call()}),n.options.speed))},e.prototype.fadeSlideOut=function(t){var e=this;!1===e.cssTransitions?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",(function(n){var i=t(this);setTimeout((function(){e.options.pauseOnFocus&&i.is(":focus")&&(e.focussed=!0,e.autoPlay())}),0)})).on("blur.slick","*",(function(n){t(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())}))},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var t=this,e=0,n=0,i=0;if(!0===t.options.infinite)if(t.slideCount<=t.options.slidesToShow)++i;else for(;e<t.slideCount;)++i,e=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)i=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++i,e=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else i=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return i-1},e.prototype.getLeft=function(t){var e,n,i,o,r=this,s=0;return r.slideOffset=0,n=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=n*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&t+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(t>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(t-r.slideCount))*r.slideWidth*-1,s=(r.options.slidesToShow-(t-r.slideCount))*n*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,s=r.slideCount%r.options.slidesToScroll*n*-1))):t+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(t+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(t+r.options.slidesToShow-r.slideCount)*n),r.slideCount<=r.options.slidesToShow&&(r.slideOffset=0,s=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),e=!1===r.options.vertical?t*r.slideWidth*-1+r.slideOffset:t*n*-1+s,!0===r.options.variableWidth&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(t):r.$slideTrack.children(".slick-slide").eq(t+r.options.slidesToShow),e=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,!0===r.options.centerMode&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(t):r.$slideTrack.children(".slick-slide").eq(t+r.options.slidesToShow+1),e=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,e+=(r.$list.width()-i.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(t){return this.options[t]},e.prototype.getNavigableIndexes=function(){var t,e=this,n=0,i=0,o=[];for(!1===e.options.infinite?t=e.slideCount:(n=-1*e.options.slidesToScroll,i=-1*e.options.slidesToScroll,t=2*e.slideCount);n<t;)o.push(n),n=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return o},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,n,i,o=this;return i=!0===o.options.centerMode?Math.floor(o.$list.width()/2):0,n=-1*o.swipeLeft+i,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each((function(i,r){var s,a;if(s=t(r).outerWidth(),a=r.offsetLeft,!0!==o.options.centerMode&&(a+=s/2),n<a+s)return e=r,!1})),Math.abs(t(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,e){this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},e.prototype.init=function(e){var n=this;t(n.$slider).hasClass("slick-initialized")||(t(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),e&&n.$slider.trigger("init",[n]),!0===n.options.accessibility&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},e.prototype.initADA=function(){var e=this,n=Math.ceil(e.slideCount/e.options.slidesToShow),i=e.getNavigableIndexes().filter((function(t){return t>=0&&t<e.slideCount}));e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(n){var o=i.indexOf(n);if(t(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+n,tabindex:-1}),-1!==o){var r="slick-slide-control"+e.instanceUid+o;t("#"+r).length&&t(this).attr({"aria-describedby":r})}})),e.$dots.attr("role","tablist").find("li").each((function(o){var r=i[o];t(this).attr({role:"presentation"}),t(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+o,"aria-controls":"slick-slide"+e.instanceUid+r,"aria-label":o+1+" of "+n,"aria-selected":null,tabindex:"-1"})})).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=e.currentSlide,r=o+e.options.slidesToShow;o<r;o++)e.options.focusOnChange?e.$slides.eq(o).attr({tabindex:"0"}):e.$slides.eq(o).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&(t("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&e.slideCount>e.options.slidesToShow&&t("li",e.$dots).on("mouseenter.slick",t.proxy(e.interrupt,e,!0)).on("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",t.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),t(document).on(e.visibilityChange,t.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),t(window).on("orientationchange.slick.slick-"+e.instanceUid,t.proxy(e.orientationChange,e)),t(window).on("resize.slick.slick-"+e.instanceUid,t.proxy(e.resize,e)),t("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),t(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),t(e.setPosition)},e.prototype.initUI=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},e.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){t("img[data-lazy]",e).each((function(){var e=t(this),n=t(this).attr("data-lazy"),i=t(this).attr("data-srcset"),o=t(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){e.animate({opacity:0},100,(function(){i&&(e.attr("srcset",i),o&&e.attr("sizes",o)),e.attr("src",n).animate({opacity:1},200,(function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),r.$slider.trigger("lazyLoaded",[r,e,n])}))},s.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,n])},s.src=n}))}var n,i,o,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?o=(i=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(i=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),o=r.options.slidesToShow/2+1+2+r.currentSlide):(i=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,o=Math.ceil(i+r.options.slidesToShow),!0===r.options.fade&&(i>0&&i--,o<=r.slideCount&&o++)),n=r.$slider.find(".slick-slide").slice(i,o),"anticipated"===r.options.lazyLoad)for(var s=i-1,a=o,l=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)s<0&&(s=r.slideCount-1),n=(n=n.add(l.eq(s))).add(l.eq(a)),s--,a++;e(n),r.slideCount<=r.options.slidesToShow?e(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?e(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&e(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},e.prototype.postSlide=function(e){var n=this;if(!n.unslicked&&(n.$slider.trigger("afterChange",[n,e]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),!0===n.options.accessibility&&(n.initADA(),n.options.focusOnChange))){t(n.$slides.get(n.currentSlide)).attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var n,i,o,r,s,a=this,l=t("img[data-lazy]",a.$slider);l.length?(n=l.first(),i=n.attr("data-lazy"),o=n.attr("data-srcset"),r=n.attr("data-sizes")||a.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){o&&(n.attr("srcset",o),r&&n.attr("sizes",r)),n.attr("src",i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,n,i]),a.progressiveLazyLoad()},s.onerror=function(){e<3?setTimeout((function(){a.progressiveLazyLoad(e+1)}),500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,i]),a.progressiveLazyLoad())},s.src=i):a.$slider.trigger("allImagesLoaded",[a])},e.prototype.refresh=function(e){var n,i,o=this;i=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>i&&(o.currentSlide=i),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),n=o.currentSlide,o.destroy(!0),t.extend(o,o.initials,{currentSlide:n}),o.init(),e||o.changeSlide({data:{message:"index",index:n}},!1)},e.prototype.registerBreakpoints=function(){var e,n,i,o=this,r=o.options.responsive||null;if("array"===t.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(e in r)if(i=o.breakpoints.length-1,r.hasOwnProperty(e)){for(n=r[e].breakpoint;i>=0;)o.breakpoints[i]&&o.breakpoints[i]===n&&o.breakpoints.splice(i,1),i--;o.breakpoints.push(n),o.breakpointSettings[n]=r[e].settings}o.breakpoints.sort((function(t,e){return o.options.mobileFirst?t-e:e-t}))}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout((function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()}),50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,e,n){var i=this;return"boolean"==typeof t?t=!0===(e=t)?0:i.slideCount-1:t=!0===e?--t:t,!(i.slideCount<1||t<0||t>i.slideCount-1)&&(i.unload(),!0===n?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(t).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,void i.reinit())},e.prototype.setCSS=function(t){var e,n,i=this,o={};!0===i.options.rtl&&(t=-t),e="left"==i.positionProp?Math.ceil(t)+"px":"0px",n="top"==i.positionProp?Math.ceil(t)+"px":"0px",o[i.positionProp]=t,!1===i.transformsEnabled?i.$slideTrack.css(o):(o={},!1===i.cssTransitions?(o[i.animType]="translate("+e+", "+n+")",i.$slideTrack.css(o)):(o[i.animType]="translate3d("+e+", "+n+", 0px)",i.$slideTrack.css(o)))},e.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},e.prototype.setFade=function(){var e,n=this;n.$slides.each((function(i,o){e=n.slideWidth*i*-1,!0===n.options.rtl?t(o).css({position:"relative",right:e,top:0,zIndex:n.options.zIndex-2,opacity:0}):t(o).css({position:"relative",left:e,top:0,zIndex:n.options.zIndex-2,opacity:0})})),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,n,i,o,r,s=this,a=!1;if("object"===t.type(arguments[0])?(i=arguments[0],a=arguments[1],r="multiple"):"string"===t.type(arguments[0])&&(i=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===t.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)s.options[i]=o;else if("multiple"===r)t.each(i,(function(t,e){s.options[t]=e}));else if("responsive"===r)for(n in o)if("array"!==t.type(s.options.responsive))s.options.responsive=[o[n]];else{for(e=s.options.responsive.length-1;e>=0;)s.options.responsive[e].breakpoint===o[n].breakpoint&&s.options.responsive.splice(e,1),e--;s.options.responsive.push(o[n])}a&&(s.unload(),s.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),!1===t.options.fade?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===t.options.useCSS&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},e.prototype.setSlideClasses=function(t){var e,n,i,o,r=this;if(n=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(t).addClass("slick-current"),!0===r.options.centerMode){var s=r.options.slidesToShow%2==0?1:0;e=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(t>=e&&t<=r.slideCount-1-e?r.$slides.slice(t-e+s,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(i=r.options.slidesToShow+t,n.slice(i-e+1+s,i+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?n.eq(n.length-1-r.options.slidesToShow).addClass("slick-center"):t===r.slideCount-1&&n.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=r.slideCount-r.options.slidesToShow?r.$slides.slice(t,t+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=r.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,i=!0===r.options.infinite?r.options.slidesToShow+t:t,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-t<r.options.slidesToShow?n.slice(i-(r.options.slidesToShow-o),i+o).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},e.prototype.setupInfinite=function(){var e,n,i,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(n=null,o.slideCount>o.options.slidesToShow)){for(i=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,e=o.slideCount;e>o.slideCount-i;e-=1)n=e-1,t(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(e=0;e<i+o.slideCount;e+=1)n=e,t(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each((function(){t(this).attr("id","")}))}},e.prototype.interrupt=function(t){var e=this;t||e.autoPlay(),e.interrupted=t},e.prototype.selectHandler=function(e){var n=this,i=t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));return o||(o=0),n.slideCount<=n.options.slidesToShow?void n.slideHandler(o,!1,!0):void n.slideHandler(o)},e.prototype.slideHandler=function(t,e,n){var i,o,r,s,a,l=null,c=this;if(e=e||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===t))return!1===e&&c.asNavFor(t),i=t,l=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(t<0||t>c.getDotCount()*c.options.slidesToScroll)?void(!1===c.options.fade&&(i=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(i)})):c.postSlide(i))):!1===c.options.infinite&&!0===c.options.centerMode&&(t<0||t>c.slideCount-c.options.slidesToScroll)?void(!1===c.options.fade&&(i=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(i)})):c.postSlide(i))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&((a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade?(!0!==n?(c.fadeSlideOut(r),c.fadeSlide(o,(function(){c.postSlide(o)}))):c.postSlide(o),void c.animateHeight()):void(!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(l,(function(){c.postSlide(o)})):c.postSlide(o)))},e.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,e,n,i,o=this;return t=o.touchObject.startX-o.touchObject.curX,e=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(e,t),(i=Math.round(180*n/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0?!1===o.options.rtl?"left":"right":i<=360&&i>=315?!1===o.options.rtl?"left":"right":i>=135&&i<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?i>=35&&i<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(t){var e,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1,!1;if(i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":e=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":e=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(e),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},e.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},e.prototype.swipeMove=function(t){var e,n,i,o,r,s,a=this;return r=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!a.dragging||a.scrolling||r&&1!==r.length)&&(e=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==r?r[0].pageX:t.clientX,a.touchObject.curY=void 0!==r?r[0].pageY:t.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),n=a.swipeDirection(),void 0!==t.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,t.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),i=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===n||a.currentSlide>=a.getDotCount()&&"left"===n)&&(i=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=e+i*o:a.swipeLeft=e+i*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=e+i*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},e.prototype.swipeStart=function(t){var e,n=this;return n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow?(n.touchObject={},!1):(void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==e?e.pageX:t.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==e?e.pageY:t.clientY,void(n.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var e=this;t(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},e.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},t.fn.slick=function(){var t,n,i=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),a=i.length;for(t=0;t<a;t++)if("object"==s(o)||void 0===o?i[t].slick=new e(i[t],o):n=i[t].slick[o].apply(i[t].slick,r),void 0!==n)return n;return i}}));
/***/},
/***/"./js/listing.js":
/*!***********************!*\
  !*** ./js/listing.js ***!
  \***********************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */o()(document).ready((function(){s().on("clickQuickView",(function(e){var n={action:"quickview",id_product:e.dataset.idProduct,id_product_attribute:e.dataset.idProductAttribute};o().post(s().urls.pages.product,n,null,"json").then((function(e){o()("body").append(e.quickview_html);var n=o()("#quickview-modal-".concat(e.product.id,"-").concat(e.product.id_product_attribute));n.modal("show");n.on("hidden.bs.modal",(function(){n.remove()}));n.on("shown.bs.modal",(function(){t(n)}))})).fail((function(t){s().emit("handleError",{eventType:"clickQuickView",resp:t})}))}));var t=function t(e){(new a.default).init();e.find("#quantity_wanted").TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:1,max:1e6})};var e=function t(e){if(void 0!==e.target.dataset.searchUrl)return e.target.dataset.searchUrl;if(void 0===o()(e.target).parent()[0].dataset.searchUrl)throw new Error("Can not parse search URL");return o()(e.target).parent()[0].dataset.searchUrl};o()("body").on("change","#search_filters input[data-search-url]",(function(t){s().emit("updateFacets",e(t))}));o()("body").on("click",".js-search-filters-clear-all",(function(t){s().emit("updateFacets",e(t))}));o()("body").on("click",".js-search-link",(function(t){t.preventDefault();s().emit("updateFacets",o()(t.target).closest("a").get(0).href)}));o()("body").on("change","#select-sort-order",(function(){var t=o()(this).val();s().emit("updateFacets",t)}));o()("body").on("change","#search_filters select",(function(t){var e=o()(this).val();s().emit("updateFacets",e)}));s().on("updateProductList",(function(t){l(t);window.scrollTo(0,0)}))}));function l(t){o()("#search_filters").replaceWith(t.rendered_facets);o()("#js-active-search-filters").replaceWith(t.rendered_active_filters);o()("#js-product-list-top").replaceWith(t.rendered_products_top);o()("#js-product-list").replaceWith(t.rendered_products);o()("#js-product-list-bottom").replaceWith(t.rendered_products_bottom);if(void 0!==t.rendered_products_header&&t.rendered_products_header)o()("#js-product-list-header").replaceWith(t.rendered_products_header)}
/***/},
/***/"./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */o()(document).ready((function(){console.log("ready product");n();e();
//let slickSlider = new SlickSlider();
t();if(s().responsive.mobile){
//$(".btn-zoom").hide();
console.log("zoom");
//$(".product-img img").parent().zoom();
o()("#product-modal img").parent().zoom({magnify:.8})}s().on("updatedProduct",(function(n){console.log("updatedProduct");e();if(n&&n.product_minimal_quantity){var i=parseInt(n.product_minimal_quantity,10);var r="#quantity_wanted";
// @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
o()(r).trigger("touchspin.updatesettings",{min:i})}o()(o()(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade");o()(".js-product-images-modal").replaceWith(n.product_images_modal);
// slickSlider.init();
t()}));function t(){console.log("slickSliderProductInit");o()(".product-thumbs").slick({asNavFor:".products-imagescover",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">expand_less</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">expand_more</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:6,slidesToScroll:1,focusOnSelect:true,vertical:true,verticalSwiping:true,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2,vertical:false,verticalSwiping:false,prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1,vertical:false,verticalSwiping:false,prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'}}]});o()(".products-imagescover").slick({asNavFor:".product-thumbs",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:1,slidesToScroll:1,vertical:false,verticalSwiping:false});o()("#js-slick-product").slick({asNavFor:".product-thumbs, .products-imagescover",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow d-none d-md-flex"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow d-none d-md-flex"><i class="material-icons">chevron_right</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:1,slidesToScroll:1,vertical:false,verticalSwiping:false,swipe:false});
// On before slide change
/*
     $('#js-slick-product').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
     console.log(nextSlide);
     //$('.products-imagescover').slick('slickGoTo', nextSlide);
     //$('.product-thumbs').slick('slickGoTo', nextSlide);
     
     });*/o()(".btn-zoom").on("click",(function(){console.log("btn-zoom click");o()(this).data("id-image");a=o()(this).data("num-image");l=o()(this).parent().data("slick-index");o()("#js-slick-product").slick("slickGoTo",l);console.log("numImage : "+a);console.log("numSlide : "+l);
/*  $("#product-modal img.img-fluid").addClass('d-none').removeClass('current');
       $("#product-modal img#image-" + idImage).removeClass('d-none').addClass('current');*/}))}function e(){o()(".js-file-input").on("change",(function(t){var e,n;if((e=o()(t.currentTarget)[0])&&(n=e.files[0]))o()(e).prev().text(n.name)}))}function n(){var t=o()("#quantity_wanted");t.TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(t.attr("min"),10),max:1e6});o()("body").on("change keyup","#quantity_wanted",(function(t){o()(t.currentTarget).trigger("touchspin.stopspin");s().emit("updateProduct",{eventType:"updatedProductQuantity",event:t})}))}}));var a=0;var l=0;o()(document).on("shown.bs.modal","#product-modal",(function(t){console.log("shown #product-modal");console.log("numImage : "+a);o()("#js-slick-product").resize()}));o()(document).on("click",".next-image-modal",(function(t){console.log("next-image-modal click");o()("#js-slick-product").slick("slickNext")}));o()(document).on("click",".prev-image-modal",(function(t){console.log("prev-image-modal click");o()("#js-slick-product").slick("slickPrev")}));
//add to cart loader
o()(document).on("click",".js-add-to-cart:enabled:not(.is--loading)",(function(){o()(this).addClass("is--loading").attr("disabled",true)}));
/*
prestashop.on('updateCart', function (event) {
    removeAddToCartLoader();

});
prestashop.on('handleError', function (event) {
    removeAddToCartLoader();
    $('.js-add-to-cart').attr("disabled", false);

});
function removeAddToCartLoader() {
    $('.js-add-to-cart.is--loading').removeClass('is--loading');

}*/
/***/},
/***/"./js/responsive.js":
/*!**************************!*\
  !*** ./js/responsive.js ***!
  \**************************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */s().responsive=s().responsive||{};s().responsive.current_width=window.innerWidth;s().responsive.min_width=992;s().responsive.mobile=s().responsive.current_width<s().responsive.min_width;function a(t,e){var n=e.children().detach();e.empty().append(t.children().detach());t.append(n)}function l(){if(s().responsive.mobile){o()("*[id^='_desktop_']").each((function(t,e){var n=o()("#"+e.id.replace("_desktop_","_mobile_"));if(n.length)a(o()(e),n)}));o()("[data-collapse-hide-mobile]").collapse("hide")}else{o()("*[id^='_mobile_']").each((function(t,e){var n=o()("#"+e.id.replace("_mobile_","_desktop_"));if(n.length)a(o()(e),n)}));o()("[data-collapse-hide-mobile]").not(".show").collapse("show");o()("[data-modal-hide-mobile].show").modal("hide")}s().emit("responsive update",{mobile:s().responsive.mobile})}o()(window).on("resize",(function(){var t=s().responsive.current_width;var e=s().responsive.min_width;var n=window.innerWidth;var i=t>=e&&n<e||t<e&&n>=e;s().responsive.current_width=n;s().responsive.mobile=s().responsive.current_width<s().responsive.min_width;if(i)l()}));o()(document).ready((function(){if(s().responsive.mobile)l()}));
/***/},
/***/"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js ***!
  \*****************************************************************************/
/***/function(t,e,n){"use strict";var i,o,r;
/*
 *  Bootstrap Touchspin - v4.7.3
 *  A mobile and touch friendly input spinner component for Bootstrap 3 & 4.
 *  https://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under MIT License
 */
!function(s){if(true)o=[n(/*! jquery */"jquery")],void 0!==(r="function"==typeof(i=s)?i.apply(e,o):i)&&(t.exports=r)}((function(t){var e=0;t.fn.TouchSpin=function(n){var i={min:0,
// If null, there is no minimum enforced
max:100,
// If null, there is no maximum enforced
initval:"",replacementval:"",firstclickvalueifempty:null,step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",
// none | floor | round | ceil
stepintervaldelay:500,verticalbuttons:false,verticalup:"&plus;",verticaldown:"&minus;",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:true,boostat:10,maxboostedstep:false,mousewheel:true,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"&minus;",buttonup_txt:"&plus;",callback_before_calculation:function t(e){return e},callback_after_calculation:function t(e){return e}};var o={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",firstclickvalueifempty:"first-click-value-if-empty",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each((function(){var r,s,a,l,c,u,d,f,p,h,v,m=t(this),g=m.data(),y=0,b=false;w();function w(){if(m.data("alreadyinitialized"))return;m.data("alreadyinitialized",true);e+=1;m.data("spinnerid",e);if(!m.is("input")){console.log("Must be an input.");return}T();_();I();E();A();F();P();N();$();D()}function _(){if(""!==r.initval&&""===m.val())m.val(r.initval)}function k(t){j(t);I();var e=c.input.val();if(""!==e){e=parseFloat(r.callback_before_calculation(c.input.val()));c.input.val(r.callback_after_calculation(parseFloat(e).toFixed(r.decimals)))}}function T(){r=t.extend({},i,g,S(),n);if(1!==parseFloat(r.step)){var e;
// Modify settings.max to be divisible by step
if(0!==(e=r.max%r.step))r.max=parseFloat(r.max)-e;
// Do the same with min, should work with negative numbers too
if(0!==(e=r.min%r.step))r.min=parseFloat(r.min)+(parseFloat(r.step)-e)}}function S(){var e={};
// Setting up based on data attributes
t.each(o,(function(t,n){var i="bts-"+n;if(m.is("[data-"+i+"]"))e[t]=m.data(i)}));
// Setting up based on input attributes if specified (input attributes have precedence)
t.each(["min","max","step"],(function(t,n){if(m.is("["+n+"]")){if(void 0!==e[n])console.warn('Both the "data-bts-'+n+'" data attribute and the "'+n+'" individual attribute were specified, the individual attribute will take precedence on: ',m);e[n]=m.attr(n)}}));return e}function C(){var e=m.parent();B();m.off(".touchspin");if(e.hasClass("bootstrap-touchspin-injected")){m.siblings().remove();m.unwrap()}else{t(".bootstrap-touchspin-injected",e).remove();e.removeClass("bootstrap-touchspin")}m.data("alreadyinitialized",false)}function j(e){r=t.extend({},r,e);
// Update postfix and prefix texts if those settings were changed.
if(e.postfix){if(0===m.parent().find(".bootstrap-touchspin-postfix").length)a.insertAfter(m);m.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix)}if(e.prefix){if(0===m.parent().find(".bootstrap-touchspin-prefix").length)s.insertBefore(m);m.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix)}P()}function E(){var t=m.val(),e=m.parent();if(""!==t){
// initval may not be parsable as a number (callback_after_calculation() may decorate it so it cant be parsed).  Use the callbacks if provided.
t=r.callback_before_calculation(t);t=r.callback_after_calculation(parseFloat(t).toFixed(r.decimals))}m.data("initvalue",t).val(t);m.addClass("form-control");u='\n          <span class="input-group-addon bootstrap-touchspin-vertical-button-wrapper">\n            <span class="input-group-btn-vertical">\n              <button tabindex="-1" class="'.concat(r.buttondown_class," bootstrap-touchspin-up ").concat(r.verticalupclass,'" type="button">').concat(r.verticalup,'</button>\n              <button tabindex="-1" class="').concat(r.buttonup_class," bootstrap-touchspin-down ").concat(r.verticaldownclass,'" type="button">').concat(r.verticaldown,"</button>\n            </span>\n          </span>\n       ");if(e.hasClass("input-group"))x(e);else O()}function x(e){e.addClass("bootstrap-touchspin");var n=m.prev(),i=m.next();var o,s,a='\n            <span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected">\n              <span class="input-group-text">'.concat(r.prefix,"</span>\n            </span>\n          "),c='\n            <span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected">\n              <span class="input-group-text">'.concat(r.postfix,"</span>\n            </span>\n          ");if(r.verticalbuttons)t(u).insertAfter(m);else{if(n.hasClass("input-group-btn")||n.hasClass("input-group-prepend")){o='\n              <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">').concat(r.buttondown_txt,"</button>\n            ");n.append(o)}else{o='\n              <span class="input-group-btn input-group-prepend bootstrap-touchspin-injected">\n                <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down" type="button">').concat(r.buttondown_txt,"</button>\n              </span>\n            ");t(o).insertBefore(m)}if(i.hasClass("input-group-btn")||i.hasClass("input-group-append")){s='\n            <button tabindex="-1" class="'.concat(r.buttonup_class,' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">').concat(r.buttonup_txt,"</button>\n          ");i.prepend(s)}else{s='\n            <span class="input-group-btn input-group-append bootstrap-touchspin-injected">\n              <button tabindex="-1" class="'.concat(r.buttonup_class,' bootstrap-touchspin-up" type="button">').concat(r.buttonup_txt,"</button>\n            </span>\n          ");t(s).insertAfter(m)}}t(a).insertBefore(m);t(c).insertAfter(m);l=e}function O(){var e;var n="";if(m.hasClass("input-sm")||m.hasClass("form-control-sm"))n="input-group-sm";else if(m.hasClass("input-lg")||m.hasClass("form-control-lg"))n="input-group-lg";if(r.verticalbuttons)e='\n            <div class="input-group '.concat(n,' bootstrap-touchspin bootstrap-touchspin-injected">\n              <span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix">\n                <span class="input-group-text">').concat(r.prefix,'</span>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">\n                <span class="input-group-text">').concat(r.postfix,"</span>\n              </span>\n              ").concat(u,"\n            </div>\n          ");else e='\n            <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">\n              <span class="input-group-btn input-group-prepend">\n                <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down" type="button">').concat(r.buttondown_txt,'</button>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend">\n                <span class="input-group-text">').concat(r.prefix,'</span>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">\n                <span class="input-group-text">').concat(r.postfix,'</span>\n              </span>\n              <span class="input-group-btn input-group-append">\n                <button tabindex="-1" class="').concat(r.buttonup_class,' bootstrap-touchspin-up" type="button">').concat(r.buttonup_txt,"</button>\n              </span>\n            </div>");l=t(e).insertBefore(m);t(".bootstrap-touchspin-prefix",l).after(m);if(m.hasClass("input-sm")||m.hasClass("form-control-sm"))l.addClass("input-group-sm");else if(m.hasClass("input-lg")||m.hasClass("form-control-lg"))l.addClass("input-group-lg")}function A(){c={down:t(".bootstrap-touchspin-down",l),up:t(".bootstrap-touchspin-up",l),input:t("input",l),prefix:t(".bootstrap-touchspin-prefix",l).addClass(r.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",l).addClass(r.postfix_extraclass)}}function P(){if(""===r.prefix)s=c.prefix.detach();if(""===r.postfix)a=c.postfix.detach()}function $(){m.on("keydown.touchspin",(function(t){var e=t.keyCode||t.which;if(38===e){if("up"!==b){H();W()}t.preventDefault()}else if(40===e){if("down"!==b){q();R()}t.preventDefault()}else if(9===e||13===e)I()}));m.on("keyup.touchspin",(function(t){var e=t.keyCode||t.which;if(38===e)B();else if(40===e)B()}));
// change is fired before blur, so we need to work around that
t(document).on("mousedown touchstart",(function(e){if(t(e.target).is(m))return;I()}));m.on("blur.touchspin",(function(){I()}));c.down.on("keydown",(function(t){var e=t.keyCode||t.which;if(32===e||13===e){if("down"!==b){q();R()}t.preventDefault()}}));c.down.on("keyup.touchspin",(function(t){var e=t.keyCode||t.which;if(32===e||13===e)B()}));c.up.on("keydown.touchspin",(function(t){var e=t.keyCode||t.which;if(32===e||13===e){if("up"!==b){H();W()}t.preventDefault()}}));c.up.on("keyup.touchspin",(function(t){var e=t.keyCode||t.which;if(32===e||13===e)B()}));c.down.on("mousedown.touchspin",(function(t){c.down.off("touchstart.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;q();R();t.preventDefault();t.stopPropagation()}));c.down.on("touchstart.touchspin",(function(t){c.down.off("mousedown.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;q();R();t.preventDefault();t.stopPropagation()}));c.up.on("mousedown.touchspin",(function(t){c.up.off("touchstart.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;H();W();t.preventDefault();t.stopPropagation()}));c.up.on("touchstart.touchspin",(function(t){c.up.off("mousedown.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;H();W();t.preventDefault();t.stopPropagation()}));c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(t){if(!b)return;t.stopPropagation();B()}));c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(t){if(!b)return;t.stopPropagation();B()}));c.down.on("mousemove.touchspin touchmove.touchspin",(function(t){if(!b)return;t.stopPropagation();t.preventDefault()}));c.up.on("mousemove.touchspin touchmove.touchspin",(function(t){if(!b)return;t.stopPropagation();t.preventDefault()}));m.on("mousewheel.touchspin DOMMouseScroll.touchspin",(function(t){if(!r.mousewheel||!m.is(":focus"))return;var e=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;t.stopPropagation();t.preventDefault();if(e<0)q();else H()}))}function D(){m.on("touchspin.destroy",(function(){C()}));m.on("touchspin.uponce",(function(){B();H()}));m.on("touchspin.downonce",(function(){B();q()}));m.on("touchspin.startupspin",(function(){W()}));m.on("touchspin.startdownspin",(function(){R()}));m.on("touchspin.stopspin",(function(){B()}));m.on("touchspin.updatesettings",(function(t,e){k(e)}))}function N(){if("undefined"!=typeof MutationObserver){new MutationObserver((function(t){t.forEach((function(t){if("attributes"===t.type&&("disabled"===t.attributeName||"readonly"===t.attributeName))F()}))})).observe(m[0],{attributes:true})}}function L(t){switch(r.forcestepdivisibility){case"round":return(Math.round(t/r.step)*r.step).toFixed(r.decimals);case"floor":return(Math.floor(t/r.step)*r.step).toFixed(r.decimals);case"ceil":return(Math.ceil(t/r.step)*r.step).toFixed(r.decimals);default:return t.toFixed(r.decimals)}}function I(){var t,e,n;if(""===(t=r.callback_before_calculation(m.val()))){if(""!==r.replacementval){m.val(r.replacementval);m.trigger("change")}return}if(r.decimals>0&&"."===t)return;e=parseFloat(t);if(isNaN(e))if(""!==r.replacementval)e=r.replacementval;else e=0;n=e;if(e.toString()!==t)n=e;n=L(e);if(null!==r.min&&e<r.min)n=r.min;if(null!==r.max&&e>r.max)n=r.max;if(parseFloat(e).toString()!==parseFloat(n).toString())m.val(n);m.val(r.callback_after_calculation(parseFloat(n).toFixed(r.decimals)))}function z(){if(!r.booster)return r.step;else{var t=Math.pow(2,Math.floor(y/r.boostat))*r.step;if(r.maxboostedstep)if(t>r.maxboostedstep){t=r.maxboostedstep;d=Math.round(d/t)*t}return Math.max(r.step,t)}}function M(){if("number"==typeof r.firstclickvalueifempty)return r.firstclickvalueifempty;else return(r.min+r.max)/2}function F(){var t=m.is(":disabled,[readonly]");c.up.prop("disabled",t);c.down.prop("disabled",t);if(t)B()}function H(){if(m.is(":disabled,[readonly]"))return;I();var t=d=parseFloat(r.callback_before_calculation(c.input.val()));var e;if(isNaN(d))d=M();else{e=z();d+=e}if(null!==r.max&&d>=r.max){d=r.max;m.trigger("touchspin.on.max");B()}c.input.val(r.callback_after_calculation(parseFloat(d).toFixed(r.decimals)));if(t!==d)m.trigger("change")}function q(){if(m.is(":disabled,[readonly]"))return;I();var t=d=parseFloat(r.callback_before_calculation(c.input.val()));var e;if(isNaN(d))d=M();else{e=z();d-=e}if(null!==r.min&&d<=r.min){d=r.min;m.trigger("touchspin.on.min");B()}c.input.val(r.callback_after_calculation(parseFloat(d).toFixed(r.decimals)));if(t!==d)m.trigger("change")}function R(){if(m.is(":disabled,[readonly]"))return;B();y=0;b="down";m.trigger("touchspin.on.startspin");m.trigger("touchspin.on.startdownspin");h=setTimeout((function(){f=setInterval((function(){y++;q()}),r.stepinterval)}),r.stepintervaldelay)}function W(){if(m.is(":disabled,[readonly]"))return;B();y=0;b="up";m.trigger("touchspin.on.startspin");m.trigger("touchspin.on.startupspin");v=setTimeout((function(){p=setInterval((function(){y++;H()}),r.stepinterval)}),r.stepintervaldelay)}function B(){clearTimeout(h);clearTimeout(v);clearInterval(f);clearInterval(p);switch(b){case"up":m.trigger("touchspin.on.stopupspin");m.trigger("touchspin.on.stopspin");break;case"down":m.trigger("touchspin.on.stopdownspin");m.trigger("touchspin.on.stopspin")}y=0;b=false}}))}}));
/***/},
/***/"./node_modules/bootstrap/js/src/alert.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,u(i.key),i)}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t){var e=d(t,"string");return"symbol"==s(e)?e:e+""}function d(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var C=function(){function t(e){a(this,t);this._element=e}
// Getters
return c(t,[{key:"close",value:
// Public
function t(e){var n=this._element;if(e)n=this._getRootElement(e);if(this._triggerCloseEvent(n).isDefaultPrevented())return;this._removeElement(n)}},{key:"dispose",value:function t(){o().removeData(this._element,h);this._element=null}
// Private
},{key:"_getRootElement",value:function t(e){var n=r.default.getSelectorFromElement(e);var i=false;if(n)i=document.querySelector(n);if(!i)i=o()(e).closest(".".concat(y))[0];return i}},{key:"_triggerCloseEvent",value:function t(e){var n=o().Event(_);o()(e).trigger(n);return n}},{key:"_removeElement",value:function t(e){var n=this;o()(e).removeClass(w);if(!o()(e).hasClass(b)){this._destroyElement(e);return}var i=r.default.getTransitionDurationFromElement(e);o()(e).one(r.default.TRANSITION_END,(function(t){return n._destroyElement(e,t)})).emulateTransitionEnd(i)}},{key:"_destroyElement",value:function t(e){o()(e).detach().trigger(k).remove()}
// Static
}],[{key:"VERSION",get:function t(){return p}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=o()(this);var i=e.data(h);if(!i){i=new t(this);e.data(h,i)}if("close"===n)i[n](this)}))}},{key:"_handleDismiss",value:function t(e){return function(t){if(t)t.preventDefault();e.close(this)}}}])}();
/**
 * Data API implementation
 */o()(document).on(T,S,C._handleDismiss(new C));
/**
 * jQuery
 */o().fn[f]=C._jQueryInterface;o().fn[f].Constructor=C;o().fn[f].noConflict=function(){o().fn[f]=g;return C._jQueryInterface};
/* harmony default export */e.default=C;
/***/},
/***/"./node_modules/bootstrap/js/src/button.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function l(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t){var e=u(t,"string");return"symbol"==r(e)?e:e+""}function u(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var A=function(){function t(e){s(this,t);this._element=e;this.shouldAvoidTriggerChange=false}
// Getters
return l(t,[{key:"toggle",value:
// Public
function t(){var e=true;var n=true;var i=o()(this._element).closest(S)[0];if(i){var r=this._element.querySelector(E);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(g))e=false;else{var s=i.querySelector(x);if(s)o()(s).removeClass(g)}if(e){
// if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
if("checkbox"===r.type||"radio"===r.type)r.checked=!this._element.classList.contains(g);if(!this.shouldAvoidTriggerChange)o()(r).trigger("change")}r.focus();n=false}}if(!(this._element.hasAttribute("disabled")||this._element.classList.contains("disabled"))){if(n)this._element.setAttribute("aria-pressed",!this._element.classList.contains(g));if(e)o()(this._element).toggleClass(g)}}},{key:"dispose",value:function t(){o().removeData(this._element,p);this._element=null}
// Static
}],[{key:"VERSION",get:function t(){return f}},{key:"_jQueryInterface",value:function e(n,i){return this.each((function(){var e=o()(this);var r=e.data(p);if(!r){r=new t(this);e.data(p,r)}r.shouldAvoidTriggerChange=i;if("toggle"===n)r[n]()}))}}])}();
/**
 * Data API implementation
 */o()(document).on(w,T,(function(t){var e=t.target;var n=e;if(!o()(e).hasClass(y))e=o()(e).closest(O)[0];if(!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();// work around Firefox bug #1540995
else{var i=e.querySelector(E);if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled"))){t.preventDefault();// work around Firefox bug #1540995
return}if("INPUT"===n.tagName||"LABEL"!==e.tagName)A._jQueryInterface.call(o()(e),"toggle","INPUT"===n.tagName)}})).on(_,T,(function(t){var e=o()(t.target).closest(O)[0];o()(e).toggleClass(b,/^focus(in)?$/.test(t.type))}));o()(window).on(k,(function(){
// ensure correct active class is set to match the controls' actual values/states
// find all checkboxes/readio buttons inside data-toggle groups
var t=[].slice.call(document.querySelectorAll(j));for(var e=0,n=t.length;e<n;e++){var i=t[e];var o=i.querySelector(E);if(o.checked||o.hasAttribute("checked"))i.classList.add(g);else i.classList.remove(g)}
// find all button toggles
for(var r=0,s=(t=[].slice.call(document.querySelectorAll(C))).length;r<s;r++){var a=t[r];if("true"===a.getAttribute("aria-pressed"))a.classList.add(g);else a.classList.remove(g)}}));
/**
 * jQuery
 */o().fn[d]=A._jQueryInterface;o().fn[d].Constructor=A;o().fn[d].noConflict=function(){o().fn[d]=m;return A._jQueryInterface};
/* harmony default export */e.default=A;
/***/},
/***/"./node_modules/bootstrap/js/src/collapse.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/collapse.js ***!
  \***************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,p(i.key),i)}}function f(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=h(t,"string");return"symbol"==s(e)?e:e+""}function h(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var I=function(){function t(e,n){u(this,t);this._isTransitioning=false;this._element=e;this._config=this._getConfig(n);this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'.concat(e.id,'"],')+'[data-toggle="collapse"][data-target="#'.concat(e.id,'"]')));var i=[].slice.call(document.querySelectorAll(D));for(var o=0,s=i.length;o<s;o++){var a=i[o];var l=r.default.getSelectorFromElement(a);var c=[].slice.call(document.querySelectorAll(l)).filter((function(t){return t===e}));if(null!==l&&c.length>0){this._selector=l;this._triggerArray.push(a)}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent)this._addAriaAndCollapsedClass(this._element,this._triggerArray);if(this._config.toggle)this.toggle()}
// Getters
return f(t,[{key:"toggle",value:
// Public
function t(){if(o()(this._element).hasClass(_))this.hide();else this.show()}},{key:"show",value:function e(){var n=this;if(this._isTransitioning||o()(this._element).hasClass(_))return;var i;var s;if(this._parent)if(0===(i=[].slice.call(this._parent.querySelectorAll($)).filter((function(t){if("string"==typeof n._config.parent)return t.getAttribute("data-parent")===n._config.parent;return t.classList.contains(k)}))).length)i=null;if(i)if((s=o()(i).not(this._selector).data(g))&&s._isTransitioning)return;var a=o().Event(E);o()(this._element).trigger(a);if(a.isDefaultPrevented())return;if(i){t._jQueryInterface.call(o()(i).not(this._selector),"hide");if(!s)o()(i).data(g,null)}var l=this._getDimension();o()(this._element).removeClass(k).addClass(T);this._element.style[l]=0;if(this._triggerArray.length)o()(this._triggerArray).removeClass(S).attr("aria-expanded",true);this.setTransitioning(true);var c=function t(){o()(n._element).removeClass(T).addClass("".concat(k," ").concat(_));n._element.style[l]="";n.setTransitioning(false);o()(n._element).trigger(x)};var u=l[0].toUpperCase()+l.slice(1);var d="scroll".concat(u);var f=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,c).emulateTransitionEnd(f);this._element.style[l]="".concat(this._element[d],"px")}},{key:"hide",value:function t(){var e=this;if(this._isTransitioning||!o()(this._element).hasClass(_))return;var n=o().Event(O);o()(this._element).trigger(n);if(n.isDefaultPrevented())return;var i=this._getDimension();this._element.style[i]="".concat(this._element.getBoundingClientRect()[i],"px");r.default.reflow(this._element);o()(this._element).addClass(T).removeClass("".concat(k," ").concat(_));var s=this._triggerArray.length;if(s>0)for(var a=0;a<s;a++){var l=this._triggerArray[a];var c=r.default.getSelectorFromElement(l);if(null!==c){if(!o()([].slice.call(document.querySelectorAll(c))).hasClass(_))o()(l).addClass(S).attr("aria-expanded",false)}}this.setTransitioning(true);var u=function t(){e.setTransitioning(false);o()(e._element).removeClass(T).addClass(k).trigger(A)};this._element.style[i]="";var d=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,u).emulateTransitionEnd(d)}},{key:"setTransitioning",value:function t(e){this._isTransitioning=e}},{key:"dispose",value:function t(){o().removeData(this._element,g);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null}
// Private
},{key:"_getConfig",value:function t(e){(e=l(l({},N),e)).toggle=Boolean(e.toggle);// Coerce string values
r.default.typeCheckConfig(v,e,L);return e}},{key:"_getDimension",value:function t(){return o()(this._element).hasClass(C)?C:j}},{key:"_getParent",value:function e(){var n=this;var i;if(r.default.isElement(this._config.parent)){i=this._config.parent;
// It's a jQuery object
if(void 0!==this._config.parent.jquery)i=this._config.parent[0]}else i=document.querySelector(this._config.parent);var s='[data-toggle="collapse"][data-parent="'.concat(this._config.parent,'"]');var a=[].slice.call(i.querySelectorAll(s));o()(a).each((function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])}));return i}},{key:"_addAriaAndCollapsedClass",value:function t(e,n){var i=o()(e).hasClass(_);if(n.length)o()(n).toggleClass(S,!i).attr("aria-expanded",i)}
// Static
}],[{key:"VERSION",get:function t(){return m}},{key:"Default",get:function t(){return N}},{key:"_getTargetFromElement",value:function t(e){var n=r.default.getSelectorFromElement(e);return n?document.querySelector(n):null}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=o()(this);var i=e.data(g);var r=l(l(l({},N),e.data()),"object"===s(n)&&n?n:{});if(!i&&r.toggle&&"string"==typeof n&&/show|hide/.test(n))r.toggle=false;if(!i){i=new t(this,r);e.data(g,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n]()}}))}}])}();
/**
 * Data API implementation
 */o()(document).on(P,D,(function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
if("A"===t.currentTarget.tagName)t.preventDefault();var e=o()(this);var n=r.default.getSelectorFromElement(this);var i=[].slice.call(document.querySelectorAll(n));o()(i).each((function(){var t=o()(this);var n=t.data(g)?"toggle":e.data();I._jQueryInterface.call(t,n)}))}));
/**
 * jQuery
 */o().fn[v]=I._jQueryInterface;o().fn[v].Constructor=I;o().fn[v].noConflict=function(){o().fn[v]=w;return I._jQueryInterface};
/* harmony default export */e.default=I;
/***/},
/***/"./node_modules/bootstrap/js/src/dropdown.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/dropdown.js ***!
  \***************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var s=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,h(i.key),i)}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t){var e=v(t,"string");return"symbol"==a(e)?e:e+""}function v(t,e){if("object"!=a(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
var x=new RegExp("".concat(C,"|").concat(j,"|").concat(k));var O="disabled";var A="show";var P="dropup";var $="dropright";var D="dropleft";var N="dropdown-menu-right";var L="position-static";var I="hide".concat(b);var z="hidden".concat(b);var M="show".concat(b);var F="shown".concat(b);var H="click".concat(b);var q="click".concat(b).concat(w);var R="keydown".concat(b).concat(w);var W="keyup".concat(b).concat(w);var B='[data-toggle="dropdown"]';var U=".dropdown form";var Q=".dropdown-menu";var Y=".navbar-nav";var V=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";var X="top-start";var K="top-end";var G="bottom-start";var Z="bottom-end";var J="right-start";var tt="left-start";var et={offset:0,flip:true,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null};var nt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"};
/**
 * Class definition
 */var it=function(){function t(e,n){d(this,t);this._element=e;this._popper=null;this._config=this._getConfig(n);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}
// Getters
return p(t,[{key:"toggle",value:
// Public
function e(){if(this._element.disabled||o()(this._element).hasClass(O))return;var n=o()(this._menu).hasClass(A);t._clearMenus();if(n)return;this.show(true)}},{key:"show",value:function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:false;if(this._element.disabled||o()(this._element).hasClass(O)||o()(this._menu).hasClass(A))return;var i={relatedTarget:this._element};var a=o().Event(M,i);var l=t._getParentFromElement(this._element);o()(l).trigger(a);if(a.isDefaultPrevented())return;
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
if("ontouchstart"in document.documentElement&&0===o()(l).closest(Y).length)o()(document.body).children().on("mouseover",null,o().noop);this._element.focus();this._element.setAttribute("aria-expanded",true);o()(this._menu).toggleClass(A);o()(l).toggleClass(A).trigger(o().Event(F,i))}},{key:"hide",value:function e(){if(this._element.disabled||o()(this._element).hasClass(O)||!o()(this._menu).hasClass(A))return;var n={relatedTarget:this._element};var i=o().Event(I,n);var r=t._getParentFromElement(this._element);o()(r).trigger(i);if(i.isDefaultPrevented())return;if(this._popper)this._popper.destroy();o()(this._menu).toggleClass(A);o()(r).toggleClass(A).trigger(o().Event(z,n))}},{key:"dispose",value:function t(){o().removeData(this._element,y);o()(this._element).off(b);this._element=null;this._menu=null;if(null!==this._popper){this._popper.destroy();this._popper=null}}},{key:"update",value:function t(){this._inNavbar=this._detectNavbar();if(null!==this._popper)this._popper.scheduleUpdate()}
// Private
},{key:"_addEventListeners",value:function t(){var e=this;o()(this._element).on(H,(function(t){t.preventDefault();t.stopPropagation();e.toggle()}))}},{key:"_getConfig",value:function t(e){e=c(c(c({},this.constructor.Default),o()(this._element).data()),e);s.default.typeCheckConfig(m,e,this.constructor.DefaultType);return e}},{key:"_getMenuElement",value:function e(){if(!this._menu){var n=t._getParentFromElement(this._element);if(n)this._menu=n.querySelector(Q)}return this._menu}},{key:"_getPlacement",value:function t(){var e=o()(this._element.parentNode);var n=G;
// Handle dropup
if(e.hasClass(P))n=o()(this._menu).hasClass(N)?K:X;else if(e.hasClass($))n=J;else if(e.hasClass(D))n=tt;else if(o()(this._menu).hasClass(N))n=Z;return n}},{key:"_detectNavbar",value:function t(){return o()(this._element).closest(".navbar").length>0}},{key:"_getOffset",value:function t(){var e=this;var n={};if("function"==typeof this._config.offset)n.fn=function(t){t.offsets=c(c({},t.offsets),e._config.offset(t.offsets,e._element));return t};else n.offset=this._config.offset;return n}},{key:"_getPopperConfig",value:function t(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};
// Disable Popper if we have a static display
if("static"===this._config.display)e.modifiers.applyStyle={enabled:false};return c(c({},e),this._config.popperConfig)}
// Static
}],[{key:"VERSION",get:function t(){return g}},{key:"Default",get:function t(){return et}},{key:"DefaultType",get:function t(){return nt}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=o()(this).data(y);var i="object"===a(n)?n:null;if(!e){e=new t(this,i);o()(this).data(y,e)}if("string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'.concat(n,'"'));e[n]()}}))}},{key:"_clearMenus",value:function e(n){if(n&&(n.which===E||"keyup"===n.type&&n.which!==S))return;var i=[].slice.call(document.querySelectorAll(B));for(var r=0,s=i.length;r<s;r++){var a=t._getParentFromElement(i[r]);var l=o()(i[r]).data(y);var c={relatedTarget:i[r]};if(n&&"click"===n.type)c.clickEvent=n;if(!l)continue;var u=l._menu;if(!o()(a).hasClass(A))continue;if(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&n.which===S)&&o().contains(a,n.target))continue;var d=o().Event(I,c);o()(a).trigger(d);if(d.isDefaultPrevented())continue;
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)o()(document.body).children().off("mouseover",null,o().noop);i[r].setAttribute("aria-expanded","false");if(l._popper)l._popper.destroy();o()(u).removeClass(A);o()(a).removeClass(A).trigger(o().Event(z,c))}}},{key:"_getParentFromElement",value:function t(e){var n;var i=s.default.getSelectorFromElement(e);if(i)n=document.querySelector(i);return n||e.parentNode}
// eslint-disable-next-line complexity
},{key:"_dataApiKeydownHandler",value:function e(n){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(n.target.tagName)?n.which===T||n.which!==k&&(n.which!==j&&n.which!==C||o()(n.target).closest(Q).length):!x.test(n.which))return;if(this.disabled||o()(this).hasClass(O))return;var i=t._getParentFromElement(this);var r=o()(i).hasClass(A);if(!r&&n.which===k)return;n.preventDefault();n.stopPropagation();if(!r||n.which===k||n.which===T){if(n.which===k)o()(i.querySelector(B)).trigger("focus");o()(this).trigger("click");return}var s=[].slice.call(i.querySelectorAll(V)).filter((function(t){return o()(t).is(":visible")}));if(0===s.length)return;var a=s.indexOf(n.target);if(n.which===C&&a>0)
// Up
a--;if(n.which===j&&a<s.length-1)
// Down
a++;if(a<0)a=0;s[a].focus()}}])}();
/**
 * Data API implementation
 */o()(document).on(R,B,it._dataApiKeydownHandler).on(R,Q,it._dataApiKeydownHandler).on("".concat(q," ").concat(W),it._clearMenus).on(q,B,(function(t){t.preventDefault();t.stopPropagation();it._jQueryInterface.call(o()(this),"toggle")})).on(q,U,(function(t){t.stopPropagation()}));
/**
 * jQuery
 */o().fn[m]=it._jQueryInterface;o().fn[m].Constructor=it;o().fn[m].noConflict=function(){o().fn[m]=_;return it._jQueryInterface};
/* harmony default export */e.default=it;
/***/},
/***/"./node_modules/bootstrap/js/src/modal.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/modal.js ***!
  \************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,p(i.key),i)}}function f(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=h(t,"string");return"symbol"==s(e)?e:e+""}function h(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var X=function(){function t(e,n){u(this,t);this._config=this._getConfig(n);this._element=e;this._dialog=e.querySelector(q);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0}
// Getters
return f(t,[{key:"toggle",value:
// Public
function t(e){return this._isShown?this.hide():this.show(e)}},{key:"show",value:function t(e){var n=this;if(this._isShown||this._isTransitioning)return;var i=o().Event($,{relatedTarget:e});o()(this._element).trigger(i);if(i.isDefaultPrevented())return;this._isShown=true;if(o()(this._element).hasClass(j))this._isTransitioning=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();o()(this._element).on(I,B,(function(t){return n.hide(t)}));o()(this._dialog).on(F,(function(){o()(n._element).one(M,(function(t){if(o()(t.target).is(n._element))n._ignoreBackdropClick=true}))}));this._showBackdrop((function(){return n._showElement(e)}))}},{key:"hide",value:function t(e){var n=this;if(e)e.preventDefault();if(!this._isShown||this._isTransitioning)return;var i=o().Event(O);o()(this._element).trigger(i);if(!this._isShown||i.isDefaultPrevented())return;this._isShown=false;var s=o()(this._element).hasClass(j);if(s)this._isTransitioning=true;this._setEscapeEvent();this._setResizeEvent();o()(document).off(N);o()(this._element).removeClass(E);o()(this._element).off(I);o()(this._dialog).off(F);if(s){var a=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(a)}else this._hideModal()}},{key:"dispose",value:function t(){[window,this._element,this._dialog].forEach((function(t){return o()(t).off(y)}));
/**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */o()(document).off(N);o().removeData(this._element,g);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null}},{key:"handleUpdate",value:function t(){this._adjustDialog()}
// Private
},{key:"_getConfig",value:function t(e){e=l(l({},Y),e);r.default.typeCheckConfig(v,e,V);return e}},{key:"_triggerBackdropTransition",value:function t(){var e=this;var n=o().Event(A);o()(this._element).trigger(n);if(n.isDefaultPrevented())return;var i=this._element.scrollHeight>document.documentElement.clientHeight;if(!i)this._element.style.overflowY="hidden";this._element.classList.add(x);var s=r.default.getTransitionDurationFromElement(this._dialog);o()(this._element).off(r.default.TRANSITION_END);o()(this._element).one(r.default.TRANSITION_END,(function(){e._element.classList.remove(x);if(!i)o()(e._element).one(r.default.TRANSITION_END,(function(){e._element.style.overflowY=""})).emulateTransitionEnd(e._element,s)})).emulateTransitionEnd(s);this._element.focus()}},{key:"_showElement",value:function t(e){var n=this;var i=o()(this._element).hasClass(j);var s=this._dialog?this._dialog.querySelector(R):null;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)
// Don't move modal's DOM position
document.body.appendChild(this._element);this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");if(o()(this._dialog).hasClass(k)&&s)s.scrollTop=0;else this._element.scrollTop=0;if(i)r.default.reflow(this._element);o()(this._element).addClass(E);if(this._config.focus)this._enforceFocus();var a=o().Event(D,{relatedTarget:e});var l=function t(){if(n._config.focus)n._element.focus();n._isTransitioning=false;o()(n._element).trigger(a)};if(i){var c=r.default.getTransitionDurationFromElement(this._dialog);o()(this._dialog).one(r.default.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},{key:"_enforceFocus",value:function t(){var e=this;o()(document).off(N).on(N,(function(t){if(document!==t.target&&e._element!==t.target&&0===o()(e._element).has(t.target).length)e._element.focus()}))}},{key:"_setEscapeEvent",value:function t(){var e=this;if(this._isShown)o()(this._element).on(z,(function(t){if(e._config.keyboard&&t.which===_){t.preventDefault();e.hide()}else if(!e._config.keyboard&&t.which===_)e._triggerBackdropTransition()}));else if(!this._isShown)o()(this._element).off(z)}},{key:"_setResizeEvent",value:function t(){var e=this;if(this._isShown)o()(window).on(L,(function(t){return e.handleUpdate(t)}));else o()(window).off(L)}},{key:"_hideModal",value:function t(){var e=this;this._element.style.display="none";this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");this._isTransitioning=false;this._showBackdrop((function(){o()(document.body).removeClass(C);e._resetAdjustments();e._resetScrollbar();o()(e._element).trigger(P)}))}},{key:"_removeBackdrop",value:function t(){if(this._backdrop){o()(this._backdrop).remove();this._backdrop=null}}},{key:"_showBackdrop",value:function t(e){var n=this;var i=o()(this._element).hasClass(j)?j:"";if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement("div");this._backdrop.className=S;if(i)this._backdrop.classList.add(i);o()(this._backdrop).appendTo(document.body);o()(this._element).on(I,(function(t){if(n._ignoreBackdropClick){n._ignoreBackdropClick=false;return}if(t.target!==t.currentTarget)return;if("static"===n._config.backdrop)n._triggerBackdropTransition();else n.hide()}));if(i)r.default.reflow(this._backdrop);o()(this._backdrop).addClass(E);if(!e)return;if(!i){e();return}var s=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,e).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){o()(this._backdrop).removeClass(E);var a=function t(){n._removeBackdrop();if(e)e()};if(o()(this._element).hasClass(j)){var l=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,a).emulateTransitionEnd(l)}else a()}else if(e)e()}
// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
},{key:"_adjustDialog",value:function t(){var e=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&e)this._element.style.paddingLeft="".concat(this._scrollbarWidth,"px");if(this._isBodyOverflowing&&!e)this._element.style.paddingRight="".concat(this._scrollbarWidth,"px")}},{key:"_resetAdjustments",value:function t(){this._element.style.paddingLeft="";this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function t(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function t(){var e=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var n=[].slice.call(document.querySelectorAll(U));var i=[].slice.call(document.querySelectorAll(Q));
// Adjust fixed content padding
o()(n).each((function(t,n){var i=n.style.paddingRight;var r=o()(n).css("padding-right");o()(n).data("padding-right",i).css("padding-right","".concat(parseFloat(r)+e._scrollbarWidth,"px"))}));
// Adjust sticky content margin
o()(i).each((function(t,n){var i=n.style.marginRight;var r=o()(n).css("margin-right");o()(n).data("margin-right",i).css("margin-right","".concat(parseFloat(r)-e._scrollbarWidth,"px"))}));
// Adjust body padding
var r=document.body.style.paddingRight;var s=o()(document.body).css("padding-right");o()(document.body).data("padding-right",r).css("padding-right","".concat(parseFloat(s)+this._scrollbarWidth,"px"))}o()(document.body).addClass(C)}},{key:"_resetScrollbar",value:function t(){
// Restore fixed content padding
var e=[].slice.call(document.querySelectorAll(U));o()(e).each((function(t,e){var n=o()(e).data("padding-right");o()(e).removeData("padding-right");e.style.paddingRight=n?n:""}));
// Restore sticky content
var n=[].slice.call(document.querySelectorAll("".concat(Q)));o()(n).each((function(t,e){var n=o()(e).data("margin-right");if(void 0!==n)o()(e).css("margin-right",n).removeData("margin-right")}));
// Restore body padding
var i=o()(document.body).data("padding-right");o()(document.body).removeData("padding-right");document.body.style.paddingRight=i?i:""}},{key:"_getScrollbarWidth",value:function t(){
// thx d.walsh
var e=document.createElement("div");e.className=T;document.body.appendChild(e);var n=e.getBoundingClientRect().width-e.clientWidth;document.body.removeChild(e);return n}
// Static
}],[{key:"VERSION",get:function t(){return m}},{key:"Default",get:function t(){return Y}},{key:"_jQueryInterface",value:function e(n,i){return this.each((function(){var e=o()(this).data(g);var r=l(l(l({},Y),o()(this).data()),"object"===s(n)&&n?n:{});if(!e){e=new t(this,r);o()(this).data(g,e)}if("string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'.concat(n,'"'));e[n](i)}else if(r.show)e.show(i)}))}}])}();
/**
 * Data API implementation
 */o()(document).on(H,W,(function(t){var e=this;var n;var i=r.default.getSelectorFromElement(this);if(i)n=document.querySelector(i);var s=o()(n).data(g)?"toggle":l(l({},o()(n).data()),o()(this).data());if("A"===this.tagName||"AREA"===this.tagName)t.preventDefault();var a=o()(n).one($,(function(t){if(t.isDefaultPrevented())
// Only register focus restorer if modal will actually get shown
return;a.one(P,(function(){if(o()(e).is(":visible"))e.focus()}))}));X._jQueryInterface.call(o()(n),s,this)}));
/**
 * jQuery
 */o().fn[v]=X._jQueryInterface;o().fn[v].Constructor=X;o().fn[v].noConflict=function(){o().fn[v]=w;return X._jQueryInterface};
/* harmony default export */e.default=X;
/***/},
/***/"./node_modules/bootstrap/js/src/popover.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/popover.js ***!
  \**************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./tooltip */"./node_modules/bootstrap/js/src/tooltip.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,w(i.key),i)}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,n){return e=h(e),d(t,p()?Reflect.construct(e,n||[],h(t).constructor):e.apply(t,n))}function d(t,e){if(e&&("object"==s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function e(){return!!t})()}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return(e=w(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=_(t,"string");return"symbol"==s(e)?e:e+""}function _(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var I=function(t){function e(){a(this,e);return u(this,e,arguments)}v(e,t);return c(e,[{key:"isWithContent",value:
// Overrides
function t(){return this.getTitle()||this._getContent()}},{key:"addAttachmentClass",value:function t(e){o()(this.getTipElement()).addClass("".concat(E,"-").concat(e))}},{key:"getTipElement",value:function t(){this.tip=this.tip||o()(this.config.template)[0];return this.tip}},{key:"setContent",value:function t(){var e=o()(this.getTipElement());
// We use append for html objects to maintain js events
this.setElementContent(e.find(P),this.getTitle());var n=this._getContent();if("function"==typeof n)n=n.call(this.element);this.setElementContent(e.find($),n);e.removeClass("".concat(O," ").concat(A))}
// Private
},{key:"_getContent",value:function t(){return this.element.getAttribute("data-content")||this.config.content}},{key:"_cleanTipClass",value:function t(){var e=o()(this.getTipElement());var n=e.attr("class").match(x);if(null!==n&&n.length>0)e.removeClass(n.join(""))}
// Static
}],[{key:"VERSION",get:
// Getters
function t(){return T}},{key:"Default",get:function t(){return D}},{key:"NAME",get:function t(){return k}},{key:"DATA_KEY",get:function t(){return S}},{key:"Event",get:function t(){return L}},{key:"EVENT_KEY",get:function t(){return C}},{key:"DefaultType",get:function t(){return N}},{key:"_jQueryInterface",value:function t(n){return this.each((function(){var t=o()(this).data(S);var i="object"===s(n)?n:null;if(!t&&/dispose|hide/.test(n))return;if(!t){t=new e(this,i);o()(this).data(S,t)}if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'.concat(n,'"'));t[n]()}}))}}])}(r.default);
/**
 * jQuery
 */o().fn[k]=I._jQueryInterface;o().fn[k].Constructor=I;o().fn[k].noConflict=function(){o().fn[k]=j;return I._jQueryInterface};
/* harmony default export */e.default=I;
/***/},
/***/"./node_modules/bootstrap/js/src/tab.js":
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/src/tab.js ***!
  \**********************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,u(i.key),i)}}function c(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t){var e=d(t,"string");return"symbol"==s(e)?e:e+""}function d(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var L=function(){function t(e){a(this,t);this._element=e}
// Getters
return c(t,[{key:"show",value:
// Public
function t(){var e=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o()(this._element).hasClass(b)||o()(this._element).hasClass(w)||this._element.hasAttribute("disabled"))return;var n;var i;var s=o()(this._element).closest(O)[0];var a=r.default.getSelectorFromElement(this._element);if(s){var l="UL"===s.nodeName||"OL"===s.nodeName?P:A;i=(i=o().makeArray(o()(s).find(l)))[i.length-1]}var c=o().Event(T,{relatedTarget:this._element});var u=o().Event(C,{relatedTarget:i});if(i)o()(i).trigger(c);o()(this._element).trigger(u);if(u.isDefaultPrevented()||c.isDefaultPrevented())return;if(a)n=document.querySelector(a);this._activate(this._element,s);var d=function t(){var n=o().Event(S,{relatedTarget:e._element});var r=o().Event(j,{relatedTarget:i});o()(i).trigger(n);o()(e._element).trigger(r)};if(n)this._activate(n,n.parentNode,d);else d()}},{key:"dispose",value:function t(){o().removeData(this._element,h);this._element=null}
// Private
},{key:"_activate",value:function t(e,n,i){var s=this;var a=(n&&("UL"===n.nodeName||"OL"===n.nodeName)?o()(n).find(P):o()(n).children(A))[0];var l=i&&a&&o()(a).hasClass(_);var c=function t(){return s._transitionComplete(e,a,i)};if(a&&l){var u=r.default.getTransitionDurationFromElement(a);o()(a).removeClass(k).one(r.default.TRANSITION_END,c).emulateTransitionEnd(u)}else c()}},{key:"_transitionComplete",value:function t(e,n,i){if(n){o()(n).removeClass(b);var s=o()(n.parentNode).find(N)[0];if(s)o()(s).removeClass(b);if("tab"===n.getAttribute("role"))n.setAttribute("aria-selected",false)}o()(e).addClass(b);if("tab"===e.getAttribute("role"))e.setAttribute("aria-selected",true);r.default.reflow(e);if(e.classList.contains(_))e.classList.add(k);var a=e.parentNode;if(a&&"LI"===a.nodeName)a=a.parentNode;if(a&&o()(a).hasClass(y)){var l=o()(e).closest(x)[0];if(l){var c=[].slice.call(l.querySelectorAll(D));o()(c).addClass(b)}e.setAttribute("aria-expanded",true)}if(i)i()}
// Static
}],[{key:"VERSION",get:function t(){return p}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=o()(this);var i=e.data(h);if(!i){i=new t(this);e.data(h,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n]()}}))}}])}();
/**
 * Data API implementation
 */o()(document).on(E,$,(function(t){t.preventDefault();L._jQueryInterface.call(o()(this),"show")}));
/**
 * jQuery
 */o().fn[f]=L._jQueryInterface;o().fn[f].Constructor=L;o().fn[f].noConflict=function(){o().fn[f]=g;return L._jQueryInterface};
/* harmony default export */e.default=L;
/***/},
/***/"./node_modules/bootstrap/js/src/toast.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/toast.js ***!
  \************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery");
/* harmony import */var o=n.n(i);
/* harmony import */var r=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,p(i.key),i)}}function f(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=h(t,"string");return"symbol"==s(e)?e:e+""}function h(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var $=function(){function t(e,n){u(this,t);this._element=e;this._config=this._getConfig(n);this._timeout=null;this._setListeners()}
// Getters
return f(t,[{key:"show",value:
// Public
function t(){var e=this;var n=o().Event(E);o()(this._element).trigger(n);if(n.isDefaultPrevented())return;this._clearTimeout();if(this._config.animation)this._element.classList.add(w);var i=function t(){e._element.classList.remove(T);e._element.classList.add(k);o()(e._element).trigger(x);if(e._config.autohide)e._timeout=setTimeout((function(){e.hide()}),e._config.delay)};this._element.classList.remove(_);r.default.reflow(this._element);this._element.classList.add(T);if(this._config.animation){var s=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,i).emulateTransitionEnd(s)}else i()}},{key:"hide",value:function t(){if(!this._element.classList.contains(k))return;var e=o().Event(C);o()(this._element).trigger(e);if(e.isDefaultPrevented())return;this._close()}},{key:"dispose",value:function t(){this._clearTimeout();if(this._element.classList.contains(k))this._element.classList.remove(k);o()(this._element).off(S);o().removeData(this._element,g);this._element=null;this._config=null}
// Private
},{key:"_getConfig",value:function t(e){e=l(l(l({},A),o()(this._element).data()),"object"===s(e)&&e?e:{});r.default.typeCheckConfig(v,e,this.constructor.DefaultType);return e}},{key:"_setListeners",value:function t(){var e=this;o()(this._element).on(S,O,(function(){return e.hide()}))}},{key:"_close",value:function t(){var e=this;var n=function t(){e._element.classList.add(_);o()(e._element).trigger(j)};this._element.classList.remove(k);if(this._config.animation){var i=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},{key:"_clearTimeout",value:function t(){clearTimeout(this._timeout);this._timeout=null}
// Static
}],[{key:"VERSION",get:function t(){return m}},{key:"DefaultType",get:function t(){return P}},{key:"Default",get:function t(){return A}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=o()(this);var i=e.data(g);var r="object"===s(n)&&n;if(!i){i=new t(this,r);e.data(g,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n](this)}}))}}])}();
/**
 * jQuery
 */o().fn[v]=$._jQueryInterface;o().fn[v].Constructor=$;o().fn[v].noConflict=function(){o().fn[v]=b;return $._jQueryInterface};
/* harmony default export */e.default=$;
/***/},
/***/"./node_modules/bootstrap/js/src/tools/sanitizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tools/sanitizer.js ***!
  \**********************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony export */n.d(e,{
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
 */var s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function a(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n)){if(-1!==i.indexOf(n))return Boolean(r.test(t.nodeValue)||s.test(t.nodeValue));return true}var o=e.filter((function(t){return t instanceof RegExp}));
// Check if a regular expression validates the attribute.
for(var a=0,l=o.length;a<l;a++)if(o[a].test(n))return true;return false}function l(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);var i=(new window.DOMParser).parseFromString(t,"text/html");var o=Object.keys(e);var r=[].slice.call(i.body.querySelectorAll("*"));var s=function t(){var n=r[l];var i=n.nodeName.toLowerCase();if(-1===o.indexOf(n.nodeName.toLowerCase())){n.parentNode.removeChild(n);return 1;// continue
}var s=[].slice.call(n.attributes);
// eslint-disable-next-line unicorn/prefer-spread
var c=[].concat(e["*"]||[],e[i]||[]);s.forEach((function(t){if(!a(t,c))n.removeAttribute(t.nodeName)}))};for(var l=0,c=r.length;l<c;l++)if(s())continue;return i.body.innerHTML}
/***/},
/***/"./node_modules/bootstrap/js/src/tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tooltip.js ***!
  \**************************************************/
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! ./tools/sanitizer */"./node_modules/bootstrap/js/src/tools/sanitizer.js");
/* harmony import */var o=n(/*! jquery */"jquery");
/* harmony import */var r=n.n(o);
/* harmony import */var s=n(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var a=n(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,v(i.key),i)}}function h(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function v(t){var e=m(t,"string");return"symbol"==d(e)?e:e+""}function m(t,e){if("object"!=d(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
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
 */var F=function(){function t(e,n){f(this,t);if(void 0===s.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
// Private
this._isEnabled=true;this._timeout=0;this._hoverState="";this._activeTrigger={};this._popper=null;
// Protected
this.element=e;this.config=this._getConfig(n);this.tip=null;this._setListeners()}
// Getters
return h(t,[{key:"enable",value:
// Public
function t(){this._isEnabled=true}},{key:"disable",value:function t(){this._isEnabled=false}},{key:"toggleEnabled",value:function t(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function t(e){if(!this._isEnabled)return;if(e){var n=this.constructor.DATA_KEY;var i=r()(e.currentTarget).data(n);if(!i){i=new this.constructor(e.currentTarget,this._getDelegateConfig());r()(e.currentTarget).data(n,i)}i._activeTrigger.click=!i._activeTrigger.click;if(i._isWithActiveTrigger())i._enter(null,i);else i._leave(null,i)}else{if(r()(this.getTipElement()).hasClass(j)){this._leave(null,this);return}this._enter(null,this)}}},{key:"dispose",value:function t(){clearTimeout(this._timeout);r().removeData(this.element,this.constructor.DATA_KEY);r()(this.element).off(this.constructor.EVENT_KEY);r()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler);if(this.tip)r()(this.tip).remove();this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper)this._popper.destroy();this._popper=null;this.element=null;this.config=null;this.tip=null}},{key:"show",value:function t(){var e=this;if("none"===r()(this.element).css("display"))throw new Error("Please use show on visible elements");var n=r().Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){r()(this.element).trigger(n);var i=a.default.findShadowRoot(this.element);var o=r().contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!o)return;var l=this.getTipElement();var c=a.default.getUID(this.constructor.NAME);l.setAttribute("id",c);this.element.setAttribute("aria-describedby",c);this.setContent();if(this.config.animation)r()(l).addClass(C);var u="function"==typeof this.config.placement?this.config.placement.call(this,l,this.element):this.config.placement;var d=this._getAttachment(u);this.addAttachmentClass(d);var f=this._getContainer();r()(l).data(this.constructor.DATA_KEY,this);if(!r().contains(this.element.ownerDocument.documentElement,this.tip))r()(l).appendTo(f);r()(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new s.default(this.element,l,this._getPopperConfig(d));r()(l).addClass(j);r()(l).addClass(this.config.customClass);
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement)r()(document.body).children().on("mouseover",null,r().noop);var p=function t(){if(e.config.animation)e._fixTransition();var n=e._hoverState;e._hoverState=null;r()(e.element).trigger(e.constructor.Event.SHOWN);if(n===x)e._leave(null,e)};if(r()(this.tip).hasClass(C)){var h=a.default.getTransitionDurationFromElement(this.tip);r()(this.tip).one(a.default.TRANSITION_END,p).emulateTransitionEnd(h)}else p()}}},{key:"hide",value:function t(e){var n=this;var i=this.getTipElement();var o=r().Event(this.constructor.Event.HIDE);var s=function t(){if(n._hoverState!==E&&i.parentNode)i.parentNode.removeChild(i);n._cleanTipClass();n.element.removeAttribute("aria-describedby");r()(n.element).trigger(n.constructor.Event.HIDDEN);if(null!==n._popper)n._popper.destroy();if(e)e()};r()(this.element).trigger(o);if(o.isDefaultPrevented())return;r()(i).removeClass(j);
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)r()(document.body).children().off("mouseover",null,r().noop);this._activeTrigger[D]=false;this._activeTrigger[$]=false;this._activeTrigger[P]=false;if(r()(this.tip).hasClass(C)){var l=a.default.getTransitionDurationFromElement(i);r()(i).one(a.default.TRANSITION_END,s).emulateTransitionEnd(l)}else s();this._hoverState=""}},{key:"update",value:function t(){if(null!==this._popper)this._popper.scheduleUpdate()}
// Protected
},{key:"isWithContent",value:function t(){return Boolean(this.getTitle())}},{key:"addAttachmentClass",value:function t(e){r()(this.getTipElement()).addClass("".concat(k,"-").concat(e))}},{key:"getTipElement",value:function t(){this.tip=this.tip||r()(this.config.template)[0];return this.tip}},{key:"setContent",value:function t(){var e=this.getTipElement();this.setElementContent(r()(e.querySelectorAll(O)),this.getTitle());r()(e).removeClass("".concat(C," ").concat(j))}},{key:"setElementContent",value:function t(e,n){if("object"===d(n)&&(n.nodeType||n.jquery)){
// Content is a DOM node or a jQuery
if(this.config.html){if(!r()(n).parent().is(e))e.empty().append(n)}else e.text(r()(n).text());return}if(this.config.html){if(this.config.sanitize)n=(0,i.sanitizeHtml)(n,this.config.whiteList,this.config.sanitizeFn);e.html(n)}else e.text(n)}},{key:"getTitle",value:function t(){var e=this.element.getAttribute("data-original-title");if(!e)e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title;return e}
// Private
},{key:"_getPopperConfig",value:function t(e){var n=this;return c(c({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:A},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function t(e){if(e.originalPlacement!==e.placement)n._handlePopperPlacementChange(e)},onUpdate:function t(e){return n._handlePopperPlacementChange(e)}}),this.config.popperConfig)}},{key:"_getOffset",value:function t(){var e=this;var n={};if("function"==typeof this.config.offset)n.fn=function(t){t.offsets=c(c({},t.offsets),e.config.offset(t.offsets,e.element));return t};else n.offset=this.config.offset;return n}},{key:"_getContainer",value:function t(){if(false===this.config.container)return document.body;if(a.default.isElement(this.config.container))return r()(this.config.container);return r()(document).find(this.config.container)}},{key:"_getAttachment",value:function t(e){return L[e.toUpperCase()]}},{key:"_setListeners",value:function t(){var e=this;this.config.trigger.split(" ").forEach((function(t){if("click"===t)r()(e.element).on(e.constructor.Event.CLICK,e.config.selector,(function(t){return e.toggle(t)}));else if(t!==N){var n=t===P?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN;var i=t===P?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;r()(e.element).on(n,e.config.selector,(function(t){return e._enter(t)})).on(i,e.config.selector,(function(t){return e._leave(t)}))}}));this._hideModalHandler=function(){if(e.element)e.hide()};r()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler);if(this.config.selector)this.config=c(c({},this.config),{},{trigger:"manual",selector:""});else this._fixTitle()}},{key:"_fixTitle",value:function t(){var e=d(this.element.getAttribute("data-original-title"));if(this.element.getAttribute("title")||"string"!==e){this.element.setAttribute("data-original-title",this.element.getAttribute("title")||"");this.element.setAttribute("title","")}}},{key:"_enter",value:function t(e,n){var i=this.constructor.DATA_KEY;if(!(n=n||r()(e.currentTarget).data(i))){n=new this.constructor(e.currentTarget,this._getDelegateConfig());r()(e.currentTarget).data(i,n)}if(e)n._activeTrigger["focusin"===e.type?$:P]=true;if(r()(n.getTipElement()).hasClass(j)||n._hoverState===E){n._hoverState=E;return}clearTimeout(n._timeout);n._hoverState=E;if(!n.config.delay||!n.config.delay.show){n.show();return}n._timeout=setTimeout((function(){if(n._hoverState===E)n.show()}),n.config.delay.show)}},{key:"_leave",value:function t(e,n){var i=this.constructor.DATA_KEY;if(!(n=n||r()(e.currentTarget).data(i))){n=new this.constructor(e.currentTarget,this._getDelegateConfig());r()(e.currentTarget).data(i,n)}if(e)n._activeTrigger["focusout"===e.type?$:P]=false;if(n._isWithActiveTrigger())return;clearTimeout(n._timeout);n._hoverState=x;if(!n.config.delay||!n.config.delay.hide){n.hide();return}n._timeout=setTimeout((function(){if(n._hoverState===x)n.hide()}),n.config.delay.hide)}},{key:"_isWithActiveTrigger",value:function t(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return true;return false}},{key:"_getConfig",value:function t(e){var n=r()(this.element).data();Object.keys(n).forEach((function(t){if(-1!==S.indexOf(t))delete n[t]}));if("number"==typeof(e=c(c(c({},this.constructor.Default),n),"object"===d(e)&&e?e:{})).delay)e.delay={show:e.delay,hide:e.delay};if("number"==typeof e.title)e.title=e.title.toString();if("number"==typeof e.content)e.content=e.content.toString();a.default.typeCheckConfig(g,e,this.constructor.DefaultType);if(e.sanitize)e.template=(0,i.sanitizeHtml)(e.template,e.whiteList,e.sanitizeFn);return e}},{key:"_getDelegateConfig",value:function t(){var e={};if(this.config)for(var n in this.config)if(this.constructor.Default[n]!==this.config[n])e[n]=this.config[n];return e}},{key:"_cleanTipClass",value:function t(){var e=r()(this.getTipElement());var n=e.attr("class").match(T);if(null!==n&&n.length)e.removeClass(n.join(""))}},{key:"_handlePopperPlacementChange",value:function t(e){this.tip=e.instance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(e.placement))}},{key:"_fixTransition",value:function t(){var e=this.getTipElement();var n=this.config.animation;if(null!==e.getAttribute("x-placement"))return;r()(e).removeClass(C);this.config.animation=false;this.hide();this.show();this.config.animation=n}
// Static
}],[{key:"VERSION",get:function t(){return y}},{key:"Default",get:function t(){return I}},{key:"NAME",get:function t(){return g}},{key:"DATA_KEY",get:function t(){return b}},{key:"Event",get:function t(){return M}},{key:"EVENT_KEY",get:function t(){return w}},{key:"DefaultType",get:function t(){return z}},{key:"_jQueryInterface",value:function e(n){return this.each((function(){var e=r()(this);var i=e.data(b);var o="object"===d(n)&&n;if(!i&&/dispose|hide/.test(n))return;if(!i){i=new t(this,o);e.data(b,i)}if("string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'.concat(n,'"'));i[n]()}}))}}])}();
/**
 * jQuery
 */r().fn[g]=F._jQueryInterface;r().fn[g].Constructor=F;r().fn[g].noConflict=function(){r().fn[g]=_;return F._jQueryInterface};
/* harmony default export */e.default=F;
/***/},
/***/"./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/***/function(t,e,n){"use strict";n.r(e);
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
function l(t){if(null==t)return"".concat(t);return{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()}function c(){return{bindType:r,delegateType:r,handle:function t(e){if(o()(e.target).is(this))return e.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
return}}}function u(t){var e=this;var n=false;o()(this).one(f.TRANSITION_END,(function(){n=true}));setTimeout((function(){if(!n)f.triggerTransitionEnd(e)}),t);return this}function d(){o().fn.emulateTransitionEnd=u;o().event.special[f.TRANSITION_END]=c()}
/**
 * Public Util API
 */var f={TRANSITION_END:"bsTransitionEnd",getUID:function t(e){do{
// eslint-disable-next-line no-bitwise
e+=~~(Math.random()*s);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(e));return e},getSelectorFromElement:function t(e){var n=e.getAttribute("data-target");if(!n||"#"===n){var i=e.getAttribute("href");n=i&&"#"!==i?i.trim():""}try{return document.querySelector(n)?n:null}catch(t){return null}},getTransitionDurationFromElement:function t(e){if(!e)return 0;
// Get transition-duration of the element
var n=o()(e).css("transition-duration");var i=o()(e).css("transition-delay");var r=parseFloat(n);var s=parseFloat(i);
// Return 0 if element or transition duration is not found
if(!r&&!s)return 0;
// If multiple durations are defined, take the first
n=n.split(",")[0];i=i.split(",")[0];return(parseFloat(n)+parseFloat(i))*a},reflow:function t(e){return e.offsetHeight},triggerTransitionEnd:function t(e){o()(e).trigger(r)},supportsTransitionEnd:function t(){return Boolean(r)},isElement:function t(e){return(e[0]||e).nodeType},typeCheckConfig:function t(e,n,i){for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var r=i[o];var s=n[o];var a=s&&f.isElement(s)?"element":l(s);if(!new RegExp(r).test(a))throw new Error("".concat(e.toUpperCase(),": ")+'Option "'.concat(o,'" provided type "').concat(a,'" ')+'but expected type "'.concat(r,'".'))}},findShadowRoot:function t(e){if(!document.documentElement.attachShadow)return null;
// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){var n=e.getRootNode();return n instanceof ShadowRoot?n:null}if(e instanceof ShadowRoot)return e;
// when we don't find a shadow root
if(!e.parentNode)return null;return f.findShadowRoot(e.parentNode)},jQueryDetection:function t(){if(void 0===o())throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=o().fn.jquery.split(" ")[0].split(".");var n=1;var i=2;var r=9;var s=1;var a=4;if(e[0]<i&&e[1]<r||e[0]===n&&e[1]===r&&e[2]<s||e[0]>=a)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};f.jQueryDetection();d();
/* harmony default export */e.default=f;
/***/},
/***/"./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/function(t){"use strict";
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
function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}var n="object"===("undefined"==typeof Reflect?"undefined":e(Reflect))?Reflect:null;var i=n&&"function"==typeof n.apply?n.apply:function t(e,n,i){return Function.prototype.apply.call(e,n,i)};var o;if(n&&"function"==typeof n.ownKeys)o=n.ownKeys;else if(Object.getOwnPropertySymbols)o=function t(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))};else o=function t(e){return Object.getOwnPropertyNames(e)};function r(t){if(console&&console.warn)console.warn(t)}var s=Number.isNaN||function t(e){return e!=e};function a(){a.init.call(this)}t.exports=a;t.exports.once=b;
// Backwards-compat with node 0.10.x
a.EventEmitter=a;a.prototype._events=void 0;a.prototype._eventsCount=0;a.prototype._maxListeners=void 0;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var l=10;function c(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+e(t))}Object.defineProperty(a,"defaultMaxListeners",{enumerable:true,get:function t(){return l},set:function t(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}});a.init=function(){if(void 0===this._events||this._events===Object.getPrototypeOf(this)._events){this._events=Object.create(null);this._eventsCount=0}this._maxListeners=this._maxListeners||void 0};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
a.prototype.setMaxListeners=function t(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");this._maxListeners=e;return this};function u(t){if(void 0===t._maxListeners)return a.defaultMaxListeners;return t._maxListeners}a.prototype.getMaxListeners=function t(){return u(this)};a.prototype.emit=function t(e){var n=[];for(var o=1;o<arguments.length;o++)n.push(arguments[o]);var r="error"===e;var s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return false;
// If there is no 'error' event listener then throw.
if(r){var a;if(n.length>0)a=n[0];if(a instanceof Error)
// Note: The comments on the `throw` lines are intentional, they show
// up in Node's output if this results in an unhandled exception.
throw a;// Unhandled 'error' event
// At least give some kind of context to the user
var l=new Error("Unhandled error."+(a?" ("+a.message+")":""));l.context=a;throw l;// Unhandled 'error' event
}var c=s[e];if(void 0===c)return false;if("function"==typeof c)i(c,this,n);else{var u=c.length;var d=m(c,u);for(o=0;o<u;++o)i(d[o],this,n)}return true};function d(t,e,n,i){var o;var s;var a;c(n);if(void 0===(s=t._events)){s=t._events=Object.create(null);t._eventsCount=0}else{
// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(void 0!==s.newListener){t.emit("newListener",e,n.listener?n.listener:n);
// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
s=t._events}a=s[e]}if(void 0===a){
// Optimize the case of one listener. Don't need the extra array object.
a=s[e]=n;++t._eventsCount}else{if("function"==typeof a)
// Adding the second element, need to change to array.
a=s[e]=i?[n,a]:[a,n];
// If we've already got an array, just append.
else if(i)a.unshift(n);else a.push(n);
// Check for listener leak
if((o=u(t))>0&&a.length>o&&!a.warned){a.warned=true;
// No error code for this since it is a Warning
// eslint-disable-next-line no-restricted-syntax
var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning";l.emitter=t;l.type=e;l.count=a.length;r(l)}}return t}a.prototype.addListener=function t(e,n){return d(this,e,n,false)};a.prototype.on=a.prototype.addListener;a.prototype.prependListener=function t(e,n){return d(this,e,n,true)};function f(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;if(0===arguments.length)return this.listener.call(this.target);return this.listener.apply(this.target,arguments)}}function p(t,e,n){var i={fired:false,wrapFn:void 0,target:t,type:e,listener:n};var o=f.bind(i);o.listener=n;i.wrapFn=o;return o}a.prototype.once=function t(e,n){c(n);this.on(e,p(this,e,n));return this};a.prototype.prependOnceListener=function t(e,n){c(n);this.prependListener(e,p(this,e,n));return this};
// Emits a 'removeListener' event if and only if the listener was removed.
a.prototype.removeListener=function t(e,n){var i,o,r,s,a;c(n);if(void 0===(o=this._events))return this;if(void 0===(i=o[e]))return this;if(i===n||i.listener===n)if(0==--this._eventsCount)this._events=Object.create(null);else{delete o[e];if(o.removeListener)this.emit("removeListener",e,i.listener||n)}else if("function"!=typeof i){r=-1;for(s=i.length-1;s>=0;s--)if(i[s]===n||i[s].listener===n){a=i[s].listener;r=s;break}if(r<0)return this;if(0===r)i.shift();else g(i,r);if(1===i.length)o[e]=i[0];if(void 0!==o.removeListener)this.emit("removeListener",e,a||n)}return this};a.prototype.off=a.prototype.removeListener;a.prototype.removeAllListeners=function t(e){var n,i,o;if(void 0===(i=this._events))return this;
// not listening for removeListener, no need to emit
if(void 0===i.removeListener){if(0===arguments.length){this._events=Object.create(null);this._eventsCount=0}else if(void 0!==i[e])if(0==--this._eventsCount)this._events=Object.create(null);else delete i[e];return this}
// emit removeListener for all listeners on all events
if(0===arguments.length){var r=Object.keys(i);var s;for(o=0;o<r.length;++o){if("removeListener"===(s=r[o]))continue;this.removeAllListeners(s)}this.removeAllListeners("removeListener");this._events=Object.create(null);this._eventsCount=0;return this}if("function"==typeof(n=i[e]))this.removeListener(e,n);else if(void 0!==n)
// LIFO order
for(o=n.length-1;o>=0;o--)this.removeListener(e,n[o]);return this};function h(t,e,n){var i=t._events;if(void 0===i)return[];var o=i[e];if(void 0===o)return[];if("function"==typeof o)return n?[o.listener||o]:[o];return n?y(o):m(o,o.length)}a.prototype.listeners=function t(e){return h(this,e,true)};a.prototype.rawListeners=function t(e){return h(this,e,false)};a.listenerCount=function(t,e){if("function"==typeof t.listenerCount)return t.listenerCount(e);else return v.call(t,e)};a.prototype.listenerCount=v;function v(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;else if(void 0!==n)return n.length}return 0}a.prototype.eventNames=function t(){return this._eventsCount>0?o(this._events):[]};function m(t,e){var n=new Array(e);for(var i=0;i<e;++i)n[i]=t[i];return n}function g(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function y(t){var e=new Array(t.length);for(var n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function b(t,e){return new Promise((function(n,i){function o(n){t.removeListener(e,r);i(n)}function r(){if("function"==typeof t.removeListener)t.removeListener("error",o);n([].slice.call(arguments))}_(t,e,r,{once:true});if("error"!==e)w(t,o,{once:true})}))}function w(t,e,n){if("function"==typeof t.on)_(t,"error",e,n)}function _(t,n,i,o){if("function"==typeof t.on)if(o.once)t.once(n,i);else t.on(n,i);else if("function"==typeof t.addEventListener)
// EventTarget does not have `error` event semantics like Node
// EventEmitters, we do not listen for `error` events here.
t.addEventListener(n,(function e(r){
// IE does not have builtin `{ once: true }` support so we
// have to do it manually.
if(o.once)t.removeEventListener(n,e);i(r)}));else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+e(t))}
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
t=window.jQuery,e={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1},t.zoom=function(e,n,i,o){var r,s,a,l,c,u,d,f=t(e),p=f.css("position"),h=t(n);return e.style.position=/(absolute|fixed)/.test(p)?p:"relative",e.style.overflow="hidden",i.style.width=i.style.height="",t(i).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:i.width*o,height:i.height*o,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(e),{init:function t(){s=f.outerWidth(),r=f.outerHeight(),n===e?(l=s,a=r):(l=h.outerWidth(),a=h.outerHeight()),c=(i.width-s)/l,u=(i.height-r)/a,d=h.offset()},move:function t(e){var n=e.pageX-d.left,o=e.pageY-d.top;o=Math.max(Math.min(o,a),0),n=Math.max(Math.min(n,l),0),i.style.left=n*-c+"px",i.style.top=o*-u+"px"}}},t.fn.zoom=function(n){return this.each((function(){var i=t.extend({},e,n||{}),o=i.target&&t(i.target)[0]||this,r=this,s=t(r),a=document.createElement("img"),l=t(a),c="mousemove.zoom",u=!1,d=!1;if(!i.url){var f=r.querySelector("img");if(f&&(i.url=f.getAttribute("data-src")||f.currentSrc||f.src),!i.url)return}s.one("zoom.destroy",function(t,e){s.off(".zoom"),o.style.position=t,o.style.overflow=e,a.onload=null,l.remove()}.bind(this,o.style.position,o.style.overflow)),a.onload=function(){function e(e){f.init(),f.move(e),l.stop().fadeTo(t.support.opacity?i.duration:0,1,t.isFunction(i.onZoomIn)?i.onZoomIn.call(a):!1)}function n(){l.stop().fadeTo(i.duration,0,t.isFunction(i.onZoomOut)?i.onZoomOut.call(a):!1)}var f=t.zoom(o,r,a,i.magnify);"grab"===i.on?s.on("mousedown.zoom",(function(i){1===i.which&&(t(document).one("mouseup.zoom",(function(){n(),t(document).off(c,f.move)})),e(i),t(document).on(c,f.move),i.preventDefault())})):"click"===i.on?s.on("click.zoom",(function(i){return u?void 0:(u=!0,e(i),t(document).on(c,f.move),t(document).one("click.zoom",(function(){n(),u=!1,t(document).off(c,f.move)})),!1)})):"toggle"===i.on?s.on("click.zoom",(function(t){u?n():e(t),u=!u})):"mouseover"===i.on&&(f.init(),s.on("mouseenter.zoom",e).on("mouseleave.zoom",n).on(c,f.move)),i.touch&&s.on("touchstart.zoom",(function(t){t.preventDefault(),d?(d=!1,n()):(d=!0,e(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0]))})).on("touchmove.zoom",(function(t){t.preventDefault(),f.move(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0])})).on("touchend.zoom",(function(t){t.preventDefault(),d&&(d=!1,n())})),t.isFunction(i.callback)&&i.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=i.url}))},t.fn.zoom.defaults=e;
/***/var t,e},
/***/"./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/function(t,e,n){
/* module decorator */t=n.nmd(t);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}!function(e,n){var o=n(e,e.document,Date);e.lazySizes=o;if("object"==(false?0:i(t))&&t.exports)t.exports=o}("undefined"!=typeof window?window:{},(
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function t(e,n,i){
// Pass in the window Date function also for SSR because the Date class can be lost
"use strict";
/*jshint eqnull:true */var o,
/**
     * @type { LazySizesConfigPartial }
     */
r;!function(){var t;var n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",
//strictClass: 'lazystrict',
autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",
//preloadAfterLoad: false,
minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)if(!(t in r))r[t]=n[t]}();if(!n||!n.getElementsByClassName)return{init:function t(){},
/**
       * @type { LazySizesConfigPartial }
       */
cfg:r,
/**
       * @type { true }
       */
noSupport:true};var s=n.documentElement;var a=e.HTMLPictureElement;var l="addEventListener";var c="getAttribute";
/**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */var u=e[l].bind(e);var d=e.setTimeout;var f=e.requestAnimationFrame||d;var p=e.requestIdleCallback;var h=/^picture$/i;var v=["load","error","lazyincluded","_lazyloaded"];var m={};var g=Array.prototype.forEach;
/**
   * @param ele {Element}
   * @param cls {string}
   */var y=function t(e,n){if(!m[n])m[n]=new RegExp("(\\s|^)"+n+"(\\s|$)");return m[n].test(e[c]("class")||"")&&m[n]};
/**
   * @param ele {Element}
   * @param cls {string}
   */var b=function t(e,n){if(!y(e,n))e.setAttribute("class",(e[c]("class")||"").trim()+" "+n)};
/**
   * @param ele {Element}
   * @param cls {string}
   */var w=function t(e,n){var i;if(i=y(e,n))e.setAttribute("class",(e[c]("class")||"").replace(i," "))};var _=function t(e,n,i){var o=i?l:"removeEventListener";if(i)_(e,n);v.forEach((function(t){e[o](t,n)}))};
/**
   * @param elem { Element }
   * @param name { string }
   * @param detail { any }
   * @param noBubbles { boolean }
   * @param noCancelable { boolean }
   * @returns { CustomEvent }
   */var k=function t(e,i,r,s,a){var l=n.createEvent("Event");if(!r)r={};r.instance=o;l.initEvent(i,!s,!a);l.detail=r;e.dispatchEvent(l);return l};var T=function t(n,i){var o;if(!a&&(o=e.picturefill||r.pf)){if(i&&i.src&&!n[c]("srcset"))n.setAttribute("srcset",i.src);o({reevaluate:true,elements:[n]})}else if(i&&i.src)n.src=i.src};var S=function t(e,n){return(getComputedStyle(e,null)||{})[n]};
/**
   *
   * @param elem { Element }
   * @param parent { Element }
   * @param [width] {number}
   * @returns {number}
   */var C=function t(e,n,i){i=i||e.offsetWidth;for(;i<r.minSize&&n&&!e._lazysizesWidth;){i=n.offsetWidth;n=n.parentNode}return i};var j=function(){var t,e;var i=[];var o=[];var r=i;var s=function n(){var s=r;r=i.length?o:i;t=true;e=false;for(;s.length;)s.shift()();t=false};var a=function i(o,a){if(t&&!a)o.apply(this,arguments);else{r.push(o);if(!e){e=true;(n.hidden?d:f)(s)}}};a._lsFlush=s;return a}();var E=function t(e,n){return n?function(){j(e)}:function(){var t=this;var n=arguments;j((function(){e.apply(t,n)}))}};var x=function t(e){var n;var o=0;var s=r.throttleDelay;var a=r.ricTimeout;var l=function t(){n=false;o=i.now();e()};var c=p&&a>49?function(){p(l,{timeout:a});if(a!==r.ricTimeout)a=r.ricTimeout}:E((function(){d(l)}),true);return function(t){var e;if(t=true===t)a=33;if(n)return;n=true;if((e=s-(i.now()-o))<0)e=0;if(t||e<9)c();else d(c,e)}};
//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
var O=function t(e){var n,o;var r=99;var s=function t(){n=null;e()};var a=function t(){var e=i.now()-o;if(e<r)d(a,r-e);else(p||s)(s)};return function(){o=i.now();if(!n)n=d(a,r)}};var A=(W=/^img$/i,B=/^iframe$/i,U="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,Y=0,V=0,X=-1,K=function t(e){V--;if(!e||V<0||!e.target)V=0},G=function t(e){if(null==R)R="hidden"==S(n.body,"visibility");return R||!("hidden"==S(e.parentNode,"visibility")&&"hidden"==S(e,"visibility"))},Z=function t(e,i){var o;var r=e;var a=G(e);M-=i;q+=i;F-=i;H+=i;for(;a&&(r=r.offsetParent)&&r!=n.body&&r!=s;)if((a=(S(r,"opacity")||1)>0)&&"visible"!=S(r,"overflow")){o=r.getBoundingClientRect();a=H>o.left&&F<o.right&&q>o.top-1&&M<o.bottom+1}return a},tt=x(J=function t(){var e,i,a,l,u,d,f,p,h,v,m,g;var y=o.elements;if((N=r.loadMode)&&V<8&&(e=y.length)){i=0;X++;for(;i<e;i++){if(!y[i]||y[i]._lazyRace)continue;if(!U||o.prematureUnveil&&o.prematureUnveil(y[i])){at(y[i]);continue}if(!(p=y[i][c]("data-expand"))||!(d=1*p))d=Y;if(!v){v=!r.expand||r.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:r.expand;o._defEx=v;m=v*r.expFactor;g=r.hFac;R=null;if(Y<m&&V<1&&X>2&&N>2&&!n.hidden){Y=m;X=0}else if(N>1&&X>1&&V<6)Y=v;else Y=Q}if(h!==d){I=innerWidth+d*g;z=innerHeight+d;f=-1*d;h=d}a=y[i].getBoundingClientRect();if((q=a.bottom)>=f&&(M=a.top)<=z&&(H=a.right)>=f*g&&(F=a.left)<=I&&(q||H||F||M)&&(r.loadHidden||G(y[i]))&&($&&V<3&&!p&&(N<3||X<4)||Z(y[i],d))){at(y[i]);u=true;if(V>9)break}else if(!u&&$&&!l&&V<4&&X<4&&N>2&&(P[0]||r.preloadAfterLoad)&&(P[0]||!p&&(q||H||F||M||"auto"!=y[i][c](r.sizesAttr))))l=P[0]||y[i]}if(l&&!u)at(l)}}),nt=E(et=function t(e){var n=e.target;if(n._lazyCache){delete n._lazyCache;return}K(e);b(n,r.loadedClass);w(n,r.loadingClass);_(n,it);k(n,"lazyloaded")}),it=function t(e){nt({target:e.target})},ot=function t(e,n){var i=e.getAttribute("data-load-mode")||r.iframeLoadMode;
// loadMode can be also a string!
if(0==i)e.contentWindow.location.replace(n);else if(1==i)e.src=n},rt=function t(e){var n;var i=e[c](r.srcsetAttr);if(n=r.customMedia[e[c]("data-media")||e[c]("media")])e.setAttribute("media",n);if(i)e.setAttribute("srcset",i)},st=E((function(t,e,n,i,o){var s,a,l,u,f,p;if(!(f=k(t,"lazybeforeunveil",e)).defaultPrevented){if(i)if(n)b(t,r.autosizesClass);else t.setAttribute("sizes",i);a=t[c](r.srcsetAttr);s=t[c](r.srcAttr);if(o)u=(l=t.parentNode)&&h.test(l.nodeName||"");p=e.firesLoad||"src"in t&&(a||s||u);f={target:t};b(t,r.loadingClass);if(p){clearTimeout(D);D=d(K,2500);_(t,it,true)}if(u)g.call(l.getElementsByTagName("source"),rt);if(a)t.setAttribute("srcset",a);else if(s&&!u)if(B.test(t.nodeName))ot(t,s);else t.src=s;if(o&&(a||u))T(t,{src:s})}if(t._lazyRace)delete t._lazyRace;w(t,r.lazyClass);j((function(){
// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
var e=t.complete&&t.naturalWidth>1;if(!p||e){if(e)b(t,r.fastLoadedClass);et(f);t._lazyCache=true;d((function(){if("_lazyCache"in t)delete t._lazyCache}),9)}if("lazy"==t.loading)V--}),true)})),at=function t(e){if(e._lazyRace)return;var n;var i=W.test(e.nodeName);
//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
var o=i&&(e[c](r.sizesAttr)||e[c]("sizes"));var s="auto"==o;if((s||!$)&&i&&(e[c]("src")||e.srcset)&&!e.complete&&!y(e,r.errorClass)&&y(e,r.lazyClass))return;n=k(e,"lazyunveilread").detail;if(s)dt.updateElem(e,true,e.offsetWidth);e._lazyRace=true;V++;st(e,n,s,o,i)},lt=O((function(){r.loadMode=3;tt()})),ut=function t(){if($)return;if(i.now()-L<999){d(ut,999);return}$=true;r.loadMode=3;tt();u("scroll",ct,true)},{_:function t(){L=i.now();o.elements=n.getElementsByClassName(r.lazyClass);P=n.getElementsByClassName(r.lazyClass+" "+r.preloadClass);u("scroll",tt,true);u("resize",tt,true);u("pageshow",(function(t){if(t.persisted){var e=n.querySelectorAll("."+r.loadingClass);if(e.length&&e.forEach)f((function(){e.forEach((function(t){if(t.complete)at(t)}))}))}}));if(e.MutationObserver)new MutationObserver(tt).observe(s,{childList:true,subtree:true,attributes:true});else{s[l]("DOMNodeInserted",tt,true);s[l]("DOMAttrModified",tt,true);setInterval(tt,999)}u("hashchange",tt,true);
//, 'fullscreenchange'
["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){n[l](t,tt,true)}));if(/d$|^c/.test(n.readyState))ut();else{u("load",ut);n[l]("DOMContentLoaded",tt);d(ut,2e4)}if(o.elements.length){J();j._lsFlush()}else tt()},checkElems:tt,unveil:at,_aLSL:ct=function t(){if(3==r.loadMode)r.loadMode=2;lt()}});var P,$,D,N,L,I,z,M,F,H,q,R,W,B,U,Q,Y,V,X,K,G,Z,J,tt,et,nt,it,ot,rt,st,at,lt,ct,ut;var dt=(pt=E((function(t,e,n,i){var o,r,s;t._lazysizesWidth=i;i+="px";t.setAttribute("sizes",i);if(h.test(e.nodeName||""))for(r=0,s=(o=e.getElementsByTagName("source")).length;r<s;r++)o[r].setAttribute("sizes",i);if(!n.detail.dataAttr)T(t,n.detail)})),ht=function t(e,n,i){var o;var r=e.parentNode;if(r){i=C(e,r,i);if(!(o=k(e,"lazybeforesizes",{width:i,dataAttr:!!n})).defaultPrevented)if((i=o.detail.width)&&i!==e._lazysizesWidth)pt(e,r,o,i)}},{_:function t(){ft=n.getElementsByClassName(r.autosizesClass);u("resize",vt)},checkElems:vt=O((function t(){var e;var n=ft.length;if(n){e=0;for(;e<n;e++)ht(ft[e])}})),updateElem:ht});var ft,pt,ht,vt;var mt=function t(){if(!mt.i&&n.getElementsByClassName){mt.i=true;dt._();A._()}};d((function(){if(r.init)mt()}));return o={
/**
     * @type { LazySizesConfigPartial }
     */
cfg:r,autoSizer:dt,loader:A,init:mt,uP:T,aC:b,rC:w,hC:y,fire:k,gW:C,rAF:j}}));
/***/},
/***/"./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/function(t,e,n){"use strict";n.r(e);
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
 */var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator;var o=function(){var t=["Edge","Trident","Firefox"];for(var e=0;e<t.length;e+=1)if(i&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();function r(t){var e=false;return function(){if(e)return;e=true;window.Promise.resolve().then((function(){e=false;t()}))}}function s(t){var e=false;return function(){if(!e){e=true;setTimeout((function(){e=false;t()}),o)}}}
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
 */function l(t){return t&&"[object Function]"==={}.toString.call(t)}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function c(t,e){if(1!==t.nodeType)return[];
// NOTE: 1 DOM access here
var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function u(t){if("HTML"===t.nodeName)return t;return t.parentNode||t.host}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function d(t){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}
// Firefox want us to check `-x` and `-y` variations as well
var e=c(t),n=e.overflow,i=e.overflowX,o=e.overflowY;if(/(auto|scroll|overlay)/.test(n+o+i))return t;return d(u(t))}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */function f(t){return t&&t.referenceNode?t.referenceNode:t}var p=i&&!!(window.MSInputMethodContext&&document.documentMode);var h=i&&/MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function v(t){if(11===t)return p;if(10===t)return h;return p||h}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function m(t){if(!t)return document.documentElement;var e=v(10)?document.body:null;
// NOTE: 1 DOM access here
var n=t.offsetParent||null;
// Skip hidden elements which don't have an offsetParent
for(;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;if(!i||"BODY"===i||"HTML"===i)return t?t.ownerDocument.documentElement:document.documentElement;
// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===c(n,"position"))return m(n);return n}function g(t){var e=t.nodeName;if("BODY"===e)return false;return"HTML"===e||m(t.firstElementChild)===t}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function y(t){if(null!==t.parentNode)return y(t.parentNode);return t}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function b(t,e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING;var i=n?t:e;var o=n?e:t;
// Get common ancestor container
var r=document.createRange();r.setStart(i,0);r.setEnd(o,0);var s=r.commonAncestorContainer;
// Both nodes are inside #document
if(t!==s&&e!==s||i.contains(o)){if(g(s))return s;return m(s)}
// one of the nodes is inside shadowDOM, find which one
var a=y(t);if(a.host)return b(a.host,e);else return b(t,y(e).host)}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function w(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft";var n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function _(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var i=w(e,"top");var o=w(e,"left");var r=n?-1:1;t.top+=i*r;t.bottom+=i*r;t.left+=o*r;t.right+=o*r;return t}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function k(t,e){var n="x"===e?"Left":"Top";var i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function T(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],v(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function S(t){var e=t.body;var n=t.documentElement;var i=v(10)&&getComputedStyle(n);return{height:T("Height",e,n,i),width:T("Width",e,n,i)}}var C=function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var j=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}return function(e,n,i){if(n)t(e.prototype,n);if(i)t(e,i);return e}}();var E=function t(e,n,i){if(n in e)Object.defineProperty(e,n,{value:i,enumerable:true,configurable:true,writable:true});else e[n]=i;return e};var x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))t[i]=n[i]}return t};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function O(t){return x({},t,{right:t.left+t.width,bottom:t.top+t.height})}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function A(t){var e={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(v(10)){e=t.getBoundingClientRect();var n=w(t,"top");var i=w(t,"left");e.top+=n;e.left+=i;e.bottom+=n;e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top};
// subtract scrollbar size from sizes
var r="HTML"===t.nodeName?S(t.ownerDocument):{};var s=r.width||t.clientWidth||o.width;var a=r.height||t.clientHeight||o.height;var l=t.offsetWidth-s;var u=t.offsetHeight-a;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(l||u){var d=c(t);l-=k(d,"x");u-=k(d,"y");o.width-=l;o.height-=u}return O(o)}function P(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var i=v(10);var o="HTML"===e.nodeName;var r=A(t);var s=A(e);var a=d(t);var l=c(e);var u=parseFloat(l.borderTopWidth);var f=parseFloat(l.borderLeftWidth);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(n&&o){s.top=Math.max(s.top,0);s.left=Math.max(s.left,0)}var p=O({top:r.top-s.top-u,left:r.left-s.left-f,width:r.width,height:r.height});p.marginTop=0;p.marginLeft=0;
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!i&&o){var h=parseFloat(l.marginTop);var m=parseFloat(l.marginLeft);p.top-=u-h;p.bottom-=u-h;p.left-=f-m;p.right-=f-m;
// Attach marginTop and marginLeft because in some circumstances we may need them
p.marginTop=h;p.marginLeft=m}if(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)p=_(p,e);return p}function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var n=t.ownerDocument.documentElement;var i=P(t,n);var o=Math.max(n.clientWidth,window.innerWidth||0);var r=Math.max(n.clientHeight,window.innerHeight||0);var s=!e?w(n):0;var a=!e?w(n,"left"):0;return O({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function D(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return false;if("fixed"===c(t,"position"))return true;var n=u(t);if(!n)return false;return D(n)}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function N(t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!t||!t.parentElement||v())return document.documentElement;var e=t.parentElement;for(;e&&"none"===c(e,"transform");)e=e.parentElement;return e||document.documentElement}
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
 */function L(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:false;
// NOTE: 1 DOM access here
var r={top:0,left:0};var s=o?N(t):b(t,f(e));
// Handle viewport case
if("viewport"===i)r=$(s,o);else{
// Handle other cases based on DOM element used as boundaries
var a=void 0;if("scrollParent"===i){if("BODY"===(a=d(u(e))).nodeName)a=t.ownerDocument.documentElement}else if("window"===i)a=t.ownerDocument.documentElement;else a=i;var l=P(a,s,o);
// In case of HTML, we need a different computation
if("HTML"===a.nodeName&&!D(s)){var c=S(t.ownerDocument),p=c.height,h=c.width;r.top+=l.top-l.marginTop;r.bottom=p+l.top;r.left+=l.left-l.marginLeft;r.right=h+l.left}else
// for all the other DOM elements, this one is good
r=l}
// Add paddings
var v="number"==typeof(n=n||0);r.left+=v?n:n.left||0;r.top+=v?n:n.top||0;r.right-=v?n:n.right||0;r.bottom-=v?n:n.bottom||0;return r}function I(t){return t.width*t.height}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function z(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=L(n,i,r,o);var a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}};var l=Object.keys(a).map((function(t){return x({key:t},a[t],{area:I(a[t])})})).sort((function(t,e){return e.area-t.area}));var c=l.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}));var u=c.length>0?c[0].key:l[0].key;var d=t.split("-")[1];return u+(d?"-"+d:"")}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function M(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return P(n,i?N(e):b(e,f(n)),i)}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function F(t){var e=t.ownerDocument.defaultView.getComputedStyle(t);var n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0);var i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function H(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function q(t,e,n){n=n.split("-")[0];
// Get popper node sizes
var i=F(t);
// Add position, width and height to our offsets object
var o={width:i.width,height:i.height};
// depending by the popper placement we have to compute its offsets slightly differently
var r=-1!==["right","left"].indexOf(n);var s=r?"top":"left";var a=r?"left":"top";var l=r?"height":"width";var c=!r?"height":"width";o[s]=e[s]+e[l]/2-i[l]/2;if(n===a)o[a]=e[a]-i[c];else o[a]=e[H(a)];return o}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function R(t,e){
// use native find if supported
if(Array.prototype.find)return t.find(e);
// use `filter` to obtain the same behavior of `find`
return t.filter(e)[0]}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function W(t,e,n){
// use native findIndex if supported
if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));
// use `find` + `indexOf` if `findIndex` isn't supported
var i=R(t,(function(t){return t[e]===n}));return t.indexOf(i)}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function B(t,e,n){(void 0===n?t:t.slice(0,W(t,"name",n))).forEach((function(t){if(t.function)
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;// eslint-disable-line dot-notation
if(t.enabled&&l(n)){
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
e.offsets.popper=O(e.offsets.popper);e.offsets.reference=O(e.offsets.reference);e=n(e,t)}}));return e}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function U(){
// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed)return;var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};
// compute reference element offsets
t.offsets.reference=M(this.state,this.popper,this.reference,this.options.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
t.placement=z(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);
// store the computed placement inside `originalPlacement`
t.originalPlacement=t.placement;t.positionFixed=this.options.positionFixed;
// compute the popper offsets
t.offsets.popper=q(this.popper,t.offsets.reference,t.placement);t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";
// run the modifiers
t=B(this.modifiers,t);
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(t)}else this.options.onUpdate(t)}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function Q(t,e){return t.some((function(t){var n=t.name;return t.enabled&&n===e}))}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function Y(t){var e=[false,"ms","Webkit","Moz","O"];var n=t.charAt(0).toUpperCase()+t.slice(1);for(var i=0;i<e.length;i++){var o=e[i];var r=o?""+o+n:t;if(void 0!==document.body.style[r])return r}return null}
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
 */function X(t){var e=t.ownerDocument;return e?e.defaultView:window}function K(t,e,n,i){var o="BODY"===t.nodeName;var r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,n,{passive:true});if(!o)K(d(r.parentNode),e,n,i);i.push(r)}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function G(t,e,n,i){
// Resize event listener on window
n.updateBound=i;X(t).addEventListener("resize",n.updateBound,{passive:true});
// Scroll event listener on scroll parents
var o=d(t);K(o,"scroll",n.updateBound,n.scrollParents);n.scrollElement=o;n.eventsEnabled=true;return n}
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
 */function J(t,e){
// Remove resize event listener on window
X(t).removeEventListener("resize",e.updateBound);
// Remove scroll event listener on scroll parents
e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)}));
// Reset state
e.updateBound=null;e.scrollParents=[];e.scrollElement=null;e.eventsEnabled=false;return e}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function tt(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=J(this.reference,this.state)}}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function et(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function nt(t,e){Object.keys(e).forEach((function(n){var i="";
// add unit if the value is numeric and is one of the following
if(-1!==["width","height","top","right","bottom","left"].indexOf(n)&&et(e[n]))i="px";t.style[n]=e[n]+i}))}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function it(t,e){Object.keys(e).forEach((function(n){if(false!==e[n])t.setAttribute(n,e[n]);else t.removeAttribute(n)}))}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function ot(t){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
nt(t.instance.popper,t.styles);
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
it(t.instance.popper,t.attributes);
// if arrowElement is defined and arrowStyles has some properties
if(t.arrowElement&&Object.keys(t.arrowStyles).length)nt(t.arrowElement,t.arrowStyles);return t}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function rt(t,e,n,i,o){
// compute reference element offsets
var r=M(o,e,t,n.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var s=z(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);e.setAttribute("x-placement",s);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
nt(e,{position:n.positionFixed?"fixed":"absolute"});return n}
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
 */function st(t,e){var n=t.offsets,i=n.popper,o=n.reference;var r=Math.round,s=Math.floor;var a=function t(e){return e};var l=r(o.width);var c=r(i.width);var u=-1!==["left","right"].indexOf(t.placement);var d=-1!==t.placement.indexOf("-");var f=!e?a:u||d||l%2==c%2?r:s;var p=!e?a:r;return{left:f(l%2==1&&c%2==1&&!d&&e?i.left-1:i.left),top:p(i.top),bottom:p(i.bottom),right:f(i.right)}}var at=i&&/Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function lt(t,e){var n=e.x,i=e.y;var o=t.offsets.popper;
// Remove this legacy support in Popper.js v2
var r=R(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;if(void 0!==r)console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:e.gpuAcceleration;var a=m(t.instance.popper);var l=A(a);
// Styles
var c={position:o.position};var u=st(t,window.devicePixelRatio<2||!at);var d="bottom"===n?"top":"bottom";var f="right"===i?"left":"right";
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
var b={"x-placement":t.placement};
// Update `data` attributes, styles and arrowStyles
t.attributes=x({},b,t.attributes);t.styles=x({},c,t.styles);t.arrowStyles=x({},t.offsets.arrow,t.arrowStyles);return t}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function ct(t,e,n){var i=R(t,(function(t){return t.name===e}));var o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`";var s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ut(t,e){var n;
// arrow depends on keepTogether in order to work
if(!ct(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof i){
// if arrowElement is not found, don't run the modifier
if(!(i=t.instance.popper.querySelector(i)))return t}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!t.instance.popper.contains(i)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return t}var o=t.placement.split("-")[0];var r=t.offsets,s=r.popper,a=r.reference;var l=-1!==["left","right"].indexOf(o);var u=l?"height":"width";var d=l?"Top":"Left";var f=d.toLowerCase();var p=l?"left":"top";var h=l?"bottom":"right";var v=F(i)[u];

// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction

// top/left side
if(a[h]-v<s[f])t.offsets.popper[f]-=s[f]-(a[h]-v);
// bottom/right side
if(a[f]+v>s[h])t.offsets.popper[f]+=a[f]+v-s[h];t.offsets.popper=O(t.offsets.popper);
// compute center of the popper
var m=a[f]+a[u]/2-v/2;
// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var g=c(t.instance.popper);var y=parseFloat(g["margin"+d]);var b=parseFloat(g["border"+d+"Width"]);var w=m-t.offsets.popper[f]-y-b;
// prevent arrowElement from being placed not contiguously to its popper
w=Math.max(Math.min(s[u]-v,w),0);t.arrowElement=i;t.offsets.arrow=(E(n={},f,Math.round(w)),E(n,p,""),n);return t}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function dt(t){if("end"===t)return"start";else if("start"===t)return"end";return t}
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
 */var ft=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];
// Get rid of `auto` `auto-start` and `auto-end`
var pt=ft.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var n=pt.indexOf(t);var i=pt.slice(n+1).concat(pt.slice(0,n));return e?i.reverse():i}var vt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function mt(t,e){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(Q(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return t;var n=L(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed);var i=t.placement.split("-")[0];var o=H(i);var r=t.placement.split("-")[1]||"";var s=[];switch(e.behavior){case vt.FLIP:s=[i,o];break;case vt.CLOCKWISE:s=ht(i);break;case vt.COUNTERCLOCKWISE:s=ht(i,true);break;default:s=e.behavior}s.forEach((function(a,l){if(i!==a||s.length===l+1)return t;i=t.placement.split("-")[0];o=H(i);var c=t.offsets.popper;var u=t.offsets.reference;
// using floor because the reference offsets may contain decimals we are not going to consider here
var d=Math.floor;var f="left"===i&&d(c.right)>d(u.left)||"right"===i&&d(c.left)<d(u.right)||"top"===i&&d(c.bottom)>d(u.top)||"bottom"===i&&d(c.top)<d(u.bottom);var p=d(c.left)<d(n.left);var h=d(c.right)>d(n.right);var v=d(c.top)<d(n.top);var m=d(c.bottom)>d(n.bottom);var g="left"===i&&p||"right"===i&&h||"top"===i&&v||"bottom"===i&&m;
// flip the variation if required
var y=-1!==["top","bottom"].indexOf(i);
// flips variation if reference element overflows boundaries
var b=!!e.flipVariations&&(y&&"start"===r&&p||y&&"end"===r&&h||!y&&"start"===r&&v||!y&&"end"===r&&m);
// flips variation if popper content overflows boundaries
var w=!!e.flipVariationsByContent&&(y&&"start"===r&&h||y&&"end"===r&&p||!y&&"start"===r&&m||!y&&"end"===r&&v);var _=b||w;if(f||g||_){
// this boolean to detect any flip loop
t.flipped=true;if(f||g)i=s[l+1];if(_)r=dt(r);t.placement=i+(r?"-"+r:"");
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
t.offsets.popper=x({},t.offsets.popper,q(t.instance.popper,t.offsets.reference,t.placement));t=B(t.instance.modifiers,t,"flip")}}));return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function gt(t){var e=t.offsets,n=e.popper,i=e.reference;var o=t.placement.split("-")[0];var r=Math.floor;var s=-1!==["top","bottom"].indexOf(o);var a=s?"right":"bottom";var l=s?"left":"top";var c=s?"width":"height";if(n[a]<r(i[l]))t.offsets.popper[l]=r(i[l])-n[c];if(n[l]>r(i[a]))t.offsets.popper[l]=r(i[a]);return t}
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
 */function yt(t,e,n,i){
// separate value from unit
var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var r=+o[1];var s=o[2];
// If it's not a number it's an operator, I guess
if(!r)return t;if(0===s.indexOf("%")){var a=void 0;if("%p"===s)a=n;else a=i;return O(a)[e]/100*r}else if("vh"===s||"vw"===s){
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
 */function bt(t,e,n,i){var o=[0,0];
// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var r=-1!==["right","left"].indexOf(i);
// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var s=t.split(/(\+|\-)/).map((function(t){return t.trim()}));
// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var a=s.indexOf(R(s,(function(t){return-1!==t.search(/,|\s/)})));if(s[a]&&-1===s[a].indexOf(","))console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/;var c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
(c=c.map((function(t,i){
// Most of the units rely on the orientation of the popper
var o=(1===i?!r:r)?"height":"width";var s=false;return t.reduce((function(t,e){if(""===t[t.length-1]&&-1!==["+","-"].indexOf(e)){t[t.length-1]=e;s=true;return t}else if(s){t[t.length-1]+=e;s=false;return t}else return t.concat(e)}),[]).map((function(t){return yt(t,o,e,n)}))}))).forEach((function(t,e){t.forEach((function(n,i){if(et(n))o[e]+=n*("-"===t[i-1]?-1:1)}))}));return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function wt(t,e){var n=e.offset;var i=t.placement,o=t.offsets,r=o.popper,s=o.reference;var a=i.split("-")[0];var l=void 0;if(et(+n))l=[+n,0];else l=bt(n,r,s,a);if("left"===a){r.top+=l[0];r.left-=l[1]}else if("right"===a){r.top+=l[0];r.left+=l[1]}else if("top"===a){r.left+=l[0];r.top-=l[1]}else if("bottom"===a){r.left+=l[0];r.top+=l[1]}t.popper=r;return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function _t(t,e){var n=e.boundariesElement||m(t.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(t.instance.reference===n)n=m(n);
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var i=Y("transform");var o=t.instance.popper.style;// assignment to help minification
var r=o.top,s=o.left,a=o[i];o.top="";o.left="";o[i]="";var l=L(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
o.top=r;o.left=s;o[i]=a;e.boundaries=l;var c=e.priority;var u=t.offsets.popper;var d={primary:function t(n){var i=u[n];if(u[n]<l[n]&&!e.escapeWithReference)i=Math.max(u[n],l[n]);return E({},n,i)},secondary:function t(n){var i="right"===n?"left":"top";var o=u[i];if(u[n]>l[n]&&!e.escapeWithReference)o=Math.min(u[i],l[n]-("right"===n?u.width:u.height));return E({},i,o)}};c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";u=x({},u,d[e](t))}));t.offsets.popper=u;return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function kt(t){var e=t.placement;var n=e.split("-")[0];var i=e.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(i){var o=t.offsets,r=o.reference,s=o.popper;var a=-1!==["bottom","top"].indexOf(n);var l=a?"left":"top";var c=a?"width":"height";var u={start:E({},l,r[l]),end:E({},l,r[l]+r[c]-s[c])};t.offsets.popper=x({},s,u[i])}return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function Tt(t){if(!ct(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference;var n=R(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(true===t.hide)return t;t.hide=true;t.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(false===t.hide)return t;t.hide=false;t.attributes["x-out-of-boundaries"]=false}return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function St(t){var e=t.placement;var n=e.split("-")[0];var i=t.offsets,o=i.popper,r=i.reference;var s=-1!==["left","right"].indexOf(n);var a=-1===["top","left"].indexOf(n);o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0);t.placement=H(e);t.offsets.popper=O(o);return t}
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
var Ct={
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
onCreate:function t(){},
/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
onUpdate:function t(){},
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
fn:kt},
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
fn:wt,
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
fn:_t,
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
fn:gt},
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
fn:ut,
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
fn:mt,
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
fn:St},
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
fn:Tt},
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
fn:lt,
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
fn:ot,
/** @prop {Function} */
onLoad:rt,
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
var jt=function(){
/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function t(e,n){var i=this;var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};C(this,t);this.scheduleUpdate=function(){return requestAnimationFrame(i.update)};
// make update() debounced, so that it only runs at most once-per-tick
this.update=a(this.update.bind(this));
// with {} we create a new object with the options inside it
this.options=x({},t.Defaults,o);
// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};
// get reference and popper elements (allow jQuery wrappers)
this.reference=e&&e.jquery?e[0]:e;this.popper=n&&n.jquery?n[0]:n;
// Deep merge modifiers options
this.options.modifiers={};Object.keys(x({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=x({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}));
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map((function(t){return x({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order}));
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach((function(t){if(t.enabled&&l(t.onLoad))t.onLoad(i.reference,i.popper,i.options,t,i.state)}));
// fire the first update to position the popper in the right place
this.update();var r=this.options.eventsEnabled;if(r)
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();this.state.eventsEnabled=r}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
j(t,[{key:"update",value:function t(){return U.call(this)}},{key:"destroy",value:function t(){return V.call(this)}},{key:"enableEventListeners",value:function t(){return Z.call(this)}},{key:"disableEventListeners",value:function t(){return tt.call(this)}
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
     */}]);return t}();
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
 */jt.Utils=("undefined"!=typeof window?window:n.g).PopperUtils;jt.placements=ft;jt.Defaults=Ct;
/* harmony default export */e.default=jt;
/***/},
/***/jquery:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/function(t){"use strict";t.exports=jQuery;
/***/},
/***/prestashop:
/*!*****************************!*\
  !*** external "prestashop" ***!
  \*****************************/
/***/function(t){"use strict";t.exports=prestashop;
/***/}
/******/};
/************************************************************************/
/******/ // The module cache
/******/var e={};
/******/
/******/ // The require function
/******/function n(i){
/******/ // Check if module is in cache
/******/var o=e[i];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=e[i]={
/******/id:i,
/******/loaded:false,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/t[i](r,r.exports,n);
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
/******/n.n=function(t){
/******/var e=t&&t.__esModule?
/******/function(){return t.default}:
/******/function(){return t};
/******/n.d(e,{a:e});
/******/return e;
/******/};
/******/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/n.d=function(t,e){
/******/for(var i in e)
/******/if(n.o(e,i)&&!n.o(t,i))
/******/Object.defineProperty(t,i,{enumerable:true,get:e[i]});
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
/******/}catch(t){
/******/if("object"==typeof window)return window;
/******/}
/******/}();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/
/******/n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}
/******/;
/******/
/******/ /* webpack/runtime/make namespace object */
/******/
/******/ // define __esModule on exports
/******/n.r=function(t){
/******/if("undefined"!=typeof Symbol&&Symbol.toStringTag)
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});
/******/
/******/Object.defineProperty(t,"__esModule",{value:true});
/******/};
/******/
/******/ /* webpack/runtime/node module decorator */
/******/
/******/n.nmd=function(t){
/******/t.paths=[];
/******/if(!t.children)t.children=[];
/******/return t;
/******/};
/******/
/************************************************************************/var i={};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function(){"use strict";var t={};
/*!*********************!*\
  !*** ./js/theme.js ***!
  \*********************/n.r(t);
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
/* harmony import */var e=n(/*! ./components/slick */"./js/components/slick.js");
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
for(var c in l().prototype)s()[c]=l().prototype[c];$(document).ready((function(){var t=new i.default;var n=new e.default;var r=$("#_desktop_top_menu #top-menu");var s=new o.default(r);t.init();n.init();s.init();
//display input file content in custom file input BS
$(".custom-file-input").on("change",(function(){var t=$(this).val().split("\\").pop();$(this).next(".custom-file-label").addClass("selected").html(t)}))}));document.addEventListener("lazyloaded",(function(t){$(t.target).parent().addClass("rc--lazyload")}));$(document).ready((function(){console.log("ready");
/* SCROLL TO ANCHOR */if(window.location.hash&&"/"!=window.location.hash[1])i(window.location.hash);t();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname")){e();n()}$(window).resize((function(){t();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname"))n()}));function t(){$(".fullwidth").each((function(){var t=$(this);var e=$("body").width(),n=e/2;
//console.log(fullwidth);
//console.log(content);
t.css({left:"50%",position:"relative",width:e,"margin-left":-n})}))}function e(){console.log("sticky");var t=$("#header");var e="sticky";var n="unsticky";var i=$("#header").height();$(window).scroll((function(){if($(this).scrollTop()>0){t.addClass(e).removeClass(n);$("body").css("padding-top",i)}else{t.addClass(n).removeClass(e);$("body").css("padding-top",0)}}))}function n(){$(".modal-dialog__offcanvas #adtm_menu").addClass("adtm_menu_toggle_open");
//$('#adtm_menu').toggleClass('adtm_menu_toggle_open');
//$('#adtm_menu .advtm_menu_toggle').toggleClass('adtm_menu_mobile_mode');
}function i(t){console.log(t);var e=$(t);var n=e.offset().top-$("#header").height()-40;
//var scrollTop = target.offset().top - $('#header').height();
console.log("header height: "+$("#header").height());console.log("scrollTop : "+n);$("html, body").animate({scrollTop:n},1e3,(function(){
// Callback after animation
// Must change focus!
var t=$(e);t.focus();if(t.is(":focus"))
// Checking if the target was focused
return false;else{t.attr("tabindex","-1");// Adding tabindex for elements not focusable
t.focus();// Set focus again
}}))}
// Fonction pour scroller les liens vers ancres
$('a[href*="#"]').not('[href="#"]').not('[href*="#footer"]').not(".footer__title--mobile").not(".noscroll")
/*
   .not('[href="#0"]')
   .not('[href="#bt_tabs-0"]')
   .not('[href="#bt_tabs-1"]')*/.click((function(t){
// On-page links
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
// Figure out element to scroll to
if($(this).hasClass("nav-link"))var e=$(this).parent().parent();else{e=(e=$(this.hash)).length?e:$("[name="+this.hash.slice(1)+"]")}console.log("target");console.log(e);console.log(e.offset().top);console.log("header height");console.log($("#header").height());
// Does a scroll target exist?
if(e.length){
// Only prevent default if animation is actually gonna happen
//event.preventDefault();
var n=e.offset().top-$("#header").height()-40;console.log("header height: "+$("#header").height());console.log("scrollTop : "+n);$("html, body").animate({scrollTop:n},1e3,(function(){
// Callback after animation
// Must change focus!
var t=$(e);t.focus();if(t.is(":focus"))
// Checking if the target was focused
return false;else{t.attr("tabindex","-1");// Adding tabindex for elements not focusable
t.focus();// Set focus again
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