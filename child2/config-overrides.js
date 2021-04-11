const { name } = require('./package.json');

module.exports = {
    webpack: function override(config, env) {
        // 解决主应用接入后会挂掉的问题：https://github.com/umijs/qiankun/issues/340
        config.entry = config.entry.filter(
            (e) => !e.includes('webpackHotDevClient')
        );

        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        return config;
    },
    devServer: (configFunction) => {
        return function(proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.open = false;
            config.hot = false;
            config.headers = {
                'Access-Control-Allow-Origin': '*',
            };
            return config;
        };
    },
};