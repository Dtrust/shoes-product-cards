

module.exports = {
    //production development
    mode: 'production',
    entry: {
        main: ['@babel/polyfill', 'whatwg-fetch', './app/js/main.js']
    },
    output: {
        filename: 'script.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}
