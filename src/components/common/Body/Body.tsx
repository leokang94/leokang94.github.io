import React from 'react';
import * as S from './Body.style';

export default function Body({ children }: React.PropsWithChildren<Record<string, unknown>>) {
  return <S.Body>{children}</S.Body>;
}
