import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import PostLayout from '#components/common/PostLayout';
import CodeBlock from '#components/mdx/CodeBlock';

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
    <MDXProvider
      components={{
        pre: (props) => {
          console.log(props);
          return <React.Fragment {...props} />;
        },
        code: CodeBlock,
      }}
    >
      <PostLayout>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <MDXRenderer>{body}</MDXRenderer>
      </PostLayout>
    </MDXProvider>
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
