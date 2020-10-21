import React from 'react';
import rehypeReact from 'rehype-react';
import Imgix from 'react-imgix';
import Highlight from 'react-highlight';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { colors, sizes, typography } from '../../theme';

const MainChapter: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <h1
      ref={ref}
      css={{
        color: colors.blue,
        padding: sizes[2],
        marginTop: sizes[8],
        marginBottom: sizes[8],
        borderLeft: `solid ${sizes[2]} ${colors.red}`,
        opacity: inView ? 1 : 0,
      }}
    >
      {props.children}
    </h1>
  );
};

const SubChapter: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <h2
      ref={ref}
      css={{
        color: colors.blue,
        padding: sizes[2],
        marginTop: sizes[8],
        marginBottom: sizes[8],
        borderLeft: `solid ${sizes[2]} ${colors.red}`,
        opacity: inView ? 1 : 0,
      }}
    >
      {props.children}
    </h2>
  );
};

const ThirdChapter: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <h3
      ref={ref}
      css={{
        color: colors.blue,
        padding: sizes[2],
        marginTop: sizes[4],
        borderLeft: `solid ${sizes[2]} ${colors.red}`,
        opacity: inView ? 1 : 0,
      }}
    >
      {props.children}
    </h3>
  );
};

const Paragraph: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <p
      ref={ref}
      css={{
        letterSpacing: typography.letterSpacings.wide,
        lineHeight: typography.lineHeights.tall,
        opacity: inView ? 1 : 0,
      }}
    >
      {props.children}
    </p>
  );
};

const MyLink: React.FC = (props: any) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <a
      ref={ref}
      href={props.href}
      className="MyLink"
      css={{
        color: colors.red,
        opacity: inView ? 1 : 0,
        ':hover': {
          color: colors.blue,
        },
      }}
    >
      <FaExternalLinkAlt css={{ marginRight: sizes.px }} />
      {props.children}
    </a>
  );
};

const List: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <ul
      ref={ref}
      css={{
        opacity: inView ? 1 : 0,
        ':hover': {
          color: colors.blue,
        },
      }}
    >
      {props.children}
    </ul>
  );
};

const Code: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <pre
      ref={ref}
      css={{
        opacity: inView ? 1 : 0,
      }}
    >
      {props.children}
    </pre>
  );
};

const MyImage: React.FC = (props: any) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <div
      ref={ref}
      css={{
        opacity: inView ? 1 : 0,
      }}
    >
      <Imgix
        src={props.src}
        sizes="(max-width: 768px) 100vw, 768px"
        htmlAttributes={{
          alt: props.alt,
        }}
        css={{
          width: '60%',
          margin: `0 auto ${sizes[8]} auto`,
          borderRadius: sizes[2],
          opacity: inView ? 1 : 0,
        }}
      />
    </div>
  );
};

const BorderParagraph: React.FC = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  return (
    <strong
      ref={ref}
      css={{
        background: `linear-gradient(transparent 70%, ${colors.yellow} 70%)`,
        opacity: inView ? 1 : 0,
      }}
    >
      {props.children}
    </strong>
  );
};

// @ts-ignore
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h1: MainChapter,
    h2: SubChapter,
    h3: ThirdChapter,
    p: Paragraph,
    a: MyLink,
    ul: List,
    img: MyImage,
    strong: BorderParagraph,
    pre: Code,
    // @ts-ignore
    code: Highlight,
  },
}).Compiler;
