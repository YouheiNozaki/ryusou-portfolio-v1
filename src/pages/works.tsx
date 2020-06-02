import React from 'react';
import { graphql } from 'gatsby';
import { PageWorksSitesQuery } from '../../graphql-types';

type Props = {
  data: PageWorksSitesQuery;
};

const Works: React.FC<Props> = ({ data }) => (
  <>
    <h1>WORKS</h1>
    <div>
      <h2>サイト</h2>
      {data.allMicrocmsWorks?.nodes?.map((node) => {
        const work = node;
        return (
          <React.Fragment key={work.id}>
            <h2>{work.title}</h2>
            {work?.image?.url && (
              <img
                src={work.image?.url}
                alt="作成したアプリ、サイトの画像"
              />
            )}
            <p>{work.description}</p>
          </React.Fragment>
        );
      })}
    </div>
  </>
);

export const pageQuery = graphql`
  query PageWorksSites {
    allMicrocmsWorks(
      filter: {
        tag: { elemMatch: { tag: { eq: "サイト" } } }
      }
    ) {
      nodes {
        id
        image {
          url
        }
        title
        url
        description
      }
    }
  }
`;

export default Works;
