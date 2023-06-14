const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-sites.com",
      },
    },
  },
};
