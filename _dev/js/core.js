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

import prestashop from 'prestashop';
import EventEmitter from 'events';

import SlickSlider from './components/slick';
import '../node_modules/bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/collapse';
import './responsive';
import './cart';

import Form from './components/form';
import TopMenu from './components/top-menu';



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

    if (($(location).attr("pathname") != "/commande") && ($(location).attr("pathname") != "/checkout")) {
        sticky();
        MobileMenuOk();
    }

    $(window).resize(function () {
        if (($(location).attr("pathname") != "/commande") && ($(location).attr("pathname") != "/checkout")) {
            MobileMenuOk();
        }
    });

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
    }

    function MobileMenuOk() {
        $(".modal-dialog__offcanvas #adtm_menu").addClass("adtm_menu_toggle_open");
        //$('#adtm_menu').toggleClass('adtm_menu_toggle_open');
        //$('#adtm_menu .advtm_menu_toggle').toggleClass('adtm_menu_mobile_mode');
    }

    function scrollToAnchorV1(anchor) {
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

    function scrollToAnchor(anchor) {

        var $target = $(anchor);
        if (!$target.length) return;

        var headerHeight = $('#header').outerHeight() || 0;
        var targetTop = $target.offset().top - headerHeight - 40;
        var currentScroll = $(window).scrollTop();

        var distance = Math.abs(currentScroll - targetTop);

        console.log('Current:', currentScroll);
        console.log('Target:', targetTop);
        console.log('Distance:', distance);

        // Si déjà proche → ne rien faire
        if (distance < 5) return;

        // Durée dynamique (ajuste si besoin)
        var duration = Math.min(1200, Math.max(200, distance * 0.5));

        $('html, body').stop(true).animate({
            scrollTop: targetTop
        }, duration, function () {

            // Gestion focus accessibilité
            $target.attr('tabindex', '-1').focus();

        });
    }


    // Fonction pour scroller les liens vers ancres
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href*="#footer"]')
        .not('.footer__title--mobile')
        .not('.noscroll')
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
