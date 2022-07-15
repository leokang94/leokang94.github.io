import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenuIcon = () => {
    setMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 navbar-background`}>
        <div
          className={`flex justify-between px-5 py-3 ${
            menuOpened ? '' : 'navbar-border'
          }`}
        >
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
      </nav>
      <nav
        className={`fixed flex flex-col top-[52px] w-full z-50 navbar-background ${
          menuOpened
            ? 'navbar-border scale-y-100 opacity-100'
            : 'scale-y-0 opacity-0'
        } origin-top transition-all duration-300 sm:hidden`}
      >
        {MENU_LIST.map((menu) => (
          <Link key={menu.path} href={menu.path}>
            <a className="pl-4 py-3 font-semibold" onClick={closeMenu}>
              {menu.name}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
}
