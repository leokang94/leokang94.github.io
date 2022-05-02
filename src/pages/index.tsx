import React from 'react';
import Text from '#components/common/Text';
import PostList from '#components/main/PostList';

export default function IndexPage() {
  return (
    <>
      <h1>Hello World!</h1>
      <Text text="Home" />
      <PostList />
    </>
  );
}
