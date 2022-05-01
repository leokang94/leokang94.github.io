import React from 'react';
import Text from '#components/common/Text';
import PostArea from '#components/main/PostArea';
import Post from '#components/main/Post';

export default function IndexPage() {
  return (
    <>
      <h1>Hello World!</h1>
      <Text text="Home" />
      <PostArea>
        <Post
          title="첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트"
          date="2022.04.27"
          tags={['asdf', 'qwer', 'aa']}
          content="asdfasdfasdfsadfasdfsadfasdfasdfaf"
        />
        <Post
          title="첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트"
          date="2022.04.27"
          tags={['asdf', 'qwer', 'aa']}
          content="asdfasdfasdfsadfasdfsadfasdfasdfaf"
        />
        <Post
          title="첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트"
          date="2022.04.27"
          tags={['asdf', 'qwer', 'aa']}
          content="asdfasdfasdfsadfasdfsadfasdfasdfaf"
        />
        <Post
          title="첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트첫 번째 포스트"
          date="2022.04.27"
          tags={['asdf', 'qwer', 'aa']}
          content="asdfasdfasdfsadfasdfsadfasdfasdfaf"
        />
      </PostArea>
    </>
  );
}
