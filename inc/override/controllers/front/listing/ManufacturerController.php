<?php

use PrestaShop\PrestaShop\Core\Util\File\YamlParser;

class ManufacturerControllerTheme extends ManufacturerControllerCore
{
    public function getTemplateVarManufacturers()
    {
        $configurationCacheDirectory = (new Configuration())->get('_PS_CACHE_DIR_');
        $yamlParser = new YamlParser($configurationCacheDirectory);
        $themeSettings = $yamlParser->parse(_PS_THEME_DIR_ . '/config/theme.yml');
        $overrideSettings = $themeSettings['override_settings']['controller_listing_manufacturer'];

        if (isset($overrideSettings['remove_get_template_var_manufacturers_override']) && $overrideSettings['remove_get_template_var_manufacturers_override']) {
            return parent::getTemplateVarManufacturers();
        }

        $manufacturers = Manufacturer::getManufacturers(true, $this->context->language->id);
        $manufacturers_for_display = [];

        foreach ($manufacturers as $manufacturer) {
            $manufacturers_for_display[$manufacturer['id_manufacturer']] = $manufacturer;
            $manufacturers_for_display[$manufacturer['id_manufacturer']]['text'] = $manufacturer['short_description'];
            $manufacturers_for_display[$manufacturer['id_manufacturer']]['image'] = $this->context->link->getManufacturerImageLink($manufacturer['id_manufacturer'], '');
            $manufacturers_for_display[$manufacturer['id_manufacturer']]['url'] = $this->context->link->getManufacturerLink($manufacturer['id_manufacturer']);
            $manufacturers_for_display[$manufacturer['id_manufacturer']]['nb_products'] = $manufacturer['nb_products'] > 1 ? ($this->trans('%number% products', ['%number%' => $manufacturer['nb_products']], 'Shop.Theme.Catalog')) : $this->trans('%number% product', ['%number%' => $manufacturer['nb_products']], 'Shop.Theme.Catalog');
        }

        return $manufacturers_for_display;
    }

}
