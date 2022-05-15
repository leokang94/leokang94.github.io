import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Footer = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    padding: ${theme.size.px(30)} ${theme.size.px(20)};
    background-color: ${theme.color.footerBg};
    margin-top: auto;
  `}
`;
