import typography from './typography';
import { isNumber } from '#utils/validate';

// convert px to rem
const px = (px: number) => {
  let basePx = Number(typography.baseFontSize.replace('px', ''));
  basePx = isNumber(basePx) ? basePx : 16;

  return `${px / basePx}rem`;
};

const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1920px',
  px,
};

export default size;
