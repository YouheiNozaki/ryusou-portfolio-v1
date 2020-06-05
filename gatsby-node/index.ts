import path from 'path';
import { GatsbyNode } from 'gatsby';
import {
  MicrocmsPostsConnection,
  MicrocmsPosts,
} from '../graphql-types';

type Result = {
  allMicrocmsPosts: MicrocmsPostsConnection;
};

export type PostContext = {
  post: MicrocmsPosts;
  next: MicrocmsPosts;
  previous: MicrocmsPosts;
};

const query = `
  {
    allMicrocmsPosts(sort: {fields: day, order: DESC}) {
      edges {
        node {
          postsId
          title
          tags {
            id
            name
          }
          day
          image {
            url
          }
          content
        }
        next {
          title
          postsId
        }
        previous {
          title
          postsId
        }
      }
    }
  }
`;

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<Result>(query);

  if (result.errors || !result.data) {
    throw result.errors;
  }
  const { edges } = result.data.allMicrocmsPosts;

  edges.forEach(({ node, next, previous }) => {
    createPage<PostContext>({
      path: `/posts/${node.postsId}`,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        post: node,
        next: next!,
        previous: previous!,
      },
    });
  });

  const postsPerPage = 6;
  const posts = result.data.allMicrocmsPosts.edges.length;
  const postsPages = Math.ceil(posts / postsPerPage);

  Array.from({ length: postsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
      component: path.resolve(`./src/templates/posts.tsx`),
      context: {
        skip: postsPerPage * i,
        limit: postsPerPage,
      },
    });
  });
};
