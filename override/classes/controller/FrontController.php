<?php

class FrontController extends FrontControllerCore {

    public function init() {
        $colorForCarac = array();
        $attributes = AttributeGroup::getAttributes($this->context->language->id, 157);
        foreach ($attributes as $attribute) {
            $colorForCarac[$attribute['name']] = $attribute['color'];
        }

        /*
          $attribute_groups = AttributeGroup::getAttributesGroups($this->context->language->id);

          echo('<pre>');
          var_dump($attribute_groups);
          die('</pre>');
         */
        $this->context->smarty->assign('colorForCarac', $colorForCarac);
        parent::init();
    }

    /**
     * Initializes page header variables.
     */
    public function display() {
        $preloads = array();
        $controllerClass = get_class($this->context->controller);
        if ($controllerClass == 'IndexController') {
          //$preloads[] = '';
        } else if ($controllerClass == 'ProductController') {
            /* $id_product = (int) Tools::getValue('id_product');
              if ($id_product) {
              $product = new Product($id_product, true, $this->context->language->id, $this->context->shop->id);
              $images = Product::getCover($id_product);
              $image_url = $this->context->link->getImageLink($product->link_rewrite, $images['id_image'], ImageType::getFormatedName('home'));
              $preloads[] = $image_url;
              } */
            $product = $this->context->smarty->getTemplateVars('product');
            if (isset($product['default_image'])) {
                $preloads[] = $product['default_image']['bySize']['pdt_540']['url'];
            }
        } else if ($controllerClass == 'CategoryController') {
            $listing = $this->context->smarty->getTemplateVars('listing');

            $i = 0;
            foreach ($listing['products'] as $product) {
                if (isset($product['cover'])) {
                    $image_url = $product['cover']['bySize']['home_default']['url'];
                    $preloads[] = $image_url;
                    $i++;
                    if ($i == 4) {
                        break;
                    }
                }
            }
        }
        $this->context->smarty->assign('preloads', $preloads);
        parent::display();
    }

    public function registerStylesheet($id, $relativePath, $params = []) {

        $ex_home = array(
            //"core",
            "@alma",
            "everpsblog",
            "fancybox",
            //"gsnippetsreviews",
            "loyaltyeditpoints",
            "product",
            "pm_advancedsearch4",
            "ps_emailalerts",
            "recaptchapro",
            "stockalert",
            "www.google.com/recaptcha",
            "blockwishlist"
        );
        $ex_cat = array(
            //"core",
            "@alma",
            "an_instagramfeed",
            "home",
            "loyaltyeditpoints",
            "ne_imageslider",
            "ne_homesection",
            "ps_emailalerts",
            "recaptchapro",
            "stockalert",
            "www.google.com/recaptcha"
        );
        $ex_prod = array(
            "an_instagramfeed",
            "core",
            "home",
            "blockimgmosaic",
            "ne_imageslider",
            "ne_homesection",
            "pm_advancedsearch4",
            "recaptchapro",
            "www.google.com/recaptcha"
        );
        $ex_cde = array(
            "home",
            "product",
            "ne_imageslider",
            "ne_homesection",
            "netreviews",
            "pm_advancedsearch4",
            "ps_emailalerts",
            "ps_emailsubscription"
        );

        $controllerExcludesJs = array();
        $controllerExcludesJs['IndexController'] = $ex_home;
        $controllerExcludesJs['CategoryController'] = $ex_cat;
        $controllerExcludesJs['ProductController'] = $ex_prod;
        $controllerExcludesJs['CartController'] = $ex_cde;
        $controllerClass = get_class($this->context->controller);
        $modeDebug = isset($_GET['modeDebug']);
        if (isset($controllerExcludesJs[$controllerClass])) {
            $excludes = $controllerExcludesJs[$controllerClass];
            foreach ($excludes as $exclude) {
                if (str_contains($relativePath, $exclude)) {
                    if ($modeDebug) {
                        echo $relativePath . '<br />';
                    }
                    return;
                }
            }
        }


        if (!is_array($params)) {
            $params = [];
        }

        $default_params = [
            'media' => AbstractAssetManager::DEFAULT_MEDIA,
            'priority' => AbstractAssetManager::DEFAULT_PRIORITY,
            'inline' => false,
            'server' => 'local',
        ];
        $params = array_merge($default_params, $params);

        if (Tools::hasMediaServer() && !Configuration::get('PS_CSS_THEME_CACHE')) {
            $relativePath = Tools::getCurrentUrlProtocolPrefix() . Tools::getMediaServer($relativePath)
                    . ($this->stylesheetManager->getFullPath($relativePath) ?? $relativePath);
            $params['server'] = 'remote';
        }

        $this->stylesheetManager->register($id, $relativePath, $params['media'], $params['priority'], $params['inline'], $params['server']);
    }

