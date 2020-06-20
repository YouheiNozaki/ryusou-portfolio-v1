import * as React from 'react';
import Link from 'gatsby-link';
import { FluidImage } from '../lib/images';
import { SEO } from '../components/templates/Seo';
import { css } from '@emotion/core';
import { colors } from '../theme';

type Props = {
  location: Location;
};

const ErrorPageContainer = css({
  margin: '0 auto',
  '& h1': {
    color: colors.blue,
  },
  '& .ErrorPageText': {
    margin: '0 auto',
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      color: colors.blue,
    },
    '& a:hover': {
      color: colors.red,
    },
  },
});

const NotFoundPage: React.FC<Props> = ({ location }) => (
  <>
    <SEO
      pagetitle="404エラーページ"
      pagepath={location.pathname}
    />
    <div css={ErrorPageContainer}>
      <h1>404</h1>
      <FluidImage
        filename="404.png"
        alt="エラーページの画像"
      />
      <div className="ErrorPageText">
        <p>ごめんなさい！ページが見つかりません</p>
        <Link to="/">HOMEに戻る</Link>
      </div>
    </div>
  </>
);

export default NotFoundPage;
