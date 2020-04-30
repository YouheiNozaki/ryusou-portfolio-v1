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
};

const query = `
{
  allMicrocmsPosts {
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

  const postTemplate = path.resolve(
    './src/templates/post.tsx',
  );

  edges.forEach((edge) => {
    createPage<PostContext>({
      path: `/posts/${edge.node.postsId}`,
      component: postTemplate,
      context: { post: edge.node },
    });
  });
};
