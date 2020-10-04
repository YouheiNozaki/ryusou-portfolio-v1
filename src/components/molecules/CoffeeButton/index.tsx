import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Paragraph } from '../../atoms';
import { BottomIn } from '../../../keyframes';

type Props = {
  text?: string;
};

export const CoffeeButton: React.FC<Props> = ({ text }) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <>
      <Paragraph>{text}</Paragraph>
      <a
        href="https://www.buymeacoffee.com/ryusou"
        target="_blank"
        rel="noreferrer"
        ref={ref}
        css={{
          opacity: inView ? 1 : 0,
        }}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
          alt="Buy Me A Coffee"
          css={{
            height: '60px',
            width: '217px',
            animation: inView
              ? `${BottomIn} 0.5s ease-out`
              : 0,
          }}
        />
      </a>
    </>
  );
};
