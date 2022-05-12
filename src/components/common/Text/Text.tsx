import React from 'react';

interface TextProps {
  text: string;
}

export default function Text({ text }: TextProps) {
  return <div>{text}</div>;
}
