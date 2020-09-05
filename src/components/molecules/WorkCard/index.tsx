import React from 'react';
import Image from 'gatsby-image';
import { useInView } from 'react-intersection-observer';
import { color } from 'csx';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { sizes, colors, mq } from '../../../theme';
import { BottomIn } from '../../../keyframes';

type Props = {
  title: string | null | undefined;
  fluidImage: any;
  url: string | undefined;
  description: string | null | undefined;
  borderColor: string;
};

export const WorkCard: React.FC<Props> = ({
  title,
  fluidImage,
  url,
  description,
  borderColor,
}) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <>
      <div
        ref={ref}
        css={{
          opacity: inView ? 1 : 0,
          animation: inView
            ? `${BottomIn} 0.5s ease-out`
            : 0,
          border: `solid ${sizes[1]} ${color(
            borderColor,
          ).fade(0.4)}`,
          borderRadius: sizes[8],
          padding: sizes[4],
          [mq[0]]: {
            marginTop: sizes[6],
            width: sizes.largeSizes.xs,
          },
          '& h2': {
            color: colors.blue,
            paddingLeft: sizes[2],
          },
          '& img': {
            borderRadius: sizes[8],
          },
          '& .WorkItemContent': {
            marginTop: sizes[2],
            '& a': {
              textDecoration: 'none',
              color: colors.blue,
            },
            '& a:hover': {
              color: colors.red,
            },
            '& p': {
              marginTop: sizes[2],
            },
          },
        }}
      >
        <h2>{title}</h2>
        <Image
          fluid={fluidImage}
          alt="作成したアプリ、サイトの画像"
        />
        <div className="WorkItemContent">
          <a href={url}>
            <FaExternalLinkAlt />
            {`『${title}』にリンクします`}
          </a>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
