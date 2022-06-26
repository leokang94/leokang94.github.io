import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const prevScroll = useRef(0);

  const handleScroll = () => {
    // ..
    const currScroll = window.scrollY;
    const isScrollUp = prevScroll.current > currScroll;
    console.log(isScrollUp);
    setIsScrollUp(isScrollUp);

    prevScroll.current = currScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky ${isScrollUp ? 'top-0' : '-top-5'} transition-all`}>
      Navbar scroll {isScrollUp ? 'up' : 'down'}
    </nav>
  );
}
