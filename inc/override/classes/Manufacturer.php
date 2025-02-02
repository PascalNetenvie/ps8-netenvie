<?php
use PrestaShop\PrestaShop\Core\Util\File\YamlParser;

class ManufacturerTheme extends ManufacturerCore
{
    public static function getManufacturers($getNbProducts = false, $idLang = 0, $active = true, $p = false, $n = false, $allGroup = false, $group_by = false, $withProduct = false)
    {
        $configurationCacheDirectory = (new Configuration())->get('_PS_CACHE_DIR_');
        $yamlParser = new YamlParser($configurationCacheDirectory);
        $themeSettings = $yamlParser->parse(_PS_THEME_DIR_ . '/config/theme.yml');
        $overrideSettings = $themeSettings['override_settings']['class_manufacturer'];

        if (isset($overrideSettings['remove_get_manufacturers_override']) && $overrideSettings['remove_get_manufacturers_override']) {
            return parent::getManufacturers($getNbProducts, $idLang, $active, $p, $n, $allGroup, $group_by, $withProduct);
        }

        if (!$idLang) {
            $idLang = (int) Configuration::get('PS_LANG_DEFAULT');
        }
        if (!Group::isFeatureActive()) {
            $allGroup = true;
        }

        $manufacturers = Db::getInstance(_PS_USE_SQL_SLAVE_)->executeS('
		SELECT m.*, ml.`description`, ml.`short_description`
		FROM `' . _DB_PREFIX_ . 'manufacturer` m'
            . Shop::addSqlAssociation('manufacturer', 'm') .
            'INNER JOIN `' . _DB_PREFIX_ . 'manufacturer_custom` mc ON (m.`id_manufacturer` = mc.`id_manufacturer`) ' .
            'INNER JOIN `' . _DB_PREFIX_ . 'manufacturer_lang` ml ON (m.`id_manufacturer` = ml.`id_manufacturer` AND ml.`id_lang` = ' . (int) $idLang . ')' .
            'WHERE mc.`display` = 1 ' .
            ($active ? 'AND m.`active` = 1 ' : '') .
            ($withProduct ? 'AND m.`id_manufacturer` IN (SELECT `id_manufacturer` FROM `' . _DB_PREFIX_ . 'product`) ' : '') .
            ($group_by ? ' GROUP BY m.`id_manufacturer`' : '') .
            'ORDER BY mc.`ordre` ASC
		' . ($p ? ' LIMIT ' . (((int) $p - 1) * (int) $n) . ',' . (int) $n : ''));
        if ($manufacturers === false) {
            return false;
        }

        if ($getNbProducts) {
            $sqlGroups = '';
            if (!$allGroup) {
                $groups = FrontController::getCurrentCustomerGroups();
                $sqlGroups = (count($groups) ? 'IN (' . implode(',', $groups) . ')' : '=' . (int) Group::getCurrent()->id);
            }

            $results = Db::getInstance(_PS_USE_SQL_SLAVE_)->executeS(
                '
					SELECT  p.`id_manufacturer`, COUNT(DISTINCT p.`id_product`) as nb_products
					FROM `' . _DB_PREFIX_ . 'product` p USE INDEX (product_manufacturer)
					' . Shop::addSqlAssociation('product', 'p') . '
					LEFT JOIN `' . _DB_PREFIX_ . 'manufacturer` as m ON (m.`id_manufacturer`= p.`id_manufacturer`)
					WHERE p.`id_manufacturer` != 0 AND product_shop.`visibility` NOT IN ("none")
					' . ($active ? ' AND product_shop.`active` = 1 ' : '') . '
					' . (Group::isFeatureActive() && $allGroup ? '' : ' AND EXISTS (
						SELECT 1
						FROM `' . _DB_PREFIX_ . 'category_group` cg
						LEFT JOIN `' . _DB_PREFIX_ . 'category_product` cp ON (cp.`id_category` = cg.`id_category`)
						WHERE p.`id_product` = cp.`id_product` AND cg.`id_group` ' . $sqlGroups . '
					)') . '
					GROUP BY p.`id_manufacturer`'
            );

            $counts = [];
            foreach ($results as $result) {
                $counts[(int) $result['id_manufacturer']] = (int) $result['nb_products'];
            }

            foreach ($manufacturers as $key => $manufacturer) {
                if (array_key_exists((int) $manufacturer['id_manufacturer'], $counts)) {
                    $manufacturers[$key]['nb_products'] = $counts[(int) $manufacturer['id_manufacturer']];
                } else {
                    $manufacturers[$key]['nb_products'] = 0;
                }
            }
        }

        $totalManufacturers = count($manufacturers);
        $rewriteSettings = (int) Configuration::get('PS_REWRITING_SETTINGS');
        for ($i = 0; $i < $totalManufacturers; ++$i) {
            $manufacturers[$i]['link_rewrite'] = ($rewriteSettings ? Tools::str2url($manufacturers[$i]['name']) : 0);
        }

        return $manufacturers;
    }
}
