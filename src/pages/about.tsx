import * as React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FluidImage } from '../lib/images';

import { PageAboutQuery } from '../../graphql-types';

type Props = {
  data: PageAboutQuery;
};

const About: React.FC<Props> = ({ data }) => (
  <>
    <div>
      <h1>どーも。りゅーそうです。</h1>
      <div>
        <FluidImage
          filename="girl.png"
          alt="プロフィール画像"
        />
      </div>
      <article>
        <section>
          <h2>私について</h2>
          <p>
            私は現在、学校の社会科の教員として教壇に立っています。
          </p>
          <p>
            学校のIT化を推進するために活動中で、
            <a href="https://microcms.io/blog/what-is-jamstack/">
              Jamstack
            </a>
            製の学校HPを作成するのが最近の目標です。
          </p>
          <p>Spitzと猫と犬が大好きです</p>
        </section>
        <section>
          <h2>これまでのりゅーそう</h2>
          <table>
            <caption>経歴</caption>
            <tr>
              <td>年</td>
              <td>項目</td>
            </tr>
            <tr>
              <td>1994</td>
              <td>誕生</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>某大学文学部入学</td>
            </tr>
            <tr>
              <td>2016.4~</td>
              <td>どこかの県の学校の社会科教員</td>
            </tr>
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
    </div>
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
