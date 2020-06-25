const React = require('react');
const Layout = require('./src/components/layout');

require(`./node_modules/highlight.js/styles/a11y-light.css`);

module.exports = wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
