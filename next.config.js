const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    disable: false, // now we have sw on both dev,prod
    // false to s generate service worker in both dev and prod
    // true to completely disable PWA
    // process.env.NODE_ENV === 'development' if we just want sw on prod
    register: true, // we want next-pwa to register sw for us
    // false when you want to handle register service worker yourself, this could be done in
    // useEffect(()=>{//reg sw},[]) of _app.js , sample code: https://github.com/shadowwalker/next-pwa/blob/master/register.js
    scope: '/', // scope of pwa
    // set to /app so that path under /app will be PWA while others are not
    sw: '/sw.js', // service worker file name
    subdomainPrefix: '', // url prefix ,
    // subdomain if the app is hosted on example.com/subdomain
    dest: 'public', // path of statically hosted files
    runtimeCaching, // use default caching strategies , default config in https://github.com/shadowwalker/next-pwa/blob/master/cache.js
    // if we want to customize it --> runtimeCaching will get array of object and each object schema is in https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.RuntimeCachingEntry
    // so we copy cache.js default config as value of runtimeCaching and change it
    // order of array is important and first match will be effective , so
    // always put rules with larger scope
    publicExcludes: [], // array of patterns(string,regex) that contain glob patterns to exclude files in the public folder from being pre-cached
    // default is [] so all files inside public folder will be pre-cached
    // example: ['!img/super-large-image.jpg', '!fonts/not-used-fonts.otf']
    buildExcludes: [/chunks\/images\/.*$/], // array of patterns(regex,string) to exclude files in .next/static
    // from being pre-cached ,
    // default is [] so all files inside .next/static will be pre-cached
    // example: [/chunks\/images\/.*$/] --> dont pre-cache files in .next/static/chunks/images
  },
});
