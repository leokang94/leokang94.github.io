import { NextSeo } from 'next-seo';

import Profile from '#components/Profile';

export default function About() {
  return (
    <>
      <NextSeo title="About" />
      <h1 className="text-5xl mt-10">About</h1>
      <Profile />
    </>
  );
}
