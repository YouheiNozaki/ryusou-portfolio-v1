import { keyframes } from '@emotion/core';
import { sizes } from '../theme';

export const RightIn = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateX(${sizes[5]})`,
  },
  '80%': {
    transform: `translateX(-1rem)`,
  },
  '100%': {
    opacity: 1,
    transform: `translateX(0)`,
  },
});

export const BottomIn = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateY(${sizes[4]})`,
  },
  '50%': {
    opacity: 0.5,
    transform: `translateY(${sizes[2]})`,
  },
  '100%': {
    opacity: 1,
    transform: `translateY(0)`,
  },
});
