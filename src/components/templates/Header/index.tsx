import React from 'react';
import Link from 'gatsby-link';
import ICON from '../../../images/icon.png';

type Props = {
  siteTitle: String;
};

export const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <>
      <Link to="/">
        <img
          src={ICON}
          alt="link to homepage Logo"
          width={48}
          height={48}
        />
        <h1>{siteTitle}</h1>
      </Link>
      <Link to="/posts">POST</Link>
    </>
  );
};
