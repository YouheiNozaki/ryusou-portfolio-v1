import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
} from 'react-icons/fa';

import { sizes, colors, mq } from '../theme';
import { PagePostsQuery } from '../../graphql-types';
import { PostsContext } from '../../gatsby-node';
import { SEO } from '../components/templates/Seo';
import { Title } from '../components/atoms';
import { Card } from '../components/molecules/Card';

type Props = {
  data: PagePostsQuery;
  location: Location;
  pageContext: PostsContext;
};

export const PostList = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: sizes[4],
  [mq[0]]: {
    display: 'block',
  },
});

export const PostPageNation = css({
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

const Posts: React.FC<Props> = ({
  data,
  location,
  pageContext,
}) => {
  return (
    <>
      <SEO
        pagetitle="POST"
        pagedesc="技術ブログのページ"
        pagepath={location.pathname}
      />
      <Title>POST</Title>
      <section css={PostList}>
        {data.allMicrocmsPosts?.edges?.map((edge) => {
          const posts = edge.node;
          return (
            <React.Fragment key={posts.id}>
              <Card
                postsId={posts.postsId}
                title={posts.title}
                fluidImage={
                  posts.fields?.featuredImage?.fluid
                }
                createdAt={posts.createdAt}
                updatedAt={posts.updatedAt}
              />
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
};

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
          content
        }
      }
    }
  }
`;

export default Posts;
