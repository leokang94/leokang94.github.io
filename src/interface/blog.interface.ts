export interface Post {
  slug: string;
  frontmatter: {
    [x: string]: string;
  };
  content: string;
}

export interface PostProps {
  meta: Omit<Post, 'content'>;
  content: string;
}
