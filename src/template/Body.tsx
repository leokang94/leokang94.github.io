import React from 'react';
import styled from '@emotion/styled';

const Body: React.FC = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Body;
