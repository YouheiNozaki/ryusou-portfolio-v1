'use strict';
const path = require('path');
const fs = require('fs');
const {
  zipFunctions,
} = require('@netlify/zip-it-and-ship-it');

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

require('./src/__generated__/gatsby-types');

exports.createPages = require('./src/gatsby-node/index').createPages;

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};

exports.onPostBuild = () => {
  const srcLocation = path.join(
    __dirname,
    `./src/functions`,
  );
  const outputLocation = path.join(
    __dirname,
    `./public/functions`,
  );
  if (!fs.existsSync(outputLocation)) {
    fs.mkdirSync(outputLocation);
  }
  return zipFunctions(srcLocation, outputLocation);
};
