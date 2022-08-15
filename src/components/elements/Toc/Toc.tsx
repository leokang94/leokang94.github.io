import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import SweetScroll from 'sweet-scroll';
// import styles from './Toc.module.scss';
import { NAV_BAR_HEIGHT } from '#components/NavBar';

import style from './Toc.module.scss';

const EXTRA = 10;
const OBSERVER_RANGE = 1;

interface Link {
  anchor: HTMLAnchorElement;
  heading: HTMLHeadingElement;
  headingSection: HTMLElement | null;
  //   visible: boolean;
}

interface TocProps {
  children?: React.ReactElement;
}
export default function Toc({ children }: TocProps) {
  const [h1s, setH1s] = useState<Link[]>([]);
  const [h2s, setH2s] = useState<Link[]>([]);
  const currentH2AnchorRef = useRef<HTMLAnchorElement | null>(null);
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
            h1.anchor.classList.add('active');
          } else {
            h1.anchor.classList.remove('active');
            h1.anchor.classList.remove('active-backsite');
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
            const parentH1Anchor = h2.anchor
              .closest('.toc-item-h1')
              ?.querySelector('a');

            parentH1Anchor?.classList.add('active-backsite');
            currentH2AnchorRef.current = h2.anchor;
            h2.anchor.classList.add('active');
          } else {
            if (currentH2AnchorRef.current === h2.anchor) {
              const parentH1Anchor = h2.anchor
                .closest('.toc-item-h1')
                ?.querySelector('a');

              parentH1Anchor?.classList.remove('active-backsite');
            }

            h2.anchor.classList.remove('active');
          }
        }
      });
    };

    const viewportHeight =
      window.innerHeight - (NAV_BAR_HEIGHT + OBSERVER_RANGE);
    const h1sObserver = new IntersectionObserver(handleH1sObserver, {
      //   rootMargin: `${-(NAV_BAR_HEIGHT + EXTRA)}px 0px ${-(
      //     viewportHeight - EXTRA
      //   )}px 0px`,
      rootMargin: `0px 0px ${-(window.innerHeight - 1)}px 0px`,
      threshold: 0,
    });
    const h2sObserver = new IntersectionObserver(handleH2sObserver, {
      //   rootMargin: `${-(NAV_BAR_HEIGHT + EXTRA)}px 0px ${-(
      //     viewportHeight - EXTRA
      //   )}px 0px`,
      rootMargin: `0px 0px ${-(window.innerHeight - 1)}px 0px`,
      threshold: 0,
    });

    if (h1s.length) {
      h1s.forEach(({ headingSection }) => {
        headingSection && h1sObserver?.observe(headingSection);
      });
    }
    if (h2s.length) {
      h2s.forEach(({ headingSection }) => {
        headingSection && h2sObserver?.observe(headingSection);
      });
    }

    return () => {
      h1sObserver?.disconnect();
      h2sObserver?.disconnect();
    };
  }, [h1s, h2s]);

  return <nav className={`${style.toc}`}>{children}</nav>;
}
