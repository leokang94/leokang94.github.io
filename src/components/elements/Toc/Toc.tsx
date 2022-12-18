import { useRouter } from 'next/router';
import { useEffect, useRef, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NAV_BAR_HEIGHT } from '#components/NavBar';

import tw, { screen } from 'twin.macro';
import styled from '@emotion/styled/macro';

const EXTRA = 10;
const OBSERVER_RANGE = 1;

interface Link {
  anchor: HTMLAnchorElement;
  heading: HTMLHeadingElement;
  headingSection: HTMLElement | null;
}

interface TocProps {
  children?: React.ReactElement;
}
export default function Toc({ children }: TocProps) {
  const tocRef = useRef<HTMLElement>(null);
  const linksRef = useRef<{ h1: Link[]; h2: Link[] }>();
  const currentH2AnchorRef = useRef<HTMLAnchorElement | null>(null);
  const h1sObserverRef = useRef<IntersectionObserver | null>(null);
  const h2sObserverRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();

  function getHeadingInfos(headingType: 'h1' | 'h2') {
    if (tocRef.current) {
      return [
        ...tocRef.current.querySelectorAll(`.toc-item-${headingType} > a`),
      ].map((node): Link => {
        const anchor = node as HTMLAnchorElement;
        const hash = decodeURIComponent(
          anchor.hash.substring(1, anchor.hash.length),
        );
        const heading = document.getElementById(hash) as HTMLHeadingElement;
        const headingSection = heading.parentElement;

        return { anchor, heading, headingSection };
      });
    }

    return [];
  }

  function active({ heading, anchor }: Link) {
    if (heading.tagName.toLowerCase() === 'h1') {
      anchor.classList.add('active');
    } else {
      // h2
      const parentH1Anchor = anchor.closest('.toc-item-h1')?.querySelector('a');

      parentH1Anchor?.classList.add('active-backsite');
      currentH2AnchorRef.current = anchor;
      anchor.classList.add('active');
    }
  }

  function inactive({ heading, anchor }: Link) {
    if (heading.tagName.toLowerCase() === 'h1') {
      anchor.classList.remove('active');
      anchor.classList.remove('active-backsite');
    } else {
      // h2
      if (currentH2AnchorRef.current === anchor) {
        const parentH1Anchor = anchor
          .closest('.toc-item-h1')
          ?.querySelector('a');
        parentH1Anchor?.classList.remove('active-backsite');
      }

      anchor.classList.remove('active');
    }
  }

  function observe() {
    if (linksRef.current?.h1.length) {
      linksRef.current.h1.forEach(({ headingSection }) => {
        headingSection && h1sObserverRef.current?.observe(headingSection);
      });
    }
    if (linksRef.current?.h2.length) {
      linksRef.current.h2.forEach(({ headingSection }) => {
        headingSection && h2sObserverRef.current?.observe(headingSection);
      });
    }
  }

  function unobserve() {
    h1sObserverRef.current?.disconnect();
    h2sObserverRef.current?.disconnect();
  }

  const moveToHeading = useCallback((link: Link) => {
    const { heading } = link;
    scroll.scrollTo(
      window.scrollY +
        heading.getBoundingClientRect().top -
        (NAV_BAR_HEIGHT + EXTRA),
      {
        duration: 800,
        smooth: 'easeOutQuart',
      },
    );
  }, []);

  // link 세팅
  useEffect(() => {
    const h1 = getHeadingInfos('h1');
    const h2 = getHeadingInfos('h2');

    linksRef.current = { h1, h2 };
  }, []);

  // Intersection Observer 세팅
  useEffect(() => {
    const handleHeadingObserver: (
      links: Link[],
    ) => IntersectionObserverCallback = (links) => (entries) => {
      entries.forEach((entry) => {
        const hash = entry.target.firstElementChild?.id;
        const link = links.find(
          ({ anchor }) => decodeURIComponent(anchor.hash) === `#${hash}`,
        );

        link && (entry.isIntersecting ? active(link) : inactive(link));
      });
    };

    const links = linksRef.current;
    if (links && links.h1.length && links.h2.length) {
      const viewportHeight =
        window.innerHeight - (NAV_BAR_HEIGHT + OBSERVER_RANGE);

      const observerOption = {
        rootMargin: `${-(NAV_BAR_HEIGHT + EXTRA)}px 0px ${-(
          viewportHeight - EXTRA
        )}px 0px`,
        threshold: 0,
      };

      h1sObserverRef.current = new IntersectionObserver(
        handleHeadingObserver(links.h1),
        observerOption,
      );
      h2sObserverRef.current = new IntersectionObserver(
        handleHeadingObserver(links.h2),
        observerOption,
      );

      observe();
    }

    return () => {
      unobserve();
    };
  }, []);

  // toc click event 세팅
  useEffect(() => {
    const tocElement = tocRef.current;

    const handleClickTocElement = (e: MouseEvent) => {
      const link =
        linksRef.current?.h1.find((h1) => h1.anchor === e.target) ||
        linksRef.current?.h2.find((h2) => h2.anchor === e.target);

      console.log(link);

      if (link) {
        moveToHeading(link);
      }
    };

    tocElement?.addEventListener('click', handleClickTocElement);

    return () =>
      tocElement?.removeEventListener('click', handleClickTocElement);
  }, [router, moveToHeading]);

  // hash를 가진 채로 접근 시 세팅
  useEffect(() => {
    if (window.location.hash) {
      const hash = decodeURIComponent(window.location.hash.substring(1));

      const link =
        linksRef.current?.h1.find((h1) => h1.heading.id === hash) ||
        linksRef.current?.h2.find((h2) => h2.heading.id === hash);

      if (link) {
        moveToHeading(link);
      }
    }
  }, [moveToHeading]);

  return <StyledToc ref={tocRef}>{children}</StyledToc>;
}

const StyledToc = styled.nav`
  ${tw`hidden`}
  ${screen`lg`({
    ...tw`block fixed top-48 left-[calc((100vw+768px)/2+2rem)] pl-3`,
  })}

  a {
    ${tw`inline-block no-underline`}
  }

  .toc-item {
    &.toc-item-h1 {
      a {
        ${tw`text-zinc-400 transition-all origin-left duration-300 hover:text-leo-green-dark`}
        &.active {
          ${tw`text-leo-green-dark scale-110`}
        }
        &.active-backsite {
          ${tw`text-leo-green-dark text-opacity-50 scale-110`}
        }
      }
    }
    &.toc-item-h2 {
      a {
        ${tw`text-zinc-300 ml-3 text-sm transition-all origin-left duration-300 hover:text-leo-green-dark`}
        &.active {
          ${tw`text-leo-green-dark scale-110`}
        }
      }
    }
  }
`;
