import path from 'path';
import { GatsbyNode } from 'gatsby';
import {
  MicrocmsPostsConnection,
  MicrocmsPosts,
  MicrocmsTagsConnection,
} from '../graphql-types';

type Result = {
  allMicrocmsPosts: MicrocmsPostsConnection;
  allMicrocmsTags: MicrocmsTagsConnection;
};

export type PostContext = {
  post: MicrocmsPosts;
  next: MicrocmsPosts;
  previous: MicrocmsPosts;
};

export type PostsContext = {
  skip: number;
  limit: number;
  currentPage: number;
  isFirst: boolean;
  isLast: boolean;
};

export type TagsContext = {
  tagsId: string;
  tagsname: string;
  // slug: string;
  skip: number;
  limit: number;
  currentPage: number;
  isFirst: boolean;
  isLast: boolean;
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
      group(field: tags___slug) {
        fieldValue
        totalCount
      }
    }
    allMicrocmsTags {
      nodes {
        name
        slug
        tagsId
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
        // TODO: エラー処理をちゃんと書く
        next: next!,
        previous: previous!,
      },
    });
  });

  // 記事一覧ページのページネーションの実装
  const postsPerPage = 6;
  const posts = result.data.allMicrocmsPosts.edges.length;
  const postsPages = Math.ceil(posts / postsPerPage);

  Array.from({ length: postsPages }).forEach((_, i) => {
    createPage<PostsContext>({
      path: i === 0 ? `/posts/` : `/posts/${i + 1}/`,
      component: path.resolve(`./src/templates/posts.tsx`),
      context: {
        skip: postsPerPage * i,
        limit: postsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === postsPages,
      },
    });
  });

  // tagごとのカテゴリーページを生成
  result.data.allMicrocmsTags.nodes.forEach((node) => {
    createPage<TagsContext>({
      path: `/tags/${node.tagsId}/`,
      component: path.resolve(`./src/templates/tags.tsx`),
      context: {
        tagsId: node.slug!,
        tagsname: node.name!,
        skip: 0,
        limit: 100,
        currentPage: 1,
        isFirst: true,
        isLast: true,
      },
    });
  });
};
