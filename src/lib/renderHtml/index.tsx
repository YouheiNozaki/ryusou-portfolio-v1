import React from 'react';
import rehypeReact from 'rehype-react';
import Imgix from 'react-imgix';
import Highlight from 'react-highlight';
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa';
import { colors } from '../../theme';

const MainChapter: React.FC = (props) => {
  return (
    <h1 css={{ color: colors.blue }}>
      <FaLink className="MainChapterIcon" />
      {props.children}
    </h1>
  );
};

const SubChapter: React.FC = (props) => {
  return (
    <h2 css={{ color: colors.blue }}>
      <FaLink className="SubChapterIcon" />
      {props.children}
    </h2>
  );
};

const ThirdChapter: React.FC = (props) => {
  return (
    <h3 css={{ color: colors.blue }}>
      <FaLink className="ThirdChapterIcon" />
      {props.children}
    </h3>
  );
};

const MyLink: React.FC = (props: any) => {
  return (
    <a
      href={props.href}
      className="MyLink"
      css={{ color: colors.blue }}
    >
      <FaExternalLinkAlt />
      {props.children}
    </a>
  );
};

const MyImage: React.FC = (props: any) => {
  return (
    <Imgix
      src={props.src}
      sizes="(max-width: 768px) 100vw, 768px"
      htmlAttributes={{
        alt: props.alt,
      }}
      css={{ width: '100%' }}
    />
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
    a: MyLink,
    img: MyImage,
    // @ts-ignore
    code: Highlight,
  },
}).Compiler;
