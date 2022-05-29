import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import PostLayout from '#components/common/PostLayout';

interface PostQueryRes {
  data: {
    mdx: {
      frontmatter: {
        date: string;
        title: string;
        slug: string;
      };
      body: string;
    };
  };
}

export default function BlogPostTemplate({ data }: PostQueryRes) {
  const {
    frontmatter: { date, title },
    body,
  } = data.mdx;

  return (
    <PostLayout>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <MDXRenderer>{body}</MDXRenderer>
    </PostLayout>
  );
}

// page query
export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY.MM/DD")
        title
        slug
      }
      body
    }
  }
`;
