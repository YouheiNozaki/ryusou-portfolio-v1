import * as React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FluidImage } from '../lib/images';
import { css } from '@emotion/core';
import { color } from 'csx';
import { FaExternalLinkAlt } from 'react-icons/fa';

import {
  sizes,
  colors,
  fontSizes,
  typography,
  mq,
} from '../theme';
import { PageAboutQuery } from '../../graphql-types';
import { SEO } from '../components/templates/Seo';
import { Title, SubTitle, Icon } from '../components/Atom';

type Props = {
  data: PageAboutQuery;
  location: Location;
};

const AboutContainer = css({
  marginTop: sizes[16],
});

const Profile = css({
  margin: `${sizes[16]} auto`,
  textAlign: 'center',
  '& .paragraph': {
    marginTop: sizes[16],
    '& p': {
      '& a': {
        textDecoration: 'none',
        color: colors.blue,
        margin: sizes[1],
      },
      '& a:hover': {
        color: colors.red,
      },
    },
  },
});

const Career = css({
  margin: `${sizes[32]} auto`,
  textAlign: 'center',
  '& table': {
    margin: `${sizes[16]} auto`,
    width: '100%',
    borderTop: `solid ${sizes[1]} ${colors.blue}`,
    borderBottom: `solid ${sizes[1]} ${colors.blue}`,
    borderCollapse: 'collapse',
    '& caption': {
      fontSize: fontSizes.lg,
      color: colors.blue,
      fontWeight: typography.fontWeights.black,
    },
    '& thead': {
      background: `${color(colors.blue).fade(0.6)}`,
      '& tr th': {
        color: colors.white,
        fontWeight: typography.fontWeights.black,
        paddingLeft: sizes[12],
        borderBottom: `dashed ${sizes[1]} ${color(
          colors.blue,
        ).fade(0.4)}`,
      },
    },
    '& tbody': {
      '& tr td': {
        color: colors.blue,
        fontWeight: typography.fontWeights.black,
        paddingLeft: sizes[8],
        borderBottom: `dashed ${sizes[1]} ${color(
          colors.blue,
        ).fade(0.4)}`,
      },
    },
  },
});

const SkillStack = css({
  margin: `${sizes[16]} auto`,
  '& h2': {
    textAlign: 'center',
  },
  '& .SkillStackList': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    '& .SkillStackItem': {
      margin: sizes[8],
      display: 'flex',
      '& .SkillStackItemContent': {
        marginLeft: sizes[2],
        '& h3': {
          color: colors.white,
          backgroundColor: colors.red,
          marginTop: sizes[1],
          marginBottom: sizes[1],
          padding: sizes[2],
          borderRadius: sizes[2],
        },
        '& p': {
          color: colors.blue,
          marginTop: sizes[1],
          marginLeft: sizes[2],
        },
        [mq[1]]: {
          marginLeft: sizes[6],
        },
        [mq[0]]: {
          marginLeft: sizes[8],
        },
      },
    },
    [mq[1]]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr ',
    },
    [mq[0]]: {
      display: 'block',
      marginLeft: sizes[8],
    },
  },
});

const About: React.FC<Props> = ({ data, location }) => (
  <>
    <SEO
      pagetitle="ABOUT"
      pagedesc="Aboutページ"
      pagepath={location.pathname}
    />
    <section css={AboutContainer}>
      <Title>ABOUT</Title>
      <SubTitle>どーも。りゅーそうです。</SubTitle>
      <Icon>
        <FluidImage
          filename="girl.png"
          alt="プロフィール画像"
        />
      </Icon>
      <article>
        <section css={Profile}>
          <SubTitle>私について</SubTitle>
          <div className="paragraph">
            <p>
              私は現在、学校の社会科の教員として教壇に立っています。
            </p>
            <p>
              学校のIT化を推進するために活動中で、
              <a href="https://microcms.io/blog/what-is-jamstack/">
                <FaExternalLinkAlt />
                Jamstack
              </a>
              製の学校HPを作成するのが最近の目標です。
            </p>
            <p>Spitzと猫と犬が大好きです</p>
          </div>
        </section>
        <section css={Career}>
          <SubTitle>これまでのりゅーそう</SubTitle>
          <table>
            <caption>経歴</caption>
            <thead>
              <tr>
                <th>年</th>
                <th>項目</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1994</td>
                <td>誕生</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>某大学文学部入学</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>どこかの県の学校の社会科教員</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section css={SkillStack}>
          <SubTitle>技術スタック</SubTitle>
          <div className="SkillStackList">
            {data?.allMicrocmsSkills?.edges.map((edge) => {
              const skill = edge.node;
              return (
                <React.Fragment key={skill.id}>
                  <div className="SkillStackItem">
                    {skill?.title &&
                      skill?.fields?.featuredImage
                        ?.fixed && (
                        <Image
                          fixed={
                            skill.fields.featuredImage.fixed
                          }
                          alt={skill.title}
                        />
                      )}
                    <div className="SkillStackItemContent">
                      <h3>{skill.title}</h3>
                      <p>{skill.parameter}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <p>
            ※この数値は妄想であり、現実の能力とは解離している場合があります。
          </p>
        </section>
      </article>
    </section>
  </>
);

export const pagequery = graphql`
  query PageAbout {
    allMicrocmsSkills {
      edges {
        node {
          id
          title
          parameter
          fields {
            featuredImage {
              fixed(height: 80, width: 80) {
                src
                base64
                srcSet
                srcSetWebp
                srcWebp
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
