import React from 'react';
import Link from 'gatsby-link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { color, translateX } from 'csx';

import { colors, fontSizes, typography } from '../../theme';

const NavContainer = css({
  '& nav': {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: `${color(colors.blue).fade(0.8)}`,
    transform: translateX('-100%'),
    '& ul': {
      margin: 'auto',
      '& li': {
        listStyle: 'none',
        '& a': {
          textDecoration: 'none',
          color: colors.white,
          fontSize: fontSizes['2xl'],
          fontWeight: typography.fontWeights.bold,
        },
        '& a:hover': {
          color: colors.yellow,
        },
      },
    },
  },
  "& nav[aria-expanded='true']": {
    transform: translateX(0),
  },
});

type Props = {
  open: boolean;
  setOpen?: Function;
};

export const Nav: React.FC<Props> = ({ open }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div css={NavContainer}>
      <nav aria-expanded={open}>
        <ul>
          <li>
            <Link to="/">
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Logo"
              />
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/posts">POST</Link>
          </li>
          <li>
            <Link to="/works">WORK</Link>
          </li>
          <li>
            <Link to="/contacts">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
