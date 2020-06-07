import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

type Props = {
  data: any;
};

const HeroImage = css({
  width: 640,
  margin: '0 auto',
});

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div css={HeroImage}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Ryusou blog"
        />
      </div>
    </>
  );
};

export const query = graphql`
  query {
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
