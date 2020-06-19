import React, { useState } from 'react';

import './index.css';
import { Header } from '../templates/Header';
import { Footer } from '../templates/Footer';
import { Nav } from '../Nav';
import { Burger } from '../Burger';
import { sizes } from '../../theme';

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} />
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
