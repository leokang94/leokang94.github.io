import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface Menu {
  name: string;
  path: string;
}
const MENU_LIST: Readonly<Readonly<Menu>[]> = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
] as const;

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenuIcon = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm bg-white-rgba-80% shadow-lg shadow-gray-500/10 duration-300`}
    >
      <div className="flex justify-between px-5 py-3">
        <Link href="/">
          <a className="font-bold text-xl">{"Acccdang's Dev"}</a>
        </Link>
        <div>
          <FontAwesomeIcon
            className={`${menuOpened ? 'hidden' : ''} w-5 h-5 sm:hidden`}
            icon={faBars}
            size="lg"
            onClick={toggleMenuIcon}
          />
          <FontAwesomeIcon
            className={`${menuOpened ? '' : 'hidden'} w-5 h-5 sm:hidden`}
            icon={faXmark}
            size="lg"
            onClick={toggleMenuIcon}
          />

          <div className="hidden sm:flex sm:gap-4">
            {MENU_LIST.map((menu) => (
              <Link key={menu.path} href={menu.path}>
                <a className="font-semibold">{menu.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={`${menuOpened ? '' : 'hidden'} flex flex-col`}>
        {MENU_LIST.map((menu) => (
          <Link key={menu.path} href={menu.path}>
            <a className="pl-4 py-3 font-semibold">{menu.name}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
