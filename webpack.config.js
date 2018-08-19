var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableVersioning(Encore.isProduction())
    .enableVueLoader()
    .addEntry('vueapp', './assets/js/tutorial.js')
    .addEntry('scopedCssTest', './assets/js/scopedCssTest.js')
    .addEntry('calapp', './assets/js/calculator.js')
    .configureBabel(function(babelConfig) {
        babelConfig.presets.push('env');
    })
    .enablePostCssLoader()
;

module.exports = Encore.getWebpackConfig();