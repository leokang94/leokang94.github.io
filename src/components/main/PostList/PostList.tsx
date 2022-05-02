import React from 'react';
import * as S from './PostList.style';
import Post from './Post';

import { useStaticQuery, graphql } from 'gatsby';

interface IPostFrontMatter {
  date: string;
  title: string;
  categories: string[];
  summary: string;
  thumbnail: {
    publicURL: string;
  };
}
interface IPostList {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: IPostFrontMatter;
      };
    }[];
  };
}
interface IPostData extends IPostFrontMatter {
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
              publicURL
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
  }: IPostList = useStaticQuery(getPostListQuery);

  const posts: IPostData[] = edges.map((edge) => ({
    id: edge.node.id,
    ...edge.node.frontmatter,
  }));

  return (
    <S.PostList>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} date={post.date} tags={post.categories} content={post.summary} />
      ))}
    </S.PostList>
  );
}
