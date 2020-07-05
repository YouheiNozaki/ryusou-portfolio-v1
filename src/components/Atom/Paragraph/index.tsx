import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BottomIn } from '../../../keyframes';

export const Paragraph: React.FC = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-20px 0px',
  });
  return (
    <p
      ref={ref}
      css={{
        opacity: inView ? 1 : 0,
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
      }}
    >
      {children}
    </p>
  );
};
