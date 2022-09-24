import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    word-break: keep-all;
    box-sizing: border-box;
  }

  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
