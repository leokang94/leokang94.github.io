import React from 'react';

interface IText {
  text: string;
}

export default function Text({ text }: IText) {
  return <div>{text}</div>;
}
