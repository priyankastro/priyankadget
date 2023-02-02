import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

const MENU_LIST = [
  { text: 'About', href: '/about', icon: 'svg/user.svg' },
  { text: 'Experience', href: '/experience', icon: 'svg/work.svg' },
  { text: 'Skill', href: '/skill', icon: 'svg/pencil.svg' },
  { text: 'Connect', href: '/connect', icon: 'svg/connect.svg' },
];
const SOCIAL_LIST = [
  { href: 'https://www.linkedin.com/in/priyanka-das-542995180/', icon: 'svg/linkedin.svg' },
  { href: 'https://www.instagram.com/priyankastro7', icon: 'svg/instagram.svg' },
  // { href: '/skill', icon: 'svg/github.svg' },
  { href: 'https://www.facebook.com/profile.php?id=100020393291365', icon: 'svg/facebook.svg' },
];

const Navbar = ({ }) => {
  return (
    <menu className={styles.navbar}>
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
  )
}

export default Navbar