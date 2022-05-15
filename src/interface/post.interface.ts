import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PostFrontMatter {
  date: string;
  title: string;
  slug: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}
