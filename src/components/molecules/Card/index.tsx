import * as React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import {
  FaCalendar,
  FaRegCalendarCheck,
} from 'react-icons/fa';

import {
  sizes,
  colors,
  typography,
  mq,
} from '../../../theme';

type Props = {
  id: string;
  postsId: string;
  title: string;
  fluidImage: any;
  createdAt: Date;
  updatedAt: Date;
};

export const PostItem = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  [mq[0]]: {
    padding: sizes[4],
  },
  '& a': {
    textDecoration: 'none',
    cursor: 'pointer',
    '& article': {
      border: `solid ${sizes[1]} ${colors.lightBlue}`,
      borderRadius: sizes[2],
      padding: sizes[4],
      width: sizes.largeSizes.sm,
      [mq[1]]: {
        width: sizes.largeSizes.xs,
      },
      [mq[0]]: {
        width: sizes.largeSizes.xs,
      },
      '& .PostItemTitle': {
        color: colors.blue,
        fontWeight: typography.fontWeights.medium,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
      '& img': {
        borderRadius: sizes[2],
      },
      '& .PostItemDay': {
        marginTop: sizes[3],
        display: 'flex',
        [mq[0]]: {
          marginTop: sizes[1],
        },
        '& .PostItemDayItem': {
          display: 'flex',
          color: colors.blue,
          marginLeft: sizes[2],
          '& .icon': {
            marginRight: sizes[1],
          },
        },
        [mq[1]]: {
          display: 'block',
        },
        [mq[0]]: {
          display: 'block',
        },
      },
    },
  },
});

export const Card: React.FC<Props> = ({
  id,
  postsId,
  title,
  fluidImage,
  createdAt,
  updatedAt,
}) => {
  return (
    <>
      <React.Fragment key={id}>
        <div css={PostItem}>
          <Link to={`/posts/${postsId}`}>
            <article>
              <p className="PostItemTitle">{title}</p>
              <Image
                fluid={fluidImage}
                alt="ブログのイメージ画像"
              />
              <div className="PostItemDay">
                <div className="PostItemDayItem">
                  <FaCalendar className="icon" />
                  投稿:
                  {createdAt}
                </div>
                <div className="PostItemDayItem">
                  <FaRegCalendarCheck className="icon" />
                  更新:
                  {updatedAt}
                </div>
              </div>
            </article>
          </Link>
        </div>
      </React.Fragment>
      );
    </>
  );
};
