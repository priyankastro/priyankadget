'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css'

const MENU_LIST = [
  { text: 'About', href: '/about', icon: 'svg/user.svg' },
  { text: 'Experience', href: '/experience', icon: 'svg/work.svg' },
  { text: 'Skills', href: '/skill', icon: 'svg/pencil.svg' },
  { text: 'Connect', href: '/connect', icon: 'svg/connect.svg' },
];
const SOCIAL_LIST = [
  { href: 'https://www.linkedin.com/in/priyanka-das-542995180/', icon: 'svg/linkedin.svg' },
  { href: 'https://www.instagram.com/priyankastro7', icon: 'svg/instagram.svg' },
  // { href: '/skill', icon: 'svg/github.svg' },
  { href: 'https://www.facebook.com/profile.php?id=100020393291365', icon: 'svg/facebook.svg' },
];

const Navbar = ({ }) => {
  const [collapse, setCollapse] = useState(false);
  console.log(collapse)
  return (
    <>
      <div className={clsx({
        [styles.backdrop]: collapse === true
      })}>
        <button type="button" className="menu-btn-sm inline-flex items-center p-2 mr-3 mt-3 md:hidden" onClick={() => setCollapse(collapse ? false : true)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <menu className={`${styles.navbar} ${clsx({
        [styles.block]: collapse === true
      })
        }`} >
        <Link className={styles.menu_top} href={'/'}>LOGO</Link>
        <nav className={styles.menu_nav}>
          {MENU_LIST.map((menu, idx) => (
            <Link href={menu.href} key={idx}>
              <img src={menu.icon} />
              {menu.text}
            </Link>
          ))}
          <div className={styles.social_links}>
            {SOCIAL_LIST.map((x, i) => (
              <Link href={x.href} key={i} target="_blank">
                <img src={x.icon} />
              </Link>
            ))}
          </div>
        </nav>
      </menu>
    </>
  )
}

export default Navbar