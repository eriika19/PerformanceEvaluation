const withCSS = require("@zeit/next-css");
//const withOffline = require("next-offline");
//const { withPlugins, optional } = require("next-compose-plugins");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const path = require("path");

const nextConfig = {
  webpack(config, { isServer, buildId, dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    if (!isServer) {
      config.module.rules
        .find(({ test }) => test.test("style.css"))
        .use.push({
          loader: "css-purify-webpack-loader",
          options: {
            includes: ["./pages/*.js", "./components/*.js"]
          }
        });
    }

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: [".next/static/*", ".next/static/commons/*"],
      modifyUrlPrefix: {
        ".next": "/_next"
      },
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: "NetworkFirst",
          options: {
            cacheName: "offlineCache",
            expiration: {
              maxEntries: 200
            }
          }
        },
        {
          urlPattern: new RegExp("^https://sheetsu.com/apis/v1.0bu/"),
          handler: "staleWhileRevalidate",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [200]
            }
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: "cacheFirst"
        },
        {
          urlPattern: /(results | question)/,
          handler: "NetworkFirst",
          options: {
            cacheableResponse: {
              statuses: [0, 200],
              headers: {
                "x-test": "true"
              }
            }
          }
        }
      ]
    };

    if (!isServer && !dev) {
      const PUBLIC_PATH = "..";

      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions
        }),

        new WebpackPwaManifest({
          filename: "static/manifest.json",
          name: "Runa | Performance Management",
          short_name: "Performance Management",
          description: "Web app for performance management in Laboratoria",
          background_color: "#ffffff",
          theme_color: "#5755d9",
          display: "standalone",
          orientation: "portrait",
          fingerprints: false,
          inject: false,
          start_url: ".",
          ios: {
            "apple-mobile-web-app-title": "Performance Management",
            "apple-mobile-web-app-status-bar-style": "#5755d9"
          },
          icons: [
            {
              src: path.resolve("static/favicon.ico"),
              sizes: [36, 48, 72, 96, 144, 192, 512],
              destination: "/static"
            },
            {
              src: path.resolve("static/favicon.ico"),
              sizes: [120, 152, 167, 180, 1024],
              destination: "/static",
              ios: true
            },
            {
              src: path.resolve("static/favicon.ico"),
              size: 1024,
              destination: "/static",
              ios: "startup"
            }
          ],
          includeDirectory: true,
          publicPath: PUBLIC_PATH
        })
      );
    }
    return config;
  }
};

/* module.exports = withOffline(nextConfig)*/
module.exports = withCSS(nextConfig);

//module.exports = withPlugins([[withCSS], [withOffline]], nextConfig);
