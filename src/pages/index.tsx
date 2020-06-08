import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { PageImageQuery } from '../../graphql-types';

type Props = {
  data: PageImageQuery;
};

const HeroImage = css({
  width: 640,
  margin: '0 auto',
});

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div css={HeroImage}>
        {data.file?.childImageSharp?.fluid && (
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Ryusou blog"
          />
        )}
      </div>
    </>
  );
};

export const query = graphql`
  query PageImage {
    file(relativePath: { eq: "ryusoublog.png" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
