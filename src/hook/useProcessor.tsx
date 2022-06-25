import { createElement, Fragment, useEffect, useState } from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';

export default function useProcessor(content: string) {
  const [Content, setContent] = useState<React.ReactNode>();

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment })
      .process(content)
      .then((file) => setContent(file.result));
  }, [content]);

  return Content;
}
