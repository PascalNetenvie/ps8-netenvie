/*! For license information please see theme.js.LICENSE.txt */
/******/!function(){// webpackBootstrap
/******/var t={
/***/"./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);s().cart=s().cart||{};s().cart.active_inputs=null;var a='input[name="product-quantity-spin"]';var l=false;var c=false;var d="";
/**
 * Attach Bootstrap TouchSpin event handlers
 */function u(){o().each(o()(a),(function(t,e){o()(e).TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(o()(e).attr("min"),10),max:1e6})}));p.switchErrorStat()}o()(document).ready((()=>{var t=".js-cart-line-product-quantity";var e=[];s().on("updateCart",(()=>{o()(".quickview").modal("hide");o()(".js-cart__card-body").addClass("is--loading")}));s().on("updatedCart",(()=>{u();o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));s().on("handleError",(function(t){o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));u();var i=o()("body");function n(t){return"on.startupspin"===t||"on.startdownspin"===t}function r(t){return"on.startupspin"===t}function l(e){var i=e.parents(".bootstrap-touchspin").find(t);if(i.is(":focus"))return null;return i}function c(t){var e=t.split("-");var i;var n;var o="";for(i=0;i<e.length;i++){n=e[i];if(0!==i)n=n.substring(0,1).toUpperCase()+n.substring(1);o+=n}return o}function d(t,e){if(!n(e))return{url:t.attr("href"),type:c(t.data("link-action"))};var i=l(t);if(!i)return;var o={};if(r(e))o={url:i.data("up-url"),type:"increaseProductQuantity"};else o={url:i.data("down-url"),type:"decreaseProductQuantity"};return o}var f=()=>{for(;e.length>0;)e.pop().abort()};var h=t=>o()(t.parents(".bootstrap-touchspin").find("input"));var v=t=>{t.preventDefault();var i=o()(t.currentTarget);var n=t.currentTarget.dataset;var r=d(i,t.namespace);var a={ajax:"1",action:"update"};if(void 0===r)return;f();o().ajax({url:r.url,method:"POST",data:a,dataType:"json",beforeSend:function t(i){e.push(i)}}).then((function(t){p.checkUpdateOpertation(t);h(i).val(t.quantity);
// Refresh cart preview
s().emit("updateCart",{reason:n,resp:t})})).fail((t=>{s().emit("handleError",{eventType:"updateProductInCart",resp:t,cartAction:r.type})}))};i.on("click",'[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',v);i.on("touchspin.on.startdownspin",a,v);i.on("touchspin.on.startupspin",a,v);function m(t,i,n){f();return o().ajax({url:t,method:"POST",data:i,dataType:"json",beforeSend:function t(i){e.push(i)}}).then((function(t){p.checkUpdateOpertation(t);n.val(t.quantity);var e;if(n&&n.dataset)e=n.dataset;else e=t;
// Refresh cart preview
s().emit("updateCart",{reason:e,resp:t})})).fail((t=>{s().emit("handleError",{eventType:"updateProductQuantityInCart",resp:t})}))}function g(t){return{ajax:"1",qty:Math.abs(t),action:"update",op:b(t)}}function b(t){return t>0?"up":"down"}function y(t){var e=o()(t.currentTarget);var i=e.data("update-url");var n=e.attr("value");
// There should be a valid product quantity in cart
var r=e.val();if(r!=parseInt(r)||r<0||isNaN(r)){e.val(n);return}
// There should be a new product quantity in cart
var s=r-n;if(0===s)return;e.attr("value",r);m(i,g(s),e)}i.on("focusout keyup",t,(t=>{if("keyup"===t.type){if(13===t.keyCode)y(t);return false}y(t)}));i.on("click",".js-discount .code",(t=>{t.stopPropagation();var e=o()(t.currentTarget);o()("[name=discount_name]").val(e.text());o()("#promo-code").collapse("show");return false}))}));var p={switchErrorStat:()=>{
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
var t=o()(".checkout a");if(o()("#notifications article.alert-danger").length||""!==d&&!l)t.addClass("disabled");if(""!==d){var e=' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'+d+"</li></ul></article>";o()("#notifications.notifications-container").html(e);d="";c=false;if(l)
// if hasError is true, quantity was not updated : allow checkout
t.removeClass("disabled")}else if(!l&&c){l=false;c=false;o()("#notifications.notifications-container").html("");t.removeClass("disabled")}},checkUpdateOpertation:t=>{
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
l=t.hasOwnProperty("hasError");var e=t.errors||"";
// 1.7.2.x returns errors as string, 1.7.3.x returns array
if(e instanceof Array)d=e.join(" ");else d=e;c=true}};
/***/},
/***/"./js/checkout.js":
/*!************************!*\
  !*** ./js/checkout.js ***!
  \************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
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
 */function a(){o()(".js-terms a").on("click",(t=>{t.preventDefault();var e=o()(t.target).attr("href");if(e){
// TODO: Handle request if no pretty URL
e+="?content_only=1";o().get(e,(t=>{o()("#modal").find(".js-modal-content").html(o()(t).find(".page-content--cms").contents())})).fail((t=>{s().emit("handleError",{eventType:"clickTerms",resp:t})}))}o()("#modal").modal("show")}));o()(".js-gift-checkbox").on("click",(t=>{o()("#gift").collapse("toggle")}))}o()(document).ready((()=>{if(1===o()("body#checkout").length)a();s().on("updatedDeliveryForm",(t=>{if(void 0===t.deliveryOption||0===t.deliveryOption.length)return;
// Hide all carrier extra content ...
o()(".carrier-extra-content").hide();
// and show the one related to the selected carrier
t.deliveryOption.next(".carrier-extra-content").slideDown()}));s().on("changedCheckoutStep",(t=>{if(void 0!==t.event.currentTarget)o()(".collapse",t.event.currentTarget).not(".show").not(".collapse .collapse").collapse("show")}))}));o()(document).on("change",".js-input-delivery:checked",(t=>{o()(".js-label-delivery.selected").removeClass("selected");o()("#js-"+o()(void 0).attr("id")).addClass("selected")}));o()(document).on("click",".js-checkout-step-header",(t=>{var e=o()(t.currentTarget).data("identifier");o()("#"+e).addClass("-current");o()("#content-"+e).collapse("show").scrollTop()}));
/***/},
/***/"./js/components/block-cart.js":
/*!*************************************!*\
  !*** ./js/components/block-cart.js ***!
  \*************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! prestashop */"prestashop");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! jquery */"jquery");
/* harmony import */var s=i.n(r);
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
 */o().blockcart=o().blockcart||{};o().blockcart.showModal=t=>{function e(){return s()("#blockcart-modal")}var i=e();if(i.length)i.remove();s()("body").append(t);(i=e()).modal("show").on("hidden.bs.modal",(t=>{o().emit("updateProduct",{reason:t.currentTarget.dataset,event:t})}))};