    public function registerJavascript($id, $relativePath, $params = []) {
        if ($relativePath == '/themes/core.js') {
            //$this->registerJavascript('home', '/themes/home.js');
            $this->registerJavascript('product', '/themes/product.js');
        }

        $ex_home = array(
            //"core",
            "@alma",
            "everpsblog",
            "fancybox",
            "gsnippetsreviews",
            "loyaltyeditpoints",
            "product",
            "pm_advancedsearch4",
            "ps_emailalerts",
            "recaptchapro",
            "stockalert",
            "www.google.com/recaptcha",
            "blockwishlist"
        );
        $ex_cat = array(
            //"core",
            "@alma",
            "an_instagramfeed",
            "home",
            "loyaltyeditpoints",
            "ne_imageslider",
            "ne_homesection",
            "product",
            "ps_emailalerts",
            "recaptchapro",
            "stockalert",
            "www.google.com/recaptcha"
        );
        $ex_prod = array(
            "an_instagramfeed",
            "core",
            "home",
            "blockimgmosaic",
            "ne_imageslider",
            "ne_homesection",
            "pm_advancedsearch4",
            "ps_emailalerts",
            "recaptchapro",
            "www.google.com/recaptcha"
        );
        $ex_cde = array(
            "home",
            "product",
            "ne_imageslider",
            "ne_homesection",
            "netreviews",
            "pm_advancedsearch4",
            "ps_emailalerts",
            "ps_emailsubscription"
        );
        $controllerExcludesJs = array();
        $controllerExcludesJs['IndexController'] = $ex_home;
        $controllerExcludesJs['CategoryController'] = $ex_cat;
        $controllerExcludesJs['ProductController'] = $ex_prod;
        $controllerExcludesJs['CartController'] = $ex_cde;
        $controllerClass = get_class($this->context->controller);
	//die($controllerClass);
        $modeDebug = isset($_GET['modeDebug']);
        if (isset($controllerExcludesJs[$controllerClass])) {
            $excludes = $controllerExcludesJs[$controllerClass];
            foreach ($excludes as $exclude) {
                if (str_contains($relativePath, $exclude)) {
                    if ($modeDebug) {
                        echo $relativePath . '<br />';
                    }
                    return;
                }
            }
        }


        if (!is_array($params)) {
            $params = [];
        }

        $default_params = [
            'position' => AbstractAssetManager::DEFAULT_JS_POSITION,
            'priority' => AbstractAssetManager::DEFAULT_PRIORITY,
            'inline' => false,
            'attributes' => null,
            'server' => 'local',
        ];
        $params = array_merge($default_params, $params);

        if (Tools::hasMediaServer() && !Configuration::get('PS_JS_THEME_CACHE')) {
            $relativePath = Tools::getCurrentUrlProtocolPrefix() . Tools::getMediaServer($relativePath)
                    . ($this->javascriptManager->getFullPath($relativePath) ?? $relativePath);
            $params['server'] = 'remote';
        }
        $this->javascriptManager->register($id, $relativePath, $params['position'], $params['priority'], $params['inline'], $params['attributes'], $params['server']);
    }

}
