const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "joblesschool",
    projectName: "digger-service",
    webpackConfigEnv,
    argv,
  });
  return merge(defaultConfig, {
    mode: "development",
    entry: "./src/joblesschool-digger-service",
    devServer: {
      port: 9002,
    },
  });
};
