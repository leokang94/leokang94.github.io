import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  ${({ theme }) => css`
    position: sticky;
    display: flex;
    align-items: center;
    top: 0;
    height: ${theme.size.px(64)};
    background-color: ${theme.color.headerBg};
    padding: 0 ${theme.size.px(24)};
    z-index: 100;
  `}
`;
