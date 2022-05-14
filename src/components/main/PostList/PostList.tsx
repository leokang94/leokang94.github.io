import React from 'react';
import * as S from './PostList.style';
import Post from './Post';

import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostFrontMatter {
  date: string;
  title: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}
interface PostListQueryRes {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: PostFrontMatter;
      };
    }[];
  };
}
interface PostData extends PostFrontMatter {
  id: string;
}

const getPostListQuery = graphql`
  query getPostList {
    allMarkdownRemark(sort: { order: [DESC, DESC], fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            summary
            date(formatString: "YYYY.MM.DD")
            categories
          }
        }
      }
    }
  }
`;

export default function PostList() {
  const {
    allMarkdownRemark: { edges },
  }: PostListQueryRes = useStaticQuery(getPostListQuery);

  const posts: PostData[] = edges.map((edge) => ({
    id: edge.node.id,
    ...edge.node.frontmatter,
  }));

  return (
    <S.PostList>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          date={post.date}
          tags={post.categories}
          content={post.summary}
          thumbnail={post.thumbnail?.childImageSharp.gatsbyImageData}
        />
      ))}
    </S.PostList>
  );
}
