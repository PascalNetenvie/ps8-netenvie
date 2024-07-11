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
use PrestaShop\PrestaShop\Adapter\Category\CategoryProductSearchProvider;
use PrestaShop\PrestaShop\Adapter\Image\ImageRetriever;
use PrestaShop\PrestaShop\Core\Product\Search\ProductSearchQuery;
use PrestaShop\PrestaShop\Core\Product\Search\SortOrder;

class CategoryController extends CategoryControllerCore {

    public function initContent() {
        parent::initContent();
        $this->assignOtherDescriptions();
    }

    public function assignOtherDescriptions() {
        $category = $this->context->smarty->getTemplateVars('category');
        if ($category) {
            $description = $category['description'];
            $alls = explode('####', $description);
            if (count($alls) == 2) {
                $this->context->smarty->assign('description1', $alls[0]);
                $alls2 = explode('@@@', $alls[1]);
                if (count($alls2) == 3) {
                    $this->context->smarty->assign('description2', '' . $alls2[0] . '<p id="conseils" class ="h3">' . $alls2[1] . '</p>' . $alls2[2]);
                } else {
                    $this->context->smarty->assign('description2', $alls[1]);
                }
            } else {
                $this->context->smarty->assign('description1', $description);
                $this->context->smarty->assign('description2', '');
            }
            
            $additional_description = $category['additional_additional_description'];
            $alls = explode('####', $additional_description);
            if (count($alls) == 2) {
                $this->context->smarty->assign('additional_description1', $alls[0]);
                $alls2 = explode('@@@', $alls[1]);
                if (count($alls2) == 3) {
                    $this->context->smarty->assign('additional_description2', '' . $alls2[0] . '<p id="conseils" class ="h3">' . $alls2[1] . '</p>' . $alls2[2]);
                } else {
                    $this->context->smarty->assign('additional_description2', $alls[1]);
                }
            } else {
                $this->context->smarty->assign('additional_description1', $additional_description);
                $this->context->smarty->assign('additional_description2', '');
            }
            
            $thumbUri = $this->getThumbnailImage($category['id']);
            $this->context->smarty->assign('thumbUri', $thumbUri);
        }
    }

    /**
     * @param CategoryId $categoryId
     *
     * @return array|null
     */
    private function getThumbnailImage($categoryId) {
        $image = _PS_CAT_IMG_DIR_ . $categoryId . '.jpg';
        $imageTypes = ImageType::getImagesTypes('categories');

        if (count($imageTypes) > 0) {
            $thumb = '';
            $thumbUri = '';

            $thumb = _PS_CAT_IMG_DIR_ . $categoryId . '_thumb.jpg';
            if (is_file($thumb)) {
                $dirs = explode('httpdocs', _PS_CAT_IMG_DIR_);
                $thumbUri = $dirs [1] . $categoryId . '_thumb.jpg';
                return $thumbUri;
            }
        }

        return null;
    }

}
