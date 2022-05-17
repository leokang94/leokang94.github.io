import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: ${theme.size.headerHeight};
    background-color: ${theme.color.headerBg};
    padding: 0 ${theme.size.px(24)};
    z-index: 100;
  `}
`;
