import React from 'react';
import { useInView } from 'react-intersection-observer';
import { colors, sizes } from '../../../theme';
import { BottomIn } from '../../../keyframes';

export const Icon: React.FC = ({ children }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      css={{
        margin: `${sizes[8]} auto`,
        height: sizes[32],
        width: sizes[32],
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
        '& img': {
          borderRadius: '50%',
          border: `${sizes[1]} solid ${colors.red}`,
        },
      }}
    >
      {children}
    </div>
  );
};
