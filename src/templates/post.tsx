import React from 'react';
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
              <span>{tag.name}</span>
            </React.Fragment>
          ),
      )}
      <p>{post.day}</p>
      {post?.image?.url && <img src={post.image.url} />}
      <p
        dangerouslySetInnerHTML={{
          __html: `${post.content}`,
        }}
      ></p>
    </>
  );
};

export default Post;
