'use strict';
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

require('./src/__generated__/gatsby-types');

exports.createPages = require('./src/gatsby-node/index').createPages;
