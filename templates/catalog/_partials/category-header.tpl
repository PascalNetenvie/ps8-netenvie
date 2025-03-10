<div class="block-category card-block visible--desktop">
    <div id="_desktop_category_header">
        <h1 class="h1">{$category.name}{if isset($smarty.get.page) && $smarty.get.page > 1}
            <span class="small"> - Page {$smarty.get.page}</span>{/if}
        </h1>
    </div>
    {if ($category.description || isset($description1) || $category.image.bySize.large_default.url || isset($thumbUri)) && $listing.pagination.items_shown_from == 1}
        <div class="d-flex">
            {if isset($description1) }
                <div id="category-description" class="text-muted">
                    {$description1 nofilter}
                    {if isset($description2) }
                        <span class="lien" onclick="jQuery(this).hide();" data-toggle="collapse" data-target="#collapseDescription2"
                            aria-expanded="false" aria-controls="collapseExample">
                            {l s='Read more' d='Shop.Theme.Catalog'}
                        </span>
                        <div class="collapse" id="collapseDescription2">
                            {$description2 nofilter}
                        </div>
                    {/if}
                </div>
            {elseif $category.description}
                <div id="category-description" class="text-muted">{$category.description nofilter}</div>
            {/if}
            {if isset($thumbUri)}
                <div class="category-cover">
                    <img src="{$thumbUri}" class="lazyload"
                        alt="{if !empty($category.image.legend)}{$category.image.legend}{else}{$category.name}{/if}">
                </div>
            {elseif $category.image.bySize.large_default.url}
                <div class="category-cover">
                    <img src="{$category.image.bySize.large_default.url}" class="lazyload"
                        alt="{if !empty($category.image.legend)}{$category.image.legend}{else}{$category.name}{/if}">
                </div>
            {/if}
        </div>
    {/if}
</div>
<div class="_mobile_category_header"></div>