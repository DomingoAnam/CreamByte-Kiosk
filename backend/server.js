// CreamByte backend — server entrypoint (scaffold)
// TODO: start the HTTP server, register API routes, mount frontend static files.

import "dotenv/config";

const PORT = process.env.PORT || 3000;

// TODO: app.use(express.static(path.join(__dirname, "../frontend")));
// TODO: app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`CreamByte backend listening on port ${PORT}`);
});
