import React from 'react';
import rehypeReact from 'rehype-react';
import Imgix from 'react-imgix';
import Highlight from 'react-highlight';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  colors,
  sizes,
  fontSizes,
  typography,
} from '../../theme';

const MainChapter: React.FC = (props) => {
  return (
    <h1
      css={{
        color: colors.blue,
        padding: sizes[8],
        marginTop: sizes[8],
        marginBottom: sizes[8],
        borderLeft: `solid ${sizes[2]} ${colors.red}`,
      }}
    >
      {props.children}
    </h1>
  );
};

const SubChapter: React.FC = (props) => {
  return (
    <h2
      css={{
        color: colors.blue,
        padding: sizes[3],
        marginTop: sizes[8],
        marginBottom: sizes[8],
        borderLeft: `solid ${sizes[2]} ${colors.red}`,
      }}
    >
      {props.children}
    </h2>
  );
};

const ThirdChapter: React.FC = (props) => {
  return (
    <h3
      css={{
        color: colors.blue,
        padding: sizes[4],
        marginTop: sizes[4],
        borderLeft: `solid ${sizes[2]} ${colors.red}`,
      }}
    >
      {props.children}
    </h3>
  );
};

const Paragraph: React.FC = (props) => {
  return (
    <p
      css={{
        letterSpacing: typography.letterSpacings.wide,
        lineHeight: typography.lineHeights.tall,
      }}
    >
      {props.children}
    </p>
  );
};

const MyLink: React.FC = (props: any) => {
  return (
    <a
      href={props.href}
      className="MyLink"
      css={{
        fontSize: fontSizes.xl,
        color: colors.red,
        marginLeft: sizes[4],
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

const MyImage: React.FC = (props: any) => {
  return (
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
      }}
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
    p: Paragraph,
    a: MyLink,
    img: MyImage,
    // @ts-ignore
    code: Highlight,
  },
}).Compiler;
