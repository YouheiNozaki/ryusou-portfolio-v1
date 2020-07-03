import React from 'react';
import { css } from '@emotion/core';
import { colors, sizes } from '../../../theme';

const IconStyle = css({
  margin: `${sizes[8]} auto`,
  height: sizes[32],
  width: sizes[32],
  '& img': {
    borderRadius: '50%',
    border: `${sizes[1]} solid ${colors.red}`,
  },
});

export const Icon: React.FC = ({ children }) => {
  return <div css={IconStyle}>{children}</div>;
};
