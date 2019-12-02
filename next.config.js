//const withCSS = require('@zeit/next-css');
const withOffline = require("next-offline");

const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const nextConfig = {
  webpack(config, { isServer, buildId, dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

/*     if (!isServer) {
      config.module.rules
        .find(({ test }) => test.test('style.css'))
        .use.push({
          loader: 'css-purify-webpack-loader',
          options: {
            includes: ['./pages/*.js', './components/*.js']
          }
        });
    } */
    
    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next'
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache'
          }
        }
      ]
    };

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions
        }),
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: 'Runa | Performance Evaluation',
          short_name: 'Performance Evaluation',
          description:
            'Web app for performance evaluation in Laboratoria',
          background_color: '#ffffff',
          theme_color: '#5755d9',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          ios: {
            'apple-mobile-web-app-title': 'Performance Evaluation',
            'apple-mobile-web-app-status-bar-style': '#5755d9'
          },
          icons: [
            {
              src: path.resolve('static/favicon.ico'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: '/static'
            }
          ],
          includeDirectory: true,
          publicPath: '..'
        })
      );
    }
    return config;
  }
}

module.exports = withOffline(nextConfig)

/* module.exports = withCSS({

}); */
