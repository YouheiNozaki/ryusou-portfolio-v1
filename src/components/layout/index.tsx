import React from 'react';

import './index.css';
import { Header } from '../templates/Header';
import { Footer } from '../templates/Footer';
import { sizes } from '../../theme';

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: sizes.container.lg,
          padding: `0 1.0875rem 1.45rem`,
          marginTop: sizes[16],
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
