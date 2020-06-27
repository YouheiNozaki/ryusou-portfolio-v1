import { keyframes } from '@emotion/core';
import { sizes } from '../theme';

export const RightIn = keyframes({
  '0%': {
    opacity: 0,
    transform: `translate3d{${sizes[10]})`,
  },
  '80%': {
    transform: `translate3d(-1rem)`,
  },
  '100%': {
    opacity: 1,
    transform: `translate3d(0)`,
  },
});
