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
<div class="product-line-grid row no-gutters">
    <div class="col-12 col-lg-7">
        <div class="media">
            {assign var='productimg' value=Image::getImages($language.id, $product.id, $product.id_product_attribute)}  
            {if isset($productimg[0])}
                <img
                    src = "{$link->getImageLink($product.link_rewrite,$product.id_product|cat:"-"|cat:$productimg[0].id_image, 'pdt_180')}" alt="{$product.name|escape:'quotes'}"
                    class="product-line__img" width="{$product.cover.bySize.pdt_180.width}"
                    height="{$product.cover.bySize.pdt_180.height}">
            {else}
                <img src="{$product.cover.bySize.pdt_180.url}" alt="{$product.name|escape:'quotes'}"
                     class="product-line__img" width="{$product.cover.bySize.pdt_180.width}"
                     height="{$product.cover.bySize.pdt_180.height}">
            {/if}

            <div class="media-body product-line__body">
                <a class="h5 product-line__title" href="{$product.url}"
                   data-id_customization="{$product.id_customization|intval}">{$product.name}</a>

                <div class="product-line-info product-price{if $product.has_discount} has-discount{/if}">
                    {if $product.has_discount}
                        <div class="product-discount">
                            <span class="regular-price">{$product.regular_price}</span>
                            {if $product.discount_type === 'percentage'}
                                <span class="discount discount-percentage">
                                    -{$product.discount_percentage_absolute}
                                </span>
                            {else}
                                <span class="discount discount-amount">
                                    -{$product.discount_to_display}
                                </span>
                            {/if}
                        </div>
                    {/if}

                    <div class="current-price">
                        <span class="current-price-display price{if $product.has_discount} current-price-discount{/if}">{$product.price}</span>
                        {if $product.unit_price_full}
                            <div class="unit-price-cart">{$product.unit_price_full}</div>
                        {/if}
                    </div>
                </div>
                {* end product-price *}
                {foreach from=$product.attributes key="attribute" item="value"}
                    <div class="small">
                        <span class="">{$attribute}:</span>
                        <span class="value">{$value}</span>
                    </div>
                {/foreach}
                {if is_array($product.customizations) && $product.customizations|count}
                    {block name='cart_detailed_product_line_customization'}
                        <div class="mt-3">
                            {foreach from=$product.customizations item="customization"}
                                <a href="#" data-toggle="modal" data-target="#product-customizations-modal-{$customization.id_customization}">{l s='Product customization' d='Shop.Theme.Catalog'}</a>
                                <div class="modal fade customization-modal" id="product-customizations-modal-{$customization.id_customization}" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">{l s='Product customization' d='Shop.Theme.Catalog'}</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="{l s='Close' d='Shop.Theme.Global'}">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                {foreach from=$customization.fields item="field"}
                                                    <div class="product-customization-line row">
                                                        <div class="col-sm-3 col-4 label">
                                                            {$field.label}
                                                        </div>
                                                        <div class="col-sm-9 col-8 value">
                                                            {if $field.type == 'text'}
                                                                {if (int)$field.id_module}
                                                                    {$field.text nofilter}
                                                                {else}
                                                                    {$field.text}
                                                                {/if}
                                                            {elseif $field.type == 'image'}
                                                                <img src="{$field.image.small.url}">
                                                            {/if}
                                                        </div>
                                                    </div>
                                                {/foreach}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/foreach}
                        </div>
                    {/block}
                {/if}

            </div>
        </div>
    </div>
    {* end first col *}
    <div class="col-lg-5 col-12">
        {*d-flex align-items-start justify-content-between*}
        <div class="product-line-grid-right product-line-actions">
            {if isset($product.is_gift) && $product.is_gift}
                <span class="gift-quantity">{$product.quantity}</span>
            {else}
                <div>
                    <input
                        class="js-cart-line-product-quantity"
                        data-down-url="{$product.down_quantity_url}"
                        data-up-url="{$product.up_quantity_url}"
                        data-update-url="{$product.update_quantity_url}"
                        data-product-id="{$product.id_product}"
                        type="number"
                        value="{$product.quantity}"
                        name="product-quantity-spin"
                        min="{$product.minimal_quantity}"
                        />
                </div>
            {/if}
            <span class="product-price">
                <strong>
                    {if isset($product.is_gift) && $product.is_gift}
                        <span class="gift">{l s='Gift' d='Shop.Theme.Checkout'}</span>
                    {else}
                        {$product.total}
                    {/if}
                </strong>
            </span>
            <div class="cart-line-product-actions">
                <a
                    class                       = "remove-from-cart"
                    rel                         = "nofollow"
                    href                        = "{$product.remove_from_cart_url}"
                    data-link-action            = "delete-from-cart"
                    data-id-product             = "{$product.id_product|escape:'javascript'}"
                    data-id-product-attribute   = "{$product.id_product_attribute|escape:'javascript'}"
                    data-id-customization   	  = "{$product.id_customization|escape:'javascript'}"
                    >
                    {if !isset($product.is_gift) || !$product.is_gift}
                        <i class="material-icons float-left">delete</i>
                    {/if}
                </a>

                {block name='hook_cart_extra_product_actions'}
                    {hook h='displayCartExtraProductActions' product=$product}
                {/block}

            </div>

        </div>
    </div>
</div>

{* end product-line-grid *}

