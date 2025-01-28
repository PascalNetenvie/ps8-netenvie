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
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const path = require('path');
  const mode = argv.mode || 'production';

  return {
    mode,
    entry: {
      jquery: './_core/js/jquery.js',
      core: './_core/js/coretheme.js',
      home: './_core/js/corehome.js',
      product: './_core/js/coreproduct.js',
      category: './_core/js/corecategory.js',
      checkout: './_core/js/corecheckout.js',
    },
    output: {
      path: path.resolve(__dirname, '../../'), // Remonte à la racine du dossier themes
      filename: '[name].js', // Nom dynamique basé sur les points d'entrée
      chunkFilename: '[chunkhash]-chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'esbuild-loader',
          },
        },
      ],
    },
    externals: {
      prestashop: 'prestashop',
    },
    devtool: mode === 'production' ? false : 'source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        extractComments: false
      })],
    },
  };
};
