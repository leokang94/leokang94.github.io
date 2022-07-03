import type { NextPage } from 'next';
import Layout from '#components/Layout';
import Header from '#components/Navbar';
import Footer from '#components/Footer';
import withHead from '#components/hoc/withHead';

import useProcessor from '../src/hook/useProcessor';

function Home() {
  const content = useProcessor('<h>test</h>');

  return (
    <Layout>
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
    </Layout>
  );
}

export default withHead(Home, {
  title: "Acccdang's Devlog",
});
