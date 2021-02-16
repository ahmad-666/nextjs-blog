import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';
import styles from '../styles/404.module.scss';
import Meta from '../components/meta/Meta';

const NotFound = () => {
  useEffect(() => {
    document.body.style.padding = 0;
  }, []);
  return (
    <>
      <Meta title='404 - not found' />
      <div className={styles.container}>
        <Player
          autoplay
          loop
          background='white'
          speed={0.5}
          src='/Animations/404Animation.json'
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </>
  );
};
export default NotFound;
