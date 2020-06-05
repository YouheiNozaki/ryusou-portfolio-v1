import React from 'react';
import { Link } from 'gatsby';
import { PostContext } from '../../gatsby-node';

type Props = {
  pageContext: PostContext;
};

const Post: React.FC<Props> = ({ pageContext }) => {
  const post = pageContext.post;

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
      <p>{post.day}</p>
      {post?.image?.url && (
        <img
          src={post.image.url}
          alt="投稿したブログのイメージ画像"
        />
      )}
      <p
        dangerouslySetInnerHTML={{
          __html: `${post.content}`,
        }}
      ></p>
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
