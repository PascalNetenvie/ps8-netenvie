<div class="tabs product-tabs card accordion" id="tabs-product">

    {if $product.description}
        <a href="#tabs-product" class="card-header" id="heading-description" data-toggle="collapse" data-target="#content-description" aria-controls="content-description" aria-expanded="{if $product.description}true{else}false{/if}">
            {l s='Description' d='Shop.Theme.Catalog'}
        </a>
        <div id="content-description" class="collapse{if $product.description} show{/if}" aria-labelledby="heading-description" data-parent="#tabs-product">
            <div class="card-body">
                {if !isset($description)}
                    {assign var='description' value=$product.description}   
                {/if}
                {block name='product_description'}
                    <div class="product-description">{$description nofilter}</div>
                {/block}
            </div>
        </div>
    {/if}

    {if isset($otherDescriptions)}
        {foreach from=$otherDescriptions item=description key=extraKey}
            <a href="#tabs-product" class="card-header" id="heading-description{$extraKey}" data-toggle="collapse" data-target="#content-description{$extraKey}" aria-controls="content-description{$extraKey}">
                {$description[0]}
            </a>
            <div id="content-description{$extraKey}" class="collapse" aria-labelledby="heading-description{$extraKey}" data-parent="#tabs-product">
                <div class="card-body">
                    {if !isset($description)}
                        {assign var='description' value=$product.description}   
                    {/if}
                    {block name='product_description'}
                        <div class="product-description">{$description[1] nofilter}</div>
                    {/block}
                </div>
            </div>
        {/foreach}
    {/if}

    <a href="#tabs-product" class="card-header" id="heading-details" data-toggle="collapse" data-target="#content-details" aria-controls="content-details" aria-expanded="{if !$product.description}true{else}false{/if}">
        {l s='Product Details' d='Shop.Theme.Catalog'}
    </a>
    <div id="content-details" class="collapse{if !$product.description} show{/if}" aria-labelledby="heading-details" data-parent="#tabs-product">
        <div class="card-body">
            {block name='product_details'}
                {include file='catalog/_partials/product-details.tpl'}
            {/block}
        </div>
    </div>

    {if $product.attachments}
        <a href="#tabs-product" class="card-header" id="heading-attachments" data-toggle="collapse" data-target="#content-attachments" aria-controls="content-attachments">
            {l s='Attachments' d='Shop.Theme.Catalog'}
        </a>
        <div id="content-attachments" class="collapse" aria-labelledby="heading-attachments" data-parent="#tabs-product">
            <div class="card-body">
                <section class="product-attachments">
                    <p class="h4 product__download">{l s='Download' d='Shop.Theme.Actions'}</p>
                    {foreach from=$product.attachments item=attachment}
                        <div class="attachment">
                            <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">{$attachment.name}</a>
                            <p class="small">{$attachment.description}</p>
                            <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                                {l s='Download' d='Shop.Theme.Actions'} ({$attachment.file_size_formatted})
                            </a>
                        </div>
                    {/foreach}
                </section>
            </div>
        </div>
    {/if}

    {foreach from=$product.extraContent item=extra key=extraKey}        
        <a href="#tabs-product" class="card-header" id="heading-extra-{$extraKey}" data-toggle="collapse" data-target="#content-extra-{$extraKey}" aria-controls="content-extra-{$extraKey}">
            {$extra.title}
        </a>
        <div id="content-extra-{$extraKey}" class="collapse" aria-labelledby="heading-extra-{$extraKey}" data-parent="#tabs-product">
            <div class="card-body collapse {$extra.attr.class}" id="extra-{$extraKey}" {foreach $extra.attr as $key => $val} {$key}="{$val}"{/foreach}>
                {$extra.content nofilter}
            </div>
        </div>
    {/foreach}
</div>