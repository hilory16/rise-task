import { css } from 'styled-components';
import TomatoMedium from 'assets/fonts/TomatoGrotesk-Medium.otf';
import TomatoSemiBold from 'assets/fonts/TomatoGrotesk-SemiBold.otf';
import TomatoBold from 'assets/fonts/TomatoGrotesk-Bold.otf';
export const fontFamily = css`
  @font-face {
    font-family: Tomato Grotesk;
    src: url(${TomatoMedium});
    font-weight: 400;
  }
  @font-face {
    font-family: Tomato Grotesk;
    src: url(${TomatoSemiBold});
    font-weight: 600;
  }
  @font-face {
    font-family: Tomato Grotesk;
    src: url(${TomatoBold});
    font-weight: 700;
  }
`;
