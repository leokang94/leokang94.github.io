import React from 'react';
import styled from '@emotion/styled';
import Highlight, { Prism } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import 'dracula-prism/dist/css/dracula-prism.min.css';
import type { Language } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  className: string;
  filename?: string;
  lineNumbers?: boolean;
  noCopy?: boolean;
}
export default function CodeBlock({ children, className, filename, lineNumbers, noCopy }: CodeBlockProps) {
  const _className = className || '';
  const language = _className ? (className.replace(/language-/, '') as Language) || '' : '';

  const handleCopy = () => {
    console.log('copied !!');
  };

  return (
    <Highlight Prism={Prism} code={children} language={language || 'bash'} theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        console.log(className);
        console.log(style);

        return (
          <Pre className={className} style={{ ...style }}>
            <PreHeader>
              <PreHeaderMeta>
                {language && <PreLanguage>{language}</PreLanguage>}
                {filename && <PreFile>{filename}</PreFile>}
              </PreHeaderMeta>
              <PreHeaderFunc>{!noCopy && <PreCopy onClick={handleCopy}>Copy</PreCopy>}</PreHeaderFunc>
            </PreHeader>
            {tokens.map((line, index) => {
              const isLastLine = tokens.length - 1 <= index;
              const lineProps = getLineProps({ line, key: index });

              return (
                !isLastLine && (
                  <TokenLine key={index} lineNumbers={lineNumbers} lineNumber={index} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </TokenLine>
                )
              );
            })}
          </Pre>
        );
      }}
    </Highlight>
  );
}

const Pre = styled.pre`
  font-family: 'D2Coding' !important;
`;
const PreBadge = styled.div`
  padding: 0.1rem 1rem;
  pointer-events: none;
  user-select: none;
`;
const PreHeaderArea = styled.div`
  display: flex;
`;
const PreHeader = styled.div`
  position: relative;
  top: -1rem;
  display: flex;
  justify-content: space-between;

  color: var(--background);
`;
const PreHeaderMeta = styled(PreHeaderArea)`
  & > div:first-child {
    border-bottom-left-radius: 0.5rem;
  }
  & > div:last-child {
    border-bottom-right-radius: 0.5rem;
  }
`;
const PreHeaderFunc = styled(PreHeaderArea)`
  & > div:first-child {
    border-bottom-left-radius: 0.5rem;
  }
  & > div:last-child {
    border-bottom-right-radius: 0.5rem;
  }
`;
const PreLanguage = styled(PreBadge)`
  background-color: var(--purple);
`;
const PreFile = styled(PreBadge)`
  background-color: var(--comment-30);
  color: var(--comment);
`;
const PreCopy = styled(PreBadge)`
  pointer-events: all;
  cursor: pointer;
  background-color: var(--yellow);
`;

// token line component
interface TokenLineProps {
  children: React.ReactNode;
  className: string;
  style?: { [key: string]: string | number | null };
  lineNumbers?: boolean;
  lineNumber: number;
}
function TokenLine({ children, lineNumbers, lineNumber: ln, ...lineProps }: TokenLineProps) {
  const lineNumber = ln + 1;

  return (
    <StyledTokenLine {...lineProps}>
      {lineNumbers && <TokenLineNumber>{lineNumber}</TokenLineNumber>}
      {children}
    </StyledTokenLine>
  );
}
const TokenLineNumber = styled.div`
  width: 1rem;
  margin-right: 1rem;
  text-align: right;
  color: var(--comment-40);
`;
const StyledTokenLine = styled.div`
  display: flex;
`;
