import React from 'react';
import { graphql } from 'gatsby';
import { PageWorksQuery } from '../../graphql-types';

type Props = {
  data: PageWorksQuery;
};

const Works: React.FC<Props> = ({ data }) => (
  <>
    <h1>WORKS</h1>
    <div>
      <h2>サイト</h2>
      {data.site?.nodes?.map((node) => {
        const site = node;
        return (
          <React.Fragment key={site.id}>
            <h2>{site.title}</h2>
            {site?.image?.url && (
              <img
                src={site.image?.url}
                alt="作成したアプリ、サイトの画像"
              />
            )}
            {site?.url && <a href={site.url}>{site.url}</a>}
            <p>{site.description}</p>
          </React.Fragment>
        );
      })}
    </div>
    <div>
      <h2>スピーチ</h2>
      {data.speech?.nodes?.map((node) => {
        const speech = node;
        return (
          <React.Fragment key={speech.id}>
            <h2>{speech.title}</h2>
            {speech?.image?.url && (
              <img
                src={speech.image?.url}
                alt="作成したアプリ、サイトの画像"
              />
            )}
            {speech?.url && (
              <a href={speech.url}>{speech.url}</a>
            )}
            <p>{speech.description}</p>
          </React.Fragment>
        );
      })}
    </div>
  </>
);

export const pageQuery = graphql`
  query PageWorks {
    site: allMicrocmsWorks(
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
    speech: allMicrocmsWorks(
      filter: {
        tag: { elemMatch: { tag: { eq: "スピーチ" } } }
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
