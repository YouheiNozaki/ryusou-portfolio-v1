import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { PageTagQuery } from '../../graphql-types';
import { TagsContext } from '../../gatsby-node';

type Props = {
  data: PageTagQuery;
  pageContext: TagsContext;
};

const Tags: React.FC<Props> = ({ data, pageContext }) => (
  <>
    <section>
      <h1>{pageContext.tagsname}</h1>
      {data.allMicrocmsPosts?.edges?.map((edge) => {
        const posts = edge.node;
        return (
          <React.Fragment key={posts.id}>
            <div>
              <article>
                <Link to={`/posts/${posts.postsId}`}>
                  <h2>{posts.title}</h2>
                </Link>
                <div>
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
                <p>{posts.day}</p>
                {posts?.image?.url && (
                  <img
                    src={posts.image.url}
                    alt="ブログのイメージ画像"
                  />
                )}
              </article>
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
          day
          tags {
            id
            name
          }
          image {
            url
          }
        }
      }
    }
  }
`;

export default Tags;
