import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Layout: React.FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  ${({ theme }) => css`
    padding: ${theme.size.px(20)} ${theme.size.px(20)};
  `}
`;
