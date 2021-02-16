import '../styles/global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '../components/loader/Loader';
import { useStore } from '../store/store';
import { pageAnimation } from '../animations';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const showLoaderOn = () => setShowLoader(true);
    const showLoaderOff = () => setShowLoader(false);
    router.events.on('routeChangeStart', () => showLoaderOn());
    router.events.on('routeChangeComplete', () => showLoaderOff());
    router.events.on('routeChangeError', () => showLoaderOff());
    return () => {
      router.events.off('routeChangeStart', () => showLoaderOn());
      router.events.off('routeChangeComplete', () => showLoaderOff());
      router.events.off('routeChangeError', () => showLoaderOff());
    };
  }, []);
  return (
    <Provider store={store}>
      {showLoader ? (
        <Loader />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={pageAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            key={router.route}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      )}
    </Provider>
  );
}

export default MyApp;
