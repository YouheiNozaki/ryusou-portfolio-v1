import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <Link to="/">
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="Logo"
        />
      </Link>
      <Link to="/posts">POST</Link>
      <Link to="/work">WORK</Link>
      <Link to="/contact">CONTACT</Link>
    </>
  );
};
