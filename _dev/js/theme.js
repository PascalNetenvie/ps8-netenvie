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
import 'bootstrap/js/src/util';
import 'bootstrap/js/src/alert';
import 'bootstrap/js/src/button';
import  '../node_modules/bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/popover';
import 'bootstrap/js/src/tab';
import 'bootstrap/js/src/toast';
import 'bootstrap/js/src/tooltip';
import 'bootstrap-touchspin';
import './lib/slick.min';
import './lib/jquery.hoverIntent.min';
import SlickSlider from './components/slick';

import  '../node_modules/jquery-zoom/jquery.zoom.min.js';

import './responsive';
import './checkout';
import './customer';
import './listing';
import './product';
import './cart';

import Form from './components/form';
import TopMenu from './components/top-menu';

import prestashop from 'prestashop';
import EventEmitter from 'events';


import './components/block-cart';
import lazysizes from 'lazysizes'


// "inherit" EventEmitter
        for (var i in EventEmitter.prototype) {
    prestashop[i] = EventEmitter.prototype[i];
}

$(document).ready(() => {
    const form = new Form();
    let slickSlider = new SlickSlider();
    let topMenuEl = $('#_desktop_top_menu #top-menu');
    let topMenu = new TopMenu(topMenuEl);

    form.init();
    slickSlider.init();
    topMenu.init();

    //display input file content in custom file input BS
    $('.custom-file-input').on('change', function () {
        let fileName = $(this).val().split('\\').pop();
        $(this).next('.custom-file-label').addClass("selected").html(fileName);
    })

});
document.addEventListener('lazyloaded', function (e) {
    $(e.target).parent().addClass('rc--lazyload');
});


$(document).ready(function () {

    console.log('ready');
    /* SCROLL TO ANCHOR */
    if (window.location.hash && window.location.hash[1] != '/') {
        scrollToAnchor(window.location.hash);
    }

    FullWidth();

    if (($(location).attr("pathname") != "/commande") && ($(location).attr("pathname") != "/checkout")) {
        sticky();
        MobileMenuOk();
    }

    $(window).resize(function () {
        FullWidth();
        if (($(location).attr("pathname") != "/commande") && ($(location).attr("pathname") != "/checkout")) {
            MobileMenuOk();
        }
    });

    function FullWidth() {
        $('.fullwidth').each(function () {
            var content = $(this);
            var fullwidth = $('body').width(),
                    margin_full = fullwidth / 2;
            //console.log(fullwidth);
            //console.log(content);
            content.css({
                'left': '50%',
                'position': 'relative',
                'width': fullwidth,
                'margin-left': -margin_full
            });

        });
    }

    function sticky() {
        console.log('sticky');
        var yourNavigation = $("#header");
        var stickyDiv = "sticky";
        var unStickyDiv = "unsticky";
        var yourHeader = $('#header').height();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                yourNavigation.addClass(stickyDiv).removeClass(unStickyDiv);
                $('body').css('padding-top', yourHeader);
            } else {
                yourNavigation.addClass(unStickyDiv).removeClass(stickyDiv);
                $('body').css('padding-top', 0);
            }
        });
        /*
         var yourHeader = $('#header').height();
         $(window).scroll(function () {
         if ($(this).scrollTop() > (yourHeader)) {
         yourNavigation.addClass(stickyDiv).removeClass(unStickyDiv);
         } else if ($(this).scrollTop() < (yourHeader)) {
         yourNavigation.addClass(unStickyDiv).removeClass(stickyDiv);
         }
         });*/
    }

    function MobileMenuOk() {
        $(".modal-dialog__offcanvas #adtm_menu").addClass("adtm_menu_toggle_open");
        //$('#adtm_menu').toggleClass('adtm_menu_toggle_open');
        //$('#adtm_menu .advtm_menu_toggle').toggleClass('adtm_menu_mobile_mode');
    }

    function scrollToAnchor(anchor) {
        console.log(anchor);
        var target = $(anchor);
        var scrollTop = target.offset().top - $('#header').height() - 40;
        //var scrollTop = target.offset().top - $('#header').height();
        console.log('header height: ' + $('#header').height());
        console.log('scrollTop : ' + scrollTop);

        $('html, body').animate({
            scrollTop: scrollTop
        }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            }
        });

    }

    // Fonction pour scroller les liens vers ancres
    $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href*="#footer"]')
            .not('.footer__title--mobile')
            /*
             .not('[href="#0"]')
             .not('[href="#bt_tabs-0"]')
             .not('[href="#bt_tabs-1"]')*/
            .click(function (event) {
                // On-page links
                if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                        ) {
                    // Figure out element to scroll to

                    if ($(this).hasClass('nav-link')) {
                        var target = $(this).parent().parent();
                    } else {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    }

                    console.log('target');
                    console.log(target);
                    console.log(target.offset().top);
                    console.log('header height');
                    console.log($('#header').height());

                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        //event.preventDefault();


                        var scrollTop = target.offset().top - $('#header').height() - 40;
                        console.log('header height: ' + $('#header').height());
                        console.log('scrollTop : ' + scrollTop);

                        $('html, body').animate({
                            scrollTop: scrollTop
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        });
                    }
                }
            });


});
