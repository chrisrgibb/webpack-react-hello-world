module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel' // 'babel-loader' is also a legal name to reference
            }
        ]
    }
};