import React from 'react';
import { navigate } from 'gatsby';

import * as S from './PostCard.style';

import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  content: string;
  tags?: string[];
  thumbnail: Nullable<IGatsbyImageData>;
}

export default function PostCard({ title, slug, date, content, tags, thumbnail }: PostCardProps) {
  const handleClick = async () => {
    await navigate(`/blog/${slug}`);
  };

  return (
    <S.PostCard onClick={handleClick}>
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
    </S.PostCard>
  );
}
