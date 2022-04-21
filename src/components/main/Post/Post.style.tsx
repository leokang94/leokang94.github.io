import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const WIDTH = 350;

export const Post: React.FC = ({ children }) => {
  const theme = useTheme();
  const imageCss = css`
    border-radius: ${theme.size.px(10)} ${theme.size.px(10)} 0 0;
    height: ${theme.size.px(WIDTH * (9 / 16))}; // 16:9
  `;

  return (
    <StyledPost>
      <StaticImage src="../../../assets/images/default-thumbnail.png" alt="asdf" css={imageCss} />
      {/* <GatsbyImage image={getImage(defaultThumbnail)} alt="asdf" css={imageCss} /> */}
      <PostContentArea>
        <Title>{children}</Title>
        <Desc>asdfasdfasdfsadfadfsdfasdfsadfas</Desc>
      </PostContentArea>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${theme.size.px(WIDTH)};
    border-radius: ${theme.size.px(10)};
    box-shadow: 0 0 ${theme.size.px(8)} rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 ${theme.size.px(10)} rgba(0, 0, 0, 0.3);
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
const Title = styled.div`
  // text ellipse를 2라인으로 처리
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 20px;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
const Desc = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size.px(14)};
    color: ${theme.color.gray};
  `}
`;
