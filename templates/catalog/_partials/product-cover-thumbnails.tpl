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

{assign var='numImage' value=0}
{assign var='defaultImage' value=$product.default_image}   

{if isset($allImages)}
    {assign var='allImagesCount' value=$allImages|count }   
{else} 
    {assign var='allImagesCount' value=0}   
{/if}
<div class="images-container d-flex flex-wrap">
    {block name='product_images'}
        {if $product.images|count > 1 || $allImagesCount > 0}
            <div class="col-lg-2 col-12 product-thumbs js-qv-product-images visible-desktop slick__arrow-outside order-2 order-lg-1" data-count="{$product.images|count + $allImagesCount}">
                <div class="product-thumb slick-active">
                    <div class="">
                        <img
                            class="thumb js-thumb img-fluid"
                            src="{$defaultImage.bySize.pdt_100.url}"
                            alt="{$defaultImage.legend}" title="{$defaultImage.legend}"
                            width="{$product.defaultImage.bySize.pdt_100.width}"
                            height="{$product.defaultImage.bySize.pdt_100.height}"
                            >
                        <noscript>
                        <img class="img-fluid" src="{$defaultImage.bySize.pdt_100.url}" alt="{$defaultImage.legend}">
                        </noscript>
                    </div>
                </div>

                {foreach from=$product.images item=image}
                    {if $image.id_image != $defaultImage.id_image}
                        <div class="product-thumb" id-image="{$image.id_image}">
                            <div class="rc">
                                <img
                                    class="thumb js-thumb lazyload img-fluid"
                                    data-src="{$image.bySize.pdt_100.url}"
                                    alt="{$image.legend}"
                                    title="{$image.legend}"
                                    width="{$product.defaultImage.bySize.pdt_100.width}"
                                    height="{$product.defaultImage.bySize.pdt_100.height}"
                                    >
                                <noscript>
                                <img class="img-fluid" src="{$image.bySize.pdt_100.url}" alt="{$image.legend}">
                                </noscript>
                            </div>
                        </div>
                    {/if}
                {/foreach}

                {if $allImagesCount > 0}
                    {foreach from=$allImages item=image}
                        {if $image.id_image != $defaultImage.id_image}
                            <div class="product-thumb all" id-image="{$image.id_image}">
                                <div class="rc">
                                    <img
                                        class="thumb js-thumb lazyload img-fluid"
                                        data-src="{$image.bySize.pdt_100.url}"
                                        alt="{$image.legend}"
                                        title="{$image.legend}"
                                        width="{$product.defaultImage.bySize.pdt_100.width}"
                                        height="{$product.defaultImage.bySize.pdt_100.height}"
                                        >
                                    <noscript>
                                    <img class="img-fluid" src="{$image.bySize.pdt_100.url}" alt="{$image.legend}">
                                    </noscript>
                                </div>
                            </div>
                        {/if}
                    {/foreach}
                {/if}

            </div>
        {/if}
    {/block}


    {block name='product_cover'}
        <div class="position-relative col-lg-10 col-12 order-1 order-lg-2">
            {block name='product_flags'}
                {include file='catalog/_partials/product-flags.tpl'}
            {/block}
            <div class="products-imagescover mb-2" data-count="{$product.images|count + $allImagesCount}">

                <div class="product-img thumbnail-container">
                    <div class="">
                        {if $defaultImage}
                            <img class="img-fluid"
                                 srcset="{$defaultImage.bySize.pdt_540.url} 680w,{$defaultImage.bySize.pdt_360.url} 360w"
                                 src="{$defaultImage.bySize.pdt_300.url}"
                                 alt="{$defaultImage.legend}" title="{$defaultImage.legend}"
                                 sizes="(min-width: 768px) 680px, (max-width: 767px) 320px"
                                 width="320"
                                 height="320"
                                 alt="{$defaultImage.legend}" title="{$defaultImage.legend}">
                        {/if}
                        <noscript>
                        <img class="img-fluid" src="{$defaultImage.bySize.pdt_300.url}" alt="{$defaultImage.legend}">
                        </noscript>
                    </div>
                    <button data-id-image="{$defaultImage.id_image}" data-num-image="{$numImage}" type="button" class="btn btn-link btn-zoom product-layer-zoom" data-toggle="modal" data-target="#product-modal">
                        <i class="material-icons zoom-in">&#xE8FF;</i>
                    </button>
                </div>

                {foreach from=$product.images item=image   name="images"}
                    {if $image.id_image != $defaultImage.id_image}
                        {$numImage = $numImage +1}
                        <div class="product-img" id-image="{$image.id_image}">
                            <div class="rc">
                                <img
                                    class="img-fluid lazyload"
                                    {if !$smarty.foreach.images.first && !$defaultImage}data-sizes="auto"{/if}
                                    {if !$smarty.foreach.images.first && !$defaultImage}data-{/if}srcset="{$image.bySize.pdt_540.url} 680w,{$image.bySize.pdt_360.url} 360w"
                                    {if !$smarty.foreach.images.first && !$defaultImage}data-{/if}src="{$image.bySize.pdt_300.url}"
                                    alt="{$image.legend}"
                                    title="{$image.legend}"
                                    sizes="(min-width: 768px) 680px, (max-width: 767px) 320px"
                                    width="320"
                                    height="320"
                                    >
                                <noscript>
                                <img class="img-fluid" src="{$image.bySize.pdt_300.url}" alt="{$image.legend}">
                                </noscript>
                            </div>
                            <button data-id-image="{$image.id_image}" data-num-image="{$numImage}" type="button" class="btn btn-link btn-zoom product-layer-zoom" data-toggle="modal" data-target="#product-modal">
                                <i class="material-icons zoom-in">&#xE8FF;</i>
                            </button>
                        </div>
                    {/if}
                {/foreach}

                {if $allImagesCount > 0}
                    {foreach from=$allImages item=image   name="images"}
                        {if $image.id_image != $defaultImage.id_image}
                            {$numImage = $numImage +1}

                            <div class="product-img all" id-image="{$image.id_image}">
                                <div class="rc">
                                    <img
                                        class="img-fluid lazyload"
                                        {if !$smarty.foreach.images.first && !$defaultImage}data-sizes="auto"{/if}
                                        {if !$smarty.foreach.images.first && !$defaultImage}data-{/if}srcset="{$image.bySize.pdt_540.url} 680w,{$image.bySize.pdt_360.url} 360w"
                                        {if !$smarty.foreach.images.first && !$defaultImage}data-{/if}src="{$image.bySize.pdt_300.url}"
                                        alt="{$image.legend}"
                                        title="{$image.legend}"
                                        sizes="(min-width: 768px) 680px, (max-width: 767px) 320px"
                                        width="320"
                                        height="320"
                                        >
                                    <noscript>
                                    <img class="img-fluid" src="{$image.bySize.pdt_300.url}" alt="{$image.legend}">
                                    </noscript>
                                </div>
                                <button data-id-image="{$image.id_image}" data-num-image="{$numImage}" type="button" class="btn btn-link btn-zoom product-layer-zoom" data-toggle="modal" data-target="#product-modal">
                                    <i class="material-icons zoom-in">&#xE8FF;</i>
                                </button>
                            </div>
                        {/if}
                    {/foreach}
                {/if}


            </div>
        </div>
    {/block}

    {hook h='displayAfterProductThumbs'}


    <div class="modal fade" id="product-modal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="prev-image-modal d-md-none" aria-label="Previous">
                        <i class="material-icons">chevron_leftt</i>
                    </button>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="material-icons">close</i>
                    </button>
                    <button type="button" class="next-image-modal d-md-none" aria-label="Next">
                        <i class="material-icons">chevron_right</i>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="js-slick-product">

                        <div>
                            {if $defaultImage}
                                <img id="image-{$defaultImage.id_image}" data-src="{$defaultImage.large.url}" class="img-fluid lazyload" width="{$defaultImage.large.width}" alt="{$defaultImage.legend}" title="{$defaultImage.legend}" />
                            {/if}
                        </div>

                        {foreach from=$product.images item=image}
                            {if $image.id_image != $defaultImage.id_image}
                                <div>
                                    <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}" />
                                </div>
                            {/if}
                        {/foreach}

                        {if $allImagesCount > 0}
                            {foreach from=$allImages item=image}
                                {if $image.id_image != $defaultImage.id_image}
                                    <div>
                                        <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}" />
                                    </div>
                                {/if}
                            {/foreach}
                        {/if}
                    </div>
                </div>
                <div class="d-block d-md-none">
                    <p class="label-zoom">Zoom : appuyer et glisser</p>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</div>