{extends file='customer/_partials/address-form.tpl'}

{block name='form_field'}
  {if $field.name eq "alias" and $customer.is_guest}
    {* we don't ask for alias here if customer is not registered *}
  {else}
    {$smarty.block.parent}
  {/if}
{/block}

{block name="address_form_url"}
    <form
      method="POST"
      action="{url entity='order' params=['id_address' => $id_address]}"
      data-id-address="{$id_address}"
      data-refresh-url="{url entity='order' params=['ajax' => 1, 'action' => 'addressForm']}"
      class="needs-validation"
      novalidate
    >
{/block}

{block name='form_fields' append}
  <input type="hidden" name="saveAddress" value="{$type}">
  {if $type === "delivery"}
    <div class="custom-control custom-checkbox">
      <input id="use_same_address" class="custom-control-input" name="use_same_address" type = "checkbox" value = "1" {if $use_same_address} checked {/if}>
      <label class="custom-control-label" for="use_same_address">{l s='Use this address for invoice too' d='Shop.Theme.Checkout'}</label>
    </div>
  {/if}
{/block}

{block name='form_buttons'}
  {if !$form_has_continue_button}
    <button type="button" class="btn btn-primary">{l s='Save' d='Shop.Theme.Actions'}</button>
    <a class="js-cancel-address cancel-address btn btn-link" href="{url entity='order' params=['cancelAddress' => {$type}]}">{l s='Cancel' d='Shop.Theme.Actions'}</a>
  {else}
    <form>
      <button type="submit" class="continue btn btn-primary btn-lg" name="confirm-addresses" value="1">
          {l s='Continue' d='Shop.Theme.Actions'}
      </button>
      {if $customer.addresses|count > 0}
        <a class="js-cancel-address cancel-address btn btn-link" href="{url entity='order' params=['cancelAddress' => {$type}]}">{l s='Cancel' d='Shop.Theme.Actions'}</a>
      {/if}
    </form>
  {/if}
{/block}
