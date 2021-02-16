import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
};
export default Loader;
