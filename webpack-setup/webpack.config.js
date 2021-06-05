// this means for all js files(exclude node_modules)，
//we would use babel loader to transpiling them by using babel-loader, 
//which using the standard from babel./preset-env

const path = require('path')

module.exports = {
    mode: 'development',
    //mode: 'production', 
    devtool: 'source-map',
    entry: './src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'public') //because of different operating system,no hard coding
    },
    devServer:{
        //contentBase:'./dist'
        contentBase:'./public'//for part 10 custom output location
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