/***/},
/***/"./js/components/form.js":
/*!*******************************!*\
  !*** ./js/components/form.js ***!
  \*******************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony export */i.d(e,{
/* harmony export */default:function(){/* binding */return r}
/* harmony export */});
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
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
 */class r{init(){this.parentFocus();this.togglePasswordVisibility();this.formValidation()}parentFocus(){o()(".js-child-focus").focus((function(){o()(this).closest(".js-parent-focus").addClass("focus")}));o()(".js-child-focus").focusout((function(){o()(this).closest(".js-parent-focus").removeClass("focus")}))}togglePasswordVisibility(){o()('button[data-action="show-password"]').on("click",(function(){var t=o()(this).closest(".input-group").children("input.js-visible-password");if("password"===t.attr("type")){t.attr("type","text");o()(this).text(o()(this).data("textHide"))}else{t.attr("type","password");o()(this).text(o()(this).data("textShow"))}}))}formValidation(){
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var t=document.getElementsByClassName("needs-validation");if(t.length>0){console.log(s());if(!s())return;
// Loop over them and prevent submission
var e=false;Array.prototype.filter.call(t,(function(t){t.addEventListener("submit",(function(i){if(false===t.checkValidity()){i.preventDefault();i.stopPropagation();o()("input:invalid,select:invalid,textarea:invalid",t).each((function(t){var i=o()(this),n=i.parents(".form-group").first();o()(".js-invalid-feedback-browser",n).text(i[0].validationMessage);if(!e)e=n}));o()(this).data("disabled",false);o()('button[type="submit"]',t).removeClass("disabled")}t.classList.add("was-validated");if(e){o()("html, body").animate({scrollTop:e.offset().top},300);e=false}}),false)}))}}}var s=function t(){var e=document.createElement("input");return"validity"in e&&"badInput"in e.validity&&"patternMismatch"in e.validity&&"rangeOverflow"in e.validity&&"rangeUnderflow"in e.validity&&"tooLong"in e.validity&&"tooShort"in e.validity&&"typeMismatch"in e.validity&&"valid"in e.validity&&"valueMissing"in e.validity};
/***/},
/***/"./js/components/slick.js":
/*!********************************!*\
  !*** ./js/components/slick.js ***!
  \********************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony export */i.d(e,{
/* harmony export */default:function(){/* binding */return r}
/* harmony export */});
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);class r{init(){o()("[data-slick]").not(".slick-initialized").each((function(){var t=o()(this);if(1===t.data("count"))return;t.slick({prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons left">&#xE314;</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons right">&#xE315;</i></button>'})}))}}
/***/},
/***/"./js/components/top-menu.js":
/*!***********************************!*\
  !*** ./js/components/top-menu.js ***!
  \***********************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony export */i.d(e,{
/* harmony export */default:function(){/* binding */return r}
/* harmony export */});
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
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
 */class r{constructor(t){this.el=t}init(){var t=this;t.el.hoverIntent({over:t.toggleClassSubMenu,out:t.toggleClassSubMenu,selector:" > li",timeout:100})}toggleClassSubMenu(){var t=o()(this);var e=t.attr("aria-expanded");if(void 0!==e){e="true"===e.toLowerCase();t.toggleClass("menu__item--active").attr("aria-expanded",!e);o()(".menu-sub",t).attr("aria-expanded",!e).attr("aria-hidden",e)}}}
/***/},
/***/"./js/customer.js":
/*!************************!*\
  !*** ./js/customer.js ***!
  \************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
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
 */function r(){o()("#order-return-form table thead input[type=checkbox]").on("click",(function(){var t=o()(this).prop("checked");o()("#order-return-form table tbody input[type=checkbox]").each((function(e,i){o()(i).prop("checked",t)}))}))}function s(){if(o()("body#order-detail"))r()}o()(document).ready(s);
/***/},
/***/"./js/lib/jquery.hoverIntent.min.js":
/*!******************************************!*\
  !*** ./js/lib/jquery.hoverIntent.min.js ***!
  \******************************************/
/***/function(t,e,i){var n,o,r;
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */!function(s){"use strict";o=[i(/*! jquery */"jquery")],void 0!==(r="function"==typeof(n=s)?n.apply(e,o):n)&&(t.exports=r)}((function(t){"use strict";var e,i,n={interval:100,sensitivity:6,timeout:0},o=0,r=function t(n){e=n.pageX,i=n.pageY},s=function t(n,o,a,l){if(Math.sqrt((a.pX-e)*(a.pX-e)+(a.pY-i)*(a.pY-i))<l.sensitivity)return o.off(a.event,r),delete a.timeoutId,a.isActive=!0,n.pageX=e,n.pageY=i,delete a.pX,delete a.pY,l.over.apply(o[0],[n]);a.pX=e,a.pY=i,a.timeoutId=setTimeout((function(){s(n,o,a,l)}),l.interval)},a=function t(e,i,n,o){return delete i.data("hoverIntent")[n.id],o.apply(i[0],[e])};t.fn.hoverIntent=function(e,i,l){var c=o++,d=t.extend({},n);t.isPlainObject(e)?(d=t.extend(d,e),t.isFunction(d.out)||(d.out=d.over)):d=t.isFunction(i)?t.extend(d,{over:e,out:i,selector:l}):t.extend(d,{over:e,out:e,selector:i});var u=function e(i){var n=t.extend({},i),o=t(this),l=o.data("hoverIntent");l||o.data("hoverIntent",l={});var u=l[c];u||(l[c]=u={id:c}),u.timeoutId&&(u.timeoutId=clearTimeout(u.timeoutId));var p=u.event="mousemove.hoverIntent.hoverIntent"+c;if("mouseenter"===i.type){if(u.isActive)return;u.pX=n.pageX,u.pY=n.pageY,o.off(p,r).on(p,r),u.timeoutId=setTimeout((function(){s(n,o,u,d)}),d.interval)}else{if(!u.isActive)return;o.off(p,r),u.timeoutId=setTimeout((function(){a(n,o,u,d.out)}),d.timeout)}};return this.on({"mouseenter.hoverIntent":u,"mouseleave.hoverIntent":u},d.selector)}}));
/***/},
/***/"./js/lib/slick.min.js":
/*!*****************************!*\
  !*** ./js/lib/slick.min.js ***!
  \*****************************/
/***/function(t,e,i){var n,o,r;
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

 */!function(s){"use strict";o=[i(/*! jquery */"jquery")],void 0!==(r="function"==typeof(n=s)?n.apply(e,o):n)&&(t.exports=r)}((function(t){"use strict";var e=window.Slick||{};(e=function(){function e(e,n){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(e),appendDots:t(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function e(i,n){return t('<button type="button" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=t(e),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=t(e).data("slick")||{},r.options=t.extend({},r.defaults,n,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,void 0!==document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=t.proxy(r.autoPlay,r),r.autoPlayClear=t.proxy(r.autoPlayClear,r),r.autoPlayIterator=t.proxy(r.autoPlayIterator,r),r.changeSlide=t.proxy(r.changeSlide,r),r.clickHandler=t.proxy(r.clickHandler,r),r.selectHandler=t.proxy(r.selectHandler,r),r.setPosition=t.proxy(r.setPosition,r),r.swipeHandler=t.proxy(r.swipeHandler,r),r.dragHandler=t.proxy(r.dragHandler,r),r.keyHandler=t.proxy(r.keyHandler,r),r.instanceUid=i++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var i=0;return e}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,i,n){var o=this;if("boolean"==typeof i)n=i,i=null;else if(i<0||i>=o.slideCount)return!1;o.unload(),"number"==typeof i?0===i&&0===o.$slides.length?t(e).appendTo(o.$slideTrack):n?t(e).insertBefore(o.$slides.eq(i)):t(e).insertAfter(o.$slides.eq(i)):!0===n?t(e).prependTo(o.$slideTrack):t(e).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each((function(e,i){t(i).attr("data-slick-index",e)})),o.$slidesCache=o.$slides,o.reinit()},e.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},e.prototype.animateSlide=function(e,i){var n={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(e=-e),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:e},o.options.speed,o.options.easing,i):o.$slideTrack.animate({top:e},o.options.speed,o.options.easing,i):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),t({animStart:o.currentLeft}).animate({animStart:e},{duration:o.options.speed,easing:o.options.easing,step:function t(e){e=Math.ceil(e),!1===o.options.vertical?(n[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(n)):(n[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(n))},complete:function t(){i&&i.call()}})):(o.applyTransition(),e=Math.ceil(e),!1===o.options.vertical?n[o.animType]="translate3d("+e+"px, 0px, 0px)":n[o.animType]="translate3d(0px,"+e+"px, 0px)",o.$slideTrack.css(n),i&&setTimeout((function(){o.disableTransition(),i.call()}),o.options.speed))},e.prototype.getNavTarget=function(){var e=this,i=e.options.asNavFor;return i&&null!==i&&(i=t(i).not(e.$slider)),i},e.prototype.asNavFor=function(e){var i=this.getNavTarget();null!==i&&"object"==typeof i&&i.each((function(){var i=t(this).slick("getSlick");i.unslicked||i.slideHandler(e,!0)}))},e.prototype.applyTransition=function(t){var e=this,i={};!1===e.options.fade?i[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:i[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},e.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1==0&&(t.direction=1))),t.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=t(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=t(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,i,n=this;if(!0===n.options.dots&&n.slideCount>n.options.slidesToShow){for(n.$slider.addClass("slick-dotted"),i=t("<ul />").addClass(n.options.dotsClass),e=0;e<=n.getDotCount();e+=1)i.append(t("<li />").append(n.options.customPaging.call(this,n,e)));n.$dots=i.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each((function(e,i){t(i).attr("data-slick-index",e).data("originalStyling",t(i).attr("style")||"")})),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?t('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),t("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var t,e,i,n,o,r,s,a=this;if(n=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),t=0;t<o;t++){var l=document.createElement("div");for(e=0;e<a.options.rows;e++){var c=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var d=t*s+(e*a.options.slidesPerRow+i);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}n.appendChild(l)}a.$slider.empty().append(n),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,i){var n,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||t(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(n in s.breakpoints)s.breakpoints.hasOwnProperty(n)&&(!1===s.originalSettings.mobileFirst?r<s.breakpoints[n]&&(o=s.breakpoints[n]):r>s.breakpoints[n]&&(o=s.breakpoints[n]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||i)&&(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[o]),!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[o]),!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e),a=o),e||!1===a||s.$slider.trigger("breakpoint",[s,a])}},e.prototype.changeSlide=function(e,i){var n,o,r=this,s=t(e.currentTarget);switch(s.is("a")&&e.preventDefault(),s.is("li")||(s=s.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":o=0===n?r.options.slidesToScroll:r.options.slidesToShow-n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,i);break;case"next":o=0===n?r.options.slidesToScroll:n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,i);break;case"index":var a=0===e.data.index?0:e.data.index||s.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,i),s.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var e,i;if(i=0,t>(e=this.getNavigableIndexes())[e.length-1])t=e[e.length-1];else for(var n in e){if(t<e[n]){t=i;break}i=e[n]}return t},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(t("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",t.proxy(e.interrupt,e,!0)).off("mouseleave.slick",t.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),t(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().off("click.slick",e.selectHandler),t(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),t(window).off("resize.slick.slick-"+e.instanceUid,e.resize),t("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),t(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var t,e=this;e.options.rows>0&&((t=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(t))},e.prototype.clickHandler=function(t){!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(e){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),t(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){t(this).attr("style",t(this).data("originalStyling"))})),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,e||i.$slider.trigger("destroy",[i])},e.prototype.disableTransition=function(t){var e=this,i={};i[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},e.prototype.fadeSlide=function(t,e){var i=this;!1===i.cssTransitions?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout((function(){i.disableTransition(t),e.call()}),i.options.speed))},e.prototype.fadeSlideOut=function(t){var e=this;!1===e.cssTransitions?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",(function(i){var n=t(this);setTimeout((function(){e.options.pauseOnFocus&&n.is(":focus")&&(e.focussed=!0,e.autoPlay())}),0)})).on("blur.slick","*",(function(i){t(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())}))},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var t=this,e=0,i=0,n=0;if(!0===t.options.infinite)if(t.slideCount<=t.options.slidesToShow)++n;else for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)n=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else n=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return n-1},e.prototype.getLeft=function(t){var e,i,n,o,r=this,s=0;return r.slideOffset=0,i=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=i*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&t+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(t>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(t-r.slideCount))*r.slideWidth*-1,s=(r.options.slidesToShow-(t-r.slideCount))*i*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,s=r.slideCount%r.options.slidesToScroll*i*-1))):t+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(t+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(t+r.options.slidesToShow-r.slideCount)*i),r.slideCount<=r.options.slidesToShow&&(r.slideOffset=0,s=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),e=!1===r.options.vertical?t*r.slideWidth*-1+r.slideOffset:t*i*-1+s,!0===r.options.variableWidth&&(n=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(t):r.$slideTrack.children(".slick-slide").eq(t+r.options.slidesToShow),e=!0===r.options.rtl?n[0]?-1*(r.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,!0===r.options.centerMode&&(n=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(t):r.$slideTrack.children(".slick-slide").eq(t+r.options.slidesToShow+1),e=!0===r.options.rtl?n[0]?-1*(r.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,e+=(r.$list.width()-n.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(t){return this.options[t]},e.prototype.getNavigableIndexes=function(){var t,e=this,i=0,n=0,o=[];for(!1===e.options.infinite?t=e.slideCount:(i=-1*e.options.slidesToScroll,n=-1*e.options.slidesToScroll,t=2*e.slideCount);i<t;)o.push(i),i=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return o},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,i,n,o=this;return n=!0===o.options.centerMode?Math.floor(o.$list.width()/2):0,i=-1*o.swipeLeft+n,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each((function(n,r){var s,a;if(s=t(r).outerWidth(),a=r.offsetLeft,!0!==o.options.centerMode&&(a+=s/2),i<a+s)return e=r,!1})),Math.abs(t(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,e){this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},e.prototype.init=function(e){var i=this;t(i.$slider).hasClass("slick-initialized")||(t(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),e&&i.$slider.trigger("init",[i]),!0===i.options.accessibility&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},e.prototype.initADA=function(){var e=this,i=Math.ceil(e.slideCount/e.options.slidesToShow),n=e.getNavigableIndexes().filter((function(t){return t>=0&&t<e.slideCount}));e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(i){var o=n.indexOf(i);if(t(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+i,tabindex:-1}),-1!==o){var r="slick-slide-control"+e.instanceUid+o;t("#"+r).length&&t(this).attr({"aria-describedby":r})}})),e.$dots.attr("role","tablist").find("li").each((function(o){var r=n[o];t(this).attr({role:"presentation"}),t(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+o,"aria-controls":"slick-slide"+e.instanceUid+r,"aria-label":o+1+" of "+i,"aria-selected":null,tabindex:"-1"})})).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=e.currentSlide,r=o+e.options.slidesToShow;o<r;o++)e.options.focusOnChange?e.$slides.eq(o).attr({tabindex:"0"}):e.$slides.eq(o).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&(t("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&e.slideCount>e.options.slidesToShow&&t("li",e.$dots).on("mouseenter.slick",t.proxy(e.interrupt,e,!0)).on("mouseleave.slick",t.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",t.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),t(document).on(e.visibilityChange,t.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),t(window).on("orientationchange.slick.slick-"+e.instanceUid,t.proxy(e.orientationChange,e)),t(window).on("resize.slick.slick-"+e.instanceUid,t.proxy(e.resize,e)),t("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),t(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),t(e.setPosition)},e.prototype.initUI=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},e.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){t("img[data-lazy]",e).each((function(){var e=t(this),i=t(this).attr("data-lazy"),n=t(this).attr("data-srcset"),o=t(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){e.animate({opacity:0},100,(function(){n&&(e.attr("srcset",n),o&&e.attr("sizes",o)),e.attr("src",i).animate({opacity:1},200,(function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),r.$slider.trigger("lazyLoaded",[r,e,i])}))},s.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,i])},s.src=i}))}var i,n,o,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?o=(n=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),o=r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,o=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(n>0&&n--,o<=r.slideCount&&o++)),i=r.$slider.find(".slick-slide").slice(n,o),"anticipated"===r.options.lazyLoad)for(var s=n-1,a=o,l=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)s<0&&(s=r.slideCount-1),i=(i=i.add(l.eq(s))).add(l.eq(a)),s--,a++;e(i),r.slideCount<=r.options.slidesToShow?e(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?e(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&e(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},e.prototype.postSlide=function(e){var i=this;if(!i.unslicked&&(i.$slider.trigger("afterChange",[i,e]),i.animating=!1,i.slideCount>i.options.slidesToShow&&i.setPosition(),i.swipeLeft=null,i.options.autoplay&&i.autoPlay(),!0===i.options.accessibility&&(i.initADA(),i.options.focusOnChange))){t(i.$slides.get(i.currentSlide)).attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var i,n,o,r,s,a=this,l=t("img[data-lazy]",a.$slider);l.length?(i=l.first(),n=i.attr("data-lazy"),o=i.attr("data-srcset"),r=i.attr("data-sizes")||a.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){o&&(i.attr("srcset",o),r&&i.attr("sizes",r)),i.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,i,n]),a.progressiveLazyLoad()},s.onerror=function(){e<3?setTimeout((function(){a.progressiveLazyLoad(e+1)}),500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,i,n]),a.progressiveLazyLoad())},s.src=n):a.$slider.trigger("allImagesLoaded",[a])},e.prototype.refresh=function(e){var i,n,o=this;n=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>n&&(o.currentSlide=n),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),i=o.currentSlide,o.destroy(!0),t.extend(o,o.initials,{currentSlide:i}),o.init(),e||o.changeSlide({data:{message:"index",index:i}},!1)},e.prototype.registerBreakpoints=function(){var e,i,n,o=this,r=o.options.responsive||null;if("array"===t.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(e in r)if(n=o.breakpoints.length-1,r.hasOwnProperty(e)){for(i=r[e].breakpoint;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===i&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(i),o.breakpointSettings[i]=r[e].settings}o.breakpoints.sort((function(t,e){return o.options.mobileFirst?t-e:e-t}))}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout((function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()}),50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,e,i){var n=this;return"boolean"==typeof t?t=!0===(e=t)?0:n.slideCount-1:t=!0===e?--t:t,!(n.slideCount<1||t<0||t>n.slideCount-1)&&(n.unload(),!0===i?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(t).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,void n.reinit())},e.prototype.setCSS=function(t){var e,i,n=this,o={};!0===n.options.rtl&&(t=-t),e="left"==n.positionProp?Math.ceil(t)+"px":"0px",i="top"==n.positionProp?Math.ceil(t)+"px":"0px",o[n.positionProp]=t,!1===n.transformsEnabled?n.$slideTrack.css(o):(o={},!1===n.cssTransitions?(o[n.animType]="translate("+e+", "+i+")",n.$slideTrack.css(o)):(o[n.animType]="translate3d("+e+", "+i+", 0px)",n.$slideTrack.css(o)))},e.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},e.prototype.setFade=function(){var e,i=this;i.$slides.each((function(n,o){e=i.slideWidth*n*-1,!0===i.options.rtl?t(o).css({position:"relative",right:e,top:0,zIndex:i.options.zIndex-2,opacity:0}):t(o).css({position:"relative",left:e,top:0,zIndex:i.options.zIndex-2,opacity:0})})),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,i,n,o,r,s=this,a=!1;if("object"===t.type(arguments[0])?(n=arguments[0],a=arguments[1],r="multiple"):"string"===t.type(arguments[0])&&(n=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===t.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)s.options[n]=o;else if("multiple"===r)t.each(n,(function(t,e){s.options[t]=e}));else if("responsive"===r)for(i in o)if("array"!==t.type(s.options.responsive))s.options.responsive=[o[i]];else{for(e=s.options.responsive.length-1;e>=0;)s.options.responsive[e].breakpoint===o[i].breakpoint&&s.options.responsive.splice(e,1),e--;s.options.responsive.push(o[i])}a&&(s.unload(),s.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),!1===t.options.fade?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===t.options.useCSS&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},e.prototype.setSlideClasses=function(t){var e,i,n,o,r=this;if(i=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(t).addClass("slick-current"),!0===r.options.centerMode){var s=r.options.slidesToShow%2==0?1:0;e=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(t>=e&&t<=r.slideCount-1-e?r.$slides.slice(t-e+s,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(n=r.options.slidesToShow+t,i.slice(n-e+1+s,n+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?i.eq(i.length-1-r.options.slidesToShow).addClass("slick-center"):t===r.slideCount-1&&i.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=r.slideCount-r.options.slidesToShow?r.$slides.slice(t,t+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=r.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,n=!0===r.options.infinite?r.options.slidesToShow+t:t,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-t<r.options.slidesToShow?i.slice(n-(r.options.slidesToShow-o),n+o).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},e.prototype.setupInfinite=function(){var e,i,n,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(i=null,o.slideCount>o.options.slidesToShow)){for(n=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,e=o.slideCount;e>o.slideCount-n;e-=1)i=e-1,t(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(e=0;e<n+o.slideCount;e+=1)i=e,t(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each((function(){t(this).attr("id","")}))}},e.prototype.interrupt=function(t){var e=this;t||e.autoPlay(),e.interrupted=t},e.prototype.selectHandler=function(e){var i=this,n=t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide"),o=parseInt(n.attr("data-slick-index"));return o||(o=0),i.slideCount<=i.options.slidesToShow?void i.slideHandler(o,!1,!0):void i.slideHandler(o)},e.prototype.slideHandler=function(t,e,i){var n,o,r,s,a,l=null,c=this;if(e=e||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===t))return!1===e&&c.asNavFor(t),n=t,l=c.getLeft(n),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(t<0||t>c.getDotCount()*c.options.slidesToScroll)?void(!1===c.options.fade&&(n=c.currentSlide,!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(n)})):c.postSlide(n))):!1===c.options.infinite&&!0===c.options.centerMode&&(t<0||t>c.slideCount-c.options.slidesToScroll)?void(!1===c.options.fade&&(n=c.currentSlide,!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(n)})):c.postSlide(n))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=n<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+n:n>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:n-c.slideCount:n,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&((a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade?(!0!==i?(c.fadeSlideOut(r),c.fadeSlide(o,(function(){c.postSlide(o)}))):c.postSlide(o),void c.animateHeight()):void(!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(l,(function(){c.postSlide(o)})):c.postSlide(o)))},e.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,e,i,n,o=this;return t=o.touchObject.startX-o.touchObject.curX,e=o.touchObject.startY-o.touchObject.curY,i=Math.atan2(e,t),(n=Math.round(180*i/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&n>=0?!1===o.options.rtl?"left":"right":n<=360&&n>=315?!1===o.options.rtl?"left":"right":n>=135&&n<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?n>=35&&n<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(t){var e,i,n=this;if(n.dragging=!1,n.swiping=!1,n.scrolling)return n.scrolling=!1,!1;if(n.interrupted=!1,n.shouldClick=!(n.touchObject.swipeLength>10),void 0===n.touchObject.curX)return!1;if(!0===n.touchObject.edgeHit&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(i=n.swipeDirection()){case"left":case"down":e=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":e=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1}"vertical"!=i&&(n.slideHandler(e),n.touchObject={},n.$slider.trigger("swipe",[n,i]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},e.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},e.prototype.swipeMove=function(t){var e,i,n,o,r,s,a=this;return r=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!a.dragging||a.scrolling||r&&1!==r.length)&&(e=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==r?r[0].pageX:t.clientX,a.touchObject.curY=void 0!==r?r[0].pageY:t.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),i=a.swipeDirection(),void 0!==t.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,t.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),n=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===i||a.currentSlide>=a.getDotCount()&&"left"===i)&&(n=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=e+n*o:a.swipeLeft=e+n*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=e+n*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},e.prototype.swipeStart=function(t){var e,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==e?e.pageX:t.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==e?e.pageY:t.clientY,void(i.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var e=this;t(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},e.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},t.fn.slick=function(){var t,i,n=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),s=n.length;for(t=0;t<s;t++)if("object"==typeof o||void 0===o?n[t].slick=new e(n[t],o):i=n[t].slick[o].apply(n[t].slick,r),void 0!==i)return i;return n}}));
/***/},
/***/"./js/listing.js":
/*!***********************!*\
  !*** ./js/listing.js ***!
  \***********************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
/* harmony import */var a=i(/*! ./components/slick */"./js/components/slick.js");
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
 */o()(document).ready((()=>{s().on("clickQuickView",(function(e){var i={action:"quickview",id_product:e.dataset.idProduct,id_product_attribute:e.dataset.idProductAttribute};o().post(s().urls.pages.product,i,null,"json").then((function(e){o()("body").append(e.quickview_html);var i=o()("#quickview-modal-".concat(e.product.id,"-").concat(e.product.id_product_attribute));i.modal("show");i.on("hidden.bs.modal",(function(){i.remove()}));i.on("shown.bs.modal",(function(){t(i)}))})).fail((t=>{s().emit("handleError",{eventType:"clickQuickView",resp:t})}))}));var t=t=>{(new a.default).init();t.find("#quantity_wanted").TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:1,max:1e6})};var e=function t(e){if(void 0!==e.target.dataset.searchUrl)return e.target.dataset.searchUrl;if(void 0===o()(e.target).parent()[0].dataset.searchUrl)throw new Error("Can not parse search URL");return o()(e.target).parent()[0].dataset.searchUrl};o()("body").on("change","#search_filters input[data-search-url]",(function(t){s().emit("updateFacets",e(t))}));o()("body").on("click",".js-search-filters-clear-all",(function(t){s().emit("updateFacets",e(t))}));o()("body").on("click",".js-search-link",(function(t){t.preventDefault();s().emit("updateFacets",o()(t.target).closest("a").get(0).href)}));o()("body").on("change","#select-sort-order",(function(){var t=o()(this).val();s().emit("updateFacets",t)}));o()("body").on("change","#search_filters select",(function(t){var e=o()(this).val();s().emit("updateFacets",e)}));s().on("updateProductList",(t=>{l(t);window.scrollTo(0,0)}))}));function l(t){o()("#search_filters").replaceWith(t.rendered_facets);o()("#js-active-search-filters").replaceWith(t.rendered_active_filters);o()("#js-product-list-top").replaceWith(t.rendered_products_top);o()("#js-product-list").replaceWith(t.rendered_products);o()("#js-product-list-bottom").replaceWith(t.rendered_products_bottom);if(void 0!==t.rendered_products_header&&t.rendered_products_header)o()("#js-product-list-header").replaceWith(t.rendered_products_header)}
/***/},
/***/"./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
/* harmony import */i(/*! ./components/slick */"./js/components/slick.js");
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
 */o()(document).ready((function(){console.log("ready product");i();e();
//let slickSlider = new SlickSlider();
t();if(s().responsive.mobile){
//$(".btn-zoom").hide();
console.log("zoom");
//$(".product-img img").parent().zoom();
o()("#product-modal img").parent().zoom({magnify:.8})}s().on("updatedProduct",(function(i){console.log("updatedProduct");e();if(i&&i.product_minimal_quantity){var n=parseInt(i.product_minimal_quantity,10);var r="#quantity_wanted";
// @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
o()(r).trigger("touchspin.updatesettings",{min:n})}o()(o()(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade");o()(".js-product-images-modal").replaceWith(i.product_images_modal);
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
       $("#product-modal img#image-" + idImage).removeClass('d-none').addClass('current');*/}))}function e(){o()(".js-file-input").on("change",(t=>{var e,i;if((e=o()(t.currentTarget)[0])&&(i=e.files[0]))o()(e).prev().text(i.name)}))}function i(){var t=o()("#quantity_wanted");t.TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(t.attr("min"),10),max:1e6});o()("body").on("change keyup","#quantity_wanted",(t=>{o()(t.currentTarget).trigger("touchspin.stopspin");s().emit("updateProduct",{eventType:"updatedProductQuantity",event:t})}))}}));var a=0;var l=0;o()(document).on("shown.bs.modal","#product-modal",(function(t){console.log("shown #product-modal");console.log("numImage : "+a);o()("#js-slick-product").resize()}));o()(document).on("click",".next-image-modal",(function(t){console.log("next-image-modal click");o()("#js-slick-product").slick("slickNext")}));o()(document).on("click",".prev-image-modal",(function(t){console.log("prev-image-modal click");o()("#js-slick-product").slick("slickPrev")}));
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
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
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
 */s().responsive=s().responsive||{};s().responsive.current_width=window.innerWidth;s().responsive.min_width=992;s().responsive.mobile=s().responsive.current_width<s().responsive.min_width;function a(t,e){var i=e.children().detach();e.empty().append(t.children().detach());t.append(i)}function l(){if(s().responsive.mobile){o()("*[id^='_desktop_']").each((function(t,e){var i=o()("#"+e.id.replace("_desktop_","_mobile_"));if(i.length)a(o()(e),i)}));o()("[data-collapse-hide-mobile]").collapse("hide")}else{o()("*[id^='_mobile_']").each((function(t,e){var i=o()("#"+e.id.replace("_mobile_","_desktop_"));if(i.length)a(o()(e),i)}));o()("[data-collapse-hide-mobile]").not(".show").collapse("show");o()("[data-modal-hide-mobile].show").modal("hide")}s().emit("responsive update",{mobile:s().responsive.mobile})}o()(window).on("resize",(function(){var t=s().responsive.current_width;var e=s().responsive.min_width;var i=window.innerWidth;var n=t>=e&&i<e||t<e&&i>=e;s().responsive.current_width=i;s().responsive.mobile=s().responsive.current_width<s().responsive.min_width;if(n)l()}));o()(document).ready((function(){if(s().responsive.mobile)l()}));
/***/},
/***/"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js ***!
  \*****************************************************************************/
/***/function(t,e,i){"use strict";var n,o,r;
/*
 *  Bootstrap Touchspin - v4.7.3
 *  A mobile and touch friendly input spinner component for Bootstrap 3 & 4.
 *  https://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under MIT License
 */
!function(s){if(true)o=[i(/*! jquery */"jquery")],void 0!==(r="function"==typeof(n=s)?n.apply(e,o):n)&&(t.exports=r)}((function(t){var e=0;t.fn.TouchSpin=function(i){var n={min:0,
// If null, there is no minimum enforced
max:100,
// If null, there is no maximum enforced
initval:"",replacementval:"",firstclickvalueifempty:null,step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",
// none | floor | round | ceil
stepintervaldelay:500,verticalbuttons:false,verticalup:"&plus;",verticaldown:"&minus;",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:true,boostat:10,maxboostedstep:false,mousewheel:true,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"&minus;",buttonup_txt:"&plus;",callback_before_calculation:function t(e){return e},callback_after_calculation:function t(e){return e}};var o={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",firstclickvalueifempty:"first-click-value-if-empty",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each((function(){var r,s,a,l,c,d,u,p,f,h,v,m=t(this),g=m.data(),b=0,y=false;w();function w(){if(m.data("alreadyinitialized"))return;m.data("alreadyinitialized",true);e+=1;m.data("spinnerid",e);if(!m.is("input")){console.log("Must be an input.");return}T();_();I();E();A();F();$();N();P();D()}function _(){if(""!==r.initval&&""===m.val())m.val(r.initval)}function k(t){x(t);I();var e=c.input.val();if(""!==e){e=parseFloat(r.callback_before_calculation(c.input.val()));c.input.val(r.callback_after_calculation(parseFloat(e).toFixed(r.decimals)))}}function T(){r=t.extend({},n,g,C(),i);if(1!==parseFloat(r.step)){var e;
// Modify settings.max to be divisible by step
if(0!==(e=r.max%r.step))r.max=parseFloat(r.max)-e;
// Do the same with min, should work with negative numbers too
if(0!==(e=r.min%r.step))r.min=parseFloat(r.min)+(parseFloat(r.step)-e)}}function C(){var e={};
// Setting up based on data attributes
t.each(o,(function(t,i){var n="bts-"+i;if(m.is("[data-"+n+"]"))e[t]=m.data(n)}));
// Setting up based on input attributes if specified (input attributes have precedence)
t.each(["min","max","step"],(function(t,i){if(m.is("["+i+"]")){if(void 0!==e[i])console.warn('Both the "data-bts-'+i+'" data attribute and the "'+i+'" individual attribute were specified, the individual attribute will take precedence on: ',m);e[i]=m.attr(i)}}));return e}function S(){var e=m.parent();B();m.off(".touchspin");if(e.hasClass("bootstrap-touchspin-injected")){m.siblings().remove();m.unwrap()}else{t(".bootstrap-touchspin-injected",e).remove();e.removeClass("bootstrap-touchspin")}m.data("alreadyinitialized",false)}function x(e){r=t.extend({},r,e);
// Update postfix and prefix texts if those settings were changed.
if(e.postfix){if(0===m.parent().find(".bootstrap-touchspin-postfix").length)a.insertAfter(m);m.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix)}if(e.prefix){if(0===m.parent().find(".bootstrap-touchspin-prefix").length)s.insertBefore(m);m.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix)}$()}function E(){var t=m.val(),e=m.parent();if(""!==t){
// initval may not be parsable as a number (callback_after_calculation() may decorate it so it cant be parsed).  Use the callbacks if provided.
t=r.callback_before_calculation(t);t=r.callback_after_calculation(parseFloat(t).toFixed(r.decimals))}m.data("initvalue",t).val(t);m.addClass("form-control");d='\n          <span class="input-group-addon bootstrap-touchspin-vertical-button-wrapper">\n            <span class="input-group-btn-vertical">\n              <button tabindex="-1" class="'.concat(r.buttondown_class," bootstrap-touchspin-up ").concat(r.verticalupclass,'" type="button">').concat(r.verticalup,'</button>\n              <button tabindex="-1" class="').concat(r.buttonup_class," bootstrap-touchspin-down ").concat(r.verticaldownclass,'" type="button">').concat(r.verticaldown,"</button>\n            </span>\n          </span>\n       ");if(e.hasClass("input-group"))j(e);else O()}function j(e){e.addClass("bootstrap-touchspin");var i=m.prev(),n=m.next();var o,s,a='\n            <span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected">\n              <span class="input-group-text">'.concat(r.prefix,"</span>\n            </span>\n          "),c='\n            <span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected">\n              <span class="input-group-text">'.concat(r.postfix,"</span>\n            </span>\n          ");if(r.verticalbuttons)t(d).insertAfter(m);else{if(i.hasClass("input-group-btn")||i.hasClass("input-group-prepend")){o='\n              <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">').concat(r.buttondown_txt,"</button>\n            ");i.append(o)}else{o='\n              <span class="input-group-btn input-group-prepend bootstrap-touchspin-injected">\n                <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down" type="button">').concat(r.buttondown_txt,"</button>\n              </span>\n            ");t(o).insertBefore(m)}if(n.hasClass("input-group-btn")||n.hasClass("input-group-append")){s='\n            <button tabindex="-1" class="'.concat(r.buttonup_class,' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">').concat(r.buttonup_txt,"</button>\n          ");n.prepend(s)}else{s='\n            <span class="input-group-btn input-group-append bootstrap-touchspin-injected">\n              <button tabindex="-1" class="'.concat(r.buttonup_class,' bootstrap-touchspin-up" type="button">').concat(r.buttonup_txt,"</button>\n            </span>\n          ");t(s).insertAfter(m)}}t(a).insertBefore(m);t(c).insertAfter(m);l=e}function O(){var e;var i="";if(m.hasClass("input-sm")||m.hasClass("form-control-sm"))i="input-group-sm";else if(m.hasClass("input-lg")||m.hasClass("form-control-lg"))i="input-group-lg";if(r.verticalbuttons)e='\n            <div class="input-group '.concat(i,' bootstrap-touchspin bootstrap-touchspin-injected">\n              <span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix">\n                <span class="input-group-text">').concat(r.prefix,'</span>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">\n                <span class="input-group-text">').concat(r.postfix,"</span>\n              </span>\n              ").concat(d,"\n            </div>\n          ");else e='\n            <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">\n              <span class="input-group-btn input-group-prepend">\n                <button tabindex="-1" class="'.concat(r.buttondown_class,' bootstrap-touchspin-down" type="button">').concat(r.buttondown_txt,'</button>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend">\n                <span class="input-group-text">').concat(r.prefix,'</span>\n              </span>\n              <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">\n                <span class="input-group-text">').concat(r.postfix,'</span>\n              </span>\n              <span class="input-group-btn input-group-append">\n                <button tabindex="-1" class="').concat(r.buttonup_class,' bootstrap-touchspin-up" type="button">').concat(r.buttonup_txt,"</button>\n              </span>\n            </div>");l=t(e).insertBefore(m);t(".bootstrap-touchspin-prefix",l).after(m);if(m.hasClass("input-sm")||m.hasClass("form-control-sm"))l.addClass("input-group-sm");else if(m.hasClass("input-lg")||m.hasClass("form-control-lg"))l.addClass("input-group-lg")}function A(){c={down:t(".bootstrap-touchspin-down",l),up:t(".bootstrap-touchspin-up",l),input:t("input",l),prefix:t(".bootstrap-touchspin-prefix",l).addClass(r.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",l).addClass(r.postfix_extraclass)}}function $(){if(""===r.prefix)s=c.prefix.detach();if(""===r.postfix)a=c.postfix.detach()}function P(){m.on("keydown.touchspin",(function(t){var e=t.keyCode||t.which;if(38===e){if("up"!==y){H();R()}t.preventDefault()}else if(40===e){if("down"!==y){q();W()}t.preventDefault()}else if(9===e||13===e)I()}));m.on("keyup.touchspin",(function(t){var e=t.keyCode||t.which;if(38===e)B();else if(40===e)B()}));
// change is fired before blur, so we need to work around that
t(document).on("mousedown touchstart",(function(e){if(t(e.target).is(m))return;I()}));m.on("blur.touchspin",(function(){I()}));c.down.on("keydown",(function(t){var e=t.keyCode||t.which;if(32===e||13===e){if("down"!==y){q();W()}t.preventDefault()}}));c.down.on("keyup.touchspin",(function(t){var e=t.keyCode||t.which;if(32===e||13===e)B()}));c.up.on("keydown.touchspin",(function(t){var e=t.keyCode||t.which;if(32===e||13===e){if("up"!==y){H();R()}t.preventDefault()}}));c.up.on("keyup.touchspin",(function(t){var e=t.keyCode||t.which;if(32===e||13===e)B()}));c.down.on("mousedown.touchspin",(function(t){c.down.off("touchstart.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;q();W();t.preventDefault();t.stopPropagation()}));c.down.on("touchstart.touchspin",(function(t){c.down.off("mousedown.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;q();W();t.preventDefault();t.stopPropagation()}));c.up.on("mousedown.touchspin",(function(t){c.up.off("touchstart.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;H();R();t.preventDefault();t.stopPropagation()}));c.up.on("touchstart.touchspin",(function(t){c.up.off("mousedown.touchspin");// android 4 workaround
if(m.is(":disabled,[readonly]"))return;H();R();t.preventDefault();t.stopPropagation()}));c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(t){if(!y)return;t.stopPropagation();B()}));c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(t){if(!y)return;t.stopPropagation();B()}));c.down.on("mousemove.touchspin touchmove.touchspin",(function(t){if(!y)return;t.stopPropagation();t.preventDefault()}));c.up.on("mousemove.touchspin touchmove.touchspin",(function(t){if(!y)return;t.stopPropagation();t.preventDefault()}));m.on("mousewheel.touchspin DOMMouseScroll.touchspin",(function(t){if(!r.mousewheel||!m.is(":focus"))return;var e=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;t.stopPropagation();t.preventDefault();if(e<0)q();else H()}))}function D(){m.on("touchspin.destroy",(function(){S()}));m.on("touchspin.uponce",(function(){B();H()}));m.on("touchspin.downonce",(function(){B();q()}));m.on("touchspin.startupspin",(function(){R()}));m.on("touchspin.startdownspin",(function(){W()}));m.on("touchspin.stopspin",(function(){B()}));m.on("touchspin.updatesettings",(function(t,e){k(e)}))}function N(){if("undefined"!=typeof MutationObserver){new MutationObserver((function(t){t.forEach((function(t){if("attributes"===t.type&&("disabled"===t.attributeName||"readonly"===t.attributeName))F()}))})).observe(m[0],{attributes:true})}}function L(t){switch(r.forcestepdivisibility){case"round":return(Math.round(t/r.step)*r.step).toFixed(r.decimals);case"floor":return(Math.floor(t/r.step)*r.step).toFixed(r.decimals);case"ceil":return(Math.ceil(t/r.step)*r.step).toFixed(r.decimals);default:return t.toFixed(r.decimals)}}function I(){var t,e,i;if(""===(t=r.callback_before_calculation(m.val()))){if(""!==r.replacementval){m.val(r.replacementval);m.trigger("change")}return}if(r.decimals>0&&"."===t)return;e=parseFloat(t);if(isNaN(e))if(""!==r.replacementval)e=r.replacementval;else e=0;i=e;if(e.toString()!==t)i=e;i=L(e);if(null!==r.min&&e<r.min)i=r.min;if(null!==r.max&&e>r.max)i=r.max;if(parseFloat(e).toString()!==parseFloat(i).toString())m.val(i);m.val(r.callback_after_calculation(parseFloat(i).toFixed(r.decimals)))}function z(){if(!r.booster)return r.step;else{var t=Math.pow(2,Math.floor(b/r.boostat))*r.step;if(r.maxboostedstep)if(t>r.maxboostedstep){t=r.maxboostedstep;u=Math.round(u/t)*t}return Math.max(r.step,t)}}function M(){if("number"==typeof r.firstclickvalueifempty)return r.firstclickvalueifempty;else return(r.min+r.max)/2}function F(){var t=m.is(":disabled,[readonly]");c.up.prop("disabled",t);c.down.prop("disabled",t);if(t)B()}function H(){if(m.is(":disabled,[readonly]"))return;I();var t=u=parseFloat(r.callback_before_calculation(c.input.val()));var e;if(isNaN(u))u=M();else{e=z();u+=e}if(null!==r.max&&u>=r.max){u=r.max;m.trigger("touchspin.on.max");B()}c.input.val(r.callback_after_calculation(parseFloat(u).toFixed(r.decimals)));if(t!==u)m.trigger("change")}function q(){if(m.is(":disabled,[readonly]"))return;I();var t=u=parseFloat(r.callback_before_calculation(c.input.val()));var e;if(isNaN(u))u=M();else{e=z();u-=e}if(null!==r.min&&u<=r.min){u=r.min;m.trigger("touchspin.on.min");B()}c.input.val(r.callback_after_calculation(parseFloat(u).toFixed(r.decimals)));if(t!==u)m.trigger("change")}function W(){if(m.is(":disabled,[readonly]"))return;B();b=0;y="down";m.trigger("touchspin.on.startspin");m.trigger("touchspin.on.startdownspin");h=setTimeout((function(){p=setInterval((function(){b++;q()}),r.stepinterval)}),r.stepintervaldelay)}function R(){if(m.is(":disabled,[readonly]"))return;B();b=0;y="up";m.trigger("touchspin.on.startspin");m.trigger("touchspin.on.startupspin");v=setTimeout((function(){f=setInterval((function(){b++;H()}),r.stepinterval)}),r.stepintervaldelay)}function B(){clearTimeout(h);clearTimeout(v);clearInterval(p);clearInterval(f);switch(y){case"up":m.trigger("touchspin.on.stopupspin");m.trigger("touchspin.on.stopspin");break;case"down":m.trigger("touchspin.on.stopdownspin");m.trigger("touchspin.on.stopspin")}b=0;y=false}}))}}));
/***/},
/***/"./node_modules/bootstrap/js/src/alert.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var s="alert";var a="4.6.2";var l="bs.alert";var c=".".concat(l);var d=".data-api";var u=o().fn[s];var p="alert";var f="fade";var h="show";var v="close".concat(c);var m="closed".concat(c);var g="click".concat(c).concat(d);var b='[data-dismiss="alert"]';
/**
 * Class definition
 */class y{constructor(t){this._element=t}
// Getters
static get VERSION(){return a}
// Public
close(t){var e=this._element;if(t)e=this._getRootElement(t);if(this._triggerCloseEvent(e).isDefaultPrevented())return;this._removeElement(e)}dispose(){o().removeData(this._element,l);this._element=null}
// Private
_getRootElement(t){var e=r.default.getSelectorFromElement(t);var i=false;if(e)i=document.querySelector(e);if(!i)i=o()(t).closest(".".concat(p))[0];return i}_triggerCloseEvent(t){var e=o().Event(v);o()(t).trigger(e);return e}_removeElement(t){o()(t).removeClass(h);if(!o()(t).hasClass(f)){this._destroyElement(t);return}var e=r.default.getTransitionDurationFromElement(t);o()(t).one(r.default.TRANSITION_END,(e=>this._destroyElement(t,e))).emulateTransitionEnd(e)}_destroyElement(t){o()(t).detach().trigger(m).remove()}
// Static
static _jQueryInterface(t){return this.each((function(){var e=o()(this);var i=e.data(l);if(!i){i=new y(this);e.data(l,i)}if("close"===t)i[t](this)}))}static _handleDismiss(t){return function(e){if(e)e.preventDefault();t.close(this)}}}
/**
 * Data API implementation
 */o()(document).on(g,b,y._handleDismiss(new y));
