{**
* Copyright since 2007 PrestaShop SA and Contributors
* PrestaShop is an International Registered Trademark & Property of PrestaShop SA
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License 3.0 (AFL-3.0)
* that is bundled with this package in the file LICENSE.md.
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
* needs please refer to https://devdocs.prestashop.com/ for more information.
*
* @author    PrestaShop SA and Contributors <contact@prestashop.com>
* @copyright Since 2007 PrestaShop SA and Contributors
* @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
*}
<div id="js-product-list-footer">

    {if $category.image.large.url && isset($thumbUri)}
        <div class="row block-category-footer" id="category-description">
    {/if}

        {if $category.image.large.url && isset($thumbUri)}
            <div class="col-md-6 category-cover">
                <img src="{$category.image.large.url}" class="lazyload"
                    alt="{if !empty($category.image.legend)}{$category.image.legend}{else}{$category.name}{/if}">
            </div>
        {/if}

        {if isset($additional_description1)}
            <div class="category-additional-description{if $category.image.large.url && isset($thumbUri)} col-md-6{/if}">
                {$additional_description1 nofilter}
                {if $additional_description2}
                    <span class="lien" onclick="jQuery(this).hide();" data-toggle="collapse"
                        data-target="#collapseAdditionalDescription2" aria-expanded="false" aria-controls="collapseExample">
                        {l s='Read more' d='Shop.Theme.Catalog'}
                    </span>
                    <div class="collapse" id="collapseAdditionalDescription2">
                        {$additional_description2 nofilter}
                    </div>
                {/if}
            </div>
        {elseif isset($category) && $category.additional_description && $listing.pagination.items_shown_from == 1}
            <div class="category-additional-description{if $category.image.large.url && isset($thumbUri)} col-md-6{/if}">
                {$category.additional_description nofilter}
            </div>
        {/if}

    {if $category.image.large.url && isset($thumbUri)}
        </div>
    {/if}


</div>