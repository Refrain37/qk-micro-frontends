const { openMock, baseUrl, mockUrl } = require('./src/config/request.ts')

module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': {
                target: openMock ? mockUrl : baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}