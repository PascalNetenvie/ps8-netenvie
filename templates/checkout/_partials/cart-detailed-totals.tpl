{**
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
 *}
{block name='cart_detailed_totals'}
<div class="cart-detailed-totals">

  <div class="">
    {foreach from=$cart.subtotals item="subtotal"}
      {if $subtotal && $subtotal.value && $subtotal.type !== 'tax'}
        <div class="cart-summary-line" id="cart-subtotal-{$subtotal.type}">
          <span class="label{if 'products' === $subtotal.type} js-subtotal{/if}">
            {if 'products' == $subtotal.type}
              {$cart.summary_string}
            {else}
              {$subtotal.label}
            {/if}
          </span>
          <div>
          <span class="value">
              {if 'discount' == $subtotal.type}-&nbsp;{/if}{$subtotal.value}
          </span>
          {if $subtotal.type === 'shipping'}
              <small class="value">{hook h='displayCheckoutSubtotalDetails' subtotal=$subtotal}</small>
          {/if}
          </div>
        </div>
      {/if}
    {/foreach}
  </div>

  {block name='cart_summary_totals'}
      {include file='checkout/_partials/cart-summary-totals.tpl' cart=$cart}
  {/block}
  <hr class="separator mt-0">

    {block name='cart_voucher'}
    {include file='checkout/_partials/cart-voucher.tpl'}
  {/block}
</div>

{/block}