{*<div class="product-line-grid row">*}
{*<!--  product left content: image-->*}
{*<div class="product-line-grid-left col-2">*}
{*<span class="product-image media-middle">*}
{*<img src="{$product.cover.bySize.cart_default.url}" alt="{$product.name|escape:'quotes'}" class="img-fluid">*}
{*</span>*}
{*</div>*}
{*<div class="col-10 d-flex flex-column flex-md-row justify-content-between">*}
{*<!--  product left body: description -->*}
{*<div class="product-line-grid-body">*}
{*<div class="product-line-info">*}
{*<a class="label" href="{$product.url}" data-id_customization="{$product.id_customization|intval}">{$product.name}</a>*}
{*</div>*}

{*<div class="product-line-info product-price {if $product.has_discount}has-discount{/if}">*}
{*{if $product.has_discount}*}
{*<div class="product-discount">*}
{*<span class="regular-price">{$product.regular_price}</span>*}
{*{if $product.discount_type === 'percentage'}*}
{*<span class="discount discount-percentage">*}
{*-{$product.discount_percentage_absolute}*}
{*</span>*}
{*{else}*}
{*<span class="discount discount-amount">*}
{*-{$product.discount_to_display}*}
{*</span>*}
{*{/if}*}
{*</div>*}
{*{/if}*}
{*<div class="current-price">*}
{*<span class="price">{$product.price}</span>*}
{*{if $product.unit_price_full}*}
{*<div class="unit-price-cart">{$product.unit_price_full}</div>*}
{*{/if}*}
{*</div>*}
{*</div>*}



{*{foreach from=$product.attributes key="attribute" item="value"}*}
{*<div class="product-line-info">*}
{*<span class="label">{$attribute}:</span>*}
{*<span class="value">{$value}</span>*}
{*</div>*}
{*{/foreach}*}

{*{if is_array($product.customizations) && $product.customizations|count}*}
{*{block name='cart_detailed_product_line_customization'}*}
{*{foreach from=$product.customizations item="customization"}*}
{*<a href="#" data-toggle="modal" data-target="#product-customizations-modal-{$customization.id_customization}">{l s='Product customization' d='Shop.Theme.Catalog'}</a>*}
{*<div class="modal fade customization-modal" id="product-customizations-modal-{$customization.id_customization}" tabindex="-1" role="dialog" aria-hidden="true">*}
{*<div class="modal-dialog" role="document">*}
{*<div class="modal-content">*}
{*<div class="modal-header">*}
{*<h4 class="modal-title">{l s='Product customization' d='Shop.Theme.Catalog'}</h4>*}
{*<button type="button" class="close" data-dismiss="modal" aria-label="{l s='Close' d='Shop.Theme.Global'}">*}
{*<span aria-hidden="true">&times;</span>*}
{*</button>*}
{*</div>*}
{*<div class="modal-body">*}
{*{foreach from=$customization.fields item="field"}*}
{*<div class="product-customization-line row">*}
{*<div class="col-sm-3 col-4 label">*}
{*{$field.label}*}
{*</div>*}
{*<div class="col-sm-9 col-8 value">*}
{*{if $field.type == 'text'}*}
{*{if (int)$field.id_module}*}
{*{$field.text nofilter}*}
{*{else}*}
{*{$field.text}*}
{*{/if}*}
{*{elseif $field.type == 'image'}*}
{*<img src="{$field.image.small.url}">*}
{*{/if}*}
{*</div>*}
{*</div>*}
{*{/foreach}*}
{*</div>*}
{*</div>*}
{*</div>*}
{*</div>*}
{*{/foreach}*}
{*{/block}*}
{*{/if}*}
{*</div>*}

{*<!--  product left body: description -->*}
{*<div class="product-line-grid-right product-line-actions d-flex align-items-start justify-content-between">*}
{*{if isset($product.is_gift) && $product.is_gift}*}
{*<span class="gift-quantity">{$product.quantity}</span>*}
{*{else}*}
{*<div>*}
{*<input*}
{*class="js-cart-line-product-quantity"*}
{*data-down-url="{$product.down_quantity_url}"*}
{*data-up-url="{$product.up_quantity_url}"*}
{*data-update-url="{$product.update_quantity_url}"*}
{*data-product-id="{$product.id_product}"*}
{*type="text"*}
{*value="{$product.quantity}"*}
{*name="product-quantity-spin"*}
{*min="{$product.minimal_quantity}"*}
{*/>*}
{*</div>*}
{*{/if}*}
{*<span class="product-price mx-4">*}
{*<strong>*}
{*{if isset($product.is_gift) && $product.is_gift}*}
{*<span class="gift">{l s='Gift' d='Shop.Theme.Checkout'}</span>*}
{*{else}*}
{*{$product.total}*}
{*{/if}*}
{*</strong>*}
{*</span>*}
{*<div class="cart-line-product-actions">*}
{*<a*}
{*class                       = "remove-from-cart"*}
{*rel                         = "nofollow"*}
{*href                        = "{$product.remove_from_cart_url}"*}
{*data-link-action            = "delete-from-cart"*}
{*data-id-product             = "{$product.id_product|escape:'javascript'}"*}
{*data-id-product-attribute   = "{$product.id_product_attribute|escape:'javascript'}"*}
{*data-id-customization   	  = "{$product.id_customization|escape:'javascript'}"*}
{*>*}
{*{if !isset($product.is_gift) || !$product.is_gift}*}
{*<i class="material-icons float-left">delete</i>*}
{*{/if}*}
{*</a>*}

{*{block name='hook_cart_extra_product_actions'}*}
{*{hook h='displayCartExtraProductActions' product=$product}*}
{*{/block}*}

{*</div>*}

{*</div>*}
{*</div>*}
{*</div>*}
