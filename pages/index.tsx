import type { NextPage } from 'next';
import withHead from '#components/hoc/withHead';

import useProcessor from '../src/hook/useProcessor';

function Home() {
  const content = useProcessor('<h>test</h>');

  return (
    <div>
      <main>
        <h1>Welcome to Acccdang's Devlog</h1>
        <h2>This is sub title</h2>
        <h3>This is H3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
      </main>
    </div>
  );
}

export default withHead(Home, {
  title: "Acccdang's Devlog",
});
