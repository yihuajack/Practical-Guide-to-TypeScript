/* config-overrides.js */

const rewireTypeScript = require('react-app-rewire-typescript');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireTypeScript(config, env);
    return config;
}