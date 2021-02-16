import Image from 'next/image';
import Link from 'next/link';
import styles from './nav.module.scss';

const navItems = [
  {
    title: 'about',
    route: '/about',
    cssClass: '',
  },
  {
    title: 'new article',
    route: '/newarticle',
    cssClass: `${styles.special} ${styles.specialNew}`,
  },
  {
    title: 'articles',
    route: '/articles',
    cssClass: `${styles.special} ${styles.specialArticles}`,
  },
];
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>
          <Image
            src='/imgs/logo.png'
            alt='logo.png'
            width={75}
            height={75}
            layout='intrinsic'
          />
        </a>
      </Link>

      <div className={styles.items}>
        {navItems.map(item => {
          return (
            <Link key={item.route} href={item.route}>
              <a className={`${styles.item} ${item.cssClass}`}>{item.title}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
