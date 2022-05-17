import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Footer = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: ${theme.size.footerHeight};
    padding: 0 ${theme.size.px(24)};
    background-color: ${theme.color.footerBg};
    margin-top: auto;
  `}
`;
