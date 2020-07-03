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
