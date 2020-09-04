import * as React from 'react';
import Image from 'gatsby-image';
import { useInView } from 'react-intersection-observer';

import { sizes, colors, mq } from '../../../theme';
import { BottomIn } from '../../../keyframes';

type Props = {
  fixedImage: any;
  title: string | null | undefined;
  parameter: string | null | undefined;
};

export const SkillCard: React.FC<Props> = ({
  fixedImage,
  title,
  parameter,
}) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <>
      <div
        ref={ref}
        css={{
          margin: sizes[8],
          display: 'flex',
          opacity: inView ? 1 : 0,
          animation: inView
            ? `${BottomIn} 0.5s ease-out`
            : 0,
          '& .SkillStackItemContent': {
            marginLeft: sizes[2],
            '& h3': {
              color: colors.white,
              backgroundColor: colors.red,
              marginTop: sizes[1],
              marginBottom: sizes[1],
              padding: sizes[2],
              borderRadius: sizes[2],
            },
            '& p': {
              color: colors.blue,
              marginTop: sizes[1],
              marginLeft: sizes[2],
            },
            [mq[1]]: {
              marginLeft: sizes[6],
            },
            [mq[0]]: {
              marginLeft: sizes[8],
            },
          },
        }}
      >
        <Image
          fixed={fixedImage}
          alt="技術スタックのタイトルの画像"
        />
        <div className="SkillStackItemContent">
          <h3>{title}</h3>
          <p>{parameter}</p>
        </div>
      </div>
    </>
  );
};
