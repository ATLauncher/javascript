module.exports = {
    module: {
        loaders: [
            {
                test: /\.md$/,
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
};