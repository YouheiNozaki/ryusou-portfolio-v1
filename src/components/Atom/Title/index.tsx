import React from 'react';
import { css } from '@emotion/core';
import { colors, fontSizes, sizes } from '../../../theme';
import { RightIn } from '../../../keyframes';

const TitleStyle = css({
  fontSize: fontSizes['5xl'],
  marginLeft: sizes[10],
  color: colors.lightBlue,
  textShadow: `0.07rem 0.07rem 0 ${colors.yellow}, 0.1rem 0.1rem 0 ${colors.blue}`,
  animation: `${RightIn} 1s ease-out`,
});

export const Title: React.FC = ({ children }) => {
  return <h1 css={TitleStyle}>{children}</h1>;
};
