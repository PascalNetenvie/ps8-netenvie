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
{block name='order_messages_table'}
  {if $order.messages}
    <div class="box messages">
      <h3>{l s='Messages' d='Shop.Theme.Customeraccount'}</h3>
      {foreach from=$order.messages item=message}
        <div class="message row">
          <div class="col-sm-4">
            {$message.name}<br/>
            {$message.message_date}
          </div>
          <div class="col-sm-8">
            {$message.message nofilter}
          </div>
        </div>
      {/foreach}
    </div>
    <hr>
  {/if}
{/block}

{block name='order_message_form'}
  <section class="order-message-form box">
    <form class="needs-validation" action="{$urls.pages.order_detail}" method="post" novalidate autocomplete="false">

      <header>
        <h3>{l s='Add a message' d='Shop.Theme.Customeraccount'}</h3>
        <p>{l s='If you would like to add a comment about your order, please write it in the field below.' d='Shop.Theme.Customeraccount'}</p>
      </header>

      <section class="form-fields">
        <div class="form-group">
          <label for="id_product_msg">{l s='Product' d='Shop.Forms.Labels'}</label>
            <select id="id_product_msg" name="id_product" class="custom-select">
              <option value="0">{l s='-- please choose --' d='Shop.Forms.Labels'}</option>
              {foreach from=$order.products item=product}
                <option value="{$product.id_product}">{$product.name}</option>
              {/foreach}
            </select>
        </div>

        <div class="form-group ">
          <label for="msgText">{l s='Message' d='Shop.Forms.Labels'}</label>
          <div class="form-group">
            <textarea rows="3" name="msgText" class="form-control" id="msgText" required></textarea>
            <div class="invalid-feedback js-invalid-feedback-browser"></div>
          </div>
        </div>

      </section>

      <footer class="form-footer">
        <input type="hidden" name="id_order" value="{$order.details.id}">
        <button type="button" name="submitMessage" class="btn btn-primary form-control-submit">
          {l s='Send' d='Shop.Theme.Actions'}
        </button>
      </footer>

    </form>
  </section>
{/block}
