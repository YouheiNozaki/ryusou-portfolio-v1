import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { css } from '@emotion/core';
import { sizes, colors } from '../../../theme';

const FooterContainer = css({
  margin: '0 auto',
  textAlign: 'center',
});

const FooterLink = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  '& a': {
    margin: sizes[2],
    width: sizes[8],
    height: sizes[8],
    color: colors.blue,
    '& .twitter': {
      width: '100%',
      height: '100%',
    },
    '& .github': {
      width: '100%',
      height: '100%',
    },
  },
  '& a:hover': {
    color: colors.red,
  },
});

export const Footer: React.FC = () => {
  return (
    <>
      <div css={FooterContainer}>
        <p>This Site is built in Gatsby</p>
        <div css={FooterLink}>
          <a
            href="https://twitter.com/ryusou_mtkh"
            aria-label="りゅーそうのTwitterアカウントへ"
          >
            <FaTwitter className="twitter" />
          </a>
          <a
            href="https://github.com/YouheiNozaki"
            aria-label="りゅーそうのgithubアカウントへ"
          >
            <FaGithub className="github" />
          </a>
        </div>
      </div>
    </>
  );
};
