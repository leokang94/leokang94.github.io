import React from 'react';
import * as S from './PostCardList.style';
import PostCard from './PostCard';

import { useStaticQuery, graphql } from 'gatsby';
import { PostFrontMatter } from '#interface/post.interface';

interface PostCardListQueryRes {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: PostFrontMatter;
      };
    }[];
  };
}
interface PostCardData extends PostFrontMatter {
  id: string;
}

const getPostCardListQuery = graphql`
  query getPostCardList {
    allMarkdownRemark(sort: { order: [DESC, DESC], fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
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

export default function PostCardList() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<PostCardListQueryRes>(getPostCardListQuery);

  const postCards: PostCardData[] = edges.map((edge) => ({
    id: edge.node.id,
    ...edge.node.frontmatter,
  }));

  return (
    <S.PostCardList>
      {postCards.map((postCard) => (
        <PostCard
          key={postCard.id}
          title={postCard.title}
          slug={postCard.slug}
          date={postCard.date}
          tags={postCard.categories}
          content={postCard.summary}
          thumbnail={postCard.thumbnail?.childImageSharp.gatsbyImageData}
        />
      ))}
    </S.PostCardList>
  );
}
