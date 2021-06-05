// this means for all js files(exclude node_modules)，
//we would use babel loader to transpiling them by using babel-loader, 
//which using the standard from babel./preset-env

module.export={
    module:{
        rules:[ //object array
            {
                test:/\.js$/,//represent js files
                exclude:/node_modules/,
                use:{
                    //without additional settings, this will reference .babelrc
                    loader:'babel-loader'
                }
            }
        ]
    }
}