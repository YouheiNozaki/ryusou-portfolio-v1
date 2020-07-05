import React from 'react';
import { css } from '@emotion/core';
import {
  colors,
  fontSizes,
  sizes,
  typography,
} from '../../../theme';
import { RightIn } from '../../../keyframes';

const TitleStyle = css({
  fontSize: fontSizes['5xl'],
  fontWeight: typography.fontWeights.bold,
  marginLeft: sizes[4],
  color: colors.lightBlue,
  animation: `${RightIn} 0.7s ease-out`,
});

export const Title: React.FC = ({ children }) => {
  return <h1 css={TitleStyle}>{children}</h1>;
};
