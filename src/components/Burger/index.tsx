import React from 'react';
import { css } from '@emotion/core';
import { sizes, colors } from '../../theme';

const hamburger = css({
  '& .button': {
    position: 'relative',
    top: sizes[5],
    right: sizes[5],
    display: 'inline-block',
    textDecoration: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: 'none',
    backgroundColor: 'transparent',
  },
  '& .hamburger': {
    position: 'absolute',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1px solid #f9d8ae',
    boxShadow: '0 0 2rem transparent',
    outline: 'none',
    WebkitTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out',
  },
  '& .hamburger:hover': {
    boxShadow: '0 0 .5rem rgba(255, 255, 255, .5 )',
  },
  '& .hamburger:focus': {
    boxShadow: `0 0 ${sizes[2]} ${colors.red}`,
  },
  '& .hamburgerLine': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    width: '18px',
    height: '2px',
    backgroundColor: '#f9d8ae',
    WebkitTransition: 'inherit',
    transition: 'inherit',
  },
  '& .hamburgerLine::before': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    content: "''",
    WebkitTransition: 'inherit',
    transition: 'inherit',
    top: '-5px',
  },
  '& .hamburgerLine::after': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    content: "''",
    WebkitTransition: 'inherit',
    transition: 'inherit',
    top: '5px',
  },
  "& .hamburger[aria-expanded='true']": {
    '& .hamburgerLine': {
      backgroundColor: 'transparent',
    },
    '& .hamburgerLine::before': {
      top: 0,
      backgroundColor: '#f9d8ae',
      WebkitTransform: 'rotate(45deg)',
      '-ms-transform': 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },
    '& .hamburgerLine::after': {
      top: 0,
      backgroundColor: '#f9d8ae',
      WebkitTransform: 'rotate(-45deg)',
      '-ms-transform': 'rotate(-45deg)',
      transform: 'rotate(-45deg)',
    },
  },
  '& .visuallyHidden': {
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    border: 0,
    padding: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    margin: '-1px',
  },
});

export const Burger = () => {
  return (
    <div css={hamburger}>
      <button
        type="button"
        className="button hamburger"
        aria-controls="global-nav"
        aria-expanded="false"
      >
        <span className="hamburgerLine">
          <span className="visuallyHidden">
            メニューを開閉する
          </span>
        </span>
      </button>
    </div>
  );
};
