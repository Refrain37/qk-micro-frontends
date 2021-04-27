module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}