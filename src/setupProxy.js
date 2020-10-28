//프록시 서버 설정
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  // Authentication Service
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );

  // Account Service
  app.use(
    "/api/accounts",
    createProxyMiddleware({
      target: "http://localhost:9001",
      changeOrigin: true,
    })
  );

  // Todo Service
  app.use(
    "/api/todos",
    createProxyMiddleware({
      target: "http://localhost:9002",
      changeOrigin: true,
    })
  );

  // Group Service
  app.use(
    "/api/groups",
    createProxyMiddleware({
      target: "http://localhost:9003",
      changeOrigin: true,
    })
  );
};
