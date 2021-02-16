import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, keywords, children }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='description' content='blog site about random articles' />
      <meta name='author' content='ahmad-666' />
      <meta name='application-name' content='simple next.js blog' />
      <meta name='keywords' content={keywords} />
      <meta name='theme-color' content='#000000' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='msapplication-TileColor' content='#2B5797' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='msapplication-TileImage' content='/icons/icon-310x310.png' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='next.js pwa app' />
      <meta name='twitter:card' content='summery' />
      <meta name='twitter:title' content='simple next.js blog' />
      <meta name='twitter:description' content='blog about random articles' />
      <meta name='twitter:url' content='https://yourdomain.com' />
      <meta
        name='twitter:image'
        content='/icons/icon-310x310.png'
        type='image/png'
      />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='simple next.js blog' />
      <meta property='og:description' content='blog about random articles' />
      <meta property='og:site_name' content='blog' />
      <meta property='og:url' content='https://yourdomain.com' />
      <meta property='og:locale' content='fa_IR' />
      <meta property='og:image' content='/icons/icon-310x310.png' />
      <link rel='manifest' href='/manifest.json' />
      <link
        rel='icon'
        type='image/png'
        sizes='48x48'
        href='/icons/icon-48x48.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='72x72'
        href='/icons/icon-72x72.png'
      />
      <link rel='apple-touch-icon' sizes='48x48' href='/icons/icon-48x48.png' />
      <link rel='apple-touch-icon' sizes='96x96' href='/icons/icon-96x96.png' />
      <link
        rel='apple-touch-icon'
        sizes='192x192'
        href='/icons/icon-192x192.png'
      />
      <title>{title}</title>
      {children}
    </Head>
  );
};
Meta.defaultProps = {
  title: 'blog',
  keywords: 'blog, articles, book',
  children: <></>,
};
Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  children: PropTypes.object,
};
export default Meta;
