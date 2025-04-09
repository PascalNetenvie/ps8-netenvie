<?php
use PrestaShop\PrestaShop\Adapter\SymfonyContainer;

use PrestaShop\PrestaShop\Core\Util\File\YamlParser;

class FrontControllerTheme extends FrontControllerCore
{
    var $themeSettings = [];
    var $overrideSettings = [];

    public function init()
    {
        $configurationCacheDirectory = (new Configuration())->get('_PS_CACHE_DIR_');
        $yamlParser = new YamlParser($configurationCacheDirectory);
        $this->themeSettings = $yamlParser->parse(_PS_THEME_DIR_ . '/config/theme.yml');
        $this->overrideSettings = $this->themeSettings['override_settings']['class_front_controller'];
        /*
        $colorForCarac = array();
        $attributes = AttributeGroup::getAttributes($this->context->language->id, 157);
        foreach ($attributes as $attribute) {
            $colorForCarac[$attribute['name']] = $attribute['color'];
        }
        $this->context->smarty->assign('colorForCarac', $colorForCarac);
        */
        parent::init();
    }
    /**
     * Adds jQuery UI component(s) to queued JS file list.
     *
     * @param string|array $component
     * @param string $theme
     * @param bool $check_dependencies
     */
    public function addJqueryUI($component, $theme = 'base', $check_dependencies = true)
    {
        if (isset($this->overrideSettings['remove_jquery_ui_override']) && $this->overrideSettings['remove_jquery_ui_override']) {
            return parent::addJqueryUI($component, $theme, $check_dependencies);
        }

        if (!is_array($component)) {
            $component = [$component];
        }

        $controllerClass = get_class($this->context->controller);
        $backtrace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        /* TODO : enlever dans produits */
        if ($controllerClass == 'IndexController' && str_contains($backtrace[0]['file'], 'pm_advancedsearch4')) {
            if (isset($this->themeSettings['remove_jquery_ui_home_pm_advancedsearch4']) && $this->themeSettings['remove_jquery_ui_home_pm_advancedsearch4']) {
                return;
            }
        } else if (!str_contains($backtrace[0]['file'], 'ambjolisearch')) {
            /*
            echo '<pre>';
            var_dump($backtrace[0]);
            echo '</pre>';
            */
        }
        foreach ($component as $ui) {
            $ui_path = Media::getJqueryUIPath($ui, $theme, $check_dependencies);
            $num = 0;
            foreach ($ui_path['css'] as $css => $media) {
                $num++;
                if ($css == '/js/jquery/ui/themes/base/jquery.ui.core.css') {
                    $this->registerStylesheet('jquery-ui-theme-' . $ui . '-' . $num, $css, ['media' => $media, 'priority' => 95]);
                }
            }
            $num = 0;
            if ($ui_path['js'] && is_array($ui_path['js'])) {
                foreach ($ui_path['js'] as $js) {
                    $num++;
                    $this->registerJavascript('jquery-ui-' . $ui . '-' . $num, $js, ['position' => 'bottom', 'priority' => 49]);
                }
            }
        }
    }

