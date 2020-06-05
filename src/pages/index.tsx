import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  data: any;
};

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Ryusou blog"
      />
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "ryusoublog.png" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
