import React from 'react';
import { Layout } from './src/components/layout';

import(`./node_modules/highlight.js/styles/night-owl.css`);

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
