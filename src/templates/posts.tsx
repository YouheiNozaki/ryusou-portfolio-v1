import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import {
  FaCalendar,
  FaRegCalendarCheck,
  FaArrowCircleRight,
  FaArrowCircleLeft,
} from 'react-icons/fa';

import { sizes, colors, typography } from '../theme';
import { PagePostsQuery } from '../../graphql-types';
import { PostsContext } from '../../gatsby-node';

type Props = {
  data: PagePostsQuery;
  pageContext: PostsContext;
};

export const PostList = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: sizes[4],
});

export const PostItem = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  '& a': {
    textDecoration: 'none',
    cursor: 'pointer',
    '& article': {
      border: `solid ${sizes[1]} ${colors.lightBlue}`,
      borderRadius: sizes[2],
      padding: sizes[4],
      width: sizes.largeSizes.sm,
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
      '& .PostItemTag': {
        marginTop: sizes[3],
        '& a': {
          marginRight: sizes[2],
          border: `solid ${sizes.px} ${colors.lightgray}`,
          borderRadius: sizes[2],
          padding: sizes[1],
          backgroundColor: colors.lightBlue,
          color: colors.white,
        },
      },
      '& .PostItemDay': {
        marginTop: sizes[3],
        display: 'flex',
        '& .PostItemDayItem': {
          display: 'flex',
          // alignItems: 'center',
          color: colors.blue,
          marginLeft: sizes[2],
          '& .icon': {
            marginRight: sizes[1],
          },
        },
      },
    },
  },
});

const PostPageNation = css({
  marginTop: sizes[8],
  position: 'relative',
  '& .PostPageNationPrev': {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: sizes[8],
    '& a': {
      textDecoration: 'none',
      color: colors.lightBlue,
      '& span': {
        marginLeft: sizes[1],
      },
    },
    '& a:hover': {
      color: colors.blue,
    },
  },
  '& .PostPageNationNext': {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: sizes[8],
    '& a': {
      textDecoration: 'none',
      color: colors.lightBlue,
      '& span': {
        marginRight: sizes[1],
      },
    },
    '& a:hover': {
      color: colors.blue,
    },
  },
});

const Posts: React.FC<Props> = ({ data, pageContext }) => (
  <>
    <h1>りゅーそうの技術ブログ</h1>
    <section css={PostList}>
      {data.allMicrocmsPosts?.edges?.map((edge) => {
        const posts = edge.node;
        return (
          <React.Fragment key={posts.id}>
            <div css={PostItem}>
              <Link to={`/posts/${posts.postsId}`}>
                <article>
                  <p className="PostItemTitle">
                    {posts.title}
                  </p>
                  {posts?.fields?.featuredImage?.fluid && (
                    <Image
                      fluid={
                        posts.fields.featuredImage.fluid
                      }
                      alt="ブログのイメージ画像"
                    />
                  )}
                  <div className="PostItemTag">
                    {posts?.tags?.map(
                      (tag) =>
                        tag?.id && (
                          <React.Fragment key={tag.id}>
                            <Link to={`/tags/${tag.id}`}>
                              <span>{tag.name}</span>
                            </Link>
                          </React.Fragment>
                        ),
                    )}
                  </div>
                  <div className="PostItemDay">
                    <div className="PostItemDayItem">
                      <FaCalendar className="icon" />
                      <p>
                        投稿:
                        {posts.createdAt}
                      </p>
                    </div>
                    <div className="PostItemDayItem">
                      <FaRegCalendarCheck className="icon" />
                      <p>
                        更新:
                        {posts.updatedAt}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </section>
    <div css={PostPageNation}>
      {!pageContext.isFirst && (
        <div className="PostPageNationPrev">
          <Link
            to={
              pageContext.currentPage === 2
                ? `/posts/`
                : `/posts/${pageContext.currentPage - 1}`
            }
            rel="prev"
          >
            <FaArrowCircleLeft className="icons" />
            <span>前のページ</span>
          </Link>
        </div>
      )}
      {!pageContext.isLast && (
        <div className="PostPageNationNext">
          <Link
            to={`/posts/${pageContext.currentPage + 1}/`}
            rel="next"
          >
            <span>次のページ</span>
            <FaArrowCircleRight className="icons" />
          </Link>
        </div>
      )}
    </div>
  </>
);

export const pageQuery = graphql`
  query PagePosts($skip: Int!, $limit: Int!) {
    allMicrocmsPosts(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          postsId
          title
          createdAt(locale: "ja", formatString: "YYYY/M/DD")
          updatedAt(locale: "ja", formatString: "YYYY/M/DD")
          tags {
            id
            name
          }
          fields {
            featuredImage {
              fluid(maxHeight: 120, maxWidth: 360) {
                src
                sizes
                base64
                aspectRatio
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default Posts;
