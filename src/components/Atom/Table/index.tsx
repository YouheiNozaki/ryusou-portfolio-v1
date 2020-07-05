import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  colors,
  sizes,
  fontSizes,
  typography,
} from '../../../theme';
import { color } from 'csx';
import { BottomIn } from '../../../keyframes';

export const Table: React.FC = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });
  return (
    <table
      ref={ref}
      css={{
        margin: `${sizes[16]} auto`,
        width: '100%',
        borderTop: `solid ${sizes[1]} ${colors.blue}`,
        borderBottom: `solid ${sizes[1]} ${colors.blue}`,
        borderCollapse: 'collapse',
        '& caption': {
          fontSize: fontSizes.lg,
          color: colors.blue,
          fontWeight: typography.fontWeights.black,
        },
        '& thead': {
          background: `${color(colors.blue).fade(0.6)}`,
          '& tr th': {
            color: colors.white,
            fontWeight: typography.fontWeights.black,
            paddingLeft: sizes[12],
            borderBottom: `dashed ${sizes[1]} ${color(
              colors.blue,
            ).fade(0.4)}`,
          },
        },
        '& tbody': {
          '& tr td': {
            color: colors.blue,
            fontWeight: typography.fontWeights.black,
            paddingLeft: sizes[8],
            borderBottom: `dashed ${sizes[1]} ${color(
              colors.blue,
            ).fade(0.4)}`,
          },
        },

        opacity: inView ? 1 : 0,
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
      }}
    >
      <caption>経歴</caption>
      <thead>
        <tr>
          <th>年</th>
          <th>項目</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1994</td>
          <td>誕生</td>
        </tr>
        <tr>
          <td>2013</td>
          <td>某大学文学部入学</td>
        </tr>
        <tr>
          <td>2016</td>
          <td>どこかの県の学校の社会科教員</td>
        </tr>
      </tbody>
    </table>
  );
};
