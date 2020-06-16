import React, { useState } from 'react';
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
    border: `${sizes[1]} solid ${colors.blue}`,
    outline: 'none',
    WebkitTransition: 'all .3s ease-in-out',
    transition: 'all .3s ease-in-out',
  },
  '& .hamburger:hover': {
    boxShadow: `0 0 ${sizes.px} ${colors.blue}`,
  },
  '& .hamburger:focus': {
    boxShadow: `0 0 ${sizes[1]} ${colors.blue}`,
  },
  '& .hamburgerLine': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    width: '18px',
    height: sizes[1],
    borderRadius: sizes[1],
    backgroundColor: colors.yellow,
    WebkitTransition: 'inherit',
    transition: 'inherit',
  },
  '& .hamburgerLine::before': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: sizes[1],
    backgroundColor: colors.lightBlue,
    content: "''",
    WebkitTransition: 'inherit',
    transition: 'inherit',
    top: '-8px',
  },
  '& .hamburgerLine::after': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: sizes[1],
    backgroundColor: colors.red,
    content: "''",
    WebkitTransition: 'inherit',
    transition: 'inherit',
    top: '8px',
  },
  "& .hamburger[aria-expanded='true']": {
    border: `${sizes[1]} solid ${colors.yellow}`,
    boxShadow: `0 0 ${sizes[1]} ${colors.yellow}`,
    '& .hamburgerLine': {
      backgroundColor: 'transparent',
    },
    '& .hamburgerLine::before': {
      top: 0,
      backgroundColor: colors.lightBlue,
      WebkitTransform: 'rotate(45deg)',
      '-ms-transform': 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },
    '& .hamburgerLine::after': {
      top: 0,
      backgroundColor: colors.red,
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
  const [ariaExpanded, setAriaExpanded] = useState(false);

  return (
    <div css={hamburger}>
      <button
        type="button"
        className="button hamburger"
        aria-controls="global-nav"
        aria-expanded={ariaExpanded}
        onClick={() => setAriaExpanded(!ariaExpanded)}
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
