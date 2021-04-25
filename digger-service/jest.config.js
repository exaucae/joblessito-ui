const { defaults } = require("jest-config");

module.exports = {
  rootDir: "test",
  preset: "ts-jest",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
