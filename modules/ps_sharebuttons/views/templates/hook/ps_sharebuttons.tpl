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

{block name='social_sharing'}
  {if $social_share_links}
    <div class="social-sharing--product-cont">
    <div class="social-sharing social-sharing--product">
      <span>{l s='Share' d='Shop.Theme.Actions'}</span>
        {foreach from=$social_share_links item='social_share_link'}
          <a href="{$social_share_link.url}" class="{$social_share_link.class}" title="{$social_share_link.label}" target="_blank" rel="nofollow noopener">	  
			{if $social_share_link.label == 'Partager'}
			    <svg version="1.2" baseProfile="tiny" id="facebook_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 x="0px" y="0px" viewBox="0 0 25 25" overflow="visible" xml:space="preserve">
					<path id="XMLID_659_"  d="M9.36,24.95h5.01V12.39h3.5l0.37-4.2h-3.87c0,0,0-1.57,0-2.39c0-0.99,0.2-1.38,1.16-1.38
						  c0.77,0,2.71,0,2.71,0V0.05c0,0-2.86,0-3.47,0c-3.73,0-5.41,1.64-5.41,4.79c0,2.74,0,3.35,0,3.35H6.75v4.26h2.61V24.95z"/>
				</svg> 
			{else if $social_share_link.label == 'Instagram'}
				<svg version="1.2" baseProfile="tiny" id="instagram_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 x="0px" y="0px" viewBox="0 0 25 25" overflow="visible" xml:space="preserve">
					<g id="XMLID_649_">
						<path id="XMLID_656_"  d="M12.5,3.24c3.02,0,3.37,0.01,4.56,0.07c1.1,0.05,1.7,0.23,2.1,0.39
							  c0.53,0.2,0.9,0.45,1.3,0.84c0.4,0.4,0.64,0.77,0.84,1.3c0.15,0.4,0.34,1,0.39,2.1c0.05,1.19,0.07,1.55,0.07,4.56
							  c0,3.02-0.01,3.37-0.07,4.56c-0.05,1.1-0.23,1.7-0.39,2.1c-0.2,0.53-0.45,0.9-0.84,1.3c-0.4,0.4-0.77,0.64-1.3,0.84
							  c-0.4,0.15-1,0.34-2.1,0.39c-1.19,0.05-1.55,0.07-4.56,0.07c-3.02,0-3.37-0.01-4.56-0.07c-1.1-0.05-1.7-0.23-2.1-0.39
							  c-0.53-0.2-0.9-0.45-1.3-0.84c-0.4-0.4-0.64-0.77-0.84-1.3c-0.15-0.4-0.34-1-0.39-2.1c-0.05-1.19-0.07-1.55-0.07-4.56
							  c0-3.02,0.01-3.37,0.07-4.56c0.05-1.1,0.23-1.7,0.39-2.1c0.2-0.53,0.45-0.9,0.84-1.3c0.4-0.4,0.77-0.64,1.3-0.84
							  c0.4-0.15,1-0.34,2.1-0.39C9.13,3.25,9.48,3.24,12.5,3.24 M12.5,1.21c-3.07,0-3.45,0.01-4.66,0.07C6.64,1.33,5.82,1.52,5.1,1.8
							  c-0.74,0.29-1.37,0.67-2,1.3c-0.63,0.63-1.01,1.26-1.3,2C1.52,5.82,1.33,6.64,1.27,7.84c-0.06,1.2-0.07,1.59-0.07,4.66
							  s0.01,3.45,0.07,4.66c0.05,1.2,0.25,2.02,0.52,2.74c0.29,0.74,0.67,1.37,1.3,2c0.63,0.63,1.26,1.01,2,1.3
							  c0.72,0.28,1.54,0.47,2.74,0.52c1.2,0.05,1.59,0.07,4.66,0.07c3.07,0,3.45-0.01,4.66-0.07c1.2-0.05,2.02-0.25,2.74-0.52
							  c0.74-0.29,1.37-0.67,2-1.3c0.63-0.63,1.01-1.26,1.3-2c0.28-0.72,0.47-1.54,0.52-2.74c0.05-1.2,0.07-1.59,0.07-4.66
							  s-0.01-3.45-0.07-4.66c-0.05-1.2-0.25-2.02-0.52-2.74c-0.29-0.74-0.67-1.37-1.3-2c-0.63-0.63-1.26-1.01-2-1.3
							  c-0.72-0.28-1.54-0.47-2.74-0.52C15.95,1.22,15.57,1.21,12.5,1.21"/>
						<path id="XMLID_653_" d="M12.5,6.7c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8c3.2,0,5.8-2.6,5.8-5.8
							  S15.7,6.7,12.5,6.7 M12.5,16.26c-2.08,0-3.76-1.69-3.76-3.76c0-2.08,1.69-3.76,3.76-3.76c2.08,0,3.76,1.69,3.76,3.76
							  C16.26,14.58,14.58,16.26,12.5,16.26"/>
						<path id="XMLID_652_" d="M19.88,6.47c0,0.75-0.61,1.36-1.36,1.36c-0.75,0-1.36-0.61-1.36-1.36s0.61-1.36,1.36-1.36
							  C19.28,5.12,19.88,5.72,19.88,6.47"/>
					</g>
				</svg> 
			{else if $social_share_link.label == 'Pinterest'}
				<svg version="1.2" baseProfile="tiny" id="pinterest_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 x="0px" y="0px" viewBox="0 0 25 25" overflow="visible" xml:space="preserve">
					<path id="XMLID_646_"  d="M6.31,14.41c0.32,0.13,0.61,0.01,0.7-0.35c0.06-0.25,0.22-0.87,0.29-1.13
						  c0.09-0.35,0.06-0.48-0.2-0.78c-0.57-0.67-0.93-1.53-0.93-2.76c0-3.55,2.66-6.73,6.92-6.73c3.77,0,5.85,2.31,5.85,5.39
						  c0,4.05-1.79,7.47-4.46,7.47c-1.47,0-2.57-1.22-2.22-2.71c0.42-1.78,1.24-3.7,1.24-4.99c0-1.15-0.62-2.11-1.9-2.11
						  c-1.5,0-2.71,1.55-2.71,3.64c0,1.33,0.45,2.22,0.45,2.22s-1.54,6.52-1.81,7.66C7,21.51,7.45,24.3,7.49,24.58
						  c0.02,0.17,0.24,0.21,0.33,0.08c0.14-0.18,1.93-2.39,2.54-4.6c0.17-0.62,0.99-3.86,0.99-3.86c0.49,0.93,1.92,1.75,3.43,1.75
						  c4.52,0,7.58-4.12,7.58-9.63c0-4.17-3.53-8.05-8.9-8.05c-6.68,0-10.04,4.79-10.04,8.78C3.43,11.46,4.34,13.61,6.31,14.41z"/>
				</svg>
			{else if $social_share_link.label == 'Tweet'}
				{$social_share_link.label}
			{/if}
		  </a>
        {/foreach}
    </div>
    </div>
  {/if}
{/block}
