const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("fruit.json");
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);

const PORT = 3000;
const LOCAL = "localhost";

server.listen(PORT, () => {
  console.log(`Server running on http://${LOCAL}:${PORT}`);
});
