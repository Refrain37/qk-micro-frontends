const path = require('path')
const { openMock, baseUrl, mockUrl } = require('./src/config/request.ts')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV !== 'production',
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 8081,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {
            '/api': {
                target: openMock ? mockUrl : baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: 'child1',
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_child1`,
        },
    },
}