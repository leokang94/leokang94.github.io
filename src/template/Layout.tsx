import React from 'react';
import styled from '@emotion/styled';

const Layout: React.FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  padding: 0 ${({ theme }) => theme.size.px(24)};
`;
