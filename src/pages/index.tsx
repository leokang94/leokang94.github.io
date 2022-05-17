import React from 'react';

import Text from '#components/common/Text';
import PostCardList from '#components/main/PostCardList';

export default function IndexPage() {
  return (
    <>
      <h1>Hello World!</h1>
      <Text text="Home" />
      <PostCardList />
    </>
  );
}
