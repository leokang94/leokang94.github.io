import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <div>404 Not Found</div>
    </NotFoundPageWrapper>
  );
}

const NotFoundPageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${theme.size.headerHeight} - ${theme.size.footerHeight} - ${theme.size.layoutPadding} * 2);
  `}
`;
