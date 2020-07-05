import React from 'react';
import { useInView } from 'react-intersection-observer';
import { colors, sizes } from '../../../theme';
import { BottomIn } from '../../../keyframes';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
  href: string;
};
export const LinkText: React.FC<Props> = ({
  children,
  href,
}) => {
  const [ref, inView] = useInView({
    rootMargin: '-20px 0px',
  });
  return (
    <a
      href={href}
      ref={ref}
      css={{
        textDecoration: 'none',
        color: colors.blue,
        margin: sizes[1],
        opacity: inView ? 1 : 0,
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
      }}
    >
      <FaExternalLinkAlt />
      {children}
    </a>
  );
};
