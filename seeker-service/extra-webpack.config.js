const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
module.exports = (config, options) => {
  return singleSpaAngularWebpack(config, options);
};
