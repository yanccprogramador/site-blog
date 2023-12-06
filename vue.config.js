const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        querystring: false,
        stream: false,
        url: false,
        https: false,
        http: false,
        path: false,
        util: false,
        crypto: false,
        assert: false,
        tls: false,
        fs: false,
        net: false,
        os: false,
        child_process: false,
        zlib: false,
      },
    },
  },
  pluginOptions: {
    vuetify: {},
  },
});
