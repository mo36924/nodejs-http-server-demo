import { createServer } from "http";

const port = process.env.PORT || 8080;

createServer((_req, res) => {
  const data = `port:${port}\ndate:${new Date().toJSON()}`;
  console.log(data);
  res.end(data);
}).listen(port);
