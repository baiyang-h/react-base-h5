const path = require('path')
const {
    override,
    fixBabelImports,
    addWebpackAlias,
    overrideDevServer,
    watchAll,
    addWebpackModuleRule,
    addLessLoader,
    addPostcssPlugins,
    addBabelPlugins,
} = require('customize-cra')

module.exports = {
    webpack: override(
        ...addBabelPlugins( // 支持装饰器
            [
                '@babel/plugin-proposal-decorators',
                { legacy: true}
            ]
        ),
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css',   // true 默认 less
        }),
        addWebpackAlias({
            "@": path.resolve(__dirname, './src')
        }),
        // addLessLoader({
        //     lessOptions: {
        //         strictMath: true,
        //         noIeCompat: true,
        //         modifyVars: {   // 可设置全局变量
        //             // "@primary-color": "#1DA57A",
        //         },
        //     },
        // }),
        addPostcssPlugins([require("postcss-pxtorem")({
            rootValue: 75,
            propList: ['*'],
            selectorBlackList: []
        })]),
        (config) => {
            const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
            let sassResourcesLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        './src/styles/func.scss',
                        './src/styles/mixin.scss',
                        './src/styles/variable.scss',
                    ]
                }
            }
            loaders[6].use.push(sassResourcesLoader)
            loaders[7].use.push(sassResourcesLoader)

            return config
        }
        // 或者用下面的方式，直接重写
        // addWebpackModuleRule({
        //     test: /\.(less|module\.less)$/,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //         {
        //             loader: 'postcss-loader',
        //             options: {
        //                 ident: 'postcss',
        //                 plugins: [
        //                     require("postcss-pxtorem")({
        //                         rootValue: 75,
        //                         propList: ['*'],
        //                         selectorBlackList: []
        //                     })
        //                 ]
        //             }
        //         },
        //         'less-loader',
        //         {
        //             loader: 'style-resources-loader',
        //             options: {
        //                 // patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
        //                 patterns: [
        //                     './src/styles/variable.less',
        //                     './src/styles/mixin.less',
        //                     './src/styles/func.less',
        //                 ]
        //             }
        //         }
        //     ]
        // }),
    ),
    devServer: overrideDevServer(
        watchAll()
    )
};