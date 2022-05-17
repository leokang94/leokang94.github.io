import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PostCardList = styled.div`
  ${({ theme }) =>
    css`
      display: grid;
      grid-template-columns: 1fr;
      gap: ${theme.size.px(15)};
      margin: ${theme.size.px(10)} 0;

      @media (min-width: ${theme.size.screen.tablet}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: ${theme.size.screen.laptop}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: ${theme.size.screen.desktop}) {
        grid-template-columns: repeat(4, 1fr);
      }
    `}
`;
