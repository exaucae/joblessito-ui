const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "joblesschool",
    projectName: "404",
    webpackConfigEnv,
    argv,
  });
  return merge(defaultConfig, {
    mode: "development",
    entry: "./src/joblesschool-404",
    devServer: {
      port: 9005,
    },
  });
};
