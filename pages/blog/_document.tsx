import { Html, Head, Main, NextScript } from 'next/document';
import Layout from '#components/Layout';
import Header from '#components/Navbar';
import Footer from '#components/Footer';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
