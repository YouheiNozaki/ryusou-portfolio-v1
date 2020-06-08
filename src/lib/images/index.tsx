import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  filename: string;
  alt: string;
  style?: any;
};

export const FluidImage: React.FC<Props> = (props) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1280) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <figure>
      <Img
        fluid={
          allImageSharp.nodes.find(
            //TODO:anyを消す
            (n: any) =>
              n.fluid.originalName === props.filename,
          ).fluid
        }
        alt={props.alt}
        style={props.style}
      />
    </figure>
  );
};
