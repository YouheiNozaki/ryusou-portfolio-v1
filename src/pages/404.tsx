import * as React from 'react';
import Link from 'gatsby-link';
import { css } from '@emotion/core';

import { FluidImage } from '../lib/images';
import { SEO } from '../components/templates/Seo';
import { colors } from '../theme';
import { Title } from '../components/atoms';

type Props = {
  location: Location;
};

const ErrorPageContainer = css({
  margin: '0 auto',
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
      <Title>404</Title>
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
