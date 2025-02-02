<?php

/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
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
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
use PrestaShop\PrestaShop\Adapter\Image\ImageRetriever;
use PrestaShop\PrestaShop\Adapter\Presenter\AbstractLazyArray;
use PrestaShop\PrestaShop\Adapter\Presenter\Product\ProductLazyArray;
use PrestaShop\PrestaShop\Adapter\Presenter\Product\ProductListingPresenter;
use PrestaShop\PrestaShop\Adapter\Product\PriceFormatter;
use PrestaShop\PrestaShop\Adapter\Product\ProductColorsRetriever;
use PrestaShop\PrestaShop\Core\Addon\Module\ModuleManagerBuilder;
use PrestaShop\PrestaShop\Core\Product\ProductExtraContentFinder;
use PrestaShop\PrestaShop\Core\Product\ProductInterface;

use PrestaShop\PrestaShop\Core\Util\File\YamlParser;
class ProductControllerTheme extends ProductControllerCore {

    var $themeSettings = [];
    var $overrideSettings = [];

    public function init()
    {
        $configurationCacheDirectory = (new Configuration())->get('_PS_CACHE_DIR_');
        $yamlParser = new YamlParser($configurationCacheDirectory);
        $this->themeSettings = $yamlParser->parse(_PS_THEME_DIR_ . '/config/theme.yml');
        $this->overrideSettings = $this->themeSettings['override_settings']['controller_product'];
        parent::init();
    }

    public function initContent() {
        $res = parent::initContent();
        if (isset($this->overrideSettings['remove_init_content_override']) && $this->overrideSettings['remove_init_content_override']) {
            return $res;
        }
        if (isset($this->overrideSettings['init_content_override_product_descriptions']) && $this->overrideSettings['init_content_override_product_descriptions']) {
            $this->assignOtherDescriptions();
        }
        if (isset($this->overrideSettings['init_content_override_product_all_images']) && $this->overrideSettings['init_content_override_product_all_images']) {
            $this->assignAllImages();
        }
        return $res;
    }

    public function displayAjaxRefresh() {        $res = parent::initContent();
        parent::displayAjaxRefresh();
        if (isset($this->overrideSettings['remove_display_ajax_refresh_override']) && $this->overrideSettings['remove_display_ajax_refresh_override']) {
            return;
        }
        if (isset($this->overrideSettings['display_ajax_refresh_override_product_descriptions']) && $this->overrideSettings['display_ajax_refresh_override_product_descriptions']) {
            $this->assignOtherDescriptions();
        }
        return $res;
    }

    public function assignOtherDescriptions() {

        $product_for_template = $this->context->smarty->getTemplateVars('product');
        if ($product_for_template) {
			
			$manufacturer = new Manufacturer( $product_for_template->id_manufacturer, $this->context->language->id);
			$this->context->smarty->assign('manufacturername', $manufacturer->name);
		
            $description = $product_for_template->description;
            //var_dump($description);
            // preg_match_all("|###(.*)###|U", $description, $titres, PREG_PATTERN_ORDER);
            preg_match_all("~####(.*)####~", $description, $titres, PREG_PATTERN_ORDER);

            $otherDescriptions = array();
            $alls = explode('####', $description);
            foreach ($alls as $i => $all) {
                if ($i == 0) {
                    $this->context->smarty->assign('description', $all);
                } else {
                    $otherDescription = explode('###', $all);
                    if (!count($otherDescription) > 1) {
                        $otherDescription = explode('##', $all);
                    }
                    if (count($otherDescription) > 1) {
                        $otherDescriptions[] = $otherDescription;
                    }
                }
            }

            $this->context->smarty->assign('otherDescriptions', $otherDescriptions);
        }
    }

    public function assignAllImages() {
        $isAjax = Tools::getValue('ajax');
        $productIdAttribute = (int) Tools::getValue('id_product_attribute');
        $productIdAttribute = 0;
        //var_dump($productIdAttribute);die();
        $productId = (int) Tools::getValue('id_product');
        $product = $this->product;
        if (Validate::isLoadedObject($product)) {
            $name = is_array($product->name) ? $product->name[$id_lang] : $product->name;
            $rawProduct = array('id_product' => $productId, 'name' => $name, 'reference' => $product->reference);
            $imageRetriever = new ImageRetriever(
                    $this->context->link
            );

            $allImages = $imageRetriever->getAllProductImages($rawProduct, $this->context->language);
            $product_for_template = $this->context->smarty->getTemplateVars('product');

            $excludes = array();
            foreach ($product_for_template->images as $image) {
                $excludes[] = $image['id_image'];
            }

            $allImagesFiltered = array();
            foreach ($allImages as $image) {
                if (!$isAjax && !$productIdAttribute > 0 && isset($image['cover']) && $image['cover'] > 0) {
                    $this->context->smarty->assign('cover', $image);
                } elseif (!in_array($image['id_image'], $excludes)) {
                    $allImagesFiltered[] = $image;
                }
            }
            /* die();

              var_dump($product_for_template->cover);
              echo '<br />';
              echo '<br />';
              var_dump($image['cover']);
              die();
             */
            $this->context->smarty->assign('allImages', $allImagesFiltered);
        }
    }

}
