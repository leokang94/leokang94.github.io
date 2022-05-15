import React from 'react';
import { graphql } from 'gatsby';

interface PostQueryRes {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
        slug: string;
      };
      html: string;
    };
  };
}

export default function BlogPostTemplate({ data }: PostQueryRes) {
  const {
    frontmatter: { date, title },
    html,
  } = data.markdownRemark;

  return (
    <>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

// page query
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY.MM/DD")
        title
        slug
      }
      html
    }
  }
`;
