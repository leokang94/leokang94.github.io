import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import NavbarStyle from './NavBar.module.css';

interface Menu {
  name: string;
  path: `/${string}`;
}
const MENU_LIST: Readonly<Readonly<Menu>[]> = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
] as const;

export default function Nav() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenuIcon = () => {
    setMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <nav
      className={`sticky top-0 ${NavbarStyle['background']} z-50 
        ${
          menuOpened ? '' : NavbarStyle['border']
        } transition-[box-shadow] duration-300`}
    >
      <div className={`flex justify-between px-5 py-3`}>
        <Link href="/">
          <a className="font-bold text-xl" onClick={closeMenu}>
            악당의 Devlog
          </a>
        </Link>
        <div className="flex items-center">
          <div className="flex gap-4 sm:hidden">
            <FontAwesomeIcon
              className="w-5 h-5 sm:hidden"
              icon={menuOpened ? faXmark : faBars}
              size="lg"
              onClick={toggleMenuIcon}
            />
          </div>

          <div className="hidden sm:flex sm:gap-4">
            {MENU_LIST.map((menu) => (
              <Link key={menu.path} href={menu.path}>
                <a className="font-semibold">{menu.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <nav
        className={`absolute top-[52px] flex flex-col w-full transition-all duration-300 ${
          NavbarStyle['background']
        } ${NavbarStyle['border']} ${
          menuOpened ? 'scale-y-100' : 'scale-y-0 text-white/0'
        } origin-top sm:hidden`}
      >
        {MENU_LIST.map((menu) => (
          <Link key={menu.path} href={menu.path}>
            <a className="pl-4 py-3 font-semibold" onClick={closeMenu}>
              {menu.name}
            </a>
          </Link>
        ))}
      </nav>
    </nav>
  );
}
