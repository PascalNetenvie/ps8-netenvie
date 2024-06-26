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
<section id="order-summary-content" class="page-order-confirmation">

      <h4 class="h4 black text-center">{l s='Please check your order before payment' d='Shop.Theme.Checkout'}</h4>



      <h4 class="h4">
      {l s='Addresses' d='Shop.Theme.Checkout'}
        <button class="step-edit text-muted btn btn-sm btn-link py-0" data-toggle="collapse" data-target="#content-checkout-addresses-step" aria-expanded="false" aria-controls="content-checkout-addresses-step">
          <i class="material-icons edit small">mode_edit</i> {l s='Edit' d='Shop.Theme.Actions'}
        </button>
      </h4>

  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="h5 black addresshead">{l s='Your Delivery Address' d='Shop.Theme.Checkout'}</h4>

        </div>

        <div class="card-body">
          {$customer.addresses[$cart.id_address_delivery]['formatted'] nofilter}
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
        <h4 class="h5 black addresshead">{l s='Your Invoice Address' d='Shop.Theme.Checkout'}</h4>
        </div>
        <div class="card-body">
          {$customer.addresses[$cart.id_address_invoice]['formatted'] nofilter}
        </div>
      </div>
    </div>
  </div>


      <h4 class="h4">
      {l s='Shipping Method' d='Shop.Theme.Checkout'}
        <button class="step-edit text-muted btn btn-sm btn-link py-0" data-toggle="collapse" data-target="#content-checkout-delivery-step" aria-expanded="false" aria-controls="content-checkout-delivery-step">
          <i class="material-icons edit small">mode_edit</i> {l s='Edit' d='Shop.Theme.Actions'}
        </button>
      </h4>
  <table class="table table-bordered">
    <tr>
        {if $selected_delivery_option.logo}
          <td class="logo-container d-none d-sm-block">
            <img src="{$selected_delivery_option.logo}" alt="{$selected_delivery_option.name}">
          </td>
        {/if}
      <td class="carrier-name">
          {$selected_delivery_option.name}
      </td>
      <td class="carrier-delay">{$selected_delivery_option.delay}</td>
      <td class="carrier-price">{$selected_delivery_option.price}</td>
    </tr>
  </table>



    {block name='order_confirmation_table'}
      {include file='checkout/_partials/order-final-summary-table.tpl'
         products=$cart.products
         products_count=$cart.products_count
         subtotals=$cart.subtotals
         totals=$cart.totals
         labels=$cart.labels
         add_product_link=true
       }
    {/block}
</section>
