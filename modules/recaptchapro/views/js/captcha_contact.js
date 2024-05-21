/**
 * 2007-2021 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
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
 *  @author    PrestaShop SA <contact@prestashop.com>
 *  @copyright 2007-2021 PrestaShop SA
 *  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 *
 * Don't forget to prefix your containers with your own identifier
 * to avoid any conflicts with others containers.
 */

// Vanilla document ready
document.addEventListener('DOMContentLoaded', function() {
    if (site_key) {
        // Create structure variables
        var submit_button = findCM([
            '#contact .contact-form .btn-primary',
            '#contact .contact-form-box #submitMessage',
            '#contact form #submitMessage',
            '#contact #submitMessage',
            '#contact .contact-page form .form-footer .btn-primary'
        ]);
        console.log('submit_button');
        console.log(submit_button);
        var captcha_form = findCM([
            '#contact .contact-form > form',
            '#contact .contact-form .form-fields .form-group:last-child .col-md-9',
            '#contact .contact-form-box .clearfix > div:first-child',
            '#contact .contact-form-box fieldset > .row:nth-child(2) > div:first-child',
            '#contact form fieldset > .textarea',
            '#contact .contact-form .form-fields .form-group:last-child',
            '#contact .contact-page form .form-fields .form-group:last-child'
        ]);
        console.log('captcha_form');
        console.log(captcha_form);
        var error_header = findCM([
            '#contact .contact-form .form',
            '#contact .contact-form form',
            '#center_column .page-heading',
            '#center_column .page-subheading',
            '#center_column > h1',
            '#contact .contact-form-box',
            '#contact form',
            '#contact .contact-page form'
        ]);
        console.log('error_header');
        console.log(error_header);
        var captcha_invisible_form = findCM([
            '#contact .contact-form > form',
            '#contact .contact-form-box',
            '#contact #center_column form',
            '#contact form',
            '#contact .contact-page form'
        ]);
        console.log('captcha_invisible_form');
        console.log(captcha_invisible_form);

        // Check if is whitelisted and display relevant content
        if (!whitelisted) {
            // Add our captcha depending to reCaptcha version
            if (re_version == 1) {
                // reCaptcha Version 2 Checkbox
                if (!captcha_form) {
                    $('#contact .submit').before('<div class="g-recaptcha" style="" data-sitekey="' + site_key + '" data-theme="' + re_theme + '" data-size="' + re_size + '"></div>');
                } else {
                    $(captcha_form).append('<div class="g-recaptcha" style="' + (p_version == "1.7" ? "margin-top: 20px; margin-left: 27%;" : "") + (p_version == "1.5" ? "margin-top: 10px; margin-left: 183px;" : "")  + '" data-sitekey="' + site_key + '" data-theme="' + re_theme + '" data-size="' + re_size + '"></div>');
                }

                var clicked_first = true;

                $(submit_button).on('click', function() {
                    if (clicked_first == true) {
                        if ($(submit_button).prop('type') == 'submit') {
                            $(submit_button).prop('type', 'button');
                        }
                    }

                    if (clicked_first == true) {
                        if (grecaptcha.getResponse()) {
                            $(submit_button).prop('type', 'submit');
                            clicked_first = false;
                            $(submit_button).click();
                        } else {
                            $('.captcha-alert').remove();
                            if (p_version == '1.7') {
                                $("<div class='alert alert-danger error captcha-alert'><p>" + there_is1 + "</p><ol><li>" + wrong_captcha + "</ol></div>").hide().insertBefore(error_header).fadeIn(600);
                            } else {
                                $("<div class='alert alert-danger error captcha-alert'><p>" + there_is1 + "</p><ol><li>" + wrong_captcha + "</ol></div>").hide().insertAfter(error_header).fadeIn(600);
                            }
                        }
                    }
                });
            } else if (re_version == 2 || re_version == 3) {
                // reCaptcha Version 2 Invisible and Version 3
                $(captcha_invisible_form).submit(function(event) {
                    if (!grecaptcha.getResponse()) {
                        event.preventDefault();
                        grecaptcha.execute();
                    }
                });

                if (re_position == 'inline') {
                    if (!captcha_form) {
                        $('#contact .submit').before('<div id="recaptcha" class="g-recaptcha" data-sitekey="' + site_key + '" data-callback="onreCSubmitCON" data-size="invisible" data-badge="inline"></div>');
                    } else {
                        $(captcha_form).append('<div id="recaptcha" class="g-recaptcha" style="' + (p_version == "1.7" ? "margin-top: 20px; margin-left: 27%;" : "") + (p_version == "1.5" ? "margin-top: 10px; margin-left: 183px;" : "")  + '" data-sitekey="' + site_key + '" data-callback="onreCSubmitCON" data-size="invisible" data-badge="inline"></div>');
                    }
                } else {
                    $(captcha_invisible_form).append('<div id="recaptcha" class="g-recaptcha" data-sitekey="' + site_key + '" data-callback="onreCSubmitCON" data-size="invisible" data-badge="bottom' + re_position + '"></div>');
                }
                $(captcha_invisible_form).append('<input type="hidden" value="" name="submitMessage" />');
            }
        } else {
            if (whitelist_m) {
                $(captcha_form).append('<input type="hidden" name="recaptcha_whitelisted" value="1" />');
                $(captcha_form).append('<p class="recaptcha_whitelist">' + whitelist_m + '</p>');
            } else {
                $(captcha_form).append('<input type="hidden" name="recaptcha_whitelisted" value="1" />');
            }
        }
    }
});

// Utility functions
function onreCSubmitCON(token) {
    var captcha_invisible_form = findCM([
        '#contact .contact-form > form',
        '#contact .contact-form-box',
        '#contact #center_column form',
        '#contact form',
        '#contact .contact-page form'
    ]);
    
    if (token) {
        $(captcha_invisible_form).submit();
    }
}

function findCM(str) {
    var temp = false;

    $.each(str, function(key, value) {
        if ($(value).length) {
            temp = value;
            return false;
        }
    });

    if (temp) {
        return temp;
    } else {
        return false;
    }
}