import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <>
      <p>This Site is built in Gatsby</p>
      <a href="https://twitter.com/ryusou_mtkh">
        <FaTwitter />
      </a>
      <a href="https://github.com/YouheiNozaki">
        <FaGithub />
      </a>
    </>
  );
};
