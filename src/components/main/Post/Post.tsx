import React from 'react';
import * as S from './Post.style';

interface IPost {
  title: string;
  content?: string;
  imageSrc?: string;
}

export default function Post({ title, content, imageSrc }: IPost) {
  return <S.Post>{title}</S.Post>;
}
