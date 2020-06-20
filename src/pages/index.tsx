import React from 'react';
import { FluidImage } from '../lib/images';
import { css } from '@emotion/core';

import { SEO } from '../components/templates/Seo';

const HeroImage = css({
  maxWidth: 640,
  margin: '0 auto',
});

const IndexPage = () => {
  return (
    <>
      <SEO />
      <div css={HeroImage}>
        <FluidImage
          filename="ryusoublog.png"
          alt="Ryusou blog"
        />
      </div>
    </>
  );
};

export default IndexPage;
