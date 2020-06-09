import React from 'react';
import { FluidImage } from '../lib/images';
import { css } from '@emotion/core';

const HeroImage = css({
  width: 640,
  margin: '0 auto',
});

const IndexPage = () => {
  return (
    <>
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
