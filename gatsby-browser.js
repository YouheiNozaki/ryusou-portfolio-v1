import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { Layout } from './src/components/layout';
import { theme } from './src/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
