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
} from '../theme';

import { PageAboutQuery } from '../../graphql-types';

type Props = {
  data: PageAboutQuery;
};

// style
// Container
const AboutContainer = css({
  marginTop: sizes[16],
});

const Title = css({
  margin: '0 auto',
  textAlign: 'center',
});

const AboutIconImage = css({
  margin: `${sizes[8]} auto`,
  height: sizes[32],
  width: sizes[32],
  '& img': {
    borderRadius: '50%',
    border: `${sizes[1]} solid ${colors.red}`,
  },
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
    width: sizes.largeSizes.xl,
    borderTop: `solid ${sizes[1]} ${colors.lightBlue}`,
    borderBottom: `solid ${sizes[1]} ${colors.lightBlue}`,
    borderCollapse: 'collapse',
    '& caption': {
      fontSize: fontSizes.lg,
      color: colors.blue,
      fontWeight: typography.fontWeights.black,
    },
    '& thead': {
      background: `${color(colors.lightBlue).fade(0.8)}`,
      '& tr th': {
        color: colors.white,
        fontWeight: typography.fontWeights.black,
        paddingLeft: sizes[12],
        borderBottom: `dashed ${sizes[1]} ${color(
          colors.lightBlue,
        ).fade(0.4)}`,
      },
    },
    '& tbody': {
      '& tr td': {
        color: colors.blue,
        fontWeight: typography.fontWeights.black,
        paddingLeft: sizes[8],
        borderBottom: `dashed ${sizes[1]} ${color(
          colors.lightBlue,
        ).fade(0.4)}`,
      },
    },
  },
});

const About: React.FC<Props> = ({ data }) => (
  <>
    <section css={AboutContainer}>
      <h1 css={Title}>どーも。りゅーそうです。</h1>
      <div css={AboutIconImage}>
        <FluidImage
          filename="girl.png"
          alt="プロフィール画像"
        />
      </div>
      <article>
        <section css={Profile}>
          <h2>私について</h2>
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
          <h2>これまでのりゅーそう</h2>
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
                <td>１９９４</td>
                <td>誕生</td>
              </tr>
              <tr>
                <td>２０１３</td>
                <td>某大学文学部入学</td>
              </tr>
              <tr>
                <td>２０１６</td>
                <td>どこかの県の学校の社会科教員</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>技術スタック</h2>
          {data?.allMicrocmsSkills?.edges.map((edge) => {
            const skill = edge.node;
            return (
              <React.Fragment key={skill.id}>
                <div>
                  {skill?.title &&
                    skill?.fields?.featuredImage?.fixed && (
                      <Image
                        fixed={
                          skill.fields.featuredImage.fixed
                        }
                        alt={skill.title}
                      />
                    )}
                  <h3>{skill.title}</h3>
                  <p>{skill.parameter}</p>
                </div>
              </React.Fragment>
            );
          })}
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
