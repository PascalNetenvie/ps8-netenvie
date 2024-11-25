{**
 * Advanced Featured Products
 *
 * @author    businesstech.fr <modules@businesstech.fr> - https://www.businesstech.fr/
 * @copyright Business Tech - https://www.businesstech.fr/
 * @license   see file: LICENSE.txt
 *
 *           ____    _______
 *          |  _ \  |__   __|
 *          | |_) |    | |
 *          |  _ <     | |
 *          | |_) |    | |
 *          |____/     |_|
 *}

<div id="hpprtb">
	<div class="container">
		<div class="tabs">
			<ul class="nav nav-tabs">
				{section loop=$aCategories name=cat}
					{if !empty($aCategories[cat].aCategory.active)}
						<li class="nav-item">
							<a class="noscroll {if $smarty.section.cat.index|intval == 0} active{/if}" id="tab_step{$smarty.section.cat.index|intval}" data-toggle="tab" href="#step{$smarty.section.cat.index|intval}" aria-expanded="false">{foreach from=$aCategories[cat].aCategory.lang item=lang}{if $lang.idLang == $iDefaultLang}{$lang.title|escape:'htmlall':'UTF-8'}{/if}{/foreach}</a>
						</li>
					{/if}
				{/section}
			</ul>
			<div class="tab-content" id="tab-content">
				{if !empty($aCategories)}
					{foreach from=$aCategories name=cat key=key item=aCat}

						{if !empty($aCat.aCategory.active)}
							{if $aCat.sStyleCss == 'MODULE'}
								{assign var='nbItemsPerLine' value=$aCat.iNbByLines}
								{assign var='nbItemsPerLineTablet' value=3}
								{assign var='nbItemsPerLineMobile' value=2}

								{assign var='nbLi' value=$aCat.aProducts|@count}
								{math equation="nbLi/nbItemsPerLine" nbLi=$nbLi nbItemsPerLine=$nbItemsPerLine assign=nbLines}
								{math equation="nbLi/nbItemsPerLineTablet" nbLi=$nbLi nbItemsPerLineTablet=$nbItemsPerLineTablet assign=nbLinesTablet}

								<div class="tab-pane fade in {if $smarty.foreach.cat.index|intval == 0}active{/if}" id="step{$smarty.foreach.cat.index|intval}" aria-expanded="{if $smarty.foreach.cat.index|intval == 0}true{/if}">
									{if !empty($aCat.aProducts)}
										<section class="featured-products clearfix">
											{foreach from=$aCat.aProducts key=key item=product name=products}
												{math equation="(total%perLine)" total=$smarty.foreach.products.total perLine=$nbItemsPerLine assign=totModulo}
												{math equation="(total%perLineT)" total=$smarty.foreach.products.total perLineT=$nbItemsPerLineTablet assign=totModuloTablet}
												{math equation="(total%perLineT)" total=$smarty.foreach.products.total perLineT=$nbItemsPerLineMobile assign=totModuloMobile}
												{if $totModulo == 0}{assign var='totModulo' value=$nbItemsPerLine}{/if}
												{if $totModuloTablet == 0}{assign var='totModuloTablet' value=$nbItemsPerLineTablet}{/if}
												{if $totModuloMobile == 0}{assign var='totModuloMobile' value=$nbItemsPerLineMobile}{/if}
											{/foreach}
										</section>
										{if !empty($aCat.aExtra.sLink)}
											<div id="hpprtb">
												<hr />
												<a class="right-link btn btn-primary mb-1" href="{$aCat.aExtra.sLink|escape:'htmlall':'UTF-8'}" title="{$aCat.aExtra.sTitle|escape:'html':'UTF-8'}">{$aCat.aExtra.sTitle|escape:'html':'UTF-8'}&nbsp;<span class="icon-arrow-right"></a>
												<div class="clr_10"></div>
											</div>
										{/if}
									{else}
										<div class="clr_10 col-xs-12"></div>
										<li class="alert alert-info">{l s='No products at this time.' mod='homeproducttabs'}</li>
									{/if}
								</div>
							{/if}
						{/if}
					{/foreach}
				{/if}
				{* USE CASE FOR PRODUCT LIST TPL IN 1.7 *}
				{foreach from=$aProductPresenter key=key item=aTabs name=aTabs}
					{if !empty($aTabs.aCategory.active)}
						{if $aTabs.sStyleCss == 'THEME'}
							<div class="tab-pane fade in {if $smarty.foreach.aTabs.index|intval == 0}active show{/if}" id="step{$smarty.foreach.aTabs.index|intval}" aria-expanded="{if $smarty.foreach.aTabs.index|intval == 0}true{/if}">
								{if isset($aTabs.aProductPresenter)}
								<div class="sliderproduitstab slick__arrow-outside" {if $aTabs.aProductPresenter.length > 6}data-slick={strip}
									 '{literal}{
									 "slidesToShow": 6,		
									 "prevArrow": "<button type=\"button\" class=\"btn btn-link slick-prev slick-arrow\"><img src=\"/themes/ps8-netenvie/assets/img/prev.svg\" width=\"19\" height=\"36\" alt=\"Précédent\"></button>",
									 "nextArrow": "<button type=\"button\" class=\"btn btn-link slick-next slick-arrow\"><img src=\"/themes/ps8-netenvie/assets/img/next.svg\" width=\"19\" height=\"36\" alt=\"Suivant\"></button>",	
									 "responsive": [{"breakpoint":1650,"settings":{"slidesToShow": 5}}, {"breakpoint":1450,"settings":{"slidesToShow": 4}}, {"breakpoint":1200,"settings":{"slidesToShow": 3}}, {"breakpoint":450,"settings":{"slidesToShow": 2}}, {"breakpoint":300,"settings":{"slidesToShow": 1}}]
									}{/literal}'{/strip}{/if}>
									{foreach from=$aTabs.aProductPresenter key=key item=products}
										{include file="`$sProductListInclude`" product=$products}
									{/foreach}
								</div>
								{/if}
								{*if !empty($aTabs.aExtra.sLink)}
									<div id="hpprtb">
										<hr />
										<a class="right-link btn btn-primary mb-1" href="{$aTabs.aExtra.sLink|escape:'htmlall':'UTF-8'}" title="{$aTabs.aExtra.sTitle|escape:'html':'UTF-8'}">{$aTabs.aExtra.sTitle|escape:'html':'UTF-8'}&nbsp;<span class="icon-arrow-right"></a>
										<div class="clr_10"></div>
									</div>
								{/if*}
							</div>
						{/if}
					{/if}
				{/foreach}
			</div>
		</div>
	</div>
</div>