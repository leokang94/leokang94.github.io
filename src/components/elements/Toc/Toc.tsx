import { useRouter } from 'next/router';
import { useState, useEffect, useRef, useCallback } from 'react';
import { animateScroll as scroll, Events } from 'react-scroll';
import { NAV_BAR_HEIGHT } from '#components/NavBar';

import style from './Toc.module.scss';

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
  const [h1s, setH1s] = useState<Link[]>([]);
  const [h2s, setH2s] = useState<Link[]>([]);
  const currentH2AnchorRef = useRef<HTMLAnchorElement | null>(null);
  const h1sObserverRef = useRef<IntersectionObserver | null>(null);
  const h2sObserverRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();

  function getHeadingInfos(headingType: 'h1' | 'h2') {
    return [
      ...document.querySelectorAll(
        `.${style.toc} .toc-item-${headingType} > a`,
      ),
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

  function active(h: Link) {
    if (h.heading.tagName.toLowerCase() === 'h1') {
      h.anchor.classList.add('active');
    } else {
      // h2
      const parentH1Anchor = h.anchor
        .closest('.toc-item-h1')
        ?.querySelector('a');

      parentH1Anchor?.classList.add('active-backsite');
      currentH2AnchorRef.current = h.anchor;
      h.anchor.classList.add('active');
    }
  }

  function inactive(h: Link) {
    if (h.heading.tagName.toLowerCase() === 'h1') {
      h.anchor.classList.remove('active');
      h.anchor.classList.remove('active-backsite');
    } else {
      // h2
      if (currentH2AnchorRef.current === h.anchor) {
        const parentH1Anchor = h.anchor
          .closest('.toc-item-h1')
          ?.querySelector('a');
        parentH1Anchor?.classList.remove('active-backsite');
      }

      h.anchor.classList.remove('active');
    }
  }

  const observe = useCallback(() => {
    if (h1s.length) {
      h1s.forEach(({ headingSection }) => {
        headingSection && h1sObserverRef.current?.observe(headingSection);
      });
    }
    if (h2s.length) {
      h2s.forEach(({ headingSection }) => {
        headingSection && h2sObserverRef.current?.observe(headingSection);
      });
    }
  }, [h1s, h2s]);

  const unobserve = useCallback(() => {
    h1sObserverRef.current?.disconnect();
    h2sObserverRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const _h1s = getHeadingInfos('h1');
    const _h2s = getHeadingInfos('h2');

    setH1s(_h1s);
    setH2s(_h2s);
  }, []);

  useEffect(() => {
    const handleH1sObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const hash = entry.target.firstElementChild?.id;
        const h1 = h1s.find(
          ({ anchor }) => decodeURIComponent(anchor.hash) === `#${hash}`,
        );

        if (h1) {
          if (entry.isIntersecting) {
            active(h1);
          } else {
            inactive(h1);
          }
        }
      });
    };
    const handleH2sObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const hash = entry.target.firstElementChild?.id;
        const h2 = h2s.find(
          ({ anchor }) => decodeURIComponent(anchor.hash) === `#${hash}`,
        );

        if (h2) {
          if (entry.isIntersecting) {
            active(h2);
          } else {
            inactive(h2);
          }
        }
      });
    };

    if (h1s.length && h2s.length) {
      const viewportHeight =
        window.innerHeight - (NAV_BAR_HEIGHT + OBSERVER_RANGE);
      h1sObserverRef.current = new IntersectionObserver(handleH1sObserver, {
        rootMargin: `${-(NAV_BAR_HEIGHT + EXTRA)}px 0px ${-(
          viewportHeight - EXTRA
        )}px 0px`,
        threshold: 0,
      });
      h2sObserverRef.current = new IntersectionObserver(handleH2sObserver, {
        rootMargin: `${-(NAV_BAR_HEIGHT + EXTRA)}px 0px ${-(
          viewportHeight - EXTRA
        )}px 0px`,
        threshold: 0,
      });

      observe();
    }

    return () => {
      h1sObserverRef.current?.disconnect();
      h2sObserverRef.current?.disconnect();
    };
  }, [h1s, h2s, observe]);

  useEffect(() => {
    const tocElement = document.querySelector(`.${style.toc}`);

    const handleClickTocElement = (e: MouseEvent) => {
      const h =
        h1s.find((h1) => h1.anchor === e.target) ||
        h2s.find((h2) => h2.anchor === e.target);

      if (h) {
        h1s.forEach((h1) => {
          h1.anchor.classList.remove('active');
          h1.anchor.classList.remove('active-backsite');
        });
        h2s.forEach((h2) => h2.anchor.classList.remove('active'));

        active(h);

        scroll.scrollTo(
          window.scrollY +
            h.heading.getBoundingClientRect().top -
            (NAV_BAR_HEIGHT + EXTRA),
          {
            duration: 500,
            smooth: 'easeOutQuart',
          },
        );
      }
    };

    (tocElement as HTMLElement)?.addEventListener(
      'click',
      handleClickTocElement,
    );

    return () =>
      (tocElement as HTMLElement)?.removeEventListener(
        'click',
        handleClickTocElement,
      );
  }, [h1s, h2s, router]);

  useEffect(() => {
    if (h1s.length && h2s.length) {
      Events.scrollEvent.register('begin', () => {
        unobserve();
      });
      Events.scrollEvent.register('end', () => {
        observe();
      });
    }

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [h1s, h2s, observe, unobserve]);

  return <nav className={`${style.toc}`}>{children}</nav>;
}
