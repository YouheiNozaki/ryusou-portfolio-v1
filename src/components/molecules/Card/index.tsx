import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import unified from 'unified';
import parse from 'rehype-parse';
import { css } from '@emotion/core';

import {
  FaCalendar,
  FaRegCalendarCheck,
} from 'react-icons/fa';

import { PostContext } from '../../../../gatsby-node';
import { renderAst } from '../../../lib/renderHtml';
import { colors, sizes } from '../../../theme';

type Props = {
  title: string;
  content: string;
  createdAt: any;
  updatedAt: any;
  fluidImage: any;
  pageContext: PostContext;
};

const PostContainer = css({
  '& .PostTitle': {
    color: colors.blue,
  },
  '& a': {
    textDecoration: 'none',
    '& .tagName': {
      marginRight: sizes[2],
      marginLeft: sizes[2],
      border: `solid ${sizes.px} ${colors.lightgray}`,
      borderRadius: sizes[2],
      padding: sizes[1],
      backgroundColor: colors.lightBlue,
      color: colors.white,
    },
  },
  '& .PostDay': {
    marginTop: sizes[3],
    display: 'flex',
    '& .PostDayItem': {
      color: colors.blue,
      marginLeft: sizes[2],
      display: 'flex',
      '& .icon': {
        marginRight: sizes[1],
      },
    },
  },
  '& img': {
    width: '100%',
  },
  '& .PostContent': {
    marginTop: sizes[8],
  },
});

export const Card: React.FC<Props> = ({
  title,
  content,
  createdAt,
  updatedAt,
  fluidImage,
  pageContext,
}) => {
  const post = pageContext.post;

  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(content);

  return (
    <>
      <div css={PostContainer}>
        <h1 className="PostTitle">{title}</h1>
        {post?.tags?.map(
          (tag) =>
            tag?.id && (
              <React.Fragment key={tag.id}>
                <Link to={`/tags/${tag.id}`}>
                  <span className="tagName">
                    {tag.name}
                  </span>
                </Link>
              </React.Fragment>
            ),
        )}
        <div className="PostDay">
          <div className="PostDayItem">
            <FaCalendar className="icon" />
            <p>投稿:{createdAt}</p>
          </div>
          <div className="PostDayItem">
            <FaRegCalendarCheck className="icon" />
            <p>更新:{updatedAt}</p>
          </div>
        </div>
        {post?.fields?.featuredImage?.fluid && (
          <Image
            fluid={fluidImage}
            alt="投稿したブログのイメージ画像"
          />
        )}
        <div className="PostContent">
          {renderAst(htmlAst)}
        </div>
      </div>
    </>
  );
};
