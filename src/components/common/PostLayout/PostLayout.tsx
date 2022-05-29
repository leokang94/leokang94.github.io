import React from 'react';

interface PostLayout {
  children: React.ReactNode;
}
export default function PostLayout({ children }: PostLayout) {
  return (
    <>
      <h1>하하하</h1>
      <div>{children}</div>
    </>
  );
}
