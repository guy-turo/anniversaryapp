module.exports = {
    plugins: [{
        plugins: {
            overrideWebpackConfig: ({ webpackConfig }) => {
                webpackConfig.module.rules.push({
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'postcss-loader',
                    ]
                });
                return webpackConfig;
            }
        }
    }]
}