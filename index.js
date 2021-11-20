import { createServer } from "http";

createServer((_req, res) => {
  const now = new Date().toJSON();
  console.log(now);
  res.end(now);
}).listen(process.env.PORT || 8080);