    public function registerStylesheet($id, $relativePath, $params = [])
    {
        if (isset($this->overrideSettings['remove_register_stylesheet_override']) && $this->overrideSettings['remove_register_stylesheet_override']) {
            return parent::registerStylesheet($id, $relativePath, $params);
        }

        $ex_home = array(
            "@alma",
        );
        if (isset($this->themeSettings['opti_settings']['ex_home_css']) && is_array($this->themeSettings['opti_settings']['ex_home_css'])) {
            $ex_home = array_merge($ex_home, $this->themeSettings['opti_settings']['ex_home_css']);
        }

        $ex_cat = array(
            "@alma",
        );
        if (isset($this->themeSettings['opti_settings']['ex_cat_css']) && is_array($this->themeSettings['opti_settings']['ex_cat_css'])) {
            $ex_cat = array_merge($ex_cat, $this->themeSettings['opti_settings']['ex_cat_css']);
        }

        $ex_prod = array(
            "@alma",
        );
        if (isset($this->themeSettings['opti_settings']['ex_prod_css']) && is_array($this->themeSettings['opti_settings']['ex_prod_css'])) {
            $ex_prod = array_merge($ex_prod, $this->themeSettings['opti_settings']['ex_prod_css']);
        }

        $ex_cde = array(
            "@alma",
        );
        if (isset($this->themeSettings['opti_settings']['ex_cde_css']) && is_array($this->themeSettings['opti_settings']['ex_cde_css'])) {
            $ex_cde = array_merge($ex_cde, $this->themeSettings['opti_settings']['ex_cde_css']);
        }

        $controllerExcludesCss = array();
        $controllerExcludesCss['IndexController'] = $ex_home;
        $controllerExcludesCss['CategoryController'] = $ex_cat;
        $controllerExcludesCss['ManufacturerController'] = $ex_cat;
        $controllerExcludesCss['pm_advancedsearch4seoModuleFrontControllerOverride'] = $ex_cat;
        $controllerExcludesCss['ProductController'] = $ex_prod;
        $controllerExcludesCss['CartController'] = $ex_cde;
        $controllerClass = get_class($this->context->controller);
        $modeDebug = isset($_GET['modeDebug']);
        if (isset($controllerExcludesCss[$controllerClass])) {
            $excludes = $controllerExcludesCss[$controllerClass];
            foreach ($excludes as $exclude) {
                if (str_contains($relativePath, $exclude)) {
                    if ($modeDebug) {
                        echo $relativePath . '<br />';
                    }
                    return;
                }
            }
        }
        return parent::registerStylesheet($id, $relativePath, $params);

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

    public function registerJavascript($id, $relativePath, $params = [])
    {
        if (isset($this->overrideSettings['remove_register_javascript_override']) && $this->overrideSettings['remove_register_javascript_override']) {
            return parent::registerJavascript($id, $relativePath, $params);
        }
        $modeDebug = isset($_GET['modeDebug']);
        $controllerClass = get_class($this->context->controller);

        /* JS du core */
        if ($relativePath == '/themes/core.js') {
            $params['priority'] = 50;
            $this->registerJavascript('jquery', '/themes/jquery.js', ['position' => 'bottom', 'priority' => 1]);
            if ($controllerClass == 'IndexController') {
                $this->registerJavascript('home', '/themes/home.js', ['position' => 'bottom', 'priority' => 50]);
            }
            if ($controllerClass == 'CategoryController' || $controllerClass == 'ManufacturerController' || $controllerClass == 'pm_advancedsearch4seoModuleFrontControllerOverride') {
                $this->registerJavascript('category', '/themes/category.js', ['position' => 'bottom', 'priority' => 50]);
            }
            if ($controllerClass == 'ProductController') {
                $this->registerJavascript('product', '/themes/product.js', ['position' => 'bottom', 'priority' => 50]);
            }
            if ($controllerClass == 'CartController') {
                $this->registerJavascript('product', '/themes/checkout.js', ['position' => 'bottom', 'priority' => 50]);
            }
        }

        /* JS du theme */
        if ($relativePath == '/assets/js/theme.js') {
            if ($controllerClass == 'IndexController') {
                $this->registerJavascript('themehome', '/assets/js/themehome.js', ['position' => 'bottom', 'priority' => 51]);
            }
            if ($controllerClass == 'CategoryController' || $controllerClass == 'ManufacturerController' || $controllerClass == 'pm_advancedsearch4seoModuleFrontControllerOverride') {
                $this->registerJavascript('themecategory', '/assets/js/themecategory.js', ['position' => 'bottom', 'priority' => 51]);
            }
            if ($controllerClass == 'ProductController') {
                $this->registerJavascript('themeproduct', '/assets/js/themeproduct.js', ['position' => 'bottom', 'priority' => 51]);
            }
            if ($controllerClass == 'CartController') {
                $this->registerJavascript('themeproduct', '/assets/js/themecheckout.js', ['position' => 'bottom', 'priority' => 51]);
            }
        }

        $ex_home = array(
            "core.js",
            "@alma",
            "theme.js",
        );

        if (isset($this->themeSettings['opti_settings']['ex_home_js']) && is_array($this->themeSettings['opti_settings']['ex_home_js'])) {
            $ex_home = array_merge($ex_home, $this->themeSettings['opti_settings']['ex_home_js']);
        }

        $ex_cat = array(
            "core.js",
            "theme.js",
        );
        if (isset($this->themeSettings['opti_settings']['ex_cat_js']) && is_array($this->themeSettings['opti_settings']['ex_cat_js'])) {
            $ex_cat = array_merge($ex_cat, $this->themeSettings['opti_settings']['ex_cat_js']);
        }

        $ex_prod = array(
            "core.js",
            "theme.js",
        );
        if (isset($this->themeSettings['opti_settings']['ex_prod_js']) && is_array($this->themeSettings['opti_settings']['ex_prod_js'])) {
            $ex_prod = array_merge($ex_prod, $this->themeSettings['opti_settings']['ex_prod_js']);
        }

        $ex_cde = array(
            "core.js",
            "theme.js",
        );
        if (isset($this->themeSettings['opti_settings']['ex_cde_js']) && is_array($this->themeSettings['opti_settings']['ex_cde_js'])) {
            $ex_cde = array_merge($ex_cde, $this->themeSettings['opti_settings']['ex_cde_js']);
        }

        $controllerExcludesJs = array();
        $controllerExcludesJs['IndexController'] = $ex_home;
        $controllerExcludesJs['CategoryController'] = $ex_cat;
        $controllerExcludesJs['ManufacturerController'] = $ex_cat;
        $controllerExcludesJs['pm_advancedsearch4seoModuleFrontControllerOverride'] = $ex_cat;
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

        //echo $relativePath . '<br />';
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
    public function display()
    {
        if (isset($this->overrideSettings['remove_display_override']) && $this->overrideSettings['remove_display_override']) {
            return parent::display();
        }

        if (isset($this->overrideSettings['display_override_preloads']) && $this->overrideSettings['display_override_preloads']) {
            $preloads = array();
            $controllerClass = get_class($this->context->controller);
            if ($controllerClass == 'IndexController') {
                $zones = array('beforeHome', 'displayHome');
                foreach ($zones as $zone) {
                    if (Module::isEnabled('prettyblocks')) {
                        $find = false;
                        $sql = "SELECT * FROM `" . _DB_PREFIX_ . "prettyblocks` WHERE `zone_name` = '" . $zone . "' AND `id_lang` = " . $this->context->language->id . " ORDER BY `position` ASC;";
                        $results = Db::getInstance()->executeS($sql);
                        $images = $this->getImagesFromPrettyBlocks($results);
                        if ($images && is_array($images)) {
                            foreach ($images as $image_url) {
                                $preloads[] = $image_url;
                            }
                            break;
                        }
                    }
                }
            } else if ($controllerClass == 'ProductController') {
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
        }

        if (isset($this->overrideSettings['display_override_everpsblogpost']) && $this->overrideSettings['display_override_everpsblogpost']) {
            if (class_exists('EverPsBlogPost')) {
                $everpsblogposts = EverPsBlogPost::getPosts(
                    (int) $this->context->language->id,
                    (int) $this->context->shop->id/*,(int) $pagination['items_shown_from'] - 1*/
                );
                $this->context->smarty->assign('everpsblogposts', $everpsblogposts);
            }
        }
        return parent::display();
    }


    public function getImagesFromPrettyBlocks($results)
    {
        $images = [];
        foreach ($results as $row) {
            if ($row['code'] == 'slider_block') {
                $states = json_decode($row['state'], true);
                foreach ($states as $state) {
                    if (is_array($state)) {
                        if (isset($state['image'])) {
                            if (isset($state['image']['value'])) {
                                $images[] = $state['image']['value']['url'];
                            }
                        }
                        if (isset($state['imagemobile'])) {
                            if (isset($state['imagemobile']['value'])) {
                                $images[] = $state['imagemobile']['value']['url'];
                            }
                        }
                    }
                }
            }
        }
        return $images;
    }

    public function initContent()
    {
        $res = parent::initContent();
        if (isset($this->overrideSettings['remove_init_content_override']) && $this->overrideSettings['remove_init_content_override']) {
            return $res;
        }
        if (isset($this->overrideSettings['init_content_override_cat_descriptions']) && $this->overrideSettings['init_content_override_cat_descriptions']) {
            $this->assignOtherDescriptions();
        }
        if (isset($this->overrideSettings['init_content_override_cat_thumb_uri']) && $this->overrideSettings['init_content_override_cat_thumb_uri']) {
            $this->assignThumbUri();
        }
        return $res;
    }

    public function assignOtherDescriptions()
    {
        $category = $this->context->smarty->getTemplateVars('category');
        if ($category) {
            $description = is_array($category) ? $category['description'] : $category->description;
            //var_dump($category);
            $alls = explode('<p>####</p>', $description);
            if (count($alls) == 2) {
                $this->context->smarty->assign('description1', $alls[0]);
                $alls2 = explode('@@@', $alls[1]);
                if (count($alls2) == 3) {
                    $this->context->smarty->assign('description2', '' . $alls2[0] . '<p id="conseils" class ="h3">' . $alls2[1] . '</p>' . $alls2[2]);
                } else {
                    $this->context->smarty->assign('description2', $alls[1]);
                }
            } else {
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
            }

            $additional_description = is_array($category) ? $category['additional_description'] : $category->additional_description;
            $alls = explode('<p>####</p>', $additional_description);
            if (count($alls) == 2) {
                $this->context->smarty->assign('additional_description1', $alls[0]);
                $alls2 = explode('@@@', $alls[1]);
                if (count($alls2) == 3) {
                    $this->context->smarty->assign('additional_description2', '' . $alls2[0] . '<p id="conseils" class ="h3">' . $alls2[1] . '</p>' . $alls2[2]);
                } else {
                    $this->context->smarty->assign('additional_description2', $alls[1]);
                }
            } else {
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
            }
        }
    }

    public function assignThumbUri()
    {
        $category = $this->context->smarty->getTemplateVars('category');
        if ($category) {
            $categoryId = is_array($category) ? $category['id'] : $category->id;
            $thumbUri = $this->getThumbnailImage($categoryId);
            $this->context->smarty->assign('thumbUri', $thumbUri);
        }
    }

    /**
     * @param categoryId $categoryId
     *
     * @return string|null
     */
    private function getThumbnailImage($categoryId)
    {
        $image = _PS_CAT_IMG_DIR_ . $categoryId . '.jpg';
        $imageTypes = ImageType::getImagesTypes('categories');

        if (count($imageTypes) > 0) {
            $thumb = '';
            $thumbUri = '';

            $thumb = _PS_CAT_IMG_DIR_ . $categoryId . '_thumb.jpg';
            if (is_file($thumb)) {
                $dirs = explode('httpdocs', _PS_CAT_IMG_DIR_);
                $thumbUri = $dirs[1] . $categoryId . '_thumb.jpg';
                return $thumbUri;
            }
        }

        return null;
    }
}
