import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { color } from 'csx';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { sizes, colors, mq } from '../../../theme';

type Props = {
  title: string | null | undefined;
  fluidImage: any;
  url: string | undefined;
  description: string | null | undefined;
};

const WorkCardStyle = css({
  border: `solid ${sizes[1]} ${color(colors.red).fade(
    0.4,
  )}`,
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
});

export const WorkCard: React.FC<Props> = ({
  title,
  fluidImage,
  url,
  description,
}) => (
  <>
    <div css={WorkCardStyle}>
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
