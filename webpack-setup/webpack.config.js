// this means for all js files(exclude node_modules)，
//we would use babel loader to transpiling them by using babel-loader, 
//which using the standard from babel./preset-env
module.exports = {
    mode: 'development',
    //mode: 'production', 
    devtool: 'source-map',
    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[ 
            //object array
            {
                //represent js files
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //without additional settings, this will reference .babelrc
                    loader:'babel-loader'
                }
            }
        ]
    }
}