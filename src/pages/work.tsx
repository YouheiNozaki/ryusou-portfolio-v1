import * as React from 'react';
import { css } from '@emotion/core';

import { colors } from '../theme';

const Title = css({
  color: colors.main,
});

const Work = () => {
  return (
    <>
      <h1 css={Title}>WORK</h1>
    </>
  );
};

export default Work;
