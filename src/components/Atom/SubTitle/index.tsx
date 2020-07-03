import React from 'react';
import { useInView } from 'react-intersection-observer';
import { css } from '@emotion/core';
import { colors, sizes } from '../../../theme';

const SubTitleStyle = css({
  margin: `${sizes[16]} auto 0`,
  textAlign: 'center',
  color: colors.blue,
  opacity: 0,
});

export const SubTitle: React.FC = ({ children }) => {
  const [ref] = useInView({
    rootMargin: '-100px 0px',
  });
  return (
    <h2 ref={ref} css={SubTitleStyle}>
      {children}
    </h2>
  );
};
