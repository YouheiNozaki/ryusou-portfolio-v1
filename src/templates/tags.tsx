import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import {
  FaCalendar,
  FaRegCalendarCheck,
} from 'react-icons/fa';

import { PageTagQuery } from '../../graphql-types';
import { TagsContext } from '../../gatsby-node';
import { PostList, PostItem } from './posts';

type Props = {
  data: PageTagQuery;
  pageContext: TagsContext;
};

const Tags: React.FC<Props> = ({ data, pageContext }) => (
  <>
    <h1>{pageContext.tagsname}</h1>
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
    <div>
      {!pageContext.isFirst && (
        <div>
          <Link
            to={
              pageContext.currentPage === 2
                ? `/posts/`
                : `/posts/${pageContext.currentPage - 1}`
            }
            rel="prev"
          >
            <span>前のページ</span>
          </Link>
        </div>
      )}
      {!pageContext.isLast && (
        <div>
          <Link
            to={`/posts/${pageContext.currentPage + 1}/`}
            rel="next"
          >
            <span>次のページ</span>
          </Link>
        </div>
      )}
    </div>
  </>
);

export const query = graphql`
  query PageTag(
    $tagsId: String!
    $skip: Int!
    $limit: Int!
  ) {
    allMicrocmsPosts(
      sort: { fields: day, order: DESC }
      skip: $skip
      limit: $limit
      filter: {
        tags: { elemMatch: { slug: { eq: $tagsId } } }
      }
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

export default Tags;
