import React from 'react';

import './index.css';
import { Header } from '../templates/Header';
import { Footer } from '../templates/Footer';

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
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
