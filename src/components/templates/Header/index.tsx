import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
// import ICON from '../../../images/icon.png';

type Props = {
  siteTitle: String;
};

export const Header: React.FC<Props> = ({ siteTitle }) => {
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
        <h1>{siteTitle}</h1>
      </Link>
      <Link to="/posts">POST</Link>
      <Link to="/work">WORK</Link>
      <Link to="/contact">CONTACT</Link>
    </>
  );
};