/**
 * jQuery
 */o().fn[s]=y._jQueryInterface;o().fn[s].Constructor=y;o().fn[s].noConflict=()=>{o().fn[s]=u;return y._jQueryInterface};
/* harmony default export */e.default=y;
/***/},
/***/"./node_modules/bootstrap/js/src/button.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var r="button";var s="4.6.2";var a="bs.button";var l=".".concat(a);var c=".data-api";var d=o().fn[r];var u="active";var p="btn";var f="focus";var h="click".concat(l).concat(c);var v="focus".concat(l).concat(c," ")+"blur".concat(l).concat(c);var m="load".concat(l).concat(c);var g='[data-toggle^="button"]';var b='[data-toggle="buttons"]';var y='[data-toggle="button"]';var w='[data-toggle="buttons"] .btn';var _='input:not([type="hidden"])';var k=".active";var T=".btn";
/**
 * Class definition
 */class C{constructor(t){this._element=t;this.shouldAvoidTriggerChange=false}
// Getters
static get VERSION(){return s}
// Public
toggle(){var t=true;var e=true;var i=o()(this._element).closest(b)[0];if(i){var n=this._element.querySelector(_);if(n){if("radio"===n.type)if(n.checked&&this._element.classList.contains(u))t=false;else{var r=i.querySelector(k);if(r)o()(r).removeClass(u)}if(t){
// if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
if("checkbox"===n.type||"radio"===n.type)n.checked=!this._element.classList.contains(u);if(!this.shouldAvoidTriggerChange)o()(n).trigger("change")}n.focus();e=false}}if(!(this._element.hasAttribute("disabled")||this._element.classList.contains("disabled"))){if(e)this._element.setAttribute("aria-pressed",!this._element.classList.contains(u));if(t)o()(this._element).toggleClass(u)}}dispose(){o().removeData(this._element,a);this._element=null}
// Static
static _jQueryInterface(t,e){return this.each((function(){var i=o()(this);var n=i.data(a);if(!n){n=new C(this);i.data(a,n)}n.shouldAvoidTriggerChange=e;if("toggle"===t)n[t]()}))}}
/**
 * Data API implementation
 */o()(document).on(h,g,(t=>{var e=t.target;var i=e;if(!o()(e).hasClass(p))e=o()(e).closest(T)[0];if(!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();// work around Firefox bug #1540995
else{var n=e.querySelector(_);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled"))){t.preventDefault();// work around Firefox bug #1540995
return}if("INPUT"===i.tagName||"LABEL"!==e.tagName)C._jQueryInterface.call(o()(e),"toggle","INPUT"===i.tagName)}})).on(v,g,(t=>{var e=o()(t.target).closest(T)[0];o()(e).toggleClass(f,/^focus(in)?$/.test(t.type))}));o()(window).on(m,(()=>{
// ensure correct active class is set to match the controls' actual values/states
// find all checkboxes/readio buttons inside data-toggle groups
var t=[].slice.call(document.querySelectorAll(w));for(var e=0,i=t.length;e<i;e++){var n=t[e];var o=n.querySelector(_);if(o.checked||o.hasAttribute("checked"))n.classList.add(u);else n.classList.remove(u)}
// find all button toggles
for(var r=0,s=(t=[].slice.call(document.querySelectorAll(y))).length;r<s;r++){var a=t[r];if("true"===a.getAttribute("aria-pressed"))a.classList.add(u);else a.classList.remove(u)}}));
/**
 * jQuery
 */o().fn[r]=C._jQueryInterface;o().fn[r].Constructor=C;o().fn[r].noConflict=()=>{o().fn[r]=d;return C._jQueryInterface};
