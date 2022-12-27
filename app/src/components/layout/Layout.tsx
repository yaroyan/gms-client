/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main css={styles.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;

const styles = {
  main: css`
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
  `,
};
