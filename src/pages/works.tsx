import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

import { sizes, mq } from '../theme';
import { SEO } from '../components/templates/Seo';
import { PageWorksQuery } from '../../graphql-types';
import { Title, SubTitle } from '../components/atoms';
import { WorkCard } from '../components/molecules';

type Props = {
  data: PageWorksQuery;
  location: Location;
};

const WorkContainer = css({
  marginTop: sizes[16],
  '& .WorkTitle': {
    textAlign: 'center',
  },
  '& .WorkList': {
    display: 'grid',
    gridTemplateColumns: `1fr 1fr`,
    gridGap: sizes[8],
    [mq[0]]: {
      display: 'block',
      margin: '0 auto',
      width: sizes.largeSizes.xs,
    },
  },
});

const Works: React.FC<Props> = ({ data, location }) => (
  <>
    <SEO
      pagetitle="WORK"
      pagedesc="作品の一覧ページ"
      pagepath={location.pathname}
    />
    <Title>WORK</Title>
    <div css={WorkContainer}>
      {/* <h2 className="WorkTitle">サイト</h2> */}
      <SubTitle>サイト</SubTitle>
      <div className="WorkList">
        {data.site?.nodes?.map((node) => {
          const site = node;
          return (
            <React.Fragment key={site.id}>
              {site?.url && (
                <WorkCard
                  title={site.title}
                  fluidImage={
                    site.fields?.featuredImage?.fluid
                  }
                  url={site.url}
                  description={site.description}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
    <div css={WorkContainer}>
      <h2 className="WorkTitle">スピーチ</h2>
      <div className="WorkList">
        {data.speech?.nodes?.map((node) => {
          const speech = node;
          return (
            <React.Fragment key={speech.id}>
              {speech?.url && (
                <WorkCard
                  title={speech.title}
                  fluidImage={
                    speech.fields?.featuredImage?.fluid
                  }
                  url={speech.url}
                  description={speech.description}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
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
        fields {
          featuredImage {
            fluid(maxHeight: 110, maxWidth: 180) {
              src
              sizes
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
            }
          }
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
        fields {
          featuredImage {
            fluid(maxHeight: 110, maxWidth: 180) {
              src
              sizes
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
            }
          }
        }
        title
        url
        description
      }
    }
  }
`;

export default Works;
