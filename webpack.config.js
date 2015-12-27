console.log(process.env.NODE_ENV + " yeah");

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
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style!css" },
    //         { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    //     ]
    // }
};