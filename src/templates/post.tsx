import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa';
import unified from 'unified';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import Imgix from 'react-imgix';

import { PostContext } from '../../gatsby-node';

type Props = {
  pageContext: PostContext;
};

const Post: React.FC<Props> = ({ pageContext }) => {
  const post = pageContext.post;

  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(post.content!);

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
      h1: (props: string) => {
        return (
          <h1 className="MainChapter">
            <FaLink className="MainChapterIcon" />
            {props.children}
          </h1>
        );
      },
      h2: (props: string) => {
        return (
          <h2 className="SecondChapter">
            <FaLink className="SecondChapterIcon" />
            {props.children}
          </h2>
        );
      },
      h3: (props: string) => {
        return (
          <h3 className="ThirdChapter">
            <FaLink className="ThirdChapterIcon" />
            {props.children}
          </h3>
        );
      },
      a: (props: string) => {
        return (
          <a href={props.href}>
            <FaExternalLinkAlt />
            {props.children}
          </a>
        );
      },
      img: (props: string) => {
        return (
          <Imgix
            src={props.src}
            sizes="(max-width: 768px) 100vw, 768px"
            htmlAttributes={{
              alt: props.alt,
            }}
          />
        );
      },
    },
  }).Compiler;

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
