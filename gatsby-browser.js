import React from 'react';
import { Layout } from './src/components/layout';

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
