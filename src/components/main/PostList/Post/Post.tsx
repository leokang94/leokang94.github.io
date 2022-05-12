import React from 'react';
import * as S from './Post.style';

interface PostProps {
  title: string;
  date: string;
  content: string;
  tags?: string[];
  imageSrc?: string;
}

export default function Post({ title, date, content, tags, imageSrc }: PostProps) {
  return (
    <S.Post>
      <S.PostImage />
      <S.PostContentArea>
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
      </S.PostContentArea>
    </S.Post>
  );
}
