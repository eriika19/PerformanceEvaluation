const { createServer } = require("http");
const { parse } = require("url");
const { join } = require("path");
const express = require("express");
const next = require("next");
const cache = require("lru-cache"); // for using least-recently-used based caching

const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new cache({
  max: 20, // not more than 20 results will be cached
  maxAge: 1000 * 60 * 5 // 5 mins
});

app.prepare().then(() => {
  const { get } = express();

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

/*     get("/", (req, res) => {
      renderAndCache(req, res, "/");
    });

    get("/question/:id", (req, res) => {
      const queryParams = { id: req.params.id };
      renderAndCache(req, res, "/question", queryParams);
    }); */

    // handle GET request to /service-worker.js
   // get("*", (req, res) => {
      if (pathname === "/service-worker.js") {
        const filePath = join(__dirname, ".next", pathname);

        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
  //  });
  }).listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = req.url;

  // if page is in cache, server from cache
  if (ssrCache.has(key)) {
    res.setHeader("x-cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // if not in cache, render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // if something wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    ssrCache.set(key, html);

    res.setHeader("x-cache", "MISS");
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
