import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export const Post = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${theme.size.px(10)};
    box-shadow: 0 0 ${theme.size.px(8)} rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 ${theme.size.px(10)} rgba(0, 0, 0, 0.3);
    }
  `}
`;

interface PostImageProps {
  thumbnail: Nullable<IGatsbyImageData>;
}
export function Image({ thumbnail }: PostImageProps) {
  const theme = useTheme();
  const imageCss = css`
    border-radius: ${theme.size.px(10)} ${theme.size.px(10)} 0 0;
    aspect-ratio: 16 / 9;
  `;

  if (thumbnail) return <GatsbyImage image={thumbnail} alt="thumbnail" css={imageCss} />;
  return <StaticImage src="../../../../assets/images/default-thumbnail.png" alt="thumbnail" css={imageCss} />;
}

export const ContentArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.size.px(15)};
    gap: ${theme.size.px(10)};
  `}
`;

const textEllipseCss = css`
  // text ellipse를 2라인으로 처리
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* line-height: 20px; */

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Title = styled.div`
  ${textEllipseCss}

  ${({ theme }) =>
    css`
      line-height: ${theme.size.px(23)};
    `}
`;

export const Date = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size.px(14)};
    color: ${theme.color.gray};
  `}
`;

export const Desc = styled.div`
  ${textEllipseCss}

  ${({ theme }) => css`
    line-height: ${theme.size.px(20)};
    font-size: ${theme.size.px(14)};
    color: ${theme.color.gray};
  `}
`;

export const TagArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.size.px(5)};
  `}
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    padding: ${theme.size.px(5)} ${theme.size.px(10)};
    border-radius: ${theme.size.px(5)};
    background-color: ${theme.color.gray};
    font-size: ${theme.size.px(13)};
    color: ${theme.color.black};
  `}
`;
