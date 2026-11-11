// CreamByte kiosk — zero-dependency static server
// Serves the repo root so /frontend/src/... paths resolve correctly.
// Usage: node server.js
// Then open: http://localhost:8080/frontend/src/index.html

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    const urlPath = decodeURIComponent(url.pathname);
    const filePath = path.join(ROOT, urlPath);

    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    if (urlPath === "/" || urlPath === "") {
      res.writeHead(301, { Location: "/frontend/src/index.html" });
      res.end();
      return;
    }

    let finalPath = filePath;
    try {
      if (fs.statSync(finalPath).isDirectory()) {
        finalPath = path.join(finalPath, "index.html");
      }
    } catch {
      // fall through to 404
    }

    const data = await fs.promises.readFile(finalPath);
    const ext = path.extname(finalPath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`CreamByte kiosk serving on http://localhost:${PORT}`);
});
