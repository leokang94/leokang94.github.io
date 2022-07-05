import withHead from '#components/hoc/withHead';
import Profile from '#components/Profile';

import useProcessor from '../src/hook/useProcessor';

function Home() {
  const content = useProcessor('<h>test</h>');

  return (
    <>
      <Profile />
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
      <h1>asdf</h1>
    </>
  );
}

export default withHead(Home, {
  title: "Acccdang's Devlog",
});
