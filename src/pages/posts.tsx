import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { PagePostsQuery } from '../../graphql-types';

type Props = {
  data: PagePostsQuery;
};

const Posts: React.FC<Props> = ({ data }) => (
  <div>
    <h1>Post Page</h1>
    {data.allMicrocmsPosts?.edges?.map((edge) => {
      const posts = edge.node;
      return (
        posts?.image?.url && (
          <React.Fragment key={posts.id}>
            <div>
              <Link to={`/posts/${posts.postsId}`}>
                <h2>{posts.title}</h2>
              </Link>
              <div>
                {posts?.tags?.map(
                  (tag) =>
                    tag?.id && (
                      <React.Fragment key={tag.id}>
                        <span>{tag.name}</span>
                      </React.Fragment>
                    ),
                )}
              </div>
              <p>{posts.day}</p>
              <img src={posts.image.url} />
            </div>
          </React.Fragment>
        )
      );
    })}
  </div>
);

export const pageQuery = graphql`
  query PagePosts {
    allMicrocmsPosts {
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

export default Posts;
