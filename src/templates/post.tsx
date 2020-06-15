import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import unified from 'unified';
import parse from 'rehype-parse';

import { PostContext } from '../../gatsby-node';
import { renderAst } from '../lib/renderHtml';

type Props = {
  pageContext: PostContext;
};

const Post: React.FC<Props> = ({ pageContext }) => {
  const post = pageContext.post;

  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(post.content!);

  return (
    <>
      <h1>{post.title}</h1>
      {post?.tags?.map(
        (tag) =>
          tag?.id && (
            <React.Fragment key={tag.id}>
              <Link to={`/tags/${tag.id}`}>
                <span>{tag.name}</span>
              </Link>
            </React.Fragment>
          ),
      )}
      <div>
        <p>{post.createdAt}</p>
        <p>{post.updatedAt}</p>
      </div>
      {post?.fields?.featuredImage?.fluid && (
        <Image
          fluid={post.fields.featuredImage.fluid}
          alt="投稿したブログのイメージ画像"
        />
      )}
      <div className="postbody">{renderAst(htmlAst)}</div>
      <div>
        {pageContext.next && (
          <div>
            <Link
              to={`/posts/${pageContext.next.postsId}`}
              rel="prev"
            >
              <span>{pageContext.next.title}</span>
            </Link>
          </div>
        )}
        {pageContext.previous && (
          <div>
            <Link
              to={`/posts/${pageContext.previous.postsId}`}
              rel="prev"
            >
              <span>{pageContext.previous.title}</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
