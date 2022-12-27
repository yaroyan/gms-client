/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const cardStyle = css`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: white;
`;

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div css={cardStyle}>{children}</div>;
};

export default Card;
