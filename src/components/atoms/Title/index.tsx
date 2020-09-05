import React from 'react';
import { useInView } from 'react-intersection-observer';
import { sizes } from '../../../theme';
import { RightIn } from '../../../keyframes';

type Props = {
  color: string;
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({
  color,
  children,
}) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <h1
      ref={ref}
      css={{
        marginLeft: sizes[4],
        color: color,
        opacity: inView ? 1 : 0,
        animation: inView ? `${RightIn} 0.5s ease-out` : 0,
      }}
    >
      {children}
    </h1>
  );
};
