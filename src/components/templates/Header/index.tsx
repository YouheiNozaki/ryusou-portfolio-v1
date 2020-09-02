import React from 'react';
import Link from 'gatsby-link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import {
  colors,
  sizes,
  fontSizes,
  typography,
  mq,
} from '../../../theme/';

const HeaderContainer = css({
  display: 'flex',
  alignItems: 'center',
  padding: sizes[5],
});

const HeaderLogo = css({
  marginRight: 'auto',
  '& a': {
    '& img': {
      borderRadius: '50%',
    },
  },
});

const HeaderLink = css({
  display: 'flex',
  margin: '0 0 0 auto',
  alignItems: 'center',
  '& li': {
    margin: '0 0 0 auto',
    marginRight: sizes[8],
    listStyle: 'none',
    '& a': {
      fontSize: fontSizes.xl,
      color: colors.blue,
      textDecoration: 'none',
      fontWeight: typography.fontWeights.bold,
    },
    '& a:hover': {
      color: colors.red,
    },
  },
  [mq[0]]: {
    display: 'none',
  },
});

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
    <>
      <div css={HeaderContainer}>
        <div css={HeaderLogo}>
          <Link to="/" aria-label="HOME">
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="Logo"
            />
          </Link>
        </div>
        <nav>
          <ul css={HeaderLink}>
            <li>
              <Link to="/about" aria-label="ABOUT">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/posts" aria-label="POST">
                POST
              </Link>
            </li>
            <li>
              <Link to="/works" aria-label="WORK">
                WORK
              </Link>
            </li>
            <li>
              <Link to="/contacts" aria-label="CONTACT">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
