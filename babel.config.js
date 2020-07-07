module.exports = function babel(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['babel-plugin-root-import', {
                rootPathSuffix: 'src',
            }],
        ],
    };
};
