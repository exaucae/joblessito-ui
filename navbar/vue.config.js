module.exports = {
    lintOnSave: false,
    publicPath: '/',
    configureWebpack: {
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            disableHostCheck: true,
            sockPort: 9003,
            sockHost: "localhost",
            https: false,
            port: 9003
        },
        externals: ["vue","vue-router", /^@joblesschool\/.+/]
    },
    filenameHashing: false
};
