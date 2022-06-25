import type { NextPage } from 'next';
import Head from 'next/head';
import withHead from './blog/hoc/withHead';

import useProcessor from '../src/hook/useProcessor';

function Home() {
  const content = useProcessor('<h>test</h>');

  return (
    <div>
      <main>
        <h1>Welcome to Acccdang's Devlog</h1>
      </main>
    </div>
  );
}

export default withHead(Home, {
  title: '악당 데브로그',
});
