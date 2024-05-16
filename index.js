const { create, router: _router, defaults } = require("json-server");
require("dotenv").config();
const server = create();
const router = _router(require("./db.js")());
const middlewares = defaults();

const PORT = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running");
});
