import '@emotion/react';
import size from '#styles/theme/size';
import color from '#styles/theme/color';
import typography from '#styles/theme/typography';

export declare module '@emotion/react' {
  export interface Theme {
    size: typeof size;
    color: typeof color;
    typography: typeof typography;
  }
}
