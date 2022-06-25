import type { NextPage } from 'next';
import Head from 'next/head';

import useProcessor from '../src/hook/useProcessor';

export default function Home() {
  const content = useProcessor('<h>test</h>');

  return (
    <div>
      <Head>
        <title>Acccdang Devlog</title>
        <meta name="description" content="Acccdang Devlog!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Acccdang's Devlog</h1>
      </main>
    </div>
  );
}
