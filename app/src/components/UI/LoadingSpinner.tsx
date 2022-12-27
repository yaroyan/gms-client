/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';

const LoadingSpinner = () => {
  return <div css={[styles.spinner, styles.spinnerKeyFrame]}></div>;
};

const styles = {
  spinner: css`
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid teal;
      border-color: teal transparent teal transparent;
      animation: spinner 1.2s linear infinite;
    }
  `,
  spinnerKeyFrame: keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }        
    `,
};

export default LoadingSpinner;
