import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import defaultThumbnail from '#images/default-thumbnail.png';
import { StaticImage } from 'gatsby-plugin-image';

export const Post: React.FC = ({ children }) => {
  console.log(defaultThumbnail);
  return (
    <StyledPost>
      <StaticImage src="../../../assets/images/default-thumbnail.png" alt="asdf" />
      <PostContentArea>
        <Title>{children}</Title>
        <Desc>asdfasdfasdfsadfadfsdfasdfsadfas</Desc>
      </PostContentArea>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.size.px(350)};
    border-radius: ${theme.size.px(10)};
    box-shadow: 0 0 ${theme.size.px(8)} rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 ${theme.size.px(15)} rgba(0, 0, 0, 0.3);
    }
  `}
`;
const PostContentArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.size.px(15)};
    gap: ${theme.size.px(10)};
  `}
`;
const Title = styled.div``;
const Desc = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size.px(14)};
    color: ${theme.color.gray};
  `}
`;
