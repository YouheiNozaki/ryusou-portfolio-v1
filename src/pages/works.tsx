import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { color } from 'csx';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { sizes, colors, mq } from '../theme';
import { PageWorksQuery } from '../../graphql-types';

type Props = {
  data: PageWorksQuery;
};

const SiteContainer = css({
  marginTop: sizes[16],
  '& .SiteTitle': {
    textAlign: 'center',
  },
  '& .SiteList': {
    display: 'grid',
    gridTemplateColumns: `1fr 1fr`,
    gridGap: sizes[8],
    [mq[0]]: {
      display: 'block',
    },
    '& .SiteItem': {
      border: `solid ${sizes[1]} ${color(colors.red).fade(
        0.4,
      )}`,
      borderRadius: sizes[8],
      padding: sizes[4],
      [mq[0]]: {
        marginTop: sizes[6],
      },
      '& h2': {
        color: colors.blue,
        paddingLeft: sizes[2],
      },
      '& img': {
        borderRadius: sizes[8],
      },
      '& .SiteItemContent': {
        marginTop: sizes[2],
        '& a': {
          textDecoration: 'none',
          color: colors.blue,
        },
        '& a:hover': {
          color: colors.red,
        },
        '& p': {
          marginTop: sizes[2],
        },
      },
    },
  },
});

const SpeechContainer = css({
  marginTop: sizes[16],
  '& .SpeechTitle': {
    textAlign: 'center',
  },
  '& .SpeechList': {
    margin: '0 auto',
    width: sizes.largeSizes.sm,
    '& .SpeechItem': {
      border: `solid ${sizes[1]} ${color(
        colors.lightBlue,
      ).fade(0.4)}`,
      borderRadius: sizes[8],
      padding: sizes[4],
      '& h2': {
        color: colors.blue,
        paddingLeft: sizes[2],
      },
      '& img': {
        borderRadius: sizes[8],
      },
      '& .SpeechItemContent': {
        marginTop: sizes[2],
        '& a': {
          textDecoration: 'none',
          color: colors.blue,
          textOverflow: 'ellipsis',
        },
        '& a:hover': {
          color: colors.red,
        },
        '& p': {
          marginTop: sizes[2],
        },
      },
      [mq[0]]: {
        width: sizes.largeSizes.sm,
      },
    },
  },
});

const Works: React.FC<Props> = ({ data }) => (
  <>
    <h1>WORKS</h1>
    <div css={SiteContainer}>
      <h2 className="SiteTitle">サイト</h2>
      <div className="SiteList">
        {data.site?.nodes?.map((node) => {
          const site = node;
          return (
            <React.Fragment key={site.id}>
              <div className="SiteItem">
                <h2>{site.title}</h2>
                {site?.fields?.featuredImage?.fluid && (
                  // altのデータ取得する
                  <Image
                    fluid={site.fields.featuredImage?.fluid}
                    alt="作成したアプリ、サイトの画像"
                  />
                )}
                <div className="SiteItemContent">
                  {site?.url && (
                    <a href={site.url}>
                      <FaExternalLinkAlt />
                      {site.url}
                    </a>
                  )}
                  <p>{site.description}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
    <div css={SpeechContainer}>
      <h2 className="SpeechTitle">スピーチ</h2>
      <div className="SpeechList">
        {data.speech?.nodes?.map((node) => {
          const speech = node;
          return (
            <React.Fragment key={speech.id}>
              <div className="SpeechItem">
                <h2>{speech.title}</h2>
                {speech?.fields?.featuredImage?.fluid && (
                  // altのデータ取得する
                  <Image
                    fluid={
                      speech.fields?.featuredImage?.fluid
                    }
                    alt="行ったスピーチの画像"
                  />
                )}
                <div className="SpeechItemContent">
                  {speech?.url && (
                    <a href={speech.url}>
                      <FaExternalLinkAlt />
                      {speech.url}
                    </a>
                  )}
                  <p>{speech.description}</p>
                </div>
              </div>
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
