import Link from 'next/link';
import styles from './landing.module.scss';

const Landing = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>site name</h1>
        <p className={styles.txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore
          rem est provident quis quam tempore asperiores voluptas. Iste tempore
          corrupti temporibus id ex quam nam ullam aut delectus pariatur!
          Voluptates eligendi laborum porro, voluptate debitis id laudantium ea
          ratione cum incidunt dicta animi at reprehenderit ab ipsum nostrum
          modi similique asperiores iure? Labore suscipit assumenda, quas
        </p>
      </div>
      <Link href='/newarticle'>
        <a className={styles.btn}>new article</a>
      </Link>
    </header>
  );
};
export default Landing;
