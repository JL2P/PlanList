//프록시 서버 설정
const proxy = require("http-proxy-middleware");
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {

  // Chat;
  app.use(
    "/api/chat",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );

  // Authentication Service
  app.use(
    "/api/auth",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );

  // Account Service
  app.use(
    "/api/accounts",
    createProxyMiddleware({
      target: "http://localhost:9005",
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

  // // Chat;
  // app.use(
  //   "/api/chat",
  //   createProxyMiddleware({
  //     target: "http://localhost:5000",
  //     changeOrigin: true,
  //   })
  // );


};
