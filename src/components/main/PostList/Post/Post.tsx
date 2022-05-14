import React from 'react';
import * as S from './Post.style';

import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostProps {
  title: string;
  date: string;
  content: string;
  tags?: string[];
  thumbnail: Nullable<IGatsbyImageData>;
}

export default function Post({ title, date, content, tags, thumbnail }: PostProps) {
  return (
    <S.Post>
      <S.Image thumbnail={thumbnail} />
      <S.ContentArea>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        {tags && (
          <S.TagArea>
            {tags?.map((tag) => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </S.TagArea>
        )}
        {content && <S.Desc>{content}</S.Desc>}
      </S.ContentArea>
    </S.Post>
  );
}
