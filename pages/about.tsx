import { NextSeo } from 'next-seo';
import Profile from '#components/Profile';

export default function About() {
  return (
    <>
      <NextSeo title="About" />
      <Profile />
    </>
  );
}
