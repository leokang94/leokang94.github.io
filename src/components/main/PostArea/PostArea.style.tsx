import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PostArea = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.size.px(15)};
    margin: ${theme.size.px(10)} 0;

    @media (min-width: ${theme.size.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.size.laptop}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${theme.size.desktop}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
