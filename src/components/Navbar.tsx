import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isScrollUp, setIsScrollUp] = useState(false);
  const prevScroll = useRef(0);

  const handleScroll = () => {
    const currScroll = window.scrollY;
    const isScrollUp = prevScroll.current > currScroll;
    setIsScrollUp(isScrollUp);

    prevScroll.current = currScroll;
  };

  const handleClickLogo = () => {
    alert('Logo! TODO :: go to home');
  };

  const handleClickMenu = () => {
    alert('Menu!');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky backdrop-blur-sm bg-bg-white-rgba duration-300 flex justify-between px-5 py-3 shadow-lg shadow-gray-500/10 z-50 ${
        isScrollUp ? 'top-0' : '-top-14'
      } `}
    >
      <div className="font-bold text-xl" onClick={handleClickLogo}>
        {"Acccdang's Dev"}
      </div>
      <div className="cursor-pointer" onClick={handleClickMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
    </nav>
  );
}