/* harmony default export */e.default=C;
/***/},
/***/"./node_modules/bootstrap/js/src/collapse.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/collapse.js ***!
  \***************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return(e=c(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){var e=d(t,"string");return"symbol"==typeof e?e:e+""}function d(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var u="collapse";var p="4.6.2";var f="bs.collapse";var h=".".concat(f);var v=".data-api";var m=o().fn[u];var g="show";var b="collapse";var y="collapsing";var w="collapsed";var _="width";var k="height";var T="show".concat(h);var C="shown".concat(h);var S="hide".concat(h);var x="hidden".concat(h);var E="click".concat(h).concat(v);var j=".show, .collapsing";var O='[data-toggle="collapse"]';var A={toggle:true,parent:""};var $={toggle:"boolean",parent:"(string|element)"};
/**
 * Class definition
 */class P{constructor(t,e){this._isTransitioning=false;this._element=t;this._config=this._getConfig(e);this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'.concat(t.id,'"],')+'[data-toggle="collapse"][data-target="#'.concat(t.id,'"]')));var i=[].slice.call(document.querySelectorAll(O));for(var n=0,o=i.length;n<o;n++){var s=i[n];var a=r.default.getSelectorFromElement(s);var l=[].slice.call(document.querySelectorAll(a)).filter((e=>e===t));if(null!==a&&l.length>0){this._selector=a;this._triggerArray.push(s)}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent)this._addAriaAndCollapsedClass(this._element,this._triggerArray);if(this._config.toggle)this.toggle()}
// Getters
static get VERSION(){return p}static get Default(){return A}
// Public
toggle(){if(o()(this._element).hasClass(g))this.hide();else this.show()}show(){if(this._isTransitioning||o()(this._element).hasClass(g))return;var t;var e;if(this._parent)if(0===(t=[].slice.call(this._parent.querySelectorAll(j)).filter((t=>{if("string"==typeof this._config.parent)return t.getAttribute("data-parent")===this._config.parent;return t.classList.contains(b)}))).length)t=null;if(t)if((e=o()(t).not(this._selector).data(f))&&e._isTransitioning)return;var i=o().Event(T);o()(this._element).trigger(i);if(i.isDefaultPrevented())return;if(t){P._jQueryInterface.call(o()(t).not(this._selector),"hide");if(!e)o()(t).data(f,null)}var n=this._getDimension();o()(this._element).removeClass(b).addClass(y);this._element.style[n]=0;if(this._triggerArray.length)o()(this._triggerArray).removeClass(w).attr("aria-expanded",true);this.setTransitioning(true);var s=()=>{o()(this._element).removeClass(y).addClass("".concat(b," ").concat(g));this._element.style[n]="";this.setTransitioning(false);o()(this._element).trigger(C)};var a=n[0].toUpperCase()+n.slice(1);var l="scroll".concat(a);var c=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,s).emulateTransitionEnd(c);this._element.style[n]="".concat(this._element[l],"px")}hide(){if(this._isTransitioning||!o()(this._element).hasClass(g))return;var t=o().Event(S);o()(this._element).trigger(t);if(t.isDefaultPrevented())return;var e=this._getDimension();this._element.style[e]="".concat(this._element.getBoundingClientRect()[e],"px");r.default.reflow(this._element);o()(this._element).addClass(y).removeClass("".concat(b," ").concat(g));var i=this._triggerArray.length;if(i>0)for(var n=0;n<i;n++){var s=this._triggerArray[n];var a=r.default.getSelectorFromElement(s);if(null!==a){if(!o()([].slice.call(document.querySelectorAll(a))).hasClass(g))o()(s).addClass(w).attr("aria-expanded",false)}}this.setTransitioning(true);var l=()=>{this.setTransitioning(false);o()(this._element).removeClass(y).addClass(b).trigger(x)};this._element.style[e]="";var c=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,l).emulateTransitionEnd(c)}setTransitioning(t){this._isTransitioning=t}dispose(){o().removeData(this._element,f);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null}
// Private
_getConfig(t){(t=a(a({},A),t)).toggle=Boolean(t.toggle);// Coerce string values
r.default.typeCheckConfig(u,t,$);return t}_getDimension(){return o()(this._element).hasClass(_)?_:k}_getParent(){var t;if(r.default.isElement(this._config.parent)){t=this._config.parent;
// It's a jQuery object
if(void 0!==this._config.parent.jquery)t=this._config.parent[0]}else t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'.concat(this._config.parent,'"]');var i=[].slice.call(t.querySelectorAll(e));o()(i).each(((t,e)=>{this._addAriaAndCollapsedClass(P._getTargetFromElement(e),[e])}));return t}_addAriaAndCollapsedClass(t,e){var i=o()(t).hasClass(g);if(e.length)o()(e).toggleClass(w,!i).attr("aria-expanded",i)}
// Static
static _getTargetFromElement(t){var e=r.default.getSelectorFromElement(t);return e?document.querySelector(e):null}static _jQueryInterface(t){return this.each((function(){var e=o()(this);var i=e.data(f);var n=a(a(a({},A),e.data()),"object"==typeof t&&t?t:{});if(!i&&n.toggle&&"string"==typeof t&&/show|hide/.test(t))n.toggle=false;if(!i){i=new P(this,n);e.data(f,i)}if("string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'.concat(t,'"'));i[t]()}}))}}
/**
 * Data API implementation
 */o()(document).on(E,O,(function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
if("A"===t.currentTarget.tagName)t.preventDefault();var e=o()(this);var i=r.default.getSelectorFromElement(this);var n=[].slice.call(document.querySelectorAll(i));o()(n).each((function(){var t=o()(this);var i=t.data(f)?"toggle":e.data();P._jQueryInterface.call(t,i)}))}));
/**
 * jQuery
 */o().fn[u]=P._jQueryInterface;o().fn[u].Constructor=P;o().fn[u].noConflict=()=>{o().fn[u]=m;return P._jQueryInterface};
/* harmony default export */e.default=P;
/***/},
/***/"./node_modules/bootstrap/js/src/dropdown.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/dropdown.js ***!
  \***************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var s=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return(e=d(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function d(t){var e=u(t,"string");return"symbol"==typeof e?e:e+""}function u(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var p="dropdown";var f="4.6.2";var h="bs.dropdown";var v=".".concat(h);var m=".data-api";var g=o().fn[p];var b=27;// KeyboardEvent.which value for Escape (Esc) key
var y=32;// KeyboardEvent.which value for space key
var w=9;// KeyboardEvent.which value for tab key
var _=38;// KeyboardEvent.which value for up arrow key
var k=40;// KeyboardEvent.which value for down arrow key
var T=3;// MouseEvent.which value for the right button (assuming a right-handed mouse)
var C=new RegExp("".concat(_,"|").concat(k,"|").concat(b));var S="disabled";var x="show";var E="dropup";var j="dropright";var O="dropleft";var A="dropdown-menu-right";var $="position-static";var P="hide".concat(v);var D="hidden".concat(v);var N="show".concat(v);var L="shown".concat(v);var I="click".concat(v);var z="click".concat(v).concat(m);var M="keydown".concat(v).concat(m);var F="keyup".concat(v).concat(m);var H='[data-toggle="dropdown"]';var q=".dropdown form";var W=".dropdown-menu";var R=".navbar-nav";var B=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";var U="top-start";var Q="top-end";var Y="bottom-start";var V="bottom-end";var X="right-start";var K="left-start";var G={offset:0,flip:true,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null};var Z={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"};
/**
 * Class definition
 */class J{constructor(t,e){this._element=t;this._popper=null;this._config=this._getConfig(e);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}
// Getters
static get VERSION(){return f}static get Default(){return G}static get DefaultType(){return Z}
// Public
toggle(){if(this._element.disabled||o()(this._element).hasClass(S))return;var t=o()(this._menu).hasClass(x);J._clearMenus();if(t)return;this.show(true)}show(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:false;if(this._element.disabled||o()(this._element).hasClass(S)||o()(this._menu).hasClass(x))return;var e={relatedTarget:this._element};var i=o().Event(N,e);var n=J._getParentFromElement(this._element);o()(n).trigger(i);if(i.isDefaultPrevented())return;
// Totally disable Popper for Dropdowns in Navbar
if(!this._inNavbar&&t){
// Check for Popper dependency
if(void 0===r.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var a=this._element;if("parent"===this._config.reference)a=n;else if(s.default.isElement(this._config.reference)){a=this._config.reference;
// Check if it's jQuery element
if(void 0!==this._config.reference.jquery)a=this._config.reference[0]}
// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
if("scrollParent"!==this._config.boundary)o()(n).addClass($);this._popper=new r.default(a,this._menu,this._getPopperConfig())}
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement&&0===o()(n).closest(R).length)o()(document.body).children().on("mouseover",null,o().noop);this._element.focus();this._element.setAttribute("aria-expanded",true);o()(this._menu).toggleClass(x);o()(n).toggleClass(x).trigger(o().Event(L,e))}hide(){if(this._element.disabled||o()(this._element).hasClass(S)||!o()(this._menu).hasClass(x))return;var t={relatedTarget:this._element};var e=o().Event(P,t);var i=J._getParentFromElement(this._element);o()(i).trigger(e);if(e.isDefaultPrevented())return;if(this._popper)this._popper.destroy();o()(this._menu).toggleClass(x);o()(i).toggleClass(x).trigger(o().Event(D,t))}dispose(){o().removeData(this._element,h);o()(this._element).off(v);this._element=null;this._menu=null;if(null!==this._popper){this._popper.destroy();this._popper=null}}update(){this._inNavbar=this._detectNavbar();if(null!==this._popper)this._popper.scheduleUpdate()}
// Private
_addEventListeners(){o()(this._element).on(I,(t=>{t.preventDefault();t.stopPropagation();this.toggle()}))}_getConfig(t){t=l(l(l({},this.constructor.Default),o()(this._element).data()),t);s.default.typeCheckConfig(p,t,this.constructor.DefaultType);return t}_getMenuElement(){if(!this._menu){var t=J._getParentFromElement(this._element);if(t)this._menu=t.querySelector(W)}return this._menu}_getPlacement(){var t=o()(this._element.parentNode);var e=Y;
// Handle dropup
if(t.hasClass(E))e=o()(this._menu).hasClass(A)?Q:U;else if(t.hasClass(j))e=X;else if(t.hasClass(O))e=K;else if(o()(this._menu).hasClass(A))e=V;return e}_detectNavbar(){return o()(this._element).closest(".navbar").length>0}_getOffset(){var t={};if("function"==typeof this._config.offset)t.fn=t=>{t.offsets=l(l({},t.offsets),this._config.offset(t.offsets,this._element));return t};else t.offset=this._config.offset;return t}_getPopperConfig(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};
// Disable Popper if we have a static display
if("static"===this._config.display)t.modifiers.applyStyle={enabled:false};return l(l({},t),this._config.popperConfig)}
// Static
static _jQueryInterface(t){return this.each((function(){var e=o()(this).data(h);if(!e){e=new J(this,"object"==typeof t?t:null);o()(this).data(h,e)}if("string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'.concat(t,'"'));e[t]()}}))}static _clearMenus(t){if(t&&(t.which===T||"keyup"===t.type&&t.which!==w))return;var e=[].slice.call(document.querySelectorAll(H));for(var i=0,n=e.length;i<n;i++){var r=J._getParentFromElement(e[i]);var s=o()(e[i]).data(h);var a={relatedTarget:e[i]};if(t&&"click"===t.type)a.clickEvent=t;if(!s)continue;var l=s._menu;if(!o()(r).hasClass(x))continue;if(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&t.which===w)&&o().contains(r,t.target))continue;var c=o().Event(P,a);o()(r).trigger(c);if(c.isDefaultPrevented())continue;
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)o()(document.body).children().off("mouseover",null,o().noop);e[i].setAttribute("aria-expanded","false");if(s._popper)s._popper.destroy();o()(l).removeClass(x);o()(r).removeClass(x).trigger(o().Event(D,a))}}static _getParentFromElement(t){var e;var i=s.default.getSelectorFromElement(t);if(i)e=document.querySelector(i);return e||t.parentNode}
// eslint-disable-next-line complexity
static _dataApiKeydownHandler(t){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(t.target.tagName)?t.which===y||t.which!==b&&(t.which!==k&&t.which!==_||o()(t.target).closest(W).length):!C.test(t.which))return;if(this.disabled||o()(this).hasClass(S))return;var e=J._getParentFromElement(this);var i=o()(e).hasClass(x);if(!i&&t.which===b)return;t.preventDefault();t.stopPropagation();if(!i||t.which===b||t.which===y){if(t.which===b)o()(e.querySelector(H)).trigger("focus");o()(this).trigger("click");return}var n=[].slice.call(e.querySelectorAll(B)).filter((t=>o()(t).is(":visible")));if(0===n.length)return;var r=n.indexOf(t.target);if(t.which===_&&r>0)
// Up
r--;if(t.which===k&&r<n.length-1)
// Down
r++;if(r<0)r=0;n[r].focus()}}
/**
 * Data API implementation
 */o()(document).on(M,H,J._dataApiKeydownHandler).on(M,W,J._dataApiKeydownHandler).on("".concat(z," ").concat(F),J._clearMenus).on(z,H,(function(t){t.preventDefault();t.stopPropagation();J._jQueryInterface.call(o()(this),"toggle")})).on(z,q,(t=>{t.stopPropagation()}));
/**
 * jQuery
 */o().fn[p]=J._jQueryInterface;o().fn[p].Constructor=J;o().fn[p].noConflict=()=>{o().fn[p]=g;return J._jQueryInterface};
/* harmony default export */e.default=J;
/***/},
/***/"./node_modules/bootstrap/js/src/modal.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/modal.js ***!
  \************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return(e=c(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){var e=d(t,"string");return"symbol"==typeof e?e:e+""}function d(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var u="modal";var p="4.6.2";var f="bs.modal";var h=".".concat(f);var v=".data-api";var m=o().fn[u];var g=27;// KeyboardEvent.which value for Escape (Esc) key
var b="modal-dialog-scrollable";var y="modal-scrollbar-measure";var w="modal-backdrop";var _="modal-open";var k="fade";var T="show";var C="modal-static";var S="hide".concat(h);var x="hidePrevented".concat(h);var E="hidden".concat(h);var j="show".concat(h);var O="shown".concat(h);var A="focusin".concat(h);var $="resize".concat(h);var P="click.dismiss".concat(h);var D="keydown.dismiss".concat(h);var N="mouseup.dismiss".concat(h);var L="mousedown.dismiss".concat(h);var I="click".concat(h).concat(v);var z=".modal-dialog";var M=".modal-body";var F='[data-toggle="modal"]';var H='[data-dismiss="modal"]';var q=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";var W=".sticky-top";var R={backdrop:true,keyboard:true,focus:true,show:true};var B={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"};
/**
 * Class definition
 */class U{constructor(t,e){this._config=this._getConfig(e);this._element=t;this._dialog=t.querySelector(z);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0}
// Getters
static get VERSION(){return p}static get Default(){return R}
// Public
toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;var e=o().Event(j,{relatedTarget:t});o()(this._element).trigger(e);if(e.isDefaultPrevented())return;this._isShown=true;if(o()(this._element).hasClass(k))this._isTransitioning=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();o()(this._element).on(P,H,(t=>this.hide(t)));o()(this._dialog).on(L,(()=>{o()(this._element).one(N,(t=>{if(o()(t.target).is(this._element))this._ignoreBackdropClick=true}))}));this._showBackdrop((()=>this._showElement(t)))}hide(t){if(t)t.preventDefault();if(!this._isShown||this._isTransitioning)return;var e=o().Event(S);o()(this._element).trigger(e);if(!this._isShown||e.isDefaultPrevented())return;this._isShown=false;var i=o()(this._element).hasClass(k);if(i)this._isTransitioning=true;this._setEscapeEvent();this._setResizeEvent();o()(document).off(A);o()(this._element).removeClass(T);o()(this._element).off(P);o()(this._dialog).off(L);if(i){var n=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,(t=>this._hideModal(t))).emulateTransitionEnd(n)}else this._hideModal()}dispose(){[window,this._element,this._dialog].forEach((t=>o()(t).off(h)));
/**
     * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `EVENT_CLICK_DATA_API` event that should remain
     */o()(document).off(A);o().removeData(this._element,f);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null}handleUpdate(){this._adjustDialog()}
// Private
_getConfig(t){t=a(a({},R),t);r.default.typeCheckConfig(u,t,B);return t}_triggerBackdropTransition(){var t=o().Event(x);o()(this._element).trigger(t);if(t.isDefaultPrevented())return;var e=this._element.scrollHeight>document.documentElement.clientHeight;if(!e)this._element.style.overflowY="hidden";this._element.classList.add(C);var i=r.default.getTransitionDurationFromElement(this._dialog);o()(this._element).off(r.default.TRANSITION_END);o()(this._element).one(r.default.TRANSITION_END,(()=>{this._element.classList.remove(C);if(!e)o()(this._element).one(r.default.TRANSITION_END,(()=>{this._element.style.overflowY=""})).emulateTransitionEnd(this._element,i)})).emulateTransitionEnd(i);this._element.focus()}_showElement(t){var e=o()(this._element).hasClass(k);var i=this._dialog?this._dialog.querySelector(M):null;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)
// Don't move modal's DOM position
document.body.appendChild(this._element);this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");if(o()(this._dialog).hasClass(b)&&i)i.scrollTop=0;else this._element.scrollTop=0;if(e)r.default.reflow(this._element);o()(this._element).addClass(T);if(this._config.focus)this._enforceFocus();var n=o().Event(O,{relatedTarget:t});var s=()=>{if(this._config.focus)this._element.focus();this._isTransitioning=false;o()(this._element).trigger(n)};if(e){var a=r.default.getTransitionDurationFromElement(this._dialog);o()(this._dialog).one(r.default.TRANSITION_END,s).emulateTransitionEnd(a)}else s()}_enforceFocus(){o()(document).off(A).on(A,(t=>{if(document!==t.target&&this._element!==t.target&&0===o()(this._element).has(t.target).length)this._element.focus()}))}_setEscapeEvent(){if(this._isShown)o()(this._element).on(D,(t=>{if(this._config.keyboard&&t.which===g){t.preventDefault();this.hide()}else if(!this._config.keyboard&&t.which===g)this._triggerBackdropTransition()}));else if(!this._isShown)o()(this._element).off(D)}_setResizeEvent(){if(this._isShown)o()(window).on($,(t=>this.handleUpdate(t)));else o()(window).off($)}_hideModal(){this._element.style.display="none";this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");this._isTransitioning=false;this._showBackdrop((()=>{o()(document.body).removeClass(_);this._resetAdjustments();this._resetScrollbar();o()(this._element).trigger(E)}))}_removeBackdrop(){if(this._backdrop){o()(this._backdrop).remove();this._backdrop=null}}_showBackdrop(t){var e=o()(this._element).hasClass(k)?k:"";if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement("div");this._backdrop.className=w;if(e)this._backdrop.classList.add(e);o()(this._backdrop).appendTo(document.body);o()(this._element).on(P,(t=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=false;return}if(t.target!==t.currentTarget)return;if("static"===this._config.backdrop)this._triggerBackdropTransition();else this.hide()}));if(e)r.default.reflow(this._backdrop);o()(this._backdrop).addClass(T);if(!t)return;if(!e){t();return}var i=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){o()(this._backdrop).removeClass(T);var n=()=>{this._removeBackdrop();if(t)t()};if(o()(this._element).hasClass(k)){var s=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,n).emulateTransitionEnd(s)}else n()}else if(t)t()}
// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
_adjustDialog(){var t=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&t)this._element.style.paddingLeft="".concat(this._scrollbarWidth,"px");if(this._isBodyOverflowing&&!t)this._element.style.paddingRight="".concat(this._scrollbarWidth,"px")}_resetAdjustments(){this._element.style.paddingLeft="";this._element.style.paddingRight=""}_checkScrollbar(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth()}_setScrollbar(){if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var t=[].slice.call(document.querySelectorAll(q));var e=[].slice.call(document.querySelectorAll(W));
// Adjust fixed content padding
o()(t).each(((t,e)=>{var i=e.style.paddingRight;var n=o()(e).css("padding-right");o()(e).data("padding-right",i).css("padding-right","".concat(parseFloat(n)+this._scrollbarWidth,"px"))}));
// Adjust sticky content margin
o()(e).each(((t,e)=>{var i=e.style.marginRight;var n=o()(e).css("margin-right");o()(e).data("margin-right",i).css("margin-right","".concat(parseFloat(n)-this._scrollbarWidth,"px"))}));
// Adjust body padding
var i=document.body.style.paddingRight;var n=o()(document.body).css("padding-right");o()(document.body).data("padding-right",i).css("padding-right","".concat(parseFloat(n)+this._scrollbarWidth,"px"))}o()(document.body).addClass(_)}_resetScrollbar(){
// Restore fixed content padding
var t=[].slice.call(document.querySelectorAll(q));o()(t).each(((t,e)=>{var i=o()(e).data("padding-right");o()(e).removeData("padding-right");e.style.paddingRight=i?i:""}));
// Restore sticky content
var e=[].slice.call(document.querySelectorAll("".concat(W)));o()(e).each(((t,e)=>{var i=o()(e).data("margin-right");if(void 0!==i)o()(e).css("margin-right",i).removeData("margin-right")}));
// Restore body padding
var i=o()(document.body).data("padding-right");o()(document.body).removeData("padding-right");document.body.style.paddingRight=i?i:""}_getScrollbarWidth(){
// thx d.walsh
var t=document.createElement("div");t.className=y;document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;document.body.removeChild(t);return e}
// Static
static _jQueryInterface(t,e){return this.each((function(){var i=o()(this).data(f);var n=a(a(a({},R),o()(this).data()),"object"==typeof t&&t?t:{});if(!i){i=new U(this,n);o()(this).data(f,i)}if("string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'.concat(t,'"'));i[t](e)}else if(n.show)i.show(e)}))}}
/**
 * Data API implementation
 */o()(document).on(I,F,(function(t){var e;var i=r.default.getSelectorFromElement(this);if(i)e=document.querySelector(i);var n=o()(e).data(f)?"toggle":a(a({},o()(e).data()),o()(this).data());if("A"===this.tagName||"AREA"===this.tagName)t.preventDefault();var s=o()(e).one(j,(t=>{if(t.isDefaultPrevented())
// Only register focus restorer if modal will actually get shown
return;s.one(E,(()=>{if(o()(this).is(":visible"))this.focus()}))}));U._jQueryInterface.call(o()(e),n,this)}));
/**
 * jQuery
 */o().fn[u]=U._jQueryInterface;o().fn[u].Constructor=U;o().fn[u].noConflict=()=>{o().fn[u]=m;return U._jQueryInterface};
/* harmony default export */e.default=U;
/***/},
/***/"./node_modules/bootstrap/js/src/popover.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/popover.js ***!
  \**************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./tooltip */"./node_modules/bootstrap/js/src/tooltip.js");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return(e=c(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){var e=d(t,"string");return"symbol"==typeof e?e:e+""}function d(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var u="popover";var p="4.6.2";var f="bs.popover";var h=".".concat(f);var v=o().fn[u];var m="bs-popover";var g=new RegExp("(^|\\s)".concat(m,"\\S+"),"g");var b="fade";var y="show";var w=".popover-header";var _=".popover-body";var k=a(a({},r.default.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'});var T=a(a({},r.default.DefaultType),{},{content:"(string|element|function)"});var C={HIDE:"hide".concat(h),HIDDEN:"hidden".concat(h),SHOW:"show".concat(h),SHOWN:"shown".concat(h),INSERTED:"inserted".concat(h),CLICK:"click".concat(h),FOCUSIN:"focusin".concat(h),FOCUSOUT:"focusout".concat(h),MOUSEENTER:"mouseenter".concat(h),MOUSELEAVE:"mouseleave".concat(h)};
/**
 * Class definition
 */class S extends r.default{
// Getters
static get VERSION(){return p}static get Default(){return k}static get NAME(){return u}static get DATA_KEY(){return f}static get Event(){return C}static get EVENT_KEY(){return h}static get DefaultType(){return T}
// Overrides
isWithContent(){return this.getTitle()||this._getContent()}addAttachmentClass(t){o()(this.getTipElement()).addClass("".concat(m,"-").concat(t))}getTipElement(){this.tip=this.tip||o()(this.config.template)[0];return this.tip}setContent(){var t=o()(this.getTipElement());
// We use append for html objects to maintain js events
this.setElementContent(t.find(w),this.getTitle());var e=this._getContent();if("function"==typeof e)e=e.call(this.element);this.setElementContent(t.find(_),e);t.removeClass("".concat(b," ").concat(y))}
// Private
_getContent(){return this.element.getAttribute("data-content")||this.config.content}_cleanTipClass(){var t=o()(this.getTipElement());var e=t.attr("class").match(g);if(null!==e&&e.length>0)t.removeClass(e.join(""))}
// Static
static _jQueryInterface(t){return this.each((function(){var e=o()(this).data(f);var i="object"==typeof t?t:null;if(!e&&/dispose|hide/.test(t))return;if(!e){e=new S(this,i);o()(this).data(f,e)}if("string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'.concat(t,'"'));e[t]()}}))}}
/**
 * jQuery
 */o().fn[u]=S._jQueryInterface;o().fn[u].Constructor=S;o().fn[u].noConflict=()=>{o().fn[u]=v;return S._jQueryInterface};
/* harmony default export */e.default=S;
/***/},
/***/"./node_modules/bootstrap/js/src/tab.js":
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/src/tab.js ***!
  \**********************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var s="tab";var a="4.6.2";var l="bs.tab";var c=".".concat(l);var d=".data-api";var u=o().fn[s];var p="dropdown-menu";var f="active";var h="disabled";var v="fade";var m="show";var g="hide".concat(c);var b="hidden".concat(c);var y="show".concat(c);var w="shown".concat(c);var _="click".concat(c).concat(d);var k=".dropdown";var T=".nav, .list-group";var C=".active";var S="> li > .active";var x='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';var E=".dropdown-toggle";var j="> .dropdown-menu .active";
/**
 * Class definition
 */class O{constructor(t){this._element=t}
// Getters
static get VERSION(){return a}
// Public
show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o()(this._element).hasClass(f)||o()(this._element).hasClass(h)||this._element.hasAttribute("disabled"))return;var t;var e;var i=o()(this._element).closest(T)[0];var n=r.default.getSelectorFromElement(this._element);if(i){var s="UL"===i.nodeName||"OL"===i.nodeName?S:C;e=(e=o().makeArray(o()(i).find(s)))[e.length-1]}var a=o().Event(g,{relatedTarget:this._element});var l=o().Event(y,{relatedTarget:e});if(e)o()(e).trigger(a);o()(this._element).trigger(l);if(l.isDefaultPrevented()||a.isDefaultPrevented())return;if(n)t=document.querySelector(n);this._activate(this._element,i);var c=()=>{var t=o().Event(b,{relatedTarget:this._element});var i=o().Event(w,{relatedTarget:e});o()(e).trigger(t);o()(this._element).trigger(i)};if(t)this._activate(t,t.parentNode,c);else c()}dispose(){o().removeData(this._element,l);this._element=null}
// Private
_activate(t,e,i){var n=(e&&("UL"===e.nodeName||"OL"===e.nodeName)?o()(e).find(S):o()(e).children(C))[0];var s=i&&n&&o()(n).hasClass(v);var a=()=>this._transitionComplete(t,n,i);if(n&&s){var l=r.default.getTransitionDurationFromElement(n);o()(n).removeClass(m).one(r.default.TRANSITION_END,a).emulateTransitionEnd(l)}else a()}_transitionComplete(t,e,i){if(e){o()(e).removeClass(f);var n=o()(e.parentNode).find(j)[0];if(n)o()(n).removeClass(f);if("tab"===e.getAttribute("role"))e.setAttribute("aria-selected",false)}o()(t).addClass(f);if("tab"===t.getAttribute("role"))t.setAttribute("aria-selected",true);r.default.reflow(t);if(t.classList.contains(v))t.classList.add(m);var s=t.parentNode;if(s&&"LI"===s.nodeName)s=s.parentNode;if(s&&o()(s).hasClass(p)){var a=o()(t).closest(k)[0];if(a){var l=[].slice.call(a.querySelectorAll(E));o()(l).addClass(f)}t.setAttribute("aria-expanded",true)}if(i)i()}
// Static
static _jQueryInterface(t){return this.each((function(){var e=o()(this);var i=e.data(l);if(!i){i=new O(this);e.data(l,i)}if("string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'.concat(t,'"'));i[t]()}}))}}
/**
 * Data API implementation
 */o()(document).on(_,x,(function(t){t.preventDefault();O._jQueryInterface.call(o()(this),"show")}));
/**
 * jQuery
 */o().fn[s]=O._jQueryInterface;o().fn[s].Constructor=O;o().fn[s].noConflict=()=>{o().fn[s]=u;return O._jQueryInterface};
/* harmony default export */e.default=O;
/***/},
/***/"./node_modules/bootstrap/js/src/toast.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/toast.js ***!
  \************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return(e=c(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){var e=d(t,"string");return"symbol"==typeof e?e:e+""}function d(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var u="toast";var p="4.6.2";var f="bs.toast";var h=".".concat(f);var v=o().fn[u];var m="fade";var g="hide";var b="show";var y="showing";var w="click.dismiss".concat(h);var _="hide".concat(h);var k="hidden".concat(h);var T="show".concat(h);var C="shown".concat(h);var S='[data-dismiss="toast"]';var x={animation:true,autohide:true,delay:500};var E={animation:"boolean",autohide:"boolean",delay:"number"};
/**
 * Class definition
 */class j{constructor(t,e){this._element=t;this._config=this._getConfig(e);this._timeout=null;this._setListeners()}
// Getters
static get VERSION(){return p}static get DefaultType(){return E}static get Default(){return x}
// Public
show(){var t=o().Event(T);o()(this._element).trigger(t);if(t.isDefaultPrevented())return;this._clearTimeout();if(this._config.animation)this._element.classList.add(m);var e=()=>{this._element.classList.remove(y);this._element.classList.add(b);o()(this._element).trigger(C);if(this._config.autohide)this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)};this._element.classList.remove(g);r.default.reflow(this._element);this._element.classList.add(y);if(this._config.animation){var i=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,e).emulateTransitionEnd(i)}else e()}hide(){if(!this._element.classList.contains(b))return;var t=o().Event(_);o()(this._element).trigger(t);if(t.isDefaultPrevented())return;this._close()}dispose(){this._clearTimeout();if(this._element.classList.contains(b))this._element.classList.remove(b);o()(this._element).off(w);o().removeData(this._element,f);this._element=null;this._config=null}
// Private
_getConfig(t){t=a(a(a({},x),o()(this._element).data()),"object"==typeof t&&t?t:{});r.default.typeCheckConfig(u,t,this.constructor.DefaultType);return t}_setListeners(){o()(this._element).on(w,S,(()=>this.hide()))}_close(){var t=()=>{this._element.classList.add(g);o()(this._element).trigger(k)};this._element.classList.remove(b);if(this._config.animation){var e=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,t).emulateTransitionEnd(e)}else t()}_clearTimeout(){clearTimeout(this._timeout);this._timeout=null}
// Static
static _jQueryInterface(t){return this.each((function(){var e=o()(this);var i=e.data(f);if(!i){i=new j(this,"object"==typeof t&&t);e.data(f,i)}if("string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'.concat(t,'"'));i[t](this)}}))}}
/**
 * jQuery
 */o().fn[u]=j._jQueryInterface;o().fn[u].Constructor=j;o().fn[u].noConflict=()=>{o().fn[u]=v;return j._jQueryInterface};
/* harmony default export */e.default=j;
/***/},
/***/"./node_modules/bootstrap/js/src/tools/sanitizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tools/sanitizer.js ***!
  \**********************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony export */i.d(e,{
/* harmony export */DefaultWhitelist:function(){/* binding */return o},
/* harmony export */sanitizeHtml:function(){/* binding */return l}
/* harmony export */});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tools/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */var n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"];var o={
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
 */var s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function a(t,e){var i=t.nodeName.toLowerCase();if(-1!==e.indexOf(i)){if(-1!==n.indexOf(i))return Boolean(r.test(t.nodeValue)||s.test(t.nodeValue));return true}var o=e.filter((t=>t instanceof RegExp));
// Check if a regular expression validates the attribute.
for(var a=0,l=o.length;a<l;a++)if(o[a].test(i))return true;return false}function l(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);var n=(new window.DOMParser).parseFromString(t,"text/html");var o=Object.keys(e);var r=[].slice.call(n.body.querySelectorAll("*"));var s=function t(){var i=r[l];var n=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase())){i.parentNode.removeChild(i);return 1;// continue
}var s=[].slice.call(i.attributes);
// eslint-disable-next-line unicorn/prefer-spread
var c=[].concat(e["*"]||[],e[n]||[]);s.forEach((t=>{if(!a(t,c))i.removeAttribute(t.nodeName)}))};for(var l=0,c=r.length;l<c;l++)if(s())continue;return n.body.innerHTML}
/***/},
/***/"./node_modules/bootstrap/js/src/tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tooltip.js ***!
  \**************************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! ./tools/sanitizer */"./node_modules/bootstrap/js/src/tools/sanitizer.js");
/* harmony import */var o=i(/*! jquery */"jquery");
/* harmony import */var r=i.n(o);
/* harmony import */var s=i(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var a=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return(e=u(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t){var e=p(t,"string");return"symbol"==typeof e?e:e+""}function p(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var f="tooltip";var h="4.6.2";var v="bs.tooltip";var m=".".concat(v);var g=r().fn[f];var b="bs-tooltip";var y=new RegExp("(^|\\s)".concat(b,"\\S+"),"g");var w=["sanitize","whiteList","sanitizeFn"];var _="fade";var k="show";var T="show";var C="out";var S=".tooltip-inner";var x=".arrow";var E="hover";var j="focus";var O="click";var A="manual";var $={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"};var P={animation:true,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,selector:false,placement:"top",offset:0,container:false,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:true,sanitizeFn:null,whiteList:n.DefaultWhitelist,popperConfig:null};var D={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"};var N={HIDE:"hide".concat(m),HIDDEN:"hidden".concat(m),SHOW:"show".concat(m),SHOWN:"shown".concat(m),INSERTED:"inserted".concat(m),CLICK:"click".concat(m),FOCUSIN:"focusin".concat(m),FOCUSOUT:"focusout".concat(m),MOUSEENTER:"mouseenter".concat(m),MOUSELEAVE:"mouseleave".concat(m)};
/**
 * Class definition
 */class L{constructor(t,e){if(void 0===s.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
// Private
this._isEnabled=true;this._timeout=0;this._hoverState="";this._activeTrigger={};this._popper=null;
// Protected
this.element=t;this.config=this._getConfig(e);this.tip=null;this._setListeners()}
// Getters
static get VERSION(){return h}static get Default(){return P}static get NAME(){return f}static get DATA_KEY(){return v}static get Event(){return N}static get EVENT_KEY(){return m}static get DefaultType(){return D}
// Public
enable(){this._isEnabled=true}disable(){this._isEnabled=false}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(!this._isEnabled)return;if(t){var e=this.constructor.DATA_KEY;var i=r()(t.currentTarget).data(e);if(!i){i=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(e,i)}i._activeTrigger.click=!i._activeTrigger.click;if(i._isWithActiveTrigger())i._enter(null,i);else i._leave(null,i)}else{if(r()(this.getTipElement()).hasClass(k)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout);r().removeData(this.element,this.constructor.DATA_KEY);r()(this.element).off(this.constructor.EVENT_KEY);r()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler);if(this.tip)r()(this.tip).remove();this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper)this._popper.destroy();this._popper=null;this.element=null;this.config=null;this.tip=null}show(){if("none"===r()(this.element).css("display"))throw new Error("Please use show on visible elements");var t=r().Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){r()(this.element).trigger(t);var e=a.default.findShadowRoot(this.element);var i=r().contains(null!==e?e:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var n=this.getTipElement();var o=a.default.getUID(this.constructor.NAME);n.setAttribute("id",o);this.element.setAttribute("aria-describedby",o);this.setContent();if(this.config.animation)r()(n).addClass(_);var l="function"==typeof this.config.placement?this.config.placement.call(this,n,this.element):this.config.placement;var c=this._getAttachment(l);this.addAttachmentClass(c);var d=this._getContainer();r()(n).data(this.constructor.DATA_KEY,this);if(!r().contains(this.element.ownerDocument.documentElement,this.tip))r()(n).appendTo(d);r()(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new s.default(this.element,n,this._getPopperConfig(c));r()(n).addClass(k);r()(n).addClass(this.config.customClass);
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement)r()(document.body).children().on("mouseover",null,r().noop);var u=()=>{if(this.config.animation)this._fixTransition();var t=this._hoverState;this._hoverState=null;r()(this.element).trigger(this.constructor.Event.SHOWN);if(t===C)this._leave(null,this)};if(r()(this.tip).hasClass(_)){var p=a.default.getTransitionDurationFromElement(this.tip);r()(this.tip).one(a.default.TRANSITION_END,u).emulateTransitionEnd(p)}else u()}}hide(t){var e=this.getTipElement();var i=r().Event(this.constructor.Event.HIDE);var n=()=>{if(this._hoverState!==T&&e.parentNode)e.parentNode.removeChild(e);this._cleanTipClass();this.element.removeAttribute("aria-describedby");r()(this.element).trigger(this.constructor.Event.HIDDEN);if(null!==this._popper)this._popper.destroy();if(t)t()};r()(this.element).trigger(i);if(i.isDefaultPrevented())return;r()(e).removeClass(k);
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)r()(document.body).children().off("mouseover",null,r().noop);this._activeTrigger[O]=false;this._activeTrigger[j]=false;this._activeTrigger[E]=false;if(r()(this.tip).hasClass(_)){var o=a.default.getTransitionDurationFromElement(e);r()(e).one(a.default.TRANSITION_END,n).emulateTransitionEnd(o)}else n();this._hoverState=""}update(){if(null!==this._popper)this._popper.scheduleUpdate()}
// Protected
isWithContent(){return Boolean(this.getTitle())}addAttachmentClass(t){r()(this.getTipElement()).addClass("".concat(b,"-").concat(t))}getTipElement(){this.tip=this.tip||r()(this.config.template)[0];return this.tip}setContent(){var t=this.getTipElement();this.setElementContent(r()(t.querySelectorAll(S)),this.getTitle());r()(t).removeClass("".concat(_," ").concat(k))}setElementContent(t,e){if("object"==typeof e&&(e.nodeType||e.jquery)){
// Content is a DOM node or a jQuery
if(this.config.html){if(!r()(e).parent().is(t))t.empty().append(e)}else t.text(r()(e).text());return}if(this.config.html){if(this.config.sanitize)e=(0,n.sanitizeHtml)(e,this.config.whiteList,this.config.sanitizeFn);t.html(e)}else t.text(e)}getTitle(){var t=this.element.getAttribute("data-original-title");if(!t)t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title;return t}
// Private
_getPopperConfig(t){return c(c({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:x},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:t=>{if(t.originalPlacement!==t.placement)this._handlePopperPlacementChange(t)},onUpdate:t=>this._handlePopperPlacementChange(t)}),this.config.popperConfig)}_getOffset(){var t={};if("function"==typeof this.config.offset)t.fn=t=>{t.offsets=c(c({},t.offsets),this.config.offset(t.offsets,this.element));return t};else t.offset=this.config.offset;return t}_getContainer(){if(false===this.config.container)return document.body;if(a.default.isElement(this.config.container))return r()(this.config.container);return r()(document).find(this.config.container)}_getAttachment(t){return $[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach((t=>{if("click"===t)r()(this.element).on(this.constructor.Event.CLICK,this.config.selector,(t=>this.toggle(t)));else if(t!==A){var e=t===E?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN;var i=t===E?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;r()(this.element).on(e,this.config.selector,(t=>this._enter(t))).on(i,this.config.selector,(t=>this._leave(t)))}}));this._hideModalHandler=()=>{if(this.element)this.hide()};r()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler);if(this.config.selector)this.config=c(c({},this.config),{},{trigger:"manual",selector:""});else this._fixTitle()}_fixTitle(){var t=typeof this.element.getAttribute("data-original-title");if(this.element.getAttribute("title")||"string"!==t){this.element.setAttribute("data-original-title",this.element.getAttribute("title")||"");this.element.setAttribute("title","")}}_enter(t,e){var i=this.constructor.DATA_KEY;if(!(e=e||r()(t.currentTarget).data(i))){e=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(i,e)}if(t)e._activeTrigger["focusin"===t.type?j:E]=true;if(r()(e.getTipElement()).hasClass(k)||e._hoverState===T){e._hoverState=T;return}clearTimeout(e._timeout);e._hoverState=T;if(!e.config.delay||!e.config.delay.show){e.show();return}e._timeout=setTimeout((()=>{if(e._hoverState===T)e.show()}),e.config.delay.show)}_leave(t,e){var i=this.constructor.DATA_KEY;if(!(e=e||r()(t.currentTarget).data(i))){e=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(i,e)}if(t)e._activeTrigger["focusout"===t.type?j:E]=false;if(e._isWithActiveTrigger())return;clearTimeout(e._timeout);e._hoverState=C;if(!e.config.delay||!e.config.delay.hide){e.hide();return}e._timeout=setTimeout((()=>{if(e._hoverState===C)e.hide()}),e.config.delay.hide)}_isWithActiveTrigger(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return true;return false}_getConfig(t){var e=r()(this.element).data();Object.keys(e).forEach((t=>{if(-1!==w.indexOf(t))delete e[t]}));if("number"==typeof(t=c(c(c({},this.constructor.Default),e),"object"==typeof t&&t?t:{})).delay)t.delay={show:t.delay,hide:t.delay};if("number"==typeof t.title)t.title=t.title.toString();if("number"==typeof t.content)t.content=t.content.toString();a.default.typeCheckConfig(f,t,this.constructor.DefaultType);if(t.sanitize)t.template=(0,n.sanitizeHtml)(t.template,t.whiteList,t.sanitizeFn);return t}_getDelegateConfig(){var t={};if(this.config)for(var e in this.config)if(this.constructor.Default[e]!==this.config[e])t[e]=this.config[e];return t}_cleanTipClass(){var t=r()(this.getTipElement());var e=t.attr("class").match(y);if(null!==e&&e.length)t.removeClass(e.join(""))}_handlePopperPlacementChange(t){this.tip=t.instance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(t.placement))}_fixTransition(){var t=this.getTipElement();var e=this.config.animation;if(null!==t.getAttribute("x-placement"))return;r()(t).removeClass(_);this.config.animation=false;this.hide();this.show();this.config.animation=e}
// Static
static _jQueryInterface(t){return this.each((function(){var e=r()(this);var i=e.data(v);var n="object"==typeof t&&t;if(!i&&/dispose|hide/.test(t))return;if(!i){i=new L(this,n);e.data(v,i)}if("string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'.concat(t,'"'));i[t]()}}))}}
/**
 * jQuery
 */r().fn[f]=L._jQueryInterface;r().fn[f].Constructor=L;r().fn[f].noConflict=()=>{r().fn[f]=g;return L._jQueryInterface};
/* harmony default export */e.default=L;
/***/},
/***/"./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/***/function(t,e,i){"use strict";i.r(e);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
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
function l(t){if(null==t)return"".concat(t);return{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()}function c(){return{bindType:r,delegateType:r,handle(t){if(o()(t.target).is(this))return t.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
return}}}function d(t){var e=false;o()(this).one(p.TRANSITION_END,(()=>{e=true}));setTimeout((()=>{if(!e)p.triggerTransitionEnd(this)}),t);return this}function u(){o().fn.emulateTransitionEnd=d;o().event.special[p.TRANSITION_END]=c()}
/**
 * Public Util API
 */var p={TRANSITION_END:"bsTransitionEnd",getUID(t){do{
// eslint-disable-next-line no-bitwise
t+=~~(Math.random()*s);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(t));return t},getSelectorFromElement(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var i=t.getAttribute("href");e=i&&"#"!==i?i.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement(t){if(!t)return 0;
// Get transition-duration of the element
var e=o()(t).css("transition-duration");var i=o()(t).css("transition-delay");var n=parseFloat(e);var r=parseFloat(i);
// Return 0 if element or transition duration is not found
if(!n&&!r)return 0;
// If multiple durations are defined, take the first
e=e.split(",")[0];i=i.split(",")[0];return(parseFloat(e)+parseFloat(i))*a},reflow(t){return t.offsetHeight},triggerTransitionEnd(t){o()(t).trigger(r)},supportsTransitionEnd(){return Boolean(r)},isElement(t){return(t[0]||t).nodeType},typeCheckConfig(t,e,i){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var o=i[n];var r=e[n];var s=r&&p.isElement(r)?"element":l(r);if(!new RegExp(o).test(s))throw new Error("".concat(t.toUpperCase(),": ")+'Option "'.concat(n,'" provided type "').concat(s,'" ')+'but expected type "'.concat(o,'".'))}},findShadowRoot(t){if(!document.documentElement.attachShadow)return null;
// Can find the shadow root otherwise it'll return the document
if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}if(t instanceof ShadowRoot)return t;
// when we don't find a shadow root
if(!t.parentNode)return null;return p.findShadowRoot(t.parentNode)},jQueryDetection(){if(void 0===o())throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=o().fn.jquery.split(" ")[0].split(".");var e=1;var i=2;var n=9;var r=1;var s=4;if(t[0]<i&&t[1]<n||t[0]===e&&t[1]===n&&t[2]<r||t[0]>=s)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};p.jQueryDetection();u();
/* harmony default export */e.default=p;
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
var e="object"==typeof Reflect?Reflect:null;var i=e&&"function"==typeof e.apply?e.apply:function t(e,i,n){return Function.prototype.apply.call(e,i,n)};var n;if(e&&"function"==typeof e.ownKeys)n=e.ownKeys;else if(Object.getOwnPropertySymbols)n=function t(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))};else n=function t(e){return Object.getOwnPropertyNames(e)};function o(t){if(console&&console.warn)console.warn(t)}var r=Number.isNaN||function t(e){return e!=e};function s(){s.init.call(this)}t.exports=s;t.exports.once=b;
// Backwards-compat with node 0.10.x
s.EventEmitter=s;s.prototype._events=void 0;s.prototype._eventsCount=0;s.prototype._maxListeners=void 0;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var a=10;function l(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:true,get:function t(){return a},set:function t(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}});s.init=function(){if(void 0===this._events||this._events===Object.getPrototypeOf(this)._events){this._events=Object.create(null);this._eventsCount=0}this._maxListeners=this._maxListeners||void 0};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
s.prototype.setMaxListeners=function t(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");this._maxListeners=e;return this};function c(t){if(void 0===t._maxListeners)return s.defaultMaxListeners;return t._maxListeners}s.prototype.getMaxListeners=function t(){return c(this)};s.prototype.emit=function t(e){var n=[];for(var o=1;o<arguments.length;o++)n.push(arguments[o]);var r="error"===e;var s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return false;
// If there is no 'error' event listener then throw.
if(r){var a;if(n.length>0)a=n[0];if(a instanceof Error)
// Note: The comments on the `throw` lines are intentional, they show
// up in Node's output if this results in an unhandled exception.
throw a;// Unhandled 'error' event
// At least give some kind of context to the user
var l=new Error("Unhandled error."+(a?" ("+a.message+")":""));l.context=a;throw l;// Unhandled 'error' event
}var c=s[e];if(void 0===c)return false;if("function"==typeof c)i(c,this,n);else{var d=c.length;var u=v(c,d);for(o=0;o<d;++o)i(u[o],this,n)}return true};function d(t,e,i,n){var r;var s;var a;l(i);if(void 0===(s=t._events)){s=t._events=Object.create(null);t._eventsCount=0}else{
// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(void 0!==s.newListener){t.emit("newListener",e,i.listener?i.listener:i);
// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
s=t._events}a=s[e]}if(void 0===a){
// Optimize the case of one listener. Don't need the extra array object.
a=s[e]=i;++t._eventsCount}else{if("function"==typeof a)
// Adding the second element, need to change to array.
a=s[e]=n?[i,a]:[a,i];
// If we've already got an array, just append.
else if(n)a.unshift(i);else a.push(i);
// Check for listener leak
if((r=c(t))>0&&a.length>r&&!a.warned){a.warned=true;
// No error code for this since it is a Warning
// eslint-disable-next-line no-restricted-syntax
var d=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning";d.emitter=t;d.type=e;d.count=a.length;o(d)}}return t}s.prototype.addListener=function t(e,i){return d(this,e,i,false)};s.prototype.on=s.prototype.addListener;s.prototype.prependListener=function t(e,i){return d(this,e,i,true)};function u(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;if(0===arguments.length)return this.listener.call(this.target);return this.listener.apply(this.target,arguments)}}function p(t,e,i){var n={fired:false,wrapFn:void 0,target:t,type:e,listener:i};var o=u.bind(n);o.listener=i;n.wrapFn=o;return o}s.prototype.once=function t(e,i){l(i);this.on(e,p(this,e,i));return this};s.prototype.prependOnceListener=function t(e,i){l(i);this.prependListener(e,p(this,e,i));return this};
// Emits a 'removeListener' event if and only if the listener was removed.
s.prototype.removeListener=function t(e,i){var n,o,r,s,a;l(i);if(void 0===(o=this._events))return this;if(void 0===(n=o[e]))return this;if(n===i||n.listener===i)if(0==--this._eventsCount)this._events=Object.create(null);else{delete o[e];if(o.removeListener)this.emit("removeListener",e,n.listener||i)}else if("function"!=typeof n){r=-1;for(s=n.length-1;s>=0;s--)if(n[s]===i||n[s].listener===i){a=n[s].listener;r=s;break}if(r<0)return this;if(0===r)n.shift();else m(n,r);if(1===n.length)o[e]=n[0];if(void 0!==o.removeListener)this.emit("removeListener",e,a||i)}return this};s.prototype.off=s.prototype.removeListener;s.prototype.removeAllListeners=function t(e){var i,n,o;if(void 0===(n=this._events))return this;
// not listening for removeListener, no need to emit
if(void 0===n.removeListener){if(0===arguments.length){this._events=Object.create(null);this._eventsCount=0}else if(void 0!==n[e])if(0==--this._eventsCount)this._events=Object.create(null);else delete n[e];return this}
// emit removeListener for all listeners on all events
if(0===arguments.length){var r=Object.keys(n);var s;for(o=0;o<r.length;++o){if("removeListener"===(s=r[o]))continue;this.removeAllListeners(s)}this.removeAllListeners("removeListener");this._events=Object.create(null);this._eventsCount=0;return this}if("function"==typeof(i=n[e]))this.removeListener(e,i);else if(void 0!==i)
// LIFO order
for(o=i.length-1;o>=0;o--)this.removeListener(e,i[o]);return this};function f(t,e,i){var n=t._events;if(void 0===n)return[];var o=n[e];if(void 0===o)return[];if("function"==typeof o)return i?[o.listener||o]:[o];return i?g(o):v(o,o.length)}s.prototype.listeners=function t(e){return f(this,e,true)};s.prototype.rawListeners=function t(e){return f(this,e,false)};s.listenerCount=function(t,e){if("function"==typeof t.listenerCount)return t.listenerCount(e);else return h.call(t,e)};s.prototype.listenerCount=h;function h(t){var e=this._events;if(void 0!==e){var i=e[t];if("function"==typeof i)return 1;else if(void 0!==i)return i.length}return 0}s.prototype.eventNames=function t(){return this._eventsCount>0?n(this._events):[]};function v(t,e){var i=new Array(e);for(var n=0;n<e;++n)i[n]=t[n];return i}function m(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function g(t){var e=new Array(t.length);for(var i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}function b(t,e){return new Promise((function(i,n){function o(i){t.removeListener(e,r);n(i)}function r(){if("function"==typeof t.removeListener)t.removeListener("error",o);i([].slice.call(arguments))}w(t,e,r,{once:true});if("error"!==e)y(t,o,{once:true})}))}function y(t,e,i){if("function"==typeof t.on)w(t,"error",e,i)}function w(t,e,i,n){if("function"==typeof t.on)if(n.once)t.once(e,i);else t.on(e,i);else if("function"==typeof t.addEventListener)
// EventTarget does not have `error` event semantics like Node
// EventEmitters, we do not listen for `error` events here.
t.addEventListener(e,(function o(r){
// IE does not have builtin `{ once: true }` support so we
// have to do it manually.
if(n.once)t.removeEventListener(e,o);i(r)}));else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}
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
t=window.jQuery,e={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1},t.zoom=function(e,i,n,o){var r,s,a,l,c,d,u,p=t(e),f=p.css("position"),h=t(i);return e.style.position=/(absolute|fixed)/.test(f)?f:"relative",e.style.overflow="hidden",n.style.width=n.style.height="",t(n).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:n.width*o,height:n.height*o,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(e),{init:function t(){s=p.outerWidth(),r=p.outerHeight(),i===e?(l=s,a=r):(l=h.outerWidth(),a=h.outerHeight()),c=(n.width-s)/l,d=(n.height-r)/a,u=h.offset()},move:function t(e){var i=e.pageX-u.left,o=e.pageY-u.top;o=Math.max(Math.min(o,a),0),i=Math.max(Math.min(i,l),0),n.style.left=i*-c+"px",n.style.top=o*-d+"px"}}},t.fn.zoom=function(i){return this.each((function(){var n=t.extend({},e,i||{}),o=n.target&&t(n.target)[0]||this,r=this,s=t(r),a=document.createElement("img"),l=t(a),c="mousemove.zoom",d=!1,u=!1;if(!n.url){var p=r.querySelector("img");if(p&&(n.url=p.getAttribute("data-src")||p.currentSrc||p.src),!n.url)return}s.one("zoom.destroy",function(t,e){s.off(".zoom"),o.style.position=t,o.style.overflow=e,a.onload=null,l.remove()}.bind(this,o.style.position,o.style.overflow)),a.onload=function(){function e(e){p.init(),p.move(e),l.stop().fadeTo(t.support.opacity?n.duration:0,1,t.isFunction(n.onZoomIn)?n.onZoomIn.call(a):!1)}function i(){l.stop().fadeTo(n.duration,0,t.isFunction(n.onZoomOut)?n.onZoomOut.call(a):!1)}var p=t.zoom(o,r,a,n.magnify);"grab"===n.on?s.on("mousedown.zoom",(function(n){1===n.which&&(t(document).one("mouseup.zoom",(function(){i(),t(document).off(c,p.move)})),e(n),t(document).on(c,p.move),n.preventDefault())})):"click"===n.on?s.on("click.zoom",(function(n){return d?void 0:(d=!0,e(n),t(document).on(c,p.move),t(document).one("click.zoom",(function(){i(),d=!1,t(document).off(c,p.move)})),!1)})):"toggle"===n.on?s.on("click.zoom",(function(t){d?i():e(t),d=!d})):"mouseover"===n.on&&(p.init(),s.on("mouseenter.zoom",e).on("mouseleave.zoom",i).on(c,p.move)),n.touch&&s.on("touchstart.zoom",(function(t){t.preventDefault(),u?(u=!1,i()):(u=!0,e(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0]))})).on("touchmove.zoom",(function(t){t.preventDefault(),p.move(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0])})).on("touchend.zoom",(function(t){t.preventDefault(),u&&(u=!1,i())})),t.isFunction(n.callback)&&n.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=n.url}))},t.fn.zoom.defaults=e;
/***/var t,e},
/***/"./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/function(t){!function(e,i){var n=i(e,e.document,Date);e.lazySizes=n;if(t.exports)t.exports=n}("undefined"!=typeof window?window:{},(
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function t(e,i,n){
// Pass in the window Date function also for SSR because the Date class can be lost
"use strict";
/*jshint eqnull:true */var o,
/**
     * @type { LazySizesConfigPartial }
     */
r;!function(){var t;var i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",
//strictClass: 'lazystrict',
autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",
//preloadAfterLoad: false,
minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in i)if(!(t in r))r[t]=i[t]}();if(!i||!i.getElementsByClassName)return{init:function t(){},
/**
       * @type { LazySizesConfigPartial }
       */
cfg:r,
/**
       * @type { true }
       */
noSupport:true};var s=i.documentElement;var a=e.HTMLPictureElement;var l="addEventListener";var c="getAttribute";
/**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */var d=e[l].bind(e);var u=e.setTimeout;var p=e.requestAnimationFrame||u;var f=e.requestIdleCallback;var h=/^picture$/i;var v=["load","error","lazyincluded","_lazyloaded"];var m={};var g=Array.prototype.forEach;
/**
   * @param ele {Element}
   * @param cls {string}
   */var b=function t(e,i){if(!m[i])m[i]=new RegExp("(\\s|^)"+i+"(\\s|$)");return m[i].test(e[c]("class")||"")&&m[i]};
/**
   * @param ele {Element}
   * @param cls {string}
   */var y=function t(e,i){if(!b(e,i))e.setAttribute("class",(e[c]("class")||"").trim()+" "+i)};
/**
   * @param ele {Element}
   * @param cls {string}
   */var w=function t(e,i){var n;if(n=b(e,i))e.setAttribute("class",(e[c]("class")||"").replace(n," "))};var _=function t(e,i,n){var o=n?l:"removeEventListener";if(n)_(e,i);v.forEach((function(t){e[o](t,i)}))};
/**
   * @param elem { Element }
   * @param name { string }
   * @param detail { any }
   * @param noBubbles { boolean }
   * @param noCancelable { boolean }
   * @returns { CustomEvent }
   */var k=function t(e,n,r,s,a){var l=i.createEvent("Event");if(!r)r={};r.instance=o;l.initEvent(n,!s,!a);l.detail=r;e.dispatchEvent(l);return l};var T=function t(i,n){var o;if(!a&&(o=e.picturefill||r.pf)){if(n&&n.src&&!i[c]("srcset"))i.setAttribute("srcset",n.src);o({reevaluate:true,elements:[i]})}else if(n&&n.src)i.src=n.src};var C=function t(e,i){return(getComputedStyle(e,null)||{})[i]};
/**
   *
   * @param elem { Element }
   * @param parent { Element }
   * @param [width] {number}
   * @returns {number}
   */var S=function t(e,i,n){n=n||e.offsetWidth;for(;n<r.minSize&&i&&!e._lazysizesWidth;){n=i.offsetWidth;i=i.parentNode}return n};var x=function(){var t,e;var n=[];var o=[];var r=n;var s=function i(){var s=r;r=n.length?o:n;t=true;e=false;for(;s.length;)s.shift()();t=false};var a=function n(o,a){if(t&&!a)o.apply(this,arguments);else{r.push(o);if(!e){e=true;(i.hidden?u:p)(s)}}};a._lsFlush=s;return a}();var E=function t(e,i){return i?function(){x(e)}:function(){var t=this;var i=arguments;x((function(){e.apply(t,i)}))}};var j=function t(e){var i;var o=0;var s=r.throttleDelay;var a=r.ricTimeout;var l=function t(){i=false;o=n.now();e()};var c=f&&a>49?function(){f(l,{timeout:a});if(a!==r.ricTimeout)a=r.ricTimeout}:E((function(){u(l)}),true);return function(t){var e;if(t=true===t)a=33;if(i)return;i=true;if((e=s-(n.now()-o))<0)e=0;if(t||e<9)c();else u(c,e)}};
//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
var O=function t(e){var i,o;var r=99;var s=function t(){i=null;e()};var a=function t(){var e=n.now()-o;if(e<r)u(a,r-e);else(f||s)(s)};return function(){o=n.now();if(!i)i=u(a,r)}};var A=(R=/^img$/i,B=/^iframe$/i,U="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,Y=0,V=0,X=-1,K=function t(e){V--;if(!e||V<0||!e.target)V=0},G=function t(e){if(null==W)W="hidden"==C(i.body,"visibility");return W||!("hidden"==C(e.parentNode,"visibility")&&"hidden"==C(e,"visibility"))},Z=function t(e,n){var o;var r=e;var a=G(e);M-=n;q+=n;F-=n;H+=n;for(;a&&(r=r.offsetParent)&&r!=i.body&&r!=s;)if((a=(C(r,"opacity")||1)>0)&&"visible"!=C(r,"overflow")){o=r.getBoundingClientRect();a=H>o.left&&F<o.right&&q>o.top-1&&M<o.bottom+1}return a},tt=j(J=function t(){var e,n,a,l,d,u,p,f,h,v,m,g;var b=o.elements;if((N=r.loadMode)&&V<8&&(e=b.length)){n=0;X++;for(;n<e;n++){if(!b[n]||b[n]._lazyRace)continue;if(!U||o.prematureUnveil&&o.prematureUnveil(b[n])){at(b[n]);continue}if(!(f=b[n][c]("data-expand"))||!(u=1*f))u=Y;if(!v){v=!r.expand||r.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:r.expand;o._defEx=v;m=v*r.expFactor;g=r.hFac;W=null;if(Y<m&&V<1&&X>2&&N>2&&!i.hidden){Y=m;X=0}else if(N>1&&X>1&&V<6)Y=v;else Y=Q}if(h!==u){I=innerWidth+u*g;z=innerHeight+u;p=-1*u;h=u}a=b[n].getBoundingClientRect();if((q=a.bottom)>=p&&(M=a.top)<=z&&(H=a.right)>=p*g&&(F=a.left)<=I&&(q||H||F||M)&&(r.loadHidden||G(b[n]))&&(P&&V<3&&!f&&(N<3||X<4)||Z(b[n],u))){at(b[n]);d=true;if(V>9)break}else if(!d&&P&&!l&&V<4&&X<4&&N>2&&($[0]||r.preloadAfterLoad)&&($[0]||!f&&(q||H||F||M||"auto"!=b[n][c](r.sizesAttr))))l=$[0]||b[n]}if(l&&!d)at(l)}}),it=E(et=function t(e){var i=e.target;if(i._lazyCache){delete i._lazyCache;return}K(e);y(i,r.loadedClass);w(i,r.loadingClass);_(i,nt);k(i,"lazyloaded")}),nt=function t(e){it({target:e.target})},ot=function t(e,i){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;
// loadMode can be also a string!
if(0==n)e.contentWindow.location.replace(i);else if(1==n)e.src=i},rt=function t(e){var i;var n=e[c](r.srcsetAttr);if(i=r.customMedia[e[c]("data-media")||e[c]("media")])e.setAttribute("media",i);if(n)e.setAttribute("srcset",n)},st=E((function(t,e,i,n,o){var s,a,l,d,p,f;if(!(p=k(t,"lazybeforeunveil",e)).defaultPrevented){if(n)if(i)y(t,r.autosizesClass);else t.setAttribute("sizes",n);a=t[c](r.srcsetAttr);s=t[c](r.srcAttr);if(o)d=(l=t.parentNode)&&h.test(l.nodeName||"");f=e.firesLoad||"src"in t&&(a||s||d);p={target:t};y(t,r.loadingClass);if(f){clearTimeout(D);D=u(K,2500);_(t,nt,true)}if(d)g.call(l.getElementsByTagName("source"),rt);if(a)t.setAttribute("srcset",a);else if(s&&!d)if(B.test(t.nodeName))ot(t,s);else t.src=s;if(o&&(a||d))T(t,{src:s})}if(t._lazyRace)delete t._lazyRace;w(t,r.lazyClass);x((function(){
// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e)y(t,r.fastLoadedClass);et(p);t._lazyCache=true;u((function(){if("_lazyCache"in t)delete t._lazyCache}),9)}if("lazy"==t.loading)V--}),true)})),at=function t(e){if(e._lazyRace)return;var i;var n=R.test(e.nodeName);
//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
var o=n&&(e[c](r.sizesAttr)||e[c]("sizes"));var s="auto"==o;if((s||!P)&&n&&(e[c]("src")||e.srcset)&&!e.complete&&!b(e,r.errorClass)&&b(e,r.lazyClass))return;i=k(e,"lazyunveilread").detail;if(s)ut.updateElem(e,true,e.offsetWidth);e._lazyRace=true;V++;st(e,i,s,o,n)},lt=O((function(){r.loadMode=3;tt()})),dt=function t(){if(P)return;if(n.now()-L<999){u(dt,999);return}P=true;r.loadMode=3;tt();d("scroll",ct,true)},{_:function t(){L=n.now();o.elements=i.getElementsByClassName(r.lazyClass);$=i.getElementsByClassName(r.lazyClass+" "+r.preloadClass);d("scroll",tt,true);d("resize",tt,true);d("pageshow",(function(t){if(t.persisted){var e=i.querySelectorAll("."+r.loadingClass);if(e.length&&e.forEach)p((function(){e.forEach((function(t){if(t.complete)at(t)}))}))}}));if(e.MutationObserver)new MutationObserver(tt).observe(s,{childList:true,subtree:true,attributes:true});else{s[l]("DOMNodeInserted",tt,true);s[l]("DOMAttrModified",tt,true);setInterval(tt,999)}d("hashchange",tt,true);
//, 'fullscreenchange'
["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){i[l](t,tt,true)}));if(/d$|^c/.test(i.readyState))dt();else{d("load",dt);i[l]("DOMContentLoaded",tt);u(dt,2e4)}if(o.elements.length){J();x._lsFlush()}else tt()},checkElems:tt,unveil:at,_aLSL:ct=function t(){if(3==r.loadMode)r.loadMode=2;lt()}});var $,P,D,N,L,I,z,M,F,H,q,W,R,B,U,Q,Y,V,X,K,G,Z,J,tt,et,it,nt,ot,rt,st,at,lt,ct,dt;var ut=(ft=E((function(t,e,i,n){var o,r,s;t._lazysizesWidth=n;n+="px";t.setAttribute("sizes",n);if(h.test(e.nodeName||""))for(r=0,s=(o=e.getElementsByTagName("source")).length;r<s;r++)o[r].setAttribute("sizes",n);if(!i.detail.dataAttr)T(t,i.detail)})),ht=function t(e,i,n){var o;var r=e.parentNode;if(r){n=S(e,r,n);if(!(o=k(e,"lazybeforesizes",{width:n,dataAttr:!!i})).defaultPrevented)if((n=o.detail.width)&&n!==e._lazysizesWidth)ft(e,r,o,n)}},{_:function t(){pt=i.getElementsByClassName(r.autosizesClass);d("resize",vt)},checkElems:vt=O((function t(){var e;var i=pt.length;if(i){e=0;for(;e<i;e++)ht(pt[e])}})),updateElem:ht});var pt,ft,ht,vt;var mt=function t(){if(!mt.i&&i.getElementsByClassName){mt.i=true;ut._();A._()}};u((function(){if(r.init)mt()}));return o={
/**
     * @type { LazySizesConfigPartial }
     */
cfg:r,autoSizer:ut,loader:A,init:mt,uP:T,aC:y,rC:w,hC:b,fire:k,gW:S,rAF:x}}));
/***/},
/***/"./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/function(t,e,i){"use strict";i.r(e);
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
 */var n="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator;var o=function(){var t=["Edge","Trident","Firefox"];for(var e=0;e<t.length;e+=1)if(n&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();function r(t){var e=false;return function(){if(e)return;e=true;window.Promise.resolve().then((function(){e=false;t()}))}}function s(t){var e=false;return function(){if(!e){e=true;setTimeout((function(){e=false;t()}),o)}}}
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var a=n&&window.Promise?r:s;
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
var i=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?i[e]:i}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function d(t){if("HTML"===t.nodeName)return t;return t.parentNode||t.host}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function u(t){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}
// Firefox want us to check `-x` and `-y` variations as well
var e=c(t),i=e.overflow,n=e.overflowX,o=e.overflowY;if(/(auto|scroll|overlay)/.test(i+o+n))return t;return u(d(t))}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */function p(t){return t&&t.referenceNode?t.referenceNode:t}var f=n&&!!(window.MSInputMethodContext&&document.documentMode);var h=n&&/MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function v(t){if(11===t)return f;if(10===t)return h;return f||h}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function m(t){if(!t)return document.documentElement;var e=v(10)?document.body:null;
// NOTE: 1 DOM access here
var i=t.offsetParent||null;
// Skip hidden elements which don't have an offsetParent
for(;i===e&&t.nextElementSibling;)i=(t=t.nextElementSibling).offsetParent;var n=i&&i.nodeName;if(!n||"BODY"===n||"HTML"===n)return t?t.ownerDocument.documentElement:document.documentElement;
// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(-1!==["TH","TD","TABLE"].indexOf(i.nodeName)&&"static"===c(i,"position"))return m(i);return i}function g(t){var e=t.nodeName;if("BODY"===e)return false;return"HTML"===e||m(t.firstElementChild)===t}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function b(t){if(null!==t.parentNode)return b(t.parentNode);return t}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function y(t,e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING;var n=i?t:e;var o=i?e:t;
// Get common ancestor container
var r=document.createRange();r.setStart(n,0);r.setEnd(o,0);var s=r.commonAncestorContainer;
// Both nodes are inside #document
if(t!==s&&e!==s||n.contains(o)){if(g(s))return s;return m(s)}
// one of the nodes is inside shadowDOM, find which one
var a=b(t);if(a.host)return y(a.host,e);else return y(t,b(e).host)}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function w(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft";var i=t.nodeName;if("BODY"===i||"HTML"===i){var n=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||n)[e]}return t[e]}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function _(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var n=w(e,"top");var o=w(e,"left");var r=i?-1:1;t.top+=n*r;t.bottom+=n*r;t.left+=o*r;t.right+=o*r;return t}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function k(t,e){var i="x"===e?"Left":"Top";var n="Left"===i?"Right":"Bottom";return parseFloat(t["border"+i+"Width"])+parseFloat(t["border"+n+"Width"])}function T(t,e,i,n){return Math.max(e["offset"+t],e["scroll"+t],i["client"+t],i["offset"+t],i["scroll"+t],v(10)?parseInt(i["offset"+t])+parseInt(n["margin"+("Height"===t?"Top":"Left")])+parseInt(n["margin"+("Height"===t?"Bottom":"Right")]):0)}function C(t){var e=t.body;var i=t.documentElement;var n=v(10)&&getComputedStyle(i);return{height:T("Height",e,i,n),width:T("Width",e,i,n)}}var S=function t(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")};var x=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}return function(e,i,n){if(i)t(e.prototype,i);if(n)t(e,n);return e}}();var E=function t(e,i,n){if(i in e)Object.defineProperty(e,i,{value:n,enumerable:true,configurable:true,writable:true});else e[i]=n;return e};var j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n))t[n]=i[n]}return t};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function O(t){return j({},t,{right:t.left+t.width,bottom:t.top+t.height})}
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
try{if(v(10)){e=t.getBoundingClientRect();var i=w(t,"top");var n=w(t,"left");e.top+=i;e.left+=n;e.bottom+=i;e.right+=n}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top};
// subtract scrollbar size from sizes
var r="HTML"===t.nodeName?C(t.ownerDocument):{};var s=r.width||t.clientWidth||o.width;var a=r.height||t.clientHeight||o.height;var l=t.offsetWidth-s;var d=t.offsetHeight-a;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(l||d){var u=c(t);l-=k(u,"x");d-=k(u,"y");o.width-=l;o.height-=d}return O(o)}function $(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var n=v(10);var o="HTML"===e.nodeName;var r=A(t);var s=A(e);var a=u(t);var l=c(e);var d=parseFloat(l.borderTopWidth);var p=parseFloat(l.borderLeftWidth);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(i&&o){s.top=Math.max(s.top,0);s.left=Math.max(s.left,0)}var f=O({top:r.top-s.top-d,left:r.left-s.left-p,width:r.width,height:r.height});f.marginTop=0;f.marginLeft=0;
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!n&&o){var h=parseFloat(l.marginTop);var m=parseFloat(l.marginLeft);f.top-=d-h;f.bottom-=d-h;f.left-=p-m;f.right-=p-m;
// Attach marginTop and marginLeft because in some circumstances we may need them
f.marginTop=h;f.marginLeft=m}if(n&&!i?e.contains(a):e===a&&"BODY"!==a.nodeName)f=_(f,e);return f}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var i=t.ownerDocument.documentElement;var n=$(t,i);var o=Math.max(i.clientWidth,window.innerWidth||0);var r=Math.max(i.clientHeight,window.innerHeight||0);var s=!e?w(i):0;var a=!e?w(i,"left"):0;return O({top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:o,height:r})}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function D(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return false;if("fixed"===c(t,"position"))return true;var i=d(t);if(!i)return false;return D(i)}
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
 */function L(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:false;
// NOTE: 1 DOM access here
var r={top:0,left:0};var s=o?N(t):y(t,p(e));
// Handle viewport case
if("viewport"===n)r=P(s,o);else{
// Handle other cases based on DOM element used as boundaries
var a=void 0;if("scrollParent"===n){if("BODY"===(a=u(d(e))).nodeName)a=t.ownerDocument.documentElement}else if("window"===n)a=t.ownerDocument.documentElement;else a=n;var l=$(a,s,o);
// In case of HTML, we need a different computation
if("HTML"===a.nodeName&&!D(s)){var c=C(t.ownerDocument),f=c.height,h=c.width;r.top+=l.top-l.marginTop;r.bottom=f+l.top;r.left+=l.left-l.marginLeft;r.right=h+l.left}else
// for all the other DOM elements, this one is good
r=l}
// Add paddings
var v="number"==typeof(i=i||0);r.left+=v?i:i.left||0;r.top+=v?i:i.top||0;r.right-=v?i:i.right||0;r.bottom-=v?i:i.bottom||0;return r}function I(t){return t.width*t.height}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function z(t,e,i,n,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=L(i,n,r,o);var a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}};var l=Object.keys(a).map((function(t){return j({key:t},a[t],{area:I(a[t])})})).sort((function(t,e){return e.area-t.area}));var c=l.filter((function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}));var d=c.length>0?c[0].key:l[0].key;var u=t.split("-")[1];return d+(u?"-"+u:"")}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function M(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return $(i,n?N(e):y(e,p(i)),n)}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function F(t){var e=t.ownerDocument.defaultView.getComputedStyle(t);var i=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0);var n=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+n,height:t.offsetHeight+i}}
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
 */function q(t,e,i){i=i.split("-")[0];
// Get popper node sizes
var n=F(t);
// Add position, width and height to our offsets object
var o={width:n.width,height:n.height};
// depending by the popper placement we have to compute its offsets slightly differently
var r=-1!==["right","left"].indexOf(i);var s=r?"top":"left";var a=r?"left":"top";var l=r?"height":"width";var c=!r?"height":"width";o[s]=e[s]+e[l]/2-n[l]/2;if(i===a)o[a]=e[a]-n[c];else o[a]=e[H(a)];return o}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function W(t,e){
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
 */function R(t,e,i){
// use native findIndex if supported
if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===i}));
// use `find` + `indexOf` if `findIndex` isn't supported
var n=W(t,(function(t){return t[e]===i}));return t.indexOf(n)}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function B(t,e,i){(void 0===i?t:t.slice(0,R(t,"name",i))).forEach((function(t){if(t.function)
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=t.function||t.fn;// eslint-disable-line dot-notation
if(t.enabled&&l(i)){
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
e.offsets.popper=O(e.offsets.popper);e.offsets.reference=O(e.offsets.reference);e=i(e,t)}}));return e}
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
 */function Q(t,e){return t.some((function(t){var i=t.name;return t.enabled&&i===e}))}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function Y(t){var e=[false,"ms","Webkit","Moz","O"];var i=t.charAt(0).toUpperCase()+t.slice(1);for(var n=0;n<e.length;n++){var o=e[n];var r=o?""+o+i:t;if(void 0!==document.body.style[r])return r}return null}
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
 */function X(t){var e=t.ownerDocument;return e?e.defaultView:window}function K(t,e,i,n){var o="BODY"===t.nodeName;var r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,i,{passive:true});if(!o)K(u(r.parentNode),e,i,n);n.push(r)}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function G(t,e,i,n){
// Resize event listener on window
i.updateBound=n;X(t).addEventListener("resize",i.updateBound,{passive:true});
// Scroll event listener on scroll parents
var o=u(t);K(o,"scroll",i.updateBound,i.scrollParents);i.scrollElement=o;i.eventsEnabled=true;return i}
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
 */function it(t,e){Object.keys(e).forEach((function(i){var n="";
// add unit if the value is numeric and is one of the following
if(-1!==["width","height","top","right","bottom","left"].indexOf(i)&&et(e[i]))n="px";t.style[i]=e[i]+n}))}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function nt(t,e){Object.keys(e).forEach((function(i){if(false!==e[i])t.setAttribute(i,e[i]);else t.removeAttribute(i)}))}
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
it(t.instance.popper,t.styles);
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
nt(t.instance.popper,t.attributes);
// if arrowElement is defined and arrowStyles has some properties
if(t.arrowElement&&Object.keys(t.arrowStyles).length)it(t.arrowElement,t.arrowStyles);return t}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function rt(t,e,i,n,o){
// compute reference element offsets
var r=M(o,e,t,i.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var s=z(i.placement,r,e,t,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);e.setAttribute("x-placement",s);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
it(e,{position:i.positionFixed?"fixed":"absolute"});return i}
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
 */function st(t,e){var i=t.offsets,n=i.popper,o=i.reference;var r=Math.round,s=Math.floor;var a=function t(e){return e};var l=r(o.width);var c=r(n.width);var d=-1!==["left","right"].indexOf(t.placement);var u=-1!==t.placement.indexOf("-");var p=!e?a:d||u||l%2==c%2?r:s;var f=!e?a:r;return{left:p(l%2==1&&c%2==1&&!u&&e?n.left-1:n.left),top:f(n.top),bottom:f(n.bottom),right:p(n.right)}}var at=n&&/Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function lt(t,e){var i=e.x,n=e.y;var o=t.offsets.popper;
// Remove this legacy support in Popper.js v2
var r=W(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;if(void 0!==r)console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:e.gpuAcceleration;var a=m(t.instance.popper);var l=A(a);
// Styles
var c={position:o.position};var d=st(t,window.devicePixelRatio<2||!at);var u="bottom"===i?"top":"bottom";var p="right"===n?"left":"right";
// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var f=Y("transform");
// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var h=void 0,v=void 0;if("bottom"===u)
// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if("HTML"===a.nodeName)v=-a.clientHeight+d.bottom;else v=-l.height+d.bottom;else v=d.top;if("right"===p)if("HTML"===a.nodeName)h=-a.clientWidth+d.right;else h=-l.width+d.right;else h=d.left;if(s&&f){c[f]="translate3d("+h+"px, "+v+"px, 0)";c[u]=0;c[p]=0;c.willChange="transform"}else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var g="bottom"===u?-1:1;var b="right"===p?-1:1;c[u]=v*g;c[p]=h*b;c.willChange=u+", "+p}
// Attributes
var y={"x-placement":t.placement};
// Update `data` attributes, styles and arrowStyles
t.attributes=j({},y,t.attributes);t.styles=j({},c,t.styles);t.arrowStyles=j({},t.offsets.arrow,t.arrowStyles);return t}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function ct(t,e,i){var n=W(t,(function(t){return t.name===e}));var o=!!n&&t.some((function(t){return t.name===i&&t.enabled&&t.order<n.order}));if(!o){var r="`"+e+"`";var s="`"+i+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function dt(t,e){var i;
// arrow depends on keepTogether in order to work
if(!ct(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof n){
// if arrowElement is not found, don't run the modifier
if(!(n=t.instance.popper.querySelector(n)))return t}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!t.instance.popper.contains(n)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return t}var o=t.placement.split("-")[0];var r=t.offsets,s=r.popper,a=r.reference;var l=-1!==["left","right"].indexOf(o);var d=l?"height":"width";var u=l?"Top":"Left";var p=u.toLowerCase();var f=l?"left":"top";var h=l?"bottom":"right";var v=F(n)[d];

// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction

// top/left side
if(a[h]-v<s[p])t.offsets.popper[p]-=s[p]-(a[h]-v);
// bottom/right side
if(a[p]+v>s[h])t.offsets.popper[p]+=a[p]+v-s[h];t.offsets.popper=O(t.offsets.popper);
// compute center of the popper
var m=a[p]+a[d]/2-v/2;
// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var g=c(t.instance.popper);var b=parseFloat(g["margin"+u]);var y=parseFloat(g["border"+u+"Width"]);var w=m-t.offsets.popper[p]-b-y;
// prevent arrowElement from being placed not contiguously to its popper
w=Math.max(Math.min(s[d]-v,w),0);t.arrowElement=n;t.offsets.arrow=(E(i={},p,Math.round(w)),E(i,f,""),i);return t}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function ut(t){if("end"===t)return"start";else if("start"===t)return"end";return t}
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
 */var pt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];
// Get rid of `auto` `auto-start` and `auto-end`
var ft=pt.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var i=ft.indexOf(t);var n=ft.slice(i+1).concat(ft.slice(0,i));return e?n.reverse():n}var vt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};
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
return t;var i=L(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed);var n=t.placement.split("-")[0];var o=H(n);var r=t.placement.split("-")[1]||"";var s=[];switch(e.behavior){case vt.FLIP:s=[n,o];break;case vt.CLOCKWISE:s=ht(n);break;case vt.COUNTERCLOCKWISE:s=ht(n,true);break;default:s=e.behavior}s.forEach((function(a,l){if(n!==a||s.length===l+1)return t;n=t.placement.split("-")[0];o=H(n);var c=t.offsets.popper;var d=t.offsets.reference;
// using floor because the reference offsets may contain decimals we are not going to consider here
var u=Math.floor;var p="left"===n&&u(c.right)>u(d.left)||"right"===n&&u(c.left)<u(d.right)||"top"===n&&u(c.bottom)>u(d.top)||"bottom"===n&&u(c.top)<u(d.bottom);var f=u(c.left)<u(i.left);var h=u(c.right)>u(i.right);var v=u(c.top)<u(i.top);var m=u(c.bottom)>u(i.bottom);var g="left"===n&&f||"right"===n&&h||"top"===n&&v||"bottom"===n&&m;
// flip the variation if required
var b=-1!==["top","bottom"].indexOf(n);
// flips variation if reference element overflows boundaries
var y=!!e.flipVariations&&(b&&"start"===r&&f||b&&"end"===r&&h||!b&&"start"===r&&v||!b&&"end"===r&&m);
// flips variation if popper content overflows boundaries
var w=!!e.flipVariationsByContent&&(b&&"start"===r&&h||b&&"end"===r&&f||!b&&"start"===r&&m||!b&&"end"===r&&v);var _=y||w;if(p||g||_){
// this boolean to detect any flip loop
t.flipped=true;if(p||g)n=s[l+1];if(_)r=ut(r);t.placement=n+(r?"-"+r:"");
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
t.offsets.popper=j({},t.offsets.popper,q(t.instance.popper,t.offsets.reference,t.placement));t=B(t.instance.modifiers,t,"flip")}}));return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function gt(t){var e=t.offsets,i=e.popper,n=e.reference;var o=t.placement.split("-")[0];var r=Math.floor;var s=-1!==["top","bottom"].indexOf(o);var a=s?"right":"bottom";var l=s?"left":"top";var c=s?"width":"height";if(i[a]<r(n[l]))t.offsets.popper[l]=r(n[l])-i[c];if(i[l]>r(n[a]))t.offsets.popper[l]=r(n[a]);return t}
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
 */function bt(t,e,i,n){
// separate value from unit
var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var r=+o[1];var s=o[2];
// If it's not a number it's an operator, I guess
if(!r)return t;if(0===s.indexOf("%")){var a=void 0;if("%p"===s)a=i;else a=n;return O(a)[e]/100*r}else if("vh"===s||"vw"===s){
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
 */function yt(t,e,i,n){var o=[0,0];
// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var r=-1!==["right","left"].indexOf(n);
// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var s=t.split(/(\+|\-)/).map((function(t){return t.trim()}));
// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var a=s.indexOf(W(s,(function(t){return-1!==t.search(/,|\s/)})));if(s[a]&&-1===s[a].indexOf(","))console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/;var c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
(c=c.map((function(t,n){
// Most of the units rely on the orientation of the popper
var o=(1===n?!r:r)?"height":"width";var s=false;return t.reduce((function(t,e){if(""===t[t.length-1]&&-1!==["+","-"].indexOf(e)){t[t.length-1]=e;s=true;return t}else if(s){t[t.length-1]+=e;s=false;return t}else return t.concat(e)}),[]).map((function(t){return bt(t,o,e,i)}))}))).forEach((function(t,e){t.forEach((function(i,n){if(et(i))o[e]+=i*("-"===t[n-1]?-1:1)}))}));return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function wt(t,e){var i=e.offset;var n=t.placement,o=t.offsets,r=o.popper,s=o.reference;var a=n.split("-")[0];var l=void 0;if(et(+i))l=[+i,0];else l=yt(i,r,s,a);if("left"===a){r.top+=l[0];r.left-=l[1]}else if("right"===a){r.top+=l[0];r.left+=l[1]}else if("top"===a){r.left+=l[0];r.top-=l[1]}else if("bottom"===a){r.left+=l[0];r.top+=l[1]}t.popper=r;return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function _t(t,e){var i=e.boundariesElement||m(t.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(t.instance.reference===i)i=m(i);
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var n=Y("transform");var o=t.instance.popper.style;// assignment to help minification
var r=o.top,s=o.left,a=o[n];o.top="";o.left="";o[n]="";var l=L(t.instance.popper,t.instance.reference,e.padding,i,t.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
o.top=r;o.left=s;o[n]=a;e.boundaries=l;var c=e.priority;var d=t.offsets.popper;var u={primary:function t(i){var n=d[i];if(d[i]<l[i]&&!e.escapeWithReference)n=Math.max(d[i],l[i]);return E({},i,n)},secondary:function t(i){var n="right"===i?"left":"top";var o=d[n];if(d[i]>l[i]&&!e.escapeWithReference)o=Math.min(d[n],l[i]-("right"===i?d.width:d.height));return E({},n,o)}};c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";d=j({},d,u[e](t))}));t.offsets.popper=d;return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function kt(t){var e=t.placement;var i=e.split("-")[0];var n=e.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(n){var o=t.offsets,r=o.reference,s=o.popper;var a=-1!==["bottom","top"].indexOf(i);var l=a?"left":"top";var c=a?"width":"height";var d={start:E({},l,r[l]),end:E({},l,r[l]+r[c]-s[c])};t.offsets.popper=j({},s,d[n])}return t}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function Tt(t){if(!ct(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference;var i=W(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<i.top||e.left>i.right||e.top>i.bottom||e.right<i.left){
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
 */function Ct(t){var e=t.placement;var i=e.split("-")[0];var n=t.offsets,o=n.popper,r=n.reference;var s=-1!==["left","right"].indexOf(i);var a=-1===["top","left"].indexOf(i);o[s?"left":"top"]=r[i]-(a?o[s?"width":"height"]:0);t.placement=H(e);t.offsets.popper=O(o);return t}
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
var St={
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
fn:dt,
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
fn:Ct},
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
var xt=function(){
/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function t(e,i){var n=this;var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};S(this,t);this.scheduleUpdate=function(){return requestAnimationFrame(n.update)};
// make update() debounced, so that it only runs at most once-per-tick
this.update=a(this.update.bind(this));
// with {} we create a new object with the options inside it
this.options=j({},t.Defaults,o);
// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};
// get reference and popper elements (allow jQuery wrappers)
this.reference=e&&e.jquery?e[0]:e;this.popper=i&&i.jquery?i[0]:i;
// Deep merge modifiers options
this.options.modifiers={};Object.keys(j({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){n.options.modifiers[e]=j({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}));
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map((function(t){return j({name:t},n.options.modifiers[t])})).sort((function(t,e){return t.order-e.order}));
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach((function(t){if(t.enabled&&l(t.onLoad))t.onLoad(n.reference,n.popper,n.options,t,n.state)}));
// fire the first update to position the popper in the right place
this.update();var r=this.options.eventsEnabled;if(r)
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();this.state.eventsEnabled=r}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
x(t,[{key:"update",value:function t(){return U.call(this)}},{key:"destroy",value:function t(){return V.call(this)}},{key:"enableEventListeners",value:function t(){return Z.call(this)}},{key:"disableEventListeners",value:function t(){return tt.call(this)}
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
 */xt.Utils=("undefined"!=typeof window?window:i.g).PopperUtils;xt.placements=pt;xt.Defaults=St;
/* harmony default export */e.default=xt;
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
/******/function i(n){
/******/ // Check if module is in cache
/******/var o=e[n];
/******/if(void 0!==o)
/******/return o.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=e[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/t[n](r,r.exports,i);
/******/
/******/ // Return the exports of the module
/******/return r.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/i.n=function(t){
/******/var e=t&&t.__esModule?
/******/function(){return t.default}:
/******/function(){return t};
/******/i.d(e,{a:e});
/******/return e;
/******/};
/******/
/******/ /* webpack/runtime/define property getters */
/******/
/******/ // define getter functions for harmony exports
/******/i.d=function(t,e){
/******/for(var n in e)
/******/if(i.o(e,n)&&!i.o(t,n))
/******/Object.defineProperty(t,n,{enumerable:true,get:e[n]});
/******/
/******/
/******/};
/******/
/******/ /* webpack/runtime/global */
/******/
/******/i.g=function(){
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
/******/i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}
/******/;
/******/
/******/ /* webpack/runtime/make namespace object */
/******/
/******/ // define __esModule on exports
/******/i.r=function(t){
/******/if("undefined"!=typeof Symbol&&Symbol.toStringTag)
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});
/******/
/******/Object.defineProperty(t,"__esModule",{value:true});
/******/};
/******/
/************************************************************************/var n={};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function(){"use strict";var t={};
/*!*********************!*\
  !*** ./js/theme.js ***!
  \*********************/i.r(t);
/* harmony import */i(/*! bootstrap/js/src/util */"./node_modules/bootstrap/js/src/util.js");
/* harmony import */i(/*! bootstrap/js/src/alert */"./node_modules/bootstrap/js/src/alert.js");
/* harmony import */i(/*! bootstrap/js/src/button */"./node_modules/bootstrap/js/src/button.js");
/* harmony import */i(/*! bootstrap/js/src/collapse */"./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */i(/*! bootstrap/js/src/dropdown */"./node_modules/bootstrap/js/src/dropdown.js");
/* harmony import */i(/*! bootstrap/js/src/modal */"./node_modules/bootstrap/js/src/modal.js");
/* harmony import */i(/*! bootstrap/js/src/popover */"./node_modules/bootstrap/js/src/popover.js");
/* harmony import */i(/*! bootstrap/js/src/tab */"./node_modules/bootstrap/js/src/tab.js");
/* harmony import */i(/*! bootstrap/js/src/toast */"./node_modules/bootstrap/js/src/toast.js");
/* harmony import */i(/*! bootstrap/js/src/tooltip */"./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */i(/*! bootstrap-touchspin */"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js");
/* harmony import */
/* harmony import */i(/*! ./lib/slick.min */"./js/lib/slick.min.js");
/* harmony import */
/* harmony import */i(/*! ./lib/jquery.hoverIntent.min */"./js/lib/jquery.hoverIntent.min.js");
/* harmony import */
/* harmony import */var e=i(/*! ./components/slick */"./js/components/slick.js");
/* harmony import */i(/*! ../node_modules/jquery-zoom/jquery.zoom.min.js */"./node_modules/jquery-zoom/jquery.zoom.min.js");
/* harmony import */
/* harmony import */i(/*! ./responsive */"./js/responsive.js");
/* harmony import */i(/*! ./checkout */"./js/checkout.js");
/* harmony import */i(/*! ./customer */"./js/customer.js");
/* harmony import */i(/*! ./listing */"./js/listing.js");
/* harmony import */i(/*! ./product */"./js/product.js");
/* harmony import */i(/*! ./cart */"./js/cart.js");
/* harmony import */var n=i(/*! ./components/form */"./js/components/form.js");
/* harmony import */var o=i(/*! ./components/top-menu */"./js/components/top-menu.js");
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
/* harmony import */var a=i(/*! events */"./node_modules/events/events.js");
/* harmony import */var l=i.n(a);
/* harmony import */i(/*! ./components/block-cart */"./js/components/block-cart.js");
/* harmony import */i(/*! lazysizes */"./node_modules/lazysizes/lazysizes.js");
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
for(var c in l().prototype)s()[c]=l().prototype[c];$(document).ready((()=>{var t=new n.default;var i=new e.default;var r=$("#_desktop_top_menu #top-menu");var s=new o.default(r);t.init();i.init();s.init();
//display input file content in custom file input BS
$(".custom-file-input").on("change",(function(){var t=$(this).val().split("\\").pop();$(this).next(".custom-file-label").addClass("selected").html(t)}))}));document.addEventListener("lazyloaded",(function(t){$(t.target).parent().addClass("rc--lazyload")}));$(document).ready((function(){console.log("ready");
/* SCROLL TO ANCHOR */if(window.location.hash&&"/"!=window.location.hash[1])n(window.location.hash);t();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname")){e();i()}$(window).resize((function(){t();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname"))i()}));function t(){$(".fullwidth").each((function(){var t=$(this);var e=$("body").width(),i=e/2;
//console.log(fullwidth);
//console.log(content);
t.css({left:"50%",position:"relative",width:e,"margin-left":-i})}))}function e(){console.log("sticky");var t=$("#header");var e="sticky";var i="unsticky";var n=$("#header").height();$(window).scroll((function(){if($(this).scrollTop()>0){t.addClass(e).removeClass(i);$("body").css("padding-top",n)}else{t.addClass(i).removeClass(e);$("body").css("padding-top",0)}}))}function i(){$(".modal-dialog__offcanvas #adtm_menu").addClass("adtm_menu_toggle_open");
//$('#adtm_menu').toggleClass('adtm_menu_toggle_open');
//$('#adtm_menu .advtm_menu_toggle').toggleClass('adtm_menu_mobile_mode');
}function n(t){console.log(t);var e=$(t);var i=e.offset().top-$("#header").height()-40;
//var scrollTop = target.offset().top - $('#header').height();
console.log("header height: "+$("#header").height());console.log("scrollTop : "+i);$("html, body").animate({scrollTop:i},1e3,(function(){
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
var i=e.offset().top-$("#header").height()-40;console.log("header height: "+$("#header").height());console.log("scrollTop : "+i);$("html, body").animate({scrollTop:i},1e3,(function(){
// Callback after animation
// Must change focus!
var t=$(e);t.focus();if(t.is(":focus"))
// Checking if the target was focused
return false;else{t.attr("tabindex","-1");// Adding tabindex for elements not focusable
t.focus();// Set focus again
}}))}}}))}))}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function(){"use strict";
/*!************************!*\
  !*** ./css/theme.scss ***!
  \************************/i.r(n);
// extracted by mini-css-extract-plugin
}();
/******/}();
//# sourceMappingURL=theme.js.map